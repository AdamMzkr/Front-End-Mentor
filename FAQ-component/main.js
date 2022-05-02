const listOfQuestions = document.querySelectorAll('.question');

for(let i=0; i<listOfQuestions.length;i++){
	listOfQuestions[i].addEventListener("click",function(){
		this.classList.toggle("active");
		let icon = this.children[0];
		icon.classList.toggle("turn")
		let content=this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight=null;
		}else {
			content.style.maxHeight=content.scrollHeight+"px";
		}
	})
}

