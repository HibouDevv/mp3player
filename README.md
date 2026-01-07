# mp3player
This project is a simple browser‑based audio player that loops through multiple MP3 files in sequence. When the last track finishes, the playlist automatically restarts from the beginning. Everything runs locally in your browser — no uploads, no server, no dependencies.

---

## How to Use

1. **Prepare your audio files**
   - Place your `.mp3` files (e.g., `song1.mp3`, `song2.mp3`, `song3.mp3`) in the same directory as your HTML file.
   - Update the `files` array in the script to match your filenames.

2. **Open the file in a browser**
   - Double-click the HTML file to open it in your default web browser.
   - The player will start automatically and cycle through your songs.

---

## Troubleshooting

- **Audio files not playing?**
  - Ensure the filenames in the `files` array exactly match your `.mp3` files (including capitalization).
  - Check that the audio files are in the same folder as your HTML file.

- **Player controls not showing?**
  - Make sure your browser supports HTML5 audio.
  - Try opening the file in a different browser (Chrome, Firefox, Edge, etc.).

- **Want to add more songs?**
  - Simply add more filenames to the `files` array, e.g.:
    ```javascript
    const files = [
      "song1.mp3",
      "song2.mp3",
      "song3.mp3",
      "song4.mp3"
    ];
    ```

- **Player not looping?**
  - Verify that the `ended` event listener is correctly attached and that the `playNext` function is called.

---

## Customization

- **Change the order of songs**
  Rearrange the filenames in the `files` array.

- **Start with a specific song**
  Set the `index` variable to the desired starting position (0 is the first song).

- **Add more controls**
  You can add buttons for play/pause, next, and previous using additional JavaScript and HTML.
