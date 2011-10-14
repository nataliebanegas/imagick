steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'imagick/models' )
.then( './views/init.ejs', 
       './views/scene.ejs', 
       function($){

/**
 * @class Imagick.Scene.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists scenes and lets you destroy them.
 */
$.Controller('Imagick.Scene.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Imagick.Models.Scene.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.scene').model().destroy();
		}
	},
	"{Imagick.Models.Scene} destroyed" : function(Scene, ev, scene) {
		scene.elements(this.element).remove();
	},
	"{Imagick.Models.Scene} created" : function(Scene, ev, scene){
		this.element.append(this.view('init', [scene]))
	},
	"{Imagick.Models.Scene} updated" : function(Scene, ev, scene){
		scene.elements(this.element)
		      .html(this.view('scene', scene) );
	}
});

});