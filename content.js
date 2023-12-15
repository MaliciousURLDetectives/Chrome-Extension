
// Retrieve the current URL
const currentURL = window.location.href;

// Send a message to the background script with the URL
chrome.runtime.sendMessage({url: currentURL});