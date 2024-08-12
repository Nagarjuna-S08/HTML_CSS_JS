const h21=document.querySelector(".signup")
const h22=document. querySelector(".login")
console.log(h21)
console.log(h22)
function add1(){
    h22.classList.add("login2")
    console.log("hrloo")
}
h21.addEventListener("click",function (){
    h22.classList.remove("login2")
})