// var jwt = localStorage.getItem("jwt");
// if (jwt != null) {
//   window.location.href = '../common/signin.html'
// }
// function signup(){
// //console the variables 
// console.log("username %s = ",username," password %s = ",password," repassword %s = ",repassowrd)
// //create an object from the ajax
// //after creating the object call the api post to the given url
// //then set the header after send the json object to the payload 
// //if the respone is ok then it gives the alert success else gives error
// //if response status ok then it create jwt token into the localstorage
//         xhttp = new XMLHttpRequest();
// xhttp.open("POST","http://127.0.0.1:5000/v1/auth/register");
// xhttp.setRequestHeader("Content-Type", "application/json;");
// xhttp.send(JSON.stringify({
//     "username":username,
//     "password":password,
//     "email":email
// }));
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4) {
//       console.log(this.responseText)
//       const objects = JSON.parse(this.responseText);
//       console.log(objects);
//       if (objects['status'] == 'ok') {
//         localStorage.setItem("jwt", objects['accessToken']);
//         Swal.fire({
//           text: objects['message'],
//           icon: 'success',
//           confirmButtonText: 'OK'
//         }).then((result) => {
//           if (result.isConfirmed) {
//             window.location.href = './index.html';
//           }
//         });
//       } else {
//         Swal.fire({
//           text: objects['message'],
//           icon: 'error',
//           confirmButtonText: 'OK'
//         });
//       }
//     }
//   };
// }



$(document).ready(() => {
  $("#submit").click(() => {

  //initialize the username and password variables
   const username = document.getElementById("username").value
   const email = document.getElementById("email").value
   const password = document.getElementById("password").value             
  $.ajax({
       type: "POST",
       url: "http://127.0.0.1:5000/v1/auth/register",
       dataType: "json",
       data: {
        "username":username,
        "password":password,
        "email":email
       },
       success: function (data) {
          console.log(data)
          alert('Success');
  
       },
       error: function () {
        alert('Error');
       }
   });
  })
});






