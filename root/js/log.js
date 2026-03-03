const container = document.getElementById("container");
const overlay = document.getElementById("overlay");

const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const getStartedBtn = document.getElementById("getStartedBtn");

const signInForm = document.querySelector(".sign-in form");
const signUpForm = document.querySelector(".sign-up form");

/* ===== Overlay ===== */
function showOverlay() {
  overlay.classList.add("show");
}

function hideOverlay() {
  overlay.classList.remove("show");
}

/* ===== Auth Popup ===== */
function openAuthPopup(signUp = false) {
  container.classList.add("show");
  showOverlay();

  if (signUp) container.classList.add("active");
  else container.classList.remove("active");
}

function closeAuthPopup() {
  container.classList.remove("show");
}

/* ===== Close All ===== */
function closeAll() {
  closeRoleModal();
  closeAuthPopup();
  hideOverlay();
}

/* =========================
   ROLE CHOICE
========================= */

const roleModal = document.getElementById("rolemodel");
const chooseStudent = document.getElementById("Choosestudent");
const chooseTeacher = document.getElementById("Chooseteacher");

function openRoleModal() {
  roleModal.classList.add("show");
  showOverlay();
}

function closeRoleModal() {
  roleModal.classList.remove("show");
}

if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => {
    closeAuthPopup();
    openRoleModal();
  });
}

/* =========================
   ROLE CHOICE → LOGIN
========================= */

function handleRoleSelect(role) {
  localStorage.setItem("userRole", role);
  closeRoleModal();
  openAuthPopup(true); // sign-up руу
}

if (chooseStudent) {
  chooseStudent.addEventListener("click", () => {
    handleRoleSelect("student");
  });
}

if (chooseTeacher) {
  chooseTeacher.addEventListener("click", () => {
    handleRoleSelect("teacher");
  });
}

// ===== Overlay click → close all
if (overlay) overlay.addEventListener("click", closeAll);

// ===== ESC → close all
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});

/* =========================
   TOGGLE SIGN IN / SIGN UP
========================= */
registerBtn.addEventListener("click", () => container.classList.add("active"));
loginBtn.addEventListener("click", () => container.classList.remove("active"));


/* =========================
   LOGIN → INDEX.HTML
========================= */
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  window.location.href = "index.html";
});

registerForm.addEventListener("submit", function(e){
  e.preventDefault();
  window.location.href = "index.html";
});