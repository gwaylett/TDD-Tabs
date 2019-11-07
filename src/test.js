(function () {

    "use strict";

    var assert = require("chai").assert;

    describe("Addition", function () {

        it("adds positive numbers", function () {
            assert.equal(add(3, 4), 7);

        })

        it("uses IEEE 754 Floating point", function () {
            assert.equal(add(0.1, 0.2), 0.30000000000000004);
        })

        it("throws a message if numbers are negative", function(){
            assert.equal(add(1, -5), "Sorry can't add negatives!")
        })
    });

    function add(a, b) {
        if ( a > 0 && b > 0) {
        return a + b;
        }
        else {
            return "Sorry can't add negatives!";
        }
    }


})();















    // Try/Catch
    // var actual = add(3, 4);
    // var expected = 7;

    // try {
    //    if (actual !== expected) throw new Error("Expected: " + expected + ", but got " + actual);
    // }
    // catch (err) {
    //     console.log("Caught exception: " + err);
    // }


    // Basic Assertion Example
    // assertEqual(add(3,4), 7);

    // function add(a, b) {
    //     return a + b;
    // }

    // function assertEqual(actual, expected){
    //     if (actual !== expected) throw new Error("Expected: " + expected + ", but got " + actual);
    // }

