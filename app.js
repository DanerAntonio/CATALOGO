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
    name: 'PATACÓN DE CARNE DESMECHADA',
    description: 'GUACAMOLE, HOGAO, QUESO MOZARELLA Y GASEOSA',
    price: 15000,
    image: 'img/patacon final.png'
  },
  {
    name: 'TAMALES DE MASA O ARROZ',
    description: '3 CARNES: CHICHARRÓN, CARNE DE CERDO, COSTILLA MÁS GASEOSA',
    price: 20000,
    image: 'img/tamal-guatemalteco.webp'
  },
  {
    name: 'ARROZ PAISA',
    description: 'PORCIÓN PARA DOS PERSONAS: COSTILLA BBQ, PAPAS A LA FRANCESA MÁS GASEOSA',
    price: 20000,
    image: 'img/arroz paiza1.jpg'
  },
  {
    name: 'FIAMBRES',
    description: 'CHICHARRÓN, CARNE MOLIDA, HUEVO COCIDO, PURÉ DE PAPA MÁS GASEOSA',
    price: 20000,
    image: 'img/Imagen de WhatsApp 2024-07-20 a las 12.50.23_ca91349f.jpg'
  }
];

const productContainer = document.getElementById('productContainer');
const modal = document.getElementById('orderModal');
const closeBtn = document.getElementsByClassName('close')[0];
const orderForm = document.getElementById('orderForm');
let selectedProduct = null;

// Generar las tarjetas de productos dinámicamente
products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  productCard.innerHTML = `
    <img class="product-image" src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <span class="price">$${product.price.toLocaleString()}</span>
    <button class="order-btn" onclick="openModal('${product.name}')">Quiero Este</button>
  `;
  productContainer.appendChild(productCard);
});

function openModal(productName) {
  selectedProduct = products.find(p => p.name === productName);
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

closeBtn.onclick = closeModal;

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

orderForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const orderDetails = Object.fromEntries(formData);
  
  // Crear el mensaje para WhatsApp
  const sauces = formData.getAll('sauces');
  const message = `Pedido de ${orderDetails.name}
- Producto: ${selectedProduct.name}
- Bebida: ${orderDetails.beverage}
- Salsas: ${sauces.length > 0 ? sauces.join(', ') : 'No salsas'}
- Salsas en el pedido: ${orderDetails.addSauce ? 'Sí' : 'No'}
- Pago: ${orderDetails.payment}
- Torre: ${orderDetails.tower}
- Apartamento: ${orderDetails.apartment}
- Cantidad: ${orderDetails.quantity}
- Propina: ${orderDetails.tip || 'No propina'}
- Total: $${(selectedProduct.price * orderDetails.quantity).toLocaleString()}`;

  // URL de WhatsApp con el mensaje
  const whatsappUrl = `https://wa.me/3112762618?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');

  closeModal();
});