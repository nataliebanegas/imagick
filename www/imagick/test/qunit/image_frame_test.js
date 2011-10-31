steal("funcunit/qunit", "imagick/fixtures", "imagick/models/image_frame.js", function(){
	module("Model: Imagick.Models.ImageFrame")
	
	test("findAll", function(){
		expect(4);
		stop();
		Imagick.Models.ImageFrame.findAll({}, function(image_frames){
			ok(image_frames)
	        ok(image_frames.length)
	        ok(image_frames[0].name)
	        ok(image_frames[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Imagick.Models.ImageFrame({name: "dry cleaning", description: "take to street corner"}).save(function(image_frame){
			ok(image_frame);
	        ok(image_frame.id);
	        equals(image_frame.name,"dry cleaning")
	        image_frame.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Imagick.Models.ImageFrame({name: "cook dinner", description: "chicken"}).
	            save(function(image_frame){
	            	equals(image_frame.description,"chicken");
	        		image_frame.update({description: "steak"},function(image_frame){
	        			equals(image_frame.description,"steak");
	        			image_frame.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Imagick.Models.ImageFrame({name: "mow grass", description: "use riding mower"}).
	            destroy(function(image_frame){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})