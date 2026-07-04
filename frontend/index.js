console.log("Hello from js")
const users = [
    {
        "name": "Jane Doe",
        "gender": "female",
        "image": "./images/jane.png"
    },
    {
        "name": "John Doe",
        "gender": "male",
        "image": "./images/john.png"
    }
];
let curUserId = 0;
function toggle(){
    if(curUserId == 0){
        curUserId = 1;
    } else {
        curUserId = 0;
    }
    document.getElementById("img").src=users[curUserId].image;
    document.getElementById("card-name").innerText=users[curUserId].name;
    document.getElementById("card-gender").innerText=users[curUserId].gender;
}
alert("Hello from js")

function getRandomUser()
{
  fetch("https://randomuser.me/api")
    .then(function (data){
      return data.json()
    })
    .then(function (parsedData){
      // console.log(parsedData)
      let gender = parsedData.results[0].gender;

      let first = parsedData.results[0].name.first;
      let last = parsedData.results[0].name.last;
      let name = first  + " " + last;
      let imageUrl = parsedData.results[0].picture.large;

      // gender
      document.getElementById("card-gender").innerText=gender;
      // name
      document.getElementById("card-name").innerText=name
      // img
      document.getElementById("img").src=imageUrl

    })
}