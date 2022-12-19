const mathOperation = require('./calclator')

describe('calculator test', ()=>{
    it('adding two numbers', () =>{
        //Act and Arrange
        const result = mathOperation.sum(1,2)

        //Assert
        expect(result).toBe(3)
    }),
    it('susbtraction of two numbers', () => {
        //Arrange and Act
        const result = mathOperation.diff(5,12)

        //Assert
        expect(result).toBe(-7)
    }),

    test('multiplication of two numbers', () => {
        //Arrange and Act
        const result = mathOperation.product(10, 10)

        //Assert
        expect(result).toBe(100)
    }),

    it('divide two numbers', () => {
        //Arrange and Act
        const result = mathOperation.divide(9, 3)

        //Assert
        expect(result).not.toBe(9)
    }),

    //equality case: tobe(expected answer) == gives the expected result,   
    // not equality case: not.Tobe(not expect answer) == to fail the expected result by passing the test
    it('truthniness operation', () => {
        const name = 'software engineering is soft money'
        const n = null

        //Assert
        expect(n).toBeNull()
        expect(name).not.toBeNull()

        //name has a valid value
        expect(name).toBeTruthy()
        expect(n).toBeFalsy()
    }),


    //Numbers
    it('numeric Operation', () => {
        const num1 = 100
        const num2 = -20
        const num3 = 0

        //Act and Assert
        expect(num1).toBeGreaterThan(10)
        expect(num2).toBeLessThan(0)
        expect(num3).toBeGreaterThanOrEqual(0)
    }),

    //strings merchant
    it('strings matchers', () =>{
        //Arrange and Act
        const str1 = 'software engineering is soft money'

        //Assert successful string
        expect(str1).toMatch(/soft/)

        //Assert failure string
        expect(str1).not.toMatch(/abd/)

    }),

    //Array Matcher
    it('array matcher', ()=>{
        //Arrange and Act
        const arr = ['book']

        //Assert
        expect(arr).toBeInstanceOf(Array)
        expect(arr).toContain('book')


    })


})