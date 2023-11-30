# Atividade EAD - Desenvolvimento Web II

Este repositório contém as APIs desenvolvidas para a atividade de Desenvolvimento Web II, utilizando Node.js. O projeto segue a estrutura de diretórios abordada nas aulas.

## Estrutura do Repositório

Este repositório inclui duas APIs principais:

### 1. API_maior_menor

Esta API foi desenvolvida para receber um vetor com números inteiros (utilizando 5 elementos). Ela possui funcionalidades para encontrar os valores extremos (menor e maior) dentro do vetor recebido.

#### Detalhes:

- **Localização**: API_maior_menor/controller/controllerMagnitude.js
- **Funções Principais**:
  - `encontrarExtremos`: Utiliza `Math.min` e `Math.max`, que são funções do JavaScript, com o operador de espalhamento (`...`) para determinar o menor e o maior valor no vetor.
  - `magnitudes`: Processa o vetor recebido, invoca `encontrarExtremos` para encontrar os valores extremos, e retorna um objeto contendo esses valores. Inclui validações para garantir que o vetor recebido seja um array com exatamente 5 elementos numéricos.
- **Validação de Dados**: Retorna um erro 400 (Bad Request) se o vetor não atender aos critérios esperados.

- **Localização**: API_maior_menor/routes/route.js
- **Descrição**: Este arquivo define as rotas da API. Utiliza o Express Router para gerenciar as rotas de forma modular.
- **Detalhes**:
  - Define a rota `/magnitudes` que aceita requisições POST.
  - Associa esta rota à função `magnitudes` do controller `controllerMagnitudes.js`.
- **Uso**: As requisições POST enviadas para `/magnitudes` serão processadas pela função `magnitudes` definida no controller.

- **Localização**: API_maior_menor/app.js
- **Descrição**: Este é o arquivo principal da aplicação, responsável por inicializar o servidor Express.
- **Detalhes**:
  - Importa o módulo Express e cria uma instância do aplicativo Express.
  - Configura o middleware para analisar JSON nas requisições recebidas.
  - Importa e utiliza as rotas definidas em `route.js`.
  - Inicia o servidor na porta 3001 e exibe uma mensagem no console quando o servidor está rodando.
- **Uso**: Executar este arquivo inicia o servidor e torna a API acessível para requisições no endereço `http://localhost:3001`.

- **Localização**: API_maior_menor/test.rest
- **Descrição**: Este arquivo é usado para testar a API usando a ferramenta REST Client. Ele contém requisições pré-definidas que podem ser enviadas diretamente do editor de código, como o Visual Studio Code, com a extensão REST Client instalada.
- **Detalhes**:
  - Inclui um exemplo de requisição POST para a rota `/magnitudes`.
  - Define o cabeçalho `Content-Type` como `application/json` para indicar que o corpo da requisição está em formato JSON.
  - No corpo da requisição, envia um objeto JSON contendo a chave `vetor`, com um array de 5 números inteiros como valor.
- **Uso**:
  - Para executar o teste, abra o arquivo `test.rest` em um editor com a extensão REST Client instalada e clique no botão "Send Request" que aparece acima da definição da requisição.
  - A requisição POST será enviada para `http://localhost:3000/magnitudes`, e a resposta da API será exibida no editor, permitindo verificar se os valores extremos (menor e maior) estão sendo retornados corretamente.

## Como Usar

### Requisitos

- Node.js instalado no seu sistema.
- Conhecimento básico sobre operações do Git.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/kevin-moises/ead-dw3.git

2. Instale as dependências:
   ```bash
   cd API_maior_menor
   npm install

3. Execução:
   ```bash
   node app.js

### 2. API_ordenacao

Esta API foi desenvolvida para receber um vetor com números inteiros (utilizando 5 elementos). Ela possui funcionalidades para ordenar o vetor em ordem crescente e retornaá-lo.

#### Detalhes:

- **Localização**: API_ordenacao/controller/controllerSort.js
- **Descrição**: Este arquivo contém a lógica principal para ordenar um vetor de números inteiros.
- **Funções Principais**:
  - `ordenarVetor`: Recebe um array de números e retorna o array ordenado em ordem crescente. Utiliza a função `sort` do JavaScript com uma função de comparação.
  - `sort`: Uma função de middleware para tratar requisições POST. Extrai o vetor do corpo da requisição, valida se é um array, utiliza `ordenarVetor` para ordená-lo e retorna o vetor ordenado como resposta.
- **Validação de Dados**: Retorna um erro 400 (Bad Request) se o corpo da requisição não contiver um array.

- **Localização**: API_ordenacao/routes/route.js
- **Descrição**: Define as rotas para a API de ordenação. Utiliza o Express Router para um gerenciamento eficiente das rotas.
- **Detalhes**:
  - Configura a rota `/sort` para aceitar requisições POST.
  - Associa a rota `/sort` à função `sort` no arquivo `controllerSort.js`.
- **Uso**: As requisições POST para `/sort` são processadas pela função `sort`, resultando em um vetor ordenado.

- **Localização**: API_ordenacao/app.js
- **Descrição**: Arquivo principal para iniciar o servidor da API de ordenação. Configura e inicia um servidor Express.
- **Detalhes**:
  - Inicializa a aplicação Express.
  - Configura o middleware para analisar JSON nas requisições.
  - Importa e utiliza as rotas definidas em `route.js`.
  - Inicia um servidor na porta 3000 e loga uma mensagem no console indicando que o servidor está operacional.
- **Uso**: Executar `app.js` inicia a API, tornando-a acessível para requisições em `http://localhost:3000`.

- **Localização**: API_ordenacao/tests/test.rest
- **Descrição**: Este arquivo é utilizado para testar a API de ordenação com a ferramenta REST Client. Ele contém um exemplo de requisição HTTP formatada para ser facilmente executada a partir de um editor de código compatível, como o Visual Studio Code com a extensão REST Client.
- **Detalhes**:
  - Contém uma requisição POST para a rota `/sort`.
  - O cabeçalho `Content-Type` é definido como `application/json`, indicando que o corpo da requisição está em formato JSON.
  - No corpo da requisição, um objeto JSON é enviado com a chave `vetor`, que contém um array de números inteiros.
- **Uso**:
  - Para realizar o teste, abra o arquivo `test.rest` em um editor que suporte a extensão REST Client e clique em "Send Request" acima da definição da requisição.
  - A requisição POST será enviada para `http://localhost:3000/sort`, e a resposta da API, que deverá ser o vetor ordenado, será exibida no editor.

## Como Usar

### Requisitos

- Node.js instalado no seu sistema.
- Conhecimento básico sobre operações do Git.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/kevin-moises/ead-dw3.git

2. Instale as dependências:
   ```bash
   cd API_ordenacao
   npm install

3. Execução:
   ```bash
   node app.js
