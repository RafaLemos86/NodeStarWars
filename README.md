# Projeto Star Wars API

Este é um projeto Node.js que consome a API [SWAPI](https://swapi.dev/) para exibir informações sobre a saga Star Wars. O frontend foi desenvolvido utilizando EJS e Bootstrap, para criar uma experiência visual agradável.

## Funcionalidades

### 1. Rota Principal

A rota principal (`/`) contém botões que direcionam para as demais rotas, facilitando a navegação e acesso rápido às diferentes seções do projeto.

### 2. Personagens (/characters)

- Rota: `/characters`
- Exibe os personagens da saga Star Wars em ordem alfabética.

### 3. Planetas (/planets)

- Rota: `/planets`
- Exibe os planetas da saga Star Wars ordenados por diâmetro, do maior para o menor.

### 4. Naves Espaciais (/starships)

- Rota: `/starships`
- Exibe as naves da saga Star Wars em ordem alfabética.

### 5. Filmes (/films)

- Rota: `/films`
- Exibe os filmes da saga Star Wars em ordem cronológica.
- Possui um campo de busca que permite a pesquisa de filmes por nome.

## Instruções de Uso

Clone o repositório para sua máquina local.
   ``` 
   git clone https://github.com/RafaLemos86/NodeStarWars.git
   ```
## Instalação

Execute o seguinte comando na pasta raiz do projeto para instalar as dependências necessárias:

   ``` 
   npm install
   ```

## Execução

1. Execute o seguinte comando na pasta raiz do projeto para iniciar a aplicação:
   ``` 
   node index.js
   ```

2. Por padrão, a aplicação estará disponível na URL [http://localhost:8080/](http://localhost:8080/).
