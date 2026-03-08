const jadualData = [

  {m:1, t:"12–16 Jan", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"KASIH SAYANG", tajuk:"Jauhi Buli"},
  {m:2, t:"19–23 Jan", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"KASIH SAYANG", tajuk:"Ihsan"},
  {m:3, t:"26–30 Jan", guru:["En. Afandy bin Yubah","Pn. Dayang Siti Farhanah binti Sulaiman","En. Roland T. Moujip","Pn. Jemaya binti Wasiman","Pn. Alicia Selvester Awang","Pn. Reja Healfris Adon","Pn. Dg. Nor Junah binti Awang Mohd Yousoff","Pn. Siti Hajar binti Zakaria"], gkmp:"En. Ronezal bin Duin", tema:"HORMAT MENGHORMATI", tajuk:"Jati Diri"},
  {m:4, t:"02–06 Feb", guru:["Pn. Dgku. Saadiah binti Awg. Alimat","En. Shahrulhafiz bin Md. Zain","Ustaz Mohd Iqbal Izzet bin Duraman","Ustazah Dg. Siti Masliana binti Talip","Pn. Siow Hui Lee","Pn. Halimah binti Abdul Rahman","Pn. Dg Wan Shazwani binti Ag. Ibrahim","Pn Shiendma binti Simen"], gkmp:"Pn. Surijah binti Satari", tema:"HORMAT MENGHORMATI", tajuk:"Komuniti Mesra Orang Kelainan Upaya"},
  {m:5, t:"09–13 Feb", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"HORMAT MENGHORMATI", tajuk:"Mematuhi Peraturan dan Undang-Undang Jalan Raya"},
  {m:6, t:"17–18 Feb", guru:["—"], gkmp:"—", tema:"CUTI", tajuk:"Tahun Baru Cina"},
  {m:7, t:"23–27 Feb", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"BERTANGGUNGJAWAB", tajuk:"Belanja Berhemah"},
  {m:8, t:"02–06 Mac", guru:["En. Afandy bin Yubah","Pn. Dayang Siti Farhanah binti Sulaiman","En. Roland T. Moujip","Pn. Jemaya binti Wasiman","Pn. Alicia Selvester Awang","Pn. Reja Healfris Adon","Pn. Dg. Nor Junah binti Awang Mohd Yousoff","Pn. Siti Hajar binti Zakaria"], gkmp:"En. Ronezal bin Duin", tema:"BERTANGGUNGJAWAB", tajuk:"Etika Penggunaan Media Sosial"},
  {m:9, t:"09–13 Mac", guru:["Pn. Dgku. Saadiah binti Awg. Alimat","En. Shahrulhafiz bin Md. Zain","Ustaz Mohd Iqbal Izzet bin Duraman","Ustazah Dg. Siti Masliana binti Talip","Pn. Siow Hui Lee","Pn. Halimah binti Abdul Rahman","Pn. Dg Wan Shazwani binti Ag. Ibrahim","Pn Shiendma binti Simen"], gkmp:"Pn. Surijah binti Satari", tema:"BERTANGGUNGJAWAB", tajuk:"Penyalahgunaan Perantian Gajet"},
  {m:10, t:"16–20 Mac", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"KASIH SAYANG", tajuk:"Memanfaatkan Sumber Asli"},
  {m:"CUTI", t:"21–29 Mac", guru:["—"], gkmp:"—", tema:"CUTI", tajuk:"Cuti Penggal 1 Tahun 2026"},
  {m:11, t:"30 Mac–03 Apr", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"ISNI", tajuk:"Cuti Hari Jadi Yang di-Pertuan Agong (Sabtu)"},
  {m:12, t:"06–10 Apr", guru:["En. Afandy bin Yubah","Pn. Dayang Siti Farhanah binti Sulaiman","En. Roland T. Moujip","Pn. Jemaya binti Wasiman","Pn. Alicia Selvester Awang","Pn. Reja Healfris Adon","Pn. Dg. Nor Junah binti Awang Mohd Yousoff","Pn. Siti Hajar binti Zakaria"], gkmp:"En. Ronezal bin Duin", tema:"HORMAT MENGHORMATI", tajuk:"Mematuhi Peraturan dan Undang-Undang Jalan Raya"},
  {m:13, t:"13–17 Apr", guru:["Pn. Dgku. Saadiah binti Awg. Alimat","En. Shahrulhafiz bin Md. Zain","Ustaz Mohd Iqbal Izzet bin Duraman","Ustazah Dg. Siti Masliana binti Talip","Pn. Siow Hui Lee","Pn. Halimah binti Abdul Rahman","Pn. Dg Wan Shazwani binti Ag. Ibrahim","Pn Shiendma binti Simen"], gkmp:"Pn. Surijah binti Satari", tema:"KASIH SAYANG", tajuk:"Sayangi Alam Sekitar"},
  {m:14, t:"20–24 Apr", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"HORMAT MENGHORMATI", tajuk:"Menghindari Perbuatan Negatif"},
  {m:15, t:"27 Apr–01 Mei", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"HORMAT MENGHORMATI", tajuk:"Mematuhi Peraturan Setempat"},
  {m:16, t:"04–08 Mei", guru:["En. Afandy bin Yubah","Pn. Dayang Siti Farhanah binti Sulaiman","En. Roland T. Moujip","Pn. Jemaya binti Wasiman","Pn. Alicia Selvester Awang","Pn. Reja Healfris Adon","Pn. Dg. Nor Junah binti Awang Mohd Yousoff","Pn. Siti Hajar binti Zakaria"], gkmp:"En. Ronezal bin Duin", tema:"HORMAT MENGHORMATI", tajuk:"Silang Budaya"},
  {m:17, t:"11–15 Mei", guru:["Pn. Dgku. Saadiah binti Awg. Alimat","En. Shahrulhafiz bin Md. Zain","Ustaz Mohd Iqbal Izzet bin Duraman","Ustazah Dg. Siti Masliana binti Talip","Pn. Siow Hui Lee","Pn. Halimah binti Abdul Rahman","Pn. Dg Wan Shazwani binti Ag. Ibrahim","Pn Shiendma binti Simen"], gkmp:"Pn. Surijah binti Satari", tema:"PEPERIKSAAN", tajuk:"Peperiksaan Pertengahan Tahun"},
  {m:18, t:"18–22 Mei", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"PEPERIKSAAN", tajuk:"Peperiksaan Pertengahan Tahun & UPSA"},
  {m:"CUTI", t:"23 Mei–07 Jun", guru:["—"], gkmp:"—", tema:"CUTI", tajuk:"Cuti Pertengahan Tahun 2026"},
  {m:19, t:"08–12 Jun", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"BERTANGGUNGJAWAB", tajuk:"Bumiku Hijau"},
  {m:20, t:"15–19 Jun", guru:["En. Afandy bin Yubah","Pn. Dayang Siti Farhanah binti Sulaiman","En. Roland T. Moujip","Pn. Jemaya binti Wasiman","Pn. Alicia Selvester Awang","Pn. Reja Healfris Adon","Pn. Dg. Nor Junah binti Awang Mohd Yousoff","Pn. Siti Hajar binti Zakaria"], gkmp:"En. Ronezal bin Duin", tema:"BERTANGGUNGJAWAB", tajuk:"Sistem Demokrasi"},
  {m:21, t:"22–26 Jun", guru:["Pn. Dgku. Saadiah binti Awg. Alimat","En. Shahrulhafiz bin Md. Zain","Ustaz Mohd Iqbal Izzet bin Duraman","Ustazah Dg. Siti Masliana binti Talip","Pn. Siow Hui Lee","Pn. Halimah binti Abdul Rahman","Pn. Dg Wan Shazwani binti Ag. Ibrahim","Pn Shiendma binti Simen"], gkmp:"Pn. Surijah binti Satari", tema:"BERTANGGUNGJAWAB", tajuk:"Integriti Dalam Tugasan"},
  {m:22, t:"29 Jun–03 Jul", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"BERTANGGUNGJAWAB", tajuk:"Pengurusan Masa Berkesan"},
  {m:23, t:"06–10 Jul", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"KEGEMBIRAAN", tajuk:"Persahabatan Merentasi Sempadan"},
  {m:24, t:"13–17 Jul", guru:["En. Afandy bin Yubah","Pn. Dayang Siti Farhanah binti Sulaiman","En. Roland T. Moujip","Pn. Jemaya binti Wasiman","Pn. Alicia Selvester Awang","Pn. Reja Healfris Adon","Pn. Dg. Nor Junah binti Awang Mohd Yousoff","Pn. Siti Hajar binti Zakaria"], gkmp:"En. Ronezal bin Duin", tema:"KEGEMBIRAAN", tajuk:"Lahirnya Sebuah Cinta"},
  {m:25, t:"20–24 Jul", guru:["Pn. Dgku. Saadiah binti Awg. Alimat","En. Shahrulhafiz bin Md. Zain","Ustaz Mohd Iqbal Izzet bin Duraman","Ustazah Dg. Siti Masliana binti Talip","Pn. Siow Hui Lee","Pn. Halimah binti Abdul Rahman","Pn. Dg Wan Shazwani binti Ag. Ibrahim","Pn Shiendma binti Simen"], gkmp:"Pn. Surijah binti Satari", tema:"KEGEMBIRAAN", tajuk:"Identiti Nasional"},
  {m:26, t:"27–31 Jul", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"KASIH SAYANG", tajuk:"Daulat Tuanku"},
  {m:27, t:"03–07 Ogos", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"CUTI", tajuk:"Isnin - Cuti Tambahan Hari Kebangsaan"},
  {m:28, t:"10–14 Ogos", guru:["En. Afandy bin Yubah","Pn. Dayang Siti Farhanah binti Sulaiman","En. Roland T. Moujip","Pn. Jemaya binti Wasiman","Pn. Alicia Selvester Awang","Pn. Reja Healfris Adon","Pn. Dg. Nor Junah binti Awang Mohd Yousoff","Pn. Siti Hajar binti Zakaria"], gkmp:"En. Ronezal bin Duin", tema:"KASIH SAYANG", tajuk:"Malaysia Negara Perpaduan"},
  {m:29, t:"17–21 Ogos", guru:["Pn. Dgku. Saadiah binti Awg. Alimat","En. Shahrulhafiz bin Md. Zain","Ustaz Mohd Iqbal Izzet bin Duraman","Ustazah Dg. Siti Masliana binti Talip","Pn. Siow Hui Lee","Pn. Halimah binti Abdul Rahman","Pn. Dg Wan Shazwani binti Ag. Ibrahim","Pn Shiendma binti Simen"], gkmp:"Pn. Surijah binti Satari", tema:"KASIH SAYANG", tajuk:"Malaysia Progresif"},
  {m:30, t:"24–28 Ogos", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"CUTI", tajuk:"Isnin - Cuti Peristiwa"},
  {m:"CUTI", t:"29 Ogos–06 Sep", guru:["—"], gkmp:"—", tema:"CUTI", tajuk:"Cuti Penggal 2 Tahun 2026"},
  {m:31, t:"07–11 Sep", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"KASIH SAYANG", tajuk:"Malaysia di Persada Antarabangsa"},
  {m:32, t:"14–18 Sep", guru:["En. Afandy bin Yubah","Pn. Dayang Siti Farhanah binti Sulaiman","En. Roland T. Moujip","Pn. Jemaya binti Wasiman","Pn. Alicia Selvester Awang","Pn. Reja Healfris Adon","Pn. Dg. Nor Junah binti Awang Mohd Yousoff","Pn. Siti Hajar binti Zakaria"], gkmp:"En. Ronezal bin Duin", tema:"HORMAT MENGHORMATI", tajuk:"Malaysia Harmoni"},
  {m:33, t:"21–25 Sep", guru:["Pn. Dgku. Saadiah binti Awg. Alimat","En. Shahrulhafiz bin Md. Zain","Ustaz Mohd Iqbal Izzet bin Duraman","Ustazah Dg. Siti Masliana binti Talip","Pn. Siow Hui Lee","Pn. Halimah binti Abdul Rahman","Pn. Dg Wan Shazwani binti Ag. Ibrahim","Pn Shiendma binti Simen"], gkmp:"Pn. Surijah binti Satari", tema:"PEPERIKSAAN", tajuk:"Percubaan SPM"},
  {m:34, t:"28 Sep–02 Okt", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"HORMAT MENGHORMATI", tajuk:"Amanah dan Integriti"},
  {m:35, t:"05–09 Okt", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"HORMAT MENGHORMATI", tajuk:"Khazanah Alam"},
  {m:36, t:"12–16 Okt", guru:["En. Afandy bin Yubah","Pn. Dayang Siti Farhanah binti Sulaiman","En. Roland T. Moujip","Pn. Jemaya binti Wasiman","Pn. Alicia Selvester Awang","Pn. Reja Healfris Adon","Pn. Dg. Nor Junah binti Awang Mohd Yousoff","Pn. Siti Hajar binti Zakaria"], gkmp:"En. Ronezal bin Duin", tema:"HORMAT MENGHORMATI", tajuk:"Warganegara dan Keamanan Sejagat"},
  {m:37, t:"19–23 Okt", guru:["Pn. Dgku. Saadiah binti Awg. Alimat","En. Shahrulhafiz bin Md. Zain","Ustaz Mohd Iqbal Izzet bin Duraman","Ustazah Dg. Siti Masliana binti Talip","Pn. Siow Hui Lee","Pn. Halimah binti Abdul Rahman","Pn. Dg Wan Shazwani binti Ag. Ibrahim","Pn Shiendma binti Simen"], gkmp:"Pn. Surijah binti Satari", tema:"BERTANGGUNGJAWAB", tajuk:"Awas Bahan Terlarang!"},
  {m:38, t:"26–30 Okt", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"BERTANGGUNGJAWAB", tajuk:"Jenayah Siber"},
  {m:39, t:"02–06 Nov", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"KASIH SAYANG", tajuk:"Kepedulian Jiran Tetangga"},
  {m:40, t:"09–13 Nov", guru:["En. Afandy bin Yubah","Pn. Dayang Siti Farhanah binti Sulaiman","En. Roland T. Moujip","Pn. Jemaya binti Wasiman","Pn. Alicia Selvester Awang","Pn. Reja Healfris Adon","Pn. Dg. Nor Junah binti Awang Mohd Yousoff","Pn. Siti Hajar binti Zakaria"], gkmp:"En. Ronezal bin Duin", tema:"CUTI", tajuk:"Cuti Deepavali (Isnin & Selasa)"},
  {m:41, t:"16–20 Nov", guru:["Pn. Dgku. Saadiah binti Awg. Alimat","En. Shahrulhafiz bin Md. Zain","Ustaz Mohd Iqbal Izzet bin Duraman","Ustazah Dg. Siti Masliana binti Talip","Pn. Siow Hui Lee","Pn. Halimah binti Abdul Rahman","Pn. Dg Wan Shazwani binti Ag. Ibrahim","Pn Shiendma binti Simen"], gkmp:"Pn. Surijah binti Satari", tema:"PEPERIKSAAN", tajuk:"Peperiksaan Akhir Tahun"},
  {m:42, t:"23–27 Nov", guru:["En. Afandi bin Yahya","Pn. Rukiah binti Abdullah","Pn. Noorfidah binti Abd. Razak","Pn. Jessie Lawrence Ening","Pn. Kamsiah binti Sidek","Pn. Norasiah binti Maidin","Pn. Noraidah binti Suntang","Ustazah Dg. Norafiqah binti Mohd Said"], gkmp:"En. Madzani @Saidie bin Nusa", tema:"PEPERIKSAAN", tajuk:"Peperiksaan Akhir Tahun & UASA"},
  {m:43, t:"30 Nov–04 Dis", guru:["Pn. Eva Mayse Laurence","Pn. Fatma Wati binti Ainuddin","Pn. Norlina binti Zaini","Pn. Dg. Fatimahwati binti Pg. Yahya","Pn. Hasimah binti Sitam","Pn. Liew Wen Jun","Ustazah Nooraffiza binti Osman","Pn. Arinah binti Ajuk @ Ajok"], gkmp:"Pn. Azalina binti Abd. Wahap", tema:"PEPERIKSAAN", tajuk:"SPM"},
  {m:"CUTI", t:"05–31 Dis", guru:["—"], gkmp:"—", tema:"CUTI", tajuk:"Cuti Akhir Persekolahan Tahun 2026"},
];

