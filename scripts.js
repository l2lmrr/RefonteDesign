const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navList.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach(container => {
    const overlay = container.querySelector(".overlay");

    container.addEventListener("mouseenter", () => {
      overlay.style.transition = "opacity 0.3s ease";
      overlay.style.opacity = "1";
    });

    container.addEventListener("mouseleave", () => {
      overlay.style.transition = "opacity 0.3s ease";
      overlay.style.opacity = "0";
    });
  });
});
const playButton = document.getElementById('play-button');
const videoContainer = document.getElementById('video-container');
const introVideo = document.getElementById('intro-video');

playButton.addEventListener('click', () => {
    videoContainer.classList.remove('hidden');
    // introVideo.src = 'https://www.youtube.com/embed/1vVk3_PFtOg?autoplay=1';
});


