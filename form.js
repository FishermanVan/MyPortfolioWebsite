function processForm(e)
{
	e.preventDefault()

	const name = document.getElementById('name-input').value

	if(name.length === 0){
		alert("Please enter your name!")
		return false
	}

	const subject = document.getElementById('subject-input').value

	if(subject.length === 0){
		alert("Please enter a subject!")
		return false
	}

	const email = document.getElementById('email-input').value

	if(email.length === 0){
		alert("Please enter an email!")
		return false
	}

	const email_tester = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/

	if(!email_tester.test(email)){
		alert("Please enter a valid email address!")
	}

	const message = document.getElementById('message-input').value

    if(message.length === 0){
		alert("Please enter a message!")
		return false
	}

	console.log("The form will be submitted!\n")
	console.log("Name attribute is:" + name)
	console.log("\nSubject attribute is:" + subject)
	console.log("\nEmail attribute is:" + email)
	console.log("\nMessage attribute is:" + message)

	const api_url = "https://aun9wb8r9c.execute-api.us-east-1.amazonaws.com/Prod"

	let data = {
		name: name,
		email: email,
		message:message,
		subject: subject
	}

	fetch(api_url, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	  })
	  .then(response => response.json()) 
	  .then(json => console.log("Fetch API json response:", json, "\n"))
	  .catch(err => console.log("Error occurs when sending the Fetch API request", err, "\n"))


    alert('Contact form submitted successfully!')

    e.target.reset()

	return false
}


let form = document.getElementById('contact-form')
if(form.attachEvent){
	form.attachEvent("submit", processForm)
} else {
	form.addEventListener("submit", processForm)
}