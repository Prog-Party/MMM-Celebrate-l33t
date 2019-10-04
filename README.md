# MMM-Celebrate-l33t
A MagicMirror² (https://magicmirror.builders) module to celebrate l33t. 

Wh@ 15 l33T j00 M4Y 45k.... W3Ll, 1F J00 n33D T0 45K tH@, th4n y0u 4r3 N0t w0RtHY 0F T3H c3l38R4T10n 0f l33t!

## Screenshots
![Screenshot](img/readme/celebrate-with-cats.gif)

## Installation
1. Navigate into your MagicMirror's `~MagicMirror/modules` folder
1. Execute `git clone https://github.com/Prog-Party/MMM-Celebrate-l33t.git`
1. A new folder `MMM-Celebrate-l33t` will appear, navigate into it by `cd MMM-Celebrate-l33t`
1. Install with `npm install`

## Configuration
Add this to your modules array in the configuration file `config/config.js`
Position 'fullscreen' is very important for this module to work purrrfectly.

```
{
	module: "MMM-Celebrate-l33t",
	position: "fullscreen",
	config: {
		celebrateAlways: true,
	}
},
```

### Simple Version
```javascript
{
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
}
```
### Configuration options

| Option               | Description
|--------------------- |-----------
| `celebrateAlways`    | Do you want to celebrate every minute? <br />`true` if that's what you like, <br />`false` if you want to celebrate l33t only. <br>**Type:** `boolean`
| `partyOptions`  	   | There are multiple ways to celebrate, currently there is only one option available, which is the `BouncyImages`. More to come. <br>**Type:** [progparty.partyoption]
