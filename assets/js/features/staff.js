(function (window, document) {
  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function roleClassName(roleClass) {
    return roleClass ? ' role-' + roleClass : '';
  }

  function renderPanelCard(item) {
    return '<article class="profile-card university-card' + roleClassName(item.roleClass) + '">' +
      '<div class="profile-media-wrap"><img class="profile-photo" src="' + escapeHtml(item.photo) + '" alt="' + escapeHtml(item.nama) + '"></div>' +
      '<div class="profile-content">' +
        '<div class="profile-role">' + escapeHtml(item.role || '') + '</div>' +
        '<h4 class="profile-name">' + escapeHtml(item.nama) + '</h4>' +
        '<p class="profile-meta">' + escapeHtml(item.meta || item.jawatan || '') + '</p>' +
        (item.tugas ? '<div class="profile-tagline">' + escapeHtml(item.tugas) + '</div>' : '') +
      '</div>' +
    '</article>';
  }

  function initials(name) {
    var parts = String(name || '').trim().split(/\s+/).filter(Boolean);
    return parts.slice(0, 2).map(function (p) { return p.charAt(0).toUpperCase(); }).join('') || 'SM';
  }

  function photoMarkup(item, cls) {
    if (item && item.photo) {
      return '<img class="' + cls + '" src="' + escapeHtml(item.photo) + '" alt="' + escapeHtml(item.nama) + '">';
    }
    return '<div class="' + cls + ' profile-fallback" aria-label="' + escapeHtml(item.nama) + '">' + initials(item.nama) + '</div>';
  }

  function renderCompactPhotoCard(item, extra) {
    return '<article class="compact-profile-card">' +
      photoMarkup(item, 'compact-profile-photo') +
      '<div class="compact-profile-content">' +
        '<h4 class="compact-profile-name">' + escapeHtml(item.nama) + '</h4>' +
        (extra ? '<p class="compact-profile-meta">' + escapeHtml(extra) + '</p>' : '') +
      '</div>' +
    '</article>';
  }

  function renderSimpleNameCard(item) {
    return '<article class="simple-profile-card">' +
      photoMarkup(item, 'simple-profile-photo') +
      '<div class="simple-profile-content"><h4 class="simple-profile-name">' + escapeHtml(item.nama || item) + '</h4></div>' +
    '</article>';
  }

  function setHtml(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function renderStaff() {
    setHtml('slt-list-container', (window.sltList || []).map(renderPanelCard).join(''));
    setHtml('gkmp-list-container', (window.gkmpList || []).map(renderPanelCard).join(''));
    setHtml('kaunselor-list-container', (window.kaunselorList || []).map(function (item) {
      return renderCompactPhotoCard(item, item.jawatan + ' • ' + item.tugas);
    }).join(''));
    setHtml('akp-list-container', (window.akpList || []).map(renderCompactPhotoCard).join(''));

    var guruItems = window.guruList || [];
    setHtml('guru-highlight-container', guruItems.filter(function (item) { return item.featured; }).map(renderCompactPhotoCard).join(''));
    setHtml('guru-list-container', guruItems.filter(function (item) { return !item.featured; }).map(renderSimpleNameCard).join(''));
  }

  window.PortalApp = window.PortalApp || {};
  window.PortalApp.staff = { renderStaff: renderStaff };
})(window, document);
