
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
    if(i === 6)
    {
      approved_room = words[i];
    }

    else if(i === 5)
    {
        continue;
    }

    else
    {
        const cell = document.createElement('td');
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