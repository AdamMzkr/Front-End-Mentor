const emailInput =document.querySelector('#input-email');
const button =document.querySelector('#btn-arrow');
const err =document.querySelector("#error");


function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

button.addEventListener('click', function () {
  const email = emailInput.value;
  if (validateEmail(email)) {
    
  } else {
  	err.classList.toggle('hidden');
  }
});
