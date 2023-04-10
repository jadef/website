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
const body = document.querySelector("body");
const randomNum = Math.floor(Math.random() * 10) + 1; // images random numbered 1-10
body.style.setProperty(
  "--bg-image",
  `url('../images/background${randomNum}.jpg')`
);
