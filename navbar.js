let bakery = document.getElementById("bakery");
let fruits = document.getElementById("fruits");
let grains = document.getElementById("grains");
let snacks = document.getElementById("snacks");
let beauty = document.getElementById("beauty");
let beverages = document.getElementById("beverages");
let cart = document.getElementById("basket_cart");
let logo = document.getElementById("big_b_logo");


bakery.addEventListener("click",(e)=>{
    window.location.href = "./bakery.html"
})

fruits.addEventListener("click",(e)=>{
    window.location.href = "./fruits.html"
})

grains.addEventListener("click",(e)=>{
    window.location.href = "./grains.html"
})

snacks.addEventListener("click",(e)=>{
    window.location.href = "./snacks.html"
})

beauty.addEventListener("click",(e)=>{
    window.location.href = "./beauty.html"
})

beverages.addEventListener("click",(e)=>{
    window.location.href = "./beverages.html"
})

cart.addEventListener("click",(e)=>{
    window.location.href = "./cart.html"
})

logo.addEventListener("click",(e)=>{
    window.location.href = "./homepage.html"
})
