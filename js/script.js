function PindahKeHalaman(page) {
  var dalemnya_kontener = document.getElementsByClassName('dalemnya_kontener')[0];
  var sections = document.getElementsByClassName('dalemnya_halaman');
  
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before', 'after', 'active'); // Hapus kelas
    if (i === page) {
      sections[i].classList.add('active'); // Tambahkan kelas aktif pada halaman yang dipilih
    }
  }
  
  dalemnya_kontener.classList.add('buka_menu'); // Tampilkan kontener menu
}

function closePage(page) {
  var sections = document.getElementsByClassName('dalemnya_halaman');
  
  // Hapus kelas aktif dari section yang diklik
  sections[page].classList.remove('active');

  // Cek jika semua section sudah ditutup
  var allSectionsClosed = true;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].classList.contains('active')) {
      allSectionsClosed = false;
      break;
    }
  }

  if (allSectionsClosed) {
    var menuButton = document.getElementsByClassName('tombol_menu')[0];
    menuButton.classList.remove('open'); // Kembalikan tombol menu ke tampilan semula
    var kontener = document.getElementsByClassName('dalemnya_kontener')[0];
    kontener.classList.remove('buka_menu'); // Sembunyikan kontener
  }
}

document.getElementsByClassName('tombol_menu')[0].onclick = klikMenu;

function klikMenu() {
  var menuButton = document.getElementsByClassName('tombol_menu')[0];
  var kontener = document.getElementsByClassName('dalemnya_kontener')[0];

  // Toggle the class untuk menunjukkan atau menyembunyikan menu
  menuButton.classList.toggle('open');
  kontener.classList.toggle('buka_menu');
}
