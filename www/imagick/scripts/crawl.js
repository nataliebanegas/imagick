// load('imagick/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("imagick/imagick.html","imagick/out")
});
