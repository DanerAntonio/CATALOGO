// Array de productos
const products = [
    {
        id: 1,
        name: 'CHUZOS DE POLLO',
        description: 'AREPA CON QUESO MOZARELLA, ENSALADA DULCE, TOCINETA, MAICITOS, PAPAS A LA FRANCESA Y GASEOSA',
        price: 24300, // Precio original: 18000
        image: 'img/CHUZO DE POLLO 2.jpeg'
    },
    {
        id: 2,
        name: 'CHUZOS DE CERDO',
        description: 'AREPA CON QUESO MOZARELLA, ENSALADA DULCE, TOCINETA, MAICITOS, PAPAS A LA FRANCESA Y GASEOSA',
        price: 24300, // Precio original: 18000
        image: 'img/CHUZO DE CERDO 3.jpeg'
    },
    {
        id: 3,
        name: 'ARROZ PAISA (2 PERSONAS)',
        description: '#1 PROMOCIÓN: ARROZ PAISA 600 GARMOS PARA 2 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 2 GASEOSAS',
        price: 33750, // Precio original: 25000
        image: 'img/deliciosos arroz paisa.jpg'
    },
    {
        id: 4,
        name: 'ARROZ PAISA (4 PERSONAS)',
        description: ' PROMOCIÓN: ARROZ PAISA 1200 GARMOS PARA 2 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 2 GASEOSAS',
        price: 60750, // Precio original: 45000
        image: 'img/deliciosos arroz paisa.jpg'
    },
    {
        id: 5,
        name: 'COMBO ALITAS PICANTES,BBQ,A LA NARANJA (1 PERSONA) ',
        description: '8 ALITAS, PAPAS A LA FRANCESA, ENSALADA DULCE , GASEOSA ',
        price: 24300, // Precio original: 18000
        image: 'img/alitas .jpg'
    },
    {
        id: 6,
        name: 'COMBO ALITAS PICANTES,BBQ,A LA NARANJA (2 PERSONAS)',
        description: '16 ALITAS, PAPAS A LA FRANCESA, ENSALADA DULCE , GASEOSA ',
        price: 43200, // Precio original: 32000
        image: 'img/alitas .jpg'
    },
    {
        id: 7,
        name: 'ARROZ PAISA ',
        description: '#2 ARROZ PAISA 300 GARMOS PARA 1 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 1 GASEOSAS',
        price: 20250, // Precio original: 15000
        image: 'img/deliciosos arroz paisa.jpg'
    },
    {
        id: 8,
        name: 'CARNE DE CERDO ESPECIAL ASADO AL BARRIL ',
        description: '300 GRAMOS DE CERDO ESPECIAL ASADO AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS',
        price: 24300, // Precio original: 18000
        image: 'img/cerdo azado.jpg'
    },
    {
        id: 9,
        name: 'CARNE DE RES ASADA AL BARRIL ',
        description: '300 GRAMOS DE RES ESPECIAL ASADA AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS',
        price: 28350, // Precio original: 21000
        image: 'img/cerdo azado.jpg'
    },
    {
        id: 10,
        name: 'CHICHARRON ASADO AL BARRIL',
        description: 'CHICHARRON  ASADO AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS',
        price: 24300, // Precio original: 18000
        image: 'img/chicharron azado.jpg'
    },
    {
        id: 11,
        name: 'CHORIZO ASADO AL BARRIL ',
        description: 'CHORIZO DEL ORIENTE  ASADO AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS',
        price: 24300, // Precio original: 18000
        image: 'img/chorizo azado.jpg'
    },
    {
        id: 12,
        name: 'PICADA DEL BARRIL(2 PERSONAS)',
        description:'PICADA AL BARRIL 6 PROTEINAS CERDO,CHORIZO,POLLO,CHICHARRON COSTILLA, MORCILLA,PAPA COCIDA SALSAS CHIMICURRI Y HOGADO PATACON,2 GASEOSAS',
        price: 33750, // Precio original: 25000
        image: 'img/picada .jpg'
    },
    {
        id: 13,
        name: 'PICADA DEL BARRIL FAMILIAR(4 PERSONAS)',
        description:'PICADA AL BARRIL 6 PROTEINAS CERDO,CHORIZO,POLLO,CHICHARRON COSTILLA, MORCILLA,PAPA COCIDA SALSAS CHIMICURRI Y HOGADO PATACON,4 GASEOSAS',
        price: 60750, // Precio original: 45000
        image: 'img/picada familiar.jpg'
    },
    {
        id: 14,
        name: 'PATACÓN CON CARNE DE SOBREBARRIGA DESMECHADA',
        description: 'GUACAMOLE, HOGAO, QUESO MOZARELLA Y GASEOSA',
        price: 20250, // Precio original: 15000
        image: 'img/patacon final.png'
    },
    {
        id: 15,
        name: 'TAMALES DE MASA ',
        description: '3 CARNES: CHICHARRÓN, CARNE DE CERDO, COSTILLA  DE CERDO PORCION DE AGUACATE MÁS GASEOSA',
        price: 24300, // Precio original: 18000
        image: 'img/tamal con gaseosa.jpg'
    },
    
    {
        id: 16,
        name: 'FIAMBRES',
        description: 'CHICHARRÓN, CARNE MOLIDA,CHORIZO, HUEVO COCIDO, PURÉ DE PAPA,TAJADA DE MADURO AGUCATE MÁS GASEOSA',
        price: 24300, // Precio original: 18000
        image: 'img/fiambre 19.jpg'
    },
    {
        id: 17,
        name: 'Video: NUESTROS TAMALES SE LES SALE LA CARNE',
        description: 'Mira cómo preparamos nuestros deliciosos tamales',
        video: 'videos/tamal desbordado.mp4'
    },
    {
        id: 18,
        name: 'Video: NUESTRO ARROZ PAISA',
        description: 'Conoce nuestra cocina y nuestro proceso',
        video: 'videos/arroz paisa video.mp4'
    }
];

