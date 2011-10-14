steal('jquery/model', function(){

/**
 * @class Imagick.Models.Scene
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend scene services.  
 */
$.Model('Imagick.Models.Scene',
/* @Static */
{
	/**
	 * @param {Object} attrs : {}
	 * @param {Function} success : callback function for success
	 * @param {Function} error : callback function for error
	 */
	create: function(attrs, success, error) {
		var scene = new THREE.Scene();
		//success(scene);
		Imagick.scene = scene;
	}
/*	
	findAll: "/scenes.json",
  	findOne : "/scenes/{id}.json", 
  	create : "/scenes.json",
 	update : "/scenes/{id}.json",
  	destroy : "/scenes/{id}.json"
  */		
  		
},
/* @Prototype */
{});

})