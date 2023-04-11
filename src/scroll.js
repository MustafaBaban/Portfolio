

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
      // const href = anchor.getAttribute('href');
      // const hrefWithoutHash = href.replace('#', '');
    });
   
  });

  if (isiPhone()) {
    alert(postion);
    setTimeout(function() {
      // location.reload();
      
    }, 500);
  } else {
    // alert('This is not an iPhone');
  }

};



function isiPhone() {
  return /iPhone/i.test(navigator.userAgent);
}

function watchForElement(elementId, callback) {
  // Create a mutation observer to listen for DOM changes
  const observer = new MutationObserver(function (mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === Node.ELEMENT_NODE && node.id === elementId) {
            callback(node);
          }
        });
      }
    }
  });

  // Observe the entire document body and its subtree for DOM changes
  observer.observe(document.body, { childList: true, subtree: true });
}

function onElementAdded(element) {

  if (isiPhone()) {
    setTimeout(function() {
      element.scrollIntoView();
    }, 500);
  } else {
    // alert('This is not an iPhone');
  }
}

// Watch for the addition of an element with the 'target-element' ID
watchForElement('home', onElementAdded);