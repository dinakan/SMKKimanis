(function (window, document) {
  function renderList(containerId, items, className) {
    className = className || 'org-card';
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = (items || []).map(function (item) {
      return '<div class="' + className + '">' + item + '</div>';
    }).join('');
  }

  function renderStaff() {
    renderList('guru-list-container', window.guruList || []);
    renderList('akp-list-container', window.akpList || []);

    var kaunselor = document.getElementById('kaunselor-list-container');
    if (kaunselor) {
      kaunselor.innerHTML = (window.kaunselorList || []).map(function (item) {
        return '<div class="org-card">' +
          '<div class="font-semibold text-blue-900">' + item.nama + '</div>' +
          '<div class="text-sm text-gray-600">' + item.jawatan + '</div>' +
          '<div class="text-xs text-amber-700 mt-1">' + item.tugas + '</div>' +
          '</div>';
      }).join('');
    }
  }

  window.PortalApp = window.PortalApp || {};
  window.PortalApp.staff = { renderStaff: renderStaff };
})(window, document);
