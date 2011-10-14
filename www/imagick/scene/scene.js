steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Imagick.Scene
 */
$.Controller('Imagick.Scene',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html("//imagick/scene/views/init.ejs",{
			message: "Hello World"
		});
	}
})

});