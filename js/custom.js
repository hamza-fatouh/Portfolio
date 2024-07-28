!function (n) { "use strict"; n((function () { })), n(window).on("load", (function () { })) }(jQuery);
function sendEmail(event) {
    event.preventDefault();
    var name = document.getElementById('contact-name').value;
    var subject = document.getElementById('contact-subject').value;
    var message = document.getElementById('contact-message').value;
    var mailtoLink = 'mailto:hamzafottoh74@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + message);
    var tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.target = '_blank';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
}

var images = [];
var currentImageIndex = 0;

function showPopup(title, description, link, ...imgUrl) {
    images = []
    images = imgUrl;
    let src =images[currentImageIndex]
    currentImageIndex = 0;
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('popup-title').innerText = title;
    document.getElementById('opt-link').href = link 
    if (link !== "none")  
        document.getElementById('opt-link').style.display = 'block';
    else
        document.getElementById('opt-link').style.display = 'none';
    document.getElementById('popup-description').innerText = description;
    document.getElementById('carousel-img').src = src;
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function nextImage() {
    console.log(images)
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('carousel-img').src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('carousel-img').src = images[currentImageIndex];
}