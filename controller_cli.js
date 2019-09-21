const Robot = require('./robot.js')
const {
    safe_position,
    safe_direction,
} = require('./helpers.js')

class Controller_cli {
    constructor() {
        this.robot = {}
        this.table = {width: 5, height: 5} // it is hardcoded, but can be lifted up
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
                        safe_position({pos: pos[0], max_pos: this.table.width,  last_pos: false})
                        && safe_position({pos: pos[1], max_pos: this.table.height, last_pos: false})
                    )) { throw "error" }
                    if( !safe_direction({direction: pos[2]})) { throw "error" }

                    this.place_robot( pos[0], pos[1], pos[2])
                } catch (err) {
                    console.log(err)
                    console.log(`invalid format?. PLACE X,Y,FACE\n
                    X: number 1-${this.table.width}
                    Y: number 1-${this.table.height}
                    FACE: "SOUTH", "EAST", "NORTH", "WEST"
                    `)
                }
            }

            if(cmd[0] === 'LEFT') { this.robot.left }
            if(cmd[0] === 'RIGHT') { this.robot.right }
            if(cmd[0] === 'MOVE') { this.robot.move }
            if(cmd[0] === 'REPORT') { console.log(this.robot.report) }
        });
    }

    place_robot(X, Y, FACE) {
        this.robot = new Robot({
            x: X,
            y: Y,
            face: FACE,
            table: {
                width: this.table.width,
                height: this.table.height,
            },
        })
    }
}
module.exports = Controller_cli
