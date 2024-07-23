const hesder = document.querySelector(".header")
window.addEventListener("scroll",()=>{
    if(window.screenY > 0){
        header.classlist.add("shrink")
    }else{
        header.classlist.remove("shrink")
    }
})