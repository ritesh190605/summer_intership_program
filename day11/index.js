// function result(marks) {
//     return new Promise((resolve, reject) => {

//         console.log("Checking Result...");

//         setTimeout(() => {
//             if (70 <= marks) {
                
//                 resolve(`Pass`);
//             } else {
//                 reject(`Failed`);
//             }
//         }, 2000);
//         console.log(`the student marks is ${marks}`)

//     });
// }


// let marks =73

// result(marks)
    

// .then((mess) => {
//         console.log(mess);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//fetch api

// fetch("https://fakestoreapi.com/products/1")
// .then((res)=>res.json())


// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });

//async functuon
// async function hello(){
//     return "hello i am god";
// }

// hello().then(res=>console.log(res)).catch(err=>console.log(err))

// async function sumof2(a,b) {
//     return a+b;

    
// }

// sumof2(5,9).then(res=>console.log(res)).catch(err=>console.log(err))


async function pin(pin) {
    if(pin===1769){
        return "accpeted";
    }else return "denied";
}
pin(1769).then(res=>console.log(res)).catch(err=>console.log(err))