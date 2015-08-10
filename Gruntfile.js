module.exports = function (grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    bowerInstall: {   
      target: {
        src: [
          'public/index.html'
        ]
      }
    },
    express: {
      dev: {
        options: {
          script: 'bin/www'
        }
      }
    },
    watch: {
      express: {
        files:  [ '**/*.js', '**/*.coffee' ],
        tasks:  [ 'coffee', 'express:dev' ],
        options: {
          spawn: false
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'public/js/data.js': 'public/js/data.coffee'
        }
      }
    }
    
  });
  
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task(s).
  grunt.registerTask('default', [ 'coffee', 'express:dev', 'watch' ]);

};