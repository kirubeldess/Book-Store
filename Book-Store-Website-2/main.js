let shop = document.getElementById('shop');

let shopItemsData = [{
    id:"b1",
    name:"Thrust",
    author:"By Lidia Yuknavitch",
    price:120,
    img:"images/b-1 Thrust Lidia Yuknavitch.jpg",
    ratinge:"bi-star-fill",
    ratingd:"bi-star-fill",
    ratingc:"bi-star-fill",
    ratingb:"bi-star-fill",
    ratinga: ""
    
},{
    id:"b2",
    name:"Joan",
    author:"By Katherine j.",
    price:125,
    img:"images/b-2 Joan Katherine J..jpg",
    ratinge:"bi-star-fill",
    ratingd:"bi-star-fill",
    ratingc:"bi-star-fill",
    ratingb:"bi-star-fill",
    ratinga: "bi-star-half"
},{
    id:"b3",
    name:"The Book of Goose",
    author:"By Yiyun Li",
    price:140,
    img:"images/b-3 The Book Of Goose Yiyun Li.jpg",
    ratinge:"bi-star-fill",
    ratingd:"bi-star-fill",
    ratingc:"bi-star-fill",
    ratingb:"bi-star-fill",
    ratinga:"bi-star-fill"
},{
    id:"b4",
    name:"Olga Dies Dreaming",
    author:"By Xochitl Gonzalez",
    price:110,
    img:"images/b-4 Olga Dies Dreaming Xochitl Gonzalez.jpg",
    ratinge:"bi-star-fill",
    ratingd:"bi-star-fill",
    ratingc:"bi-star-fill",
    ratingb:"bi-star-fill",
    ratinga: "bi-star-half"
}];

let basket = [];
    

let generateShop = ()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
        let{id,name,author,price,img,ratinga,ratingb,ratingc,ratingd,ratinge}=x
        return `
        <div id=product-id-${id} class="item">
                    <img src="${img}" alt="" width="193">
                    <div class="details">
                        <h3>${name}</h3>
                        <p> ${author} </p>
                        <div class="st">
                        <i class="bi ${ratinge}"></i>
                        <i class="bi ${ratingd}"></i>
                        <i class="bi ${ratingc}"></i>
                        <i class="bi ${ratingb}"></i>
                        <i class="bi ${ratinga}"></i>
                        </div>
                        <div class="price-quantity">
                            <h2>${price} Birr</h2>
                            <div class="buttons">
                                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                                <div id=${id} class="quantity">0</div>
                                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                            </div>
                            
                        </div>
                    </div>
        </div>
        `
    }).join(""));
}
generateShop();

let increment = (id)=>{
    let selectedItem = id;

    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        });
    }
    else{
        search.item += 1;
    }

   
    // console.log(basket);
    update(selectedItem.id);

}

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search.item === 0) return;
    else{
        search.item -= 1;
    }

   
    // console.log(basket);

    update(selectedItem.id);

}

let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;

}