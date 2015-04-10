# &lt;qr-code&gt;

Web Component for generating QR Codes, using [qr.js](https://github.com/lifthrasiir/qr.js) lib.

> Maintained by [Eduard Castellano](https://github.com/educastellano).

## Demo

> [Check it live](http://educastellano.github.io/qr-code/demo).

## Install
```sh
npm install webcomponent-qr-code
```
or
```sh
bower install webcomponent-qr-code
```

## Usage

1. **Import the** [polyfill](https://github.com/WebComponents/webcomponentsjs):

* With Browserify:

	```js
	require('<path-libs>/webcomponents.js/webcomponents');
	```
* Without it:

	```html
	<script src="<path-libs>/webcomponentsjs/webcomponents.min.js"></script>
	```

2. **Import the component**

* With Browserify:

	```js
	require('<path-libs>/webcomponent-qr-code/src/qr-code');
	```

* Without it ([qr.js](https://github.com/lifthrasiir/qr.js) and the component):

	```html
	<script src="<path-libs>/webcomponent-qr-code/src/qr.js"></script>
	<script src="<path-libs>/webcomponent-qr-code/src/qr-code.js"></script>
	```

* With [HTML Imports](http://w3c.github.io/webcomponents/spec/imports/):

	```html
	<link rel="import" href="bower_components/webcomponent-qr-code/src/qr-code.html">
	```



3. **Start using it!**

	```html
	<qr-code data="hello world!"></qr-code>
	```



## Options

Attribute		| Options                   | Default             | Description
---				| ---                       | ---                 | ---
`data`			| *string*                  | `null`	          | The information encoded by the QR code.
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
	* Framework-agnostic webcomponent (no use of Polymer)
	* Available in Bower
* v0.0.1 September 18, 2013
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)
