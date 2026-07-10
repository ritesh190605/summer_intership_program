//creaitng functions
const sq =(y) => {
    console.log("square is",y*y);
}

sq(5);

const cube = (x) => {
    console.log("cube is ",x*x*x);
}

cube(2);


let name = "pranjal";
let age = 20;
let role = "student";

//concatination
console.log("I am "+name+"and my age is "+age+", my role here is "+role);
console.log(`I am ${name} and my age is ${age}, my role here is ${role}`);

//destructing array and objects
let arr = [2,3,6,9];
console.log(arr[1]);
//pop ,push , shift , unshift, length, concatinate
arr.push(10);
console.log("before pop",arr);
arr.pop();
console.log("after pop",arr);
arr.shift();
console.log("after shift",arr);
arr.unshift(6);
console.log("after unshift",arr);
console.log("length of array",arr.length);
console.log("concatination",arr.concat);

// let obj = {
//     name : "pranjul",
//     age : 19
// }
// console.log(obj.name);
