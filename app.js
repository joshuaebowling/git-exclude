// modules
var _, _str, flags, fs, util, wrench,
// locals
files, filesExclusions, format, onRead;

_ = require('underscore');
_str = require('underscore.string');
flags = require('flags');
fs = require('fs');
util = require('util');
wrench = require('wrench');
// read the file contents of dont-exlude flag if one is provided

format = 'git rm --cached %s';
onRead = function(fileNames) {
	var filesAfterDifference, prunedFiles, strOutput;

	prunedFiles = [];
	_.each(fileNames, function(name, i) {
	    var isFile, isGit;
	    isGit = _str.contains(name, '.git');
     	isFile = fs.lstatSync(flags.get('folder') + '/' + name).isFile();
	    if(!isGit && isFile) prunedFiles.push(name);
	});
	filesAfterDifference = _.difference(prunedFiles, filesExclusions);
	strOutput = util.format(flags.get('template'), filesAfterDifference.join(' '));
	fs.writeFile(flags.get('output'), strOutput, function() {
//		console.log(_.intersection(prunedFiles, filesExclusions));
	});	
};

// define flags
flags.defineString('folder', './', 'the folder to read');
flags.defineString('output', '../exclude.txt', 'the output file');
flags.defineString('template', format, 'the template for the output %s is position at which the value of the read op is inserted');
flags.defineString('dont-exclude', null, 'the file that contains files names (with a single space between each file name) that should NOT be excluded by git');
flags.parse();


// Recursively read directories contents
files = wrench.readdirSyncRecursive(flags.get('folder'));
// if there's a dont-exclude flag then read it as file and return the contents as an array
filesExclusions = flags.get('dont-exclude') ? fs.readFileSync(flags.get('dont-exclude'), 'utf8').split(' ') :  [];

console.log('fw>>',filesExclusions);
//output the goodies
onRead(files);




