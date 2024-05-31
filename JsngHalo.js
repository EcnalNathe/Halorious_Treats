//animation
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});




/////////////////////////////////////////////////////////cart
document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    const cartCount = document.getElementById('count');
    const cartTotal = document.getElementById('total'); 
    let itemCount = 0;
    let totalPrice = 0; 

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    function addToCart(productTitle, productPrice) {
        const cartItems = document.getElementById('cart-items');
        const newItem = document.createElement('li');
        newItem.textContent = `${productTitle} - ₱${productPrice}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');

        removeButton.addEventListener('click', () => {
            newItem.remove();
            itemCount--;
            cartCount.textContent = itemCount;
            totalPrice -= productPrice;
            cartTotal.textContent = `₱${totalPrice}.00`; 
        });

        newItem.appendChild(removeButton);
        cartItems.appendChild(newItem);

        itemCount++;
        cartCount.textContent = itemCount;
        totalPrice += productPrice; 
        cartTotal.textContent = `₱${totalPrice}.00`; 
    }

    const product = [
        {
            id: 0,
            image: 'prod1.jpg',
            title: 'Original Halo-halo',
            price: 100,
        },
        {
            id: 1,
            image: 'prod2.jpg',
            title: 'Crema de leche',
            price: 100,
        }
    ];

    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = product.map((item, index) => {
        const { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image} alt='${title}'></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <p>₱${price}.00</p>
                    <button onclick='addToCart("${title}", ${price})'>Add to cart</button>
                </div>
            </div>`
        );
    }).join('');

    const customizableProducts = [
        {
            id: 2,
            image: 'prod3.jpg',
            title: 'Ube Halaya ',
            price: 100,
        },
        {
            id: 3,
            image: 'prod4.jpg',
            title: 'Leche Flan',
            price: 100,
        },
        {
            id: 4,
            image: 'prod5.jpg',
            title: 'Langka',
            price: 100,
        },
        {
            id: 5,
            image: 'prod6.jpg',
            title: 'Red Gulaman',
            price: 100,
        },
        {
            id: 6,
            image: 'prod7.jpg',
            title: 'Green Gulaman',
            price: 100,
        },
        {
            id: 7,
            image: 'prod8.jpg',
            title: 'Kaong',
            price: 100,
        },
        {
            id: 8,
            image: 'prod9.jpg',
            title: 'Nata de coco',
            price: 100,
        },
        {
            id: 9,
            image: 'prod10.jpg',
            title: 'Buko shreds',
            price: 100,
        },
        {
            id: 10,
            image: 'prod11.jpg',
            title: 'Mais',
            price: 100,
        },
        {
            id: 11,
            image: 'prod12.jpg',
            title: 'Minatamis na saging',
            price: 100,
        },
        {
            id: 12,
            image: 'prod13.jpg',
            title: 'Minatamis na kamote',
            price: 100,
        },
        {
            id: 13,
            image: 'prod14.jpg',
            title: 'Pinipig',
            price: 10,
        },
        {
            id: 14,
            image: 'prod15.jpg',
            title: 'Munggo beans',
            price: 100,
        },
        {
            id: 15,
            image: 'prod16.jpg',
            title: 'Sweet beans',
            price: 100,
        },
        {
            id: 16,
            image: 'prod17.jpg',
            title: 'Crushed graham',
            price: 100,
        }
        
        
    ];

    const toppingsContainer = document.getElementById('toppings');
    toppingsContainer.innerHTML = customizableProducts.map((item, index) => {
        const { image, title, price } = item;
        return (
            `<div class='box2'>
                <div class='img-box2'>
                    <img class='images2' src=${image} alt='${title}'></img>
                </div>
                <div class='bottom2'>
                    <p>${title}</p>
                    <p>₱${price}.00</p>
                    <button onclick='addToCart("${title}", ${price})'>Add to cart</button>
                </div>
            </div>`
        );
    }).join('');

    window.addToCart = function(productTitle, productPrice) {
        const cartItems = document.getElementById('cart-items');
        const newItem = document.createElement('li');
        newItem.textContent = `${productTitle} - ₱${productPrice}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');

        removeButton.addEventListener('click', () => {
            newItem.remove();
            itemCount--;
            cartCount.textContent = itemCount;
            totalPrice -= productPrice; 
            cartTotal.textContent = `₱${totalPrice}.00`;
        });

        newItem.appendChild(removeButton);
        cartItems.appendChild(newItem);

        itemCount++;
        cartCount.textContent = itemCount;
        totalPrice += productPrice; 
        cartTotal.textContent = `₱${totalPrice}.00`; 
    };
});



