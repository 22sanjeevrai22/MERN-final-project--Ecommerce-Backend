
const {createWriteStream} = require('fs');

const myTransport = (options) => {
    // console.log(options.destination)
    return createWriteStream(options.destination);
};

module.exports = myTransport;