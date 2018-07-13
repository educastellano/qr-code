import _QRCode from 'qrjs'

export default class QRCode extends HTMLElement {
    constructor() {
        super()
        // method bindings
        this._defineProperty = this._defineProperty.bind(this)
        // Shadow DOM
        this.attachShadow({ mode: 'open' })
        // Define Properties
        Object.keys(QRCode.defaultAttributes).map(this._defineProperty)
    }
    static get defaultAttributes() {
        return { 
            data: null,
            format: 'png',
            modulesize: 5,
            margin: 4
        }
    }
    static get observedAttributes() {
        return Object.keys(QRCode.defaultAttributes)
    }
    // LifeCycle Callbacks
    //
    attributeChangedCallback(attributeName, oldValue, newValue) {
        let fn = this[attributeName+'Changed']
        if (fn && typeof fn === 'function') {
            fn.call(this, oldValue, newValue)
        }
        this.generate()
    }
    // Methods
    //
    _defineProperty(attributeName) {
        Object.defineProperty(this, attributeName, {
            get: () => {
                let value = this.getAttribute(attributeName)
                return value === null ? QRCode.defaultAttributes[attributeName] : value
            },
            set: value => {
                this.setAttribute(attributeName, value)
            }
        })
    }
    getOptions() {
        let { modulesize, margin } = this
        return {
            modulesize: modulesize !== null ? parseInt(modulesize) : modulesize,
            margin: margin !== null ? parseInt(margin) : margin
        }
    }
    generate() {
        if (this.data !== null) {
            if (this.format === 'png') {
                this.generatePNG()
            }
            else if (this.format === 'html') {
                this.generateHTML()
            }
            else if (this.format === 'svg') {
                this.generateSVG()
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
            let img = document.createElement('img')
            img.src = _QRCode.generatePNG(this.data, this.getOptions())
            this.clear()
            this.shadowRoot.appendChild(img)
        }
        catch (e) {
            this.shadowRoot.innerHTML = '<div>qr-code: no canvas support!</div>'
        }
    }
    generateHTML() {
        let div = _QRCode.generateHTML(this.data, this.getOptions())
        this.clear()
        this.shadowRoot.appendChild(div)
    }
    generateSVG() {
        let div = _QRCode.generateSVG(this.data, this.getOptions())
        this.clear()
        this.shadowRoot.appendChild(div)
    }
    clear() {
        while (this.shadowRoot.lastChild) {
            this.shadowRoot.removeChild(this.shadowRoot.lastChild)
        }
    }
}
