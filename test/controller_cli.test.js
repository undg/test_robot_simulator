const { expect } = require('chai')
const Controller = require('./../controller_cli.js')


describe('Controller', () => {
    const cli = new Controller(true)
    it('should be ok', () => {
        expect(cli).to.be.ok
    })
    it('should have table', () => {
        expect(cli).to.have.keys('robot','table')
    })
    it('should have place_robot', () => {
        expect(cli.place_robot).to.be.ok
    })
})
