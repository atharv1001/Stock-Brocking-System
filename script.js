 // For Lottie Animation //
 function displayLottieAnimation() {
  // Replace 'animation_lmmae5dr.json' with the actual path to your JSON file
  const animationPath = 'Assets/Home-Lottie.json';


  const container = document.getElementById('lottie-container');
  
  // Load and display the Lottie animation
  const animation = lottie.loadAnimation({
      container: container,
      renderer: 'canvas', // You can choose 'canvas' or 'svg' as the renderer
      loop: true,
      autoplay: true,
      path: animationPath
  });
}

// Call the function to display the Lottie animation when the page loads

window.onload = displayLottieAnimation;


// Typing Animation

document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed(".auto-type", {
    strings: ["Trading&#128200;", "Strategies&#128161;", "Portfolio&#128269;", "News&#128240; "],
    typeSpeed: 130,
    backSpeed: 130,
    loop: true,
  });
});


//  for wow.js//


// document.addEventListener('DOMContentLoaded', function () {
//   var typed = new Typed(".write", {
//     strings: ["Open a Free Demat Account in 10 Minutes </br>Embark on your trading journey with confidence and expertise!!"],
//     typeSpeed: 30,
//     // backSpeed: 50,
//     // loop: true,
//     showCursor: false,
    
//   });
// });



document.addEventListener('DOMContentLoaded', function () {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  var typedInitialized = false;
  var writeText = document.querySelector(".write");

  function initTypedIfInView() {
    if (!typedInitialized && isElementInViewport(writeText)) {
      var typed = new Typed(".write", {
        strings: ["Open a Free Demat Account in 10 Minutes </br>Embark on your trading journey with confidence and expertise!!"],
        typeSpeed: 25,
        showCursor: false,
      });
      typedInitialized = true;
    }
  }

  // Check if the element is in the viewport when the page loads
  initTypedIfInView();

  // Check if the element is in the viewport when the user scrolls
  window.addEventListener("scroll", initTypedIfInView);
});





// for Founder

// document.addEventListener('DOMContentLoaded', function () {
//   var typed = new Typed(".ceo-intro", {
//     strings: ["Atharv M Darp </br>Founder / CEO StockPlus<sup>+</sup>"],
//     typeSpeed: 50,
//     // backSpeed: 50,
//     // loop: true,
//     showCursor: false,
    
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  var typedInitialized = false;
  var ceoIntro = document.querySelector(".ceo-intro");

  function initTypedIfInView() {
    if (!typedInitialized && isElementInViewport(ceoIntro)) {
      var typed = new Typed(".ceo-intro", {
        strings: ["Atharv M Darp </br>Founder / CEO StockPlus<sup>+</sup>&#x26A1;"],
        typeSpeed: 40,
        showCursor: false,
      });
      typedInitialized = true;
    }
  }

  // Check if the element is in the viewport when the page loads
  initTypedIfInView();

  // Check if the element is in the viewport when the user scrolls
  window.addEventListener("scroll", initTypedIfInView);
});



// js for popup for support 

function support_pop(){
  alert(" Thanks for connecting us , We will contact you soon..."); 
}




