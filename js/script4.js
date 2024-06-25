// array of sweaters and there corresponding names in the images file
let sweaters = [null, null];
sweaters[0] = ["images/Sweater1.png", "images/Sweater2.png", "images/Sweater3.png","images/Sweater4.png","images/Sweater5.png","images/Sweater6.png","images/Sweater7.png","images/Sweater8.png","images/Sweater9.png"];
sweaters[1] = ["images/Coat1.png", "images/Coat2.png", "images/Coat3.png","images/Coat4.png","images/Coat5.png","images/Coat6.png","images/Coat7.png","images/Coat8.png","images/Coat9.png","images/Coat10.png","images/Coat11.png"];

let sweaterNum = 8;
let coatNum = 10;
let select = sweaterNum;

let patterns = ["images/MM3402.png", "images/MM3432.png","images/MM3442.png","images/MM3392.png","images/MM3452.png","images/MM3602.png","images/MM3562.png","images/MM3552.png","images/MM3412.png"];
//Objects of the positions of the sweaters
let sweater1 ={
    top: "292px",
    left: "298px",
    sku: "MM3402"
}

let sweater2 ={
    top: "289px",
    left: "302px",
    sku: "MM3432"
}

let sweater3 ={
    top: "289px",
    left: "317px",
    sku: "MM3442"
}

let sweater4 ={
    top: "286px",
    left: "310px",
    sku: "MM3392"
}

let sweater5 ={
    top: "292px",
    left: "301px",
    sku: "MM3452"
}

let sweater6 ={
    top: "293px",
    left: "319px",
    sku: "MM3602"
}
let sweater7 ={
    top: "283px",
    left: "309px",
    sku: "MM3562"
}
let sweater8 ={
    top: "262px",
    left: "281px",
    sku: "MM3552"
}
let sweater9 ={
    top: "271px",
    left: "325px",
    sku: "MM3412"
}



let coat1 ={
    top: "226px",
    left: "260px",
    sku: "MM2602"
}
let coat2 ={
    top: "226px",
    left: "260px",
    sku: "MM2612"
}
let coat3 ={
    top: "235px",
    left: "185px",
    sku: "MM6322"
}
let coat4 ={
    top: "234px",
    left: "289px",
    sku: "MM6362"
}
let coat5 ={
    top: "270px",
    left: "294px",
    sku: "MM6352"
}
let coat6 ={
    top: "249px",
    left: "267px",
    sku: "MM6432"
}
let coat7 ={
    top: "246px",
    left: "302px",
    sku: "MM6482"
}
let coat8 ={
    top: "237px",
    left: "244px",
    sku: "MM6542"
}
let coat9 ={
    top: "228px",
    left: "251px",
    sku: "MM6532"
}
let coat10 ={
    top: "240px",
    left: "312px",
    sku: "MM6512"
}
let coat11 ={
    top: "215px",
    left: "285px",
    sku: "MM6522"
}

let position = [null,null,null];
position[0] = [sweater1.top,sweater2.top,sweater3.top,sweater4.top,sweater5.top,sweater6.top,sweater7.top,sweater8.top,sweater9.top];
position[1] = [sweater1.left,sweater2.left,sweater3.left,sweater4.left,sweater5.left,sweater6.left,sweater7.left,sweater8.left,sweater9.left];
position[2] = [sweater1.sku,sweater2.sku,sweater3.sku,sweater4.sku,sweater5.sku,sweater6.sku,sweater7.sku,sweater8.sku,sweater9.sku];

let position2 = [null,null,null];
position2[0] = [coat1.top,coat2.top,coat3.top,coat4.top,coat5.top,coat6.top,coat7.top,coat8.top,coat9.top,coat10.top,coat11.top];
position2[1] = [coat1.left,coat2.left,coat3.left,coat4.left,coat5.left,coat6.left,coat7.left,coat8.left,coat9.left,coat10.left,coat11.left];
position2[2] = [coat1.sku,coat2.sku,coat3.sku,coat4.sku,coat5.sku,coat6.sku,coat7.sku,coat8.sku,coat9.sku,coat10.sku,coat11.sku];

let pChoice1 = position;


function changePosition (col){
    document.querySelector("#sweater").style.top = pChoice1[0][col];
    document.querySelector("#sweater").style.left = pChoice1[1][col];
    document.querySelector("#item").innerText = pChoice1[2][col];
    console.log("done");
}



//row of array
let row = 0;
//column of array
let col = 0;
//the image of the sweater
let sweater = document.querySelector('#sweater');
//duration of animation
let dur = 1;
//
let navActive = true;

//selecting the btns 
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");



if(document.querySelector('#pattern').innerHTML == ""){
    row = 0;
    select = sweaterNum;
    pChoice1 = position;
    console.log(row);
}else if(document.querySelector('#pattern').innerHTML == "pattern"){
    row = 1;
    select = coatNum;
    pChoice1 = position2;
    document.querySelector("#sweater").style.top = "226px";
    document.querySelector("#sweater").style.left = "260px";
    document.querySelector("#item").innerText = "MM2602";
    console.log(row);
}



// reactivates navigation after a delay
function activateNav(){
    navActive = true;
    console.log(navActive);
}












//animate next sweater
function changeSweater(col){
    let sweatNum = sweaters[row][col];
    console.log(sweatNum);
    sweater.src = sweatNum;

    gsap.fromTo(sweater, {
        x: 960
    }, {
        duration: dur,
        delay: 0.5,
        x: 0,
        ease: "power2.inOut",
    });

    setTimeout(activateNav,1500);
    changePosition(col);
}

// animate previous sweater
function changeSweater2(col){
    let sweatNum = sweaters[row][col];
    console.log(sweatNum);
    sweater.src = sweatNum;

    gsap.fromTo(sweater, {
        x: -960
    }, {
        duration: dur,
        delay: 0.3,
        x: 0,
        ease: "power2.inOut"
    });

    setTimeout(activateNav,1500);
    changePosition(col);
}










//Click event for each button animating current sweater to the side then changing the index to another sweater before 
//animating new sweater in 
btn1.addEventListener('click', (event) =>{
    if(navActive){
        navActive = false;
        console.log(navActive);
        gsap.fromTo(sweater, {
            x: 0
        }, {
            duration: dur,
            x: -960,
            ease: "power2.inOut"
        });
        if (col<select){
            ++col;
        }else{
            col = 0;
        }
        console.log(col);
        document.querySelector('#popup').src = patterns[col];
        setTimeout(changeSweater,1000,col);
    }
})

btn2.addEventListener('click', (event) =>{
    if(navActive){
        navActive = false;
        gsap.fromTo(sweater, {
            x: 0
        }, {
            duration: dur,
            x: 960,
            ease: "power2.inOut"
        });
        if (col>0){
            --col;
        }else{
            col = select;
        }
        console.log(col);
        document.querySelector('#popup').src = patterns[col];
        setTimeout(changeSweater2,1000,col);
    }

})
























/*
 //////////////////////////////   Hamburger Menu Code    //////////////////////////////
 */

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
closeIcon.style.display = "none";

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)















// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

