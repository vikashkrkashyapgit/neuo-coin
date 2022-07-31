var md5 = require('md5');

class Block {
    constructor(index, time, data, prevHash = '' ) {
        this.index = index;
        this.data = data;
        this.time = time;
        this.hash = this.calculateHash();
        this.prevHash = prevHash;
    }

    calculateHash() {
        let hashStr = this.index + this.data.toString() + this.time;
        return md5(hashStr);
    }

}

module.exports = {Block};