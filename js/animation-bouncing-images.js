/* global Class */

/* Magic Mirror
 * Module: Celebrate l33t
 *
 * By Prog Party! https://github.com/Prog-Party
 * Jens (Epic) den Braber & Dennis (Awesome) Rosenbaum
 * MIT Licensed.
 * 
 */

class AnimateBouncingImages {
	constructor(master, container, urls) {
		this.container = container;
		this.master = master;
		this.id = "AnimateBouncingImages"; 
		this.bouncingImages = [];
		this.urls = urls;
		
		Log.info("Celebrate with: Animate Bouncing Images");
	}

	animate() {
		
		var width = $("body").outerWidth(true);
		var height = $("body").outerHeight(true);
		$(this.container).html(`<canvas id="${this.id}" width="${width}" height="${height}"></canvas>`);
		
		var self = this;
		this.interval = setInterval(function() { 
		
			var randomImage = self.urls[self.getRandomInt(0,self.urls.length-1)];
		
			var bouncingImage = new SingleBouncingImage($(`#${self.id}`), randomImage);
			bouncingImage.draw();
			self.bouncingImages.push(bouncingImage);
		}, 3000); 
	}
	
	destroy() {
		Log.info("Destroying: Animate Bouncing Images");
		this.bouncingImages.forEach(function(item, index) { item.destroy(); });
		clearInterval(this.interval);
	}
	
	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}