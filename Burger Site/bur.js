 let back1,content1,clickfun=document.querySelector(".others")
 console.log(clickfun)

 clickfun.addEventListener("click",function (e){
    
    if(e.target.tagName=="IMG"){
      content1=e.target;
      content1=content1.alt
      console.log(content1);
    }
    if(content1=="ff.png"){
      document.querySelector(".wholesite").style.backgroundImage="url('ff.png')"
      console.log("hiiiiiiii")
      document.querySelector(".itemname").style.overflow="hidden"
      document.querySelector(".itemname").style.fontSize="160px"
      document.querySelector(".ingredients").textContent="Ingredients: Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil, Natural Beef Flavor [wheat And Milk Derivatives]*), Dextrose, Sodium Acid Pyrophosphate (maintain Color), Salt."
      document.querySelector(".itemname").textContent="FRENCH FRIES"
    }
    if(content1=="burger.jpg"){
      document.querySelector(".wholesite").style.backgroundImage="url('burger.jpg')"
      console.log("hiiiiiiii")
      document.querySelector(".ingredients").textContent=" hamburgers are prepared by using minced meat, onions, eggs and crumbs as raw materials and minced meat is an essential ingredient. In addition, a hamburger containing an edible stuffing such as a boiled egg therein has been known."
      document.querySelector(".itemname").style.fontSize="160px"
      document.querySelector(".itemname").textContent="BEEFFRY BURGER"
    }
    if(content1=="momos.png"){
      document.querySelector(".wholesite").style.backgroundImage="url('momos.png')"
      console.log("hiiiiiiii")
      document.querySelector(".ingredients").textContent="Momos[a] are a type of steamed filled dumpling in Tibetan[1] and Nepali cuisine[2] that is also popular in neighbouring Bhutan and India.[3] Momos are usually served with a sauce known as achar influenced by the spices and herbs used within many South Asian cuisines. It can also be cooked as soup versions known as jhol momo where the broth is made from achar using a mixture of tomatoes, sesame seeds, chillies, cumin and coriander or mokthuk from boiling pork/buffalo bones mixed with various herbs and vegetables."
      document.querySelector(".itemname").style.fontSize="160px"
      document.querySelector(".itemname").style.overflow="hidden"
      document.querySelector(".itemname").textContent="CHICKEN MOMOS"
    }
    if(content1=="pizza.png"){
      document.querySelector(".wholesite").style.backgroundImage="url('pizza.png')"
      console.log("hiiiiiiii")
      document.querySelector(".ingredients").textContent="Pizza has three main elements: crust, sauce, and toppings. All of them have a variety of preparation methods. Crust: Traditional pizza crust is similar to bread dough. It's a combination of flour, water, yeast, sugar, salt, and oil."
      document.querySelector(".itemname").textContent="CHEESE PIZZA"
      document.querySelector(".itemname").style.fontSize="160px"
      document.querySelector(".itemname").style.overflow="hidden"
    }
    
 })
