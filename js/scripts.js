jQuery(function() {

  let my_switch = false;

	$('#my_button').click(function () {
		if ( my_switch == false ) {
		 my_switch = true;
		 $(this).html('Donuts! Or... !');
			$('my_image').attr('src', 'images/boys2.jpg');
		} else {
			my_switch = false;
			$(this).html('Ice Cream!');
			$('my_image').attr('src', 'images/boys3.jpg');

		}
	});

});
