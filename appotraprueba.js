// Array de productos
const products = [
    {
        name: 'CHUZOS DE POLLO',
        description: 'AREPA CON QUESO MOZARELLA, ENSALADA DULCE, TOCINETA, MAICITOS, PAPAS A LA FRANCESA Y GASEOSA',
        price: 18000,
        image: 'img/CHUZO DE POLLO 2.jpeg'
    },
    {
        name: 'CHUZOS DE CERDO',
        description: 'AREPA CON QUESO MOZARELLA, ENSALADA DULCE, TOCINETA, MAICITOS, PAPAS A LA FRANCESA Y GASEOSA',
        price: 18000,
        image: 'img/CHUZO DE CERDO 3.jpeg'
    },
    {
        name: 'TILAPIA FRITA',
        description: 'ARROZ DE COCO O BLANCO, PATACON,ENSALADA , COMSOME DE BAGRE,  GUARAPO',
        price: 25000,
        image: 'img/TILAPIA.jpeg'
    },
    {
        name: 'MONDONGO',
        description: ' MONDONGO,COSTILLA DE CERDO AHUMADA, PERNIL DE CERDO,SECO , BANANO , ENSALADA,GUARAPO O CLARO',
        price: 20000,
        image: 'img/MONDONGOO.jpeg'
    },
    {
        name: 'SANCOCHO TRIFASICO ANTIOQUEÑO',
        description: ' CARNE DE SOBREBARRIGA,COSTILLA DE CERDO AHUMADA, POLLO,SECO , AGUCATE, ENSALADA,GUARAPO O CLARO',
        price: 20000,
        image: 'img/TRIFASICO 1.jpeg'
    },
    {
        name: 'BANDEJA PAISA',
        description: ' CARNE A LA PLANCHA,CHORIZO, CHICHARRN,FRIJOL,HUEVO,TAJADA DE MADURO,AGUACATE,SECO , ENSALADA,GUARAPO O CLARO',
        price: 25000,
       image: 'img/bandeja paisa.jpg'
    },

    {
        name: 'ARROZ PAISA (2 PERSONAS)',
        description: '#1 PROMOCIÓN: ARROZ PAISA 600 GARMOS PARA 2 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 2 GASEOSAS',
        price: 25000,
        image: 'img/arroz1.jpeg'
    },
    {
        name: 'ARROZ PAISA (4 PERSONAS)',
        description: ' PROMOCIÓN: ARROZ PAISA 1200 GARMOS PARA 2 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 2 GASEOSAS',
        price: 45000,
        image: 'img/arroz1.jpeg'
    },
    {
        name: 'COMBO ALITAS PICANTES,BBQ,A LA NARANJA (1 PERSONA) ',
        description: '8 ALITAS, PAPAS A LA FRANCESA, ENSALADA DULCE , GASEOSA ',
        price: 18000,
        image: 'img/alitas .jpg'
    },
    {
        name: 'COMBO ALITAS PICANTES,BBQ,A LA NARANJA (2 PERSONAS)',
        description: '16 ALITAS, PAPAS A LA FRANCESA, ENSALADA DULCE , GASEOSA ',
        price: 32000,
        image: 'img/alitas .jpg'
    },
    {
        name: 'ARROZ PAISA ',
        description: '#2 ARROZ PAISA 300 GARMOS PARA 1 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 1 GASEOSAS',
        price: 16000,
        image: 'img/arroz1.jpeg'
    },
    {
        name: 'POSTA SUDADA ',
        description: ' ARROZ , ENSALADA,FRIJOL O SOPA,TAJADA DE MADURO GUARAPO,GASESOSA,O CLARO, AGUACATE  ',
        price:16000,
        image: 'img/POSTA4.jpg'
    },
    {
        name: 'HIGADO ENCEBOLLADO',
        description: ' ARROZ,ENSALADA,FRIJOL O SOPA,AGUACTE,TAJADA DE MADURO ,GUARAPO ,GASEOSA O CLARO',
        price: 16000,
        image: 'img/HIGADO ENCEBOLLADO1.jpg'
    },

    {
        name: 'CARNE DE CERDO ESPECIAL ASADO AL BARRIL ',
        description: '300 GRAMOS DE CERDO ESPECIAL ASADO AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS',
        price: 18000,
        image: 'img/CARNE ASADA 2.jpeg'
    },
    {
        name: 'CARNE DE RES ASADA AL BARRIL ',
        description: '300 GRAMOS DE RES ESPECIAL ASADA AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS',
        price: 21000,
        image: 'img/CARNE ASADA 2.jpeg'
    },
    {
        name: 'CHICHARRON ASADO AL BARRIL',
        description: 'CHICHARRON  ASADO AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS',
        price: 18000,
        image: 'img/chicharron azado.jpg'
    },
    {
        name: 'CHORIZO ASADO AL BARRIL ',
        description: 'CHORIZO DEL ORIENTE  ASADO AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS',
        price: 18000,
        image: 'img/chorizo asado1.jpeg'
    },
    {
        name: 'SANCOCHO DE GALLINA CRIOLLA ',
        description: 'SANCOCHO DE GALLINA CRIOLLA ,SECO ,ENSALADA ,AGUACATE, BANANO, SALSAS CHIMICURRI Y HOGADO , GUARAPO O GASEOSA',
        price: 25000,
        image: 'img/gallina1.gif' 
    },
    {
        name: 'PICADA DEL BARRIL(2 PERSONAS)',
        description:'PICADA AL BARRIL 6 PROTEINAS CERDO,CHORIZO,POLLO,CHICHARRON COSTILLA, MORCILLA,PAPA COCIDA SALSAS CHIMICURRI Y HOGADO PATACON,2 GASEOSAS',
        price: 25000,
        image: 'img/picada .jpg'
    },
    {
        name: 'PICADA DEL BARRIL FAMILIAR(4 PERSONAS)',
        description:'PICADA AL BARRIL 6 PROTEINAS CERDO,CHORIZO,POLLO,CHICHARRON COSTILLA, MORCILLA,PAPA COCIDA SALSAS CHIMICURRI Y HOGADO PATACON,4 GASEOSAS',
        price: 45000,
        image: 'img/picada familiar.jpg'
    },
    {
        name: 'PATACÓN CON CARNE DE SOBREBARRIGA DESMECHADA',
        description: 'PATACON DE MADURO O VERDE,GUACAMOLE, HOGAO, QUESO MOZARELLA,GASEOSA O GUARAPO',
        price: 15000,
        image: 'img/patacon final.png'
    },
    {
        name: 'PATACÓN MIXTO (CARNE DE SOBREBARRIGA Y POLLO)',
        description: 'PATACON DE MADURO O VERDE,GUACAMOLE, HOGAO, QUESO MOZARELLA,GASEOSA O GUARAPO',
        price: 18000,
        image: 'img/patacon final.png'
    },
    {
        name: 'PATACÓN CON TODO (CARNE DE SOBREBARRIGA,POLLO, CERDO,SALCHICHA RANCHERA,TOCINETA',
        description: 'PATACON DE MADURO O VERDE,GUACAMOLE, HOGAO, QUESO MOZARELLA, GASEOSA O GUARAPO',
        price: 20000,
        image: 'img/patacon final.png'
    },
    {
        name: 'TAMALES DE MASA ',
        description: '3 CARNES: CHICHARRÓN, CARNE DE CERDO, COSTILLA  DE CERDO PORCION DE AGUACATE MÁS GASEOSA',
        price: 18000,
        image: 'img/tamal con gaseosa.jpg'
    },
    {
        name: 'FIAMBRES',
        description: 'CHICHARRÓN, CARNE MOLIDA,CHORIZO, HUEVO COCIDO, PURÉ DE PAPA,TAJADA DE MADURO AGUCATE MÁS GASEOSA',
        price: 18000,
        image: 'img/fiambre 19.jpg'
    },
    {
        name: 'Video: NUESTROS TAMALES SE LES SALE LA CARNE',
        description: 'Mira cómo preparamos nuestros deliciosos tamales',
        video: 'videos/tamal desbordado.mp4'
    },
    {
        name: 'Video: NUESTRO ARROZ PAISA',
        description: 'Conoce nuestra cocina y nuestro proceso',
        video: 'videos/arroz paisa video.mp4'
    }
];
let selectedProduct = null;
let cart = []; // Array para gestionar los productos del carrito

