function ordenarVetor(numeros) {
    return numeros.sort((a, b) => a - b);
}

function sort(req, res) {
    const vetor = req.body.vetor; 

    if (!Array.isArray(vetor)) {
        return res.status(400).json({ error: "É necessário um vetor com elementos numéricos" });
    }

    const vetorOrdenado = ordenarVetor(vetor);

    res.json(vetorOrdenado);
}

module.exports = {
    sort,
};