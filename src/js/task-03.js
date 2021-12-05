const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
console.log(gallery);

// const galleryMarkup = images
//   .map(
//     ({ url, alt }) =>
//       `<li><img class="gallery-images" src="${url}" alt="${alt}" height = "520"></li>`
//   )
//   .join("");

// gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

function addGallerysPhoto(arrOfPhotos) {
  return arrOfPhotos
    .map(
      ({ url, alt }) =>
        `<li><img class="gallery-images" src="${url}" alt="${alt}" height = "520"></li>`
    )
    .join("");
}

const result = addGallerysPhoto(images);

gallery.insertAdjacentHTML("afterbegin", result);

// const imgEl = document.querySelectorAll(".gallery-images");
// console.log(imgEl);
// for (const img of imgEl) {
//   img.style.height = "520px";
// }

gallery.style.display = "flex";
gallery.style.flexDirection = "column";
gallery.style.alignItems = "center";
gallery.style.listStyle = "none";
