// Formulář - validace hesla (červená/zelená barva)

function validatePasswords() {
  const passwordField = document.getElementById("password");
  const password = passwordField.value;
  const confirmPasswordField = document.getElementById("confirmPassword");
  const confirmPassword = confirmPasswordField.value;

  if (password === confirmPassword) {
    passwordField.classList.remove("invalid");
    passwordField.classList.add("valid");
    confirmPasswordField.classList.remove("invalid");
    confirmPasswordField.classList.add("valid");
  } else {
    passwordField.classList.remove("valid");
    passwordField.classList.add("invalid");
    confirmPasswordField.classList.remove("valid");
    confirmPasswordField.classList.add("invalid");
  }
}

// Poslouchač události pro vstupní pole hesla a vstupní pole potvrzení hesla

document
  .getElementById("password")
  .addEventListener("input", validatePasswords);
document
  .getElementById("confirmPassword")
  .addEventListener("input", validatePasswords);

// Poslouchač události pro odeslání formuláře, který zkontroluje, zda se hesla shodují

document.getElementById("email").addEventListener("input", function () {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(this.value)) {
    this.setCustomValidity("Zadejte platnou e-mailovou adresu.");
  } else {
    this.setCustomValidity("");
  }
});

// Posluchač událsti, zda je e-mail platný (pokud ne, zobrazí se chybová hláška)

document.getElementById("email").addEventListener("input", function () {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(this.value)) {
    this.setCustomValidity("Zadejte platnou e-mailovou adresu.");
  } else {
    this.setCustomValidity("");
  }
});

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    const passwordField = document.getElementById("password");
    const password = passwordField.value;
    const confirmPasswordField = document.getElementById("confirmPassword");
    const confirmPassword = confirmPasswordField.value;

    if (password !== confirmPassword) {
      event.preventDefault();
      alert(
        "Zadaná hesla se neshodují!\nProsím zkontrolujte a opravte je.\n(hesla se musí shodovat pro dokončení registrace)"
      );
    }
  });
