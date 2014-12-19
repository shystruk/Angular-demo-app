/**
 * Created by v.stokolosa on 12/3/14.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                    'app/js/locale/translateController.js',
                    'app/modules/account/accountController.js',
                    'app/modules/home/homeController.js',
                    'app/modules/home/login/loginController.js',
                    'app/modules/home/top_menu/topMenuController.js',
                    'app/modules/home/top_menu/topMenuDirective.js',
                    'app/modules/home/top_menu/topMenuService.js',
                    'app/modules/home_slider/homeSliderController.js',
                    'app/modules/home_slider/homeSliderDirective.js',
                    'app/modules/home_slider/homeSliderService.js',
                    'app/modules/comments/commentsDirective.js',
                    'app/modules/comments/commentsService.js',
                    'app/modules/comments/commentsController.js'
                ],
                dest: 'app/public/js/app.js'
            },
            extras: {
                src: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-local-storage/dist/angular-local-storage.min.js',
                    'bower_components/ngstorage/ngStorage.min.js',
                    'bower_components/angular-cookies/angular-cookies.min.js',
                    'bower_components/angular-resource/angular-resource.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-translate/angular-translate.min.js',
                    'bower_components/angular-translate-storage-local/angular-translate-storage-local.min.js',
                    'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js'
                ],
                dest: 'app/public/js/angular.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'app/public/js/app.min.js': '<%= concat.main.dest %>',
                    'app/public/js/angular.min.js': '<%= concat.extras.dest %>'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.config.js'
            }
        },
        protractor: {
            options: {
                configFile: 'protractor.config.js',
                keepAlive: true,
                noColor: false
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

    //without karma, cssmin, imagemin
    grunt.registerTask('test', ['concat', 'uglify', 'imagemin', 'cssmin']);

    //default
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin', 'karma']);
};
