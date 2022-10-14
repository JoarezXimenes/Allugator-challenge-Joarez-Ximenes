# Allugator-challenge-Joarez-Ximenes

**Sobre:**
Projeto de um website com feito com microsserviços, no backend procurei usar uma arquitetura diferente da que uso geralmente, utilizei Package by feature, onde o projeto é organizado de acordo com as funções. Também tenho projetos feitos com arquitetura em camadas como o Blog-api (https://github.com/JoarezXimenes/Blog-API) 

<details>
  <summary><strong>Tecnologias utilizadas no backend</strong></summary><br />
  ( backend ainda em produção, faltando apenas alguns detalhes )
  
  - Express
  - JWT(implementado ainda de forma simples, se der tempo até o fim da semana implemento o KeyCloak)
  - Kafka, comunicação entre os microsserviços, preservando as menssagens em fila, para que o microsserviço
  possa consumilas depois, caso fique fora do ar por um tempo.
  - uuid, IDs gerados diretamente no backend, não dependendo do banco de dados.
  - testes feitos com mocha, chai e sinon
  
  backend ainda em produção, faltando apenas alguns detalhes

 
</details>

<details>
<summary><strong>Front</strong></summary><br />
 (ainda em produção)
 
  - React.js

</details>

<details>
<summary><strong>Como iniciar o projeto localmente na sua máquina</strong></summary><br />


  - Dependencias: Docker, Docker-compose e npm.
  - 1- Clonar o repositório no seu computador.
  - 2- Entrar na pasta raiz do projeto e executar o comando "npm install" no terminal.
  - 3- Executar o comando "npm run compose:up". Agora só esperar uns minutinhos e pronto :).
  - Para parar os containers basta executar o comando "npm run compose:down".

</details>
