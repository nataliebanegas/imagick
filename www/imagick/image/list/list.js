steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'imagick/models' )
.then( './views/init.ejs', 
       './views/image.ejs', 
       function($){

/**
 * @class Imagick.Image.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists images and lets you destroy them.
 */
$.Controller('Imagick.Image.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Imagick.Models.Image.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.image').model().destroy();
		}
	},
	"{Imagick.Models.Image} destroyed" : function(Image, ev, image) {
		image.elements(this.element).remove();
	},
	"{Imagick.Models.Image} created" : function(Image, ev, image){
		this.element.append(this.view('init', [image]))
	},
	"{Imagick.Models.Image} updated" : function(Image, ev, image){
		image.elements(this.element)
		      .html(this.view('image', image) );
	}
});

});