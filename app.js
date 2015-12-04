// modules
var _, _str, flags, fs, util, wrench,
// locals
files, format, onRead;

_ = require('underscore');
_str = require('underscore.string');
flags = require('flags');
fs = require('fs');
util = require('util');
wrench = require('wrench');


format = 'git rm --cached %s';
onRead = function(fileNames) {
	var prunedFiles, strOutput;

	prunedFiles = [];
	_.each(fileNames, function(name, i) {
	    var isFile, isGit;
	    isGit = _str.contains(name, '.git');
     	isFile = fs.lstatSync(flags.get('folder') + '/' + name).isFile();
	    if(!isGit && isFile) prunedFiles.push(name);
	});
	strOutput = util.format(flags.get('template'), prunedFiles.join(' '));
	fs.writeFile(flags.get('output'), strOutput, function() {
		console.log('Complete', prunedFiles);
	});	
};

// define flags
flags.defineString('folder', './', 'the folder to read');
flags.defineString('output', '../exclude.txt', 'the output file');
flags.defineString('template', format, 'the template for the output %s is position at which the value of the read op is inserted');
flags.parse();

//wrench logic

// Recursively read directories contents
files = wrench.readdirSyncRecursive(flags.get('folder'));

//output the goodies
onRead(files);




