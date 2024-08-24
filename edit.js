
document.getElementById('home_button').addEventListener('click', function() {
  window.location.href = 'login.html'; 
});

document.getElementById('logout_button').addEventListener('click', function() {
  window.location.href = 'login.html'; 
});


window.onload = function() {
var button_id = localStorage.getItem("button");
var room_details = localStorage.getItem(button_id);
var details = room_details.trim().split(">");


var name = document.getElementById("room_name");
var location = document.getElementById("location");
var capacity = document.getElementById("capacity");
var dates = document.getElementById("dates");
var price = document.getElementById("price");

name.value = details[0];
location.value = details[1];
capacity.value = details[2];
dates.value = details[3];
price.value = details[4];
  };

function edit_room()
{
    var name = document.getElementById("room_name").value;
    var location = document.getElementById("location").value;
    var capacity = document.getElementById("capacity").value;
    var dates = document.getElementById("dates").value;
    var price = document.getElementById("price").value;

    if ((name === "") || (location === "") || (capacity === "") || (dates === "") || (price === ""))
  {
    alert("One or more fields are missing");
  }
  
  else
  {
    var key = localStorage.getItem("button");
    var val = name + ">"+location+">"+capacity+">"+dates+">"+price+">Approve>new";
    localStorage.setItem(key, val);
    console.log(key + " : " + val);
    alert("Room edited successfully  " + key);
    /*var data = document.getElementById("room_edition");
    data.reset();*/
  }
}

