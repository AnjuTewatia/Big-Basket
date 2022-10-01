



function  images(){
    let arr=[
        `https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayKOLKATA-1130x400_220927.jpeg`,
        `https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_400_070922.jpg`,
        `https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayKOLKATA-1130x400_220927.jpeg`,
        `https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_T1-1130x400_220708.jpg`


    ]
    let i=0;
    let cont=document.getElementById("image")
    // cont.innerHTML=null
    let img=document.createElement("img")
    let button=document.getElementById("right")
    img.src=arr[0]
         cont.append(img)
         i++;

    button.addEventListener("click",function(){
        if(i==arr.length){
            i=0
         }
         img.src=arr[i]
         cont.append(img)
         i++;

        
    })
    let button1=document.getElementById("left")
    button1.addEventListener("click",function(){
        if(i==0){
            i=arr.length
         }
         img.src=arr[i]
         cont.append(img)
         i--;

        
    })

    setInterval(function(){
        if(i==arr.length){
            i=0
        }
        img.src=arr[i]
        cont.append(img)
        i++
        },2000)
}
images()


// *************************************************seller

// function seller(){
    let div1=document.createElement("div")
    div1.setAttribute("class","sellers")

    let arr=[
        {  
            image:"https://www.bigbasket.com/media/uploads/p/s/40203347_2-fresho-mosambi-economy.jpg",
            title:"Fresho",
            discription:"Mosambi-Economy(Loose)",
            item:"1 kg",              
            rating:"4.2 4903 Rating",
            rate:"mrp:Rs 74.03",
            rates:"NOT AVAILABLES",

        },
// **********************

        {
             image:"https://www.bigbasket.com/media/uploads/p/s/102102_4-parle-gluco-biscuits-parle-g.jpg",
             title:"Parle",
             discription:"Glcuco Biscuits - Parle-G",
             rating:"4.2* 3605Ratings",
             item:"800g Pouch",
             rate:"MRP :Rs 85",  
             rates:"NOT AVAILABLE",
        } , 
        // *********************************** 
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/20003982_2-wagh-bakri-premium-leaf-tea.jpg",
            title:"Wagh Bakri",
            discription:"Premium Leaf Tea",
            item:"1kg",
            rating:"3* 2163 Ratings",
            rate:"MRP: Rs 490",
            rates:"NOT AVAILABLE",

        }  ,   
        // ********************************
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/40130610_3-surf-excel-detergent-liquid-matic-front-load.jpg",

            title:"Surf Excel",
            discription:"Dtergent - Liquid, Matic, Front Load",
            item:"4.2* 10902 Ratings",
            rating:"2-L pouch",
            rate:"MRP:Rs 450",
            rates:"NOT AVAILABLE",


        }  ,   
        // ***************************************
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/40194529_6-dettol-original-bathing-soap-bar-with-76-tfm-protects-from-germs.jpg",
            title:"Dettol",
            discription:"Original Soap, Protects from Germs",
            item:"125 g (Buy 4 Get 1 Free)",
            rating:"4.3* 4131 Rating",
            rate:"MRP:Rs 302",
            rates:"NOT AVAILABLE",


        }  ,   
        // **********************



    ]


arr.forEach(function(el){
    let div=document.createElement("div");
    div.setAttribute("class","card")

    let image=document.createElement("img")
    image.src=el.image;

    let title=document.createElement("p")
    title.innerHTML=el.title;

    let discription=document.createElement("h5")
    discription.innerHTML=el.discription;

    let item=document.createElement("p")
    item.innerHTML=el.item;

    let rating=document.createElement("p")
    rating.innerHTML=el.rating;

    let rate=document.createElement("h6");
    rate.innerHTML=el.rate;
    let rates=document.createElement("h6");
    rates.innerHTML=el.rates;


    div.append(image,title,discription,item,rating,item,rate,rates)
    div1.append(div);
})


