// ---- Collapsing header height
const header = document.getElementById("top");
const h1 = header.querySelector("h1");
// const footer = document.getElementById("bottom");

window.onscroll = function () {
  const scrollPosition = window.scrollY;
  let headerHeight = 30 - scrollPosition * 0.2; // 30 is when to start scaling, 0.2 is the rate of scaling
  // let footerHeight = 30 - scrollPosition * 0.2;

  // keep height between 20vh and 5vh
  if (headerHeight > 20) {
    headerHeight = 20;
  } else if (headerHeight < 8) {
    headerHeight = 8;
  }

  // if (footerHeight > 10) {
  //   footerHeight = 10;
  // } else if (footerHeight < 4) {
  //   footerHeight = 4;
  // }

  header.style.height = headerHeight + "vh";
  h1.style.fontSize = (headerHeight / 20) * 4.5 + "rem";
  h1.style.lineHeight = headerHeight + "vh";
  // footer.style.height = footerHeight + "vh";
};

// ---- Background image

// Create a new Image object
const backgroundImage = new Image();
const body = document.querySelector("body");
const randomNum = Math.floor(Math.random() * 10) + 1; // images random numbered 1-10

// Add an onload event handler to set the background image once the image has finished downloading
backgroundImage.src = "images/background" + randomNum + ".jpg";
backgroundImage.onload = function () {
  body.style.setProperty("--bg-image", `url(${backgroundImage.src})`);
  body.classList.add("loaded");
};

backgroundImage.onerror = function () {
  console.log("Image failed to load!");
};
