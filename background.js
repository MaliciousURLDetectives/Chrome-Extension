// background.js

let currentURL = ''; // Variable to store the URL

// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.url) {
    currentURL = message.url; // Update currentURL with the received URL
  }
});

// Function to retrieve the URL
function getCurrentURL() {
  const currentURL = window.location.href;
  return currentURL;
}
