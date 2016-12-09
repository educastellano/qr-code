# &lt;qr-code&gt;

Web Component for generating QR Codes, using (a [fork](https://github.com/educastellano/qr.js) of) [qr.js](https://github.com/lifthrasiir/qr.js) lib.

## Demo

> [Check it live](http://educastellano.github.io/qr-code/demo).

## Prerequisites

* [webcomponents](https://www.npmjs.com/package/webcomponents.js) polyfill for fully browser support:

## Install

```sh
npm install webcomponent-qr-code
```

## Usage

```js
import 'webcomponent-qr-code'
```

```html
<qr-code data="hello world!"></qr-code>
```

## Options

Attribute       | Options                   | Default             | Description
---             | ---                       | ---                 | ---
`data`          | *string*                  | `null`              | The information encoded by the QR code.
`format`        | `png`, `html`, `svg`      | `png`               | Format of the QR code rendered inside the component.
`modulesize`    | *int*                     | `5`                 | Size of the modules in *pixels*.
`margin`        | *int*                     | `4`                 | Margin of the QR code in *modules*.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.1.9 December 9, 2016
    * Just updated docs
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
