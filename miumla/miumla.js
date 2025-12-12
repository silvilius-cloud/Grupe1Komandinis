// b. Sukurti mygtuką, kurį paspaudus jo forma pasikeičia į apskritimą, o paspaudus dar kartą grįžta į pradinę formą;

const buttonCircleSquare = document.querySelector('.miumlaB button');

buttonCircleSquare.innerText = 'Aš galiu būti apvalus';

buttonCircleSquare.classList.add('miumlaBsquare');
buttonCircleSquare.style.borderRadius = '5px';


buttonCircleSquare.addEventListener('click', _ => {
    if (buttonCircleSquare.style.borderRadius == '5px') {
        buttonCircleSquare.style.borderRadius = '100px'
        buttonCircleSquare.innerText = 'Aš galiu būti stačiakampis';
        buttonCircleSquare.classList.replace('miumlaBsquare', 'miumlaBcircle');
        
    } else {
        buttonCircleSquare.innerText = 'Aš galiu būti apvalus';
        buttonCircleSquare.style.borderRadius = '5px'
        buttonCircleSquare.classList.replace('miumlaBcircle', 'miumlaBsquare');
    }

});


// h. Sukurti text tipo input laukelį, mygtuką “Pridėti” ir tuščią sąrašą <ol>. Į input laukelį įrašius žodį ir paspaudus “Pridėti”, žodis turi atsirasti sąraše. 
//Sąrašas visada turi būti išrūšiuotas pagal abėcėlę; 

const buttonH = document.querySelector('.miumlaH button');

buttonH.addEventListener('click', _ => {
    const inputH = document.querySelector('.miumlaH input');

    if (inputH.value.trim() != '') {

        const listH = document.querySelector('.miumlaH ol');
        const liH = document.createElement('li');
        liH.innerText = inputH.value.trim();
        listH.appendChild(liH);

        const allItemsNodelist = document.querySelectorAll('.miumlaH ol li');
        const allItemsArray = Array.from(allItemsNodelist);
        allItemsArray.sort((a, b) => a.innerText.localeCompare(b.innerText));
        listH.innerHTML = '';  
        allItemsArray.forEach(li => listH.appendChild(li));

    }
    inputH.value = '';

});










