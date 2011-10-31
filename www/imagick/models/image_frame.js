steal('jquery/model', function(){

/**
 * @class Imagick.Models.ImageFrame
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend image_frame services.  
 */
$.Model('Imagick.Models.ImageFrame',
/* @Static */
{
	
	/**
	 * @param {Object} props : {src} path to the image file
	 */
	create: function(props) {

		//var texturePainting = THREE.ImageUtils.loadTexture( "textures/758px-Canestra_di_frutta_(Caravaggio).jpg", THREE.UVMapping, callbackPainting )
		//materialPainting = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texturePainting } )
		//texturePainting.minFilter = texturePainting.magFilter = THREE.LinearFilter;
	
	
	
		var planeMaterial = new THREE.MeshLambertMaterial(
				{
					color: 0xFFFFFF, 
					map: THREE.ImageUtils.loadTexture(props.src), 
					shading: THREE.SmoothShading
				});
		
		var planeMaterialWire = new THREE.MeshLambertMaterial(
				{
					color: 0xFFFFFF,
					wireframe:true
				});
		
		var surface = new THREE.Mesh(new THREE.PlaneGeometry(400, 400, 20, 20), [planeMaterial, planeMaterialWire]);
		//surface.rotation.x = -Math.PI * .5;
		//surface.overdraw = true;
		
		Imagick.image_frame = surface;
	
	}


	/*
	findAll: "/image_frames.json",
  	findOne : "/image_frames/{id}.json", 
  	create : "/image_frames.json",
 	update : "/image_frames/{id}.json",
  	destroy : "/image_frames/{id}.json"
  	*/
},
/* @Prototype */
{});

})