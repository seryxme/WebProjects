if (document.readyState == "loading") {
  addEventListener("DOMContentLoaded", ready);
} else ready();

function ready() {
  let cartItemRemover = document.getElementsByClassName("btn-danger");
  console.log(cartItemRemover);
  for (let i = 0; i < cartItemRemover.length; i++) {
    let button = cartItemRemover[i];
    button.addEventListener("click", function (event) {
      let buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
      currentCartValue();
    });
  }
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
    "N" + total;
}
