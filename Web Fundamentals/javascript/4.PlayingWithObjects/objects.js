var users = [
    {
      name: "Michael",
      age:37
    }, 
    {
      name: "John",
      age:30
    },   
    {
      name: "David", 
      age:27
    }
  ];

  /*
    How would you print/log John's age?
    How would you print/log the name of the first object?
    How would you print/log the name and age of each user using a for loop?
      Your output should look something like this:
      Michael - 37
      John - 30
      David - 27
  */
var printJohnsAge = users[1].age;
console.log(printJohnsAge);
console.log('-------');
var nameFirstObj = users[0].name;
console.log(nameFirstObj);
console.log('-------');
for(var i=0; i<users.length; i++) {
    console.log(users[i].name + ' - ' + users[i].age);
}