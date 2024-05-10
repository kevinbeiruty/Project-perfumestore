function toggleSearch() {
    var inputField = document.getElementById('search-input');
    if (inputField.style.display === 'none') {
        inputField.style.display = 'block';
        inputField.focus(); 
    } else {
        inputField.style.display = 'none';
    }
}

function addToCart() {
    window.location.href = "finalprojectcart.html";
}

function redirectToCart(clickedButton) {
    var product = clickedButton.parentNode.cloneNode(true);
    var buttonToRemove = product.querySelector("button");
    buttonToRemove.remove();
    var productHTML = product.outerHTML;
    localStorage.setItem("product", productHTML);
    alert("Item added to cart successfully!");
    window.location.href = "finalprojectcart.html";
}



var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


const topicURLs = [
    'finalproject.html',
    'finalproject2.html',
    'finalproject4.html',
    'finalproject5.html'
];

let currentIndex = 0;

function navigateTopic(event, url) {
    event.preventDefault();
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navigateTopic(event, topicURLs[currentIndex]);
        });
    });
});



