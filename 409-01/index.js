const fname=document.getElementById("fname")
const lname=document.getElementById("lname")
const email=document.getElementById("email")
const pass=document.getElementById("pass")
const tele=document.getElementById("tele")
const bio=document.getElementById("bio")

const error = {
   fname: true,
   lname:true,
   email: true,
   pass: true,
   phno: true,
   bio:true
}

function  validateform(){
   var name =fname.value
    var surname=lname.value
   var mail=email.value
   var password= pass.value
   var mob =tele.value
   var text =bio.value

    var parafname=document.getElementById("parafname")
    var paralname=document.getElementById("paralname")
    var paraemail=document.getElementById("paraemail")
    var parapass=document.getElementById("parapass")
    var paratele=document.getElementById("paratele")
    var parabio=document.getElementById("parabio")

var emptyerror=document.getElementById("emptyerror")


  if(name.length < 3||name.length > 16){
   error.fname=true
    parafname.innerText="First name must be alphanumeric and 3-16 Characters"
  } 
  else{
   error.fname=false
    parafname.innerText= ""
  }


  if(surname.length <3||surname.length>16){
   error.lname=true

    paralname.innerText="Last name must be alphanumeric and 3-16 Characters"

 }
 else{
   error.lname=false
    paralname.innerText= ""
  }
 if(mail =="" ||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
   error.email=true
    paraemail.innerText=" Email must be  a valid address.e.g. example@example.com"

 }
 else{
   error.email=false

    paraemail.innerText= ""
  }
 if(password =="" || !/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
   error.pass=true

    parapass.innerText= "Password should contain atleast one number and one special character"

 }
 else{
   error.pass=false
    parapass.innerText= ""
  }
 if(mob =="" ||!/^\d{10}$/.test(mob)){
   error.phno=true
    paratele.innerText=" Please Enter  Valid Telephone Number"
 }
 else{
   error.phno=false
    paratele.innerText= ""
  }
 if(text =="" || !/^[a-z0-9._-\s]{8,50}$/.test(text)){
   error.bio=true
    parabio.innerText="Bio must container only lowercase letters, underscores,hyphens and be 8-50 characters"
 }
 else{
   error.bio=false
    parabio.innerText= ""
 }

  
}

function submitform(){


   const DataToSend = {
      fname: fname.value,
      lname:lname.value,
      email: email.value,
      pass: pass.value,
      phno: tele.value,
      bio:bio.value
  }
  if (error.fname === true || error.lname === true || error.email === true || error.pass === true || error.phno === true ||error.bio === true  ) {
   emptyerror.innerText = "Form values can't be empty"
   emptyerror.style.color="red"
   emptyerror.style.margin="1rem"

      console.log("errors are there");
  } else {
   
      console.log("button clicked");
      console.log("data", DataToSend);
      emptyerror.innerText = ""
      alert("Form Submitted")

  }

  fname.value =""
    lname.value =""
    email.value =""
    pass.value =""
    tele.value =""
    bio.value =""

   
}