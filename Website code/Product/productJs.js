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
This is to make the cart button function
*****************************************/
const cartBtn = document.querySelector(".cart-btn");
const cartPage = "../Cart/cart.html";

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
Pop up when size IS NOT selected
*****************************************/
const popup = document.getElementById("popup");
const close = document.getElementById("popup-close");

close.addEventListener("click", function () {
  popup.classList.remove("popup-open");
});

/****************************************
Count items in cart
*****************************************/

let itemsInCart = 0;
let productsInCart = [];

// This is the icon on cart
const addToCartIcon = function () {
  let itemsDisplay = document.getElementById("my-paragraph");
  itemsDisplay.textContent = itemsInCart.toString();

  if (itemsInCart > 0) {
    itemsDisplay.classList.add("cart-items-display");
  } else {
    itemsDisplay.classList.remove("cart-items-display");
  }
};

// Gets the selected option (small,medium, or large)
const selectedOption = function (size) {
  const element = document.querySelector(size);
  const selectedOption = element.options[element.selectedIndex];

  if (selectedOption.text == "Size Selection") {
    console.log("You need to select a size");
    popup.classList.add("popup-open");
    popup.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  } else if (selectedOption.text == "Small") {
    console.log("You selected small");
    itemsInCart++;
    productsInCart.push("small");
    addToCartIcon();
  } else if (selectedOption.text == "Medium") {
    console.log("You selected medium");
    productsInCart.push("medium");
    itemsInCart++;
    addToCartIcon();
  } else if (selectedOption.text == "Large") {
    console.log("You selected large");
    productsInCart.push("large");
    itemsInCart++;
    addToCartIcon();
  }
};

/****************************************
 Looking at each item, to know what price should
 be displayed x6
*****************************************/
//1
const selection1 = document.getElementById("size-selection1");

selection1.addEventListener("click", function (option) {
  const selectedOption = option.target.value;

  if (selectedOption == "small") {
    const price = document.getElementById("product-price-1");
    price.textContent = "$35.00";
  } else if (selectedOption == "medium") {
    const price = document.getElementById("product-price-1");
    price.textContent = "$45.00";
  } else if (selectedOption == "large") {
    const price = document.getElementById("product-price-1");
    price.textContent = "$60.00";
  }
});
//2
const selection2 = document.getElementById("size-selection2");

selection2.addEventListener("click", function (option) {
  const selectedOption = option.target.value;

  if (selectedOption == "small") {
    const price = document.getElementById("product-price-2");
    price.textContent = "$35.00";
  } else if (selectedOption == "medium") {
    const price = document.getElementById("product-price-2");
    price.textContent = "$45.00";
  } else if (selectedOption == "large") {
    const price = document.getElementById("product-price-2");
    price.textContent = "$60.00";
  }
});
//3
const selection3 = document.getElementById("size-selection3");

selection3.addEventListener("click", function (option) {
  const selectedOption = option.target.value;

  if (selectedOption == "small") {
    const price = document.getElementById("product-price-3");
    price.textContent = "$35.00";
  } else if (selectedOption == "medium") {
    const price = document.getElementById("product-price-3");
    price.textContent = "$45.00";
  } else if (selectedOption == "large") {
    const price = document.getElementById("product-price-3");
    price.textContent = "$60.00";
  }
});
//4
const selection4 = document.getElementById("size-selection4");

selection4.addEventListener("click", function (option) {
  const selectedOption = option.target.value;

  if (selectedOption == "small") {
    const price = document.getElementById("product-price-4");
    price.textContent = "$35.00";
  } else if (selectedOption == "medium") {
    const price = document.getElementById("product-price-4");
    price.textContent = "$45.00";
  } else if (selectedOption == "large") {
    const price = document.getElementById("product-price-4");
    price.textContent = "$60.00";
  }
});
//5
const selection5 = document.getElementById("size-selection5");

selection5.addEventListener("click", function (option) {
  const selectedOption = option.target.value;

  if (selectedOption == "small") {
    const price = document.getElementById("product-price-5");
    price.textContent = "$35.00";
  } else if (selectedOption == "medium") {
    const price = document.getElementById("product-price-5");
    price.textContent = "$45.00";
  } else if (selectedOption == "large") {
    const price = document.getElementById("product-price-5");
    price.textContent = "$60.00";
  }
});
//6
const selection6 = document.getElementById("size-selection6");

selection6.addEventListener("click", function (option) {
  const selectedOption = option.target.value;

  if (selectedOption == "small") {
    const price = document.getElementById("product-price-6");
    price.textContent = "$35.00";
  } else if (selectedOption == "medium") {
    const price = document.getElementById("product-price-6");
    price.textContent = "$45.00";
  } else if (selectedOption == "large") {
    const price = document.getElementById("product-price-6");
    price.textContent = "$60.00";
  }
});
/****************************************
 Each items ability to get pressed x6 + the
a timer that makes the color green for
a second
*****************************************/

const item1 = document.querySelector(".cart-btn1");
item1.addEventListener("click", function () {
  productsInCart.push("item1");
  selectedOption("#size-selection1");
  item1.style.color = "#50C878";

  // Timeout for color revert
  setTimeout(function () {
    item1.style.color = "";
  }, 200);
});

const item2 = document.querySelector(".cart-btn2");
item2.addEventListener("click", function () {
  productsInCart.push("item2");
  selectedOption("#size-selection2");
  item2.style.color = "#50C878";

  // Timeout for color revert
  setTimeout(function () {
    item2.style.color = "";
  }, 200);
});

const item3 = document.querySelector(".cart-btn3");
item3.addEventListener("click", function () {
  productsInCart.push("item3");
  selectedOption("#size-selection3");
  item3.style.color = "#50C878";

  // Timeout for color revert
  setTimeout(function () {
    item3.style.color = "";
  }, 200);
});

const item4 = document.querySelector(".cart-btn4");
item4.addEventListener("click", function () {
  productsInCart.push("item4");
  selectedOption("#size-selection4");
  item4.style.color = "#50C878";

  // Timeout for color revert
  setTimeout(function () {
    item4.style.color = "";
  }, 200);
});

const item5 = document.querySelector(".cart-btn5");
item5.addEventListener("click", function () {
  productsInCart.push("item5");
  selectedOption("#size-selection5");
  item5.style.color = "#50C878";

  // Timeout for color revert
  setTimeout(function () {
    item5.style.color = "";
  }, 200);
});

const item6 = document.querySelector(".cart-btn6");
item6.addEventListener("click", function () {
  productsInCart.push("item6");
  selectedOption("#size-selection6");

  item6.style.color = "#50C878";

  // Timeout for color revert
  setTimeout(function () {
    item6.style.color = "";
  }, 200);
});

/****************************************
This sends over the array with the 
customers selected items
*****************************************/
const reviewBtn = document.getElementById("product-cartbtn");

reviewBtn.addEventListener("click", function () {
  sessionStorage.setItem("theArray", JSON.stringify(productsInCart));
  window.location.href = "../Cart/cart.html";
});
