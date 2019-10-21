const name = document.getElementById("contact-name"); // gets all the information that is held inside of the text box for each label
const email = document.getElementById("contact-email");
const phone = document.getElementById("contact-phone");
const submit = document.getElementById("contact-submit");
const message = document.getElementById("contact-message");
const feedback = document.getElementById("contact-feedback");
submit.addEventListener("click", e => {
  // click event listener
  e.preventDefault();
  feedback.innerHTML = `Thank you for your message ${name.value}`;
  name.value = "";
  email.value = "";
  phone.value = "";
});
// says thank you for your message and displays the persons name using the name value
