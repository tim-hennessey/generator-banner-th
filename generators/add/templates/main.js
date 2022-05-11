var app = app || {};

(function () {

	this.addEventListener('READY', handleReady, false);
	app.Animation.initialize();
	app.Tracking.initialize();

	function handleReady(e) {
		console.log("READY: " + e);
	}

	document.addEventListener("DOMContentLoaded", function(event) {
	  
	    window.onload = function() {
	      
	       window.requestAnimationFrame(function() {
	      
	          app.Animation.start();  
	         
	       });
	      
	    };
	  
	});

})();
