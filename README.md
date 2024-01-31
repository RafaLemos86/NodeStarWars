# Avaliação Node js L5 Networks - Guia de Configuração

Este é um guia de configuração para o projeto. Certifique-se de seguir os passos abaixo para configurar corretamente o ambiente e executar a aplicação.

## Pré-requisitos

1. **Node.js:** Certifique-se de ter o Node.js instalado, com uma versão igual ou superior a v20.10.0. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

## Instalação

1. Execute o seguinte comando na pasta raiz do projeto para instalar as dependências necessárias:

    ```
    npm install
    ```

## Configuração do Banco de Dados

1. Configure as variáveis de ambiente do arquivo `.env` para se conectar ao banco de dados.

2. Na primeira execução, descomente as linhas 14 a 16 no arquivo `model/Film.js`. Isso é necessário para criar a tabela no banco de dados. Após a criação bem-sucedida, você pode comentar essas linhas novamente.

## Execução

1. Execute o seguinte comando na pasta raiz do projeto para iniciar a aplicação:

    ```
    node index.js
    ```

2. Por padrão, a aplicação estará disponível na URL [http://localhost:8080/](http://localhost:8080/).
