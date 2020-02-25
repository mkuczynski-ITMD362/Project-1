function inputValues()
{
	var user = document.forms["signup_form"]["userName"].value;
	if(user=="")
	{
		alert("Please Enter a username");
	}
}