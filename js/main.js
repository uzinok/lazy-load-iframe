// устанавливаем настройки
const options = {
	// родитель целевого элемента - область просмотра
	root: null,
	// отступ
	rootMargin: '900px',
	// процент пересечения
	threshold: 0
}

// создаем наблюдатель
const observer = new IntersectionObserver((entries, observer) => {
	// для каждой записи-целевого элемента
	entries.forEach(entry => {
		// если элемент является наблюдаемым
		if (entry.isIntersecting) {
			const lazyIframe = entry.target;
			// выводим информацию в консоль - проверка работоспособности наблюдателя
			console.log(lazyIframe);
			// меняем значение фтрибута что бы загрузить iframe
			lazyIframe.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A818c095a301146ed081e9cc2e4a2d73cb5123c36ec0258a623082ec152a8697e&amp;source=constructor';
			// прекращаем наблюдение
			observer.unobserve(lazyIframe);
		}
	});
}, options)

// следим за iframe
const iframe = document.querySelector('iframe');
observer.observe(iframe);
