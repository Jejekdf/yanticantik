function PindahKeHalaman(page) {
  var dalemnya_kontener = document.getElementsByClassName('dalemnya_kontener')[0];
  var sections = document.getElementsByClassName('dalemnya_halaman');
  
  for (i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before', 'after', 'active'); // Hapus kelas aktif
    if (i > page) {
      sections[i].classList.add('after');
    } else {
      sections[i].classList.add('active'); // Tambahkan kelas aktif
    }
  }
  
  dalemnya_kontener.classList.remove('buka_menu', 'page-halaman1', 'page-halaman2');
  dalemnya_kontener.classList.add('page-' + pages[page]);
}

function closePage(page) {
  var sections = document.getElementsByClassName('dalemnya_halaman');
  
  // Hapus kelas aktif dari section yang diklik
  sections[page].classList.remove('active');

  // Menampilkan tombol menu lagi jika semua section ditutup
  var allSectionsClosed = true;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].classList.contains('active')) {
      allSectionsClosed = false;
      break;
    }
  }

  if (allSectionsClosed) {
    var menuButton = document.getElementsByClassName('tombol_menu')[0];
    menuButton.classList.remove('open');
    var kontener = document.getElementsByClassName('dalemnya_kontener')[0];
    kontener.classList.remove('buka_menu');
  }
}
