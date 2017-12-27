// Init delay
var delay = 1000;

// Load saved delay value
chrome.storage.sync.get({
  noYYdelay: 1000
}, function(items) {
  delay = parseInt(items.noYYdelay);
});

// Sweep on interval
setInterval(function() {

  // Query on file boxes
  var fileBoxes = document.querySelectorAll('.file');

  // Iterate boxes
  fileBoxes.forEach(function(fileBox) {

    // Search for info links (file title)
    var fileTitle = fileBox.querySelector('.file-info').querySelector('a');
    
    // Search for presence of .yy extension
    if (~fileTitle.text.toLowerCase().indexOf('.yy')) {
      
      // DELETE
      fileBox.style.display = 'none';
    }
  });

// Use loaded delay
}, delay);
