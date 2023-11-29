# Atividade EAD - Desenvolvimento Web II

Este repositório contém as APIs desenvolvidas para a atividade de Desenvolvimento Web II, utilizando Node.js. O projeto segue a estrutura de diretórios abordada nas aulas.

## Estrutura do Repositório

Este repositório inclui duas APIs principais:

### 1. API_maior_menor

Esta API foi desenvolvida para receber um vetor com números inteiros (utilizando 5 elementos). Ela possui funcionalidades para encontrar os valores extremos (menor e maior) dentro do vetor recebido.

#### Detalhes:

- **Localização**: API_maior_menor/controller/controllerMagnitude.js
- **Funções Principais**:
  - `encontrarExtremos`: Utiliza `Math.min` e `Math.max` com o operador de espalhamento (`...`) para determinar o menor e o maior valor no vetor.
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
  - Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor está rodando.
- **Uso**: Executar este arquivo inicia o servidor e torna a API acessível para requisições no endereço `http://localhost:3000`.

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
   
