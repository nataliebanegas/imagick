steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'imagick/models' )
.then( './views/init.ejs', 
       './views/camera.ejs', 
       function($){

/**
 * @class Imagick.Camera.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists cameras and lets you destroy them.
 */
$.Controller('Imagick.Camera.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Imagick.Models.Camera.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.camera').model().destroy();
		}
	},
	"{Imagick.Models.Camera} destroyed" : function(Camera, ev, camera) {
		camera.elements(this.element).remove();
	},
	"{Imagick.Models.Camera} created" : function(Camera, ev, camera){
		this.element.append(this.view('init', [camera]))
	},
	"{Imagick.Models.Camera} updated" : function(Camera, ev, camera){
		camera.elements(this.element)
		      .html(this.view('camera', camera) );
	}
});

});