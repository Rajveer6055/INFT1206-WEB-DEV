const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Create a data object
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];



// Base URL for the images
const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Loop through the images
for (const image of images) {
  const newImage = document.createElement("img");

  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;

  thumbBar.appendChild(newImage);

  // Show the full-size image when a thumbnail is clicked
  newImage.addEventListener("click", updateDisplayedImage);
}

// Update the displayed image
function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// Darken/Lighten button
btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }

  btn.classList.toggle("dark");
});
