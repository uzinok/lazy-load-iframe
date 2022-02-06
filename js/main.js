const options = {
  rootMargin: '500px'
};

var intersectionObserver = new IntersectionObserver(function (entries) {
  // Если intersectionRatio равен 0, цель вне зоны видимости
  // и нам не нужно ничего делать
  if (entries[0].intersectionRatio <= 0) return;

  console.log(entries);
  entries[0].target.src = entries[0].target.dataset.src;
  this.unobserve(entries[0].target);

  // loadItems(10);
  console.log('Loaded new items');
}, options);
// начать наблюдение
intersectionObserver.observe(document.querySelector('iframe'));
