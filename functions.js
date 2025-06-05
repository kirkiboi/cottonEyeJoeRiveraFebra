const photo = document.querySelector(".upload-photo");
const button1 = document.getElementById("buttons");
const button2 = document.getElementById("button");
const revealQuestionButton = document.querySelector(".carrot");
const hiddenMessage = document.querySelector(".hidden-message");

revealQuestionButton.addEventListener('click', ()=>{
    hiddenMessage.style.display = "block";
});

button1.addEventListener('click', ()=>{
    photo.style.display = "block";
    alert(`YAY! 🐇🎉 I’m hopping with joy! Below, you'll find the link`);
});

button2.addEventListener('click', ()=>{
    photo.style.display = "block";
    alert(`YES in all caps?! You’re the BEST! 🐰💞 You'll find the link below`);
});