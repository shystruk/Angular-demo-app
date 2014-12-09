/**
 * Created by v.stokolosa on 12/3/14.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            main: {
                src: [
                    'app/js/app.js',
                    'app/js/controller.js',
                    'app/js/directive.js',
                    'app/js/slider/home_slider.js'
                ],
                dest: 'app/js/script.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'app/js/script.min.js': '<%= concat.main.dest %>'
                }
            }
        },
        watch: {
            concat: {
                files: '<%= concat.main.src %>',
                tasks: 'concat'
            }
        },
        connect: {
            test: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    //default
    grunt.registerTask('default', ['concat', 'uglify']);
};
