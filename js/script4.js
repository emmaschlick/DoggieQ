// array of sweaters and there corresponding names in the images file
let sweaters = [null, null];
sweaters[0] = ["images/Sweater1.png", "images/Sweater2.png", "images/Sweater3.png","images/Sweater4.png","images/Sweater5.png"];
sweaters[1] = ["images/Sweater21.png", "images/Sweater22.png", "images/Sweater23.png","images/Sweater24.png","images/Sweater25.png"];

let patterns = ["images/MM3402.png", "images/MM3432.png","images/MM3442.png","images/MM3392.png","images/MM3452.png"];
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

let position = [null,null,null];
position[0] = [sweater1.top,sweater2.top,sweater3.top,sweater4.top,sweater5.top];
position[1] = [sweater1.left,sweater2.left,sweater3.left,sweater4.left,sweater5.left];
position[2] = [sweater1.sku,sweater2.sku,sweater3.sku,sweater4.sku,sweater5.sku];

function changePosition (col){
    document.querySelector("#sweater").style.top = position[0][col];
    document.querySelector("#sweater").style.left = position[1][col];
    document.querySelector("#item").innerText = position[2][col];
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
    console.log(row);
}else if(document.querySelector('#pattern').innerHTML == "pattern"){
    row = 1;
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
        if (col<4){
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
            col = 4;
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

