Reveal.getSlides().forEach(function(s){
  s.querySelectorAll("object").forEach(function(e) {
		// load like; <object type="image/svg+xml" data="./img/bookproduction_log.svg"> </object> when content ready
		// console.log("obj replace", e)
		//
		// e.onload = function () {
    //     console.log ("The image has loaded!");
    // };
    if (e.contentDocument)
			// console.log("content")
      e.parentElement.replaceChild(e.contentDocument.documentElement.cloneNode(true), e);
    });
  });
