        const buttonX = document.getElementById('buttonX');
        const buttonO = document.getElementById('buttonO');
        const textInput = document.getElementById('textInput');
        const mirrorOutput = document.getElementById('mirrorOutput');
        
        document.addEventListener('click', e => {
            if (e.target === buttonX || e.target === buttonO) {
                [buttonX.textContent, buttonO.textContent] = 
                [buttonO.textContent, buttonX.textContent];
            }
        });
        
        textInput.addEventListener('input', () => {
            mirrorOutput.textContent = textInput.value;
        });