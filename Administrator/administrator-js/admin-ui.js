
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
const BackBtn = document.querySelector(".prifile-name-back-button");
const delAcc = document.querySelector(".profile-delete-account-button");
const paswSave = document.querySelector(".password-save");
const paswBack = document.querySelector(".password-back")

//console.log(editProfBtn, changePsBtn, logOutBtn, nameBtn, nameBack, delAcc, fullNameBack, fullNameSave, paswBack, paswBack);
// buttons
const profileFrom = document.querySelector(".profile-form");
const profileCard = document.querySelector(".profile-details");
const passwordCard = document.querySelector(".password-card");


// buttons Associate card


let editState;
let backState;
let passwordState;
let backPState;
profileFrom.style.display = "none";
passwordCard.style.display = "none";
editProfBtn.addEventListener("click", () => {
  editState = true;
  backState = false;

  if (editState) {
    profileCard.style.display = "none";
    profileFrom.style.display = "block";

  } else if (backState) {
    profileCard.style.display = "block";
    profileFrom.style.display = "none";
  }

});
BackBtn.addEventListener("click", () => {
  editState = false;
  backState = true;
      if (editState) {
      profileCard.style.display = "none";
      profileFrom.style.display = "block";
    } else if (backState) {
      profileCard.style.display = "block";
      profileFrom.style.display = "none";
    }
});
changePsBtn.addEventListener("click", () => {
  passwordState = true;
  backPState = false;


  if (passwordState) {
    profileCard.style.display = "none";
    passwordCard.style.display = "block";


  } else if (backPState) {
    profileCard.style.display = "block";
    passwordCard.style.display = "none";
  }


});

paswBack.addEventListener("click", () => {
   passwordState = false;
 backPState = true;
 if (passwordState) {
   profileCard.style.display = "none";
   passwordCard.style.display = "block";
 } else if (backPState) {
   profileCard.style.display = "block";
   passwordCard.style.display = "none";
 }
});

//

function controlUI() {
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
      for (let i = 0; i < adminMenu.length; i++) {
        if (adminMenu[i].classList.contains("active-button")) {
          cards[i].style.display = "grid";
        }
 
      }
    });
  });
}
controlUI();







