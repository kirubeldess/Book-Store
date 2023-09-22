let shop = document.getElementById('shop');



let basket = JSON.parse(localStorage.getItem("data")) || [];

    

let generateShop = ()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
        let{id,name,author,price,img,ratinga,ratingb,ratingc,ratingd,ratinge}=x
        let search = basket.find((x)=>x.id=== id) || [];
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
                                <div id=${id} class="quantity">${search.item === undefined? 0 : search.item}</div>
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
    localStorage.setItem("data",JSON.stringify(basket));


}

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined)return;
    else if(search.item === 0) return;
    else{
        search.item -= 1;
    }

   
    // console.log(basket);

    update(selectedItem.id);

    basket = basket.filter((x)=>x.item !== 0);

    localStorage.setItem("data",JSON.stringify(basket));


}

let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = ()=>{
   let cartIcon = document.getElementById("cartAmount");
   cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x,y)=> x + y,0);
}
calculation();