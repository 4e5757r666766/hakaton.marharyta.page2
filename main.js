let h3 = document.querySelector("h3");

function animeColor() {
  anime({
    targets: h3,
    color: "#FF00FF",
    duration: 10000,
    easing: "linear",
    direction: "alternate",
  })
    .finished.then(function () {
      return anime({
        targets: h3,
        color: "#C0FF00",
        duration: 10000,
        easing: "linear",
        direction: "alternate",
      }).finished;
    })
    .then(animeColor);
}

animeColor();

