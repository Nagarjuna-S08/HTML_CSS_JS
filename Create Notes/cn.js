

let btn= document.querySelector("button");
let imgdel



let getcontainer= document.querySelector(".p_tag_container")




btn.addEventListener("click",()=>{
    let p= document.createElement("p")
    p.setAttribute("contenteditable","true")
    let img=document.createElement("img")
    img.src="dustbin.png"
    img.className="todelete"
    getcontainer.appendChild(p).appendChild(img)
})





getcontainer.addEventListener("click",(e)=>{
   
    if(e.target.tagName == "IMG"){
        let tag= document.querySelector("."+e.target.className)
        tag.parentElement.remove()
    }
})
