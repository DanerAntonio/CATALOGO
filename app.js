// Carrito básico
let cart = [];

document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    
    const productCard = this.closest('.product-card');
    const productName = productCard.querySelector('h3').innerText;
    const productImage = productCard.querySelector('.product-image').src;
    
    cart.push({
      name: productName,
      image: productImage
    });
    
    alert(`${productName} agregado al carrito.`);
    updateWhatsAppLink();
  });
});

function updateWhatsAppLink() {
  const waLink = document.querySelector('#contact a');
  
  let message = "Hola! Quiero hacer un pedido de:\n";
  
  cart.forEach(product => {
    message += `\n- ${product.name} (Imagen: ${product.image})`;
  });
  
  message += "\n¿Puedo añadir algo más?";
  
  waLink.setAttribute('href', `https://wa.me/3158151695?text=${encodeURIComponent(message)}`);
}
