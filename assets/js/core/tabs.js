(function (window, document) {
  function switchTab(group, id) {
    document.querySelectorAll('.tab-content').forEach(function (el) {
      if (el.id && el.id.indexOf(group + '-') === 0) el.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn').forEach(function (btn) {
      var handler = btn.getAttribute('onclick') || '';
      if (handler.indexOf("switchTab('" + group + "'") !== -1 || handler.indexOf('switchTab("' + group + '"') !== -1) {
        btn.classList.remove('active');
      }
    });

    var activeTab = document.getElementById(group + '-' + id);
    if (activeTab) activeTab.classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(function (btn) {
      var handler = btn.getAttribute('onclick') || '';
      if (
        handler.indexOf("switchTab('" + group + "', '" + id + "')") !== -1 ||
        handler.indexOf('switchTab("' + group + '", "' + id + '")') !== -1
      ) {
        btn.classList.add('active');
      }
    });
  }

  window.PortalApp = window.PortalApp || {};
  window.PortalApp.tabs = { switchTab: switchTab };
  window.switchTab = switchTab;
})(window, document);
