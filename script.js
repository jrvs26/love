setTimeout(() => {
  document.querySelector(".not-loaded").classList.remove("not-loaded");

  const audio = document.getElementById("bg-music");
  audio.currentTime = 58;

  function forcePlayAudio() {
    audio.play().then(() => {
      console.log("Audio playing ✅");
    }).catch((error) => {
      console.log("Autoplay blocked. Retrying in 1 second...", error);
      setTimeout(forcePlayAudio, 1000); // Retry every 1 second
    });
  }

  forcePlayAudio(); // Attempt to play immediately

  // Retry when the user interacts with the page
  document.addEventListener("click", forcePlayAudio);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      forcePlayAudio();
    }
  });

  setTimeout(() => {
    document.querySelector(".sorry-text").classList.add("show-text");
  }, 3000);
}, 1000);
