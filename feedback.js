// Handle feedback form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const successMsg = document.getElementById("successMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Collect data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Show animation effect
    form.querySelector("button").disabled = true;
    form.querySelector("button").textContent = "Sending...";

    try {
      // You can connect this to Google Sheets or a backend endpoint:
      // Example: await fetch("https://your-server.com/feedback", { method: "POST", body: JSON.stringify(data), headers: {"Content-Type": "application/json"} });

      await new Promise(resolve => setTimeout(resolve, 1200)); // Fake delay for animation

      form.reset();
      successMsg.style.display = "block";

      // Hide success message after 4 seconds
      setTimeout(() => {
        successMsg.style.display = "none";
      }, 4000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    form.querySelector("button").disabled = false;
    form.querySelector("button").textContent = "Send Feedback";
  });
});
