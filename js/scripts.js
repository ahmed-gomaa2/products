var addBtn = document.querySelectorAll('.Product__button');
var carI = document.querySelectorAll('.Product__car');
var btnText = document.querySelectorAll('.Product__text');
var productI = document.querySelectorAll('.Product__product');
var productCar = document.querySelector('.Products__car')
var productCarContent = document.querySelector('.Products__car-content');
var productCarOverlay = document.querySelector('.Products__car-overlay');
var form = document.querySelectorAll('.Product__buy');
const car = document.querySelector('.Navbar__bag');
var carCount = document.querySelector('.Nav__car');
var totalCost = document.querySelector('.Products__cost-number');
var allProducts = document.querySelectorAll('.Products__item');
var closeCar = document.querySelector('.Products__close');
var checkoutBtn = document.querySelector('.Products__checkout');
var message = document.querySelector('.Products__message');
console.log(allProducts)

const products = [
    {
        id: 0,
        count: 0,
        price: 30
    },
    {
        id: 1,
        count: 0,
        price: 20,
    },
    {
        id: 2,
        count: 0,
        price: 10
    },
    {
        id: 3,
        count: 0,
        price: 40
    },
    {
        id: 4,
        count: 0,
        price: 60
    },
    {
        id: 5,
        count: 0,
        price: 90
    },
    {
        id: 6,
        count: 0,
        price: 120
    },
    {
        id: 7,
        count: 0,
        price: 150
    },
    {
        id: 8,
        count: 0,
        price: 80
    },
    {
        id: 9,
        count: 0,
        price: 100
    },
];

var totalPrice = {
    amount: 0,
    count: 0
};

console.log(totalCost)

totalCost.innerHTML = totalPrice.amount;

carCount.innerHTML = totalPrice.count;

closeCar.addEventListener('click', e => {
    productCar.classList.remove('Products__car-show');
    productCarContent.classList.remove('Products__car-content--show');
    productCarOverlay.classList.remove('Products__car-overlay--show');
    btnText.forEach(item => {
        item.classList.remove('Product__text-remove');
    })
    carI.forEach(item => {
        item.classList.remove('Product__car-active');
    })
    productI.forEach(item => {
        item.classList.remove('Product__product-drop');
    })
    productI.forEach(item => {
        item.classList.remove('Product__car-gone');
    })
    carI.forEach(item => {
        item.classList.remove('Product__car-gone');
    })
})

car.addEventListener('click', (e) => {
    // e.preventDefault();
    console.log(e);
    productCar.classList.add('Products__car-show');
    productCarContent.classList.add('Products__car-content--show');
    productCarOverlay.classList.add('Products__car-overlay--show');
})

form.forEach(item => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        item.querySelector('.Product__text').classList.add('Product__text-remove');
        item.querySelector('.Product__car').classList.add('Product__car-active');
        setTimeout(() => {
            item.querySelector('.Product__product').classList.add('Product__product-drop')
        }, 1000);
        setTimeout(() => {
            item.querySelector('.Product__car').classList.add('Product__car-gone')
            item.querySelector('.Product__product').classList.add('Product__car-gone')
        }, 2000);

        setTimeout(() => {
            console.log(productCar)
            productCar.classList.add('Products__car-show');
            productCarContent.classList.add('Products__car-content--show');
            productCarOverlay.classList.add('Products__car-overlay--show');
        }, 3000);
        var id = +item.querySelector('.Product__button').getAttribute('productId');
        var count= +e.target.children[0].value;
        products[id].count += count;
        console.log(products);
        totalPrice.amount += count * products[id].price;
        totalPrice.count += count;
        console.log(totalPrice);
        carCount.innerHTML = totalPrice.count;
        totalCost.innerHTML = totalPrice.amount;
        allProductsShow(products);
        showMassage();
    });
});

productCarOverlay.addEventListener('click', (e) => {
    productCar.classList.remove('Products__car-show');
    productCarContent.classList.remove('Products__car-content--show');
    productCarOverlay.classList.remove('Products__car-overlay--show');
    btnText.forEach(item => {
        item.classList.remove('Product__text-remove');
    })
    carI.forEach(item => {
        item.classList.remove('Product__car-active');
    })
    productI.forEach(item => {
        item.classList.remove('Product__product-drop');
    })
    productI.forEach(item => {
        item.classList.remove('Product__car-gone');
    })
    carI.forEach(item => {
        item.classList.remove('Product__car-gone');
    })
});

function allProductsShow(products) {
    allProducts.forEach(item => {
        const id = +item.getAttribute('productId');
        console.log(products[id])
        if(products[id].count > 0) {
            item.classList.remove('Product__hidden');
        } else {
            item.classList.add('Product__hidden');
        }

        item.querySelector('.Product__right-count').innerHTML = products[id].count;
    });
}

function showMassage() {
    if(totalPrice.count > 0) {
        checkoutBtn.style.display = 'block';
        message.style.display = 'none';
    } else {
        checkoutBtn.style.display = 'none';
        message.style.display = 'block';
    }
}

showMassage();

allProductsShow(products);