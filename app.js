const inputPrice = document.querySelector(".input-price");
const inputQuantity = document.querySelector(".input-quantity");
const inputCurrentPrice = document.querySelector(".input-current-price");
const btnCheck = document.querySelector(".btn-check");
const outputDiv = document.querySelector(".output-div");
const mainContainer = document.querySelector(".container");

const clickHandler = () => {
  const stockPrice = inputPrice.value;
  const stockQuantity = inputQuantity.value;
  const stockCurrentPrice = inputCurrentPrice.value;
  if (stockPrice && stockQuantity && stockCurrentPrice) {
    calculateProfitLoss(stockPrice, stockQuantity, stockCurrentPrice);
  } else {
    showMsg("Please fill all the fields!");
  }
};

const calculateProfitLoss = (price, quantity, currentPrice) => {
  const totalBoughtStockPrice = price * quantity;
  const totalCurrentStockPrice = currentPrice * quantity;

  if (totalCurrentStockPrice > totalBoughtStockPrice) {
    const diffInPrice = totalCurrentStockPrice - totalBoughtStockPrice;
    const profitPercentage = checkPercent(diffInPrice, totalBoughtStockPrice);
    showMsg(
      `Your stock went up ${profitPercentage}%. And your total profit is ₹${diffInPrice}.`
    );
    mainContainer.style.backgroundColor = "#064E3B";
  } else {
    const diffInPrice = totalBoughtStockPrice - totalCurrentStockPrice;
    const profitPercentage = checkPercent(diffInPrice, totalBoughtStockPrice);
    showMsg(
      `You stock went down ${profitPercentage}%. Your total loss is ₹${diffInPrice}.`
    );
    mainContainer.style.backgroundColor = "#92400E";
  }
};

const checkPercent = (diff, price) => {
  const per = (diff * 100) / price;
  return Math.floor(per);
};

const showMsg = (msg) => {
  outputDiv.innerHTML = "";
  const para = document.createElement("p");
  const nodeText = document.createTextNode(msg);
  para.append(nodeText);
  outputDiv.appendChild(para);
};

btnCheck.addEventListener("click", clickHandler);