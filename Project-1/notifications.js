document.addEventListener("DOMContentLoaded", () => {
  const notificationsList = document.querySelector(".notifications-list");

  // Sample data for notifications
  const notifications = [
    { id: 1, date: "2024-06-25", message: "Your order has been shipped!" },
    {
      id: 2,
      date: "2024-06-24",
      message: "New discount on your favorite meals!",
    },
    { id: 3, date: "2024-06-23", message: "Your payment was successful!" },
  ];

  // Function to render notifications
  function renderNotifications() {
    notificationsList.innerHTML = "";
    notifications.forEach((notification) => {
      const notificationItem = document.createElement("div");
      notificationItem.classList.add("notification-item");
      notificationItem.innerHTML = `
                <h4>${notification.date}</h4>
                <p>${notification.message}</p>
            `;
      notificationsList.appendChild(notificationItem);
    });
  }

  renderNotifications();
});
