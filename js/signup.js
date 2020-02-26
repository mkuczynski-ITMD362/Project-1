function inputValues()
{
	var fullName = document.forms["signup_form"]["fullName"].value;
	var email = document.forms["signup_form"]["email"].value;
	var phone = document.forms["signup_form"]["phone"].value;
	var shoeSize = document.forms["signup_form"]["shoeSize"].value;
	var ballWeight = document.forms["signup_form"]["ballWeight"].value;

	if(fullName=="")
	{
		alert("Please Enter your Name");
	}
	else if(email=="")
	{
		alert("Please Enter your Email Address");
	}
		else if(shoeSize=="")
	{
		alert("Please Enter your Shoe Size");
	}
	else if(ballWeight=="")
	{
		alert("Please Enter your Ball Weight");
	}
	else if(phone.length!=10)
	{
		alert("Please enter a valid 10 digit phone number");
	}
	
}