(function (window, document) {
  var SEKOLAH_EMAIL = 'smk.kimanis@moe.edu.my';

  function validateField(inputId, errorId, validator) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    if (!input || !error) return false;
    var valid = validator((input.value || '').trim());
    error.classList.toggle('hidden', valid);
    input.style.borderColor = valid ? '' : '#ef4444';
    return valid;
  }

  function handleContact() {
    var nameOk = validateField('c-name', 'err-name', function (v) { return v.length > 1; });
    var emailOk = validateField('c-email', 'err-email', function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); });
    var subjectOk = validateField('c-subject', 'err-subject', function (v) { return v.length > 2; });
    var msgOk = validateField('c-message', 'err-message', function (v) { return v.length > 5; });
    if (!nameOk || !emailOk || !subjectOk || !msgOk) return false;

    var nama = (document.getElementById('c-name') || {}).value.trim();
    var emel = (document.getElementById('c-email') || {}).value.trim();
    var subjek = (document.getElementById('c-subject') || {}).value.trim();
    var mesej = (document.getElementById('c-message') || {}).value.trim();

    var body = [
      'Dari     : ' + nama,
      'E-mel    : ' + emel,
      '',
      'Mesej:',
      mesej,
      '',
      '---',
      'Dihantar melalui Portal SMK Kimanis 2026'
    ].join('\n');

    var link = 'mailto:' + SEKOLAH_EMAIL +
      '?subject=' + encodeURIComponent('[Portal SMK Kimanis] ' + subjek) +
      '&body=' + encodeURIComponent(body) +
      '&cc=' + encodeURIComponent(emel);

    window.location.href = link;

    var infoBox = document.getElementById('contact-info-box');
    if (infoBox) infoBox.classList.add('hidden');

    var successBox = document.getElementById('contact-success');
    if (successBox) successBox.classList.remove('hidden');

    var btn = document.getElementById('submit-btn');
    if (btn) {
      btn.textContent = '✅ Aplikasi E-mel Dibuka';
      btn.disabled = true;
      btn.classList.add('opacity-70');
    }

    window.setTimeout(function () {
      ['c-name', 'c-email', 'c-subject', 'c-message'].forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.value = '';
        el.style.borderColor = '';
      });
      if (successBox) successBox.classList.add('hidden');
      if (infoBox) infoBox.classList.remove('hidden');
      if (btn) {
        btn.textContent = '📤 Hantar Mesej';
        btn.disabled = false;
        btn.classList.remove('opacity-70');
      }
    }, 5000);

    return false;
  }

  window.PortalApp = window.PortalApp || {};
  window.PortalApp.contact = { handleContact: handleContact };
  window.handleContact = handleContact;
})(window, document);
