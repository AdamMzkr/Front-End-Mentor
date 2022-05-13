const shareButton = document.querySelector('#share');
const user =document.querySelector('.user');
const avatar=document.querySelector('.avatar');
const detail=document.querySelector('.name-detail')
const shareDiv=document.querySelector('.share-div');


shareButton.addEventListener('click', e =>{
	user.classList.toggle('active-mobile');

	avatar.classList.toggle('hidden');
	detail.classList.toggle('hidden');
	shareDiv.classList.toggle('hidden');
	}
);




