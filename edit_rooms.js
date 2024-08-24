
document.getElementById('home_button').addEventListener('click', function() {
  window.location.href = 'login.html'; 
});

document.getElementById('logout_button').addEventListener('click', function() {
  window.location.href = 'login.html'; 
});
const tbody = document.getElementById('rooms');
for(var i = 0; i < localStorage.length; i++)
{
  console.log(localStorage.getItem("room" + i));
  const row = document.createElement('tr');
  split_data(localStorage.getItem("room" + i), row, i);
}


function split_data(line, row, j)
{
  var approved_room;
  var words = line.trim().split('>');
  for (var i = 0; i < words.length; i++)
  {
    const cell = document.createElement('td');

    if(i === 5)
    {
      const button = document.createElement('button');
      button.textContent = "Edit";
      button.id = "room"+j;

      button.onclick = function() {
        edit(button.id);
      };
      cell.appendChild(button);
      row.appendChild(cell);
    }

    else if(i === 6)
    {
      approved_room = words[i];
    }

    else
    {
      const value = words[i];
      cell.textContent = value;
      row.appendChild(cell);
    }
  }

  if(approved_room === "true")
  {
    tbody.appendChild(row);
  }
}


function edit(button_id)
{
  localStorage.setItem("button", button_id);
  window.location.href="edit.html";
}