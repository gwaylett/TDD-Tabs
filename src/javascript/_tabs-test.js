(function () {

    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function () {

        var container;

        beforeEach(function () {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(function () {
            removeElement(container);
        })

        it("hides multiple content elements except the default upon intitialization", function () {
            var element1 = addElement("div");
            var defaultElement = addElement("div");
            var element3 = addElement("div");

            tabs.initialize({
                content: [element1, defaultElement, element3],
                default: defaultElement,
                contentHideClass: "hideClass"
            });

            assert.equal(getClasses(element1), "hideClass", "element1 should be hidden");
            assert.equal(getClasses(defaultElement), "", "defaultElement shouldn't be hidden");
            assert.equal(getClasses(element3), "hideClass", "element3 should be hidden");
        });

        it("preserves existing classes when hiding an element.", function () {
            var defaultElement = addElement("div");
            var hiddenElement = addElement("div");
            hiddenElement.setAttribute("class", "existingClass");
            tabs.initialize({
                content: [defaultElement, hiddenElement],
                default: defaultElement,
                contentHideClass: "newClass"
            });

            assert.equal(getClasses(hiddenElement), "existingClass newClass");
        });


        function addElement(tagName) {
            var element = document.createElement(tagName);
            container.appendChild(element);
            return element;
        }

        function removeElement(element) {
            element.parentNode.removeChild(element);
        }

        function getClasses(element) {
            return element.getAttribute("class");
        }
    });
})();