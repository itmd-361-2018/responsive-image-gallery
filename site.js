document.addEventListener('DOMContentLoaded', function(event) {
  console.log('OMG DOM is loaded!!!1!');
  document.querySelector('html').className = 'js';
  if (CSS.supports('display: flex')) {
    var html = document.querySelector('html');
    var classes = html.className;
    html.className = classes + ' flexbox';
  }

  // Grab the gallery of Hank images
  var gallery = document.querySelector('.images');

  // Listen for clicks on ANY elements in the gallery
  gallery.addEventListener('click', function(event) {
    // If someone clicks on anything other than an image,
    // exit the function right away
    if (event.target.parentNode.tagName !== 'LI') {
      // BYEEEEE...
      return;
    }

    // Grab a collection of all the list items...
    var list_items = document.querySelectorAll('.images li');
    // ...loop through them to remove any existing focus class
    for (var i = 0; i < list_items.length; i++) {
      list_items[i].className = "";
    }
    // Finally, set the focus class on the target image's parent
    // list item:
    event.target.parentNode.className = 'focus';

    // Diagnostic: log the tag name of the parent node that's been clicked
    console.log(event.target.parentNode.tagName);
  });
});
