


var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = '../common/reminder.html'
}


$(document).ready(function() {
  // bind the form submit event to our function
  $("#loginForm").bind('submit', function(e) {
      // prevent page refresh
      e.preventDefault();
      // post the data
      var ajax=$.ajax({
          type: "POST",
          data: $("#loginForm").serialize(),
          url: "http://127.0.0.1:5000/login"
      }).done(function(data){
          console.log('done!')
      });
      ajax.fail(function(data){
          console.log('error!');
      });
  });
});

function login() {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://127.0.0.1:5000/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "email": username,
    "password": password
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
    const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['status'] == 'ok') {
        localStorage.setItem("jwt", objects['accessToken']);
        Swal.fire({
          text: objects['message'],
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '../common/reminder.html';
          }
        });
      } else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };
  return false;
}