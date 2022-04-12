console.log('connect');
const submit = document.querySelector('#submit');
const formDiv = document.querySelector('.rates-form');
const thankYouDiv =document.querySelector('.thank-you');
const formInputs= document.querySelectorAll('.round-btn');
let rate =0;
const rateSpan=document.querySelector('#rate');

actualRate();

submit.addEventListener('click', e => {
    if(rate!=0){
        console.log('work');
  formDiv.classList.add('hidden');
  thankYouDiv.classList.toggle('hidden');
    }
	else(
        alert("Please rate me!"))

});

function actualRate(){
formInputs.forEach(item=>{
 item.onclick=function(e){
 	rate=this.value;
 	console.log(rate);
 	rateSpan.innerHTML =rate;
 	}
  }
 )
}

