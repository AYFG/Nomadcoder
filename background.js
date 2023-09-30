const images = ["sea.jpg", "autumn.jpg", "forest.jpg"];

const chooseImage = images[Math.floor(Math.random() * images.length)];

// console.log(chooseImage);

const bgImage = document.createElement("img");

// console.log(bgImage);

bgImage.src = `img/${chooseImage}`;

// console.log(bgImage);

document.body.appendChild(bgImage);
