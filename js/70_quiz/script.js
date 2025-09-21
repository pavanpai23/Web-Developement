console.log("hello world")

let boxes=document.getElementsByClassName("box")
console.log(boxes)

Array.from(boxes).forEach(e=>{
    console.log(e)
})