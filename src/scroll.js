// let isScrolling= false;
// window.onload = function () {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             isScrolling = true;
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// };


// let isScrolling = false;

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     isScrolling = true;
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//       inline: 'start'
//     });
//   });
// });

// window.addEventListener('scroll', function () {
//   if (isScrolling) {
//     window.scrollTo(0, 0);
//   }
// });

// document.addEventListener('scroll', function () {
//   if (isScrolling) {
//     document.scrollingElement.scrollTop = 0;
//   }
// });

// document.querySelector(this.getAttribute('href')/
window.onload = function () {
  let isScrolling = false;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      isScrolling = true;
      let target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
      target.addEventListener('scroll', function () {
        isScrolling = false;
      });
    });
  });


  window.addEventListener('wheel', function (e) {
    if (isScrolling) {
      // e.preventDefault();
    }
  });

  document.addEventListener('wheel', function (e) {
    if (isScrolling) {
      // e.preventDefault();
    }
  });
};






