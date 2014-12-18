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
    }
};
