// Find the toggle button
const toggleBtn = document.getElementById("theme-toggle");

// Add a click event to the button
toggleBtn.addEventListener("click", () => {
  const html = document.documentElement; // <html> element

  // Check if dark mode is active
  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme"); // back to light mode
  } else {
    html.setAttribute("data-theme", "dark"); // switch to dark mode
  }
});
