
const CORRECT_USERNAME = "ayenuberudaniel@gmail.com";
const CORRECT_PASSWORD = "moj59236$"; 

const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredUsername = document.getElementById("username").value.trim();
  const enteredPassword = passwordInput.value;

  if (enteredUsername === CORRECT_USERNAME && enteredPassword === CORRECT_PASSWORD) {
    errorMessage.style.color = "#1a3d8f";
    errorMessage.textContent = "✅ Login successful! Redirecting...";

    setTimeout(function () {
      window.location.href = "index.html";
    }, 1200);

  } else {
    errorMessage.style.color = "#d93636";
    errorMessage.textContent = "Incorrect username or password.";
  }
});

const passwordInput = document.getElementById("password");
const toggleIcon = document.getElementById("togglePassword");

toggleIcon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.src = "images/eye-closed-icon.svg";
  } else {
    passwordInput.type = "password";
    toggleIcon.src = "images/eye-open-icon.svg";
  }
});


const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  htmlElement.setAttribute("data-theme", "dark");
  
}

themeToggle.addEventListener("click", function () {
  const isDark = htmlElement.getAttribute("data-theme") === "dark";

  if (isDark) {
    htmlElement.removeAttribute("data-theme");
    
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.setAttribute("data-theme", "dark");
    
    localStorage.setItem("theme", "dark");
  }
});