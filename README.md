# &lt;qr-code&gt;

Web Component wrapper for generating QR Codes, using [qrjs](http://hg.mearie.org/qrjs/) lib.

> Maintained by [Eduard C.](https://github.com/educastellano).

## Demo

> [Check it live](http://educastellano.github.io/qr-code).

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.0.20130905/polymer.min.js"></script>
	```

2. Import Custom Element:

	```html
	<link rel="import" href="src/qr-code.html">
	```

3. Import [qrjs](http://hg.mearie.org/qrjs/) lib:

	```html
	<script src="src/qr.js"></script>
	```

4. Start using it!

	```html
	<qr-code data="hello world!"></qr-code>
	```

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`data`     | *string*                  | `undefined`         | The information encoded by the QR code
`format`   | `png`, `html`      	   | `png`               | Format of the QR code rendered inside the component.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.0.1 September 18, 2013
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)
