steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'imagick/models' )
.then( './views/init.ejs', 
       './views/renderer.ejs', 
       function($){

/**
 * @class Imagick.Renderer.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists renderers and lets you destroy them.
 */
$.Controller('Imagick.Renderer.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Imagick.Models.Renderer.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.renderer').model().destroy();
		}
	},
	"{Imagick.Models.Renderer} destroyed" : function(Renderer, ev, renderer) {
		renderer.elements(this.element).remove();
	},
	"{Imagick.Models.Renderer} created" : function(Renderer, ev, renderer){
		this.element.append(this.view('init', [renderer]))
	},
	"{Imagick.Models.Renderer} updated" : function(Renderer, ev, renderer){
		renderer.elements(this.element)
		      .html(this.view('renderer', renderer) );
	}
});

});