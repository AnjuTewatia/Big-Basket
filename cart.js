let cart_images = ["https://www.bigbasket.com/media/uploads/banner_images/YXPL14714_1200x300_25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL154-1200x300-25thmar.jpg","https://www.bigbasket.com/media/customPage/7693c8af-c9b3-4fc5-b1a8-5d3e8496dc6e/dbc3ec45-8257-4c5c-85b0-b5fcabf5644c/1846b03b-e0f4-4433-9b20-301d49edfdae/korean-beauty-1130x400-12feb21.jpg","https://www.bigbasket.com/media/customPage/7693c8af-c9b3-4fc5-b1a8-5d3e8496dc6e/dbc3ec45-8257-4c5c-85b0-b5fcabf5644c/1846b03b-e0f4-4433-9b20-301d49edfdae/natural-store-1130x400-12feb21.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXPL14480-1200x300-25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXPL14449-1200x300-25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXPL14424-1200x300-25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXPL14309-1200x300-25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/L1_YXNP3878_1200x300_25Jun22.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXTT4977_1200x300_250922.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXNP4699_1200x300_290822.jpg","https://www.bigbasket.com/media/uploads/banner_images/CXNP5623_1200x300_301021.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXPL14771_YXPL14773_YXPL14774_YXPL14781_YXPL14795_300_240922.jpg"];
let img = document.createElement("img");
let cart_slider = document.getElementById("cart_slider");
let i = 0;
setInterval(function(){
if(i===12){i=0}
    img.src = cart_images[i];
    cart_slider.innerHTML = null;
    cart_slider.append(img);
    i++;
    },3000);

let cart_data = JSON.parse(localStorage.getItem("items"));
if(cart_data.length === 0){
    alert ("Your Cart is Empty");
}else{
    document.getElementById("total_items_count").innerHTML = `Total Number Of Items :- ${cart_data.length}`;
}

let cart_sum = 0;
cart_data.forEach((e)=>{
    let amount = e.price;
    cart_sum+=amount;
});
document.getElementById("total_amount_in_cart").innerHTML = `Total Amount :- Rs.${cart_sum}`;
localStorage.setItem("cart_price",JSON.stringify(cart_sum));
console.log(cart_sum);


cart_data.forEach(el => {
    let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h4");
        name.innerHTML = el.name;
        let price = document.createElement("p");
        price.innerHTML = `Rs:- ${el.price}`;
        let remove = document.createElement("button");
        remove.innerText = "Remove Item";
        remove.addEventListener("click",(el)=>{
            removeItems(el);
        })
        div.append(image,name,price,remove);
        document.getElementById("cart_container").append(div);
});

function removeItems(el, index){
    el.target.parentNode.remove();
    cart_data.splice(index, 1);
    localStorage.setItem("items",JSON.stringify(cart_data));
    window.location.reload();
}

document.getElementById("checkout").addEventListener("click",(e)=>{
    window.location.href = "./checkout.html";
})