const prevbtn=document.querySelector(".prev_btn");
const nextbtn=document.querySelector(".next_btn");
const imgs=document.querySelectorAll(".header_img ul img");

let n=0;

function displayimgs(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display="none";
    }
    imgs[n].style.display="block";
}
displayimgs();

prevbtn.addEventListener("click",(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    displayimgs();
})

nextbtn.addEventListener("click",(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    displayimgs();
})

const scrollproductimg=document.querySelectorAll(".pictures_of_products");

for (const key of scrollproductimg) {
    key.addEventListener("wheel",(e)=>{
        e.preventDefault();
        key.scrollLeft+=e.deltaY;
    })
}
