let button = document.getElementById("Btn");

button.addEventListener("click", function(event) {
    button.style.backgroundColor = "red";
    event.stopPropagation(); 
});

document.addEventListener("click", function() {
    button.style.backgroundColor = "yellow";
});




