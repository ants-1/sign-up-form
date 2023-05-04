const inputs = document.querySelectorAll("input");

inputs.forEach(function(input) {
    input.addEventListener('change', (input) => {
        const isValid = input.target.checkValidity();
        if (isValid) {
            input.target.style.borderColor = "Green";
        } else {
            input.target.style.borderColor = "Red";
            input.target.setAttribute("invalid", !isValid);
        }
    })
});

  
  