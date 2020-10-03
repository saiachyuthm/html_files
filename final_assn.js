function validateFirstName() {
	var fName = document.getElementById("firstName").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

	if(re1.test(fName)){
		document.getElementById("firstNamePrompt").style.color = "green";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>valid</strong>";
		return true;
	}
	else{
		document.getElementById("firstNamePrompt").style.color = "Red";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2-15 charecters</strong>";
		return false;
	}
}

function validateLastName() {
	var lName = document.getElementById("lastName").value;
	var re2 = /^[a-zA-Z\s\'\-]{2,25}$/;

	if(re2.test(lName)){
		document.getElementById("lastNamePrompt").style.color = "green";
		document.getElementById("lastNamePrompt").innerHTML = "<strong>valid</strong>";
		return true;
	}
	else{
		document.getElementById("lastNamePrompt").style.color = "Red";
		document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter 2-25 charecters</strong>";
		return false;
	}
}

function validatePhone() {
	var phoneNumber = document.getElementById("phone").value;
	var re3 = /^\d{3}-\d{3}-\d{4}$/;

	if(re3.test(phoneNumber)){
		document.getElementById("phonePrompt").style.color = "green";
		document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
		return true;
	}
	else{
		document.getElementById("phonePrompt").style.color = "Red";
		document.getElementById("phonePrompt").innerHTML = "<strong>Use xxx-xxx-xxxx format</strong>";
		return false;
	}
}
function validateMail() {
	var email = document.getElementById("mail").value;
	var re4 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if(re4.test(email)){
		document.getElementById("mailPrompt").style.color = "green";
		document.getElementById("mailPrompt").innerHTML = "<strong>valid</strong>";
		return true;
	}
	else{
		document.getElementById("mailPrompt").style.color = "Red";
		document.getElementById("mailPrompt").innerHTML = "<strong>Invalid Email Address</strong>";
		return false;
	}
}
