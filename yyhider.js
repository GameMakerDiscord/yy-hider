setTimeout(function() {
  var fileBoxes = document.querySelectorAll('.file');

  fileBoxes.forEach(function(fileBox) {
    var fileTitle = fileBox.querySelector('.file-info').querySelector('a');
    
    if (~fileTitle.text.toLowerCase().indexOf('.yy')) {
      fileBox.style.display = 'none';
    }
  });
}, 2000);
