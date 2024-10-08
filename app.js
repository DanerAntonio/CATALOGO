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
    name: 'ARROZ PAISA ',
    description: '#1 PROMOCIÓN: ARROZ PAISA 600 GARMOS PARA 2 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 2 GASEOSAS',
    price: 25000,
    image: 'img/deliciosos arroz paisa.jpg'
  },

  {
    name: 'COMBO ALITAS PICANTES,BBQ,A LA NARANJA ',
    description: '8 ALITAS, PAPAS A LA FRANCESA, ENSALADA DULCE , GASEOSA ',
    price: 18000,
    image: 'img/alitas .jpg'
  },


  {
    name: 'ARROZ PAISA ',
    description: '#2 ARROZ PAISA 300 GARMOS PARA 1 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 1 GASEOSAS',
    price: 15000,
    image: 'img/deliciosos arroz paisa.jpg'
  },
  {
    name: 'CERDO ASADO AL BARRIL ',
    description: '300 GRAMOS DE CERDO ESPECIAL ASADO AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS',
    price: 18000,
    image: 'img/cerdo azado.jpg'
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
    image: 'img/chorizo azado.jpg'
  },

  {
    name: 'PICADA DEL BARRIL',
    description:'PICADA AL BARRIL 6 PROTEINAS CERDO,CHORIZO,POLLO,CHICHARRON COSTILLA, MORCILLA,PAPA COCIDA SALSAS CHIMICURRI Y HOGADO PATACON,2 GASEOSAS',
    price: 25000,
    image: 'img/picada .jpg'
  },


  {
    name: 'PATACÓN CON CARNE DE SOBREBARRIGA DESMECHADA',
    description: 'GUACAMOLE, HOGAO, QUESO MOZARELLA Y GASEOSA',
    price: 15000,
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

const productContainer = document.getElementById('productContainer');
const modal = document.getElementById('orderModal');
const closeBtn = document.getElementsByClassName('close')[0];
const orderForm = document.getElementById('orderForm');
let selectedProduct = null;

// Generar las tarjetas de productos dinámicamente
products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  
  if (product.image) {
    productCard.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span class="price">$${product.price.toLocaleString()}</span>
      <button class="order-btn" onclick="openModal('${product.name}')">Quiero Este</button>
    `;
  } else if (product.video) {
    productCard.innerHTML = `
      <video class="product-image" controls>
        <source src="${product.video}" type="video/mp4">
        Tu navegador no soporta el tag de video.
      </video>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    `;
  }
  
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

function toggleAddressFields() {
  const residenceSelect = document.getElementById('residence');
  const customAddressGroup = document.getElementById('customAddressGroup');
  const towerGroup = document.getElementById('towerGroup');
  const apartmentGroup = document.getElementById('apartmentGroup');
  const towerInput = document.getElementById('tower');
  const apartmentInput = document.getElementById('apartment');
  
  if (residenceSelect.value === 'other') {
    customAddressGroup.style.display = 'block';
    towerGroup.style.display = 'none';
    apartmentGroup.style.display = 'none';
    towerInput.removeAttribute('required');
    apartmentInput.removeAttribute('required');
  } else {
    customAddressGroup.style.display = 'none';
    towerGroup.style.display = 'block';
    apartmentGroup.style.display = 'block';
    towerInput.setAttribute('required', '');
    apartmentInput.setAttribute('required', '');
  }
}

orderForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const orderDetails = Object.fromEntries(formData);
  
  // Calcular el total del pedido
  const quantity = parseInt(orderDetails.quantity);
  const productPrice = selectedProduct.price;
  const total = productPrice * quantity;

  // Obtener el valor de la propina (si la hay)
  const tip = parseFloat(orderDetails.tip) || 0;

  // Calcular el total con propina
  const totalWithTip = total + tip;
  
  // Crear el mensaje para WhatsApp
  const sauces = formData.getAll('sauces');
  const residenceValue = orderDetails.residence;
  let addressInfo;

  if (residenceValue === 'other') {
    addressInfo = `Dirección: ${orderDetails.customAddress}`;
  } else {
    addressInfo = `Residencia: ${residenceValue}, Torre: ${orderDetails.tower}, Apartamento: ${orderDetails.apartment}`;
  }

  const message = `Pedido de ${orderDetails.name}
- Producto: ${selectedProduct.name}
- Bebida: ${orderDetails.beverage}
- Salsas: ${sauces.length > 0 ? sauces.join(', ') : 'No salsas'}
- Salsas en el pedido: ${orderDetails.addSauce ? 'Sí' : 'No'}
- Pago: ${orderDetails.payment}
- ${addressInfo}
- Cantidad: ${quantity}
- Propina: $${tip.toLocaleString()}
- Total: $${totalWithTip.toLocaleString()}`;

  // URL de WhatsApp con el mensaje
  const whatsappUrl = `https://wa.me/3112762618?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');

  closeModal();
});

// Llamar a toggleAddressFields al cargar la página para configurar el estado inicial
document.addEventListener('DOMContentLoaded', toggleAddressFields);