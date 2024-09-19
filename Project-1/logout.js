document.addEventListener("DOMContentLoaded", () => {
  const confirmLogoutBtn = document.getElementById("confirm-logout");
  const cancelLogoutBtn = document.getElementById("cancel-logout");

  if (confirmLogoutBtn) {
    // Logout confirmation
    confirmLogoutBtn.addEventListener("click", () => {
      // Perform the logout operation
      // Clear session, cookies, or local storage here
      alert("You have successfully logged out.");

      // Redirect to login or home page after logouts
      window.location.href = "login.html"; // Assuming you have a login page
    });
  }

  if (cancelLogoutBtn) {
    // Cancel logout
    cancelLogoutBtn.addEventListener("click", () => {
      // Redirect back to home or settings page
      window.location.href = "index1.html"; // Assuming this is your home page
    });
  }
});
