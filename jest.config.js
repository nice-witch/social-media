require('ts-node').register({
    transpileOnly: true
});

module.exports = require('./config/jest/jest.config').default;