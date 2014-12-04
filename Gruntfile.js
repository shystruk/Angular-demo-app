/**
 * Created by v.stokolosa on 12/3/14.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            main: {
                src: [
                    'js/app.js',
                    'js/components.js'
                ],
                dest: 'js/script.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'js/script.min.js': '<%= concat.main.dest %>'
                }
            }
        },
        watch: {
            concat: {
                files: '<%= concat.main.src %>',
                tasks: 'concat'
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //default
    grunt.registerTask('default', ['concat', 'uglify']);
};