const LOGO_URL = 'https://i.ibb.co/XZmRd56Q/1-1.png';

const sltList = [
  { role: "Pengetua", roleClass: "amber", nama: "En. Banjamin @ Ismail bin Atin", meta: "Gred DG14 | Opsyen: Ekonomi/Akaun", photo: "assets/images/slt/pengetua.jpg" },
  { role: "Penolong Kanan Pentadbiran", roleClass: "green", nama: "Pn. Noor Liana binti Abdullah", meta: "Gred DG12 | Opsyen: Biologi", photo: "assets/images/slt/liana.jpg" },
  { role: "PK Hal Ehwal Murid", roleClass: "purple", nama: "En. A.M. Norjaini bin Awang Besar", meta: "Gred DG12 | Opsyen: Bahasa Melayu", photo: "assets/images/slt/norjaini.jpg" },
  { role: "PK Kokurikulum", roleClass: "amber", nama: "En. A. Matusin bin Pg. Rambang", meta: "Gred DG12 | Opsyen: Geografi", photo: "assets/images/slt/matusin.jpg" }
];

const gkmpList = [
  { role: "GKMP Bahasa", roleClass: "blue", nama: "Pn. Surijah binti Satari", meta: "Gred DG12 | Kesusasteraan Melayu", photo: "assets/images/gkmp/surijah.jpg" },
  { role: "GKMP Sains & Matematik", roleClass: "green", nama: "En. Ronezal bin Duin", meta: "Gred DG12 | Matematik/Fizik", photo: "assets/images/gkmp/ronezal.jpg" },
  { role: "GKMP TVET", roleClass: "purple", nama: "Ts. Madzani @ Saidie bin Nusa", meta: "Gred DG14 | Sejarah / P. Moral", photo: "assets/images/gkmp/madzani.jpeg" },
  { role: "GKMP Sains Sosial", roleClass: "amber", nama: "Cik Azalina binti Abdul Wahap", meta: "Gred DG12 | Sejarah", photo: "assets/images/gkmp/azalina.jpg" }
];