let div2=document.createElement("div")
div2.setAttribute("class","sellers")


    let arr1=[
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/10000551_10-bb-popular-cashewkaju-whole.jpg",
            title:"BB Popular",
            discription:"Cashew/Kaju --Whole",
            item:"1 kg",
            rating:"4.2 3834 Rating",
            rate:"MRP: Rs 750",
            rates:"NOT AVAILABLE",


        }  ,  
        // ****************************
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/40029538_34-kissan-fresh-tomato-ketchup.jpg",
            title:"Kissan",
            discription:"Fresh Tomato Ketchup",
            item:"1",
            rating:" 4.2 3970 Rating",
            rate:"MRP: Rs 68.79 Pouch",
            rates:"NOT AVAILABLE",


        }  , 
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/10000025_27-fresho-banana-robusta.jpg",
            title:"Fresh",
            discription:"Banana - Robusta",
            item:"1 kg",
            rating:"",
            rate:"MRP: Rs 56.10",
            rates:"NOT AVAILABLE",
        }, 
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/263593_11-britannia-bourbon-chocolate-cream-biscuits.jpg",
            title:"Britannia",
            discription:"Bourbon Chocolate Cream Biscuits",
            item:"1",
            rating:"4.2 2045 Ratings",
            rate:"MRP: Rs 40",
            rates:"NOT AVAILABLE",
        }, 
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/40050536_5-amul-ghee.jpg",
            title:"Amul",
            discription:"Ghee",
            item:"1 L Puch",
            rating:"4.1* 5902 Rating",
            rate:"MRP:Rs 467.89",
            rates:"NOT AVAILABLE",
        }, 
        

    
]


// let data_div=document.getElementById("seller")

arr1.forEach(function(el){
    let div=document.createElement("div");
    div.setAttribute("class","card")


    let image=document.createElement("img")
    image.src=el.image;

    let title=document.createElement("p")
    title.innerHTML=el.title;

    let discription=document.createElement("h5")
    discription.innerHTML=el.discription;

    let item=document.createElement("p")
    item.innerHTML=el.item;

    let rating=document.createElement("p")
    rating.innerHTML=el.rating;

    let rate=document.createElement("h6");
    rate.innerHTML=el.rate;
    let rates=document.createElement("h6");
    rates.innerHTML=el.rates;


    div.append(image,title,discription,item,rating,item,rate,rates)
    div2.append(div);
})


let div3=document.createElement("div")
div3.setAttribute("class","sellers")




let arr2=[
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/274145_14-fortune-sun-lite-sunflower-refined-oil.jpg",
            title:"Fortune",
            discription:"Sun Lite - Sunflower Refined Oil",
            item:"1 l Pouch",
            rating:"4.1* 37004 Rating",
            rate:"MRP: Rs199",
            rates:"NOT AVAILABLE",
        }, 
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/266969_9-vim-dishwash-bar-lemon.jpg",
            title:"Vim",
            discription:"Dishwash Bar - Lemon",
            item:"200 g(Pack of 3)",
            rating:"4.2* 9397 Rating",
            rate:"MRP: Rs 65",
            rates:"NOT AVAILABLE",
        }, 
        
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/40099239_9-bb-royal-chakki-fresh-wheat-atta-fortified.jpg",
            title:"BB Royal",
            discription:"Chakki-Fresh-wheat-Atta",
            item:"10kg",
            rating:"4* 24798 Rating",
            rate:"MRP: Rs 520",
            rates:"NOT AVAlLABLE",
        },
        // *************************
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/40096747_7-amul-malai-fresh-paneer.jpg",
            title:"Amul",
            discription:"Malai Fresh Panner",
            item:"200 g",
            rating:"4* 12746 Rating",
            rate:"MRP:Rs 64.80",
            rates:"NOT AVAlLABLE",
        },
        // *******************
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/241600_5-tata-salt-iodized.jpg",
            title:"Tata Salt",
            discription:"Iodized",
            item:"1 Kg Pouch",
            rating:"4.3* 11582 Rating",
            rate:"MRP: Rs 24.17",
            rates:"NOT AVAlLABLE",
        },

    ]

