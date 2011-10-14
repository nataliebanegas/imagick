steal("funcunit/qunit", "imagick/fixtures", "imagick/models/camera.js", function(){
	module("Model: Imagick.Models.Camera")
	
	test("findAll", function(){
		expect(4);
		stop();
		Imagick.Models.Camera.findAll({}, function(cameras){
			ok(cameras)
	        ok(cameras.length)
	        ok(cameras[0].name)
	        ok(cameras[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Imagick.Models.Camera({name: "dry cleaning", description: "take to street corner"}).save(function(camera){
			ok(camera);
	        ok(camera.id);
	        equals(camera.name,"dry cleaning")
	        camera.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Imagick.Models.Camera({name: "cook dinner", description: "chicken"}).
	            save(function(camera){
	            	equals(camera.description,"chicken");
	        		camera.update({description: "steak"},function(camera){
	        			equals(camera.description,"steak");
	        			camera.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Imagick.Models.Camera({name: "mow grass", description: "use riding mower"}).
	            destroy(function(camera){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})