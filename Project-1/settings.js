document.addEventListener("DOMContentLoaded", () => {
  const profileForm = document.getElementById("profile-form");
  const notificationForm = document.getElementById("notification-form");
  const preferencesForm = document.getElementById("preferences-form");

  const profileMessage = document.getElementById("profile-message");
  const notificationMessage = document.getElementById("notification-message");
  const preferencesMessage = document.getElementById("preferences-message");

  // Handle Profile Settings form submission
  profileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Here you would normally save the profile data to a server
    profileMessage.innerText = "Profile updated successfully!";
    profileMessage.style.color = "green";
  });

  // Handle Notification Settings form submission
  notificationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailNotifications = document.getElementById(
      "email-notifications"
    ).checked;
    const smsNotifications =
      document.getElementById("sms-notifications").checked;

    // Here you would normally save the notification preferences to a server
    notificationMessage.innerText =
      "Notification preferences saved successfully!";
    notificationMessage.style.color = "green";
  });

  // Handle Other Preferences form submission
  preferencesForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const theme = document.getElementById("theme").value;

    // Here you would normally save the theme preference
    preferencesMessage.innerText = `Theme set to ${theme} successfully!`;
    preferencesMessage.style.color = "green";
  });
});
