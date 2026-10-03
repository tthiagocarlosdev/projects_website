const http = require("http");
const os = require("os");
const { execFile } = require("child_process");

const PORT = 8765;

const ALLOWED_ORIGINS = [
    "https://tthiagocarlosdev.github.io",
    "http://127.0.0.1:5500",
    "http://localhost:5500"
];

/*  * Obtém o primeiro endereço IPv4
    * não interno da máquina. */

function obterIPv4() {

    const interfaces = os.networkInterfaces();
    for ( const nomeInterface of Object.keys(interfaces) ){
        for (const endereco of interfaces[nomeInterface] || []) {
            if ( endereco.family === "IPv4" && !endereco.internal ) {
                return endereco.address;
            }
        }
    }
    return "Não identificado";
}

/* * Obtém o nome do sistema operacional. */

function obterSistemaWindows(callback) {
/*  * Se não for Windows,
    * utiliza informações do próprio Node. */
    if (process.platform !== "win32") {
        callback( `${process.platform} ${os.release()}`);
        return;
    }


/*  * No Windows, consulta o nome
    * comercial do sistema. */

execFile( "powershell.exe", [ "-NoProfile", "-NonInteractive", "-Command", "(Get-CimInstance Win32_OperatingSystem).Caption" ], { windowsHide: true }, ( erro, stdout ) => {

        if ( erro || !stdout.trim() ) {
            callback( `Windows ${os.release()}` );
            
            return;
        }

        callback( stdout.trim() );
    }
);


}

/*  * Cria o servidor HTTP. */

const server = http.createServer(( req, res ) => {
        /* * CORS */
        const origin = req.headers.origin;

       
        if (ALLOWED_ORIGINS.includes(origin)) {
            res.setHeader( "Access-Control-Allow-Origin", origin );
            res.setHeader( "Vary", "Origin" );
        }

        res.setHeader( "Access-Control-Allow-Methods", "GET, OPTIONS" );
        res.setHeader( "Access-Control-Allow-Headers", "Content-Type" );

        /* * Requisição OPTIONS. */

        if ( req.method === "OPTIONS" ) {

            res.writeHead(204);
            res.end();
            return;
        }

        /* * API principal. */

        if ( req.method === "GET" && req.url === "/api/computador" ) {

            obterSistemaWindows(
                (sistema) => {


                    const dados = {

                        nome:
                            os.hostname(),

                        usuario:
                            os.userInfo().username,

                        sistema:
                            sistema,

                        ip:
                            obterIPv4()

                    };

                    res.writeHead(
                        200,
                        {
                            "Content-Type":
                                "application/json; charset=utf-8",

                            "Cache-Control":
                                "no-store"
                        }
                    );


                    res.end(
                        JSON.stringify(
                            dados
                        )
                    );

                }
            );


            return;

        }


        /*
         * Rota inicial.
         */

        if (
            req.method === "GET" &&
            req.url === "/"
        ) {

            res.writeHead(
                200,
                {
                    "Content-Type":
                        "text/plain; charset=utf-8"
                }
            );


            res.end(
                "Serviço local do Teste de Impressora funcionando."
            );


            return;

        }


        /*
         * Qualquer outra rota.
         */

        res.writeHead(
            404,
            {
                "Content-Type":
                    "text/plain; charset=utf-8"
            }
        );


        res.end(
            "Rota não encontrada."
        );

    }
);


/*

* IMPORTANTE:
*
* O servidor escuta SOMENTE
* no próprio computador.
  */

server.listen(


PORT,

"127.0.0.1",

() => {

    console.log(
        "=============================================="
    );

    console.log(
        " TESTE DE IMPRESSORA - SERVIÇO LOCAL"
    );

    console.log(
        "=============================================="
    );

    console.log(
        `Servidor: http://127.0.0.1:${PORT}`
    );

    console.log(
        `Computador: ${os.hostname()}`
    );

    console.log(
        `Usuário: ${os.userInfo().username}`
    );

    console.log(
        `IP: ${obterIPv4()}`
    );

    console.log(
        "=============================================="
    );

}

);
