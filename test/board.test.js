const { expect } = require('chai')

const Board = require('./../board.js')


describe('Board', () => {
    const board = new Board({width: 2, height: 3})
    it('should be ok', () => {
        expect(board).to.be.ok
    })

    it('should have width as a number', () => {
        expect(board.width).to.be.an('number')
    })
    it('should have height as a number', () => {
        expect(board.height).to.be.an('number')
    })

    it('should have max_x as a number', () => {
        expect(board.max_x).to.be.an('number')
    })
    it('should have max_y as a number', () => {
        expect(board.max_y).to.be.an('number')
    })


    describe('display()', () => {
        const board = new Board({width: 2, height: 3})
        it('should be ok', () => {
            expect(board.display({x:1, y:1, face: "SOUTH"})).to.be.ok
        })
        it('should show correct position', () => {
            expect(board.display({x:0, y:0, face: "SOUTH"})).to.eql("| | |\n| | |\n|⬆| |\n")
            expect(board.display({x:1, y:1, face: "SOUTH"})).to.eql("| | |\n| |⬆|\n| | |\n")
        })
        it('should show cossect direction', () => {
            expect(board.display({x:0, y:2, face: "SOUTH"})).to.eql("|⬆| |\n| | |\n| | |\n")
            expect(board.display({x:0, y:2, face: "NORTH"})).to.eql("|⬇| |\n| | |\n| | |\n")
            expect(board.display({x:0, y:2, face: "WEST"})).to.eql("|⬅| |\n| | |\n| | |\n")
            expect(board.display({x:0, y:2, face: "EAST"})).to.eql("|➡| |\n| | |\n| | |\n")
        })
    })
})
