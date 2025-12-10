function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

const brokeButton = document.querySelector('.brokeButton')
  brokeButton.addEventListener('click', e => {
    const r = rand(0, 256);
    const g = rand(0, 256);
    const b = rand(0, 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
  
const colorInput22 = document.getElementById('colorInput22');
    const colorNameDiv22 = document.getElementById('colorName22');

    async function updateColorName22(hexWithHash) {
      // Pašalinam # prieš siunčiant į API
      const hex = hexWithHash.replace('#', '');

      try {
        const response = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`);
        if (!response.ok) {
          throw new Error('HTTP klaida: ' + response.status);
        }

        const data = await response.json();

        // API grąžina spalvos vardą data.name.value
        const name = data.name && data.name.value ? data.name.value : 'Vardo nerasta';

        colorNameDiv22.textContent = `${name} (${hexWithHash})`;

        // Papildomai – nuspalvinam foną ir parenkam kontrastinę teksto spalvą iš API
        colorNameDiv22.style.backgroundColor = hexWithHash;
        if (data.contrast && data.contrast.value) {
          colorNameDiv22.style.color = data.contrast.value;
        } else {
          colorNameDiv22.style.color = '#000000';
        }
      } catch (error) {
        console.error(error);
        colorNameDiv22.textContent = 'Klaida gaunant spalvos vardą iš API';
        colorNameDiv22.style.backgroundColor = '';
        colorNameDiv22.style.color = '';
      }
    }

    // Reaguojam, kai vartotojas pasirenka spalvą
    colorInput22.addEventListener('input', (e) => {
      updateColorName22(e.target.value);
    });

    // Užkraunam pavadinimą pradinei vertei
    updateColorName22(colorInput22.value);