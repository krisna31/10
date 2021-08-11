
// beri style list nonen kepada semua li menggunakan pengulangan
const allLi = document.getElementsByTagName('li');
for (let i = 0; i < allLi.length; i++) {
  allLi[i].style.listStyle = 'none';
  allLi[i].style.marginLeft = '-50px'
}

// list
const uList = document.querySelector('ul');
uList.setAttribute('id', 'ulist')

// bg1
const bg1 = document.getElementById('bg1');
bg1.addEventListener('click', function () {
  document.body.style.backgroundColor = 'lightblue';
});

// bg 2 toogle
const bg2 = document.querySelector('ul#ulist li:nth-child(3) button')
bg2.addEventListener('click', function () {
  document.body.style.backgroundColor = 'lightgreen';
});

// toggle
const tog = document.getElementsByClassName('toggle')[0];
tog.onclick = function () {
  document.body.classList.toggle('abuAbu')
}

// buat elemen baru li-button-text
const lBaru = document.getElementById('liBaru');
const tBaru = document.createElement('button');
const teksButton = document.createTextNode('Random');
const list4 = document.getElementsByTagName('li')[4];
tBaru.appendChild(teksButton);
lBaru.appendChild(tBaru);
lBaru.after(list4);
tBaru.setAttribute('type', 'button')
// masukkan event random color backColor
lBaru.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


// buat elemen baru input[range] idk why fail
// const inPut = document.createElement('input');
// const koRed = document.getElementsByClassName('red')[0];
// inPut.setAttribute('type', 'range');
// inPut.after(koRed);
// inPut adalah inPut yg tipenya range

// warna real time dengan input range
const k1 = document.querySelector('input[name=sred]')
const k2 = document.querySelector('input[name=sgreen]')
const k3 = document.querySelector('input[name=sblue]')
k1.addEventListener('input', function () {
  const r = k1.value;
  const g = k2.value;
  const b = k3.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})
k2.addEventListener('input', function () {
  const r = k1.value;
  const g = k2.value;
  const b = k3.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})
k3.addEventListener('input', function () {
  const r = k1.value;
  const g = k2.value;
  const b = k3.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})


// warna bgcolor body dengan pakai posisi koordinat kursor
tanya = confirm('mau coba nentuin warna pake koordinat mouse/touchscreen?')
if (tanya == true) {
  document.body.style.height = '100%'
  document.body.addEventListener('mousemove', function (e) {
    const red = Math.round((e.clientX / innerWidth) * 255)
    const gree = Math.round((e.clientY / innerHeight) * 255)
    document.body.style.backgroundColor = 'rgb(' + red + ',' + gree + ',88)'
  })
}