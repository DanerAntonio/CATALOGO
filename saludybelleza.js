const beautyProducts = [
    {
      name: 'Crema Facial Hidratante',
      description: 'Hidrata y nutre tu piel con ingredientes naturales',
      price: 25000,
      image: 'img/crema-facial.jpg'
    },
    {
      name: 'Aceite Esencial de Lavanda',
      description: 'Relájate con el aroma calmante de la lavanda',
      price: 18000,
      image: 'img/aceite-lavanda.jpg'
    },
    {
      name: 'Mascarilla de Arcilla',
      description: 'Limpia profundamente tus poros con arcilla natural',
      price: 15000,
      image: 'img/mascarilla-arcilla.jpg'
    },
    // Agrega más productos de belleza aquí
  ];
  
  const beautyProductContainer = document.getElementById('beautyProductContainer');
  const modal = document.getElementById('orderModal');
  const closeBtn = document.getElementsByClassName('close')[0];
  const orderForm = document.getElementById('orderForm');
  let selectedProduct = null;
  let cart = [];
  
  // Generar las tarjetas de productos de belleza dinámicamente
  beautyProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    productCard.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span class="price">$${product.price.toLocaleString()}</span>
      <button class="order-btn" onclick="openModal('${product.name}')">Quiero Este</button>
    `;
    
    beautyProductContainer.appendChild(productCard);
  });
  
  function openModal(productName) {
    selectedProduct = beautyProducts.find(p => p.name === productName);
    modal.style.display = 'block';
    
    // Limpiar el formulario
    orderForm.reset();
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
    if (cartCount) {
      cartCount.textContent = cart.length;
    }
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
    
    let message = 'Pedido de Salud y Belleza - La Cocina de Claudia:\n\n';
    let total = 0;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.product}\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Subtotal: $${(item.price * item.quantity).toLocaleString()}\n\n`;
      total += item.price * item.quantity;
    });
    
    message += `Total del pedido: $${total.toLocaleString()}\n\n`;
    
    // Agregar información del cliente y detalles de entrega
    const lastItem = cart[cart.length - 1];
    if (lastItem) {
      message += `Nombre: ${lastItem.name || 'No especificado'}\n`;
      message += `Método de pago: ${lastItem.payment || 'No especificado'}\n`;
      
      if (lastItem.residence === 'other') {
        message += `Dirección: ${lastItem.customAddress || 'No especificada'}\n`;
      } else {
        message += `Residencia: ${lastItem.residence || 'No especificada'}\n`;
        message += `Torre: ${lastItem.tower || 'No especificada'}\n`;
        message += `Apartamento: ${lastItem.apartment || 'No especificado'}\n`;
      }
      
      if (lastItem.tip) {
        message += `Propina: $${parseFloat(lastItem.tip).toLocaleString()}\n`;
      }
    }
    
    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    
    // Número de WhatsApp del negocio
    const phoneNumber = '3112762618';
    
    // Crear la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank');
    
    // Limpiar el carrito después de enviar el pedido
    cart = [];
    updateCartCount();
    
    // Mostrar confirmación al usuario
    alert('Tu pedido ha sido enviado por WhatsApp. ¡Gracias por tu compra!');
  }
  
  // Llamar a toggleAddressFields al cargar la página para configurar el estado inicial
  document.addEventListener('DOMContentLoaded', toggleAddressFields);