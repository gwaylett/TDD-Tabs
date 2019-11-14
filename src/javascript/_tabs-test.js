(function () {

    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function () {

        it("sets a class on an element when the elment has no existing classes", function () {  
            var element = addElement(element);
            tabs.initialize(element, "someClass");
            assert.equal(getClass(element), "someClass");
            removeElement(element);
        });

        it("sets a class on an element without erasing existing classes.", function(){
            var element = addElement(element);
            element.setAttribute("class", "existingClass");
            tabs.initialize(element, "newClass");
            assert.equal(getClass(element), "existingClass newClass");

            removeElement(element);
        })

        function addElement(tagName) {
            var element = document.createElement(tagName);     
            document.body.appendChild(element);
            return element;
        }

        function removeElement(element) {
            element.parentNode.removeChild(element);
        }

        function getClass(element){
           return element.getAttribute("class");
        }
    });
})();