const name = document.getElementById("name");
const password = document.getElementById("password");
<<<<<<< HEAD
cpassword = document.getElementById("cpassword");
=======
const confirm_password = document.getElementById("cpassword");
>>>>>>> b6ac812c4b7b58ebfba2eceb01d30e805761cc1a
const email = document.getElementById("email");
const country = document.getElementById("countries");
const zipCode = document.getElementById("zipcode");
const form = document.getElementById("form");
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = []
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  } 
  if (password.value != cpassword.value) {
    alert("Password NO! matchy matchy")
  }
  if (email.value.match(mailFormat)) {
    alert ("Valid email")
  } else {
    alert ("Hey go back and write a correct email")
  }

  if(country.value == "Default") {

    alert('Select your country from the list');
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  
})
