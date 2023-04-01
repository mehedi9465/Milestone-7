const images = [
    'images/apple-256261_1920.jpg',
    'images/coffee-beans-1291656_1920.jpg',
    'images/raspberries-2023404_1920.jpg',
    'images/salad-2756467_1920.jpg',
    'images/vegetables-1085063_1920.jpg',
    'images/vegetables-752153_1920.jpg'
];

let imgIndex = 0;
const slider = document.getElementById('imageSlide')
setInterval(() => {
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    slider.setAttribute('src', images[imgIndex]);
    imgIndex++;
}, 2000);