const options = {
  rootMargin: '500px'
}

var intersectionObserver = new IntersectionObserver(function (entries) {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.
  if (entries[0].intersectionRatio <= 0) return;

  // loadItems(10);
  console.dir(entries[0].target);
  entries[0].target.src = entries[0].target.dataset.src;
  this.unobserve(entries[0].target);
}, options);
// start observing
intersectionObserver.observe(document.querySelector('iframe'));
