const Login = require("./Login")
// @ponicode
describe("onSubmit", () => {
    let inst

    beforeEach(() => {
        inst = new Login.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onSubmit()
        }
    
        expect(callFunction).not.toThrow()
    })
})
