const {Block} = require('./Block.js');

class Blockchain {
    
    constructor() {
        this.blocks = [this.genesisBlock()]
    }

    genesisBlock() {
        return new Block(0, "startingblock", "25-12-2021")
    }

    addBlock(block) {
        block.prevHash = this.getLatestBlock().hash;
        this.blocks.push(block);
    }

    getLatestBlock() {
        return this.blocks[this.blocks.length - 1];
    }

}

module.exports = {Blockchain}