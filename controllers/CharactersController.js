const swapiService = require("../api/swapiService");

class CharactersController {
    async get(req, res) {
        swapiService.getCharacters((error, characters) => {
            if (!error) {
                // Ordenando os personagens em ordem alfabética pelo nome e mapeando campos desejados
                const charactersSorted = characters.map(character => ({
                    name: character.name,
                    birth_year: character.birth_year,
                    gender: character.gender,
                    height: character.height,
                    mass: character.mass,
                })).sort((a, b) => a.name.localeCompare(b.name));

                // Renderizando a view ejs com os personagens ordenados
                res.render('characters', { characters: charactersSorted });
            } else {
                console.error('Erro ao acessar a API:', error);
                res.status(500).send('Erro ao acessar a API SWAPI');
            }
        });
    }
};

module.exports = new CharactersController()
