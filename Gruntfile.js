//Gruntfile
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('bower.json'),
		concat: {
			main: {
				src: [
					'./bower_components/jquery/dist/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./assets/scripts/*.js'
				],
				dest: './html/js/script.js'
			}
		},
		uglify: {
			main: {
				files: {
					'./html/js/script.min.js': '<%= concat.main.dest %>'
				}
			}
		},
		copy: {
			js: {
				files: [
					{
						expand: false,
						src: './bower_components/angular/angular.min.js',
						dest: './html/js/angular.min.js'

					}
				]
			},
			css: {
				files: [
					{
						expand: false,
						src: './bower_components/bootstrap/dist/css/bootstrap.min.css',
						dest: './html/css/bootstrap.css'

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
					'./bower_components/angular/angular.min.js',
					'./assets/scripts/app.js'
				],
				tasks: ['concat', 'copy', 'uglify'],     //tasks to run
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
		},

		clean: {
			dist: {
				src: ["./html/css/", "./html/js/"]
			}
		}
	});

	// Plugin loading
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Task definition
	grunt.registerTask('default', ['less', 'concat', 'copy', 'watch']);
	grunt.registerTask('build', ['less', 'concat', 'copy', 'uglify']);


};