const container = document.getElementById("container");
const overlay = document.getElementById("overlay");

const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const getStartedBtn = document.getElementById("getStartedBtn");

const signInForm = document.querySelector(".sign-in form");
const signUpForm = document.querySelector(".sign-up form");

function openPopup(signUp = false) {
  container.classList.add("show");
  overlay.classList.add("show");

  // signUp=true бол register тал руу (active)
  if (signUp) container.classList.add("active");
  else container.classList.remove("active");
}

function closePopup() {
  container.classList.remove("show");
  overlay.classList.remove("show");
}

if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => openPopup(true));
}

overlay.addEventListener("click", closePopup);

// Toggle animation buttons
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

