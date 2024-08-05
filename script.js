// hero section start============================
TweenMax.staggerFrom(
  ".hero_container .head_div .head1",
  1.5,
  {
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut,
    delay: 0.5,
  },
  0.09
);
TweenMax.staggerFrom(
  ".hero_container .head_div .head2 span",
  1,
  {
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut,
    delay: 0,
  },
  0.09
);
TweenMax.staggerFrom(
  ".hero_section .circle1,.hero_section .circle2",
  2.5,
  {
    opacity: 0,
    scale: 0.5,
    ease: Expo.easeOut,
    delay: 0.2,
  },
  0.09
);
// hero section end===============================
// ==================================================================
// about section start============================
document.addEventListener("mousemove", function (e) {
  updateCursorPosition(e.clientX, e.clientY);
});

document.addEventListener("scroll", function () {
  updateCursorPosition(lastMouseX, lastMouseY);
});

var lastMouseX = 0;
var lastMouseY = 0;

function updateCursorPosition(mouseX, mouseY) {
  lastMouseX = mouseX;
  lastMouseY = mouseY;

  gsap.to(".maskington", {
    duration: 0,
    left: mouseX + window.pageXOffset,
    top: mouseY + window.pageYOffset - (100 * window.innerHeight) / 100 - 5,
    ease: "power2.out",
  });

  gsap.to(".maskington .module", {
    duration: 0,
    x: -(mouseX + window.pageXOffset),
    y: -(mouseY + window.pageYOffset - (100 * window.innerHeight) / 100 - 5),
    ease: "power2.out",
  });
}
// about section end============================
// ==================================================================
// contact section start==========================
document.addEventListener('DOMContentLoaded', () => {
  let contactContainer = document.querySelector('.contact_container');
  let imgBox = contactContainer.querySelector('.img_box');

  // Calculate offset
  const containerRect = contactContainer.getBoundingClientRect();
  
  // Update image box position on mouse move
  document.body.onmousemove = (e) => {
    let x = e.clientX - containerRect.left+95;
    let y = e.clientY - containerRect.top+60;
    
    imgBox.style.top = y + 'px';
    imgBox.style.left = x + 'px';
  };

  // Change image source on hover
  contactContainer.querySelectorAll('.contacts').forEach(contact => {
    contact.onmouseenter = () => {
      imgBox.src = contact.getAttribute('data-src');
    };
  });
});

// contact section end============================