function validateLogin()
{
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  const validUsernames = (localStorage.getItem("students")).trim().split(">");
  const validPasswords = (localStorage.getItem("passwords")).trim().split(">");

  let choice = false;
  let index = 0;
for (index; index < validUsernames.length; index++)
{
    if (usernameInput === validUsernames[index] && passwordInput === validPasswords[index])
    {
      choice = true;
      break;
    }
}

  if (choice === true)
  {
    localStorage.setItem("live", usernameInput);
    window.location.href = "rooms.html";
  }
  else
  {
    alert("Invalid username or password. Please try again.");
  }
}