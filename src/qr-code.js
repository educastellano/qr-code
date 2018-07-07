
export default class QRCode extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.defineAttributes()
    }
    //
    // LifeCycle Callbacks
    //
    connectedCallback() {
        this.generate()
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        var fn = this[attrName+'Changed'];
        if (fn && typeof fn === 'function') {
            fn.call(this, oldVal, newVal);
        }
        this.generate();
    }
    //
    // Methods
    //
    defineAttributes() {
        let attributes = {
            data: null,
            format: 'png',
            modulesize: 5,
            margin: 4
        }
        var attrs = Object.keys(attributes),
            attr;
        for (var i=0; i<attrs.length; i++) {
            attr = attrs[i];
            (function (attr) {
                Object.defineProperty(this, attr, {
                    get: function () {
                        var value = this.getAttribute(attr);
                        return value === null ? this.attrs[attr] : value;
                    },
                    set: function (value) {
                        this.setAttribute(attr, value);
                    }
                });
            }.bind(this))(attr);
        }
    }
    getOptions(){
        var modulesize = this.modulesize,
            margin = this.margin;
        return {
            modulesize: modulesize !== null ? parseInt(modulesize) : modulesize,
            margin: margin !== null ? parseInt(margin) : margin
        }
    }
    generate() {
        if (this.data !== null) {
            if (this.format === 'png') {
                this.generatePNG();
            }
            else if (this.format === 'html') {
                this.generateHTML();
            }
            else if (this.format === 'svg') {
                this.generateSVG();
            }
            else {
                this.shadowRoot.innerHTML = '<div>qr-code: '+ this.format +' not supported!</div>'
            }
        }
        else {
            this.shadowRoot.innerHTML = '<div>qr-code: no data!</div>'
        }
    }
    generatePNG() {
        try {
            var img = document.createElement('img');
            img.src = QRCode.generatePNG(this.data, this.getOptions());
            this.clear();
            this.shadowRoot.appendChild(img);
        }
        catch (e) {
            this.shadowRoot.innerHTML = '<div>qr-code: no canvas support!</div>'
        }
    }
    generateHTML() {
        var div = QRCode.generateHTML(this.data, this.getOptions());
        this.clear();
        this.shadowRoot.appendChild(div);
    }
    generateSVG() {
        var div = QRCode.generateSVG(this.data, this.getOptions());
        this.clear();
        this.shadowRoot.appendChild(div);
    }
    clear() {
        while (this.shadowRoot.lastChild) {
            this.shadowRoot.removeChild(this.shadowRoot.lastChild);
        }
    }
}