document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('productContainer');
    const cartContainer = document.getElementById('cartContainer');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    function renderProducts() {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            if (product.image) {
                productCard.innerHTML = `
                    <img class="product-image" src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">$${product.price.toLocaleString()}</span>
                    <button class="order-btn" data-product="${product.name}">Agregar al Carrito</button>
                `;
            } else if (product.video) {
                productCard.innerHTML = `
                    <video class="product-video" controls>
                        <source src="${product.video}" type="video/mp4">
                        Tu navegador no soporta videos.
                    </video>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                `;
            }

            productContainer.appendChild(productCard);
        });

        // Agregar evento a los botones de agregar al carrito
        const addToCartButtons = document.querySelectorAll('.order-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    function addToCart(event) {
        const productName = event.target.getAttribute('data-product');
        const product = products.find(p => p.name === productName);

        if (product) {
            const existingProduct = cart.find(p => p.name === product.name);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            renderCart();
        }
    }

    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${item.name} (${item.quantity})</span>
                <span>$${(item.price * item.quantity).toLocaleString()}</span>
                <button class="remove-btn" data-product="${item.name}">Eliminar</button>
            `;
            total += item.price * item.quantity;
            cartItems.appendChild(cartItem);
        });

        cartTotal.textContent = `Total: $${total.toLocaleString()}`;

        // Agregar evento a los botones de eliminar
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }

    function removeFromCart(event) {
        const productName = event.target.getAttribute('data-product');
        const productIndex = cart.findIndex(p => p.name === productName);

        if (productIndex > -1) {
            cart[productIndex].quantity--;
            if (cart[productIndex].quantity === 0) {
                cart.splice(productIndex, 1);
            }
            renderCart();
        }
    }

    renderProducts();
});
