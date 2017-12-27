var settingBox = document.getElementById('setting');

chrome.storage.sync.get({
  noYYdelay: 2000
}, function(items) {
  settingBox.value = items.noYYdelay;
});

settingBox.addEventListener('input', function(e) {
  settingBox.value = Math.round(settingBox.value);

  if (settingBox.value < 0) {
    settingBox.value = 0;
  } else if (settingBox.value > 10000) {
    settingBox.value = 10000;
  }

  chrome.storage.sync.set({
    noYYdelay: settingBox.value
  });
});
