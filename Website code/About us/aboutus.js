"use scrict";

/****************************************
This is to make the menu button function
*****************************************/
const myButton = document.querySelector(".menu-btn");
const hide = document.querySelector(".hide");

myButton.addEventListener("click", function () {
  hide.classList.toggle("showing");
});

/****************************************
This is to make the logo button function
*****************************************/
const logoBtn = document.querySelector(".image-text");
const homePage = "../Landing/index.html";

logoBtn.addEventListener("click", function () {
  window.location.href = homePage;
});

/****************************************
This is to make the cart button function
*****************************************/
const cartBtn = document.querySelector(".cart-btn");
const cartPage = "../Cart/cart.html";

cartBtn.addEventListener("click", function () {
  window.location.href = cartPage;
});

/****************************************
This gets the amount of cart items 
*****************************************/
const cartIcon = sessionStorage.getItem("cartIconAbout");
const icon = document.getElementById("my-paragraph");
icon.textContent = cartIcon;

if (cartIcon > 0) {
  icon.classList.add("cart-items-display");
} else {
  icon.classList.remove("cart-items-display");
}