arr2.forEach(function(el){
    let div=document.createElement("div");
    div.setAttribute("class","card")


    let image=document.createElement("img")
    image.src=el.image;

    let title=document.createElement("p")
    title.innerHTML=el.title;

    let discription=document.createElement("h5")
    discription.innerHTML=el.discription;

    let item=document.createElement("p")
    item.innerHTML=el.item;

    let rating=document.createElement("p")
    rating.innerHTML=el.rating;

    let rate=document.createElement("h6");
    rate.innerHTML=el.rate;
    let rates=document.createElement("h6");
    rates.innerHTML=el.rates;


    div.append(image,title,discription,item,rating,item,rate,rates)
    div3.append(div);
})



// **************************************
let slide=[div1,div2,div3]
let i=0;
let container= document.getElementById("seller");
let divv=document.getElementById("left1").addEventListener("click",sliding)
container.innerHTML=null;
// console.log('pepe');
container.append(slide[i])
i++;
if(i==slide.length){
    i=0
}

function sliding(){

    container.innerHTML=null;
    console.log('pepe');
    container.append(slide[i])
    i++;
    if(i==slide.length){
        i=0
    }
}






// *****************************HBD Sales**********************************

let div4=document.createElement("div")
div4.setAttribute("class","hbd")




    let index=[
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/40048493_9-gulab-double-filtered-groundnut-oil.jpg",
            title:"Gulab",
            description:"Double Filtered Groundnut Oil",
            rating:"4.2* 990 Ratings",
            item:"5 L Jar",
            rate:"MRP: Rs 1091",
            rates:"NOT AVAILABLE",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/40033819_29-fresho-apple-shimla.jpg",
            title:"Fresho",
            description:"Apple - Shimla",
            rating:"4.3*",
            item:"4 pcs(Approx. 550 -640g)",
            rate:"MRP: Rs 122.08", 
            rates:"NOT AVAILABLE",


    },
    // ******************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/30005420_11-bb-popular-moong-dal.jpg",
            title:"BB Popular",
            description:"Moong Dal/Moong Dal",
            rating:"4* 3502 Rating",
            item:"1 kg Pouch",
            rate:"MRP: Rs 190",
            rates:"NOT AVAILABLE",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/40048460_1-gaay-chhap-besan-fine.jpg",
            title:"Gaay Chhap",
            description:"Besan Fine",
            rating:"4.2* 2516",
            item:"1 Kg",
            rate:"MRP: RS 68.73",
            rates:"NOT AVAILABLE",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/40048465_1-uttam-sooji.jpg",
            title:"Uttam",
            description:"Sooji",
            rating:"4.1* 3013 Rating",
            item:"1 kg",
            rate:"MRP: Rs 60",
            rates:"NOT AVAILABLE",

    },
]

index.forEach(function(ele){
    let div=document.createElement("div");
    div.setAttribute("class","card1")



    let p_image=document.createElement("img")
    p_image.src=ele.image;

    let p_title=document.createElement("p")
    p_title.innerHTML=ele.title;

    let p_discription=document.createElement("h5")
    p_discription.innerHTML=ele.description;

    let p_item=document.createElement("p")
    p_item.innerHTML=ele.item;

    let p_rating=document.createElement("p")
        p_rating.innerHTML=ele.rating;

        // let p_items=document.createElement("P")
        // p_items.innerHTML=ele.item;

    let p_rate=document.createElement("h6");
    p_rate.innerHTML=ele.rate;
    let p_rates=document.createElement("h6");
    p_rates.innerHTML=ele.rates;


    div.append(p_image,p_title,p_discription,p_item,p_rating,p_item,p_rate,p_rates)
    div4.append(div);
})

