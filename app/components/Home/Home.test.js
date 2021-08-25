const Home = require("./Home")
// @ponicode
describe("onSubmit", () => {
    let inst

    beforeEach(() => {
        inst = new Home.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onSubmit()
        }
    
        expect(callFunction).not.toThrow()
    })
})
