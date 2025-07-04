// // Typing animation for homepage
// const typingElement = document.getElementById("typing");
// const words = ["Hello, I'm Navaneetha", "Full Stack Developer", "Tech Enthusiast"];
// let wordIndex = 0;
// let charIndex = 0;
// let currentWord = "";
// let isDeleting = false;

// function type() {
//   currentWord = words[wordIndex];
  
//   if (isDeleting) {
//     charIndex--;
//   } else {
//     charIndex++;
//   }

//   typingElement.textContent = currentWord.substring(0, charIndex);

//   if (!isDeleting && charIndex === currentWord.length) {
//     isDeleting = true;
//     setTimeout(type, 1200);
//   } else if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     wordIndex = (wordIndex + 1) % words.length;
//     setTimeout(type, 300);
//   } else {
//     setTimeout(type, isDeleting ? 50 : 100);
//   }
// }

// type();



// Typing animation for homepage
const typingElement = document.getElementById("typing");
const words = ["Hello, I'm Navaneetha", "Full Stack Developer", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1200);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// Scroll animation using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-active");
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});

 const toggleBtn = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

 const form = document.querySelector("form");
  
  form.addEventListener("submit", function (e) {
    // Wait briefly after submission to allow Formspree to process
    setTimeout(() => {
      form.reset(); // Clears all fields
    }, 100); // You can increase this to 1000ms if needed
  });
