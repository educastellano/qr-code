import QRCode from './qr-code'

if (typeof customElements !== 'undefined' && !customElements.get('qr-code')) {
  customElements.define('qr-code', QRCode)
}
