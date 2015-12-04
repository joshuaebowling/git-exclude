// modules
var _, _str, flags, fs, util, wrench,
// locals
files, format, onRead, notToRead;

_ = require('underscore');
_str = require('underscore.string');
flags = require('flags');
fs = require('fs');
util = require('util');
wrench = require('wrench');

files = [];
notToRead = [];
format = 'git rm --cached %s';
onRead = function(fileNames) {
	var strOutput = util.format(format, fileNames.join(' '));
	fs.writeFile(flags.get('output'), strOutput, function() {
		console.log('Complete');
	});	
};

// define flags
flags.defineString('folder', './', 'the folder to read');
flags.defineString('output', '../exclude.txt', 'the output file');

flags.parse();

//wrench logic

// Recursively read directories contents
files = wrench.readdirSyncRecursive(flags.get('folder'));
onRead(files);
 //function(error, curFiles) {
//	onRead(curFiles);    
//});





