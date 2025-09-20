let a=[32,33,1,13,43,54];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }


a.forEach((value,index,arr) => {
    console.log(value,index,arr);
});


let obj=[
    a=1,
    b=3,
    c=7
]

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key,obj)
}