const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("Alguien accedió a Guess Mew");
  res.send("Bienvenidx a nuestra aplicación");
});

router.get("/name", (req, res) => {
  console.log("Alguien accedió a /name");
  res.send("Introduce el nombre de tu peludo:");
});

router.get("/catordog", (req, res) => {
  console.log("Alguien accedió a /catordog");
  res.send("¿Tienes un gatitio o un perrito?");
});

router.get("/furrcat", (req, res) => {
  console.log("Alguien accedió a /furrcat");
  res.send("¿Cuánto pelo tiene tu michi?");
});

router.get("/sizedog", (req, res) => {
  console.log("Alguien accedió a /sizedog");
  res.send("¿De qué tamaño es tu perrito?");
});

module.exports = router;
