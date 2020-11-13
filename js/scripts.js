jQuery(function() {

  let my_switch = false;

	$('#my_button').click(function () {
		if ( my_switch == false ) {
		 my_switch = true;
		 $(this).html('Ice Cream! Or... ');
			$('my_image').attr('src', 'images/boys2.jpg');
		} else {
			my_switch = false;
			$(this).html('..Mmm.. Donuts!');
			$('my_image').attr('src', 'images/boys3.jpg');

		}
	});

});
