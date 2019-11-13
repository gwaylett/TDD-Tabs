(function () {

    "use strict";

    var addition = require("./addition.js");

    describe("Addition", function () {

        it("adds positive numbers", function () {
            assertEqual(addition.add(3, 4), 7);
        });

        it("uses IEEE 754 Floating point", function () {
            assertEqual(addition.add(0.1, 0.2), 0.30000000000000004);
        });

        it("throws a message if numbers are negative", function () {
            assertEqual(addition.add(1, -5), "Sorry can't add negatives!");
        });

        function assertEqual(actual, expected) {
            if (actual !== expected) throw new Error("expected " + expected + ", but was " + actual);
        }

    });
})();