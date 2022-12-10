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


   let firstname= document.getElementById('firstName').value;
   if(!firstname){
    document.getElementById('firstnameError').innerHTML="Please fill the required field"
   }
   else if(/[^a-zA-Z]/.test(firstname)){
    document.getElementById('firstnameError').innerHTML="Special character and numbers are not allowed"
   }



   let lastname=document.getElementById('lastName').value;
   if(!lastname){
    document.getElementById('lastnameEroor').innerHTML="Please fill the required field"
   }
   else if(/[^a-zA-Z]/.test(lastname)){
    document.getElementById('lastnameEroor').innerHTML="Special character and numbers are not allowed"
   }

   let dob=document.getElementById('dateOfBirth').value;
if(!dob){
    document.getElementById('dobError').innerHTML="Please fill the required fields"
}

   let email=document.getElementById('email').value;

   if(!email){
    document.getElementById('emailError').innerHTML="Please fill the required field"
   }
   else if(/[^a-z@0-9.]/.test(email)){
    document.getElementById('emailError').innerHTML="Please provide valid email"
   }
 

   let fatherfirstname=document.getElementById('fatherFirstName').value
   if(!fatherfirstname){
    document.getElementById('fatherfirstnameError').innerHTML="Please fill the required field"
   }
   else if(/[^a-zA-Z]/.test(fatherfirstname)){
    document.getElementById('fatherfirstnameError').innerHTML="Special character and numbers are not allowed"
   }

   let fatherlastname=document.getElementById('fatherLastName').value;
   if(!fatherlastname){
    document.getElementById('fatherlastnameError').innerHTML="Please fill the required field"
   }
   else if(/[^a-zA-Z]/.test(fatherlastname)){
    document.getElementById('fatherlastnameError').innerHTML="Special character and numbers are not allowed"
   }

   let motherfirstname=document.getElementById('motherFirstName').value
   if(!motherfirstname){
    document.getElementById('motherfirstnameError').innerHTML="Please fill the required field"
   }
   else if(/[^a-zA-Z]/.test(motherfirstname)){
    document.getElementById('motherfirstnameError').innerHTML="Special character and numbers are not allowed"
   }

   let motherlastname=document.getElementById('motherLastName').value;
   if(!motherlastname){
    document.getElementById('motherlastnameError').innerHTML="Please fill the required field"
   }
   else if(/[^a-zA-Z]/.test(motherlastname)){
    document.getElementById('motherlastnameError').innerHTML="Special character and numbers are not allowed"
   }
let gendermale=document.getElementById('genderMale').value;
let genderfemale=document.getElementById('genderFemale').value;

if(document.querySelectorAll('input[type="radio"]:checked').length === 0){
    document.getElementById('genderError').innerHTML="Select required fields";
}


   let national=document.getElementById("nationality").value;
   if(!national){
    document.getElementById("nationalitynameError").innerHTML="Please fill the required field"
   }
   else if(/[^a-zA-Z]/.test(national)){
    document.getElementById("nationalitynameError").innerHTML="Special character and numbers are not allowed"
   }

   let homeaddress=document.getElementById("homeAddress").value;
   if(!homeaddress){
    document.getElementById("addresserror").innerHTML="Please fill the required field"
   }
   else if (/[^a-zA-Z]/.test(homeaddress)){
    document.getElementById("addresserror").innerHTML="Special character and numbers are not allowed"
   }

   let city=document.getElementById("cityerror").value;
   if(!city){
    document.getElementById("cityerror").innerHTML="Please fill the required field"
   }
   else if (/[^a-zA-Z]/.test(city)){
    document.getElementById("cityerror").innerHTML="Special character and numbers are not allowed"
   }

   let phone=document.getElementById("mobilerror").value;
   if(!phone){
    document.getElementById("mobilerror").innerHTML="Please fill the required field"
   }
  else if(phone.toString().length>10){
    document.getElementById("mobilerror").innerHTML="Please fill the required field"
  }


   

}