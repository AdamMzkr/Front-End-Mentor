const name = document.querySelector('#firstN');
const submit= document.querySelector('#submit');
const error =document.querySelector('#errorM');

submit.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();

  let valid = true;

  if (!name.value) {

    error.classList.add("visible");
    name.classList.add("error");
    name.placeholder='';
    error.setAttribute('aria-hidden', false);
    error.setAttribute('aria-invalid', true);
  }

  else{
  	error.classList.remove("visible");
    name.classList.remove("error");
  }
  return valid;
}
