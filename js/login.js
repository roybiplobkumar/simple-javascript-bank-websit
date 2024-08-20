
document.getElementById('btn-submit').addEventListener("click", function(){
    console.log("button clicked")
    const email=document.getElementById("user-email");
     const emailValue=email.value ;
   const password=document.getElementById('user-password');
   const passwordValue=password.value;
//    console.log(emailValue, passwordValue)
   if(emailValue==='biplobkumargk@gmail.com' && passwordValue==='biplob12') {
    window.location.href='bank.html'

   }
   else{
  alert('give me right password and email')
   }

});