

function showMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const messageDiv = document.getElementById("welcomeMessage");

  if (name) {
    messageDiv.textContent = "Welcome " + name;
  } else {
    messageDiv.textContent = "Please enter your name!";
  }
}
