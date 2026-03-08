(function (window, document) {
  function toggleMobileMenu() {
    var menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
  }

  function navigateTo(sectionId) {
    var sections = document.querySelectorAll('.section-container');
    sections.forEach(function (section) {
      section.classList.toggle('active', section.id === sectionId);
    });

    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.classList.remove('active');
    });

    var activeLink = document.getElementById('nav-' + sectionId);
    if (activeLink) activeLink.classList.add('active');

    var menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.add('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      history.replaceState(null, '', '#' + sectionId);
    } catch (e) {}
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initQuickActions() {
    var backBtn = document.getElementById('back-to-top');
    var onScroll = function () {
      if (!backBtn) return;
      backBtn.classList.toggle('show', window.scrollY > 250);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  window.PortalApp = window.PortalApp || {};
  window.PortalApp.navigation = {
    toggleMobileMenu: toggleMobileMenu,
    navigateTo: navigateTo,
    scrollToTop: scrollToTop,
    initQuickActions: initQuickActions
  };

  window.toggleMobileMenu = toggleMobileMenu;
  window.navigateTo = navigateTo;
  window.scrollToTop = scrollToTop;
})(window, document);
