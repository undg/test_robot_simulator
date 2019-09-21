#!/usr/bin/node

module.exports = class Board {
    constructor({width, height}) {
        this.width  = width
        this.height = height 


        this.max_x  = this.width - 1
        this.max_y  = this.height - 1

    }

    display({x, y, face}) {
        let display_grid = ""

        for( let yy = this.height - 1; yy >= 0; yy--) {
            for( let xx = 0; xx <= this.width - 1; xx++) {
                if( x === xx && y === yy ) {
                    display_grid += "|" + this.arrow(face)
                } else {
                    display_grid += "| "
                }
            }
            display_grid += "|\n"
        }
        
        return display_grid
    }

    arrow(direction) {
        const icon =  direction === "SOUTH" ? "⬆"
                    : direction === "NORTH" ? "⬇"
                    : direction === "WEST"  ? "⬅"
                    : direction === "EAST"  ? "➡"
                    : " "
        return icon
    }
}
