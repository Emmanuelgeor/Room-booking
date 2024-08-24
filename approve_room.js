document.getElementById('home_button').addEventListener('click', function() {
  window.location.href = 'login.html';
});

document.getElementById('logout_button').addEventListener('click', function() {
  window.location.href = 'login.html';
});


const tbody = document.getElementById('rooms');
for(var i = 0; i < localStorage.length; i++)
{
  const row = document.createElement('tr');
  console.log(localStorage.getItem("room" + i));
  split_data(localStorage.getItem("room" + i), row, i);
}


function split_data(line, row, i)
{ var new_room;
  var words = line.trim().split('>');
  for(var value = 0; value < (words.length-1); value++) 
  {
  const cell = document.createElement('td');
  
  if(value === 5)
  {
    const button = document.createElement('button');
    button.textContent = words[value];
    button.id = "room"+i;
    button.onclick = approve;
    cell.appendChild(button);
    row.appendChild(cell);
    new_room = words[value+1];
  }
  else
  {
    cell.textContent = words[value];
    row.appendChild(cell);
  }
  };

  if(new_room === "new")
  {
    tbody.appendChild(row);
  }
}


function approve()
{
  var line = localStorage.getItem(this.id);
  words = line.trim().split(">");
  words[words.length-1] = "true";
  words[words.length-2] = "book";
  edited = words.join(">");
  localStorage.setItem(this.id, edited);

  var cell = this.parentNode;
  var row = cell.parentNode;
  var tbody = row.parentNode;
  tbody.removeChild(row);
}
document.getElementById('home_button').style.margin = '0';
document.getElementById('logout_button').style.margin = '0';
document.getElementById('user_actions').style.marginRight = '20px';