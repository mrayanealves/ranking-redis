# Rayranking

Um sistema de rankeamento usando Redis.

### Tecnologias

1. [NodeJS](https://nodejs.org/en/download/)
2. [Redis](https://redis.io/download)

### Informações gerais

O **Rayranking** é um sistema simples de rankeamento. A proposta é de que nele haja (i) o cadastro de novos jogadores; (ii) a adição e remoção de pontos em um jogador específico; (iii) a listagem de todos os jogadores do sistema organizados do jogador com maior quantidade de pontos (score) para o com menor - ou seja, ordenado por ordem decrescente de pontos; (iv) a listagem dos 10 jogadores com mais pontos (top 10 do ranking); e (v) a listagem do último jogador do ranking (o jogador com menos pontos).

### Organização do projeto

A organização das pastas foi pensada da seguinte forma:

* **config**: possui os arquivos de configuração do projeto. Nesse caso, só possui o arquivo database.js que conecta com o banco Redis.

* **controller**: possui os arquivos de controle do projeto. Basicamente, onde as rotas estão mapeadas e a chamada dos serviços nos arquivos services para cada uma delas.

* **repository**: possui os arquivos que trabalham diretamente com as ações no banco de dados; ou seja, eles são responsáveis por inserir, atualizar e buscar registros no banco. 

* **service**: possui os arquivos em que os serviços serão processados. Esses arquivos recebem as informações contidas nas requisições que chegaram do controller e processam de acordo com o que está definido na função, requisitando, quando necessátio, as funcões definidas nos repositorys.

### Executando o projeto

Para executar o projeto, primeiramente clone esse repositório em sua máquina. 

Certifique-se de que o Redis esteja rodando e execute os comandos:

> $ npm install 

Para a instalação dos pacotes do NodeJS; e

> $ node app.js

Para rodar a aplicação. 

Se a aplicação for executada com sucesso, a mensagem `App listening on port 3000` aparecerá no seu terminal.

Por fim, acesse no seu browser o link localhost:3000 e verifique se recebe o *Welcome* do sistema.

### As operações

O retorno das requisições é um json com o resultado da operação, ou uma mensagem de erro (caso tenha havido algum).

Para facilitar a execussão, disponibilizei uma documentação com as rotas do sistema, bem como o corpo esperado nas requisições e o tipo de retorno de cada uma. O acesso dessa documentação está disponível [clicando aqui](https://documenter.getpostman.com/view/6141382/SVfRto5Z?version=latest).

### Informes finais

Eu tentei documentar os métodos de forma que ficassem o mais claro possível do que ele trata. Os repositorys também possuem uma breve explicação do que são os métodos do Redis que estão sendo usados. 

Obs.: Perdoem caso o inglês esteja ruim (haha).
