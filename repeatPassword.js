//Variables
var password = document.getElementById("psw");
  
var confirm_password = document.getElementById("pswRepeat");

// Data Processing 

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;