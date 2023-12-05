const overviewTab = document.querySelector('#overview');
const overviewSection = document.querySelector('.overview');
const homeSection = document.querySelector(".home");
const homeTab = document.getElementById("home");
const aboutSection = document.querySelector(".about");
const aboutTab = document.getElementById("about");
const casestudiesSection = document.querySelector(".case-studies");
const casestudiesTab = document.getElementById("casestudies");

document.addEventListener('DOMContentLoaded', function() {
    const h1Element = document.querySelector('.animate__backInLeft');
    h1Element.addEventListener('animationend', function() {
      setTimeout(function() {
        const h6Element = document.querySelector('h6');
        
        h6Element.classList.add('animate__animated', 'animate__fadeIn');
        h6Element.classList.add("revealanimated");
        h6Element.textContent = 'A small web development agency based in Chatham, Kent.';
      }, 200);
    });
  });

const navbarSection = document.querySelector('.navigate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navbarSection.classList.add('shadow-on-scroll');
    } else {
      navbarSection.classList.remove('shadow-on-scroll');
    }
  });
});

observer.observe(navbarSection);

  document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButton = document.querySelector('.col-4');

    learnMoreButton.addEventListener('click', function() {
        overviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    overviewTab.addEventListener('click', function() {
        overviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    });
});

function observeSection(section, tab) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tab.classList.add('navigate-current');
        } else {
          tab.classList.remove('navigate-current');
        }
      });
    });
  
    observer.observe(section);
  }
  
  observeSection(overviewSection, overviewTab);
  observeSection(homeSection, homeTab);
  observeSection(aboutSection, aboutTab);