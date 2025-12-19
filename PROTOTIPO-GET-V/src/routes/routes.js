const {Router} = require("express");
const router = Router();


router.get("/", (req, res) => {
console.log("Alguien accedio al home");
res.send("Bienvenido al home");
});

router.get("/perfil", (req, res) => {
console.log("Alguien accedio a perfil get");
res.send("esta es la informacion del perfil");
});

router.get("/citas", (req, res) => {
console.log("Alguien accedio a citas get");
res.send("estas son las citas programadas");
});

router.get("/vacunas", (req, res) => {
console.log("Alguien accedio a vacunas get");
res.send("estas son las vacunas aplicadas");
});

router.get("/alimentacion", (req, res) => {
console.log("Alguien accedio a alimentacion get");
res.send("esta es la informacion de alimentacion");
});

module.exports = router;