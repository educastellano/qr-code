import QRCode from './qr-code'

if (!customElements.get('qr-code')) {
  customElements.define('qr-code', QRCode)
}
