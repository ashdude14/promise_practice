let myPromise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1 resolved");
    },2000)});
let myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise2 resolved")
    },6000);
})
let myPromise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise3 resolved")
    },1000);
})
    console.log("Before calling promise");
    myPromise1.then((succesMessage)=>{
        console.log(" From callback1 " + succesMessage);
        myPromise2.then((succesMessage)=>{
            console.log(" From callbak2"+succesMessage);
        })
    });
    myPromise3.then((succesMessage)=>{
        console.log(" Frome callback 3"+succesMessage);
    })
    console.log("After calling promise");