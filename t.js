var keys = Object.keys(localStorage);

for(var i = 0; i < keys.length; i++)
{
  console.log(keys[i] + " : "+ localStorage.getItem(keys[i]));
}