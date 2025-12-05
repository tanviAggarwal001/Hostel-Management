// jest.setup.js
// Use Node's built-in util.TextEncoder/TextDecoder (available in Node 11+)
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;
