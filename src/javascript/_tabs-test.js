(function () {

    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function () {

        var IRRELEVENT = "irrelevant";
        var HIDDEN_CONTENT = "hideClass";
        var container;

        beforeEach(function () {
            container = document.createElement("div");
            document.body.appendChild(container);
        });

        afterEach(function () {
            removeElement(container);
        });

        it("use a class to hide all content elements except the default upon intitialization", function () {
            var defaultTab = createTab();

            var content1 = createTabContent();
            var defaultContent = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [createTab(), defaultTab, createTab()],
                content: [content1, defaultContent, content3],
                defaultTab: defaultTab,
                activeTabClass: IRRELEVENT,
                hiddenContentClass: HIDDEN_CONTENT
            });

            assertContentHidden(content1, "element 1");   
            assertContentVisible(defaultContent, "default element");          
            assertContentHidden(content3, "element 3");
        });

        it("styles the default tab with a class upon initialization", function () {
            var tab1 = createTab();
            var defaultTab = createTab();
            var tab3 = createTab();

            var defaultTab = createTab();
            var defaultContent = createTabContent();

            tabs.initialize({
                tabs: [tab1, defaultTab, tab3],
                content: [createTabContent(), defaultContent, createTabContent()],
                defaultTab: defaultTab,
                activeTabClass: "activeTab",
                hiddenContentClass: IRRELEVENT
            });

            assert.equal(getClasses(tab1), null, "tab1 should not be styled");
            assert.equal(getClasses(defaultTab), "activeTab", "defaultElement should be styled");
            assert.equal(getClasses(tab3), null, "tab3 should not be styled");
        });

        it("switch content when tab is clicked", function(){
            var tab1 = createTab();
            var tab2 = createTab();
            var tab3 = createTab();

            var content1 = createTabContent();
            var content2 = createTabContent();
            var content3 = createTabContent();

            tabs.initialize({
                tabs: [tab1, tab2, tab3],
                content: [content1, content2, content3],
                defaultTab: tab1,
                activeTabClass: "activeTab",
                hiddenContentClass: HIDDEN_CONTENT 
            });

            assert.equal();
            assert.equal();
            assert.equal();
            
            assert.equal();
            assert.equal();

        });

        it("preserves existing classes when adding new classes.", function () {
            var defaultTab = createTab();
            defaultTab.setAttribute("class", "existingTabClass");

            var defaultElement = createTabContent();
            var hiddenContent = createTabContent();
            hiddenContent.setAttribute("class", "existingContentClass");

            tabs.initialize({
                tabs: [defaultTab, createTab()],
                content: [defaultElement, hiddenContent],
                defaultTab: defaultTab,
                activeTabClass: "activeTab",
                hiddenContentClass: "hiddenContent"
            });

            assert.equal(getClasses(defaultTab), "existingTabClass activeTab", "tab should preserve existing classes");
            assert.equal(getClasses(hiddenContent), "existingContentClass hiddenContent", "content element should preserve existing classes");
        });


        function assertContentHidden(element, elementName){
            assert.equal(getClasses(element), HIDDEN_CONTENT,  elementName + " should be hidden");
        }

        function assertContentVisible(element, elementName){
            assert.equal(getClasses(element), "",  elementName + " defaultElement shouldn't be hidden");
        }

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