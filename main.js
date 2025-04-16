document.getElementById("pesquisar").addEventListener("click", function () {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro na resposta da API");
            }
            return response.json();
        })
        .then((dados) => {
            if (dados.erro) {
                alert("CEP não encontrado!");
                return;
            }

            // Preenche os campos do formulário com os dados recebidos
            document.getElementById("logradouro").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("complemento").value = dados.complemento;
            document.getElementById("numero").value = dados.numero;
        })
        .catch((erro) => {
            console.error("Erro ao buscar o CEP:", erro);
            alert("Erro ao buscar o CEP. Verifique sua conexão ou se o CEP está correto.");
        });
});
