<?php

if(!isset($_SESSION['verificationemail']))
		//header('location:index.html');


?>




<!DOCTYPE html>
<html lang="en">
<head>
  <title>GoodCreed</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  
  <style>
 
  .vertical-center
  {
   
    margin-top:1%;
  }
  
  .colBorder
  {
   border-right:1px solid;
   border-color:black;
   height:350px;
  }
  
  .fixed
  {
   
   background-color: black;
   position:fixed;
  }
  </style>
  <script>

</script>
</head>
<body>

	
		
		
		<div class="container well">
	
	
		<div class="row ">
			<div class="col-sm-offset-3 col-sm-1">
				<img src="images/logo.jpg" class='img-rounded'>
			</div>
			<div class="col-sm-5 text-center vertical-center">
				<font color="orange" size="4px"><b>JNTUH College of Engineering Hyderabad</b> </font>(Autonomous)<br>
					Kukatpally, Hyderabad - 500 085, Telangana, India
			</div>
			<div class="col-sm-3 vertical-center">
						<div class = "btn-group" data-toggle = "buttons">
   							<button class = "btn btn-primary" onclick="window.open('home.html','_self')">Home</button>
      						<button class="btn btn-primary" onclick="window.open('aboutus.html','_self')">About Us</button>		
						</div>
			
			</div>
		</div>
		
		
		
		
		<div class="row" >
				<div class = "alert text-center" id="statusDivision">
					<img src="images/loader.gif">
				</div>
		</div>
		
		
		<div class="row text-center vertical-center">
		<font color="orange"><b>Just one More Step!!</b></font><br> We have sent you a verification code to your email.<br>Please enter it below to verify your account.
		 
		</div>
		<div class="row text-right vertical-center">
					<div class="col-sm-5 " style="margin-top:6px"><span class = "glyphicon glyphicon-lock"></span></div>
    				<div class="col-sm-2"> 
      					<input type="text" class="form-control" id="registrationDateOfBirth" placeholder="Verification Code	" data-toggle="popover"  data-trigger="hover" data-placement="top" data-content="">
      					<span class="" id="registrationDateOfBirthErrorSpan"></span>
    				</div>
		</div>
		
		<div class="row text-center vertical-center" >
				
		       		<button type="submit" class="btn btn-success">Submit</button>
		       		
				
		</div>
		
		
		<div class="row text-center vertical-center" >
				
		           <button type="submit" class="btn btn-primary">Resend</button>
				
		</div>
		
		
		<div class="row" >
				<div class = "alert text-center" id="statusDivision">
		
				</div>
		</div>
			
			
		</div>







</body>
</html>