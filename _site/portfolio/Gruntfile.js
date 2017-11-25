module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/default.css': 'css/default.scss'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'css/output.css': ['bootstrap/css/bootstrap.min.css', 'css/default.css']
        }
      }
    },
    uglify: {
      build: {
        src: 'js/app.js',
        dest: 'js/app.min.js'
      }
    },
    concat: {
      options: {
        separator: ';'+"\n"
      },
      dist: {
        src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js', 'js/app.min.js'],
        dest: 'js/output.js'
      }
    },
    watch:{
      sass: {
        files: ['css/*.scss'],
        tasks: ['sass'],
		options: {
		  livereload: 63342
		}
      },
      css: {
        files: ['css/default.css'],
        tasks: ['cssmin:combine'],
		options: {
		  livereload: 63342
		}
      },
      scripts: {
        files: ['js/app.js'],
        tasks: ['uglify', 'concat'],
		options: {
		  livereload: 63342
		}
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');


  //grunt.loadNpmTasks('grunt-contrib-less');




  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'concat']);

};
