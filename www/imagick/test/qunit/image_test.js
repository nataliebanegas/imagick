steal("funcunit/qunit", "imagick/fixtures", "imagick/models/image.js", function(){
	module("Model: Imagick.Models.Image")
	
	test("findAll", function(){
		expect(4);
		stop();
		Imagick.Models.Image.findAll({}, function(images){
			ok(images)
	        ok(images.length)
	        ok(images[0].name)
	        ok(images[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Imagick.Models.Image({name: "dry cleaning", description: "take to street corner"}).save(function(image){
			ok(image);
	        ok(image.id);
	        equals(image.name,"dry cleaning")
	        image.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Imagick.Models.Image({name: "cook dinner", description: "chicken"}).
	            save(function(image){
	            	equals(image.description,"chicken");
	        		image.update({description: "steak"},function(image){
	        			equals(image.description,"steak");
	        			image.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Imagick.Models.Image({name: "mow grass", description: "use riding mower"}).
	            destroy(function(image){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})