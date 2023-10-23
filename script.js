const restaurantImages = document.querySelectorAll(".restaurant");


let i = 0; // Initialize i to 0

function changeImage() {

    restaurantImages.forEach(image => {
        image.style.opacity = 0;
    });


    // Show the next restaurant image by incrementing i
    i++;
    if (i >= restaurantImages.length) {
        i = 0;
    }
    restaurantImages[i].style.opacity = 1;
    
}

setInterval(changeImage, 1800);