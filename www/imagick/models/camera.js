steal('jquery/model', function(){

/**
 * @class Imagick.Models.Camera
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend camera services.  
 */
$.Model('Imagick.Models.Camera',
/* @Static */
{
	/**
	 * @param {Object} attrs : {viewAngle, aspect, near, far, posZ}
	 * @param {Function} success : callback function for success
	 * @param {Function} error : callback function for error
	 */
	create: function(attrs, success, error) {
		var camera = new THREE.PerspectiveCamera(attrs.viewAngle, attrs.aspect, attrs.near, attrs.far);
		camera.position.z = -attrs.posZ;
		//success(camera);
		Imagick.camera = camera;
	}
	
/*	
	findAll: "/cameras.json",
  	findOne : "/cameras/{id}.json", 
  	create : "/cameras.json",
 	update : "/cameras/{id}.json",
  	destroy : "/cameras/{id}.json"
*/
},
/* @Prototype */
{});

})