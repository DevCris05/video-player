const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", () => {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
});

$pause.addEventListener("click", () => {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
});

$backward.addEventListener("click", () => {
  $video.currentTime -= 10;
});

$forward.addEventListener("click", () => {
  $video.currentTime += 10;
});

const $progress = document.querySelector("#progress");
const $overlay = document.querySelector("#overlay");

$video.addEventListener("loadedmetadata", () => {
  $progress.max = $video.duration;
});

$video.addEventListener("timeupdate", () => {
  $progress.value = $video.currentTime;
  console.log($progress.value);
});

$progress.addEventListener("input", () => {
  $video.currentTime = $progress.value;
  console.log($video.currentTime);
});
