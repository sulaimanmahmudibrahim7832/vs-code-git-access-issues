const menu = document.querySelectorAll(".menu div");
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const tab4 = document.querySelector(".tab4");
const tab5 = document.querySelector(".tab5");

export { render_pageUi,menu,tab1,tab2,tab3,tab4,tab5}
function render_pageUi(menu, tab1, tab2, tab3, tab4, tab5) {
  const cards = [tab1,tab2,tab3,tab4,tab5];
  let initial_ = menu[0].classList.add("active-button");

  cards.forEach(card => {
    card.style.display = "none";
  });

  cards[0].style.display = "grid";
  menu.forEach(tab => {
    // nav control function
    tab.addEventListener("click", () => {
      menu.forEach(btn => {
        btn.classList.remove("active-button");
      });
      tab.classList.add("active-button");
      // card renderation function 
    
      cards.forEach(card => {
        card.style.display = "none";
      });
      for (let i = 0; i < menu.length; i++) {
        if (menu[i].classList.contains("active-button")) {
          cards[i].style.display = "grid";
        }
 
      }
    });
  });
}











































/*let s_format = "second";
 let s_Opthtml = "";
 const seconds = [];
 let m_format = "second";
 let digit_f  = '';
let m_Opthtml = "";
 const minutes = [];
let h_format = "second";
let h_Opthtml = "";
const hours = [];
    for(let i =0 ; i < 60;i++){
      if (i > 1){
        s_format = "seconds";
        m_format = "minutes";
        h_format = "hours";
       }
      else{
        s_format = "second";
        m_format = "minute";
        h_format = "hour";
      }
  if ( i < 10){
    digit_f = `0${i}`;
  }else{
    digit_f = `${i}`;
  }
      seconds.push(`<option>${digit_f} ${s_format}</option>`);
       minutes.push(`<option>${digit_f} ${m_format}</option>`);
        hours.push(`<option>${digit_f} ${h_format}</option>`);
    }
    seconds.forEach(element => {
      s_Opthtml += element;
    });
    minutes.forEach(element => {
  m_Opthtml += element;
});
hours.forEach(element => {
  h_Opthtml += element;
});
   const s_selector = document.querySelector(".s-select");
   s_selector.innerHTML = s_Opthtml;
     const m_selector = document.querySelector(".m-select");
  m_selector.innerHTML = m_Opthtml;
    const h_selector = document.querySelector(".h-select");
  h_selector.innerHTML = h_Opthtml;
const time_input = document.querySelector(".time-inputs");
time_input.style.display = "flex";
time_input.style.width = "430px";

*/;
