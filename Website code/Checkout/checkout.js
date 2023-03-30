/****************************************
This is for the hidden form
*****************************************/

var form = document.getElementById("my-form");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}

/****************************************
This gets the items the user wants to pay for
*****************************************/
const listOfItems = document.querySelector(".items-list");
const finalItems = sessionStorage.getItem("checkoutItems");
const finalItemsArray = finalItems.split(",");
let finalTotal = 0;
let finalItemsEmail = "";
// Walks through users items and displays them
finalItemsArray.forEach(function (item) {
  const [itemSize, itemName] = item.split(":");

  if (itemSize == "Small ") {
    console.log("Small");
    const newListItem = document.createElement("li");
    newListItem.textContent = `$35 : Small : ${itemName}`;
    listOfItems.appendChild(newListItem);
    newListItem.classList.add("checkout-item");

    finalTotal += 35;
    finalItemsEmail += `$35 : Small : ${itemName} 

    `;
  } else if (itemSize == "Medium ") {
    console.log("Medium");
    const newListItem = document.createElement("li");
    newListItem.textContent = `$45 : Medium : ${itemName}`;
    listOfItems.appendChild(newListItem);
    newListItem.classList.add("checkout-item");

    finalTotal += 45;
    finalItemsEmail += `$45 : Medium : ${itemName}
    
    `;
  } else if (itemSize == "Large ") {
    console.log("Large");
    const newListItem = document.createElement("li");
    newListItem.textContent = `$60 : Large : ${itemName}`;
    listOfItems.appendChild(newListItem);
    newListItem.classList.add("checkout-item");

    finalTotal += 60;
    finalItemsEmail += `$60 : Large : ${itemName}
    
    `;
  }
});

const total = document.querySelector(".total");
total.textContent = `Total : $${finalTotal}`;

if (finalTotal == 0) {
  window.location.href = "../Product/product.html";
}

/****************************************
This checks if all shipping boxes are 
filled and emails information to me
*****************************************/
let confirmationEmail = "";
const shippingBtn = document.querySelector(".shipping-btn");
const popup = document.querySelector(".popup-shipping");
const missedFields = document.querySelector(".selected-fields");

//Submits shipping information
shippingBtn.addEventListener("click", function () {
  const requiredInputs = document.querySelectorAll("[required]");
  let unfilledInputs = [];

  for (let i = 0; i < requiredInputs.length; i++) {
    if (!requiredInputs[i].value) {
      unfilledInputs.push(requiredInputs[i].name);
    }
  }

  //pop up that tells the user what boxes still need to be filled
  if (unfilledInputs.length == 0) {
    console.log("You did everything for shipping");
    //This should unlock the payment section
    const paypalSection = document.querySelector(".paypal");
    paypalSection.classList.add("payment-opened");
    const disclaimer = document.querySelector(".disclaimer");
    disclaimer.textContent = "";

    /****************************************
  This is getting the shipping information in a email format
  *****************************************/
    //This makes the 7 char confirmation code to confirm their order
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let confirmationNumber = "";
    for (let i = 0; i < 7; i++) {
      confirmationNumber += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    //All input values after button clicked (which opened payment)
    const shippingName = document.querySelector(".name-input").value;
    const shippingAddress = document.querySelector(".address-input").value;
    const shippingState = document.querySelector(".state-input").value;
    const shippingZip = document.querySelector(".zip-input").value;
    const shippingSpecial = document.querySelector(".special-input").value;
    const shippingCity = document.querySelector(".city-input").value;
    const shippingEmail = document.querySelector(".email-input").value;

    confirmationEmail = `Confirmation Code: ${confirmationNumber} 

    Name: ${shippingName} 

    Email: ${shippingEmail} 

    Address: ${shippingAddress} 

    State: ${shippingState} 

    Zip: ${shippingZip} 

    City: ${shippingCity} 

    Special Shipping Information: ${shippingSpecial} 
    
    Items: 
    ${finalItemsEmail}

    `;
    console.log(confirmationEmail);

    //Hidden form to send email
    const hiddenEmail = document.getElementById("hidden-email");
    const hiddenMessage = document.getElementById("hidden-message");
    hiddenEmail.value = shippingEmail;
    hiddenMessage.value = confirmationEmail;
  } else {
    popup.classList.add("popup-open");
    //Fields that were missed
    for (let i = 0; i < unfilledInputs.length; i++) {
      const li = document.createElement("li");
      li.textContent = unfilledInputs[i];
      missedFields.appendChild(li);
    }
    popup.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
});

/****************************************
This programs the paypal buttons
*****************************************/

function initPayPalButton() {
  paypal
    .Buttons({
      style: {
        shape: "rect",
        color: "gold",
        layout: "vertical",
        label: "pay",
      },

      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              description: "Canvas with a mystical theme!",
              // This is the amount paypal will charge the user
              amount: { currency_code: "USD", value: finalTotal },
            },
          ],
        });
      },

      onApprove: function (data, actions) {
        return actions.order.capture().then(function (orderData) {
          // Full available details
          console.log(
            "Capture result",
            orderData,
            JSON.stringify(orderData, null, 2)
          );

          //window.location.href = "../Confirmation/confirmation.html";
          //Payment success sends confirmation email
          form.submit(handleSubmit);
        });
      },

      onError: function (err) {
        console.log(err);
      },
    })
    .render("#paypal-button-container");
}
initPayPalButton();

/****************************************
This is the back button for the popup
*****************************************/

const popupBack = document.querySelector(".popup-back-btn");
popupBack.addEventListener("click", function () {
  popup.classList.remove("popup-open");
  missedFields.innerHTML = "";
});

/****************************************
This back button goes to product page (at top)
*****************************************/
const backBtn = document.querySelector(".menu-btn");
backBtn.addEventListener("click", function () {
  window.location.href = "../Product/product.html";
});
