const files = [
  "song1.mp3",
  "song2.mp3",
  "song3.mp3"
];

let index = 0;
const player = document.getElementById("player");

function playNext() {
  player.src = files[index];
  player.play();
  index = (index + 1) % files.length; // loop back to start
}

player.addEventListener("ended", playNext);
playNext();
