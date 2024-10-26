var pages = new Array('halaman1', 'halaman2', 'halaman3', 'halaman4');

function klikMenu() {
  var menuButton = document.getElementsByClassName('tombol_menu')[0];
  var kontener = document.getElementsByClassName('dalemnya_kontener')[0];

  // Toggle the class to show or hide the cross icon
  menuButton.classList.toggle('open');
  kontener.classList.toggle('buka_menu');
}

function PindahKeHalaman(page) {
  var dalemnya_kontener = document.getElementsByClassName('dalemnya_kontener')[0];
  var sections = document.getElementsByClassName('dalemnya_halaman');
  for (i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before', 'after');
    if (i > page) {
      sections[i].classList.add('after');
    }
  }
  dalemnya_kontener.classList.remove('buka_menu', 'page-halaman1', 'page-halaman2');
  dalemnya_kontener.classList.add('page-' + pages[page]);
}