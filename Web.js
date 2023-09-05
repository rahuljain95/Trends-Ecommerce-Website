let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let blog = document.querySelector(".trends");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let mainPage = document.querySelector(".main");

// Home

function homes(){
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";

    document.getElementById("home").style.color = "rgb(2, 173, 173)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

// Shop

function shops() {
    mainPage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";

    document.getElementById("shop").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
}


// Blog

function blogs() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    about.style.display = "none";
    blog.style.display = "block";
    contact.style.display = "none";

    document.getElementById("blog").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

// About

function abouts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
    
    document.getElementById("about").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

// Contact

function contacts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";

    document.getElementById("contact").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("about").style.color = "black";
}


// Cart

function show(img) {
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;

    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";

    document.querySelector(".cart").style.display = "flex";
}


function addCart() {
    alert("Added To Cart");
    location.reload();
}