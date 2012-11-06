// Adding the element to the body.
var e = document.createElement('div');
e.style.cssText = 'position: absolute; top: 2px; right: 2px; width: 50px; height: 20px; line-height: 20px; z-index: 1000000;';
e.className = 'refreshButton';
e.innerHTML = 'Reload';

e.addEventListener('click', function(event) {
  window.location.reload();
});

document.body.appendChild(e);

