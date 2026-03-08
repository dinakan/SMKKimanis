(function (window, document) {
  var filteredData = [];

  function normalizeMuridData(data) {
    return (data || []).map(function (item, index) {
      return {
        no: item.no || index + 1,
        kelas: item.k || item.kelas || '',
        nama: item.nm || item.nama || '',
        jantina: item.j || item.jantina || '',
        kaum: item.kt || item.kaum || '',
        agama: item.ag || item.agama || '',
        tingkatan: item.t || item.tingkatan || '',
        oku: item.ok || item.oku || ''
      };
    });
  }

  function getData() {
    return window.__normalizedMuridData || [];
  }

  function mapMuridData() {
    window.__normalizedMuridData = normalizeMuridData(window.muridData || []);
    populateClassFilter();
  }

  function updateText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function updateMuridStats(data) {
    data = data || getData();
    var classes = Array.from(new Set(data.map(function (m) { return m.kelas; }).filter(Boolean)));
    var lelaki = data.filter(function (m) { return (m.jantina || '').toUpperCase() === 'LELAKI'; }).length;
    var perempuan = data.filter(function (m) { return (m.jantina || '').toUpperCase() === 'PEREMPUAN'; }).length;
    updateText('stat-total', data.length);
    updateText('stat-total-murid', data.length);
    updateText('stat-kelas', classes.length || 0);
    updateText('stat-lelaki', lelaki);
    updateText('stat-lk', lelaki);
    updateText('stat-perempuan', perempuan);
    updateText('stat-pr', perempuan);
    updateText('result-count', data.length + ' murid dipaparkan');
  }

  function renderMuridTable(data) {
    data = data || getData();
    var tbody = document.getElementById('murid-tbody');
    if (!tbody) return;

    if (!data.length) {
      tbody.innerHTML = '<tr><td colspan="6" class="text-center text-slate-500 py-8">Tiada data murid dijumpai.</td></tr>';
      updateMuridStats(data);
      return;
    }

    tbody.innerHTML = data.map(function (m, i) {
      return '<tr>' +
        '<td>' + (i + 1) + '</td>' +
        '<td><span class="kelas-chip">' + (m.kelas || '—') + '</span></td>' +
        '<td class="nama-cell">' + (m.nama || '') + '</td>' +
        '<td>' + (m.jantina || '—') + '</td>' +
        '<td>' + (m.kaum || '—') + '</td>' +
        '<td>' + (m.agama || '—') + '</td>' +
      '</tr>';
    }).join('');
    updateMuridStats(data);
  }

  function filterMurid() {
    var keyword = ((document.getElementById('search-murid') || {}).value || '').toLowerCase().trim();
    var kelas = ((document.getElementById('filter-kelas') || {}).value || '');

    filteredData = getData().filter(function (m) {
      var haystack = [m.nama, m.kelas, m.kaum, m.agama, m.jantina, m.tingkatan].join(' ').toLowerCase();
      var hitKeyword = !keyword || haystack.indexOf(keyword) !== -1;
      var hitKelas = !kelas || m.kelas === kelas;
      return hitKeyword && hitKelas;
    });

    renderMuridTable(filteredData);
  }

  function resetFilter() {
    ['search-murid', 'filter-kelas'].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      if (el.tagName === 'SELECT') el.selectedIndex = 0;
      else el.value = '';
    });
    filteredData = getData().slice();
    renderMuridTable(filteredData);
  }

  function populateClassFilter() {
    var select = document.getElementById('filter-kelas');
    if (!select) return;
    var classes = Array.from(new Set(getData().map(function (m) { return m.kelas; }).filter(Boolean))).sort(function(a,b){ return a.localeCompare(b, 'ms', {numeric:true, sensitivity:'base'}); });
    select.innerHTML = '<option value="">Semua Kelas</option>' + classes.map(function (kelas) {
      return '<option value="' + kelas + '">' + kelas + '</option>';
    }).join('');
  }

  function initMuridSearch() {
    filteredData = getData().slice();
    renderMuridTable(filteredData);
    ['search-murid', 'filter-kelas'].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.addEventListener(id === 'search-murid' ? 'input' : 'change', filterMurid);
    });
  }

  window.PortalApp = window.PortalApp || {};
  window.PortalApp.murid = {
    mapMuridData: mapMuridData,
    updateMuridStats: updateMuridStats,
    renderMuridTable: renderMuridTable,
    filterMurid: filterMurid,
    resetFilter: resetFilter,
    initMuridSearch: initMuridSearch
  };

  window.filterMurid = filterMurid;
  window.resetFilter = resetFilter;
})(window, document);
