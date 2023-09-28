const container = document.querySelector("#container");
const likeIcon = document.querySelector("i");
const count = document.querySelector("h3");

const likeCount = 0;

container.addEventListener("dblclick",function(){
    likeIcon.style.transform = 'translate(-50%, -50%) scale(1)'
    likeIcon.style.opacity = 0.8


    setTimeout(function(){
        likeIcon.style.opacity = '0'
    },1000)

    setTimeout(function(){
        likeIcon.style.transform = 'translate(-50%, -50%) scale(0)'
    },2000);
})