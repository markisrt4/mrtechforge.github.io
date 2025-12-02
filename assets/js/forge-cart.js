// forge-cart.js
// Simple cart logic for M.R. TechForge (MRTF) shop

(function () {
  const CART_STORAGE_KEY = 'forge_cart';
  let cart = [];

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
      if (Array.isArray(saved)) {
        cart = saved;
      }
    } catch (e) {
      console.error('Error loading cart from localStorage', e);
      cart = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }

  function updateCart() {
    const cartElement = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('cart-total');

    // If cart DOM isn't present on this page, just keep state synced in storage
    if (!cartElement || !cartItems || !total) {
      saveCart();
      return;
    }

    cartItems.innerHTML = '';
    let sum = 0;

    cart.forEach(item => {
      sum += item.price * item.quantity;
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${item.name} ×${item.quantity}</span>
        <button class="remove-item" data-name="${item.name}">x</button>
      `;
      cartItems.appendChild(li);
    });

    total.textContent = sum.toFixed(2);
    saveCart();
  }

  function addToCart(name, price) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCart();
  }

  function removeFromCart(name) {
    const index = cart.findIndex(i => i.name === name);
    if (index > -1) {
      cart.splice(index, 1);
      updateCart();
    }
  }

  async function checkout() {
    if (!cart.length) {
      alert('Your cart is empty.');
      return;
    }

    try {
      const res = await fetch('https://api.mrtechforge.com/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart })
      });

      if (!res.ok) {
        throw new Error('Checkout request failed');
      }

      const data = await res.json();
      if (data.url) {
        window.location = data.url;
      } else {
        alert('Could not start checkout. Please try again later.');
      }
    } catch (err) {
      console.error('Checkout error', err);
      alert('There was a problem starting checkout. Please try again later.');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCart();

    // Delegate clicks for Add to Cart and Remove buttons
    document.addEventListener('click', (e) => {
      const target = e.target;

      // Add to cart
      if (target.classList.contains('add-to-cart')) {
        const name = target.dataset.name;
        const price = parseFloat(target.dataset.price);
        if (!name || isNaN(price)) return;
        addToCart(name, price);
      }

      // Remove item
      if (target.classList.contains('remove-item')) {
        const name = target.dataset.name;
        if (!name) return;
        removeFromCart(name);
      }

      // Checkout button (in case it exists on multiple pages)
      if (target.id === 'checkout') {
        checkout();
      }
    });
  });
})();