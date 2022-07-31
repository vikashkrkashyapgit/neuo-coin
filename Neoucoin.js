const {Blockchain} = require('./Blockchain.js');
const {Block} = require('./Block.js');

class Neoucoin {

    publish() {
        var coin = new Blockchain()
        coin.addBlock(new Block(1, "26-12-2021", {"name": "vikash", "amount": 10}));
        coin.addBlock(new Block(2, "27-12-2021", {"name": "Noopur", "amount": 15}));
        coin.addBlock(new Block(3, "28-12-2021", {"name": "Sagar", "amount": 20}));
        coin.addBlock(new Block(4, "29-12-2021", {"name": "Akshita", "amount": 1}));
        coin.addBlock(new Block(5, "30-12-2021", {"name": "Rahul", "amount": 10}));
        coin.addBlock(new Block(6, "31-12-2021", {"name": "Nistha", "amount": 90}));

        console.log(JSON.stringify(coin, null, 4));
    }

}

new Neoucoin().publish();