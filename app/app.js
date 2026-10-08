const btnPress = document.getElementById("orderBtn");
const confirm = document.getElementById("orderConfirmation");

btnPress.addEventListener("click", () => {
  calculatePrice();
});

function calculatePrice() {
  let orderName = document.getElementById("orderName").value;
  let orderItem = document.getElementById("orderItem").value;
  let orderQuantity = document.getElementById("orderQuantity").value;

  if (orderItem === "Latte - $4.50") {
    let price = 4.5 * orderQuantity;
    confirm.innerHTML = `Thanks, ${orderName}! Your total is $${price.toFixed(2)}.`;
  } else if (orderItem === "Donut - $3.00") {
    let price = 3 * orderQuantity;
    confirm.innerHTML = `Thanks, ${orderName}! Your total is $${price.toFixed(2)}.`;
  } else if (orderItem === "Cookie - $2.50") {
    let price = 2.5 * orderQuantity;
    confirm.innerHTML = `Thanks, ${orderName}! Your total is $${price.toFixed(2)}.`;
  } else {
    confirm.innerHTML = "No item inputted.";
  }
}
