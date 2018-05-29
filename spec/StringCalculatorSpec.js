describe("String Calculator", function(){

    var stringCalculator;

    beforeEach(function(){
        stringCalculator = require("../src/StringCalculator");
    });

    it("has an add function", function(){
        stringCalculator.add();
    });
});