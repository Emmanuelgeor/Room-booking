var today = new Date().toISOString().split('T')[0];

// Set the minimum date to today
document.getElementById('room_date').min = today;


function book()
{
    var date = document.getElementById("room_date").value;
    var time1 = document.getElementById("room_time1").value;
    var time2 = document.getElementById("room_time2").value;
    var capacity = document.getElementById("room_capacity").value;
    console.log(date);
    console.log(time1);
    console.log(time2);
    console.log(capacity);

    var count = book_count();
    localStorage.setItem("book" + count, localStorage.getItem("button") + ">" + localStorage.getItem("live") + ">" + date + ">" + time1 + ">" + time2);
    console.log(localStorage.getItem(count));
    alert("Booking Successful");

}

function book_count()
{
    var count = 0;
    for(var i = 0; i < localStorage.length; i++)
    {
        if(localStorage.key(i).startsWith("book"))
        {
            count = count + 1;
        }
    }
    console.log(count);
    return count;
}

function booked_already(room_id)
{
    for(var i = 0; i < localStorage.length; i++)
    {
        if(localStorage.key(i).startsWith("book"))
        {
            var elements = localStorage.getItem(localStorage.key(i)).trim().split(">");
            var first_element = elements[0];
            var person = localStorage.getItem("live");
            if(room_id === first_element && person === elements[1])
            {
                return "true";
            }
        }
    }

    return "false";
}


function openNewTab() {
    var ans = booked_already(localStorage.getItem("button"));
    if(ans === "false")
    {
        var newTab = window.open('payment.html', '_blank');

        window.addEventListener('storage', function (event) {
            if (event.key === 'payment' && event.newValue === 'true') {
                localStorage.removeItem('payment');
                newTab.close();
                book();
            }
        });
    }
    else
    {
        alert("Room already booked!!");
    }
}