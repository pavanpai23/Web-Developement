let button=document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML="<b>hwy click here</b> enjoy your click!"
})

document.addEventListener("keydown",(e) =>{
        console.log(e.ekey, e.keycode);
        })

