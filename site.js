document.addEventListener('DOMContentLoaded', function(event) {
  console.log('OMG DOM is loaded!!!1!');
  document.querySelector('html').className = 'js';
  if (CSS.supports('display: flex')) {
    var html = document.querySelector('html');
    var classes = html.className;
    html.className = classes + ' flexbox';
  }
  var gallery = document.querySelector('.images');
  gallery.addEventListener('click',function(e) {
    if (e.target.tagName !== 'IMG') {
      return;
    }
    var images = document.querySelectorAll('.images li');
    for (var i=0; i < images.length; i++) {
      images[i].className = "";
    }
    e.target.parentNode.className = "focused";
  });
});
