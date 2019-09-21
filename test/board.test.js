console.log('\n\n\n\n')
const { expect } = require('chai')

const Board = require('./../board.js')


describe('Board', () => {
    const board = new Board({width: 2, height: 3})
    it('should be ok', () => {
        expect(board).to.be.ok
    })
    it('should return array', () => {
        expect(board.set).to.be.an('array')
    })
    it('should return have 12 elements', () => {
        expect(board.set).to.have.lengthOf(6)
    })
    it('should return array of objects (grid)', () => {
        const grid = [
            {pos: {x: 0, y: 0}},
            {pos: {x: 0, y: 1}},
            {pos: {x: 0, y: 2}},

            {pos: {x: 1, y: 0}},
            {pos: {x: 1, y: 1}},
            {pos: {x: 1, y: 2}},
        ]
        expect(board.set).to.eql(grid)
    })
})
