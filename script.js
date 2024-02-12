let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];

const chauchat = () => {
  for (let i = 1; i < cargador.length; i++) {
    let numeroAlAzar = Math.floor(Math.random() * 100);
    if (numeroAlAzar > 80) {
      console.log(cargador[i]);
    } else {
      console.log("Illo, me he quedao pillá!");
    }
    if (i % 3 === 0) {
      console.log("");
    }
  }
};

chauchat();
