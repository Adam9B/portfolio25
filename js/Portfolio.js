document.addEventListener('DOMContentLoaded', function() {
	const observer = new IntersectionObserver((entries) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('animated');
		  observer.unobserve(entry.target); // Stop observing after animation starts
		}
	  });
	});
  
	const bars = document.querySelectorAll('.html, .css, .js, .SQL, .PHP, .symfo');
	bars.forEach(bar => {
	  observer.observe(bar);
	});
  });