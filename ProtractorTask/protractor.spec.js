exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['bin/spec.js'],
    baseUrl: 'http://booking.com'
}