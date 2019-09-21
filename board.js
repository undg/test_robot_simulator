#!/usr/bin/node

module.exports = class Board {
    constructor({width, height}) {
        this.max_x = !!width ? width : 1
        this.max_y = !!height ? height : 1
    }
    get set() {
        
    }
}

