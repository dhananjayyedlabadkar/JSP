const idStatus  = document.querySelector("h5");
const addFriend = document.querySelector("#add");
const removeFriend = document.querySelector("#remove");

addFriend.addEventListener("click",function(){
    idStatus.innerHTML = "Friends"
    idStatus.style.color = "green"
})

removeFriend.addEventListener("click",function(){
    idStatus.innerHTML = "Stranger"
    idStatus.style.color = "red"
})