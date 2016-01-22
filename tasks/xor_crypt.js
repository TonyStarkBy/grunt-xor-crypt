/*
 * grunt-xor-crypt
 * https://github.com/TonyStarkBy/grunt-xor-crypt
 *
 * Copyright (c) 2016 Tony Stark
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('xor_crypt', 'Simple file encrypt with xor', function() {
    var options = this.options({
      xorKey: 'secretkey'
    });

    function xor(content, key) {
      var contentLength = content.length;
      var keyLength = key.length;
      var result = new Buffer(contentLength);

      for (var i = 0; i < contentLength; i++) {
        var currentKeyChar = key[i % keyLength];
        result[i] = content[i] ^ currentKeyChar.charCodeAt(0);
      }

      return result;
    };

    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source
        return grunt.file.read(filepath, { encoding: null });
      });

      var data = Buffer.concat(src);
      var encryptedData = xor(data, options.xorKey);

      // Write the destination file.
      grunt.file.write(f.dest, encryptedData);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};