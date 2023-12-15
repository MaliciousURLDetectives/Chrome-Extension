function ypoly(x1, x2) {
  return (1 / (1 + 2.7182818284590452353602874713527**(-(0.13356702273158616 - 0.010906037857883811 * x1 + 0.08263015546712012 * x2))));
}
function countSpecialCharacters(inputString) {
  let specialCharacters = 0;
  for (let char of inputString) {
      if (!char.match(/^[0-9a-zA-Z]+$/i) && !char.match(/\s/)) {
          specialCharacters++;
      }
  }
  return specialCharacters;
}
// popup.js
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  document.getElementById('currentURL').textContent = tabs[0].url;
});

// popup.js
document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentURL = tabs[0].url;

    x1=currentURL.length

    x2=countSpecialCharacters(currentURL)

    Pred=ypoly(x1,x2)

    if (Pred<.6) {
      document.getElementById('result').textContent = 'This URL looks Safe';
      document.getElementById('status_good').style.display = "block";
      document.getElementById('status_bad').style.display = "none";
    } else {
      document.getElementById('result').textContent = 'We think this site is Malicious';
      document.getElementById('status_good').style.display = "none";
      document.getElementById('status_bad').style.display = "block";

    }
  });
});