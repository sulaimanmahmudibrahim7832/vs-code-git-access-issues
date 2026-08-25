import { tabsManager } from "..//utility/utility.js";
const tabs = document.querySelectorAll(".menu div");
const tabContent = document.querySelectorAll(".tab")
let TabManager = new tabsManager(tabs, tabContent);
TabManager.renderTabs(tabs, tabContent);

// buttons category
const deckCard = document.querySelector(".deck");
const tab = document.querySelector(".menu");
deckCard.addEventListener("click", () => {
    tab.style.display = "none";
  
});
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
const userImage = document.querySelector(".user-img");

const profileImgInput = document.querySelector(".profile-img-input");
const profileImg = document.querySelector(".img-form");
const profileImg2 = document.querySelector(".img-form2");
 profileImgInput.addEventListener("change", e => {
  let files = e.target.files;
 let file = URL.createObjectURL(files[0]);
   profileImg.src = file;
   profileImg2.src = file;
   userImage.src = file;
});








