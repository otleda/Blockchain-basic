const Block = require('./Block')

module.export = class Blockchain {
  
    constructor() {
        this.blocks = [ new Block() ]
        this.nextIndex = 1
    }

    // Pegando a ultima hash do bloco
    getLastHash() {
        this.blocks[this.blocks.length - 1].hash
    }

    // Adicionando os dados no bloco
    addBlock(data) {
        lastHash = this.getLastHash()
        const block = new Block(this.nextIndex, lastHash, data) 

        this.nextIndex++
        this.blocks.push(block)
    }
}