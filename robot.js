#!/usr/bin/node
const Board = require('./board.js')
const {safe_position} = require('./helpers.js')

module.exports = class robot {
    constructor({x, y, face, table}) {
        this.position = {
            x: !!x ? x : 0,
            y: !!y ? y : 0,
        }
        this.face = face.toUpperCase()
        this.face_directions = [
            "SOUTH",
            "EAST",
            "NORTH",
            "WEST",
        ]

        const board = new Board({
            width: table.width,
            height: table.height,
        })

        this.max_x = board.max_x
        this.max_y = board.max_y
    }
    turn(direction) {
        const turn =  direction === "LEFT"  ? - 1
                    : direction === "RIGHT" ? + 1
                    : "0"

        const face_idx = this.face_directions.indexOf(this.face)
        const len = this.face_directions.length

        // https://stackoverflow.com/a/41274929 brilliant solution
        const new_face_idx = (len + face_idx + turn) % len
        const face = this.face_directions[new_face_idx]

        return face
    }
    get left() {
        this.face = this.turn("LEFT")
    }
    get right() {
        this.face = this.turn("RIGHT")
    }

    get move() {
        let {x, y} = this.position

        x = this.move_on_x_axis(x)
        y = this.move_on_y_axis(y)

        this.position.x = safe_position({pos: x, max_pos: this.max_x, last_pos: this.position.x})
        this.position.y = safe_position({pos: y, max_pos: this.max_y, last_pos: this.position.y})
    }

    move_on_y_axis = y =>     this.face === "SOUTH" ? y + 1
                            : this.face === "NORTH" ? y - 1
                            : y

    move_on_x_axis = x =>     this.face === "EAST" ? x + 1
                            : this.face === "WEST" ? x - 1
                            : x

    get report(){
        return `${this.position.x},${this.position.y},${this.face}`
    }

}
