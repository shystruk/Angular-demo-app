/**
 * Created by v.stokolosa on 12/3/14.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
//        ngAnnotate: {
//            options: {
//                singleQuotes: true,
//                remove: true
//            },
//            app: {
//                files: [
//                    {
//                        expand: true,
//                        src: [
//                            'app/js/app.js',
//                            'app/js/services.js',
//                            'app/js/controller.js',
//                            'app/js/directive.js',
//                            'app/js/slider/home_slider.js',
//                            'app/js/locale/translations.js'
//                        ],
//                        ext: 'grunt_files/.annotated.js',
//                        extDot: 'last'
//                    }
//                ]
//            }
//        },
        cssmin: {
            css: {
                src: 'app/css/*.css',
                dest: 'app/css/grunt_file/style.min.css'
            }
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 7
                },
                files: {
                    'app/image/grunt_file/arrow-left.png': 'app/image/arrow-left.png',
                    'app/image/grunt_file/arrow-right.png': 'app/image/arrow-right.png',
                    'app/image/grunt_file/flags/de.png': 'app/image/flags/de.png',
                    'app/image/grunt_file/flags/en_US.png': 'app/image/flags/en_US.png',
                    'app/image/grunt_file/flags/fr.png': 'app/image/flags/fr.png',
                    'app/image/grunt_file/flags/uk_UA.png': 'app/image/flags/uk_UA.png'
                }
            }
        },
        concat: {
            main: {
                src: [
                    'app/js/app.js',
                    'app/js/services.js',
                    'app/js/controller.js',
                    'app/js/directive.js',
                    'app/js/slider/home_slider.js',
                    'app/js/locale/translations.js'
                ],
                dest: 'app/js/grunt_files/app.js'
            },
            extras: {
                src: [
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular/angular-cookies.min.js',
                    'node_modules/angular/angular-resource.min.js',
                    'node_modules/angular/angular-route.min.js',
                    'node_modules/angular/angular-translate.min.js'
                ],
                dest: 'app/js/grunt_files/angular.js'
            },
            angular: {
                src: [
                    'app/js/app.annotated.js',
                    'app/js/controller.annotated.js',
                    'app/js/services.annotated.js',
                    'app/js/directive.annotated.js',
                    'app/js/locale/translations.annotated.js',
                    'app/js/slider/home_slider.annotated.js'
                ],
                dest: 'app/js/grunt_files/angular.annotated.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'app/js/grunt_files/app.min.js': '<%= concat.main.dest %>',
                    'app/js/grunt_files/angular.min.js': '<%= concat.extras.dest %>'
//                    'app/js/grunt_files/angular.annotated.min.js': '<%= concat.angular.dest %>'
                }
            }
        },
        watch: {
            concat: {
                files: '<%= concat.main.src %>',
                tasks: 'concat'
            },
            uglify: {
                files: '<%= concat.main.src %>',
                tasks: 'uglify'
            },
            cssmin: {
                files: '<%= cssmin.css.src %>',
                tasks: 'cssmin'
            }
        }
    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //default
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin']);
};
