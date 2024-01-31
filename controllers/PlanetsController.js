const swapiService = require("../api/swapiService")

class PlanetsController {
    async get(req, res) {
        swapiService.getPlanets((error, planets) => {
            if (!error) {
                // Mapeando apenas os campos desejados
                const simplifiedPlanets = planets.map(planet => ({
                    name: planet.name,
                    diameter: planet.diameter,
                    gravity: planet.gravity,
                    orbital_period: planet.orbital_period,
                    population: planet.population,
                    rotation_period: planet.rotation_period,
                    surface_water: planet.surface_water,
                    terrain: planet.terrain,
                    climate: planet.climate
                }));

                // Ordenando em ordem decrescente os planetas pelo diametro
                const planetsSorted = simplifiedPlanets.sort((a, b) => {
                    // Convertendo os diâmetros para números e comparando em ordem decrescente
                    const diameterA = parseFloat(a.diameter);
                    const diameterB = parseFloat(b.diameter);

                    // Ignorando planetas com diâmetros não numéricos
                    if (isNaN(diameterA) || isNaN(diameterB)) {
                        return 0;
                    }

                    return diameterB - diameterA;
                });


                // Renderizando a view ejs com os personagens ordenados
                res.render('planets', { planets: planetsSorted });
            } else {
                console.error('Erro ao acessar a API:', error);
                res.status(500).send('Erro ao acessar a API SWAPI');
            }
        });
    }
}

module.exports = new PlanetsController()
