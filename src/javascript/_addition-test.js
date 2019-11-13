(function () {

    "use strict";

    var addition = require("./addition.js");
    var assert = require("../vendor/chai-4.2.0.js").assert;

    describe("Addition", function () {

        it("adds positive numbers", function () {
            assert.equal(addition.add(3, 4), 7);
        });

        it("uses IEEE 754 Floating point", function () {
            assert.equal(addition.add(0.1, 0.2), 0.30000000000000004);
        });

        it("throws a message if numbers are negative", function () {
            assert.equal(addition.add(1, -5), "Sorry can't add negatives!");
        });

    });
})();