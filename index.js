/**
 * alimask( text, options ) 
 * @param text (String): this text on water mask.
 * @param options (Object): water mask options. 
 * @prop options
	{ 
		width: 250,
		height: 80,
		color: '#ebebeb',
		alpha: 0.8,
		font: '10px Arial'
	}
 * @return (String) return base64 of background water mask image.
**/

!function (root, factory) {
	if (typeof module === 'object' && module.exports) {
		module.exports = factory(root); // nodejs support
		module.exports['default'] = module.exports; // es6 support
	} else {
		root.alimask = factory(root);
	}
}(typeof window !== 'undefined' ? window : this, function () {
	var canvas, ctx;

	// merge the default value
	function mergeOptions(options) {
		return Object.assign({
			width: 300,
			height: 120,
			color: '#ebebeb',
			alpha: 0.8,
			font: '30px Arial'
		}, options);
	}
	return function (text, options) {
		if (!canvas || !ctx) {
			// if not exist, then initial
			if (typeof document !== 'undefined') {
				canvas = document.createElement('canvas');
			} else {
				var Canvas = module.require('canvas');
				canvas = new Canvas();
			}
			ctx = canvas && canvas.getContext && canvas.getContext('2d');
			if (!canvas || !ctx) return ''; // if not exist also, then return blank.
		}
		options = mergeOptions(options);
		var width = options.width,
			height = options.height;

		canvas.width = width;
		canvas.height = height;

		ctx.clearRect(0, 0, width, height); // clear the canvas
		ctx.globalAlpha = 0; // backgroud is alpha

		// ctx.fillStyle = 'white'; // no need because of alipha = 0;
		ctx.fillRect(0, 0, width, height);

		ctx.globalAlpha = options.alpha; // text alpha
		ctx.fillStyle = options.color;
		ctx.font = options.font;

		ctx.textAlign = 'left';
		ctx.textBaseline = 'bottom';

		ctx.translate(width * 0.1, height * 0.9); // margin: 10
		ctx.rotate(-Math.PI / 12); // 15 degree
		ctx.fillText(text, 0, 0);
		ctx.fillText('钉钉', 180, 50);

		return canvas.toDataURL();
	};
});