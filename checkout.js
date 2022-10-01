let cart_images = ["https://www.bigbasket.com/media/uploads/banner_images/YXPL14714_1200x300_25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL154-1200x300-25thmar.jpg","https://www.bigbasket.com/media/customPage/7693c8af-c9b3-4fc5-b1a8-5d3e8496dc6e/dbc3ec45-8257-4c5c-85b0-b5fcabf5644c/1846b03b-e0f4-4433-9b20-301d49edfdae/korean-beauty-1130x400-12feb21.jpg","https://www.bigbasket.com/media/customPage/7693c8af-c9b3-4fc5-b1a8-5d3e8496dc6e/dbc3ec45-8257-4c5c-85b0-b5fcabf5644c/1846b03b-e0f4-4433-9b20-301d49edfdae/natural-store-1130x400-12feb21.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXPL14480-1200x300-25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXPL14449-1200x300-25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXPL14424-1200x300-25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXPL14309-1200x300-25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/L1_YXNP3878_1200x300_25Jun22.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXTT4977_1200x300_250922.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXNP4699_1200x300_290822.jpg","https://www.bigbasket.com/media/uploads/banner_images/CXNP5623_1200x300_301021.jpg","https://www.bigbasket.com/media/uploads/banner_images/YXPL14771_YXPL14773_YXPL14774_YXPL14781_YXPL14795_300_240922.jpg"];
let img = document.createElement("img");
let cart_slider = document.getElementById("checkout_slider");
let i = 0;
setInterval(function(){
if(i===12){i=0}
    img.src = cart_images[i];
    cart_slider.innerHTML = null;
    cart_slider.append(img);
    i++;
    },3000);



let cart_sum;
let cart_data = JSON.parse(localStorage.getItem("items"));
let cart_sum_promo = cart_sum - ((cart_sum/30)*100);
let flag = 0;
document.getElementById("pay").addEventListener("click", function (event) {
    event.preventDefault();
    var code = document.getElementById("promo_code").value;
    code = code.trim();
    if(cart_data.length === 0){
        alert ("Your Cart is Empty");
    }
    if (code == "bigbasket01") {
        localStorage.setItem("userPromo", code)
        alert("Hurray you got 30% discount!!!");
        flag = 1;
        setTimeout((e) => {
            alert ("ThankYou for your Purchase");
        }, 2000);
        window.location.href = "./homepage.html";
        document.getElementById("form").reset();
    } else if (code == "") {
        alert("Please Enter Promo code")
    } else if (code != "bigbasket01") {
        alert("Please Enter valid Promo code");
    }
    window.location.reload();
});

let sum = 0;
let length = cart_data.length;
cart_sum = JSON.parse(localStorage.getItem("cart_price"));

document.getElementById("displayValue").innerText = `Your Number of Order Items are ${length} and Your Cart Total is ${cart_sum}`;






