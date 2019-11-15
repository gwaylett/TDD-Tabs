(function () {

    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function () {

        var IRRELEVENT = "irrelevant";
        var container;

        beforeEach(function () {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(function () {
            removeElement(container);
        });

        it("hides all content elements except the default upon intitialization", function () {
            var content1 = createTabContent();
            var defaultContent = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [createTab(), createTab(), createTab()],
                content: [content1, defaultContent, content3],
                default: defaultContent,
                activeTabClass: IRRELEVENT,
                contentHideClass: "hideClass"
            });

            assert.equal(getClasses(content1), "hideClass", "element1 should be hidden");
            assert.equal(getClasses(defaultContent), "", "defaultElement shouldn't be hidden");
            assert.equal(getClasses(content3), "hideClass", "element3 should be hidden");
        });

        it("preserves existing classes when hiding an element.", function () {

            var defaultElement = createTabContent();
            var hiddenContent = createTabContent();
            hiddenContent.setAttribute("class", "existingClass");

            tabs.initialize({
                tabs: [createTab(), createTab()],
                content: [defaultElement, hiddenContent],
                default: defaultElement,
                activeTabClass: IRRELEVENT,
                contentHideClass: "newClass"
            });

            assert.equal(getClasses(hiddenContent), "existingClass newClass");
        });

        it("styles the default tab with a class", function(){
            var defaultTab = createTab();
            var defaultContent = createTabContent();

            tabs.initialize({
                tabs: [defaultTab],
                content: [defaultContent],
                default: defaultContent,
                activeTabClass: "activeTab",
                contentHideClass: IRRELEVENT
            });

            assert.equal(getClasses(defaultTab), "activeTab");
        });

        it("preserves existing classes on the active tab", function(){
            //TODO
        });

        function getClasses(element) {
            return element.getAttribute("class");
        }

        function createTab() {
            var tab = addElement("div");
            tab.innerHTML = "tab";
            return tab;
        }

        function createTabContent() {
            var tabContent = addElement("div");
            tabContent.innerHTML = "content";
            return tabContent;
        }


        function addElement(tagName) {
            var element = document.createElement(tagName);
            container.appendChild(element);
            return element;
        }

        function removeElement(element) {
            element.parentNode.removeChild(element);
        }      
    });
})();