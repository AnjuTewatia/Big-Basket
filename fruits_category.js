const options = {
	method: 'GET',
    Headers : {
        "Content-Type" : "application/json",
        
    }
};

fetch('https://api.spoonacular.com/food/search?query=fruits&apiKey=16a7ab4f21a24c6aba65724240f8792e', options)
	.then(response => response.json())
	.then(data => appendFruits(data.searchResults[1].results))
	.catch(err => console.log(err));

let fruits_images = ["https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP4834-1200X300-01stSEP22.jpg","https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP3540-1200X300-20thJun22.jpg","https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP3469-1200X300-16thJun22.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXNP5333-1200x300-070922.jpg","https://www.bigbasket.com/media/uploads/banner_images/fresho-fnv-Bangalore-1200x300-27thSEP22.jpeg"];
let img = document.createElement("img");
let fruits_slider = document.getElementById("fruits_slider");
let i = 0;
setInterval(function(){
if(i===3){i=0}
    img.src = fruits_images[i];
    fruits_slider.innerHTML = null;
    fruits_slider.append(img);
    i++;
    },3000);
 
    



function appendFruits(data){


    console.log(data);
    let striked_price = [72.72, 101.3, 39.29, 53.25, 28.57, 50.22, 140.26, 263.64, 74.68, 72.73, 166.23, 81.82, 54.98, 58.01, 30.08, 64.94, 353.24, 92.53, 21.43, 233.76, 40.17, 35.06, 227.27, 141.56, 12.38, 112.38, 141.99, 28.57, 155.84, 32.47, 40, 189.61, 250.65, 13.11, 118.18, 149.35];
    let price = [55.99, 78, 20.5, 36, 19.5, 24.5, 103, 203, 53.5, 56, 102, 58.5, 39, 41, 23.16, 50, 271.99, 38.5, 16.5, 180, 29, 27, 175, 103, 9.53, 67.5, 96, 19, 120, 25, 30, 146, 193, 10.09, 91, 115];

    let arr = [];
    let i = 0;
    while(i<=35){
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = data[i].image;
        let name = document.createElement("h4");
        name.innerHTML = data[i].name;
        let striked_price_div = document.createElement("p");
        striked_price_div.id = "striked_price";
        striked_price_div.innerHTML = `Rs:- ${striked_price[i]}`;
        let price_div = document.createElement("p");
        price_div.innerHTML = `Rs:- ${price[i]}`;
        let add_to_cart = document.createElement("button");
        add_to_cart.innerText = "ADD";
        let obj = {
            image : data[i].image,
            name : data[i].name,
            striked_price : striked_price[i],
            price : price[i]
        }
        add_to_cart.addEventListener("click",(e)=>{
           arr.push(obj);
           localStorage.setItem("items",JSON.stringify(arr));
           alert ("Product added to cart succesfully");
        });
        div.append(image,name,striked_price_div,price_div,add_to_cart);
        document.getElementById("fruits_category_container").append(div);
        i++;
    }
   }


document.getElementById("more_fruits").addEventListener('click',(e)=>{
    const options = {
        method: 'GET',
        Headers : {
            "Content-Type" : "application/json",
            
        }
    };
    
fetch(' https://api.spoonacular.com/food/search?query=vegetables&apiKey=16a7ab4f21a24c6aba65724240f8792e', options)
        .then(response => response.json())
        .then(data => appendFruits(data.searchResults[1].results))
        .catch(err => console.log(err));
        function appendFruits(data){
            let count = 0;
            console.log(data);
            let striked_price = [72.72, 101.3, 39.29, 53.25, 28.57, 50.22, 140.26, 263.64, 74.68, 72.73, 166.23, 81.82, 54.98, 58.01, 30.08, 64.94, 353.24, 92.53, 21.43, 233.76, 40.17, 35.06, 227.27, 141.56, 12.38, 112.38, 141.99, 28.57, 155.84, 32.47, 40, 189.61, 250.65, 13.11, 118.18, 149.35];
            let price = [55.99, 78, 20.5, 36, 19.5, 24.5, 103, 203, 53.5, 56, 102, 58.5, 39, 41, 23.16, 50, 271.99, 38.5, 16.5, 180, 29, 27, 175, 103, 9.53, 67.5, 96, 19, 120, 25, 30, 146, 193, 10.09, 91, 115];
        
            let arr = [];
            let i = 0;
            while(i<=10){
                let div = document.createElement("div");
                let image = document.createElement("img");
                image.src = data[i].image;
                let name = document.createElement("h4");
                name.innerHTML = data[i].name;
                let striked_price_div = document.createElement("p");
                striked_price_div.id = "striked_price";
                striked_price_div.innerHTML = `Rs:- ${striked_price[i]}`;
                let price_div = document.createElement("p");
                price_div.innerHTML = `Rs:- ${price[i]}`;
                let add_to_cart = document.createElement("button");
                add_to_cart.innerText = "ADD";
                let obj = {
                    image : data[i].image,
                    name : data[i].name,
                    striked_price : striked_price[i],
                    price : price[i]
                }
                add_to_cart.addEventListener("click",(e)=>{
                   arr.push(obj);
                   localStorage.setItem("items",JSON.stringify(arr));
                   alert ("Product added to cart succesfully");
                });
                div.append(image,name,striked_price_div,price_div,add_to_cart);
                document.getElementById("fruits_category_container").append(div);
                i++;
            }
            count++;
            if(count===1){
                count = 0;
               }
           }
  }) ; 