steal('jquery/model', function(){

/**
 * @class Imagick.Models.Image
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend image services.  
 */
$.Model('Imagick.Models.Image',
/* @Static */
{
	findAll: "/images.json",
  	findOne : "/images/{id}.json", 
  	create : "/images.json",
 	update : "/images/{id}.json",
  	destroy : "/images/{id}.json"
},
/* @Prototype */
{});

})