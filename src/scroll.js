
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


  // window.addEventListener('wheel', function (e) {
  //   if (isScrolling) {
  //     // e.preventDefault();
  //   }
  // });

  // document.addEventListener('wheel', function (e) {
  //   if (isScrolling) {
  //     // e.preventDefault();
  //   }
  // });
};






