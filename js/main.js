let estadoLicuadora = "apagada";
const licuadora = document.getElementById("blender");

const blenderButtonSound = document.getElementById("blender-button-sound");
const blenderSound = document.getElementById("blender-sound");

function controlarLicuadora() {
  if (estadoLicuadora == "apagada") {
    estadoLicuadora = "encendida";
    console.log("Licuadora prendida");

    sonidoBatidora();
    licuadora.classList.add("active");
  } else {
    estadoLicuadora = "apagada";
    console.log("Licuadora apagada");

    sonidoBatidora();
    licuadora.classList.remove("active");
  }
}

function sonidoBatidora() {
  if (blenderSound.paused) {
    blenderButtonSound.play();
    blenderSound.play();
  } else {
    blenderButtonSound.play();
    blenderSound.pause();
    blenderSound.currentTime = 0;
  }
}
