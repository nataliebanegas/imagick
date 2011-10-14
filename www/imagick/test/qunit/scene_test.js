steal("funcunit/qunit", "imagick/fixtures", "imagick/models/scene.js", function(){
	module("Model: Imagick.Models.Scene")
	
	test("findAll", function(){
		expect(4);
		stop();
		Imagick.Models.Scene.findAll({}, function(scenes){
			ok(scenes)
	        ok(scenes.length)
	        ok(scenes[0].name)
	        ok(scenes[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Imagick.Models.Scene({name: "dry cleaning", description: "take to street corner"}).save(function(scene){
			ok(scene);
	        ok(scene.id);
	        equals(scene.name,"dry cleaning")
	        scene.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Imagick.Models.Scene({name: "cook dinner", description: "chicken"}).
	            save(function(scene){
	            	equals(scene.description,"chicken");
	        		scene.update({description: "steak"},function(scene){
	        			equals(scene.description,"steak");
	        			scene.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Imagick.Models.Scene({name: "mow grass", description: "use riding mower"}).
	            destroy(function(scene){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})