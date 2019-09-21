const Board = require('./board.js')
const {safe_position} = require('./helpers.js')

module.exports = class robot {
    constructor({x, y, face, table}) {
        this.position = {
            x: +x,
            y: +y,
        }
        this.face = face.toUpperCase().trim()

        this.face_directions = [
            "SOUTH",
            "EAST",
            "NORTH",
            "WEST",
        ]

        this.board = new Board({
            width: table.width,
            height: table.height,
        })

        this.max_x = this.board.max_x
        this.max_y = this.board.max_y

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


    move_on_y_axis(pos) {
        if(this.face === "SOUTH") {
            pos++
        }
        if(this.face === "NORTH") {
            pos--
        }
        return pos
    }

    move_on_x_axis(pos) {
        if(this.face === "EAST") {
            pos++
        }
        if(this.face === "WEST") {
            pos--
        }
        return pos
    }

    get report(){
        const grid = this.board.display({
            x: this.position.x,
            y: this.position.y,
            face: this.face,
        })
        const report = `${this.position.x},${this.position.y},${this.face}`

        return {
            grid: grid,
            raw: report,
        }
    }

}
