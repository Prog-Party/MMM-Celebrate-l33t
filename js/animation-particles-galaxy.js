/* global Class */

/* Magic Mirror
 * Module: Celebrate l33t
 *
 * By Prog Party! https://github.com/Prog-Party
 * Jens (Epic) den Braber & Dennis (Awesome) Rosenbaum
 * Based on work from  Sebastian Schepis: https://codepen.io/sschepis/pen/ErFen
 * MIT Licensed.
 *
 * 
 */

class AnimateParticlesGalaxy {
	constructor(master, container) {
		this.container = container;
		this.master = master;
		this.id = "AnimateParticlesGalaxy"; 
		
		Log.info("Celebrate with: Animate Particles Galaxy");
	}

	animate() {
		var self = this;
		
		//$(this.container).html(`<div id="${this.id}"><canvas id='scene'></canvas></div>`);
				
		//this.interval = setInterval(function() {
		//	var today = new Date();
		//	TIME (" + self.randomNumber + "): " + today.getSeconds());
		//	self.master.updateDom();			
		//}, 1000);
	}
	
	destroy() {
		//clearInterval(this.interval);
	}
}
