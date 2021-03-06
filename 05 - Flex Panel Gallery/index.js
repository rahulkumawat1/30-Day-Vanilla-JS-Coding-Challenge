const panels = document.querySelectorAll(".panel");

function addOpen(){
   panels.forEach(panel => {
       if(panel != this)
       {
           if(panel.classList.contains("open"))
            { 
                panel.classList.remove("open");
            }
       }
   });
   this.classList.toggle("open");
}


function addOpenActive(e){
    if(e.propertyName.includes("flex"))
        this.classList.toggle("open-active");
}

panels.forEach(panel => panel.addEventListener("click",addOpen));
panels.forEach(panel => panel.addEventListener("transitionend",addOpenActive));