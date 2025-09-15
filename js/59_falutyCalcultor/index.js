let random =Math.random()
let a =prompt("Enter The First Number")
let c =prompt("Enter The Operation")
let b =prompt("Enter The Second Number")

let obj ={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random>0.1){
  //perform correct calculation
  console.log(`the Result is ${a} ${c} ${b}`)
     alert(`the Result is ${eval(`${a} ${c} ${b}`)}`)

}

else{
   //perform wrong calculation
       c=obj[c]
   alert(`the Result is ${eval(`${a} ${c} ${b}`)}`)
 
}