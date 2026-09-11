const themeToggle = document.getElementById("themeToggle");
const followButton =
  document.getElementById("followButton");
const messageButton =
  document.getElementById("messageButton");
const copyEmail = document.getElementById("copyEmail");
const toast = document.getElementById("toast");

const email = "mdazim@example.com";

let toastTimer;
 
/* =========================================
   THEME
========================================= */

themeToggle.addEventListener("click", () => {
  const darkMode = document.body.classList.toggle("dark");

  themeToggle.innerHTML = darkMode
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

/* =========================================
   FOLLOW
========================================= */

followButton.addEventListener("click", () => {
  const following =
    followButton.classList.toggle("following");

  const icon = followButton.querySelector(".button-icon i");

  const text = followButton.querySelector(".button-text");

  if (following) {
    icon.className = "fa-solid fa-check";

    text.textContent = "Following";
  } else {
    icon.className = "fa-solid fa-plus";

    text.textContent = "Follow";
  }
});

/* =========================================
   MESSAGE
========================================= */

messageButton.addEventListener("click", () => {
  showToast("Message feature coming soon");
});

/* =========================================
   COPY EMAIL
========================================= */

copyEmail.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);

    showToast("Email copied");
  } catch {
    showToast("Copy failed");
  }
});

/* =========================================
   TOAST
========================================= */

function showToast(message) {
  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}
