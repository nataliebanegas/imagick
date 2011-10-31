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
	'imagick/image_frame/create',
	'imagick/image_frame/list',
	function(){					// configure your application
		

		/**
		 * @class Imagick.Renderer
		 */
		$.Controller('Imagick.Controller',
		/** @Static */
		{
			conf : {
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
					container: '#container',
					windowHalfX: window.innerWidth / 2,
					windowHalfY: window.innerHeight / 2,
					mouseX: 0,
					mouseY: 0
				},
				image: {
					src: '../resources/assets/72lions_sterik.jpg'
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
				},
				rotation: {
					orbit: true,
					orbitValue: 0,
					orbitSpeed: 0.001
				}
			},
			update: function() {
				//Imagick.Controller.conf.rotation.orbitValue += Imagick.Controller.conf.rotation.orbit ? Imagick.Controller.conf.rotation.orbitSpeed : 0;
				//Imagick.camera.position.x = Math.sin(Imagick.Controller.conf.rotation.orbitValue) * Imagick.Controller.conf.camera.depth;
				//Imagick.camera.position.z = Math.cos(Imagick.Controller.conf.rotation.orbitValue) * Imagick.Controller.conf.camera.depth;
				//Imagick.camera.update();
				
				Imagick.image_frame.materials[1].opacity = 1;
				requestAnimationFrame(Imagick.Controller.render);
			},
			render: function() {
				// only render
				if(Imagick.renderer) {
					Imagick.renderer.render(Imagick.scene, Imagick.camera);
					Imagick.Controller.update();
				}
				
				// set up the next frame
				/*
				if(running) {
					Imagick.Controller.update();
				}
				*/
			}
		},
		/** @Prototype */
		{
			init : function(){
				
				// @TODO: calculate aspect in proportion to the container
				Imagick.Controller.conf.camera.aspect = 16/9;
/*				
				var cam = new Imagick.Models.Camera(Imagick.Controller.conf.camera).save(function(cam_obj){
					console.log(cam_obj);
				});
				
				
				var cam = new Imagick.Models.Camera(Imagick.Controller.conf.camera, function(cam_obj){
					console.log(cam_obj);
				}).save();
*/
				
				new Imagick.Models.Camera(Imagick.Controller.conf.camera).save();
				new Imagick.Models.Scene().save();
				new Imagick.Models.Renderer().save();
				
				new Imagick.Models.ImageFrame(Imagick.Controller.conf.image).save();
				
				Imagick.scene.add(Imagick.image_frame);

				var pointLight = new THREE.PointLight( 0xFFFFFF );
				pointLight.position.x = 10;
				pointLight.position.y = 100;
				pointLight.position.z = 100;
				Imagick.scene.add( pointLight );
				
				Imagick.renderer.render(Imagick.scene, Imagick.camera);
				Imagick.Controller.update();
				
				/*
				this.element.html("//imagick/renderer/views/init.ejs",{
					message: "Hello World 123"
				});
				*/
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
	
	$('#image_frames').imagick_image_frame_list();
		$('#create').imagick_image_frame_create();
		*/
})