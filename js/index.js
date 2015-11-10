

$(document).ready(function(){
  
    $( "#registrationDateOfBirth" ).datepicker({
    	
    	changeMonth: true,
        changeYear: true,
        yearRange: '1985:2015',
        dateFormat:'d MM, yy'
    });
    
    $('[data-toggle="popover"]').popover();
    
});




clearParameters();

function clearParameters()
{
	
	document.getElementById("registrationFirstNameDivision").className = 'form-group';
	document.getElementById("registrationLastNameDivision").className = 'form-group';
	document.getElementById("registrationEmailDivision").className = 'form-group';
	document.getElementById("registrationPasswordDivision").className = 'form-group';
	document.getElementById("registrationConfirmPasswordDivision").className = 'form-group';
	document.getElementById("registrationDateOfBirthDivision").className = 'form-group';

	document.getElementById("registrationFirstNameErrorSpan").className = '';
	document.getElementById("registrationLastNameErrorSpan").className = '';
	document.getElementById("registrationEmailErrorSpan").className = '';
	document.getElementById("registrationPasswordErrorSpan").className = '';
	document.getElementById("registrationConfirmPasswordErrorSpan").className = '';
	document.getElementById("registrationDateOfBirthErrorSpan").className = '';


	
	document.getElementById("loginEmailDivision").className = 'form-group';
	document.getElementById("loginPasswordDivision").className = 'form-group';
	
	document.getElementById("loginEmailErrorSpan").className = '';
	document.getElementById("loginPasswordErrorSpan").className = '';
	
}



function checkRegistrationParameters()
{
	clearParameters();
	
	
	if(document.getElementById("registrationFirstName").value == "")
	  {
	  
	    document.getElementById("registrationFirstNameDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("registrationFirstNameErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("registrationFirstName").setAttribute("data-content", "Please Enter First Name");
	   document.getElementById("registrationFirstName").focus();
	   
	    
	    return false;
	  }

	  if(document.getElementById("registrationLastName").value == "")
	  {
	  
	    document.getElementById("registrationLastNameDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("registrationLastNameErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("registrationLastName").setAttribute("data-content", "Please Enter Last Name");
	   document.getElementById("registrationLastName").focus();
	   

	    
	    return false;
	  }

	  
  if(document.getElementById("registrationEmail").value == "")
	  {
	  
	    document.getElementById("registrationEmailDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("registrationEmailErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("registrationEmail").setAttribute("data-content", "Please Enter Email address");
	   document.getElementById("registrationEmail").focus();
	   
	    
	    return false;
	  }
 
  
  if(document.getElementById("registrationPassword").value == "")
  {
  
    document.getElementById("registrationPasswordDivision").className = 'form-group has-error has-feedback';
    document.getElementById("registrationPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
   document.getElementById("registrationPassword").setAttribute("data-content", "Please Enter Password");
   document.getElementById("registrationPassword").focus();
   
    
    return false;
  }

  if(document.getElementById("registrationConfirmPassword").value == "")
  {
  
    document.getElementById("registrationConfirmPasswordDivision").className = 'form-group has-error has-feedback';
    document.getElementById("registrationConfirmPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
   document.getElementById("registrationConfirmPassword").setAttribute("data-content", "Please Confirm Password");
   document.getElementById("registrationConfirmPassword").focus();
   

    
    return false;
  }

  
  if(document.getElementById("registrationDateOfBirth").value == "")
  {
  
    document.getElementById("registrationDateOfBirthDivision").className = 'form-group has-error has-feedback';
    document.getElementById("registrationDateOfBirthErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
   document.getElementById("registrationDateOfBirth").setAttribute("data-content", "Please Enter Date Of Birth");
   document.getElementById("registrationDateOfBirth").focus();
   
    
    return false;
  }

}












function checkLoginParameters()
{
	
	clearParameters();
	
	if(document.getElementById("loginEmail").value == "")
	 {
	  
		document.getElementById("loginEmailDivision").className = 'form-group has-error has-feedback';
		document.getElementById("loginEmailErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
		document.getElementById("loginEmail").setAttribute("data-content", "Please Enter Email address");
		document.getElementById("loginEmail").focus();
		return false;
	 }


	if(document.getElementById("loginPassword").value == "")
	{

		document.getElementById("loginPasswordDivision").className = 'form-group has-error has-feedback';
		document.getElementById("loginPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
		document.getElementById("loginPassword").setAttribute("data-content", "Please Enter Password");
		document.getElementById("loginPassword").focus();
		return false;
	}


}