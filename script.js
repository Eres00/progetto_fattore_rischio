

function generateQR() {
  const qrUrl = 'https://pdfhost.io/v/pvBTtATeCH_guida_fattore_rischio';

  try {
    new QRCode(document.getElementById('qrcode'), {
      text: qrUrl,
      width: 140,
      height: 140,
      colorDark: '#0A1628',
      colorLight: '#FFFFFF',
      correctLevel: QRCode.CorrectLevel.H
    });
  } catch (e) {
    showQRFallback('QR non disponibile offline', '#f0f4f8', '#6B7280');
  }
}

function showQRFallback(message, bg, color) {
  const el = document.getElementById('qrcode');
  el.style.cssText = [
    'width:140px', 'height:140px',
    'display:flex', 'align-items:center', 'justify-content:center',
    `background:${bg}`, 'border-radius:4px',
    'font-size:.7rem', `color:${color}`,
    'text-align:center', 'padding:8px'
  ].join(';');
  el.textContent = message;
}

if (typeof QRCode !== 'undefined') {
  generateQR();
} else {
  window.addEventListener('load', function () {
    if (typeof QRCode !== 'undefined') {
      generateQR();
    } else {
      showQRFallback('Connetti a internet per visualizzare il QR', '#1E3A5F', '#94A3B8');
    }
  });
}
