console.log("connection succesfully")


function validate(){
    document.getElementById('firstnameError').innerHTML='';
    document.getElementById('lastnameEroor').innerHTML='';
    document.getElementById('dobError').innerHTML="";
    document.getElementById('emailError').innerHTML='';
    document.getElementById('fatherlastnameError').innerHTML="";
    document.getElementById('fatherfirstnameError').innerHTML="";
    document.getElementById('motherfirstnameError').innerHTML="";
    document.getElementById('motherlastnameError').innerHTML="";
    document.getElementById("nationalitynameError").innerHTML="";
    document.getElementById('genderError').innerHTML="";
    document.getElementById("addresserror").innerHTML="";
    document.getElementById("cityerror").innerHTML="";
    document.getElementById("mobilerror").innerHTML="";
    document.getElementById("telephoneerror").innerHTML="";
    $('#countryerror').text("");
    

let status=true;
   let firstname= document.getElementById('firstName').value;
   if(!firstname){
    document.getElementById('firstnameError').innerHTML="Please fill the required field"
    status=false
   }
   else if(/[^a-zA-Z]/.test(firstname)){
    document.getElementById('firstnameError').innerHTML="Special character and numbers are not allowed"
    status=false
   }



   let lastname=document.getElementById('lastName').value;
   if(!lastname){
    document.getElementById('lastnameEroor').innerHTML="Please fill the required field"
    status=false
   }
   else if(/[^a-zA-Z]/.test(lastname)){
    document.getElementById('lastnameEroor').innerHTML="Special character and numbers are not allowed"
    status=false
   }

   let dob=document.getElementById('dateOfBirth').value;
if(!dob){
    document.getElementById('dobError').innerHTML="Please fill the required fields"
    status=false
}

   let email=document.getElementById('email').value;

   if(!email){
    document.getElementById('emailError').innerHTML="Please fill the required field"
    status=false
   }
   else if(/[^a-z@0-9.]/.test(email)){
    document.getElementById('emailError').innerHTML="Please provide valid email"
    status=false
   }
 

   let fatherfirstname=document.getElementById('fatherFirstName').value
   if(!fatherfirstname){
    document.getElementById('fatherfirstnameError').innerHTML="Please fill the required field"
    status=false
   }
   else if(/[^a-zA-Z]/.test(fatherfirstname)){
    document.getElementById('fatherfirstnameError').innerHTML="Special character and numbers are not allowed"
    status=false
   }

   let fatherlastname=document.getElementById('fatherLastName').value;
   if(!fatherlastname){
    document.getElementById('fatherlastnameError').innerHTML="Please fill the required field"
    status=false
   }
   else if(/[^a-zA-Z]/.test(fatherlastname)){
    document.getElementById('fatherlastnameError').innerHTML="Special character and numbers are not allowed"
    status=false
   }

   let motherfirstname=document.getElementById('motherFirstName').value
   if(!motherfirstname){
    document.getElementById('motherfirstnameError').innerHTML="Please fill the required field"
    status=false
   }
   else if(/[^a-zA-Z]/.test(motherfirstname)){
    document.getElementById('motherfirstnameError').innerHTML="Special character and numbers are not allowed"
    status=false
   }

   let motherlastname=document.getElementById('motherLastName').value;
   if(!motherlastname){
    document.getElementById('motherlastnameError').innerHTML="Please fill the required field"
    status=false
   }
   else if(/[^a-zA-Z]/.test(motherlastname)){
    document.getElementById('motherlastnameError').innerHTML="Special character and numbers are not allowed"
    status=false
   }
let gendermale=document.getElementById('genderMale').value;
let genderfemale=document.getElementById('genderFemale').value;

if(document.querySelectorAll('input[type="radio"]:checked').length === 0){
    document.getElementById('genderError').innerHTML="Select required fields";
    status=false
}


   let national=document.getElementById("nationality").value;
   if(!national){
    document.getElementById("nationalitynameError").innerHTML="Please fill the required field"
    status=false
   }
   else if(/[^a-zA-Z]/.test(national)){
    document.getElementById("nationalitynameError").innerHTML="Special character and numbers are not allowed"
    status=false
   }

   let homeaddress=document.getElementById("homeAddress").value;
   if(!homeaddress){
    document.getElementById("addresserror").innerHTML="Please fill the required field"
    status=false
   }
   else if (/[^a-zA-Z]/.test(homeaddress)){
    document.getElementById("addresserror").innerHTML="Special character and numbers are not allowed"
    status=false
   }

   let city=document.getElementById("city").value;
   if(!city){
    document.getElementById("cityerror").innerHTML="Please fill the required field"
    status=false
   }
   else if (/[^a-zA-Z]/.test(city)){
    document.getElementById("cityerror").innerHTML="Special character and numbers are not allowed"
    status=false
   }

   let telephone=document.getElementById("telephoneHome").value;
   if(!telephone){
    document.getElementById("telephoneerror").innerHTML="Please fill the required field"
    status=false
   }
  else if(telephone.toString().length>12){
    document.getElementById("telephoneerror").innerHTML="Maximum 12 character are allowed"
    status=false
  }


   let phone=document.getElementById("telephoneMobile").value;
   if(!phone){
    document.getElementById("mobilerror").innerHTML="Please fill the required field"
    status=false
   }
  else if(phone.toString().length>10){
    document.getElementById("mobilerror").innerHTML="Maximum 10 character are allowed"
    status=false
  }

  let opt=$('#country option:selected').val();
  if(opt==''){
    $('#countryerror').text("please fill required fields");
    status=false
  }


  if(status){
   alert("continue to next page");
   window.location.replace("page2.html")
  }





   

}