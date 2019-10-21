const name = document.getElementById("review-name"); // gets all the information that is held inside of the text box for each label
const comment = document.getElementById("review-comment");
const message = document.getElementById("review-message");
const submit = document.getElementById("review-submit");
const dateTime = new Date(); // gets the date and time for use on click
let output = "";
submit.addEventListener("click", _ => {
  // if the button gets clicked
  name.value = "";
  comment.value = "";
  output += `                                                     
    <br/>
    <p style="text-align: center">
      Name: ${name.value}
      <br/>
      Comment: ${comment.value}
      <br/>
      Date: ${dateTime}
    </p>
  `;
  //get the value for each input
  message.innerHTML = output;
  //output it to the message div on the html (a little different from the other js wanted to try something different)
});
