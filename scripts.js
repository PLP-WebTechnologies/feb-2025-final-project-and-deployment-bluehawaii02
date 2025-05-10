
   const fname = document.getElementById("fname");
   const fname_error = document.getElementById("fname_error");
   const form = document.getElementById("form");
   const lname = document.getElementById("lname");
   const email= document.getElementById("email");
   const password= document.getElementById("password");
   const password_error= document.getElementById("password_error");
   const email_error= document.getElementById("email_error");
   const lname_error= document.getElementById("lname_error");
   const success = document.getElementById("success_message");
   
   


   form.addEventListener("submit", function(event){
      event.preventDefault();
      fname_error.textContent="";
      if(fname.value===""){
            fname_error.textContent="Please enter your first name";
            fname_error.style.color="red";
      }else if(fname.value.length<3){
            fname_error.textContent="Name must be at least 3 characters long";
            fname_error.style.color="red";
      }else{
            fname_error.textContent="";
      }
      lname_error.textContent="";
      if(lname.value===""){
            lname_error.textContent = "Please enter your last name";
            lname_error.style.color="red";
      }else{
            lname_error.textContent="";
      }
      email_error.textContent="";
      emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(email.value===""){
            email_error.textContent="Please enter your email address";
            email_error.style.color="red";
      }else if(!emailRegex.test(email.value)){
            email_error.textContent="Please enter a valid email address";
            email_error.style.color="red";
      }else{
            email_error.textContent="";
      }
      password_error.textContent="";
      if(password.value===""){
            password_error.textContent="Please enter your password";
            password_error.style.color="red";
      }else if(password.value.length<4){
            password_error.textContent="Password must be at least 4 characters long";
            password_error.style.color="red";
      }else if(password.value.length>10){
            password_error.textContent="Password must be at most 10 characters long";
            password_error.style.color="red";
      }else if(!/[0-9]/.test(password.value)){
            password_error.textContent="Password must contain at least one number";
            password_error.style.color="red";  
      }
      else if(!/[a-z]/.test(password.value)){
            password_error.textContent="Password must contain at least one lowercase letter";   
            password_error.style.color="red";
      }else if(!/[A-Z]/.test(password.value)){
            password_error.textContent="Password must contain at least one upercase letter";
            password_error.style.color="red";
      }else{
            password_error.textContent="";
      }
      
      if(fname_error.textContent==="" && lname_error.textContent==="" && email_error.textContent==="" && password_error.textContent===""){
            success.textContent = "successfully logged in...";
            setTimeout(function (){window.location.href = "home.html";},1000);
      }
})


