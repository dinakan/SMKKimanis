(function (window, document) {
  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderUcapanPengetua() {
    var container = document.getElementById('ucapan-pengetua-grid');
    if (!container) return;
    var data = window.ucapanPengetuaData || [];
    container.innerHTML = data.map(function (item) {
      return '<article class="ucapan-card">' +
        '<div class="ucapan-card-head">' +
          '<span class="ucapan-week-badge">Minggu ' + escapeHtml(String(item.minggu).padStart(2, '0')) + '</span>' +
          '<span class="ucapan-status">' + escapeHtml(item.status || 'Sedia diisi') + '</span>' +
        '</div>' +
        '<h4 class="ucapan-card-title">' + escapeHtml(item.tajuk) + '</h4>' +
        '<div class="ucapan-meta-row">' +
          '<span>📅 ' + escapeHtml(item.tarikh || 'Tarikh belum dimasukkan') + '</span>' +
          '<span>🗂️ ' + escapeHtml(item.tema || 'Tema ucapan') + '</span>' +
        '</div>' +
        '<p class="ucapan-card-text">' + escapeHtml(item.ringkasan || 'Ringkasan ucapan akan dipaparkan di sini.') + '</p>' +
        '<div class="ucapan-card-footer">' +
          '<span>Ruang arkib ucapan pengetua</span>' +
          '<span class="ucapan-card-index">#' + escapeHtml(String(item.minggu).padStart(2, '0')) + '</span>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  function oprCard(item) {
    var hasImage = !!item.image;
    return '<article class="opr-slot-card' + (hasImage ? ' has-image' : '') + '" ' +
      (hasImage ? ('onclick="openOprModal(' + (item.id - 1) + ')" tabindex="0" role="button"') : '') + '>' +
      '<div class="opr-slot-preview">' +
        (hasImage
          ? ('<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.tajuk) + '">')
          : '<div class="opr-slot-placeholder"><span>🖼️</span><strong>Slot OPR</strong><small>Tambah imej</small></div>') +
      '</div>' +
      '<div class="opr-slot-body">' +
        '<div class="opr-slot-title-row"><h4>' + escapeHtml(item.tajuk) + '</h4><span>Slot ' + escapeHtml(String(item.id).padStart(2, '0')) + '</span></div>' +
        '<p>' + escapeHtml(item.keterangan || 'Masukkan gambar OPR kemudian.') + '</p>' +
      '</div>' +
    '</article>';
  }

  function renderOprGallery() {
    var container = document.getElementById('opr-gallery-grid');
    if (!container) return;
    var data = window.oprGalleryData || [];
    container.innerHTML = data.map(oprCard).join('');
  }

  function openOprModal(index) {
    var data = window.oprGalleryData || [];
    var item = data[index];
    if (!item || !item.image) return;
    var modal = document.getElementById('opr-lightbox');
    var img = document.getElementById('opr-lightbox-image');
    var title = document.getElementById('opr-lightbox-title');
    var caption = document.getElementById('opr-lightbox-caption');
    if (!modal || !img) return;
    img.src = item.image;
    img.alt = item.tajuk || 'Paparan OPR';
    if (title) title.textContent = item.tajuk || 'One Page Report';
    if (caption) caption.textContent = item.keterangan || 'Paparan OPR.';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeOprModal() {
    var modal = document.getElementById('opr-lightbox');
    var img = document.getElementById('opr-lightbox-image');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (img) img.src = '';
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeOprModal();
  });

  window.openOprModal = openOprModal;
  window.closeOprModal = closeOprModal;
  window.PortalApp = window.PortalApp || {};
  window.PortalApp.premiumModules = {
    renderUcapanPengetua: renderUcapanPengetua,
    renderOprGallery: renderOprGallery
  };
})(window, document);
