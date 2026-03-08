(function (window, document) {
  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function initials(name) {
    return String(name || 'SMK')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (part) { return part.charAt(0).toUpperCase(); })
      .join('') || 'SM';
  }

  function photoMarkup(item) {
    if (item.gambar) {
      return '<img class="unit-member-photo" src="' + escapeHtml(item.gambar) + '" alt="' + escapeHtml(item.nama) + '">';
    }
    return '<div class="unit-member-photo unit-member-fallback">' + initials(item.nama) + '</div>';
  }

  function renderDirectory() {
    var root = document.querySelector('[data-unit-key]');
    if (!root) return;
    var key = root.getAttribute('data-unit-key');
    var list = (window.unitMembersData && window.unitMembersData[key]) || [];
    var grid = document.getElementById('unit-member-grid');
    var tbody = document.getElementById('unit-member-tbody');
    var count = document.getElementById('unit-member-count');

    if (count) count.textContent = list.length + ' ahli direkodkan';

    if (grid) {
      grid.innerHTML = list.length ? list.map(function (item) {
        return '<article class="unit-member-card">' +
          photoMarkup(item) +
          '<div class="unit-member-content">' +
            '<div class="unit-member-role">' + escapeHtml(item.jawatan || 'Ahli Unit') + '</div>' +
            '<h3 class="unit-member-name">' + escapeHtml(item.nama) + '</h3>' +
            '<div class="unit-member-meta">Kelas: ' + escapeHtml(item.kelas || '—') + '</div>' +
          '</div>' +
        '</article>';
      }).join('') : '<div class="unit-empty-state">Tiada ahli dimasukkan lagi. Tambahkan rekod dalam fail <strong>assets/js/data/unit-members.js</strong>.</div>';
    }

    if (tbody) {
      tbody.innerHTML = list.length ? list.map(function (item, index) {
        return '<tr>' +
          '<td>' + (index + 1) + '</td>' +
          '<td>' + escapeHtml(item.nama) + '</td>' +
          '<td>' + escapeHtml(item.kelas || '—') + '</td>' +
          '<td>' + escapeHtml(item.jawatan || 'Ahli Unit') + '</td>' +
          '<td>' + (item.gambar ? 'Ada' : 'Belum') + '</td>' +
        '</tr>';
      }).join('') : '<tr><td colspan="5" class="unit-table-empty">Belum ada data ahli. Sila kemas kini fail data unit kemudian.</td></tr>';
    }
  }

  window.addEventListener('DOMContentLoaded', renderDirectory);
})(window, document);
