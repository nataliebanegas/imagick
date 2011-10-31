steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'imagick/models' )
.then( './views/init.ejs', 
       './views/image_frame.ejs', 
       function($){

/**
 * @class Imagick.ImageFrame.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists image_frames and lets you destroy them.
 */
$.Controller('Imagick.ImageFrame.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Imagick.Models.ImageFrame.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.image_frame').model().destroy();
		}
	},
	"{Imagick.Models.ImageFrame} destroyed" : function(ImageFrame, ev, image_frame) {
		image_frame.elements(this.element).remove();
	},
	"{Imagick.Models.ImageFrame} created" : function(ImageFrame, ev, image_frame){
		this.element.append(this.view('init', [image_frame]))
	},
	"{Imagick.Models.ImageFrame} updated" : function(ImageFrame, ev, image_frame){
		image_frame.elements(this.element)
		      .html(this.view('image_frame', image_frame) );
	}
});

});