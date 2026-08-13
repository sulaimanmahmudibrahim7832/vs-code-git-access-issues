

const menu = document.querySelectorAll(".menu div");
let initial_ = menu[0].classList.add("active-button");
menu.forEach(tab => {
  tab.addEventListener("click", btn => {
    menu.forEach(tab => {
      tab.classList.remove("active-button");
    });
    tab.classList.add("active-button");
  });
});
