//steal/js imagick/scripts/compress.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('imagick/scripts/build.html',{to: 'imagick'});
});
