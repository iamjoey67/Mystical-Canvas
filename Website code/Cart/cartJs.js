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
Pop up to tell the user they are in the cart
when cart button is pressed
*****************************************/

const closeBtn = document.getElementById("popup-close");
const popup = document.getElementById("popup");
const cartBtn = document.getElementById("cart-btn");

cartBtn.addEventListener("click", function () {
  popup.classList.add("popup-open");
  popup.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
});

closeBtn.addEventListener("click", function () {
  popup.classList.remove("popup-open");
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
Cart icon display, uses numItems for 
counter
*****************************************/
const addToCartIcon = function (iconNum) {
  let itemDisplay = document.getElementById("my-paragraph");
  itemDisplay.textContent = numItems;

  if (iconNum > 0) {
    itemDisplay.classList.add("cart-items-display");
  } else {
    itemDisplay.classList.remove("cart-items-display");
  }
};

/****************************************
display items, item number, size and price in cart
*****************************************/
// Adds card in cart
let allCartItems = "";
let numItems = 0;
let finalItems = [];

// This gets price,size,num and creates a card,
//with those features.
const addCard = function (price, size, itemNumber) {
  console.log("Added to cart");
  numItems++;
  addToCartIcon(numItems);

  //Creates the picture
  let pictureName = "Beauty Cat";

  if ("item1" == itemNumber) {
    pictureName = "Lava thunderstorm in globe";
    itemNumber = "Trapped Beauty";
  } else if ("item2" == itemNumber) {
    pictureName = "The Apocalypse";
    itemNumber = "The Apocalypse";
  } else if ("item3" == itemNumber) {
    pictureName = "The outpost";
    itemNumber = "The Outpost";
  } else if ("item4" == itemNumber) {
    pictureName = "thousand_dollar_flex";
    itemNumber = "Thousand Dollar Flex";
  } else if ("item5" == itemNumber) {
    pictureName = "Victory";
    itemNumber = "Victory";
  } else if ("item6" == itemNumber) {
    pictureName = "Beauty Cat";
    itemNumber = "She's Feline Cute";
  }

  const htmlItem = `

  <item class="item-layout">
  <img
  src="/images/Product Pictures/${pictureName}.png"
    alt="Picture of Product"
    class="item-img"
  />
  <div class="name-btn-hld">
    <button class="cart-delete btn-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
    <p class="cart-text cart-price">${price}</p>
  </div>
  <p class="cart-text cart-size">${size}</p>
  
  <p class="cart-text cart-name">${itemNumber}</p>
  </item>
  
  `;

  allCartItems += htmlItem;

  const cart = document.getElementById("cart-contents");
  cart.innerHTML = allCartItems;

  //For final items checkout page
  const fullItem = size + " : " + itemNumber;
  finalItems.push(fullItem);
};

// Got the selections array from product.js
const sessionString = sessionStorage.getItem("theArray");
const newItems = JSON.parse(sessionString);

/**
 Uses cart array to get size,price, and itemNumber for 
 addCard array.
 */

for (let i = 0; newItems.length > i; i++) {
  let size = "";
  let price = "";
  // Size and Price
  if (newItems[i] == "small") {
    size = "Small";
    price = "$35.00";
    //newItems[i -1] accesses which item was selected
    addCard(price, size, newItems[i - 1]);
  } else if (newItems[i] == "medium") {
    size = "Medium";
    price = "$45.00";
    addCard(price, size, newItems[i - 1]);
  } else if (newItems[i] == "large") {
    size = "Large";
    price = "$60.00";
    addCard(price, size, newItems[i - 1]);
  }
}

/****************************************
Removes items from cart. 
*****************************************/

const cartDelete = document.querySelectorAll("button.cart-delete");

cartDelete.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("Delete Item");
    numItems--;
    addToCartIcon(numItems);

    //This is to delete the item in the final array
    const btnParent = btn.parentNode;
    const btnGrandparent = btnParent.parentNode;
    const removedSize = btnGrandparent.querySelector("p.cart-size");
    const removedName = btnGrandparent.querySelector("p.cart-name");

    //deleted item gotten and taken out array
    const deletedItem =
      removedSize.textContent + " : " + removedName.textContent;

    finalItems.forEach(function (item, index) {
      if (item === deletedItem) {
        finalItems.splice(index, 1);
      }
    });
    /****************************************
    Sends cart number to home and product
    *****************************************/
    //Home
    sessionStorage.setItem("cartIconHome", numItems);
    //Product
    sessionStorage.setItem("cartIconProduct", numItems);

    const parentElement = btn.parentNode;
    const grandparentElement = parentElement.parentNode;
    grandparentElement.style.display = "none";
  });
});

/****************************************
Sends cart number to home and product if no delete
*****************************************/
//Home
sessionStorage.setItem("cartIconHome", numItems);
//About us
sessionStorage.setItem("cartIconAbout", numItems);

/****************************************
Checkout this will send all the information
to the checkout page + confirming the items
*****************************************/
//Checkout btn
const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", function () {
  const popup = document.querySelector(".checkout-popup");
  popup.classList.add("checkout-popup-open");
  popup.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
});

//Back button
const backBtn = document.querySelector(".no-button");

backBtn.addEventListener("click", function () {
  const popup = document.querySelector(".checkout-popup");
  popup.classList.remove("checkout-popup-open");
});

//Confirm btn
const confirmBtn = document.querySelector(".yes-button");

confirmBtn.addEventListener("click", function () {
  // What needs to be sent to checkout page
  console.log(finalItems);
  sessionStorage.setItem("checkoutItems", finalItems);
  window.location.href = "../Checkout/checkout.html";
});
