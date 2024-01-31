const swapiService = require("../api/swapiService")

class StarshipController {
    async get(req, res) {
        swapiService.getStarships((error, starships) => {
            if (!error) {
                // Ordenando as naves em ordem alfabética pelo nome e selecionando campos desejados
                const starshipsSorted = starships.map(starship => ({
                    name: starship.name,
                    model: starship.model,
                    starship_class: starship.starship_class,
                    length: starship.length,
                    cargo_capacity: starship.cargo_capacity,
                    max_atmosphering_speed: starship.max_atmosphering_speed,
                    passengers: starship.passengers,
                    crew: starship.crew,
                    hyperdrive_rating: starship.hyperdrive_rating,
                    consumables: starship.consumables
                })).sort((a, b) => a.name.localeCompare(b.name));

                // Renderizando a view ejs com os personagens ordenados
                res.render('starships', { starships: starshipsSorted });
            } else {
                console.error('Erro ao acessar a API:', error);
                res.status(500).send('Erro ao acessar a API SWAPI');
            }
        });
    }
};

module.exports = new StarshipController()
