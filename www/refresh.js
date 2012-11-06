// Adding the element to the body.
var e = document.createElement('div');
var style = new CSSStyleDeclaration();
style.cssText = 'position: absolute; top: 2px; right: 2px; width: 50px; height: 20px; line-height: 20px; z-index: 1000000;';
e.style = style;

e.className = 'refreshButton';

e.addEventListener('click', function(event) {
  window.location.reload();
});

document.body.appendChild(e);

