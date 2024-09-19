document.addEventListener("DOMContentLoaded", () => {
  const walletBalanceElement = document.getElementById("wallet-balance");
  const transactionsList = document.querySelector(".transactions-list");

  // Sample data for wallet
  let walletBalance = 500.0;
  const transactions = [
    {
      id: 1,
      date: "2024-06-25",
      amount: -200.0,
      description: "Purchase at FoodZoo",
    },
    { id: 2, date: "2024-06-24", amount: 150.0, description: "Funds Added" },
    {
      id: 3,
      date: "2024-06-23",
      amount: -50.0,
      description: "Purchase at FoodZoo",
    },
  ];

  // Function to render wallet balance
  function renderWalletBalance() {
    walletBalanceElement.innerText = walletBalance.toFixed(2);
  }

  // Function to render transactions
  function renderTransactions() {
    transactionsList.innerHTML = "";
    transactions.forEach((transaction) => {
      const transactionItem = document.createElement("div");
      transactionItem.classList.add("transaction-item");
      transactionItem.innerHTML = `
                <p><strong>Date:</strong> ${transaction.date}</p>
                <p><strong>Description:</strong> ${transaction.description}</p>
                <p><strong>Amount:</strong> ₹${transaction.amount.toFixed(
                  2
                )}</p>
            `;
      transactionsList.appendChild(transactionItem);
    });
  }

  // Function to add funds
  window.addFunds = function () {
    const amount = prompt("Enter amount to add:");
    if (amount) {
      const parsedAmount = parseFloat(amount);
      if (!isNaN(parsedAmount) && parsedAmount > 0) {
        walletBalance += parsedAmount;
        transactions.push({
          id: transactions.length + 1,
          date: new Date().toISOString().split("T")[0],
          amount: parsedAmount,
          description: "Funds Added",
        });
        renderWalletBalance();
        renderTransactions();
      } else {
        alert("Invalid amount.");
      }
    }
  };

  renderWalletBalance();
  renderTransactions();
});
