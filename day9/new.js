// slice and splice 
let arr = [1,3,5,7,8];
console.log("original array",arr);

//slice
//slice me bs output ata h or original array me frq ni pdta 
console.log("slice", arr.slice(1,2));

//splice
console.log("splice",arr.splice(1,3));
//splice me array change ho jti h ye array ko cut kr deta. h 

// new arr after splice 
console.log("new array",arr);



//map ->
let brr = [3,5,7,9];
let newarr = brr.map((nums)=>nums*nums);
console.log(newarr);

//filter -> select based on certain condition -> reduce size

let arr2 = [12 ,34 ,45 ,67];
let newarr2 = arr2.filter((nums)=>nums<50);
console.log(newarr2);

let arr3 = [12 ,34 ,45 ,67];
let newarr3 = arr2.filter((nums)=>nums%4===0);
console.log(newarr3);

//reduce  
let arr4 = [4,7,4,8,7];
let result = arr4.reduce((total,num) => total+num,0);
console.log(result);

let arr5 = [4,2,4];
let result1 = arr5.reduce((total,num) => total*num,1);
console.log(result1);

// destructing object
let obj = {
    name : "alez",
    age : 23,
    rollno : 15,
    pin_code : 22500
}
const{name,age} = obj;

console.log(name,age);
console.log(obj);
