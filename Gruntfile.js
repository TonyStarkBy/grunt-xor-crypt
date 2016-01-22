/*
 * grunt-xor-crypt
 * https://github.com/TonyStarkBy/grunt-xor-crypt
 *
 * Copyright (c) 2016 Tony Stark
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    xor_crypt: {
      default_options: {
        options: {
          xorKey: '$Our2Producers5Use5Hard6Drugs$And#Always#Stoned$'
        },
        files: {
          'tmp/test1.enc': 'tmp/test1.txt',
          'tmp/test1_decoded.txt': 'tmp/test1.enc'
        }
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['xor_crypt']);

};
