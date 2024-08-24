
document.getElementById('home_button').addEventListener('click', function() {
  window.location.href = 'login.html'; 
});

document.getElementById('logout_button').addEventListener('click', function() {
  window.location.href = 'login.html'; 
});
function validate_submit()
{
  var name = document.getElementById("room_name").value;
  var location = document.getElementById("location").value;
  var capacity = document.getElementById("capacity").value;
  var calender = document.getElementById("dates").value;
  var price = document.getElementById("price").value;
  if ((name === "") || (location === "") || (capacity === "") || (calender === "") || (price === ""))
  {
    alert("One or more fields are missing");
  }
  
  else
  {
    var num = room_count();
    var key = "room"+(num);
    var val = name + ">"+location+">"+capacity+">"+calender+">"+price+">Approve>new";
    localStorage.setItem(key, val);
    console.log(key + " : " + val);
    alert("Room created successfully  " + "room"+(num));
    var data = document.getElementById("room_creation");
    data.reset();
  }
}

function room_count()
{
    var count = 0;
    for(var i = 0; i < localStorage.length; i++)
    {
        if(localStorage.key(i).startsWith("room"))
        {
            count = count + 1;
        }
    }

    return  count;
}