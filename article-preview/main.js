const shareButton = document.querySelector('#share1');
const shareButtonA = document.querySelector('#share2');
const user =document.querySelector('.user');
const shareDiv=document.querySelector('.share-div');


shareButton.addEventListener('click', e =>{
	user.classList.toggle('hidden');

	shareDiv.classList.toggle('hidden');
	}
	);

shareButtonA.addEventListener('click', e =>{
	user.classList.toggle('hidden');

	shareDiv.classList.toggle('hidden');
	}
	);
