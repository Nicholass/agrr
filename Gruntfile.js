module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\r\n\r\n"
			},
			dist:{
				files: {
					'./html/css/cex.css': [
						'./html/css/cex/import.css'

					],
					'./html/js/bootstrap.js': [
						'./html/js/bootstrap2/transition.js'
					]
				}
			}
		},
		copy: {
			main: {
				files: [
					{expand: false, src:'./html/js/bootstrap.js', dest: './html/scripts/bootstrap.js' }
					//{expand: true, cwd: './scripts/async/', src: ['**'], dest: './www/js/ng/async/'}
					// includes files within path and its sub-directories
					//{expand: true, src: ['path/**'], dest: 'dest/'},
					// makes all src relative to cwd
					//{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
					// flattens results to a single level
					//{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'}
				]
			}
		},
		jshint: {
			all: ['Gruntfile.js', './html/scripts/trade.js']
		},
		watch: {
			cexcss : {
				files: ['./html/css/cex/*.css', './html/css/signup-modals.css', './html/js/bootstrap2/*.js'],
				tasks: ['concat', 'copy']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('js-hint', ['jshint']);
	grunt.registerTask('default', ['concat', 'copy', 'watch']);
	grunt.registerTask('build', ['concat', 'copy']);
};