(function () {

    "use strict";

    exports.add = function add(a, b) {
        if (a > 0 && b > 0) {
            return a + b;
        }
        else {
            return "Sorry can't add negatives!";
        }
    };

    exports.subtract = function subtract(a, b){
        return a - b;
    };

    exports.multiply = function multiply(a, b){
        return a * b;
    };

    exports.divide = function(a, b){
        return a / b;
    };

})();