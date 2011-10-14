steal('jquery/model', function(){

/**
 * @class Imagick.Models.Renderer
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend renderer services.  
 */
$.Model('Imagick.Models.Renderer',
/* @Static */
{
	/**
	 * @param {Object} attrs : {}
	 * @param {Function} success : callback function for success
	 * @param {Function} error : callback function for error
	 */
	create: function(attrs, success, error) {
		var renderer = new THREE.WebGLRenderer({antialias: true, clearAlpha: 1, sortObjects: false, sortElements: false});
		//success(renderer);
		Imagick.renderer = renderer;
	}
	
/*	
	findAll: "/renderers.json",
  	findOne : "/renderers/{id}.json", 
  	create : "/renderers.json",
 	update : "/renderers/{id}.json",
  	destroy : "/renderers/{id}.json"
 */
  		
  		
},
/* @Prototype */
{});

})