(function(){
    "use strict";

    exports.initialize = function initialize(element, className){
        shim();
        element.classList.add(className);
    }
})();