'use strict';

(function(definition) {
	if (typeof define === 'function' && define.amd) {
		define(['QRCode'], definition);
	} else if (typeof module === 'object' && module.exports) {
		var QRCode = require('./qr.js');
		module.exports = definition(QRCode);
	} else {
		definition(window.QRCode);
	}
})(function(QRCode) {
//
// Prototype definition
//
var proto = Object.create(HTMLElement.prototype, {
	attrs: {
		value: ['data', 'format', 'modulesize', 'margin']
	},
	defineAttributes: {
		value: function () {
			var me = this,
				attr;
			for (var i=0; i<this.attrs.length; i++) {
				attr = this.attrs[i];
				(function (attr) {
					Object.defineProperty(me, attr, {
						get: function () {
							return this.getAttribute(attr);
						},
						set: function (value) {
							this.setAttribute(attr, value);
						}
					});
				})(attr);
			}
		}
	},
    //
    // LifeCycle Callbacks
    //
    createdCallback: {
        value: function () {
            this.createShadowRoot();
            this.defineAttributes();
            this.setAttribute('format', 'png');
            this.generate();
        }
    },
    attributeChangedCallback: {
        value: function (attrName, oldVal, newVal) {
            var fn = this[attrName+'Changed'];
            if (fn && typeof fn === 'function') {
                fn.call(this, oldVal, newVal);
            }
        }
    },
    dataChanged: {
        value: function (oldVal, newVal) {
            this.generate();
        }
    },
    //
    // Methods
    //
    generate: {
        value: function () {
            var modulesize = this.getAttribute('modulesize'),
                margin = this.getAttribute('margin'),
                options = {
                    modulesize: modulesize !== null ? parseInt(modulesize) : modulesize,
                    margin: margin !== null ? parseInt(margin) || -1 : margin
                };
            if (this.getAttribute('format') === 'png') {
                this.generatePNG(options);
            }
            else {
                this.generateHTML(options);
            }
        }
    },
    generatePNG: {
        value: function (options) {
            try {
                var img = document.createElement('img');
                img.src = QRCode.generatePNG(this.getAttribute('data'), options);
                this.clear();
                this.shadowRoot.appendChild(img);
            }
            catch (e) {
                this.shadowRoot.innerHTML = '<div>qr-code: no canvas support!</div>'
            }
        }
    },
    generateHTML: {
        value: function (options) {
            var div = QRCode.generateHTML(this.getAttribute('data'), options);
            this.clear();
            this.shadowRoot.appendChild(div);
        }
    },
    clear: {
        value: function () {
            while (this.shadowRoot.lastChild) {
                this.shadowRoot.removeChild(this.shadowRoot.lastChild);
            }
        }
    }
});
//
// Registering
//
document.registerElement('qr-code', {
    prototype: proto
});
});