let selectedProduct = null;

document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    const modal = document.getElementById('orderModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const orderForm = document.getElementById('orderForm');
    const wingFlavorsDiv = document.getElementById('wingFlavors');
    const picadaOptionsDiv = document.getElementById('picadaOptions');

    function renderProducts() {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            if (product.image) {
                productCard.innerHTML = `
                    <img class="product-image" src="${product.image}" alt="${product.name}">
                    <h3>${product.id}. ${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">$${product.price.toLocaleString()}</span>
                    <button class="order-btn" data-product="${product.name}">Hacer Pedido</button>
                `;
            } else if (product.video) {
                productCard.innerHTML = `
                    <video class="product-image" controls>
                        <source src="${product.video}" type="video/mp4">
                        Tu navegador no soporta el tag de video.
                    </video>
                    <h3>${product.id}. ${product.name}</h3>
                    <p>${product.description}</p>
                `;
            }
            productContainer.appendChild(productCard);
        });
    }

    function openModal(productName) {
        selectedProduct = products.find(p => p.name === productName);
        modal.style.display = 'block';
        orderForm.reset();

        wingFlavorsDiv.style.display = productName.includes('COMBO ALITAS') ? 'block' : 'none';
        picadaOptionsDiv.style.display = productName.includes('PICADA DEL BARRIL') ? 'block' : 'none';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function toggleAddressFields() {
        const residenceSelect = document.getElementById('residence');
        const customAddressGroup = document.getElementById('customAddressGroup');
        const towerGroup = document.getElementById('towerGroup');
        const apartmentGroup = document.getElementById('apartmentGroup');

        if (residenceSelect.value === 'other') {
            customAddressGroup.style.display = 'block';
            towerGroup.style.display = 'none';
            apartmentGroup.style.display = 'none';
        } else {
            customAddressGroup.style.display = 'none';
            towerGroup.style.display = 'block';
            apartmentGroup.style.display = 'block';
        }
    }

    function sendWhatsAppOrder(orderDetails, totalWithTip) {
        let message = 'Pedido de La Cocina de Claudia:\n\n';
        message += `Producto: ${selectedProduct.name}\n`;
        message += `Cantidad: ${orderDetails.quantity}\n`;
        message += `Precio unitario: $${selectedProduct.price.toLocaleString()}\n`;

        if (selectedProduct.name.includes('COMBO ALITAS')) {
            const wingFlavors = orderDetails.wingFlavors ? (Array.isArray(orderDetails.wingFlavors) ? orderDetails.wingFlavors.join(', ') : orderDetails.wingFlavors) : 'No seleccionado';
            message += `Sabores de alitas: ${wingFlavors}\n`;
        }

        if (selectedProduct.name.includes('PICADA DEL BARRIL')) {
            const picadaOptions = orderDetails.picadaOptions ? (Array.isArray(orderDetails.picadaOptions) ? orderDetails.picadaOptions.join(', ') : orderDetails.picadaOptions) : 'No seleccionado';
            const picadaDouble = orderDetails.picadaDouble ? (Array.isArray(orderDetails.picadaDouble) ? orderDetails.picadaDouble.join(', ') : orderDetails.picadaDouble) : 'Ninguno';
            message += `Opciones de picada: ${picadaOptions}\n`;
            message += `Opciones dobles: ${picadaDouble}\n`;
        }

        message += `Bebida: ${orderDetails.beverage}\n`;

        const sauces = orderDetails.sauces ? (Array.isArray(orderDetails.sauces) ? orderDetails.sauces.join(', ') : orderDetails.sauces) : 'Ninguna';
        message += `Salsas: ${sauces}\n`;
        message += `Echar salsas en el pedido: ${orderDetails.addSauce ? 'Sí' : 'No'}\n`;

        message += `Método de pago: ${orderDetails.payment}\n`;

        if (orderDetails.residence === 'other') {
            message += `Dirección: ${orderDetails.customAddress}\n`;
        } else {
            message += `Residencia: ${orderDetails.residence}\n`;
            message += `Torre: ${orderDetails.tower}\n`;
            message += `Apartamento: ${orderDetails.apartment}\n`;
        }

        message += `Propina: $${parseFloat(orderDetails.tip || 0).toLocaleString()}\n`;
        message += `Total (incluyendo propina): $${totalWithTip.toLocaleString()}\n`;
        message += `Nombre: ${orderDetails.name}\n`;

        const phoneNumber = '3112762618';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    renderProducts();

    productContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('order-btn')) {
            const productName = e.target.getAttribute('data-product');
            openModal(productName);
        }
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const orderDetails = Object.fromEntries(formData);

        const quantity = parseInt(orderDetails.quantity);
        const productPrice = selectedProduct.price;
        const total = productPrice * quantity;
        const tip = parseFloat(orderDetails.tip) || 0;
        const totalWithTip = total + tip;

        sendWhatsAppOrder(orderDetails, totalWithTip);
        closeModal();
    });

    document.getElementById('residence').addEventListener('change', toggleAddressFields);

    const wingFlavorCheckboxes = document.querySelectorAll('input[name="wingFlavors"]');
    wingFlavorCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedFlavors = 
 document.querySelectorAll('input[name="wingFlavors"]:checked');
            if (checkedFlavors.length > 2) {
                this.checked = false;
            }
        });
    });

    const picadaOptions = document.querySelectorAll('input[name="picadaOptions"], input[name="picadaDouble"]');
    picadaOptions.forEach(option => {
        option.addEventListener('change', function() {
            const checkedOptions = document.querySelectorAll('input[name="picadaOptions"]:checked, input[name="picadaDouble"]:checked');
            if (checkedOptions.length > 6) {
                this.checked = false;
            }
        });
    });

    // Hacer la función toggleAddressFields accesible globalmente
    window.toggleAddressFields = toggleAddressFields;
});