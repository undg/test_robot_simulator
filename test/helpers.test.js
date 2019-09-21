const { expect } = require('chai')
const {
    safe_position,
    safe_direction,
} = require('./../helpers.js')



describe('helpers', () => {
    it('should return safe position', () => {
        expect(safe_position({pos: 1  , max_pos:1 , last_pos:0})).to.eq(1)
        expect(safe_position({pos: 2  , max_pos:1 , last_pos:0})).to.eq(0)
        expect(safe_position({pos: -2 , max_pos:1 , last_pos:0})).to.eq(0)
    })
    it('should check if direction is ok', () => {
        expect(safe_direction({direction: "SOUTH"})).to.be.ok
        expect(safe_direction({direction: "WEST"})).to.be.ok
        expect(safe_direction({direction: "NORTH"})).to.be.ok
        expect(safe_direction({direction: "EAST"})).to.be.ok
    })
    it('should check if direction is NOT ok', () => {
        expect(safe_direction({direction: "SOUT"})).to.not.be.ok
        expect(safe_direction({direction: "WET"})).to.not.be.ok
        expect(safe_direction({direction: "NOH"})).to.not.be.ok
        expect(safe_direction({direction: "EAS"})).to.not.be.ok
    })
})
