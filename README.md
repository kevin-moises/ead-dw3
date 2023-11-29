# Atividade EAD - Desenvolvimento Web II
Esta atividade foi desenvolvida utilizando Node.js conforme visto nas aulas, com a mesma estrutura de diretórios.

# API_maior_menor
A API foi desenvolvida para receber um vetor com números inteiros (foram utilizandos 5 elementos), com uma função que ordena o vetor e o retorna ordenado.

1. API_maior_menor/controller/controllerMagnitude.js:
   - Função encontrarExtremos: Esta função utiliza Math.min e Math.max com o operador de espalhamento (...) para encontrar o menor e o maior valor no array.
   - Função magnitude: Foi modificada para chamar encontrarExtremos e retornar um objeto contendo o menor e o maior valor. Além disso, agora ela verifica se o vetor recebido é um array e se contém exatamente 5 elementos.
   - Validação de Dados: É importante validar os dados recebidos para garantir que estão no formato esperado. A função retorna um erro 400 (Bad Request) se o vetor não contiver exatamente 5 elementos.
