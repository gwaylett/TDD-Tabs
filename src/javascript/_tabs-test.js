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
        });

        it("hides all content elements except the default upon intitialization", function () {
            var tab1 = addElement("div");
            var defaultTab = addElement("div");
            var tab3 = addElement("div");

            var element1 = addElement("div");
            var defaultElement = addElement("div");
            var element3 = addElement("div");

            tabs.initialize({
                tabs: [tab1, defaultTab, tab3],
                content: [element1, defaultElement, element3],
                default: defaultElement,
                activeTabClass: "activeTab",
                contentHideClass: "hideClass"
            });

            assert.equal(getClasses(element1), "hideClass", "element1 should be hidden");
            assert.equal(getClasses(defaultElement), "", "defaultElement shouldn't be hidden");
            assert.equal(getClasses(element3), "hideClass", "element3 should be hidden");
        });

        it("preserves existing classes when hiding an element.", function () {
            var defaultTab = addElement("div");
            var hiddenTab = addElement("div");

            var defaultElement = addElement("div");
            var hiddenElement = addElement("div");
            hiddenElement.setAttribute("class", "existingClass");
            tabs.initialize({
                tabs: [defaultTab, hiddenTab],
                content: [defaultElement, hiddenElement],
                default: defaultElement,
                activeTabClass: "activeTab",
                contentHideClass: "newClass"
            });

            assert.equal(getClasses(hiddenElement), "existingClass newClass");
        });

        it("styles the default tab with a class", function(){
            var defaultTab = addElement("div");
            var defaultElement = addElement("div");

            tabs.initialize({
                tabs: [defaultTab],
                content: [defaultElement],
                default: defaultElement,
                activeTabClass: "activeTab",
                contentHideClass: "ignored"
            });

            assert.equal(getClasses(defaultTab), "activeTab");
        });

        it("preserves existing classes on the active tab", function(){
            //TODO
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