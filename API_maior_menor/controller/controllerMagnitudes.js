function encontrarExtremos(numeros) {
    let menor = Math.min(...numeros);
    let maior = Math.max(...numeros);
    return { menor, maior };
}

function magnitudes(req, res) {
    const vetor = req.body.vetor;
    if (!Array.isArray(vetor) || vetor.length !== 5) {
        return res.status(400).json({ error: "É necessário um vetor com elementos numéricos" });
    }

    const { menor, maior } = encontrarExtremos(vetor);
    res.json({ menor, maior });
}

module.exports = {
    magnitudes,
};