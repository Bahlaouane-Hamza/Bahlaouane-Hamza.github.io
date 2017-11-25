$(function() {
	var workBtn = $('.work-btn'),
			budget    = $('#budget');

	workBtn.click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.the-form').offset().top
		}, 1000);
	});

	budget.select2({ placeholder: 'Project budget' });

});
