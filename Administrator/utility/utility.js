export { tabsManager};
const tabs = document.querySelectorAll(".menu div");
const tabContents = document.querySelectorAll(".tab");

    class tabsManager{
    tabs;
    tabContent;
    constructor(tabs,tabContent){
      this.tabs = tabs;
      this.tabContent = tabContent
    };
    renderTabs(tabs,tabContent){
         tabs[0].classList.add("active-button");
          tabContent.forEach( content =>{
      content.classList.add("tabContent");
           }
        );
   tabContent[0].classList.remove("tabContent");
   tabs.forEach(tab => {
      tab.addEventListener("click",()=>{
       tabs.forEach(btn=>{
         btn.classList.remove("active-button");
       });
       tab.classList.add("active-button");
        this.renderTabContent(tabs,tabContent);
      });
   });
    };
    renderTabContent(tabs,tabContent){
         tabContent.forEach(content=>{
             content.classList.add("tabContent")
              });
            for(let i = 0; i < tabs.length;i++){
            if (tabs[i].classList.contains("active-button")){
              tabContent[i].classList.remove("tabContent");
            }
          }
    }
    }

let tManager = new tabsManager;

tManager.renderTabs(tabs, tabContents);



































































