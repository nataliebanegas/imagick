//js imagick/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('imagick/imagick.html', {
		markdown : ['imagick']
	});
});