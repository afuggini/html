module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: 35729
      },
      css: {
        files: [
          '**/*.less',
          // '**/*.sass',
          // '**/*.scss'
        ],
        tasks: ['less'] // 'compass' for .sass
      },
      livereload: {
        files: ['*.html', '*.php', 'js/*.js', 'img/*.{png,jpg,jpeg,gif,webp,svg}']
      }
    },
    less: {
      development: {
        options: {
          paths: ["less"]
        },
        files: {
          "css/app.css": "less/app.less"
        }
      },
      production: {
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'assets/sass',
          cssDir: 'assets/css',
          outputStyle: 'compressed'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'js/*.js']
    },
    browserSync: {
      files: {
        src : [
          'css/*.css',
          'img/*',
          'js/*.js',
          '**/*.html'
        ],
      },
      options: {
        watchTask: true
      }
    },
    uglify: {
      options: {
        preserveComments: 'some'
      },
      bootstrap: {
        src: [
          'js/bootstrap/transition.js',
          'js/bootstrap/alert.js',
          'js/bootstrap/button.js',
          'js/bootstrap/carousel.js',
          'js/bootstrap/collapse.js',
          'js/bootstrap/dropdown.js',
          'js/bootstrap/modal.js',
          'js/bootstrap/tooltip.js',
          'js/bootstrap/popover.js',
          'js/bootstrap/scrollspy.js',
          'js/bootstrap/tab.js',
          'js/bootstrap/affix.js'
        ],
        dest: 'js/bootstrap.min.js'
      }
    },
    concat: {
      bootstrap: {
        src: [
          'js/bootstrap/transition.js',
          'js/bootstrap/alert.js',
          'js/bootstrap/button.js',
          'js/bootstrap/carousel.js',
          'js/bootstrap/collapse.js',
          'js/bootstrap/dropdown.js',
          'js/bootstrap/modal.js',
          'js/bootstrap/tooltip.js',
          'js/bootstrap/popover.js',
          'js/bootstrap/scrollspy.js',
          'js/bootstrap/tab.js',
          'js/bootstrap/affix.js'
        ],
        dest: 'js/bootstrap.min.js'
      }
    }
  });

  // Register the default tasks.
  grunt.registerTask('default', ['uglify', 'browserSync', 'watch']);
};
