import QRCode from './qr-code.js'

if (typeof customElements !== 'undefined' && !customElements.get('qr-code')) {
  customElements.define('qr-code', QRCode)
}
