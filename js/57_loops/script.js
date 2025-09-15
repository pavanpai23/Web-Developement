console.log("i am loops")

let a=1;

for (let i = 1; i <= 100; i++) {
   console.log(i)
}     

let obj={
    name:"pavan",
    role:"programmer",
    Company:"anjaniputra"
}

for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
}

let i=5;
while (i<6) {
    console.log(i)
    i++;
}
