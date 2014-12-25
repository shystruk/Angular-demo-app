// Karma configuration
// Generated on Tue Dec 16 2014 17:04:39 GMT+0200 (FLE Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        //plugins
        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-htmlfile-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.html': ['ng-html2js']
        },

        // list of files / patterns to load in the browser
        files: [
            'app/public/js/angular.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/public/js/app.min.js',
            'app/modules/**/**/*.html',
            'app/modules/**/*.html',
            'test/spec/**/*.test.js',
            'test/spec/**/**/*.test.js'
        ],

        proxies: {
            '/app/image/': 'http://localhost:8888/app/image',
            '/app/public/image/': 'http://localhost:8888/app/public/image'
        },

        // list of files to exclude
        exclude: [
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'html'],

        //file where we will see results
        htmlReporter: {
            outputFile: 'test/units.html'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
