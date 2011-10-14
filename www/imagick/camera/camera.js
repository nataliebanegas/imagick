steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Imagick.Camera
 */
$.Controller('Imagick.Camera',
/** @Static */
{
	defaults : {
		d2: 'test'
	}
},
/** @Prototype */
{
	init : function(){
		this.element.html("//imagick/camera/views/init.ejs",{
			message: "Hello World"
		});
	}
})

});