//     // *****************
    let div5=document.createElement("div")
    div5.setAttribute("class","hbd")
    
    let index1=[
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/281497_6-rin-detergent-bar.jpg",
            title:"Rin",
            Description:"Detergent Bar",
            rating:"4.2* 17495 Rating",
            item:"250 g (pack of 4)",
            rate:"MRP: Rs 104",
            rates:"NOT AVAILABLE",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/40019371_24-bournvita-chocolate-health-drink-bournvita.jpg",
            title:"Bournvita",
            Description:"chocolate Health Drink",
            rating:"4.2* 311 Rating",
            item:"750 g Pouch ",
            rate:"MRP: Rs 320",
            rates:"NOT AVAILABLE",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
            title:"Fresho",
            Description:"Ladies'Fingers (Loose)",
            rating:"4.2*",
            item:"500 g",
            rate:"MRP: Rs 29.60",
            rates:"NOT AVAILABLE",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/40003788_4-amul-processed-cheese-block.jpg",
            title:"Amul",
            Description:"Prcessed Cheese Block",
            rating:"4.1* 10424",
            item:"200 g carton",
            rate:"MRP: Rs 96.99",
            rates:"NOT AVAILABLE",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/20000911_30-fresho-kiwi-green.jpg",
            title:"Fresho",
            Description:"Kiwi - Green",
            rating:"3.9* 4312 Rating",
            item:"3 pcs",
            rate:"MRP: Rs 185.71",
            rates:"NOT AVAILABLE",

    },
]

index1.forEach(function(ele){
    let div=document.createElement("div");
    div.setAttribute("class","card1")



    let p_image=document.createElement("img")
    p_image.src=ele.image;

    let p_title=document.createElement("p")
    p_title.innerHTML=ele.title;

    let p_discription=document.createElement("h5")
    p_discription.innerHTML=ele.Description;

    let p_item=document.createElement("p")
    p_item.innerHTML=ele.item;

    let p_rating=document.createElement("p")
        p_rating.innerHTML=ele.rating;

    let p_rate=document.createElement("h6");
    p_rate.innerHTML=ele.rate;
    let p_rates=document.createElement("h6");
    p_rates.innerHTML=ele.rates;



    div.append(p_image,p_title,p_discription,p_item,p_rating,p_item,p_rate,p_rates);
    div5.append(div);
})

//     // *****************
    let div6=document.createElement("div")
    div6.setAttribute("class","hbd")
    
    let index2=[
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/264982_1-lijjat-papad-urad.jpg",
            title:"Lijjat",
            Description:"Papad - Urad",
            rating:"4-1* 4661 Rating",
            item:"200 g Pocuh",
            rate:"MRP: Rs 68",
            rates:"NOT AVAILABLE",

    },
    // *****************
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/40050536_5-amul-ghee.jpg",
        title:"Amul",
        Description:"Ghee",
        rating:"4-1* 5900 Rating",
        item:"1 L Pocuh",
        rate:"MRP: Rs 467.89",
        rates:"NOT AVAILABLE",

},
// ***********************
{
    image:"https://www.bigbasket.com/media/uploads/p/s/40195476_6-whisper-ultra-clean-sanitary-pads-xl-plus-locks-wetness-odour.jpg",
    title:"Wispher",
    Description:"ultra clean",
    rating:"4-2* 3814 Rating",
    item:"50 Pacs",
    rate:"MRP: Rs 467.89",
    rates:"NOT AVAILABLE",

},
// ******************************** 
{
            image:"https://www.bigbasket.com/media/uploads/bpi/ahmedabad-gandhinagar/s/214431_1-madhur-sugar-refined.jpg",
            title:"Madhur",
            Description:"Sugar - Refined",
            rating:"4-1* 31189 Rating",
            item:"1 kg Pocuh",
            rate:"MRP: Rs 295.89",
            rates:"NOT AVAILABLE",

     },
    // ************************
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/266969_9-vim-dishwash-bar-lemon.jpg",
        title:"Vim",
        Description:"Dishwash Bar-lemon",
        rating:"4-2* 9386 Rating",
        item:"200 g (Pack of 3)",
        rate:"MRP: Rs 65",
        rates:"NOT AVAILABLE",

},

]


