
const adminMenu = document.querySelectorAll(".left-nav div");
const user_info = document.querySelector(".profile-card");
const dashboard = document.querySelector(".dashboard-hero");
const create_exam = document.querySelector(".exam-card");
const set_schedule = document.querySelector(".schedule-card");
const view_result = document.querySelector(".result-card");
const recent_activities = document.querySelector(".recent-activities-card");


// buttons category
const editProfBtn = document.querySelector(".edit-profile-button");
const changePsBtn = document.querySelector(".change-password-button");
const logOutBtn = document.querySelector(".logout-button");
const nameBtn = document.querySelector(".profile-name-save-button");
const nameBack = document.querySelector(".prifile-name-back-button");
const delAcc = document.querySelector(".profile-delete-account-button");
const fullNameSave = document.querySelector(".personalisatiob-save-button");
const fullNameBack = document.querySelector(".personalisation-back");
const paswSave = document.querySelector(".password-save");
const paswBack = document.querySelector(".password-back")

//console.log(editProfBtn, changePsBtn, logOutBtn, nameBtn, nameBack, delAcc, fullNameBack, fullNameSave, paswBack, paswBack);
// buttons 

const cards = [user_info, dashboard, create_exam, set_schedule, view_result, recent_activities];
let initial_ = adminMenu[0].classList.add("active-button");
let initial_card = user_info.style;

cards.forEach(card => {
  card.style.display = "none";
});
initial_card.display = "grid";
adminMenu.forEach(menu => {
  menu.addEventListener("click", () => {
    adminMenu.forEach(btn => {
      btn.classList.remove("active-button");
    });
    menu.classList.add("active-button");
    cards.forEach(card => {
      card.style.display = "none";
    });
    for (let i = 0; i < adminMenu.length; i++){
  if (adminMenu[i].classList.contains("active-button")) {
    cards[i].style.display = "grid";
  }
 
}
  });
});







