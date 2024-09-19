document.addEventListener("DOMContentLoaded", () => {
  const billsList = document.querySelector(".bills-list");

  // Sample data for bills
  const bills = [
    { id: 1, date: "2024-06-25", amount: 200 },
    { id: 2, date: "2024-06-24", amount: 150 },
    { id: 3, date: "2024-06-23", amount: 300 },
  ];

  // Function to render bills
  function renderBills() {
    billsList.innerHTML = "";
    bills.forEach((bill) => {
      const billItem = document.createElement("div");
      billItem.classList.add("bill-item");
      billItem.innerHTML = `
                <div>
                    <h4>Bill #${bill.id}</h4>
                    <p>Date: ${bill.date}</p>
                    <p>Amount: ₹${bill.amount}</p>
                </div>
                <button onclick="viewBill(${bill.id})">View</button>
            `;
      billsList.appendChild(billItem);
    });
  }

  // Function to view a bill (You can add more detailed functionality here)
  window.viewBill = function (id) {
    alert(`Viewing details for Bill #${id}`);
  };

  renderBills();
});
