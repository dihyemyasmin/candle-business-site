let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartUI() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  // Update cart count safely
  if (cartCount) {
    cartCount.textContent = cart.length;
  }

  // If cart list doesn't exist on this page, stop here
  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `<li class="list-group-item text-center text-muted">Your cart is empty</li>`;

    if (cartTotal) {
      cartTotal.textContent = "Total: $0.00";
    }

    return;
  }

  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${item.name}</span>
        <span>$${item.price.toFixed(2)}</span>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Delete</button>
      </li>
    `;
  });

  if (cartTotal) {
    cartTotal.textContent = "Total: $" + total.toFixed(2);
  }
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

// Wait until the page loads before updating cart UI
document.addEventListener("DOMContentLoaded", function () {
  updateCartUI();
});