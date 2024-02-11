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