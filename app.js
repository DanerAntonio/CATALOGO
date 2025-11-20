// Array de productos
const products = [
  {
    name: "CHUZOS DE POLLO",
    description: "AREPA CON QUESO MOZARELLA, ENSALADA DULCE, TOCINETA, MAICITOS, PAPAS A LA FRANCESA Y GASEOSA",
    price: 18000,
    image: "img/CHUZO DE POLLO 2.jpeg",
    type: "fast-food", // Tipo para determinar bebidas
  },
  {
    name: "CHUZOS DE CERDO",
    description: "AREPA CON QUESO MOZARELLA, ENSALADA DULCE, TOCINETA, MAICITOS, PAPAS A LA FRANCESA Y GASEOSA",
    price: 18000,
    image: "img/CHUZO DE CERDO 3.jpeg",
    type: "fast-food",
  },
  {
    name: "TILAPIA FRITA",
    description: "ARROZ DE COCO O BLANCO, PATACON,ENSALADA , COMSOME DE BAGRE,  GUARAPO",
    price: 25000,
    image: "img/TILAPIA.jpeg",
    type: "menu", // Menús llevan jugo
  },
  {
    name: "MONDONGO",
    description: " MONDONGO,COSTILLA DE CERDO AHUMADA, PERNIL DE CERDO,SECO , BANANO , ENSALADA,GUARAPO O CLARO",
    price: 25000,
    image: "img/MONDONGOO.jpeg",
    type: "menu",
  },
  {
    name: "SANCOCHO TRIFASICO ANTIOQUEÑO",
    description: " CARNE DE SOBREBARRIGA,COSTILLA DE CERDO AHUMADA, POLLO,SECO , AGUCATE, ENSALADA,GUARAPO O CLARO",
    price: 25000,
    image: "img/TRIFASICO 1.jpeg",
    type: "menu",
  },
  {
    name: "BANDEJA PAISA",
    description:
      " CARNE A LA PLANCHA,CHORIZO, CHICHARRN,FRIJOL,HUEVO,TAJADA DE MADURO,AGUACATE,SECO , ENSALADA,GUARAPO O CLARO",
    price: 25000,
    image: "img/bandeja paisa.jpg",
    type: "menu",
  },
  {
    name: "ARROZ PAISA (2 PERSONAS)",
    description:
      "#1 PROMOCIÓN: ARROZ PAISA 600 GARMOS PARA 2 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 2 GASEOSAS",
    price: 30000,
    image: "img/arroz1.jpeg",
    type: "fast-food",
  },
  {
    name: "ARROZ PAISA (4 PERSONAS)",
    description:
      " PROMOCIÓN: ARROZ PAISA 1200 GARMOS PARA 2 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 2 GASEOSAS",
    price: 50000,
    image: "img/arroz1.jpeg",
    type: "fast-food",
  },
  {
    name: "COMBO ALITAS PICANTES,BBQ,A LA NARANJA (1 PERSONA) ",
    description: "8 ALITAS, PAPAS A LA FRANCESA, ENSALADA DULCE , GASEOSA ",
    price: 18000,
    image: "img/alitas .jpg",
    type: "fast-food",
    hasWingFlavors: true,
  },
  {
    name: "COMBO ALITAS PICANTES,BBQ,A LA NARANJA (2 PERSONAS)",
    description: "16 ALITAS, PAPAS A LA FRANCESA, ENSALADA DULCE , GASEOSA ",
    price: 32000,
    image: "img/alitas .jpg",
    type: "fast-food",
    hasWingFlavors: true,
  },
  {
    name: "ARROZ PAISA ",
    description: "#2 ARROZ PAISA 300 GARMOS PARA 1 PERSONAS , COSTILLA A LA BBQ, PAPAS A LA FRANCESA, 1 GASEOSAS",
    price: 20000,
    image: "img/arroz1.jpeg",
    type: "fast-food",
  },
  {
    name: "POSTA SUDADA ",
    description: " ARROZ , ENSALADA,FRIJOL O SOPA,TAJADA DE MADURO GUARAPO,GASESOSA,O CLARO, AGUACATE  ",
    price: 18000,
    image: "img/POSTA4.jpg",
    type: "menu",
  },
  {
    name: "HIGADO ENCEBOLLADO",
    description: " ARROZ,ENSALADA,FRIJOL O SOPA,AGUACTE,TAJADA DE MADURO ,GUARAPO ,GASEOSA O CLARO",
    price: 18000,
    image: "img/HIGADO ENCEBOLLADO1.jpg",
    type: "menu",
  },
  {
    name: "CARNE DE CERDO ESPECIAL ASADO AL BARRIL ",
    description:
      "300 GRAMOS DE CERDO ESPECIAL ASADO AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS",
    price: 20000,
    image: "img/CARNE ASADA 2.jpeg",
    type: "fast-food",
  },
  {
    name: "CARNE DE RES ASADA AL BARRIL ",
    description:
      "300 GRAMOS DE RES ESPECIAL ASADA AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS",
    price: 21000,
    image: "img/CARNE ASADA 2.jpeg",
    type: "fast-food",
  },
  {
    name: "CHICHARRON ASADO AL BARRIL",
    description:
      "CHICHARRON  ASADO AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS",
    price: 20000,
    image: "img/chicharron azado.jpg",
    type: "fast-food",
  },
  {
    name: "CHORIZO ASADO AL BARRIL ",
    description:
      "CHORIZO DEL ORIENTE  ASADO AL BARRIL, SALSAS CHIMICURRI Y HOGADO , AREPA CON MOZARELLA, PAPA COCIDA, 1 GASEOSAS",
    price: 18000,
    image: "img/chorizo asado1.jpeg",
    type: "fast-food",
  },
  {
    name: "SANCOCHO DE GALLINA CRIOLLA ",
    description:
      "SANCOCHO DE GALLINA CRIOLLA ,SECO ,ENSALADA ,AGUACATE, BANANO, SALSAS CHIMICURRI Y HOGADO , GUARAPO O GASEOSA",
    price: 25000,
    image: "img/gallina1.gif",
    type: "menu",
  },
  {
    name: "PICADA DEL BARRIL(2 PERSONAS)",
    description:
      "PICADA AL BARRIL 6 PROTEINAS CERDO,CHORIZO,POLLO,CHICHARRON COSTILLA, MORCILLA,PAPA COCIDA SALSAS CHIMICURRI Y HOGADO PATACON,2 GASEOSAS",
    price: 30000,
    image: "img/picada .jpg",
    type: "fast-food",
    hasPicadaOptions: true,
  },
  {
    name: "PICADA DEL BARRIL FAMILIAR(4 PERSONAS)",
    description:
      "PICADA AL BARRIL 6 PROTEINAS CERDO,CHORIZO,POLLO,CHICHARRON COSTILLA, MORCILLA,PAPA COCIDA SALSAS CHIMICURRI Y HOGADO PATACON,4 GASEOSAS",
    price: 50000,
    image: "img/picada familiar.jpg",
    type: "fast-food",
    hasPicadaOptions: true,
  },
  {
    name: "PATACÓN CON CARNE DE SOBREBARRIGA DESMECHADA",
    description: "PATACON DE MADURO O VERDE,GUACAMOLE, HOGAO, QUESO MOZARELLA,GASEOSA O GUARAPO",
    price: 18000,
    image: "img/patacon final.png",
    type: "fast-food",
  },
  {
    name: "PATACÓN MIXTO (CARNE DE SOBREBARRIGA Y POLLO)",
    description: "PATACON DE MADURO O VERDE,GUACAMOLE, HOGAO, QUESO MOZARELLA,GASEOSA O GUARAPO",
    price: 18000,
    image: "img/patacon final.png",
    type: "fast-food",
  },
  {
    name: "PATACÓN CON TODO (CARNE DE SOBREBARRIGA,POLLO, CERDO,SALCHICHA RANCHERA,TOCINETA",
    description: "PATACON DE MADURO O VERDE,GUACAMOLE, HOGAO, QUESO MOZARELLA, GASEOSA O GUARAPO",
    price: 20000,
    image: "img/patacon final.png",
    type: "fast-food",
  },
  {
    name: "TAMALES DE MASA ",
    description: "3 CARNES: CHICHARRÓN, CARNE DE CERDO, COSTILLA  DE CERDO PORCION DE AGUACATE MÁS GASEOSA",
    price: 20000,
    image: "img/tamal con gaseosa.jpg",
    type: "fast-food",
  },
  {
    name: "FIAMBRES",
    description: "CHICHARRÓN, CARNE MOLIDA,CHORIZO, HUEVO COCIDO, PURÉ DE PAPA,TAJADA DE MADURO AGUCATE MÁS GASEOSA",
    price: 22000,
    image: "img/fiambre 19.jpg",
    type: "fast-food",
  },
  {
    name: "SUDADO DE POLLO",
    description: "ARROZ, FRIJOL,ENSALADA, TAJADA DE MADURO, AGUCATE,BANANO,GUARAPO,SOPA DEL DIA",
    price: 20000,
    image: "img/pollo sudado.jpeg",
    type: "menu",
  },
  {
    name: "MENU COMPLETICO CON RES",
    description: "ARROZ, FRIJOL, ENSALADA, HUEVO, PAPAS FRITAS, AGUCATE,GUARAPO,SOPA DEL DIA",
    price: 17000,
    image: "img/menu con res.jpg",
    type: "menu",
  },
  {
    name: "MENU COMPLETICO CON PECHUGA",
    description: "ARROZ, FRIJOL, ENSALADA, HUEVO, PAPAS FRITAS, AGUCATE,GUARAPO,SOPA DEL DIA",
    price: 16000,
    image: "img/menu con pechuga.jpg",
    type: "menu",
  },
  {
    name: "MENU COMPLETICO CON CERDO",
    description: "ARROZ, FRIJOL, ENSALADA, HUEVO, PAPAS FRITAS, AGUCATE,GUARAPO,SOPA DEL DIA",
    price: 16000,
    image: "img/menu con cerdo.jpg",
    type: "menu",
  },
  {
    name: "MENU COMPLETICO CON CHICHARRON",
    description: "ARROZ, FRIJOL, ENSALADA, HUEVO, PAPAS FRITAS, AGUCATE,GUARAPO,SOPA DEL DIA",
    price: 16000,
    image: "img/menu con cerdo.jpg",
    type: "menu",
  },
  {
    name: "PECHUGA A LA PLANCHA",
    description: "ARROZ, FRIJOL,ENSALADA, TAJADA DE MADURO, PAPITAS A ALA FRANCESA,AGUCATE,BANANO,GUARAPO,SOPA DEL DIA",
    price: 20000,
    image: "img/pechuga con papas.jpeg",
    type: "menu",
  },
  {
    name: "DESGRANADOS QUESUDOS",
    description: "*nuestros desgranados únicos, preparados con el toque casero que solo **Claudia* sabe dar 💛",
    price: 20000,
    image: "img/DESGRANADOS.jpeg",
    type: "menu",
  },
  {
    name: "Video: NUESTROS TAMALES SE LES SALE LA CARNE",
    description: "Mira cómo preparamos nuestros deliciosos tamales",
    video: "videos/tamal desbordado.mp4",
  },
  {
    name: "Video: NUESTRO ARROZ PAISA",
    description: "Conoce nuestra cocina y nuestro proceso",
    video: "videos/arroz paisa video.mp4",
  },
]

