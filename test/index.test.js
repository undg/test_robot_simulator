console.log('\n\n\n\n')
const { expect } = require('chai')

const Board = require('./../board.js')

const board = new Board({width: 2, height: 3})

describe('Board', () => {
    it('should be ok', () => {
        expect(board).to.be.ok
    })
})
