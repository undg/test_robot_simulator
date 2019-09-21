#!/usr/bin/node

module.exports = class Board {
    constructor({width, height}) {
        this.width  = !!width ? width : 1
        this.height = !!height ? height : 1

        this.max_x  = this.width - 1
        this.max_y  = this.height - 1
    }
    get set() {
        const grid = new Array()

        for( let x = 0; x <= this.max_x; x++) {
            for( let y = 0; y <= this.max_y; y++) {
                const pos = {x: x, y: y}
                grid.push({pos: pos})
            }
        }

        return grid
    }
}
