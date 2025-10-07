let a=prompt("enter first number");

let b=prompt("enter second number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("this is not allowed")
}

let sum=parseInt(a)+parseInt(b);

try {
    console.log("sum is :",sum*x)
    
} catch (error) {
    console.log("error a gaya bhai");
}
    finally{
        console.log("files are being closed and db connection is closed");
        //if we not put finally then also it comes but if funciton is decleared and we return true then below line not excuted so if we add finally then it is exucuted
    }
