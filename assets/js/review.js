const name = document.getElementById('review-name')
const comment = document.getElementById('review-comment')
const message = document.getElementById('review-message')
const submit = document.getElementById('review-submit')
const dateTime = new Date()
let output = ''
submit.addEventListener('click', _ => {
  name.value = ''
  comment.value = ''
  output += `
    <hr />
    <p style="text-align: center">
      Name: ${name.value}
      <br />
      Comment: ${comment.value}
      <br />
      Date: ${dateTime}
    </p>
  `
  message.innerHTML = output
})
