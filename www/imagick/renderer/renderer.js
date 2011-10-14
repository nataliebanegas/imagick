steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Imagick.Renderer
 */
$.Controller('Imagick.Renderer',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html("//imagick/renderer/views/init.ejs",{
			message: "Hello World"
		});
	}
})

});