let Calculator = require("../functions/calculator")

describe("Testing sum in calculator", () => { 

  test("test sum even number", () => {
    const calculator = new Calculator()
    expect(calculator.sum(2, 2)).toEqual(4)
    expect(calculator.sum(4, 4)).toEqual(8)
    expect(calculator.sum(8, 2)).toEqual(10)
  })

})

