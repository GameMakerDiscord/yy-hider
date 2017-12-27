// Grab the setting box element
var settingBox = document.getElementById('setting');

// Load previous setting
chrome.storage.sync.get({
  noYYdelay: 1000
}, function(items) {
  settingBox.value = items.noYYdelay;

  // Re-set the value, in case it hasn't been set before
  chrome.storage.sync.set({
    noYYdelay: settingBox.value
  });
});

// Listen for inputs
settingBox.addEventListener('input', function(e) {

  // No decimals!
  settingBox.value = Math.round(settingBox.value);

  // Keep in bounds
  if (settingBox.value < 0) {
    settingBox.value = 0;
  } else if (settingBox.value > 10000) {
    settingBox.value = 10000;
  }

  // Save settings
  chrome.storage.sync.set({
    noYYdelay: settingBox.value
  });
});
