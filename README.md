# Microsservice-store-API

**Sobre:**
Projeto de um website com feito com microsserviços, no backend procurei usar uma arquitetura diferente da que uso geralmente, utilizei Package by feature, onde o projeto é organizado de acordo com as funções. Também tenho projetos feitos com arquitetura em camadas como o <a href="https://github.com/JoarezXimenes/Car-shop-API" target="_blank">Car-shop-API</a>, utilizei o Kafka como serviço de Mensageria entre os serviços e criei uma simples ApiGateway apenas para integrar os endpoints 

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
      <details>
        <summary><strong>Endpoints</strong></summary><br />
  
  - http://localhost:4000/products : retorna uma lista com os produtos disponiveis.
  - http://localhost:4000/product/:id : retorna um objeto com os detalhes de um produto.
  - http://localhost:4000/register : resgistra um usuario recebendo uma requisição com o body { email, password, userName } e retorna um token JWT.
  - http://localhost:4000/login : recebe uma requisição com o body { email, password } e retorna um token JWT.
  - http://localhost:4000/checkout: recebe uma requisição com o body: { productId } e um header { Authorization: (token JWT recebido no login) } e retorna uma resposta confirmando se o pedido foi efetuado com sucesso.
  - http://localhost:4000/signatures: recebe uma requisição com um header { Authorization: (token JWT recebido no login) } e retorna todas as assinaturas do usuário que estão com o status de ativo.
</details>
  
  - Após iniciar a aplicação na sua máquina, a documentação pode ser encontrada em http://localhost:4000/api-docs
  Este projeto possui 4 serviços:
  - Products: responsavel pro guardar e fornecer todas as informações sobre os produtos.
  - Signatures: responsavel por ouvir o serviço de checkout e criar as assinaturas, enviar uma raquisição para a API de pagamentos e atualizalar a assinatura para ativa após a confirmação do pagamento recebida da payments-api pelo kafka.
  - Checkout : responsavel por confirmar as informações do produto e usuário e enviar uma mensagem pelo kafka para o serviços de signatures.
  - Payments-api: responsavel por receber os pedidos de pagamento e enviar uma confirmação para signatures.
       
</details>


<details>
<summary><strong>Frontend</strong></summary><br />
 (ainda em produção)
 
  - React.js

</details>
