const { expect } = require('chai')

const Robot = require('./../robot.js')


describe('Robot TDD', () => {
    const robot = new Robot({
        x: 1,
        y: 2,
        face: "East",
        table: {width: 5, height: 5},
    })
    it('should be ok', () => {
        expect(robot).to.be.ok
    })
    it('should set initial position of robot ({x: 1, y: 2})', () => {
        expect(robot.position).to.eql({x: 1, y: 2})
    })
    it('should set initial direction to "EAST"', () => {
        expect(robot.face).to.eq("EAST")
    })
    it('should return new direction (east->south)', () => {
        expect(robot.turn("LEFT")).to.eq("SOUTH")
    })
    it('should return new direction (east->north)', () => {
        expect(robot.turn("RIGHT")).to.eq("NORTH")
    })

    it('should change direction (east->south->west... and so on)', () => {
        robot.left
        expect(robot.face).to.eq("SOUTH")
        robot.left
        expect(robot.face).to.eq("WEST")
        robot.left
        expect(robot.face).to.eq("NORTH")
        robot.left
        expect(robot.face).to.eq("EAST")
    })
    it('should change direction (east->south->west... and so on)', () => {
        robot.right
        expect(robot.face).to.eq("NORTH")
        robot.right
        expect(robot.face).to.eq("WEST")
        robot.right
        expect(robot.face).to.eq("SOUTH")
        robot.right
        expect(robot.face).to.eq("EAST")
    })

    it('should change position', () => {
        robot.move
        expect(robot.position).to.eql({x:2, y:2})
        robot.move
        expect(robot.position).to.eql({x:3, y:2})
    })

    it('should get max_x from Board', () => {
        expect(robot.max_x).to.eq(4)
    })
    it('should get max_y from Board', () => {
        expect(robot.max_y).to.eq(4)
    })

    it('should report position', () => {
        expect(robot.report).to.eq('3,2,EAST')
    })
})



describe('Robot integrational', () => {
    it('should travel here and there', () => {
        const r2d2 = new Robot({
            x: 1, y: 2,
            face: "East",
            table: {width: 5, height: 5},
        })
        r2d2.right
        expect(r2d2.face).to.eq("NORTH")
        r2d2.move
        expect(r2d2.position).to.eql({x:1, y:1})
        r2d2.move
        expect(r2d2.position).to.eql({x:1, y:0})
        r2d2.left
        expect(r2d2.face).to.eq("EAST")
        r2d2.move
        r2d2.move
        r2d2.move
        expect(r2d2.position).to.eql({x:4, y:0})
        r2d2.left
        r2d2.move
        r2d2.move
        r2d2.move
        r2d2.move
        expect(r2d2.position).to.eql({x:4, y:4})
    })
    it('should not travel outside board grid', () => {
        const r3d2 = new Robot({
            x: 0, y: 0,
            face: "north",
            table: {width: 5, height: 5},
        })
        r3d2.move
        expect(r3d2.position).to.eql({x:0, y:0})
        expect(r3d2.report).to.eq('0,0,NORTH')
        r3d2.right
        r3d2.move
        expect(r3d2.position).to.eql({x:0, y:0})
        expect(r3d2.report).to.eq('0,0,WEST')
        r3d2.right
        r3d2.move
        r3d2.move
        expect(r3d2.report).to.eq('0,2,SOUTH')
        r3d2.move
        r3d2.move
        r3d2.move
        r3d2.move
        r3d2.move
        r3d2.move
        expect(r3d2.position).to.eql({x:0, y:4})
        expect(r3d2.report).to.eq('0,4,SOUTH')
        r3d2.right
        r3d2.move
        r3d2.move
        r3d2.move
        r3d2.move
        r3d2.move
        r3d2.move
        r3d2.move
        r3d2.move
        expect(r3d2.position).to.eql({x:4, y:4})
        expect(r3d2.report).to.eq('4,4,EAST')
    })
})
