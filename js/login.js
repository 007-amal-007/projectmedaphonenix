function login() {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://127.0.0.1:5000/v1/auth/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "email": username,
    "password": password
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
    const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['message'] == 200) {
        window.location.href = '../index.html';
        alert('success')
      }else {
        alert("error")
      }
    }
  };
  return false;
}