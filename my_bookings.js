
document.getElementById('home_button').addEventListener('click', function() {
    window.location.href = 'login.html'; 
  });
  
  document.getElementById('logout_button').addEventListener('click', function() {
    window.location.href = 'login.html'; 
  });


window.onload = function()
{

    var books = [];
    var room = [];
    var names = [];
    var time1 = [];
    var time2 = [];
    var final_dates = [];
    var bookings = [];

    const tbody = document.getElementById('his_table');

    keys = Object.keys(localStorage);

    if(keys !== null)
    {
        for(var i = 0; i < keys.length; i++)
        {
            if(keys[i].startsWith("book"))
            {
                bookings.push(keys[i]);
            }
        }

        bookings.sort();
        for(var i = 0; i < bookings.length; i++)
        {
            var data = localStorage.getItem(bookings[i]);
            data = data.trim().split(">");

            if(data[1] === localStorage.getItem("live"))
            {
                room.push(data[0]);
                names.push(data[1]);
                final_dates.push(data[2]);
                time1.push(data[3]);
                time2.push(data[4]);
                books.push("book" + i);
            }
            else
            {
                //clearTable();
                //alert("No bookings found !");
                console.log("nothing inside")
                console.log("data1" + data[1]);
                console.log("live: "+localStorage.getItem("live"));
            }
        }

        clearTable();
        insert_rows(names, room, final_dates, time1, time2, books, tbody);
    }

    else
    {
        clearTable();
        alert("No bookings found !");
        console.log("nothing inside")
    }

};



function clearTable() {
    var tableBody = document.getElementById('his_table');
    while (tableBody.rows.length > 1) {
        tableBody.deleteRow(1);
    }
}


function cancel_booking(bookid)
{
    localStorage.removeItem(bookid);
    console.log(bookid + " cancelled");
    alert("Cancellation successful");
    location.reload();
}


function insert_rows(names, room, final_dates, time1, time2, books, tbody)
{
    for (var i = 0; i < books.length; i++)
    {
        var newRow = tbody.insertRow(tbody.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);

        var room_name = (localStorage.getItem(room[i])).trim().split(">");
        cell1.textContent = room_name[0];
        cell2.textContent = final_dates[i];
        cell3.textContent = time1[i];
        cell4.textContent = time2[i];
        const button1 = document.createElement('button');
        const button2 = document.createElement('button');
        button1.textContent = "Cancel";
        button2.textContent = "Modify";
        button1.id = books[i];
        button2.id = books[i];

        button1.onclick = function() {
            cancel_booking(button1.id);
          };

        cell5.appendChild(button1);
        cell5.appendChild(button2);
    }
}