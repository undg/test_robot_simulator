const Robot = require('./robot.js')
const {
    safe_position,
    safe_direction,
} = require('./helpers.js')

class Controller_cli {
    constructor(tdd) {
        this.robot = false
        this.table = {width: 5, height: 5} // it is hardcoded, but can be lifted up
        if(!tdd) {
            this.help
        }
    }

    get init() {
        const stdin = process.openStdin()
        stdin.addListener("data", d => {
            let cmd = d.toString().trim().toUpperCase()
            cmd = cmd.split(' ').length ? cmd.split(' ') : cmd
            if(cmd[0] === 'PLACE') {
                try {
                    const pos = cmd[1].split(',')

                    if( !(
                           safe_position({pos: +pos[0], max_pos: this.table.width,  last_pos: false})
                        && safe_position({pos: +pos[1], max_pos: this.table.height, last_pos: false})
                    )) { throw "error" }
                    if( !safe_direction({direction: pos[2]})) { throw "error" }

                    this.place_robot( pos[0], pos[1], pos[2])
                } catch (err) {
                    console.log(err)
                    this.help
                }
            }

            else if(cmd[0] === 'LEFT') { this.left }
            else if(cmd[0] === 'RIGHT') { this.right }
            else if(cmd[0] === 'MOVE') { this.move }
            else if(cmd[0] === 'REPORT') { this.report }
            else if(cmd[0] === 'HELP') { this.help }
            else { this.help }
        });
    }

    place_robot(X, Y, FACE) {
        console.clear()
        this.robot = new Robot({
            x: X,
            y: Y,
            face: FACE,
            table: {
                width: this.table.width,
                height: this.table.height,
            },
        })
        this.grid
    }

    get left() {
        console.clear()
        this.robot.left
        this.grid
    }
    get right() {
        console.clear()
        this.robot.right
        this.grid
    }
    get move() {
        console.clear()
        this.robot.move
        this.grid
    }
    get report() {
        console.log(this.robot.report.raw)
    }
    get grid() {
        if(this.robot) {
            console.log('type HELP for all commands')
            console.log(this.robot.report.grid)
        }
    }

    get help() {
        console.clear()
        this.grid

        console.log(`start with command:
        PLACE X,Y,FACE\n
            X: number 0-${this.table.width - 1}
            Y: number 0-${this.table.height - 1}
            FACE: SOUTH, EAST, NORTH, WEST
        Other commands: LEFT, RIGHT, MOVE, REPORT, GRID, HELP
        `)
    }
}
module.exports = Controller_cli
