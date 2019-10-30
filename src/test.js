(function () {
    "use strict";

    // var actual = add(3, 4);
    // var expected = 7;

    // try {
    //    
    // }
    // catch (err) {
    //     console.log("Caught exception: " + err);
    // }

    assertEqual(add(3,4), 7);

    function add(a, b) {
        return a + b;
    }

    function assertEqual(actual, expected){
        if (actual !== expected) throw new Error("Expected: " + expected + ", but got " + actual);
    }

})();