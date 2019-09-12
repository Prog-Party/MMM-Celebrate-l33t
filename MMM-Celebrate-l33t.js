/* C3l3br473 l33t b3f0r3 17 15 t0 l4t3!!!!! */

/* Magic Mirror
 * Module: Celebrate l33t
 *
 * By Prog Party! https://github.com/Prog-Party
 * Jens (Epic) den Braber & Dennis (Awesome) Rosenbaum
 * MIT Licensed.
 */

Module.register("MMM-Celebrate-l33t" ,{

	// Define module defaults
	defaults: {
		celebrateAlways: false,
		partyOptions: [
			{
				//progparty
				category: "BouncyImages",
				urls: [ 
					"https://avatars0.githubusercontent.com/u/16469304?s=200&v=4",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/progparty/progparty1.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/progparty/progparty2.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/progparty/progparty3.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/progparty/progparty4.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/progparty/progparty5.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/progparty/progparty6.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/progparty/progparty7.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/progparty/progparty8.jpg"
				]
			},
			{
				//cats
				category: "BouncyImages",
				urls: [
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/cats/cat1.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/cats/cat2.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/cats/cat3.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/cats/cat4.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/cats/cat5.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/cats/cat6.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/cats/cat7.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/cats/cat8.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/cats/cat9.jpg",
					"https://raw.githubusercontent.com/Prog-Party/MMM-Celebrate-l33t/master/img/cats/cat10.jpg"
				]
			}
		]
	},

	// Define required scripts.
	getStyles: function() {
		return [ 
			this.file("css/animation-particle-galaxy.css"), 
			this.file("css/animation-bouncing-images.css") 
		];
	},
	getScripts: function() {
		return [ 
			this.file("js/jquery-3.4.1.min.js"), 
			this.file("js/animation-particles-galaxy.js"),
			this.file("js/single-bouncing-image.js"),
			this.file("js/animation-bouncing-images.js")
		];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
		Log.info("Celebrate always: " + this.config.celebrateAlways);
		this.isCelebrating = false;
		
		var height = $("body").outerHeight(true);
		this.wrapper = document.createElement('div');
		this.wrapper.style = `width: 100%; height: ${height}px;`;
			
		var self = this;
		setInterval(function() {
			var today = new Date();
			if(self.isItTimeToCelebrate(today))
			{
				self.isCelebrating = true;
				
				var totalPartyOptions = self.config.partyOptions.length;
				Log.info("Start celebrating!!! L33t L33t L33t L33t!!! Amount Party options: " + totalPartyOptions);
				
				var animationController;
				if(totalPartyOptions == 0)
				{
					self.wrapper.html("<h1>Celebrate LEET By this Awesome text</h1>");					
				} else {
					var partyOptionIndex = self.getRandomInt(0, totalPartyOptions-1);
					var partyOption = self.config.partyOptions[partyOptionIndex];
					if(partyOption.category == "BouncyImages") {
						animationController	= new AnimateBouncingImages(self, self.wrapper, partyOption.urls);
					}
				}
				
				self.startAnimation(animationController);
				self.updateDom();
			} 
			
		}, 1000);
	},

	// Override dom generator.
	getDom: function() {
		
		//var height = $("body").outerHeight(true);
		//$(this.wrapper).height(`${height}px;`);
		return this.wrapper;
	},
	
	startAnimation: function(animationController) {
		if(animationController)
		{
			this.animation = animationController;
			this.animation.animate();
		}
		
		var self = this;
		setTimeout(function() {
			if(animationController)
			{
				self.animation.destroy();
			}
			self.isCelebrating = false;
			self.wrapper.html("");	
		}, 60 * 1000);
	},
	
	isItTimeToCelebrate: function(date) {
		if(this.isCelebrating)
			return false;
			
		if(this.config.celebrateAlways)
			return true;
		if(date.getHours() == 13 && date.getMinutes() == 37)
			return true;
		return false;
	},
	
	getRandomInt: function(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
});