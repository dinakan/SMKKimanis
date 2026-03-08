(function (window, document) {
  function initDefaultTabs() {
    if (window.switchTab) {
      window.switchTab('peng', 'SLT');
      window.switchTab('kur', 'kelas');
      window.switchTab('kok', 'jadual');
    }
  }

  function initHashNavigation() {
    var hash = (window.location.hash || '').replace('#', '').trim();
    if (hash && document.getElementById(hash) && window.navigateTo) {
      window.navigateTo(hash);
      return;
    }
    if (window.navigateTo) window.navigateTo('home');
  }

  function initApp() {
    if (window.PortalApp && window.PortalApp.murid) {
      window.PortalApp.murid.mapMuridData();
      window.PortalApp.murid.updateMuridStats();
      window.PortalApp.murid.initMuridSearch();
    }
    if (window.PortalApp && window.PortalApp.jadual) window.PortalApp.jadual.renderJadual();
    if (window.PortalApp && window.PortalApp.staff) window.PortalApp.staff.renderStaff();
    initDefaultTabs();
    if (window.PortalApp && window.PortalApp.navigation) window.PortalApp.navigation.initQuickActions();
    initHashNavigation();
  }

  document.addEventListener('DOMContentLoaded', initApp);
})(window, document);
