#!/usr/bin/node
const Board = require('./board.js')

module.exports = class robot {
    constructor({x, y, face}) {
        this.pos = {
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
            width: 5,
            height: 5,
        })

        this.max_x = board.max_x
        this.max_y = board.max_y
    }
    get position() {
        return this.pos
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

        this.position.x = this.safe_position(x, this.max_x, this.position.x)
        this.position.y = this.safe_position(y, this.max_y, this.position.y)
    }

    safe_position = (pos, max_pos, last_pos) =>
        (pos >= 0 && pos <= max_pos)
            ? pos
            : last_pos

    move_on_y_axis = y =>   this.face === "SOUTH" ? y + 1
                            : this.face === "NORTH" ? y - 1
                            : y
    move_on_x_axis = x =>     this.face === "EAST" ? x + 1
                            : this.face === "WEST" ? x - 1
                            : x


}
