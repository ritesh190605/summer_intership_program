// function greet(name,callback){
//     console.log(`I am ${name}`);
//     callback();
// }

// function role(){
//     console.log("I am a trainer");

// }

// greet("Ritesh ", role);


// function result(marks,callback){
//     if(marks<70)
//         console.log("Failed");
//     else
//         console.log("Passed");

//     callback(marks);
// }

// function mark(num){
//     console.log(`the student marks are ${num}`);
// }

// result(75,mark)


// setTimeout(()=> {
//     console.log("Bach Gayeeeee .......")
// },3000);



// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//         console.log("Step 2");
//         setTimeout(() => {
//             console.log("Step 3");
//             setTimeout(() => {
//                 console.log("Step 4")
                
//             }, 1000);
            
//         }, 1000);

        
//     }, 1000);
    
// }, 1000);



// function foodinfo(callback){
//     console.log("order placed");   
//     callback(info);

// }

// function info(){

// setTimeout(() => {
//     console.log("Order Recieved");
//     setTimeout(() => {
//         console.log("Resturant Preparing the food");
//         setTimeout(() => {
//             console.log("Food Packed");
//             setTimeout(() => {
//                 console.log("Delivery partner picked up");
//                 setTimeout(() => {
//                     console.log("Food Delivered")
                    
//                 }, 2000);
                
//             }, 2000);
            
//         }, 2000);

        
//     }, 2000);
    
// }, 2000);
// }
// foodinfo(info)



let myPromise = new Promise((resolve, reject) => {
    let result=true;

    if(result)
        resolve("promise resolved");
    else
        reject("promise rejected");
}

)

myPromise.then((mess)=> (console.log(mess)))
.catch((err)=>{
    console.log(err);
})