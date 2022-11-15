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
    const fn = this[attributeName+'Changed']
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
        const value = this.getAttribute(attributeName)
        return value === null ? QRCode.defaultAttributes[attributeName] : value
      },
      set: value => {
        this.setAttribute(attributeName, value)
      }
    })
  }

  getOptions() {
    const { modulesize, margin } = this
    return {
      modulesize: modulesize !== null ? parseInt(modulesize) : modulesize,
      margin: margin !== null ? parseInt(margin) : margin
    }
  }

  generate() {
    try {
      this.clear()
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
          this.shadowRoot.textContent = `qr-code: ${this.format} not supported!`
        }
      }
      else {
        this.shadowRoot.textContent = 'qr-code: no data!'
      }
    }
    catch (e) {
      console.error(e)
      this.shadowRoot.textContent = 'qr-code: error!'
    }
  }

  generatePNG() {
    const img = document.createElement('img')
    img.src = _QRCode.generatePNG(this.data, this.getOptions())
    img.setAttribute('part', 'img')
    this.shadowRoot.appendChild(img)
  }

  generateHTML() {
    const div = _QRCode.generateHTML(this.data, this.getOptions())
    const table = div.firstChild
    table.setAttribute('part', 'table')
    this.shadowRoot.appendChild(table)
  }

  generateSVG() {
    const svg = _QRCode.generateSVG(this.data, this.getOptions())
    svg.setAttribute('part', 'svg')
    this.shadowRoot.appendChild(svg)
  }

  clear() {
    while (this.shadowRoot.lastChild) {
      this.shadowRoot.removeChild(this.shadowRoot.lastChild)
    }
  }

}
