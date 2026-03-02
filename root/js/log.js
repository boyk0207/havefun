const container = document.getElementById("container");
const overlay = document.getElementById("overlay");

const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const getStartedBtn = document.getElementById("getStartedBtn");

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