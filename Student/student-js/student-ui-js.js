import { tabsManager } from "../../Administrator/utility/utility.js";
const tabs = document.querySelectorAll(".menu div");
const tabContent = document.querySelectorAll(".tab")
let newManager = new tabsManager(tabs, tabContent);
newManager.renderTabs(tabs, tabContent);