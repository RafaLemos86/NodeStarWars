const swapiService = require("../api/swapiService")
const Film = require("../model/Film")

class FilmsController {
    async get(req, res) {
        swapiService.getFilms((error, films) => {
            if (!error) {
                // Mapeando apenas os campos desejados
                const simplifiedFilms = films.map(film => ({
                    title: film.title,
                    director: film.director,
                    release_date: film.release_date,
                    ep: film.episode_id
                }));

                // ordenando em ordem cronologica
                const filmsSorted = simplifiedFilms.sort((a, b) => {
                    const epFilmA = Number(a.ep)
                    const epFilmB = Number(b.ep)

                    // Verificando se as datas são válidas
                    if (isNaN(epFilmA) || isNaN(epFilmB)) {
                        return 0;
                    }

                    return epFilmA - epFilmB
                });
                // Renderizando a view ejs com os personagens ordenados
                res.render('films', { films: filmsSorted });
            }
        });
    };

    async searchFilm(req, res) {
        try {
            const history = req.body.history;

            // Aguarda a obtenção da lista de filmes da API
            const films = await swapiService.getFilms();

            // Mapeando apenas os campos desejados
            const simplifiedFilms = films.map(film => ({
                title: film.title,
                director: film.director,
                release_date: film.release_date
            }));

            // Filtrando os filmes com base no título da variável History
            const filteredFilm = simplifiedFilms.find(film => film.title === history);

            if (!filteredFilm) {
                // Caso não encontre um filme com o título especificado
                res.render("films", { films: null })
            } else {
                // Renderizando a view ejs com o filme encontrado
                res.render('searchFilm', { film: filteredFilm });
            }
        } catch (error) {
            // Tratamento de erro geral
            console.error(error);
            res.status(500).send('Erro interno.');
        }
    }
}

module.exports = new FilmsController()
