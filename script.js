"use strict";

///Play video on hover
const video = document.querySelector("video");
const videoLink = document.querySelector(".about__aftermovie-link");

videoLink.addEventListener("mouseenter", function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
videoLink.addEventListener("mouseleave", function () {
  if (video.play) {
    video.pause();
  }
});

//if video ends then loop
video.addEventListener("ended", function () {
  video.currentTime = 0;
  video.play();
});

//Toggle popup

const volunteerBtn = document.querySelector(".cta__btn");
const popup = document.querySelector(".popup");
const popupIcon = document.querySelector(".popup__icon");

volunteerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.toggle("hidden");
});

popupIcon.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.toggle("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    popup.classList.add("hidden");
  }
});

const headerMenu = document.querySelector(".header__menu");

headerMenu.addEventListener("click", function () {
  headerMenu.classList.toggle("active");
});
