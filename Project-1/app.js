"use strict";

// Showing navbar when clicking menu on mobile view
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".sidebar");

mobile.addEventListener("click", function () {
  mobile.classList.toggle("is-active");
  mobileLink.classList.toggle("active");
});

// Close menu when clicking
mobileLink.addEventListener("click", function () {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
  }
});

// Move the menu to right and left when clicking back and next
let step = 100;
let stepFilter = 60;
let scrolling = true;
$(".back").bind("click", function (e) {
  e.preventDefault();
  $(".highlight-wrapper").animate({
    scrollLeft: "-=" + step + "px",
  });
});

$(".next").bind("click", function (e) {
  e.preventDefault();
  $(".highlight-wrapper").animate({
    scrollLeft: "+=" + step + "px",
  });
});

// When clicking back and next on menu filters
$(".back-menus").bind("click", function (e) {
  e.preventDefault();
  $(".filter-wrapper").animate({
    scrollLeft: "-=" + stepFilter + "px",
  });
});

$(".next-menus").bind("click", function (e) {
  e.preventDefault();
  $(".filter-wrapper").animate({
    scrollLeft: "+=" + stepFilter + "px",
  });
});

// For shopping cart part
// For cart popup
function toggleCartPopup() {
  const cartPopup = document.getElementById("cart-popup");
  cartPopup.classList.toggle("active");
}

// For closing cart popup
function closeCart() {
  const cartPopup = document.getElementById("cart-popup");
  cartPopup.classList.remove("active");
}

// for update cart
function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

// For adding items to cart
function addToCart(itemName, itemPrice) {
  const cartItems = document
    .getElementById("cart-items")
    .getElementsByTagName("tbody")[0];
  let existingItem = null;
  const rows = cartItems.getElementsByTagName("tr");

  for (let row of rows) {
    if (row.cells[0].textContent === itemName) {
      existingItem = row;
      break;
    }
  }

  if (existingItem) {
    const itemCount =
      parseInt(existingItem.querySelector(".item-count").textContent) + 1;
    existingItem.querySelector(".item-count").textContent = itemCount;

    const itemTotal =
      parseFloat(existingItem.querySelector(".item-total").textContent) +
      parseFloat(itemPrice);
    existingItem.querySelector(".item-total").textContent =
      itemTotal.toFixed(2);
  } else {
    const newRow = cartItems.insertRow();
    newRow.innerHTML = `<td>${itemName}</td>
    <td class="item-count">1</td>
    <td class="item-price">${itemPrice}</td>
    <td class="item-total">${itemPrice}</td>`;
  }

  updateCartTotal();
}

// Function to update the total price in the cart
function updateCartTotal() {
  const cartItems = document
    .getElementById("cart-items")
    .getElementsByTagName("tbody")[0];
  const rows = cartItems.getElementsByTagName("tr");
  let total = 0.0;

  for (let row of rows) {
    const itemTotal = parseFloat(row.querySelector(".item-total").textContent);
    total += itemTotal;
  }

  document.getElementById("cart-total").textContent = total.toFixed(2);
}

// For profile page form submission
document.addEventListener("DOMContentLoaded", () => {
  const profileForm = document.querySelector(".profile-form");
  const homeLink = document.getElementById("home-link");
  const shopLink = document.getElementById("shop-link");
  const profileLink = document.getElementById("profile-link");
  const backToHomeBtn = document.getElementById("back-to-home");

  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Retrieve form data
      const formData = new FormData(profileForm);
      const userData = {
        fullName: formData.get("full-name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
      };

      // Simulate saving data (e.g., sending to server)
      console.log("User Data:", userData);

      // Show a success message
      alert("Profile updated successfully!");
    });
  }

  if (homeLink) {
    homeLink.addEventListener("click", () => {
      showSection("home-section");
    });
  }

  if (shopLink) {
    shopLink.addEventListener("click", () => {
      showSection("shop-section");
    });
  }

  if (profileLink) {
    profileLink.addEventListener("click", () => {
      showSection("profile-section");
    });
  }

  if (backToHomeBtn) {
    backToHomeBtn.addEventListener("click", () => {
      showSection("home-section");
    });
  }

  // Navigation logic to switch between sections
  document.getElementById("home-link").addEventListener("click", () => {
    showSection("home-section");
  });

  document.getElementById("shop-link").addEventListener("click", () => {
    showSection("shop-section");
  });

  document.getElementById("profile-link").addEventListener("click", () => {
    showSection("profile-section");
  });

  document.getElementById("back-to-home").addEventListener("click", () => {
    showSection("home-section");
  });

  function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.style.display = section.id === sectionId ? "block" : "none";
    });
  }
});
