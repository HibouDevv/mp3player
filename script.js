const files = [
  "achkid.mp3",
  "we gonna dance.mp3",
  "marroquinos.mp3",
  "marhba bikom 1.mp3",
  "lmaghribiya.mp3",
  "africa.mp3",
  "time for africa.mp3",
  "marhba bikom 2.mp3",
  "players.mp3",
  "allahalwatanalmalik.mp3"
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
