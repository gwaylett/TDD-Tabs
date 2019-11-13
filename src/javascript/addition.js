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

})();