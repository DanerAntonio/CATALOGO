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
const wingFlavorsDiv = document.getElementById('wingFlavors');
const picadaOptionsDiv = document.getElementById('picadaOptions');
let selectedProduct = null;
let cart = [];

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
      <button  class="order-btn" onclick="openModal('${product.name}')">Quiero Este</button>
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
  
  // Limpiar el formulario
  orderForm.reset();
  
  // Mostrar opciones de sabores de alitas solo para el producto de alitas
  if (productName === 'COMBO ALITAS PICANTES,BBQ,A LA NARANJA ') {
    wingFlavorsDiv.style.display = 'block';
  } else {
    wingFlavorsDiv.style.display = 'none';
  }
  
  // Mostrar opciones de picada solo para el producto de picada
  if (productName === 'PICADA DEL BARRIL') {
    picadaOptionsDiv.style.display = 'block';
  } else {
    picadaOptionsDiv.style.display = 'none';
  }
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
  
  // Crear el objeto del pedido
  const order = {
    product: selectedProduct.name,
    quantity: quantity,
    price: productPrice,
    total: total,
    ...orderDetails
  };
  
  // Agregar al carrito
  cart.push(order);
  
  // Actualizar el contador del carrito
  updateCartCount();
  
  closeModal();
});

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  cartCount.textContent = cart.length;
}

function showCart() {
  let cartContent = 'Carrito de Compras:\n\n';
  let total = 0;
  
  cart.forEach((item, index) => {
    cartContent += `${index + 1}. ${item.product} - Cantidad: ${item.quantity} - Subtotal: $${(item.price * item.quantity).toLocaleString()}\n`;
    total += item.price * item.quantity;
  });
  
  cartContent += `\nTotal: $${total.toLocaleString()}`;
  
  alert(cartContent);
}

function sendWhatsAppOrder() {
  if (cart.length === 0) {
    alert('El carrito está vacío. Agrega productos antes de hacer el pedido.');
    return;
  }
  
  let message = 'Pedido de La Cocina de Claudia:\n\n';
  let total = 0;
  
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.product}\n`;
    message += `   Cantidad: ${item.quantity}\n`;
    if (item.wingFlavors) {
      message += `   Sabores de alitas: ${item.wingFlavors.join(', ')}\n`;
    }
    if (item.picadaOptions) {
      message += `   Opciones de picada: ${item.picadaOptions.join(', ')}\n`;
    }
    message += `   Subtotal: $${(item.price * item.quantity).toLocaleString()}\n\n`;
    total += item.price * item.quantity;
  });
  
  message += `Total del pedido: $${total.toLocaleString()}\n\n`;
  message += `Nombre: ${cart[0].name}\n`;
  message += `Método de pago: ${cart[0].payment}\n`;
  
  if (cart[0].residence === 'other') {
    message += `Dirección: ${cart[0].customAddress}\n`;
  } else {
    message += `Residencia: ${cart[0].residence}\n`;
    message += `Torre: ${cart[0].tower}\n`;
    message += `Apartamento: ${cart[0].apartment}\n`;
  }
  
  const whatsappUrl = `https://wa.me/3112762618?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  
  // Limpiar el carrito después de enviar el pedido
  cart = [];
  updateCartCount();
}

// Llamar a toggleAddressFields al cargar la página para configurar el estado inicial
document.addEventListener('DOMContentLoaded', toggleAddressFields);

// Limitar la selección de sabores de alitas a un máximo de dos
const wingFlavorCheckboxes = document.querySelectorAll('input[name="wingFlavors"]');
wingFlavorCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const checkedFlavors = document.querySelectorAll('input[name="wingFlavors"]:checked');
    if (checkedFlavors.length > 2) {
      this.checked = false;
    }
  });
});

// Manejar las opciones de la picada
const picadaOptions = document.querySelectorAll('input[name="picadaOptions"]');
picadaOptions.forEach(option => {
  option.addEventListener('change', function() {
    const checkedOptions = document.querySelectorAll('input[name="picadaOptions"]:checked');
    const doubleOptions = document.querySelectorAll('input[name="picadaDouble"]:checked');
    
    if (checkedOptions.length + doubleOptions.length > 6) {
      this.checked = false;
    }
  });
});

const picadaDoubleOptions = document.querySelectorAll('input[name="picadaDouble"]');
picadaDoubleOptions.forEach(option => {
  option.addEventListener('change', function() {
    const checkedOptions = document.querySelectorAll('input[name="picadaOptions"]:checked');
    const doubleOptions = document.querySelectorAll('input[name="picadaDouble"]:checked');
    
    if (checkedOptions.length + doubleOptions.length > 6) {
      this.checked = false;
    }
  });
});