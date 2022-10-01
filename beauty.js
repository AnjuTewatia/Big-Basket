const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1890b4099emsh5032653b60150a7p18974fjsne6d1feb5c535',
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
	}
};

fetch('https://sephora.p.rapidapi.com/auto-complete?q=beauty', options)
	.then(response => response.json())
	.then(data => appendBeauty(data.typeAheadTerms))
    .catch(err => console.error(err));

    let beauty_images = ["https://www.bigbasket.com/media/uploads/banner_images/YXPL14714_1200x300_25thsep.jpg","https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL154-1200x300-25thmar.jpg","https://www.bigbasket.com/media/customPage/7693c8af-c9b3-4fc5-b1a8-5d3e8496dc6e/dbc3ec45-8257-4c5c-85b0-b5fcabf5644c/1846b03b-e0f4-4433-9b20-301d49edfdae/korean-beauty-1130x400-12feb21.jpg","https://www.bigbasket.com/media/customPage/7693c8af-c9b3-4fc5-b1a8-5d3e8496dc6e/dbc3ec45-8257-4c5c-85b0-b5fcabf5644c/1846b03b-e0f4-4433-9b20-301d49edfdae/natural-store-1130x400-12feb21.jpg"];
    let img = document.createElement("img");
    let beauty_slider = document.getElementById("beauty_slider");
    let i = 0;
    setInterval(function(){
    if(i===4){i=0}
        img.src = beauty_images[i];
        beauty_slider.innerHTML = null;
        beauty_slider.append(img);
        i++;
        },3000);

        let cart_data = JSON.parse(localStorage.getItem('items'));

function appendBeauty(data){
    let striked_price = [72.72, 101.3, 39.29, 53.25, 28.57, 50.22, 140.26, 263.64, 74.68, 72.73, 166.23, 81.82, 54.98, 58.01, 30.08, 64.94, 353.24, 92.53, 21.43, 233.76, 40.17, 35.06, 227.27, 141.56, 12.38, 112.38, 141.99, 28.57, 155.84, 32.47, 40, 189.61, 250.65, 13.11, 118.18, 149.35];
    let price = [55.99, 78, 20.5, 36, 19.5, 24.5, 103, 203, 53.5, 56, 102, 58.5, 39, 41, 23.16, 50, 271.99, 38.5, 16.5, 180, 29, 27, 175, 103, 9.53, 67.5, 96, 19, 120, 25, 30, 146, 193, 10.09, 91, 115];

    let i = 3;
    while(i<=10){
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = data[i].defaultSku.skuImages.image50;
        let name = document.createElement("h4");
        name.innerHTML = data[i].productName;
        let striked_price_div = document.createElement("p");
        striked_price_div.id = "striked_price";
        striked_price_div.innerHTML = `Rs:- ${striked_price[i]}`;
        let price_div = document.createElement("p");
        price_div.id = "price";
        price_div.innerHTML = `Rs:- ${price[i]}`;
        let add_to_cart = document.createElement("button");
        add_to_cart.innerText = "ADD";
        let obj = {
            image : data[i].defaultSku.skuImages.image50,
            name : data[i].productName,
            striked_price : striked_price[i],
            price : price[i]
        }
        add_to_cart.addEventListener("click",(e)=>{
           cart_data.push(obj);
           localStorage.setItem("items",JSON.stringify(cart_data));
           alert ("Product added to cart succesfully");
        });
        div.append(image,name,striked_price_div,price_div,add_to_cart);
        document.getElementById("beauty_container").append(div);
        i++;
    }
}

let count = 0;
document.getElementById("more_beauty").addEventListener("click",(e)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1890b4099emsh5032653b60150a7p18974fjsne6d1feb5c535',
            'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
        }
    };
    
    fetch('https://sephora.p.rapidapi.com/auto-complete?q=eyelashes', options)
        .then(response => response.json())
        .then(data => appendBeauty(data.typeAheadTerms))
        .catch(err => console.error(err));
        count++;
        console.log(count);
        if(count === 1){
                fetch('https://sephora.p.rapidapi.com/auto-complete?q=blush', options)
                    .then(response => response.json())
                    .then(data => appendBeauty(data.typeAheadTerms))
                    .catch(err => console.error(err));
        }else if(count === 2){
                fetch('https://sephora.p.rapidapi.com/auto-complete?q=bronzer', options)
                    .then(response => response.json())
                    .then(data => appendBeauty(data.typeAheadTerms))
                    .catch(err => console.error(err));
        }else if(count === 3){
                fetch('https://sephora.p.rapidapi.com/auto-complete?q=eyebrow', options)
                    .then(response => response.json())
                    .then(data => appendBeauty(data.typeAheadTerms))
                    .catch(err => console.error(err));
        }
        
});

