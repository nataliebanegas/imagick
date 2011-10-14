steal("funcunit/qunit", "imagick/fixtures", "imagick/models/renderer.js", function(){
	module("Model: Imagick.Models.Renderer")
	
	test("findAll", function(){
		expect(4);
		stop();
		Imagick.Models.Renderer.findAll({}, function(renderers){
			ok(renderers)
	        ok(renderers.length)
	        ok(renderers[0].name)
	        ok(renderers[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Imagick.Models.Renderer({name: "dry cleaning", description: "take to street corner"}).save(function(renderer){
			ok(renderer);
	        ok(renderer.id);
	        equals(renderer.name,"dry cleaning")
	        renderer.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Imagick.Models.Renderer({name: "cook dinner", description: "chicken"}).
	            save(function(renderer){
	            	equals(renderer.description,"chicken");
	        		renderer.update({description: "steak"},function(renderer){
	        			equals(renderer.description,"steak");
	        			renderer.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Imagick.Models.Renderer({name: "mow grass", description: "use riding mower"}).
	            destroy(function(renderer){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})