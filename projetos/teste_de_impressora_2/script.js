const API_URL = "http://localhost:8765/api/computador";

const elementos = {
    computador: document.getElementById("computador"),
    usuario: document.getElementById("usuario"),
    sistema: document.getElementById("sistema"),
    ip: document.getElementById("ip"),
    data: document.getElementById("data"),
    hora: document.getElementById("hora"),
    status: document.getElementById("status"),
    imprimir: document.getElementById("btnImprimir")
};

function atualizarDataHora() {
    const agora = new Date();

    elementos.data.textContent = agora.toLocaleDateString("pt-BR");
    elementos.hora.textContent = agora.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}

async function obterInformacoesComputador() {
    try {
        const resposta = await fetch(API_URL, {
            method: "GET",
            cache: "no-store"
        });

        if (!resposta.ok) {
            throw new Error(`HTTP ${resposta.status}`);
        }

        const dados = await resposta.json();

        elementos.computador.textContent = dados.nome || "Não identificado";
        elementos.usuario.textContent = dados.usuario || "Não identificado";
        elementos.sistema.textContent = dados.sistema || "Não identificado";
        elementos.ip.textContent = dados.ip || "Não identificado";

        elementos.status.textContent =
            "Computador identificado pelo serviço local.";
        elementos.status.style.color = "green";

    } catch (erro) {
        console.error("Erro ao acessar o serviço local:", erro);

        elementos.computador.textContent = "Serviço não encontrado";
        elementos.usuario.textContent = "—";
        elementos.sistema.textContent = "—";
        elementos.ip.textContent = "—";

        elementos.status.textContent =
            "Node.js não está disponível. Execute o server.js neste computador.";
        elementos.status.style.color = "red";
    }
}

elementos.imprimir.addEventListener("click", () => {
    atualizarDataHora();
    window.print();
});

atualizarDataHora();
obterInformacoesComputador();

setInterval(atualizarDataHora, 1000);
