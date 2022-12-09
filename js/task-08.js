const form = document.querySelector(".login-form");

form.addEventListener("submit", submitHandler);


function submitHandler(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
  }
  //const formData = new FormData(event.currentTarget);
  const formData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  }
 
  console.log(formData);
  
    event.currentTarget.reset();
}