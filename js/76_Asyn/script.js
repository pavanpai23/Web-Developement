// async function getdata(){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         resolve(455)
//       },3000)
//     })
// }



/*settle means resolve or reject
  resolve means promise has settled successfully
  reject means promise has not settled successfully
*/


async function getdata(){
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   let data =await x.json()
  //   console.log(x);
  //   return 455    
  // }


    
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}


async function main(){
console.log("loding module");

console.log("DO something else");

console.log("get data");

let data= await getdata()
console.log(data)

console.log("process data");

console.log("task2")
}

main()
