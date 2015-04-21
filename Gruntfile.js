//Gruntfile
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('bower.json'),
		concat: {
			js: {
				src: [
					'./bower_components/jquery/dist/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./assets/scripts/*.js'
				],
				dest: './html/js/script.js'
			},
			css: {
				src: [
					'./bower_components/bootstrap/dist/css/bootstrap.min.css',
					"./html/css/main.css"
				],
				dest: "./html/css/agrr.css"
			}
		},
		uglify: {
			main: {
				files: {
					src: '<%= concat.main.dest %>',
					dest: './html/js/script.min.js'
				}
			}
		},
		copy: {
			main: {
				files: [
					{
						expand: false,
						src: './bower_components/angular/angular.min.js',
						dest: './html/js/angular.min.js'

					}
				]
			}
		},

		less: {
			main: {
				options: {
					compress: true  //minifying the result
				},
				files: {
					//compiling frontend.less into frontend.css
					"./html/css/main.css":"./assets/stylesheets/main.less"
				}
			}
		},


		watch: {
			js: {
				files: [
					//watched files
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./assets/scripts/app.js'
				],
				tasks: ['concat:js','uglify'],     //tasks to run
				options: {
					livereload: true                        //reloads the browser
				}
			},
			less: {
				files: ['./assets/stylesheets/*.less'],  //watched files
				tasks: ['less'],                          //tasks to run
				options: {
					livereload: true                        //reloads the browser
				}
			}
		}
	});

	// Plugin loading
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Task definition
	grunt.registerTask('default', ['concat', 'less', 'uglify', 'watch']);
	grunt.registerTask('build', ['concat', 'copy', 'less']);


};