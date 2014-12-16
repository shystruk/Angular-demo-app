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
                dest: 'app/public/css/style.min.css'
            }
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 7
                },
                files: {
                    'app/public/image/arrow-left.png': 'app/image/arrow-left.png',
                    'app/public/image/arrow-right.png': 'app/image/arrow-right.png',
                    'app/public/image/flags/de.png': 'app/image/flags/de.png',
                    'app/public/image/flags/en_US.png': 'app/image/flags/en_US.png',
                    'app/public/image/flags/fr.png': 'app/image/flags/fr.png',
                    'app/public/image/flags/uk_UA.png': 'app/image/flags/uk_UA.png'
                }
            }
        },
        concat: {
            main: {
                src: [
                    'app/js/app.js',
                    'app/js/filter.js',
                    'app/js/locale/translations.js',
                    'app/modules/account/accountController.js',
                    'app/modules/home/homeController.js',
                    'app/modules/home/login/loginController.js',
                    'app/modules/home/top_menu/topMenuController.js',
                    'app/modules/home/top_menu/topMenuDirective.js',
                    'app/modules/home/top_menu/topMenuService.js',
                    'app/modules/home_slider/homeSliderController.js',
                    'app/modules/home_slider/homeSliderDirective.js',
                    'app/modules/home_slider/homeSliderService.js'
                ],
                dest: 'app/public/js/app.js'
            },
            extras: {
                src: [
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular-cookies/angular-cookies.min.js',
                    'node_modules/angular-resource/angular-resource.min.js',
                    'node_modules/angular-route/angular-route.min.js',
                    'node_modules/angular-translate/dist/angular-translate.min.js'
                ],
                dest: 'app/public/js/angular.js'
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
                dest: 'app/public/js/angular.annotated.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'app/public/js/app.min.js': '<%= concat.main.dest %>',
                    'app/public/js/angular.min.js': '<%= concat.extras.dest %>'
//                    'app/js/grunt_files/angular.annotated.min.js': '<%= concat.angular.dest %>'
                }
            }
        },
        karma: {
            unit: {
//                options: {
//                    frameworks: ['jasmine'],
//                    singleRun: true,
//                    browsers: ['Firefox'],
//                    files: [
//                        'app/public/js/angular.min.js',
//                        'bower_components/angular-mocks/angular-mocks.js',
//                        'app/public/js/app.min.js',
//                        'test/spec/**/*.js'
//                    ]
//                }
                configFile: 'karma.config.js'
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
    grunt.loadNpmTasks('grunt-karma');

    //default
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin', 'karma']);
};
