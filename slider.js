let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}


// let getdata=async()=>{

//     try{

//         let res= await fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=meat',{
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'fb17a4ece0msh47eb9b62180a9c9p181e49jsn547c70adae2c',
//                 'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
//             }
//         });
    
//         let  data= await res.json();
//         console.log(data);
//     }catch(e){
//         console.log(e);

//     }
  
   
// }
// getdata();
// Add to Cert Items

let bestseller=[{
image:'https://www.bigbasket.com/media/uploads/p/s/40072320_2-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg',
name:'Farm Eggs - Table Tray',
price:82
},
{
image:'https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg',
name:'Carrot - Orange (Loose)',
price:19

},
{
image:'https://www.bigbasket.com/media/uploads/p/s/40208261_1-borges-extra-virgin-olive-oil.jpg',
name:'Extra Virgin Olive Oil',
price:3360
},
{
image:'https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg',
name:'Tomato - Hybrid (Loose)',
price:38
},
{
image:'https://www.bigbasket.com/media/uploads/p/s/40030808_10-bb-royal-cuminjeera-whole.jpg',
name:'Cumin/Jeera/Jeerige - Whole',
price:353
}]

function  items(data)
{
    let count=0;  
let main_container=document.getElementById("items_container");
main_container.innerHTML=null;
data.forEach(({image,name,price})=>{
    let div=document.createElement("div");
    div.id="item_div"


let img=document.createElement("img");
img.src=image;
let p=document.createElement("p");
p.innerText=name;
let p2=document.createElement("p");
p2.innerText=price;
let cart=document.createElement("button");
cart.innerText="ADD"

let cart_items={
    image,
    name,
    price
}

cart.addEventListener('click',()=>{
    count++;
   let items_data = JSON.parse(localStorage.getItem("items")) || [];
   items_data.push(cart_items);
            localStorage.setItem("items", JSON.stringify(items_data));

     console.log(count)       

})

div.append(img,p,p2,cart);
main_container.append(div);


})





}

items(bestseller);

 