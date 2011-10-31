steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'imagick/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Imagick.ImageFrame.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates image_frames
 */
$.Controller('Imagick.ImageFrame.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Imagick.Models.ImageFrame(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});