const name = document.getElementById('contact-name')
const email = document.getElementById('contact-email')
const phone = document.getElementById('contact-phone')
const submit = document.getElementById('contact-submit')
const message = document.getElementById('contact-message')
submit.addEventListener('click', e => {
  e.preventDefault()
  message.innerHTML = `Thank you for your message ${name.value}`
  name.value = ''
  email.value = ''
  phone.value = ''
})
