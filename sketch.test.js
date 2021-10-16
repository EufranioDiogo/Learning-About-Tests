const { sum } = require("./sketch.js")

const sketch = require("./sketch")
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
})

// @ponicode
describe("sketch.sum", () => {
    test("0", () => {
        let callFunction = () => {
            sketch.sum(0, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            sketch.sum(0.0, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            sketch.sum(0, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            sketch.sum(0.0, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            sketch.sum("bar", -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            sketch.sum(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
