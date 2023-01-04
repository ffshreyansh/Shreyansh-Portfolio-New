




const navbar = document.querySelector('.navbar');
const navbar2 = document.querySelector('#homePage');
const footer = document.querySelector('#footer');
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
  footer.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 2000);

window.addEventListener("scroll", function() {
  var scrollableDistance = document.body.scrollHeight - window.innerHeight;
  var scrollProgress = (window.pageYOffset / scrollableDistance) * 100;
  document.getElementById("scrollProgressBar").style.width = scrollProgress + "%";
});

// Writings Scrollable Setting============================================


// const fixedElement = document.querySelector('.writing-heading');
// const scrollableDiv = document.querySelector('.articles');

// window.addEventListener('scroll', () => {
//   if (scrollableDiv.getBoundingClientRect().top <= 100) {
//     fixedElement.style.position = 'fixed';
//     fixedElement.style.top = '100px';
//     // fixedElement.style.width = '24%';  
//   } else {
//     fixedElement.style.position = 'absolute';
//     fixedElement.style.top = 'auto';
//     fixedElement.style.width = '24%';  
//   }
// });


//   const aboutElement = document.querySelector('#about');

// window.addEventListener('scroll', () => {
//   if (aboutElement.getBoundingClientRect().top <= window.innerHeight) {
//       fixedElement.style.position='static';
//   }
// });


