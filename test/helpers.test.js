console.log('\n\n\n\n')
const { expect } = require('chai')
const {safe_position} = require('./../helpers.js')



describe('helpers', () => {
    it('should return safe position', () => {
        expect(safe_position({pos: 1  , max_pos:1 , last_pos:0})).to.eq(1)
        expect(safe_position({pos: 2  , max_pos:1 , last_pos:0})).to.eq(0)
        expect(safe_position({pos: -2 , max_pos:1 , last_pos:0})).to.eq(0)
    })
})
