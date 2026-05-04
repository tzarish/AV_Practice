let button1 = document.querySelector("#button-one");
let button1_reset = document.querySelector("#button-one-reset");
let button2 = document.querySelector("#button-two");
let button2_reset = document.querySelector("#button-two-reset");

let video1 = document.querySelector("#video-one");
let video2 = document.querySelector("#video-two");

let audio1 = document.querySelector("#audio-one");
let audio2 = document.querySelector("#audio-two");

let isPlaying1 = false;
let isPlaying2 = false;

/* 
  TODO 4:
  Add a click event listener to button1.

  When button1 is clicked:
  - play video1
  - play audio1

  Hint:
  video1.play();
  audio1.play();
*/

document.addEventListener("DOMContentLoaded", function () {
    button1.addEventListener("click", function () {
        console.log("Button 1 clicked");
        isPlaying1 = !isPlaying1;

        if (isPlaying1 === true) {
            video1.play();
            audio1.play();
            video2.pause();
            audio2.pause();
            isPlaying2 = false;
            button2.textContent = "Play Pair 2";
            button1.textContent = "Pause Pair 1";
        } else {
            video1.pause();
            audio1.pause();
            button1.textContent = "Play Pair 1";
        }
    });

    button1_reset.addEventListener("click", function () {
        console.log("Button 1 reset clicked");
        video1.currentTime = 0;
        audio1.currentTime = 0;
    });



    button2.addEventListener("click", function () {
        console.log("Button 2 clicked");
        isPlaying2 = !isPlaying2;

        if (isPlaying2 === true) {
            video2.play();
            audio2.play();
            video1.pause();
            audio1.pause();
            isPlaying1 = false;
            button1.textContent = "Play Pair 1";
            button2.textContent = "Pause Pair 2";
        } else {
            video2.pause();
            audio2.pause();
            button2.textContent = "Play Pair 2";
        }
    });

    button2_reset.addEventListener("click", function () {
        console.log("Button 2 reset clicked");
        video2.currentTime = 0;
        audio2.currentTime = 0;
    });
});

/* 
  SPICY CHALLENGE:
  Change this site so that there is only one video tag and one audio tag(comment out old code)
  The user can choose which video or audio source plays by using a button.

  You will need
  - another event handler
  - variables/list that store audio src or paths
  - button or dropdown menu to select source of audio or video
*/