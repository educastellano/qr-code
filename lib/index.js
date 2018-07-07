(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QRCode = function (_HTMLElement) {
    _inherits(QRCode, _HTMLElement);

    function QRCode() {
        _classCallCheck(this, QRCode);

        var _this = _possibleConstructorReturn(this, (QRCode.__proto__ || Object.getPrototypeOf(QRCode)).call(this));

        _this.attachShadow({ mode: 'open' });
        _this.defineAttributes();
        return _this;
    }
    //
    // LifeCycle Callbacks
    //


    _createClass(QRCode, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.generate();
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attrName, oldVal, newVal) {
            var fn = this[attrName + 'Changed'];
            if (fn && typeof fn === 'function') {
                fn.call(this, oldVal, newVal);
            }
            this.generate();
        }
        //
        // Methods
        //

    }, {
        key: 'defineAttributes',
        value: function defineAttributes() {
            var attributes = {
                data: null,
                format: 'png',
                modulesize: 5,
                margin: 4
            };
            var attrs = Object.keys(attributes),
                attr;
            for (var i = 0; i < attrs.length; i++) {
                attr = attrs[i];
                (function (attr) {
                    Object.defineProperty(this, attr, {
                        get: function get() {
                            var value = this.getAttribute(attr);
                            return value === null ? this.attrs[attr] : value;
                        },
                        set: function set(value) {
                            this.setAttribute(attr, value);
                        }
                    });
                }).bind(this)(attr);
            }
        }
    }, {
        key: 'getOptions',
        value: function getOptions() {
            var modulesize = this.modulesize,
                margin = this.margin;
            return {
                modulesize: modulesize !== null ? parseInt(modulesize) : modulesize,
                margin: margin !== null ? parseInt(margin) : margin
            };
        }
    }, {
        key: 'generate',
        value: function generate() {
            if (this.data !== null) {
                if (this.format === 'png') {
                    this.generatePNG();
                } else if (this.format === 'html') {
                    this.generateHTML();
                } else if (this.format === 'svg') {
                    this.generateSVG();
                } else {
                    this.shadowRoot.innerHTML = '<div>qr-code: ' + this.format + ' not supported!</div>';
                }
            } else {
                this.shadowRoot.innerHTML = '<div>qr-code: no data!</div>';
            }
        }
    }, {
        key: 'generatePNG',
        value: function generatePNG() {
            try {
                var img = document.createElement('img');
                img.src = QRCode.generatePNG(this.data, this.getOptions());
                this.clear();
                this.shadowRoot.appendChild(img);
            } catch (e) {
                this.shadowRoot.innerHTML = '<div>qr-code: no canvas support!</div>';
            }
        }
    }, {
        key: 'generateHTML',
        value: function generateHTML() {
            var div = QRCode.generateHTML(this.data, this.getOptions());
            this.clear();
            this.shadowRoot.appendChild(div);
        }
    }, {
        key: 'generateSVG',
        value: function generateSVG() {
            var div = QRCode.generateSVG(this.data, this.getOptions());
            this.clear();
            this.shadowRoot.appendChild(div);
        }
    }, {
        key: 'clear',
        value: function clear() {
            while (this.shadowRoot.lastChild) {
                this.shadowRoot.removeChild(this.shadowRoot.lastChild);
            }
        }
    }]);

    return QRCode;
}(HTMLElement);

exports.default = QRCode;

},{}],2:[function(require,module,exports){
'use strict';

var _qrCode = require('./qr-code');

var _qrCode2 = _interopRequireDefault(_qrCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

customElements.define('qr-code', _qrCode2.default);

},{"./qr-code":1}]},{},[2]);
