console.log('Testity test! Linas.');

// Uzduotis E
//
//
const box = document.querySelector('.l-cnasE');

// input,output
const i1 = document.createElement('input');
const zenkliukas = document.createElement('div');
const i2 = document.createElement('input');
const suma = document.createElement('div');
const gaunam = document.createElement('div');

zenkliukas.innerText = '+';
suma.innerText = '=';
gaunam.innerText = 'Iveskite skaicius';

// append vs appendChild - append gali kelis imest vienu metu ten kur norim. 
box.append(i1, zenkliukas, i2, suma, gaunam);

// logic
function update() {
    const a = Number(i1.value);
    const b = Number(i2.value);

    if (i1.value !== '' && i2.value !== '' && !isNaN(a) && !isNaN(b)) {
        gaunam.innerText = a + b;
    } else {
        gaunam.innerText = 'Iveskite skaicius';
    }
}

// listeners
i1.addEventListener('input', update);
i2.addEventListener('input', update);



// Uzduotis I
//
//

const lcnasI = document.querySelector('.l-cnasI');

const visiKv = document.createElement('div');
visiKv.className = 'visi-kv';

const info = document.createElement('div');
info.className = 'kv-info';

const kv1 = document.createElement('div');
const kv2 = document.createElement('div');
const kv3 = document.createElement('div');

kv1.className = 'kv kv1';
kv2.className = 'kv kv2';
kv3.className = 'kv kv3';

kv2.append(kv3);
kv1.append(kv2);
visiKv.append(kv1);

lcnasI.append(visiKv, info);

// KV 1
kv1.addEventListener('click', (e) => {
    e.stopPropagation();
    info.innerText = 'Kvadratas 1';
    info.style.backgroundColor = getComputedStyle(kv1).backgroundColor;
});

// KV 2
kv2.addEventListener('click', (e) => {
    e.stopPropagation();
    info.innerText = 'Kvadratas 2';
    info.style.backgroundColor = getComputedStyle(kv2).backgroundColor;
});

// KV 3
kv3.addEventListener('click', (e) => {
    e.stopPropagation();
    info.innerText = 'Kvadratas 3';
    info.style.backgroundColor = getComputedStyle(kv3).backgroundColor;
});

