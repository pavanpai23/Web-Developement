let button=document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML="<b>hwy click here</b> enjoy your click!"
})

button.addEventListener("contextmenu",()=>{
 alert("dont hack")
})

document.addEventListener("keydown",(e)=>{
        console.log(e,e.key, e.keycode)
        })


