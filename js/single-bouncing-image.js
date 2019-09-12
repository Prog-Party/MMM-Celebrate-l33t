/* global Class */

/* Magic Mirror
 * Module: Celebrate l33t
 *
 * By Prog Party! https://github.com/Prog-Party
 * Jens (Epic) den Braber & Dennis (Awesome) Rosenbaum
 * MIT Licensed.
 * 
 */

class SingleBouncingImage
{
	constructor(canvas, url)
	{
		this.url = url;
		this.canvas = canvas;
		this.ctx = canvas[0].getContext("2d");
		
		//start of as nothingness in the left top corner
		this.size_x = 22; 
		this.size_y = 22;
		this.x_icon = 0;
		this.y_icon = 0;
		
		//speed between 0,5 and 5
		this.stepX = this.getRandomInt(5, 50) / 10; 
		//speed between 0,5 and 5
		this.stepY = this.getRandomInt(5, 50) / 10;
		//resizing speed between 0,5 and 3
		this.stepSize = this.getRandomInt(5, 30) / 10; 
		
		//max width size of 300 
		this.max_size = 300;
		
		var self = this;
		this.anim_img = new Image(this.size_x, this.size_y);
		this.anim_img.setAttribute('crossorigin', 'anonymous');
		this.anim_img.src = this.url;
		this.anim_img.onload = function() { 
			self.draw();
		}
		
		Log.info(`Start bouncing a single image with speeds up to ${this.stepX} horizontal, ${this.stepY} vertical and ${this.stepSize} scaling.`);
	}
	
	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

    draw() {		
		var self = this;
		this.interval = setInterval(function() { self.myAnimation(self); }, 40); 
	}
	
	myAnimation(self) {		
		var canvas_size_x = self.canvas.outerWidth(true);
		var canvas_size_y = self.canvas.outerHeight(true);
				
		//if bouncy image hits the wall on the left or right, move the horizontal direction
		if (self.x_icon < 0 || self.x_icon > canvas_size_x - self.size_x) { self.stepX = -self.stepX; }
		//if bouncy image hits the wall on the top or bottom, move the vertical direction
		if (self.y_icon < 0 || self.y_icon > canvas_size_y - self.size_y) { self.stepY = -self.stepY; }
        
		//move them bouncing beauty
		self.x_icon += self.stepX;
        self.y_icon += self.stepY;
        
		//resize them bouncy beauty
        if(self.size_x < 10 || self.size_x > self.max_size) { self.stepSize = -self.stepSize; }
        self.size_x += self.stepSize;
        self.size_y += self.stepSize;
		        
		self.ctx.drawImage(self.anim_img, self.x_icon, self.y_icon, self.size_x, self.size_y);
    }
	
	destroy() {
		Log.info("Destroying single bouncing image");
		clearInterval(this.interval);
	}
}
