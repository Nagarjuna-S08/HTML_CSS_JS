let ff =0,coca = 0,marpiz = 0,tompiz = 0
let bur=0
let t1,t2,t3,t4,t5,t6=0
let itemcount=[ff,bur,coca,marpiz,tompiz]
const res=document.querySelector(".result")
console.log(res)

function total(){
    const nameofitem=document.createElement("h4")
    nameofitem.textContent="Total"
    nameofitem.classList.add("do6")
    document.querySelector(".head6").appendChild(nameofitem)
    const numberofitem=document.createElement("h4")
    numberofitem.textContent=t6

    numberofitem.classList.add("to")                    
    document.querySelector(".head6").appendChild(numberofitem)
}
total()

function update(){
    let amtff=120,amtcoca=80,amtbur=250,amtmarpiz=320,amttompiz=280
    let h4ff=document.querySelector(".no1")
    let h4bur=document.querySelector(".no2")
    let h4coca=document.querySelector(".no3")
    let h4marpiz=document.querySelector(".no4")
    let h4tompiz=document.querySelector(".no5")
    let h4total=document.querySelector(".to")
    console.log(h4tompiz+"***************************");
    t1=ff*amtff
    t2=bur*amtbur
    t3=coca*amtcoca
    t4=marpiz*amtmarpiz
    t5=tompiz*amttompiz
    h4ff.textContent=ff*amtff
    h4bur.textContent=bur*amtbur
    h4coca.textContent=coca*amtcoca
    h4marpiz.textContent=marpiz*amtmarpiz
    h4tompiz.textContent=tompiz*amttompiz
    console.log(h4ff.textContent)
    t6=t1+t2+t3+t4+t5
    h4total.textContent=t6
}
function resultprintingfun(){
    console.log("inside the fun")
    if(ff!=0||bur!=0||coca!=0||marpiz!=0||tompiz!=0){
        if(ff!=0 && document.querySelector(".do1")==null){ 
            const nameofitem=document.createElement("h4")
            nameofitem.textContent="Freanch Fries"
            nameofitem.classList.add("do1")
            document.querySelector(".head1").appendChild(nameofitem)
            const numberofitem=document.createElement("h4")
            numberofitem.classList.add("no1")
            document.querySelector(".head1").appendChild(numberofitem)

        }
        if(bur!=0 && document.querySelector(".do2")==null){ 
            const nameofitem=document.createElement("h4")
            nameofitem.textContent="Burger"
            nameofitem.classList.add("do2")
            document.querySelector(".head2").appendChild(nameofitem)
            const numberofitem=document.createElement("h4")
            numberofitem.classList.add("no2")
            document.querySelector(".head2").appendChild(numberofitem)

        }
        if(coca!=0 && document.querySelector(".do3")==null){ 
            const nameofitem=document.createElement("h4")
            nameofitem.textContent="Coca Cola"
            nameofitem.classList.add("do3")
            document.querySelector(".head3").appendChild(nameofitem)
            const numberofitem=document.createElement("h4")
            numberofitem.classList.add("no3")
            document.querySelector(".head3").appendChild(numberofitem)

        }
        if(marpiz!=0 && document.querySelector(".do4")==null){ 
            const nameofitem=document.createElement("h4")
            nameofitem.textContent="Margarita Pizza"
            nameofitem.classList.add("do4")
            document.querySelector(".head4").appendChild(nameofitem)
            const numberofitem=document.createElement("h4")
            numberofitem.classList.add("no4")
            document.querySelector(".head4").appendChild(numberofitem)

        }
        if(tompiz!=0 && document.querySelector(".do5")==null){ 
            const nameofitem=document.createElement("h4")
            nameofitem.textContent="Tomato Pizza"
            nameofitem.classList.add("do5")
            document.querySelector(".head5").appendChild(nameofitem)
            const numberofitem=document.createElement("h4")
            numberofitem.classList.add("no5")
            document.querySelector(".head5").appendChild(numberofitem)

        }
        
        
    }
}

function counting(arr){
    arr.forEach(element => {
        
        if(element!="divitem"){
            if(element=="french-fries"){
                ff += 1
                console.log(ff)
                
            }
            else if(element=="burger"){
                bur += 1
                console.log(bur)
            }
            else if(element=="coca-cola"){
                coca += 1
                console.log(coca)
            }
            else if(element=="margarita-pizza"){
                marpiz += 1
                console.log(marpiz)
            }
            else if(element=="tomato-pizza"){
                tompiz += 1
                console.log(tompiz)
            }
            resultprintingfun()
            console.log("calling the resltprintfun")
            update()
        }
    });
   
}
function addcart(event){
  const ele= event.target.parentElement.className
  let arr =ele.split(" ")
  console.log(arr)
  console.log(itemcount)
  counting(arr)
}

