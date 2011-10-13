steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'imagick/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Imagick.Image.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates images
 */
$.Controller('Imagick.Image.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Imagick.Models.Image(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});