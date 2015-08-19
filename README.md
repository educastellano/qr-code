# &lt;qr-code&gt;

Web Component for generating QR Codes, using (a [fork](https://github.com/educastellano/qr.js) of) [qr.js](https://github.com/lifthrasiir/qr.js) lib.

> Maintained by [Eduard Castellano](https://github.com/educastellano).

## Demo

> [Check it live](http://educastellano.github.io/qr-code/demo).

## Usage

* **NPM and Browserify** ([polyfill](https://github.com/WebComponents/webcomponentsjs) and the component):

	Install:

	```sh
	npm install webcomponents.js
	npm install webcomponent-qr-code
	```

	Import:

	```js
	require('webcomponents.js');
	require('webcomponent-qr-code');
	```

* **Bower** ([polyfill](https://github.com/WebComponents/webcomponentsjs), [qr.js](https://github.com/educastellano/qr.js) and the component):

	Install:

	```sh
	bower install webcomponentsjs
	bower install webcomponent-qr-code
	```

	Import:

	```html
	<script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
	<script src="bower_components/qrjs/qr.js"></script>
	<script src="bower_components/webcomponent-qr-code/src/qr-code.js"></script>
	```

	> You can also import the component with [HTML Imports](http://w3c.github.io/webcomponents/spec/imports/), but you still need to import the polyfill and the qr.js lib separately:
	>
	> ```html
	> <link rel="import" href="bower_components/webcomponent-qr-code/src/qr-code.html">
	> ```

* **Start using it!**

	```html
	<qr-code data="hello world!"></qr-code>
	```



## Options

Attribute		| Options                   | Default             | Description
---				| ---                       | ---                 | ---
`data`			| *string*                  | `null`	          | The information encoded by the QR code.
`format`		| `png`, `html`, `svg`		| `png`               | Format of the QR code rendered inside the component.
`modulesize`	| *int*						| `5`				  | Size of the modules in *pixels*.
`margin`		| *int*						| `4`				  | Margin of the QR code in *modules*.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.1.7 April 11, 2015
	* Support for SVG
* v0.1.6 April 10, 2015
	* Default attributes
	* qr.js removed and used as a dependency
	* Available in NPM
* v0.1.1 March 31, 2015
	* Framework-agnostic webcomponent (no use of Polymer)
	* Available in Bower
* v0.0.1 September 18, 2013
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)
