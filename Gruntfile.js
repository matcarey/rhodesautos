/**
 * Gruntfile.js
 */
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-composer');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    php: {
      dist: {
        options: {
          port: 8000,
          base: 'web',
          open: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'web/src/style.css' : 'style/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'style/style.scss',
        tasks: ['sass']
      }
    },
  });
  grunt.loadNpmTasks('grunt-php');
  grunt.loadNpmTasks('grunt-phplint');
  grunt.loadNpmTasks('grunt-phpunit');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['sass', 'php', 'watch']);
  grunt.registerTask('build', ['sass']);
};
