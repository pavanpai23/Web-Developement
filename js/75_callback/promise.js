console.log('hi i am pavan');

let prom = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("no random no. supporiting you")
    }
    else {
        setTimeout(() => {
            console.log('yes i am done')
            resolve("pav")
        }, 3000)
    }

})


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("no random no. supporiting you")
    } else {
        setTimeout(() => {
            console.log('yes i am done with you')
            resolve("pav2")

        }, 1000)
    }
})

// let p3 = Promise.all([prom, prom2])
// p3.then((a) => {
//     console.log(a);
// }).catch(err => {
//     console.log(err);
// }
// )

let p3 = Promise.race([prom, prom2])
p3.then((a) => {
    console.log(a);
}).catch(err => {
    console.log(err);
}
)



