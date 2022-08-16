// step-1: add event listener to the deposite button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get the deposite amount from the deposit input field
  // for input field use .value to the inside the input field
  const depositField = document.getElementById("deposite-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-7: clear deposit
  depositField.value = "";

  if (isNaN(newDepositAmount)) {
    alert("Please provide a valid number");
    return;
  }

  // step-3: get the current deposit total
  // for non-input(element other than input, textare) use innerText to get text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalStirng = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalStirng);

  //step-4: deposit amount add total
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  //step-5: get all balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6:calculate total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
});
