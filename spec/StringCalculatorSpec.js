describe("String Calculator", function(){

    var stringCalculator;

    beforeEach(function(){
        stringCalculator = require("../src/StringCalculator");
    });

    it("has an add function that takes in a string value and returns a number result", function(){
        const input = "1";
        const expectedResult = 0;

        const result = stringCalculator.add(input);

        expect(result).toBe(expectedResult);
    });

    it("has an add function that returns 0 when an empty string input is entered", function(){
        const input = "";
        const expectedResult = 0;

        const result = stringCalculator.add(input);

        expect(result).toBe(expectedResult);
    })
});