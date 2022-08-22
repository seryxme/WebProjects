if (document.readyState == "loading") {
  addEventListener("DOMContentLoaded", ready);
} else ready();

function ready() {
  let cartItemRemover = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < cartItemRemover.length; i++) {
    let button = cartItemRemover[i];
    button.addEventListener("click", removeCartItem);
  }

  let quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let quantityInput = quantityInputs[i];
    quantityInput.addEventListener("change", quantityChange);
  }

  let cartItemAdds = document.getElementsByClassName("shop-item-btn");
  for (let i = 0; i < cartItemAdds.length; i++) {
    let addButton = cartItemAdds[i];
    addButton.addEventListener("click", addItemClick);
  }

  let cartItemPurchase = document.getElementsByClassName("btn-purchase");
  cartItemPurchase[0].addEventListener("click", purchaseItemClick);
}

function purchaseItemClick() {
  alert("Purchase successful. Thank you for shopping with us.");
  cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
    currentCartValue();
  }
}

function addItemClick(event) {
  let addButtonClicked = event.target;
  shopItem = addButtonClicked.parentElement.parentElement;
  title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc);
  currentCartValue();
}

function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  let cartItems = document.getElementsByClassName("cart-items")[0];
  let cartItemNames = document.getElementsByClassName("cart-item-title");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("You have already added this item.");
      return;
    }
  }
  let cartRowContents = `
  <div class="cart-item cart-column">
    <img
      class="cart-item-image"
      src="${imageSrc}"
      width="100"
      height="100"
      alt=""
    />
    <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1" />
    <button type="button" class="btn btn-danger">REMOVE</button>
  </div>
  `;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("click", quantityChange);
}

function quantityChange(event) {
  let quantityInput = event.target;
  if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
    quantityInput.value = 1;
  }
  currentCartValue();
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  currentCartValue();
}

function currentCartValue() {
  let cartItem = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItem.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerText.replace("N", ""));
    let quantity = quantityElement.value;
    total += price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "N" + total.toFixed(2);
}
