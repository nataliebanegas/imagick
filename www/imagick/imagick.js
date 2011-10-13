steal(
	'./imagick.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'imagick/image/create',
	'imagick/image/list',
	function(){					// configure your application
		
		$('#images').imagick_image_list();
		$('#create').imagick_image_create();
})