const guruList = [
  { nama: "Afandi bin Yahya", photo: "assets/images/guru/afandiyahya.jpg", featured: true },
  { nama: "Afandy bin Yubah", photo: "assets/images/guru/afandyyubah.jpg", featured: true },
  { nama: "Alicia Selvester Awang", photo: "assets/images/guru/alicia.jpg", featured: true },
  { nama: "Arinah binti Ajuk @ Ajok", photo: "assets/images/guru/arinah.jpg", featured: true },
  { nama: "Dg. Fatimahwati binti Pg. Yahya", photo: "assets/images/guru/fatimahwati.jpg" },
  { nama: "Dgku. Saadiah binti Awg. Alimat", photo: "assets/images/guru/saadiah.jpg" },
  { nama: "Dayang Siti Farhanah binti Sulaiman", photo: "assets/images/guru/farhana.jpg" },
  { nama: "Dg. Nor Junah Awang Mohd Yousoff", photo: "assets/images/guru/junah.jpg" },
  { nama: "Dg. Siti Masliana binti Talip", photo: "assets/images/guru/masliana.jpg" },
  { nama: "Dg Wan Shazwani binti Ag. Ibrahim", photo: "assets/images/guru/wan.jpg" },
  { nama: "Eva Mayse Laurence", photo: "assets/images/guru/eva.jpg" },
  { nama: "Fatma Wati binti Ainuddin", photo: "assets/images/guru/fatma.jpg" },
  { nama: "Halimah binti Abdul Rahman", photo: "assets/images/guru/halimah.jpg" },
  { nama: "Hasimah binti Sitam", photo: "assets/images/guru/hasimah.jpg" },
  { nama: "Jemaya binti Wasiman", photo: "assets/images/guru/jemaya.jpg" },
  { nama: "Jessie Lawrence Ening", photo: "assets/images/guru/jessie.jpg" },
  { nama: "Kamsiah binti Sidek", photo: "assets/images/guru/kamsiah.jpg" },
  { nama: "Liew Wen Jun", photo: "assets/images/guru/jun.jpeg" },
  { nama: "Mohd Iqbal Izzet bin Duraman", photo: "assets/images/guru/iqbal.jpg" },
  { nama: "Nooraffiza binti Osman", photo: "assets/images/guru/noorfizah.jpg" },
  { nama: "Noorfidah binti Abd. Razak", photo: "assets/images/guru/noorfidah.jpg" },
  { nama: "Noraidah binti Suntang", photo: "assets/images/guru/noraidah.jpg" },
  { nama: "Norasiah binti Maidin", photo: "assets/images/guru/norasiah.jpg" },
  { nama: "Norlina binti Zaini", photo: "assets/images/guru/norlina.jpg" },
  { nama: "Nurfatin binti Nasir", photo: "assets/images/guru/fatin.jpg" },
  { nama: "Reja Healfris Adon", photo: "assets/images/guru/reja.jpg" },
  { nama: "Roland T. Moujip", photo: "assets/images/guru/roland.jpg" },
  { nama: "Rukiah binti Abdullah", photo: "assets/images/guru/rukiah.jpg" },
  { nama: "Shahrulhafiz bin Md. Zain", photo: "assets/images/guru/hafiz.jpg" },
  { nama: "Shiendma binti Simen", photo: "assets/images/guru/shiedma.jpg" },
  { nama: "Siow Hui Lee", photo: "assets/images/guru/siow.jpg" },
  { nama: "Siti Hajar binti Zakaria", photo: "assets/images/guru/hajar.jpg" },
  { nama: "Ts. Madzani @ Saidie bin Nusa", photo: "assets/images/gkmp/madzani.jpeg" },
  { nama: "Ustazah Dg. Norafiqah binti Mohd Said", photo: "assets/images/guru/norafiqah.jpg" }
];

