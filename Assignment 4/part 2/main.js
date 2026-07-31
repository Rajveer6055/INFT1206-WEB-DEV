const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

//Images

const images = [
    { filename: "pic1.jpg", alt: "Human eye" },
    { filename: "pic2.jpg", alt: "Rock" },
    { filename: "pic3.jpg", alt: "Pansies" },
    { filename: "pic4.jpg", alt: "Tomb" },
    { filename: "pic5.jpg", alt: "Leaf" }
];

//url for all the images
const baseURL ="";

//Loop for image

for (const image of images) {
  const newImage = document.createElement("img");
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  newImage.tabIndex = "0";
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", updateDisplayedImage);
  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}

//

function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

//Dark and light mode

btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.textContent = "Light";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    btn.textContent = "Dark";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  btn.classList.toggle("dark");
});
