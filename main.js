



function  images(){
    let arr=[
        `https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayKOLKATA-1130x400_220927.jpeg`,
        `https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_400_070922.jpg`,
        `https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayKOLKATA-1130x400_220927.jpeg`


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


// *************************************************

// function seller(){

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
        // *********************************************** 
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

    ]



// localStorage.setItem("arr",JSON.stringify())
// let data=JSON.parse(localStorage.getItem("arr")) ||[]
// function append(data);
let data_div=document.getElementById("seller")

arr.forEach(function(el){
    let div=document.createElement("div");


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

    let rate=document.createElement("p");
    rate.innerHTML=el.rate;
    let rates=document.createElement("h6");
    rates.innerHTML=el.rates;


    div.append(image,title,discription,item,rating,item,rate,rates)
    data_div.append(div);
})
// seller()




// *****************************HBD Sales**********************************


    let index=[
        {
            image:"https://www.bigbasket.com/media/uploads/p/s/40048493_9-gulab-double-filtered-groundnut-oil.jpg",
            title:"Gulab",
            Description:"Double Filtered Groundnut Oil",
            rating:"4.2* 990 Ratings",
            item:"5 L Jar",
            rate:"MRP: Rs 1091",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/40033819_29-fresho-apple-shimla.jpg",
            title:"Fresho",
            Description:"Apple - Shimla",
            rating:"4.3*",
            item:"4 pcs(Approx. 550 -640g)",
            rate:"MRP: Rs 122.08",

    },
    // ******************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/30005420_11-bb-popular-moong-dal.jpg",
            title:"BB Popular",
            Description:"Moong Dal/Moong Dal",
            rating:"4* 3502 Rating",
            item:"1 kg Pouch",
            rate:"MRP: Rs 190",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/40048460_1-gaay-chhap-besan-fine.jpg",
            title:"Gaay Chhap",
            Description:"Besan Fine",
            rating:"4.2* 2516",
            item:"1 Kg",
            rate:"MRP: RS 68.73",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/40048465_1-uttam-sooji.jpg",
            title:"Uttam",
            Description:"Sooji",
            rating:"4.1* 3013 Rating",
            item:"1 kg",
            rate:"MRP: Rs 60",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/281497_6-rin-detergent-bar.jpg",
            title:"Rin",
            Description:"Detergent Bar",
            rating:"4.2* 17495 Rating",
            item:"250 g (pack of 4)",
            rate:"MRP: Rs 104",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/40019371_24-bournvita-chocolate-health-drink-bournvita.jpg",
            title:"Bournvita",
            Description:"chocolate Health Drink",
            rating:"4.2* 311 Rating",
            item:"750 g Pouch ",
            rate:"MRP: Rs 320",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
            title:"Fresho",
            Description:"Ladies'Fingers (Loose)",
            rating:"4.2*",
            item:"500 g",
            rate:"MRP: Rs 29.60",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/40003788_4-amul-processed-cheese-block.jpg",
            title:"Amul",
            Description:"Prcessed Cheese Block",
            rating:"4.1* 10424",
            item:"200 g carton",
            rate:"MRP: Rs 96.99",

    },
    // *****************
    {
            image:"https://www.bigbasket.com/media/uploads/p/s/20000911_30-fresho-kiwi-green.jpg",
            title:"Fresho",
            Description:"Kiwi - Green",
            rating:"",
            item:"",
            rate:"",

    },
    // *****************
    {
            image:"",
            title:"",
            Description:"",
            rating:"",
            item:"",
            rate:"",

    },
    // *****************
]


