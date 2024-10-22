const beautyProducts = [
  {
      name: 'Colageno Natural',
      description: 'Colageno a base de mano de res, alivia dolores de rodilla, mejora articulaciones, rejuvenece la piel, vitamina para el cerebro. Su uso es fácil: mantener en refrigeración y consumo diario con cualquier alimento, jugos, bebidas calientes, etc.',
      price: 30000,
      image: 'img/COLAGENO CON JUGO.jpg'
  },
  // Agrega más productos aquí
];

let selectedProduct = null;

document.addEventListener('DOMContentLoaded', () => {
  const beautyProductContainer = document.getElementById('beautyProductContainer');
  const modal = document.getElementById('orderModal');
  const closeBtn = document.getElementsByClassName('close')[0];
  const orderForm = document.getElementById('orderForm');

  function renderProducts() {
      beautyProductContainer.innerHTML = '';
      beautyProducts.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';
          
          productCard.innerHTML = `
              <img class="product-image" src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <span class="price">$${product.price.toLocaleString()}</span>
              <button class="order-btn" data-product="${product.name}">Quiero Este</button>
          `;
          beautyProductContainer.appendChild(productCard);
      });
  }

  function openModal(productName) {
      selectedProduct = beautyProducts.find(p => p.name === productName);
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
      
      let message = `Pedido de Salud y Belleza - La Cocina de Claudia:\n\n`;
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

  beautyProductContainer.addEventListener('click', (e) => {
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