const kaunselorList = [
  { nama: "En. Mohammad Nizar bin Abdul Miri", jawatan: "Guru Bimbingan & Kaunseling", tugas: "Pembimbing Rakan Sebaya / Cegah Buli", photo: "assets/images/kaunselor/nizar.jpg" },
  { nama: "En. Mohammed Lutfi bin Mohd Kalid", jawatan: "Guru Bimbingan & Kaunseling", tugas: "Sekolah Penyayang / ADNI", photo: "assets/images/kaunselor/lutfi.jpg" }
];

const akpList = [
  { nama: "Ag. Abdul Rahim bin Ag. Damit", photo: "assets/images/akp/rahim.jpg" },
  { nama: "Ag. Syamsuri bin Ag. Kadir", photo: "assets/images/akp/syamsuri.jpg" },
  { nama: "Jamaludin bin Matusin", photo: "assets/images/akp/jamal.jpg" },
  { nama: "Masdianah binti Martin", photo: "assets/images/akp/masdiana.jpg" },
  { nama: "Masnie binti Moksin", photo: "assets/images/akp/masnie.jpg" },
  { nama: "Mohd Suhaili bin Ag. Damit", photo: "assets/images/akp/suhaili.jpg" },
  { nama: "Norhayati binti Mahmud", photo: "assets/images/akp/norhayati.jpg" },
  { nama: "Siti Animah binti Ismail", photo: "assets/images/akp/sitianimah.jpg" },
  { nama: "Thressie Jean Charly", photo: "assets/images/akp/thressie.jpg" }
];

window.jadualData = jadualData;
window.LOGO_URL = LOGO_URL;
window.sltList = sltList;
window.gkmpList = gkmpList;
window.guruList = guruList;
window.kaunselorList = kaunselorList;
window.akpList = akpList;

