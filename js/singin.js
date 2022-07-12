import Swal from 'sweetalert';  
function signIn() {
  //initialize the username and password variables
  const username = document.getElementById("username").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value    
  console.log(username,email,password)      

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://127.0.0.1:5000/v1/auth/register");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "username": username,
    "password": password,
    "email":email
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
    const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['message'] == 200) {
        Swal.fire({
          text: objects['message'],
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '../common/login.html';
            let x = document.getElementById("#test").style.display = "block"
            print(x)
          }
        });
        window.location.href = '../common/login.html';
        alert('success')
      }else {
        Swal.fire({
          text: objects['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        });
        alert("error")
        window.location.href = '../common/signin.html';
      }
    }
  };
  return false;
}





