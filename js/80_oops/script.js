class animal{
    constructor(name){
        this.name=name
        console.log("object is created")
        
    }

    eats(){
        console.log("mahi kaha raha hoo")
        
    }

    jumps(){
        console.log("mahi udh raha ho")
    }
}

    class lion extends animal{
            constructor(name){
            super(name);
            console.log("object is created and he is a lion");
    }
}

    let a=new animal("Bunny");
  console.log(a)

  let a1=new animal("lion");
  console.log(a1);
  
  