var delay = 2000;

chrome.storage.sync.get({
  noYYdelay: 2000
}, function(items) {
  delay = parseInt(items.noYYdelay);
});

setInterval(function() {
  console.log('test')
  var fileBoxes = document.querySelectorAll('.file');

  fileBoxes.forEach(function(fileBox) {
    var fileTitle = fileBox.querySelector('.file-info').querySelector('a');
    
    if (~fileTitle.text.toLowerCase().indexOf('.yy')) {
      fileBox.style.display = 'none';
    }
  });
}, delay);
