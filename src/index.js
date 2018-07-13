
let QRCode
if (window.customElements) {
    QRCode = require('./qr-code').default
    customElements.define('qr-code', QRCode)
}
else if (document.registerElement) {
    require('./qr-code.es5')
}
else {}

export { QRCode }
