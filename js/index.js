document.getElementById("emailDivision").className = 'form-group';
document.getElementById("passwordDivision").className = 'form-group';
document.getElementById("confirmPasswordDivision").className = 'form-group';

document.getElementById("emailErrorSpan").className = '';
document.getElementById("passwordErrorSpan").className = '';
document.getElementById("confirmPasswordErrorSpan").className = '';


$(document).ready(function(){
  
    $( "#datepicker" ).datepicker({
    	
    	changeMonth: true,
        changeYear: true,
        yearRange: '1985:2015',
        dateFormat:'d MM, yy'
    });
    
});
function checkParameters()
{
	
  if(document.getElementById("email").value == "")
	  {
	  
	    document.getElementById("emailDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("emailErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("email").setAttribute("data-content", "Please Enter Valid Email Id");
	
	    
	    return false;
	  }
 
}