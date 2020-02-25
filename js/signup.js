function inputValues()
{
	var user = document.forms["signup_form"]["userName"].value;
	var pass = document.forms["signup_form"]["password"].value;
	var name = document.forms["signup_form"]["fullName"].value;
	var emailAd = document.forms["signup_form"]["email"].value;
	var phoneNum = document.forms["signup_form"]["phone"].value;

	if(user=="")
	{
		alert("Please Enter a username");
	}
	else if(name=="")
	{
		alert("Please Enter a valid name");
	}
	else if(phoneNum=="")
	{
		alert("Please Enter a Phone number");
	}
		else if(emailAd=="")
	{
		alert("Please Enter an email address");
	}

	if(pass=="")
	{
		alert("Please Enter a password");
	}
	else if(pass.length<8)
	{
		alert("Please enter a password with 8 characters or more.")
	}

}