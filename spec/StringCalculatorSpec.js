describe("String Calculator", function(){

    var stringCalculator;

    beforeEach(function(){
        stringCalculator = require("../src/StringCalculator");
    });

    it("has an add function that returns 0 when an empty string input is entered", function(){
        const input = "";
        const expectedResult = 0;

        const result = stringCalculator.add(input);

        expect(result).toBe(expectedResult);
    })

    it("has an add function that takes in a string value of 1 and return a number result of 1", function(){
        const input = "1";
        const expectedResult = 1;

        const result = stringCalculator.add(input);

        expect(result).toBe(expectedResult);
    });

    it("has an add function that takes in a string of 1,2 and returns a number value of 3", function(){
        const input = "1,2";
        const expectedResult = 3;

        const result = stringCalculator.add(input);

        expect(result).toBe(expectedResult);
    });
});