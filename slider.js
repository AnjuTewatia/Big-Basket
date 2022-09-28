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
