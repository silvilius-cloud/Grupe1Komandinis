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

