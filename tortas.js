const cakeProducts = [
    {
        name: 'Torta de Chocolate',
        description: 'Deliciosa torta de chocolate con cobertura de ganache',
        price: 50000,
        image: 'img/torta-chocolate.jpg'
    },
    {
        name: 'Torta de Vainilla',
        description: 'Suave torta de vainilla con crema de mantequilla',
        price: 45000,
        image: 'img/torta-vainilla.jpg'
    },
    // Agrega más productos aquí
];

let selectedProduct = null;

document.addEventListener('DOMContentLoaded', () => {
    const cakeProductContainer = document.getElementById('cakeProductContainer');
    const modal = document.getElementById('orderModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const orderForm = document.getElementById('orderForm');

    function renderProducts() {
        cakeProductContainer.innerHTML = '';
        cakeProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img class="product-image" src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="price">$${product.price.toLocaleString()}</span>
                <button class="order-btn" data-product="${product.name}">Quiero Este</button>
            `;
            cakeProductContainer.appendChild(productCard);
        });
    }

    function openModal(productName) {
        selectedProduct = cakeProducts.find(p => p.name === productName);
        modal.style.display = 'block';
        orderForm.reset();
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

    function sendWhatsAppOrder(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const orderDetails = Object.fromEntries(formData);
        
        const quantity = parseInt(orderDetails.quantity);
        const productPrice = selectedProduct.price;
        const total = productPrice * quantity;
        
        let message = `Pedido de Torta de Cumpleaños - La Cocina de Claudia:\n\n`;
        message += `Producto: ${selectedProduct.name}\n`;
        message += `Cantidad: ${quantity}\n`;
        message += `Precio unitario: $${productPrice.toLocaleString()}\n`;
        message += `Total: $${total.toLocaleString()}\n\n`;
        message += `Nombre: ${orderDetails.name}\n`;
        message += `Método de pago: ${orderDetails.payment}\n`;
        
        if (orderDetails.residence === 'other') {
            message += `Dirección: ${orderDetails.customAddress}\n`;
        } else {
            message += `Residencia: ${orderDetails.residence}\n`;
            message += `Torre: ${orderDetails.tower}\n`;
            message += `Apartamento: ${orderDetails.apartment}\n`;
        }
        
        const whatsappUrl = `https://wa.me/3112762618?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        closeModal();
    }

    renderProducts();

    cakeProductContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('order-btn')) {
            const productName = e.target.getAttribute('data-product');
            openModal(productName);
        }
    });

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    orderForm.addEventListener('submit', sendWhatsAppOrder);
    document.getElementById('residence').addEventListener('change', toggleAddressFields);
});