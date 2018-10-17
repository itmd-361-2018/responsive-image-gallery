document.addEventListener('DOMContentLoaded', function(event) {
  console.log('OMG DOM is loaded!!!1!');
  document.querySelector('html').className = 'js';
  if (CSS.supports('display: flex')) {
    var html = document.querySelector('html');
    var classes = html.className;
    html.className = classes + ' flexbox';
  }
});