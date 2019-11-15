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
            var defaultTab = createTab();

            var content1 = createTabContent();
            var defaultContent = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [createTab(), defaultTab, createTab()],
                content: [content1, defaultContent, content3],
                default: defaultTab,
                activeTabClass: IRRELEVENT,
                contentHideClass: "hideClass"
            });

            assert.equal(getClasses(content1), "hideClass", "element1 should be hidden");
            assert.equal(getClasses(defaultContent), "", "defaultElement shouldn't be hidden");
            assert.equal(getClasses(content3), "hideClass", "element3 should be hidden");
        });

        it("preserves existing classes when hiding an element.", function () {
            var defaultTab = createTab();

            var defaultElement = createTabContent();
            var hiddenContent = createTabContent();
            hiddenContent.setAttribute("class", "existingClass");

            tabs.initialize({
                tabs: [defaultTab, createTab()],
                content: [defaultElement, hiddenContent],
                default: defaultTab,
                activeTabClass: IRRELEVENT,
                contentHideClass: "newClass"
            });

            assert.equal(getClasses(hiddenContent), "existingClass newClass");
        });

        it("styles the default tab with a class", function () {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();

            var defaultTab = createTab();
            var defaultContent = createTabContent();

            tabs.initialize({
                tabs: [tab1, defaultTab, tab3],
                content: [createTabContent(), defaultContent, createTabContent()],
                default: defaultTab,
                activeTabClass: "activeTab",
                contentHideClass: IRRELEVENT
            });

            assert.equal(getClasses(tab1), null, "tab1 should not be styled");
            assert.equal(getClasses(defaultTab), "activeTab", "defaultElement should be styled");
            assert.equal(getClasses(tab3), null, "tab3 should not be styled");
        });

        it("preserves existing classes on the active tab", function () {
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