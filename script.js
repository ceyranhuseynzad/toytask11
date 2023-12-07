let menu = document.querySelector(".menu");
let menulst = document.querySelector(".menulst");

menu.addEventListener("click", () => {
    menulst.classList.toggle("showlst");
    console.log("hi");
});
let lst = document.querySelectorAll(".lst1")

document.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        navbar.style.backgroundColor = "green";
        navbar.style.height = "70px";
        navbar.style.position="sticky"
        navbar.style.top="0"
     
        navbar.style.color = "white"
        lst.forEach(element => {
            element.style.color = "white"
        });
        navbar.style.paddingBlockStart = "5px"
        navbar.style.scrollPaddingBlockEnd = "20px"
        navbar.style.zIndex="99"

    } else {
       
        navbar.style.backgroundColor = "white";
        navbar.style.height = "100px";
        navbar.style.color = "black"
        lst.forEach(element => {
            element.style.color = "rgb(63, 62, 62)"
        });
        navbar.style.paddingBlock = "20px"

    }
});

const itmsContainer = document.querySelector(".items");
const dt = [
    {
        img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png", 
        name1: "Tody Bear", 
        price: "$ 30.00 USD"
    },
    {
        img:"https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png", 
        name1: "Mega Plush Toy", 
        price: "$ 38.00 USD"
    },
    {
        img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png", 
        name1: "Cute Dog", 
        price: "$ 24.00 USD"
    },
    {
        img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png", 
        name1: "Litle friend", 
        price: "$ 27.00 USD"
    }
];

dt.forEach(element => {
    itmsContainer.innerHTML += `
        <div class="item">
            <div class="img"><img src="${element.img}" alt=""></div>
            <div class="info">
                <p>${element.name1}</p><span>${element.price}</span>
            </div>
        </div>`;
});




const itms1Container = document.querySelector(".items1");

const dt1 = [
    {
        img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png", 
        name1: "Tody Bear", 
        price: "$ 32.00 USD"
    },
    {
        img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png", 
        name1: "Mega Plush Toy", 
        price: "$ 39.00 USD"
    },
    {
        img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png", 
        name1: "Cute Dog", 
        price: "$ 25.00 USD"
    },
    {
        img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png", 
        name1: "Litle friend", 
        price: "$ 28.00 USD"
    }
];
dt1.forEach(element1 => {
    itms1Container.innerHTML += `
        <div class="item1">
            <div class="img"><img src="${element1.img}" alt=""></div>
            <div class="info">
                <p>${element1.name1}</p><span>${element1.price}</span>
            </div>
        </div>`;
});
let scroll=document.querySelector(".bi-mouse")
scroll.addEventListener("click",()=>{
    window.scrollBy({
        top: 500,
        left: 0,
        behavior: 'smooth'
    });
})
let cart = document.querySelector(".bi-cart");
console.log(cart);

let mdl;

cart.addEventListener("click", () => {
  
    mdl = document.createElement("div");
    mdl.innerHTML = `
        <div class="modal">
            <div class="cart">
                <div class="head">
                    <p>Your Cart</p>
                    <p class="close">x</p>
                </div>
                <div class="product">
                    <div class="blok">
                        <div class="img"><img src="img/5badecf7939555514eb88a4a_instagram-05.jpg" alt=""></div>
                        <div class="info">
                            <p>Happy flower</p>
                            <p>$ 38.00 USD</p>
                            <a href="#" class="remove">Remove</a>
                        </div>
                    </div>
                    <div class="count"><input type="number" name="" id="" value="1"></div>
                </div>
                <div class="price">
                    <div class="price1">
                        <p>Subtotal</p>
                    </div>
                    <div class="price2">$ 38.00 USD</div>
                </div>
                <div class="button">
                    <button>Continue to Checkout</button>
                </div>
            </div>
        </div>`;
    document.body.appendChild(mdl);

    let close = mdl.querySelector(".close");
    close.addEventListener("click", () => {
        mdl.remove();
    });

    let remove = mdl.querySelector(".remove");
    remove.addEventListener("click", () => {
        let product = mdl.querySelector(".product");
        let price = mdl.querySelector(".price");
        let button = mdl.querySelector(".button");

        product.remove();
        price.remove();
        button.remove();
    });
});




