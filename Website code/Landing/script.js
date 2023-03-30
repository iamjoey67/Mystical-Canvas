"use scrict";
// Functions

/****************************************
This is to make the menu button function
*****************************************/
const myButton = document.querySelector(".menu-btn");
const hide = document.querySelector(".hide");

myButton.addEventListener("click", function () {
  hide.classList.toggle("showing");
});

/****************************************
Button clicks on main menu
*****************************************/
const introBtn = document.querySelector(".btn-intro");
const showcaseBtn = document.querySelector(".btn-show");
const cartBtn = document.querySelector(".cart-btn");
const productPage = "../Product/product.html";
const cartPage = "../Cart/cart.html";

//To product page

introBtn.addEventListener("click", function () {
  window.location.href = productPage;
});

showcaseBtn.addEventListener("click", function () {
  window.location.href = productPage;
});

//To cart page
cartBtn.addEventListener("click", function () {
  window.location.href = cartPage;
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
See More, goes to About us page
*****************************************/
const aboutUs = "../About us/aboutus.html#aboutus";
const seeMorebutton = document.querySelector(".btn-testimonial");

seeMorebutton.addEventListener("click", function () {
  window.location.href = aboutUs;
});

/****************************************
This gets the amount of cart items 
*****************************************/
const cartIcon = sessionStorage.getItem("cartIconHome");
const icon = document.getElementById("my-paragraph");
icon.textContent = cartIcon;

if (cartIcon > 0) {
  icon.classList.add("cart-items-display");
} else {
  icon.classList.remove("cart-items-display");
}
