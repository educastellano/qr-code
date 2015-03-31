# &lt;qr-code&gt;

Web Component wrapper for generating QR Codes, using [qr.js](https://github.com/lifthrasiir/qr.js) lib.

> Maintained by [Eduard Castellano](https://github.com/educastellano).

## Demo

> [Check it live](http://educastellano.github.io/qr-code/demo).

## Usage

1. Install it:

	```sh
	bower install webcomponent-qr-code
	```
	
2. Import Web Components' polyfill and [qr.js](https://github.com/lifthrasiir/qr.js) lib:

	```html
	<script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
	
	<script src="bower_components/webcomponent-qr-code/src/qr.js"></script>
	```

2. Import Custom Element:

	```html	
	<script src="bower_components/webcomponent-qr-code/src/qr-code.js"></script>
	```

	or:

	```html
	<link rel="import" href="bower_components/webcomponent-qr-code/src/qr-code.html">
	```


3. Start using it!

	```html
	<qr-code data="hello world!"></qr-code>
	```

## Options

Attribute		| Options                   | Default             | Description
---				| ---                       | ---                 | ---
`data`			| *string*                  | `undefined`         | The information encoded by the QR code.
`format`		| `png`, `html`				| `png`               | Format of the QR code rendered inside the component.
`modulesize`	| *int*						| `5`				  | Size of the modules in *pixels*.
`margin`		| *int*						| `4`				  | Margin of the QR code in *modules*.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.1.1 March 31, 2015
	* Framework-agnostic webcomponent (no use of Polymer), and available in Bower.
* v0.0.1 September 18, 2013
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)
