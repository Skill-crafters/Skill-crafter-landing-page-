document.addEventListener("DOMContentLoaded", function () {
    const headingText = "Empower Your Learning Journey";
    const paragraphText =
      "Explore various learning paths, download study materials, and enhance your skills in web development, data structures and algorithms, and UI/UX design.";
  
    const headingElement = document.getElementById("typing-heading");
    const paragraphElement = document.getElementById("typing-paragraph");
  
    function typeWriter(element, text, speed) {
      let i = 0;
      element.innerHTML = "";
  
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          element.nextElementSibling.style.display = "none";
        }
      }
  
      type();
    }
  
    typeWriter(headingElement, headingText, 100);
    setTimeout(() => typeWriter(paragraphElement, paragraphText, 30), headingText.length * 100);
  });
  

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(error) {
        console.log('ServiceWorker registration failed: ', error);
      });
    });
  }