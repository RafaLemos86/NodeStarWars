const express = require("express")
const router = express.Router()

const CharactersController = require("../controllers/CharactersController")
const HomeController = require("../controllers/HomeController")
const PlanetController = require("../controllers/PlanetsController")
const StarshipController = require("../controllers/StarchipsController")
const FilmsController = require("../controllers/FilmsController")
// rota para a pagina principal

router.get("/", HomeController.index)

// rota dos personagens
router.get("/characters", CharactersController.get);

// rota dos planetas
router.get("/planets", PlanetController.get)

// rota para as naves
router.get("/starships", StarshipController.get)

// rota para os filmes
router.get("/films", FilmsController.get)

// rota para inserir pesquisa no DB e renderizar tela de pesquisa
router.post("/film/search", FilmsController.searchFilm)


module.exports = router
