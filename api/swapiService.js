const request = require('request');
const { promisify } = require('util');
const apiUrl = 'https://swapi.dev/api/';


const getCharacters = (callback) => {
    request(`${apiUrl}/people`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const characters = JSON.parse(body).results;
            callback(null, characters);
        } else {
            callback(error || `Status code: ${response.statusCode}`);
        }
    });
};

const getPlanets = (callback) => {
    request(`${apiUrl}/planets`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const planets = JSON.parse(body).results;
            callback(null, planets);
        } else {
            callback(error || `Status code: ${response.statusCode}`);
        }
    });
};

const getStarships = (callback) => {
    request(`${apiUrl}/starships`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const starships = JSON.parse(body).results;
            callback(null, starships);
        } else {
            callback(error || `Status code: ${response.statusCode}`);
        }
    });
};

const getFilms = promisify((callback) => {
    request(`${apiUrl}/films`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const films = JSON.parse(body).results;
            callback(null, films);
        } else {
            callback(error || `Status code: ${response.statusCode}`);
        }
    });
});

module.exports = {
    getCharacters,
    getPlanets,
    getStarships,
    getFilms
};
