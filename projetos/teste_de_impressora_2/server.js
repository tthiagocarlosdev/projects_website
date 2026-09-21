const http = require("http");
const os = require("os");
const { execFile } = require("child_process");

const PORT = 8765;

// Coloque aqui o endereço do seu GitHub Pages.
// Essa origem será autorizada pelo serviço local.
const ALLOWED_ORIGIN =
    "https://tthiagocarlosdev.github.io";

function obterIPv4() {
    const interfaces = os.networkInterfaces();

    for (const nomeInterface of Object.keys(interfaces)) {
        for (const endereco of interfaces[nomeInterface] || []) {
            if (
                endereco.family === "IPv4" &&
                !endereco.internal
            ) {
                return endereco.address;
            }
        }
    }

    return "Não identificado";
}

function obterSistemaWindows(callback) {
    if (process.platform !== "win32") {
        callback(`${process.platform} ${os.release()}`);
        return;
    }

    execFile(
        "powershell.exe",
        [
            "-NoProfile",
            "-NonInteractive",
            "-Command",
            "(Get-CimInstance Win32_OperatingSystem).Caption"
        ],
        { windowsHide: true },
        (erro, stdout) => {
            if (erro || !stdout.trim()) {
                callback(`Windows ${os.release()}`);
                return;
            }

            callback(stdout.trim());
        }
    );
}

const server = http.createServer((req, res) => {

    // Cabeçalhos CORS
    const origin = req.headers.origin;

    if (origin === ALLOWED_ORIGIN) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Vary", "Origin");
    }

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, OPTIONS"
    );

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );

    // Resposta para preflight CORS
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    // API
    if (req.method === "GET" && req.url === "/api/computador") {

        obterSistemaWindows((sistema) => {

            const dados = {
                nome: os.hostname(),
                usuario: os.userInfo().username,
                sistema: sistema,
                ip: obterIPv4()
            };

            res.writeHead(200, {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store"
            });

            res.end(JSON.stringify(dados));
        });

        return;
    }

    // Informações básicas no navegador
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });

        res.end(
            "Serviço local do Teste de Impressora funcionando.\n" +
            "Endpoint: /api/computador"
        );

        return;
    }

    res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("Rota não encontrada.");
});

server.listen(PORT, "127.0.0.1", () => {
    console.log("==============================================");
    console.log(" TESTE DE IMPRESSORA - SERVIÇO LOCAL");
    console.log("==============================================");
    console.log(`Servidor: http://localhost:${PORT}`);
    console.log(`Computador: ${os.hostname()}`);
    console.log(`Usuário: ${os.userInfo().username}`);
    console.log(`IP: ${obterIPv4()}`);
    console.log("==============================================");
    console.log("Mantenha esta janela aberta enquanto utilizar");
    console.log("a página de teste de impressora.");
});
