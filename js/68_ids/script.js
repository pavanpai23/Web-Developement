console.log("hello")

// let boxes=document.getElementsByClassName("box")
// console.log(boxes)

// boxes[1].style.backgroundColor = "red"  

// document.getElementById("red").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="green"


document.querySelectorAll(".box").forEach(e=>{
  e.style.backgroundColor="green"
})