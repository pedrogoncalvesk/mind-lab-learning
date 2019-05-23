## Mind Lab Learning [![CircleCI](https://circleci.com/gh/pedrogoncalvesk/mind-lab-learning/tree/master.svg?style=svg)](https://circleci.com/gh/pedrogoncalvesk/mind-lab-learning/tree/master) <a href="https://github.com/pedrogoncalvesk/mind-lab-learning/stargazers"><img src="https://img.shields.io/github/stars/pedrogoncalvesk/mind-lab-learning.svg?style=social&label=Star&maxAge=3600" height="20"></a>

[Mind Lab](https://www.mindlab.com.br/) Learning é um projeto base para demonstrar o uso da stack [MERN](https://scotch.io/@deityhub/getting-started-with-the-mern-stack) (MongoDB, Express, React, e Node.js) em um contexto de plataforma de aprendizagem. O projeto foi criado utilizando como base o repositório [express-mongo-react-redux](https://github.com/Bikranshu/express-mongo-react-redux) do [@Bikranshu](https://github.com/Bikranshu) e a inspiração de exemplo que está sendo usada é a plataforma [Veduca](https://veduca.org/). O arquivo ```.env.example``` corresponde as variáveis de ambiente necessárias para executar o projeto, conectando também em uma instância do [MongoDB Cloud](https://www.mongodb.com/cloud/atlas/lp/general/try). Outras tecnologias e ferramentas foram empregadas para a criação do projeto: Webpack, Babel, Mongoose, React Router, JWT, Redux, PugJs e Bootstrap.

**Veja** a [demonstração](https://mind-lab-learning.herokuapp.com/)

## Get Started

### 1. Pré-requisitos

- [NodeJs](https://nodejs.org/en/) - Ambiente de execução Javascript server-side
- [NPM](https://npmjs.org/) - Gerenciador de pacotes para Node
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL orientado a documentos

### 2. Crie uma instância do MongoDB

Acesse a plataforma do [MongoDB Cloud](https://www.mongodb.com/cloud/atlas/lp/general/try), crie uma conta e siga as [instruções](https://docs.atlas.mongodb.com/) para criar uma instância do MongoDB. Você precisará coletar as seguintes variáveis de ambiente:
```
DB_HOST1=<YOUR-CLUSTER-PRIMARY>
DB_HOST2=<YOUR-CLUSTER-SECONDARY>
DB_HOST3=<YOUR-CLUSTER-TERTIARY>
DB_REPLICA_SET=<YOUR-REPLICA-SET>
DB_AUTH_SOURCE=<YOUR-AUTH-SOURCE>
DB_PORT=<YOUR_DB_PORT>
DB_NAME=<YOUR_DB_NAME>
DB_USER=<YOUR_DB_USER>
DB_PASSWORD=<YOUR_DB_PASSWORD>
```
> **Nota:** Clicando em "CONNECT" no painel do MongoDB Cloud, selecione "Connect Your Application", selecione o driver "Node.js" e a versão "2.2.12 or later" e então você conseguirá pegar todas as informações dos clusters.

### 3. Instalação

No terminal, execute os seguintes comandos:
``` 
 $ git clone https://github.com/pedrogoncalvesk/mind-lab-learning.git
 $ cd mind-lab-learning
 $ cp .env.example .env (edite este arquivo com as novas credenciais)
 $ npm install
 $ npm start
 $ npm run watch (rode em uma janela separada do terminal)
 $ npm run lint (rode o eslint em uma janela separada do terminal)
```

### 4. Como usar

- Acesse a URL: http://localhost:3000 no seu navegador
- Clique para se inscrever em qualquer curso pré-definido
- Crie uma nova conta de usuário e faça login

### 5. Links úteis
- Web framework for Node.js - [Express.js](http://expressjs.com/)
- JavaScript library for building user interfaces - [React](https://facebook.github.io/react/)
- Promise based HTTP client - [axios](https://github.com/mzabriskie/axios)
- JSON Web Tokens(jwt) - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- MongoDB object modeling tool- [mongoose](http://mongoosejs.com/)
- Predictable state container - [Redux](http://redux.js.org/)
- Subscription-based form state management - [Final Form](https://github.com/final-form/final-form)
- Subscription-based form state management for React - [React Final Form](https://github.com/final-form/react-final-form)
- Declarative routing for React - [react-router](https://reacttraining.com/react-router/)
- Code linting tool - [ESLint](http://eslint.org/)

### License

This repository is licensed under MIT License Copyright (c) 2019. See [LICENSE](https://github.com/pedrogoncalvesk/mind-lab-learning/blob/master/LICENSE) for further details.

**Free Software, Hell Yeah!**
