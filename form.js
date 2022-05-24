function processForm(e)
{
	e.preventDefault()

	var name = document.getElementById('name-input').value

	if(name.length === 0){
		alert("Please enter your name!")
		return false
	}

	var subject = document.getElementById('subject-input').value

	if(subject.length === 0){
		alert("Please enter a subject!")
		return false
	}

	var email = document.getElementById('email-input').value

	if(email.length === 0){
		alert("Please enter an email!")
		return false
	}

	var email_tester = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/

	if(!email_tester.test(email)){
		alert("Please enter a valid email address!")
	}

	var message = document.getElementById('message-input').value

    if(message.length === 0){
		alert("Please enter a message!")
		return false
	}

    console.log(name)
	console.log(subject)
	console.log(email)
	console.log(message)

    alert('Contact form submitted successfully!')

    e.target.reset()

	return false
}


var form = document.getElementById('contact-form')
if(form.attachEvent){
	form.attachEvent("submit", processForm)
} else {
	form.addEventListener("submit", processForm)
}