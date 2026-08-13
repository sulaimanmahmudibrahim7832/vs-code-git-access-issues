
const menu = document.querySelectorAll(".menu div");
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
  editSwitch();
});
BackBtn.addEventListener("click", () => {
  editState = false;
  backState = true;
  editSwitch();
});
changePsBtn.addEventListener("click", () => {
  passwordState = true;
  backPState = false;
  changePSwitch();
});

paswBack.addEventListener("click", () => {
   passwordState = false;
 backPState = true;
 changePSwitch();
});



function editSwitch() {
        if (editState) {
             profileCard.style.display = "none";
             profileFrom.style.display = "block";
    } else if (backState) {
        profileCard.style.display = "block";
        profileFrom.style.display = "none";
    }
}
function changePSwitch() {
  if (passwordState) {
  profileCard.style.display = "none";
  passwordCard.style.display = "block";
} else if (backPState) {
  profileCard.style.display = "block";
  passwordCard.style.display = "none";
}
}

//
const profileImgInput = document.querySelector(".profile-img-input");
const profileImg = document.querySelector(".img-form");
const profileImg2 = document.querySelector(".img-form2");
 profileImgInput.addEventListener("change", e => {
  let files = e.target.files;
  file = URL.createObjectURL(files[0]);
   profileImg.src = file;
   profileImg2.src = file;
});
function controlUI() {
  const cards = [user_info, dashboard, create_exam, set_schedule, view_result, recent_activities];
  let initial_ = menu[0].classList.add("active-button");
  let initial_card = user_info.style;

  cards.forEach(card => {
    card.style.display = "none";
  });

  menu.forEach(tab => {
    tab.addEventListener("click", () => {
      menu.forEach(btn => {
        btn.classList.remove("active-button");
      });
      tab.classList.add("active-button");
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
controlUI();







