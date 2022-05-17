const sha256 = require('crypto-js/sha256');

const hash = sha256('adelto').toString();

console.log(hash)