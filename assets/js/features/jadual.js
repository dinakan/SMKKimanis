(function (window, document) {
  function renderJadual() {
    var container = document.getElementById('jadual-tbody');
    if (!container) return;
    var data = window.jadualData || [];
    container.innerHTML = data.map(function (item) {
      return '<tr>' +
        '<td>' + item.m + '</td>' +
        '<td>' + item.t + '</td>' +
        '<td>' + (Array.isArray(item.guru) ? item.guru.join('<br>') : item.guru) + '</td>' +
        '<td>' + item.gkmp + '</td>' +
        '<td>' + item.tema + '</td>' +
        '<td>' + item.tajuk + '</td>' +
      '</tr>';
    }).join('');
  }

  window.PortalApp = window.PortalApp || {};
  window.PortalApp.jadual = { renderJadual: renderJadual };
})(window, document);
