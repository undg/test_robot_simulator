const { expect } = require('chai')
const Controller = require('./../controller_cli.js')


describe('Controller', () => {
    const cli = new Controller()
    it('should be ok', () => {
        expect(cli).to.be.ok
    })
    it('should have init', () => {
        expect(cli.place_robot).to.be.ok
    })
    it('should have table', () => {
        expect(cli.table).to.have.keys('width','height')
    })
})
