document.addEventListener("DOMContentLoaded", function() {
                        
    const inputs = document.querySelectorAll('#data');

    inputs.forEach(function(input) {
        input.addEventListener('input', function(event) {
            let value = event.target.value.replace(/\D/g, '').substring(0, 8);

            if (value.length > 4) {
                value = value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');

            } else if (value.length > 2){
                value = value.replace(/(\d{2})(\d{2})/, '$1/$2');

            }

            event.target.value = value;

        });
    });
});

const inputfile = document.querySelector('#input-img');
const pictureImage = document.querySelector('bi-image');
const pictureImageTxt = ('Escolha uma imagem');



inputfile.addEventListener('change', function(e) {
    const inputTarget = e.target;
    console.log(inputTarget);
    const file = inputTarget.files[0];

    if (file){
        const reader = new FileReader();
        reader.addEvenrtListener('load', function(e) {
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('picture');

            pictureImage.innerHTML = '';
            pictureImage.appendChild(img);

            
        });

        reader.readAsDataURL(file);

    }else{
        pictureImage.innerHTML = pictureImageTxt;
    }
    console.log(file);
})