let cart = []
let selectedProduct = null

document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("productContainer")
  const modal = document.getElementById("orderModal")
  const checkoutModal = document.getElementById("checkoutModal")
  const closeBtn = document.getElementsByClassName("close")[0]
  const closeCheckoutBtn = document.getElementsByClassName("close-checkout")[0]
  const orderForm = document.getElementById("orderForm")
  const checkoutForm = document.getElementById("checkoutForm")
  const checkoutBtn = document.getElementById("checkoutBtn")
  const toggleCartBtn = document.getElementById("toggleCart")
  const cartFloat = document.getElementById("cartFloat")

  function renderProducts() {
    productContainer.innerHTML = ""
    products.forEach((product) => {
      const productCard = document.createElement("div")
      productCard.className = "product-card"
      if (product.image) {
        productCard.innerHTML = `
                    <img class="product-image" src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">$${product.price.toLocaleString()}</span>
                    <button class="order-btn" data-product="${product.name}">Agregar al Pedido</button>
                `
      } else if (product.video) {
        productCard.innerHTML = `
                    <video class="product-image" controls>
                        <source src="${product.video}" type="video/mp4">
                        Tu navegador no soporta el tag de video.
                    </video>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                `
      }
      productContainer.appendChild(productCard)
    })
  }

  function openModal(productName) {
    selectedProduct = products.find((p) => p.name === productName)
    modal.style.display = "block"
    orderForm.reset()

    document.getElementById("modalTitle").textContent = selectedProduct.name

    // Mostrar/ocultar opciones específicas
    const wingFlavorsDiv = document.getElementById("wingFlavors")
    const picadaOptionsDiv = document.getElementById("picadaOptions")

    wingFlavorsDiv.style.display = selectedProduct.hasWingFlavors ? "block" : "none"
    picadaOptionsDiv.style.display = selectedProduct.hasPicadaOptions ? "block" : "none"

    const beverageSelect = document.getElementById("beverage")
    beverageSelect.innerHTML = '<option value="">Seleccione una opción</option>'

    if (selectedProduct.type === "menu") {
      // Menús llevan jugos
      beverageSelect.innerHTML += `
                <option value="Jugo de Manzana">Jugo de Manzana</option>
                <option value="Jugo de Naranja">Jugo de Naranja</option>
                <option value="Jugo de Mora">Jugo de Mora</option>
                <option value="Jugo de Lulo">Jugo de Lulo</option>
                <option value="Guarapo">Guarapo</option>
            `
    } else if (selectedProduct.type === "fast-food") {
      // Comidas rápidas llevan gaseosas
      beverageSelect.innerHTML += `
                <option value="Coca Cola">Coca Cola</option>
                <option value="Coca Cola Zero">Coca Cola Zero</option>
                <option value="Sprite">Sprite</option>
                <option value="Colombiana">Colombiana</option>
                <option value="Manzana Postobón">Manzana Postobón</option>
                <option value="Naranja Postobón">Naranja Postobón</option>
            `
    }
  }

  function closeModal() {
    modal.style.display = "none"
  }

  function closeCheckoutModal() {
    checkoutModal.style.display = "none"
  }

  function addToCart(orderDetails) {
    const quantity = Number.parseInt(orderDetails.quantity)
    const productPrice = selectedProduct.price
    const total = productPrice * quantity

    const cartItem = {
      id: Date.now(),
      product: selectedProduct,
      quantity: quantity,
      total: total,
      details: orderDetails,
    }

    cart.push(cartItem)
    updateCartDisplay()
    closeModal()
  }

  function updateCartDisplay() {
    const cartItems = document.getElementById("cartItems")
    const cartCount = document.getElementById("cartCount")
    const cartTotal = document.getElementById("cartTotal")
    const checkoutBtn = document.getElementById("checkoutBtn")

    cartCount.textContent = cart.length

    if (cart.length === 0) {
      cartItems.innerHTML = '<p style="text-align: center; color: #999;">Tu carrito está vacío</p>'
      checkoutBtn.disabled = true
      cartTotal.textContent = "0"
      return
    }

    checkoutBtn.disabled = false

    let totalAmount = 0
    cartItems.innerHTML = ""

    cart.forEach((item) => {
      totalAmount += item.total

      const cartItemDiv = document.createElement("div")
      cartItemDiv.className = "cart-item"

      let detailsHTML = ""

      if (item.product.hasWingFlavors && item.details.wingFlavors) {
        const flavors = Array.isArray(item.details.wingFlavors)
          ? item.details.wingFlavors.join(", ")
          : item.details.wingFlavors
        detailsHTML += `<div class="cart-item-details">Sabores: ${flavors}</div>`
      }

      if (item.product.hasPicadaOptions && item.details.picadaOptions) {
        const options = Array.isArray(item.details.picadaOptions)
          ? item.details.picadaOptions.join(", ")
          : item.details.picadaOptions
        detailsHTML += `<div class="cart-item-details">Opciones: ${options}</div>`
      }

      if (item.details.beverage) {
        detailsHTML += `<div class="cart-item-details">Bebida: ${item.details.beverage}</div>`
      }

      cartItemDiv.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.product.name}</div>
                    ${detailsHTML}
                    <div class="cart-item-details">Cantidad: ${item.quantity}</div>
                    <div class="cart-item-price">$${item.total.toLocaleString()}</div>
                </div>
                <button class="remove-item-btn" data-id="${item.id}">✕</button>
            `

      cartItems.appendChild(cartItemDiv)
    })

    cartTotal.textContent = totalAmount.toLocaleString()
  }

  function removeFromCart(itemId) {
    cart = cart.filter((item) => item.id !== itemId)
    updateCartDisplay()
  }

  toggleCartBtn.addEventListener("click", () => {
    cartFloat.classList.toggle("collapsed")
    toggleCartBtn.textContent = cartFloat.classList.contains("collapsed") ? "▲" : "▼"
  })

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return

    checkoutModal.style.display = "block"
    updateCheckoutSummary()
  })

  function updateCheckoutSummary() {
    const checkoutSummary = document.getElementById("checkoutSummary")
    const checkoutSubtotal = document.getElementById("checkoutSubtotal")

    let subtotal = 0
    checkoutSummary.innerHTML = ""

    cart.forEach((item) => {
      subtotal += item.total

      const summaryItem = document.createElement("div")
      summaryItem.className = "summary-item"

      let detailsHTML = ""

      if (item.product.hasWingFlavors && item.details.wingFlavors) {
        const flavors = Array.isArray(item.details.wingFlavors)
          ? item.details.wingFlavors.join(", ")
          : item.details.wingFlavors
        detailsHTML += `<div class="summary-item-details">• Sabores: ${flavors}</div>`
      }

      if (item.product.hasPicadaOptions && item.details.picadaOptions) {
        const options = Array.isArray(item.details.picadaOptions)
          ? item.details.picadaOptions.join(", ")
          : item.details.picadaOptions
        detailsHTML += `<div class="summary-item-details">• Opciones: ${options}</div>`
      }

      if (item.details.beverage) {
        detailsHTML += `<div class="summary-item-details">• Bebida: ${item.details.beverage}</div>`
      }

      const sauces = item.details.sauces
        ? Array.isArray(item.details.sauces)
          ? item.details.sauces.join(", ")
          : item.details.sauces
        : "Ninguna"
      detailsHTML += `<div class="summary-item-details">• Salsas: ${sauces}</div>`

      summaryItem.innerHTML = `
                <div class="summary-item-name">${item.product.name} x${item.quantity}</div>
                ${detailsHTML}
                <div class="summary-item-details"><strong>$${item.total.toLocaleString()}</strong></div>
            `

      checkoutSummary.appendChild(summaryItem)
    })

    checkoutSubtotal.textContent = subtotal.toLocaleString()
    updateCheckoutTotal()
  }

  function updateCheckoutTotal() {
    const tipInput = document.getElementById("tip")
    const checkoutTip = document.getElementById("checkoutTip")
    const checkoutTotal = document.getElementById("checkoutTotal")
    const checkoutSubtotal = document.getElementById("checkoutSubtotal")
    const checkoutDelivery = document.getElementById("checkoutDelivery")
    const residenceSelect = document.getElementById("residence")

    const subtotal = Number.parseInt(checkoutSubtotal.textContent.replace(/\./g, ""))
    const tip = Number.parseInt(tipInput.value) || 0

    let deliveryFee = 0
    if (residenceSelect.value && residenceSelect.value !== "" && residenceSelect.value !== "Curazao") {
      deliveryFee = 3000
    }

    const total = subtotal + deliveryFee + tip

    checkoutDelivery.textContent = deliveryFee.toLocaleString()
    checkoutTip.textContent = tip.toLocaleString()
    checkoutTotal.textContent = total.toLocaleString()
  }

  function toggleAddressFields() {
    const residenceSelect = document.getElementById("residence")
    const customAddressGroup = document.getElementById("customAddressGroup")
    const towerGroup = document.getElementById("towerGroup")
    const apartmentGroup = document.getElementById("apartmentGroup")

    if (residenceSelect.value === "other") {
      customAddressGroup.style.display = "block"
      towerGroup.style.display = "none"
      apartmentGroup.style.display = "none"
    } else {
      customAddressGroup.style.display = "none"
      towerGroup.style.display = "block"
      apartmentGroup.style.display = "block"
    }

    updateCheckoutTotal()
  }

  function sendWhatsAppOrder(checkoutDetails) {
    let message = "🍽️ *Pedido de La Cocina de Claudia*\n\n"
    message += "📋 *PRODUCTOS:*\n"

    let subtotal = 0

    cart.forEach((item, index) => {
      subtotal += item.total
      message += `\n${index + 1}. *${item.product.name}*\n`
      message += `   Cantidad: ${item.quantity}\n`
      message += `   Precio unitario: $${item.product.price.toLocaleString()}\n`

      if (item.product.hasWingFlavors && item.details.wingFlavors) {
        const flavors = Array.isArray(item.details.wingFlavors)
          ? item.details.wingFlavors.join(", ")
          : item.details.wingFlavors
        message += `   Sabores: ${flavors}\n`
      }

      if (item.product.hasPicadaOptions && item.details.picadaOptions) {
        const options = Array.isArray(item.details.picadaOptions)
          ? item.details.picadaOptions.join(", ")
          : item.details.picadaOptions
        message += `   Opciones: ${options}\n`

        if (item.details.picadaDouble) {
          const doubles = Array.isArray(item.details.picadaDouble)
            ? item.details.picadaDouble.join(", ")
            : item.details.picadaDouble
          message += `   Dobles: ${doubles}\n`
        }
      }

      if (item.details.beverage) {
        message += `   Bebida: ${item.details.beverage}\n`
      }

      const sauces = item.details.sauces
        ? Array.isArray(item.details.sauces)
          ? item.details.sauces.join(", ")
          : item.details.sauces
        : "Ninguna"
      message += `   Salsas: ${sauces}\n`
      message += `   Echar salsas: ${item.details.addSauce ? "Sí" : "No"}\n`
      message += `   Subtotal: $${item.total.toLocaleString()}\n`
    })

    message += `\n💰 *TOTALES:*\n`
    message += `Subtotal: $${subtotal.toLocaleString()}\n`

    const residenceSelect = document.getElementById("residence")
    let deliveryFee = 0
    if (residenceSelect.value && residenceSelect.value !== "" && residenceSelect.value !== "Curazao") {
      deliveryFee = 3000
      message += `Domicilio: $${deliveryFee.toLocaleString()}\n`
    }

    const tip = Number.parseInt(checkoutDetails.tip) || 0
    if (tip > 0) {
      message += `Propina: $${tip.toLocaleString()}\n`
    }

    const total = subtotal + deliveryFee + tip
    message += `*TOTAL: $${total.toLocaleString()}*\n`

    message += `\n📍 *DATOS DE ENTREGA:*\n`
    message += `Nombre: ${checkoutDetails.name}\n`
    message += `Método de pago: ${checkoutDetails.payment}\n`

    if (checkoutDetails.residence === "other") {
      message += `Dirección: ${checkoutDetails.customAddress}\n`
    } else {
      message += `Residencia: ${checkoutDetails.residence}\n`
      message += `Torre: ${checkoutDetails.tower}\n`
      message += `Apartamento: ${checkoutDetails.apartment}\n`
    }

    const phoneNumber = "3112762618"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Limpiar carrito después de enviar
    cart = []
    updateCartDisplay()
    closeCheckoutModal()
  }

  // Event Listeners
  renderProducts()

  productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("order-btn")) {
      const productName = e.target.getAttribute("data-product")
      openModal(productName)
    }
  })

  document.getElementById("cartItems").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item-btn")) {
      const itemId = Number.parseInt(e.target.getAttribute("data-id"))
      removeFromCart(itemId)
    }
  })

  closeBtn.addEventListener("click", closeModal)
  closeCheckoutBtn.addEventListener("click", closeCheckoutModal)

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
    if (e.target === checkoutModal) {
      closeCheckoutModal()
    }
  })

  orderForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const orderDetails = Object.fromEntries(formData)
    addToCart(orderDetails)
  })

  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const checkoutDetails = Object.fromEntries(formData)
    sendWhatsAppOrder(checkoutDetails)
  })

  document.getElementById("residence").addEventListener("change", toggleAddressFields)
  document.getElementById("tip").addEventListener("input", updateCheckoutTotal)

  // Validación de sabores de alitas (máximo 2)
  const wingFlavorCheckboxes = document.querySelectorAll('input[name="wingFlavors"]')
  wingFlavorCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const checkedFlavors = document.querySelectorAll('input[name="wingFlavors"]:checked')
      if (checkedFlavors.length > 2) {
        this.checked = false
        alert("Solo puedes seleccionar hasta 2 sabores de alitas")
      }
    })
  })

  // Validación de opciones de picada (máximo 6)
  const picadaCheckboxes = document.querySelectorAll('input[name="picadaOptions"], input[name="picadaDouble"]')
  picadaCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const checkedOptions = document.querySelectorAll(
        'input[name="picadaOptions"]:checked, input[name="picadaDouble"]:checked',
      )
      if (checkedOptions.length > 6) {
        this.checked = false
        alert("Solo puedes seleccionar hasta 6 opciones en total")
      }
    })
  })
})
