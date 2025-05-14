const resimler = [
  "img/hobi1.jpg",
  "img/hobi2.jpg",
  "img/hobi3.jpg"
];

let aktifIndex = 0;

function degistirResim(yon) {
  aktifIndex += yon;

  if (aktifIndex < 0) {
    aktifIndex = resimler.length - 1;
  } else if (aktifIndex >= resimler.length) {
    aktifIndex = 0;
  }

  document.getElementById("galeriResim").src = resimler[aktifIndex];
}


// sevdiğim etkinlikler için
const etkinlikResimler = [
  "img/etkinlik1.jpg",
  "img/etkinlik2.jpg",
  "img/etkinlik3.jpg"
];

let etkinlikIndex = 0;

function degistirEtkinlikResim(yon) {
  etkinlikIndex += yon;
  if (etkinlikIndex < 0) etkinlikIndex = etkinlikResimler.length - 1;
  if (etkinlikIndex >= etkinlikResimler.length) etkinlikIndex = 0;
  document.getElementById("etkinlikResim").src = etkinlikResimler[etkinlikIndex];
}

