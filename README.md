# Allugator-challenge-Joarez-Ximenes

**Sobre:**
Projeto de um website com feito com microsserviços, no backend procurei usar uma arquitetura diferente da que uso geralmente, utilizei Package by feature, onde o projeto é organizado de acordo com as funções. Também tenho projetos feitos com arquitetura em camadas como o Blog-api (https://github.com/JoarezXimenes/Blog-API), utilizei o Kafka como serviço de Mensageria entre os serviços e criei uma simples ApiGateway apenas para integrar os endpoints 

<details>
  <summary><strong>Tecnologias utilizadas no backend</strong></summary><br />
  
  
  - Express
  - JWT(implementado ainda de forma simples, se der tempo até o fim da semana implemento o KeyCloak)
  - Kafka, comunicação entre os microsserviços, preservando as menssagens em fila, para que o microsserviço
  possa consumilas depois, caso fique fora do ar por um tempo.
  - uuid, IDs gerados diretamente no backend, não dependendo do banco de dados.
  - Testes feitos com mocha, chai e sinon
  - Documentação feita com Swagger Ui

 
</details>

<details>

<summary><strong>Como iniciar o projeto localmente na sua máquina</strong></summary><br />


  - Dependencias: Docker, Docker-compose e npm.
  - 1- Clonar o repositório no seu computador.
  - 2- Entrar na pasta raiz do projeto e executar o comando "npm install" no terminal.
  - 3- Executar o comando "npm run compose:up". Quando o processo terminar o seu terminal será liberado.
  - Para parar os containers basta executar o comando "npm run compose:down".

</details>

<details>
  <summary><strong>Documentação</strong></summary><br />
  
  - Após iniciar a aplicação na sua máquina, a documentação pode ser encontrada em http://localhost:4000/api-docs

 
</details>


<details>
<summary><strong>Frontend</strong></summary><br />
 (ainda em produção)
 
  - React.js

</details>
