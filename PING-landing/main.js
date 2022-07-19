const mail =document.querySelector('#e-mail');
const err =document.querySelector('#error-mess');
const form =document.querySelector('#form');

//check form submited 
form.addEventListener('click',function(e){
	 e.preventDefault();
  	 validateEmail();

});
//chceck press enter
form.addEventListener("keyup", function(e) {
  if (event.keyCode === 13){
    e.preventDefault();
    checkAllnotEmpty();  
    }
});

//function check if email is validate
function validateEmail(){
 //regex for eamil compare to email value
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  { //if good add class error and remove class hidden
     err.classList.add("hidden");
     mail.classList.remove("error");
     console.log("good");
    return (true)
  }
  //if is bad rmove class hidden and aclass error
    err.classList.remove("hidden");
    mail.classList.add("error");
    mail.placeholder='example@mail.com';
    console.log("bad");
    return (false)
}