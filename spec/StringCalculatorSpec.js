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
});