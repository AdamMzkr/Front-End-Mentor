//inpputs
const name = document.querySelector('#firstN');
const lName= document.querySelector('#lastN');
const email= document.querySelector('#email');
const password =document.querySelector('#password');
//errors
const errors =document.querySelectorAll('.errorMes');

//submit button
const submit= document.querySelector('#submit');


submit.addEventListener( 'click', function(e){



e.preventDefault();

validateNotEmpty(name,errors[0]);
validateNotEmpty(lName,errors[1]);
validateEmail(email,errors[2]);
validateNotEmpty(password,errors[3]);

}
  );


function validateNotEmpty(input, error) {

  let valid = true;

  if (!input.value) {

    error.classList.add("visible");
    input.classList.add("error");
    input.placeholder='';
    error.setAttribute('aria-hidden', false);
    error.setAttribute('aria-invalid', true);
  }

  else{
  error.classList.remove("visible");
  input.classList.remove("error");
  	
  }
  return valid;
}


function validateEmail(mail,error) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    error.classList.remove("visible");
    input.classList.remove("error");

    return (true)
  }
    error.classList.add("visible");
    mail.classList.add("error");
    mail.placeholder='example@mail.com';
    error.setAttribute('aria-hidden', false);
    error.setAttribute('aria-invalid', true);
    
    return (false)
}

