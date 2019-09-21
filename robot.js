#!/usr/bin/node

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

        // https://stackoverflow.com/a/41274929
        const new_face_idx = (face_idx + turn + len) % len
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
        x =   this.face === "EAST" ? x + 1
            : this.face === "WEST" ? x - 1
            : x

        y =   this.face === "SOUTH" ? y + 1
            : this.face === "NORTH" ? y - 1
            : y

        this.position.x = x
        this.position.y = y
    }
}
