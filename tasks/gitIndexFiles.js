/*
 * grunt-git-index-files
 * https://github.com/tonai/grunt-git-index-files
 *
 * Copyright (c) 2015 Tony Cabaye
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path');

  grunt.registerMultiTask(
    'gitIndexFiles',
    'Filters files set from other tasks into git index files only.,
    function() {

      // Merge task-specific and/or target-specific options with these defaults.
      var options = this.options({
        workTree: '.',
        gitDir: './.git',
        configSrcPath : []
      });
      var done = this.async();

      if (options.configSrcPath.length > 0) {

        // Spawn a child process for the Git command.
        grunt.util.spawn({
          cmd: 'git',
          args: ['--git-dir=' + options.gitDir, '--work-tree=' + options.workTree, 'diff-index', '--cached', '--name-only', 'HEAD']
        }, function (error, result, code) {
          var files = [];

          if (code === 0) {
            result.stdout.split("\n").forEach(function(file){
              files.push(path.resolve(options.workTree, file));
            });
            options.configSrcPath.forEach(function(configName){
              grunt.config.set(configName, grunt.file.match(grunt.config.get(configName), files));
            });
          } else {
            grunt.log.write(result.stderr);
          }

          done();
        });

      } else {
        done();
      }

    }
  );
};
