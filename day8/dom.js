// function select(){
// let element = document.getElementById("new").style.color="red";
// console.log(element);

// }
// function toggleColor() {
//     let element = document.getElementById("new");

//     if (element.style.color === "red") {
//         element.style.color = "black";   // Revert to original color
//     } else {
//         element.style.color = "red";     // Change to red
//     }
// } let element = (element.style.color ==="red") ? "black" : "red"; 

function alertkro(){
    alert("event triggered")
}

const btn = document.getElementById("btn1");
btn.addEventListener("click", function(){
    alert("event triggered");
})