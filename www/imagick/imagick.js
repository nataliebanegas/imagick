steal(
	'./imagick.css', 			// application CSS file
	'resources/libs/Modernizr.js',
	'resources/libs/RequestAnimationFrame.js',
	'resources/libs/Three.js',
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'imagick/image/create',
	'imagick/image/list',
	'imagick/scene',
	'imagick/scene/create',
	'imagick/scene/list',
	'imagick/camera',
	'imagick/camera/create',
	'imagick/camera/list',
	'imagick/renderer',
	'imagick/renderer/create',
	'imagick/renderer/list',
	function(){					// configure your application
		

		/**
		 * @class Imagick.Renderer
		 */
		$.Controller('Imagick.Controller',
		/** @Static */
		{
			defaults : {
				scene: {
					width: window.innerWidth,
					height: window.innerHeight
				},
				camera: {
					viewAngle: 45,
					aspect: 16/9,
					near: 0.1,
					far: 100000,
					depth: 500
				},
				window: {
					windowHalfX: window.innerWidth / 2,
					windowHalfY: window.innerHeight / 2,
					mouseX: 0,
					mouseY: 0
				},
				image: {
					src: 'img/72lions_sterik.jpg'
				},
				surface: {
					width: 400,
					height: 400,
					xResolution: 20,
					yResolution: 20
				},
				lights: {
					pointLight1: {
						x: 10,
						y: 50,
						z: 130
					}
				}				
			}
		},
		/** @Prototype */
		{
			init : function(){
				
				// @TODO: calculate aspect in proportion to the container
				Imagick.Controller.defaults.camera.aspect = 16/9;
/*				
				var cam = new Imagick.Models.Camera(Imagick.Controller.defaults.camera).save(function(cam_obj){
					console.log(cam_obj);
				});
				
				
				var cam = new Imagick.Models.Camera(Imagick.Controller.defaults.camera, function(cam_obj){
					console.log(cam_obj);
				}).save();
*/
				
				new Imagick.Models.Camera(Imagick.Controller.defaults.camera).save();
				new Imagick.Models.Scene().save();
				new Imagick.Models.Renderer().save();

				
				this.element.html("//imagick/renderer/views/init.ejs",{
					message: "Hello World 123"
				});
				
			}
		});
		
		$('#container').imagick();
		
		
	/*	
	$('#images').imagick_image_list();
		$('#create').imagick_image_create();
	$('#scenes').imagick_scene_list();
		$('#create').imagick_scene_create();
	$('#cameras').imagick_camera_list();
		$('#create').imagick_camera_create();
	$('#renderers').imagick_renderer_list();
		$('#create').imagick_renderer_create();
	*/
})