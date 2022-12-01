const images = [
  "images/img1.png",
  "images/img2.png",
  "images/img3.png",
  "images/img4.png",
  "images/img5.png",
  "images/img6.png",
  "images/img7.png",
  "images/img8.png",
];

function renderImage() {
  const container = document.createElement("div");
  container.style =
    "width: 220px; height: 200px; boder: 1px solid white; margin: 0 auto";
  const randomImg = images[Math.trunc(Math.random() * 8)];
  container.style.background = `url(${randomImg})`;
  document.body.append(container);
}

renderImage();
