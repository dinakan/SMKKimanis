SMK Kimanis Portal - Versi Deploy Ready v3

Penambahbaikan utama:
1. Struktur JavaScript dipecahkan kepada beberapa fail mengikut fungsi.
2. Semua butang, tab, menu, carian murid, jadual, dan borang hubungi telah diperbaiki.
3. Skrip kini menggunakan fail JavaScript biasa (bukan module import), jadi boleh dibuka terus melalui fail index.html tanpa masalah.
4. Disediakan fail tambahan untuk hosting:
   - .htaccess (cPanel / Apache)
   - netlify.toml (Netlify)
   - vercel.json (Vercel)
   - 404.html
   - robots.txt
   - sitemap.xml

Struktur:
- index.html
- 404.html
- .htaccess
- netlify.toml
- vercel.json
- robots.txt
- sitemap.xml
- assets/css/styles.css
- assets/js/data/murid-data.js
- assets/js/data/staff-data.js
- assets/js/core/navigation.js
- assets/js/core/tabs.js
- assets/js/features/murid.js
- assets/js/features/staff.js
- assets/js/features/jadual.js
- assets/js/features/contact.js
- assets/js/app-init.js

Cara guna:
1. Klik dua kali pada index.html untuk buka portal secara terus di komputer.
2. Untuk hosting:
   - GitHub Pages: muat naik semua kandungan folder ini ke repository.
   - Netlify: drag & drop keseluruhan folder.
   - cPanel: upload semua fail ke public_html.
   - Vercel: import folder/repo ini.

Nota:
- Tukar URL logo/gambar guru secara manual jika mahu guna aset sebenar sekolah.
- Kemas kini nilai di sitemap.xml kepada domain sebenar selepas portal diterbitkan.


Kemaskini V6: Data murid disegerakkan semula daripada fail 'Murid Tahun 2026.xlsx' terkini.

Versi V7: Naik taraf penuh reka bentuk portal kepada tema korporat rasmi yang lebih premium.
