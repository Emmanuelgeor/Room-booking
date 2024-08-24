function validateLogin()
{
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;


  const validUsernames = ['siril', 'emmanuel'];
  const validPasswords = ['siril', 'emmanuel'];
  let choice = false;
  let index = 0
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
    window.location.href = "approve_room.html";
  }
  else
  {
    alert("Invalid username or password. Please try again.");
  }
}