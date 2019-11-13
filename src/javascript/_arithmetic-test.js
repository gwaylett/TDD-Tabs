(function () {

    "use strict";

    var arithmetic = require("./arithmetic.js");
    var assert = require("./assert.js");

    describe("Addition", function () {

        it("adds positive numbers", function () {
            assert.equal(arithmetic.add(3, 4), 7);
        });

        it("uses IEEE 754 Floating point", function () {
            assert.equal(arithmetic.add(0.1, 0.2), 0.30000000000000004);
        });

        it("throws a message if numbers are negative", function () {
            assert.equal(arithmetic.add(1, -5), "Sorry can't add negatives!");
        });

    });

    describe("Subtraction", function () {
        it("substracts two positive numbers", function () {
            assert.equal(arithmetic.subtract(10, 3), 7);
        });
    });

    describe("Multiplication", function () {
        it("multiplies two numbers", function () {
            assert.equal(arithmetic.multiply(4, 6), 24);
        });
    });


    describe("Division", function () {
        it("divides two positive numbers", function () {
            assert.equal(arithmetic.divide(36, 6), 6);
        });
    });

})();