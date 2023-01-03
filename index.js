const navbar = document.querySelector('.navbar');
const navbar2 = document.querySelector('#homePage');
let colorIndex = 0;
const colors = [
  'rgb(241, 250, 238)',
  'rgb(255, 240, 243)',
  'rgb(253, 252, 220)',
  'rgb(255, 251, 255)',
];

setInterval(() => {
  navbar.style.backgroundColor = colors[colorIndex];
  navbar2.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 2000);

window.addEventListener("scroll", function() {
  var scrollableDistance = document.body.scrollHeight - window.innerHeight;
  var scrollProgress = (window.pageYOffset / scrollableDistance) * 100;
  document.getElementById("scrollProgressBar").style.width = scrollProgress + "%";
});