// let dataa_div=document.getElementById("hrs")

index2.forEach(function(ele){
    let div=document.createElement("div");


    let p_image=document.createElement("img")
    p_image.src=ele.image;

    let p_title=document.createElement("p")
    p_title.innerHTML=ele.title;

    let p_discription=document.createElement("h5")
    p_discription.innerHTML=ele.Description;

    let p_item=document.createElement("p")
    p_item.innerHTML=ele.item;

    let p_rating=document.createElement("p")
        p_rating.innerHTML=ele.rating;

    let p_rate=document.createElement("h6");
    p_rate.innerHTML=ele.rate;
    let p_rates=document.createElement("h6");
    p_rates.innerHTML=ele.rates;


    div.append(p_image,p_title,p_discription,p_item,p_rating,p_item,p_rate,p_rates)
    div6.append(div);
})







let slides=[div4,div5,div6]
let j=0;
let containers= document.getElementById("hrs");
let diiv=document.getElementById("left2").addEventListener("click",slidings)
containers.innerHTML=null;
// console.log('pepe');
containers.append(slides[j])
i++;
if(j==slides.length){
    j=0
}

function slidings(){

    containers.innerHTML=null;
    console.log('pepe');
    containers.append(slides[j])
    j++;
    if(j==slides.length){
        j=0
    }
}




// *************************************items********************************
let res =document.getElementById("res")
// let arr11=JSON.parse(localStorage.getItem("items"))
let arr11=[]

let item=[
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/273623_5-duracell-ultra-alkaline-battery-aaa.jpg",
        name:"Duracell",
        price:"Mrp: Rs 139",
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/40051741_8-emami-healthy-tasty-rice-bran-oil.jpg",
        name:"Emami",
       price:"MRP: Rs 147",
    },
   
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/40058664_10-bb-royal-masoor-dal.jpg",
        name:"BB Royal",
        price:"MRP: Rs 30",
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/40154924_6-nescafe-gold-blend-instant-coffee-powder-festive-edition-rich-smooth.jpg",
        name:"Nescafe Gold",
        price:"MRP:Rs 807.50",
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/40106415_4-fiama-gel-bathing-bar-celebration-pack-with-5-unique-gel-bars.jpg",
        name:"Flama",
        price:295,
    },
]

 item.forEach(function(e){
    let div=document.createElement("div")
    div.setAttribute("class","card")

    let p_image=document.createElement("img");
    p_image.src=e.image;

    let p_name=document.createElement("p")
    p_name.innerHTML=e.name;

    let p_price=document.createElement("h5")
    p_price.innerHTML=e.price;
    // console.log("anju")
    let btn=document.createElement("button")
    btn.innerText="Add"
    btn.style.backgroundColor="orange"
    btn.style.border="none"
    // btn.style.margin="auto"

    
    let obj={
        image:e.image,
        name:e.name,
        price:e.price

    }
    
    btn.addEventListener("click",(e) =>{
        arr11.push(obj);
       
        
        localStorage.setItem("items",JSON.stringify(arr11))
        alert("Add to cart successfull")
    })

    div.append(p_image,p_name,p_price,btn);

    res.append(div);
    // console.log(div)

 })




 let iitem=[item]
let k=0;
let cont= document.getElementById("freq");
let div=document.getElementById("left5").addEventListener("click",slidingss)
cont.innerHTML=null;
// console.log('tewatia');
cont.append(iitem[k])
k++;
if(k==iitem.length){
    k=0
}

function slidingss(){

    cont.innerHTML=null;
    // console.log('at');
    cont.append(iitem[k])
    k++;
    if(k==iitem.length){
        k=0
    }
}








