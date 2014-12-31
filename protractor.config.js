var HtmlReporter = require('protractor-html-screenshot-reporter');

var reporter = new HtmlReporter ({
    baseDirectory: './test/e2e_test/protractor-result', // a location to store screen shots.
    docTitle: 'Protractor Demo Reporter',
    docName: 'protractor-demo-tests-report.html'
});

exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'test/e2e_test/**/*.e2e.test.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'http://localhost:8888/#/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutinterval: 30000,
        showColors: true
    },

    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    }
};
