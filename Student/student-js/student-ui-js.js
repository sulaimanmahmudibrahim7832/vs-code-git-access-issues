

const menu = document.querySelectorAll(".menu div");
let initial_ = menu[0].classList.add("active-button");




renderLeftNav(initial_,menu);


function renderLeftNav(intitial_,menu) {

menu.forEach(tab => {
  tab.addEventListener("click", btn => {
    menu.forEach(tab => {
      tab.classList.remove("active-button");
    });
    tab.classList.add("active-button");
  });
});
}