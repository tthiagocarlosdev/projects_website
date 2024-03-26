const fs = require('fs');

// String fornecida com os dados das unidades policiais
const dataString = `<tbody>
<tr>
<td align="left" valign="middle" height="17">GABPCPE - GABINETE DO CHEFE DE POLÍCIA</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 405 - Boa Vista – Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3802 / (81) 3184-3803 / (81) 3184-3800 / (81) 3184-3805</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">SUBCP/GABPCPE - SUBCHEFIA DE POLÍCIA</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 405 - Boa Vista – Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3814 / (81) 3184-3811</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">SEGAB/GABPCPE - SECRETARIA DO GABINETE</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 405 - Boa Vista – Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3813 / (81) 3184-3809</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">ASSCOM/SUBCP - ASSESSORIA DE COMUNICAÇÃO SOCIAL</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 405 - Boa Vista – Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3824 / (81) 3184-3823</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNICEV/SUBPC - UNIDADE DE PLANEJAMENTO E COORDENAÇÃO DE EVENTOS</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3255 / (81) 3184-3265</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UCI/SUBCP - UNIDADE DE CONTROLE INTERNO DA SUB</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 405 - Boa Vista – Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3821</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVCAC/UCI/SUBCP - DIVISÃO DE CONTROLADORIA E AUDITORIA EM CONTRATOS</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 405 - Boa Vista – Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3816</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNAJUR/SUBCP - UNIDADE DE APOIO JURÍDICO</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 405 - Boa Vista – Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3819 / (81) 3184-3820</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNESTAC/SUBCP - UNIDADE DE ESTATÍSTICA CRIMINAL</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3208</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">COORDPPOL/SUBCP - COORDENAÇÃO DOS PROCEDIMENTOS POLICIAIS</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3277 / (81) 3184-3203 / (81) 3184-3201</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">COPLAM/SUBCP - COORDENAÇÃO DE PLANEJAMENTO E MODERNIZAÇÃO</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3202 / (81) 3184-3254 / (81) 3184-3245</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">COORDPLAN/GCOM/DIM - COORDENAÇÃO DOS SERVIÇOS DE PLANTÃO POLICIAL</td>
<td align="left" valign="middle">Endereço: Rua Odorico Mendes, 700 – Campo Grande – Recife/PE – CEP 52031-080</td>
<td align="left" valign="bottom">(81) 3182-6072 / (81) 3182-6091 / (81) 3182-6090</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">CORE/GABPCPE - COMANDO DE OPERAÇÕES E RECURSOS ESPECIAIS</td>
<td align="left" valign="middle">Endereço: Rua José Dias Raposo 1000, Morro do Peludo, Ouro Preto - Olinda/PE - CEP: 53370-420</td>
<td align="left" valign="bottom">(81) 3184-7102 / (81) 3184-7110 / (81) 3184-7103 / (81) 3184-7101/ (81) 3184-7111 / (81) 3184-7105 / (81) 3184-7100 / (81) 3184-7104 / (81) 3184-7106</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPRIE/CORE/GABPCPE - DELEGACIA DE POLÍCIA DE REPRESSÃO À INTOLERÂNCIA ESPORTIVA</td>
<td align="left" valign="middle">Endereço: Rua José Dias Raposo 1000, Morro do Peludo, Ouro Preto - Olinda/PE - CEP: 53370-420</td>
<td align="left" valign="bottom">(81) 3184-7108 / (81) 3184-7109 / (81) 3184-7107</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DTI/SUBCP - DIRETORIA DE TECNOLOGIA DA INFORMAÇÃO</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3220 / (81) 3184-3262 / (81) 3184-3217 / (81) 3184-3294</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">ASSDTI/DTI - ASSESSORIA DA DTI</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3224</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNIATE/DTI - UNIDADE DE INFRAESTRUTURA E ATENDIMENTO</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3267 / (81) 3184-3219 / (81) 3184-3213</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVMAE/UNIATE/DTI - DIVISÃO DE MANUTENÇÃO DE EQUIPAMENTOS</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3293 / (81) 3184-3221</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNISUT/DTI - UNIDADE DE SUPORTE TÉCNICO</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3292 / (81) 3184-3282</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVREC/UNISUT/DTI - DIVISÃO DE REDES DE COMPUTADORES</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3222</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">SUPTEC - SETOR DE SUPORTE TÉCNICO DA DTI</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3251</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNISA/DTI - UNIDADE DE SISTEMAS APLICATIVOS</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3290</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIRH/SUBCP - DIRETORIA DE RECURSOS HUMANOS</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista – Recife/PE – CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3683 / (81) 3184-3866 / (81) 3184-3687 / (81) 3184-3686 / (81) 3184-3684</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNIMOPE/DIRH - UNIDADE DE MOVIMENTAÇÃO DE PESSOAL</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista – Recife/PE – CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3705</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVPORT/UNIMOPE/DIRH - DIVISÃO DE ELABORAÇÃO DE PORTARIA</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista – Recife/PE – CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3706</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVJUST/UNIMOPE/DIRH - DIVISÃO DE APRESENTAÇÃO DE SERVIDOR À JUSTIÇA</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista – Recife/PE – CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3685 / (81) 3184-3863</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNICADE/DIRH - UNIDADE DE CAPACITAÇÃO E DESENVOLVIMENTO</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista – Recife/PE – CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3698 / (81) 3184-3700 / (81) 3184-3707</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVAD/UNICADE/DIRH - DIVISÃO ADMINISTRATIVA DA UNICADE</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista – Recife/PE – CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3701 / (81) 3184-3702</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNIAP/DIRH - UNIDADE DE ADMINISTRAÇÃO DE PESSOAL</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista – Recife/PE – CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3694 / (81) 3184-3688 / (81) 3184-3847 / (81) 3184-3690 / (81) 3184-3697</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVSERV/UNIAP/DIRH - DIVISÃO DE ATENDIMENTO AO SERVIDOR</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista, Recife/PE.– CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3693 / (81) 3184-3845</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVFOP/UNIAP/DIRH - DIVISÃO DE FOLHA DE PAGAMENTO</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista, Recife/PE.– CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3691 / (81) 3184-3867</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVCAP/UNIAP/DIRH - DIVISÃO DE CADASTRO DE PESSOAL</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista, Recife/PE.– CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3695 / (81) 3184-3858</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">UNESAV/DIRH - UNIDADE DE ESTUDOS E GERENCIAMENTO DE SAÚDE E VALORIZAÇÃO PROFISSIONAL</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 208-A, Prédio Anexo, Boa Vista, Recife/PE.– CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3850 / (81) 3184-3848</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVASS/UNESAV/DIRH - DIVISÃO DE ASSISTÊNCIA SOCIAL</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 208-A, Prédio Anexo, Boa Vista, Recife/PE.– CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3853</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVASP/UNESAV/DIRH - DIVISÃO DE ASSISTÊNCIA PSICOLÓGICA</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 208-A, Prédio Anexo, Boa Vista, Recife/PE.– CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3841</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">CAPELANIA/UNESAV/DIRH - CAPELANIA</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista, Recife/PE. – CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3851</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVSA/UNESAV/DIRH - DIVISÃO DE SAÚDE</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 208-A, Prédio Anexo, Boa Vista, Recife/PE. – CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3860 / (81) 3184-3840</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVAE/DIRH - DIVISÃO DE ANÁLISE E ESTATÍSTICA DA DIRH</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista, Recife/PE.– CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3862</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVSEL/DIRH - DIVISÃO DE SEGURANÇA E LOGÍSTICA</td>
<td align="left" valign="middle">Endereço: Rua Tabira, 160, Boa Vista, Recife/PE.– CEP: 50.050-330</td>
<td align="left" valign="bottom">(81) 3184-3839</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIAG/SUBCP - DIRETORIA DE ADMINISTRAÇÃO GERAL</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3210 / (81) 3184-3226 / (81) 3184-3268 / (81) 3184-3274 / (81) 3184-3216 / (81) 3184-3204 / (81) 3184-3225 / (81) 3184-3227 / (81) 3184-3288 / (81) 3184-3287 / (81) 3184-3289</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVCOMPRAS/DIAG - DIVISÃO DE COMPRAS</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3228 / (81) 3184-3273</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVPROT/DIAG - DIVISÃO DE PROTOCOLO DA DIAG</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3257</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">CPL/DIAG - COMISSÃO PERMANENTE DE LICITAÇÃO</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3230 / (81) 3184-3231</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNEATEM/DIAG - UNIDADE DE ENERGIA ELÉTRICA, ÁGUA E TELEFONIA MÓVEL</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3230 / (81) 3184-3231</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNEFIN/DIAG - UNIDADE DE EXECUÇÃO FINANCEIRA</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3234 / (81) 3184-3278 / (81) 3184-3284</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVCON/UNEFIN/DIAG - DIVISÃO DE CONTABILIDADE</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3236</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVTES/UNEFIN/DIAG - DIVISÃO DE TESOURARIA</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3237</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVPREST/UNEFIN/DIAG - DIVISÃO DE PRESTAÇÃO DE CONTAS</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3235</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNIPAE/DIAG - UNIDADE DE PROJETOS DE ARQUITETURA E ENGENHARIA</td>
<td align="left" valign="middle">Endereço:Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3238 / (81) 3184-3271</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNISERG/DIAG - UNIDADE DE SERVIÇOS GERAIS</td>
<td align="left" valign="middle">Endereço:Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3182-5424</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVAG/UNISERG/DIAG - DIVISÃO DE ARQUIVO GERAL</td>
<td align="left" valign="middle">Endereço:Av. Olinda Dom Hélder Câmara, 517 - Santa Tereza - Olinda/PE - 53010-005</td>
<td align="left" valign="bottom">(81) 3182-5426</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVALM/UNISERG/DIAG - DIVISÃO DE ARQUIVO GERAL</td>
<td align="left" valign="middle">Endereço: Av. Olinda Dom Hélder Câmara, 517 - Santa Tereza - Olinda/PE - 53010-005</td>
<td align="left" valign="bottom">(81) 3182-5424</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVSUP/UNISERG/DIAG - DIVISÃO DE SUPRIMENTO E PATRIMÔNIO</td>
<td align="left" valign="middle">Endereço: Av. Olinda Dom Hélder Câmara, 517 - Santa Tereza - Olinda/PE - 53010-005</td>
<td align="left" valign="bottom">(81) 3182-6115 / (81) 3182-6112</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVMAN/UNISERG/DIAG - DIVISÃO DE MANUTENÇÃO</td>
<td align="left" valign="middle">Endereço: Av. Olinda Dom Hélder Câmara, 517 - Santa Tereza - Olinda/PE - 53010-005</td>
<td align="left" valign="bottom">(81) 3182-5429 / (81) 3182-5430</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVDEBA/UNISERG/DIAG - DIVISÃO DE DEPÓSITO DE BENS APREENDIDOS</td>
<td align="left" valign="middle">Endereço: Av. Recife, nº 5583-A - Bairro Da Estância – Recife/PE - CEP: 50781-000.</td>
<td align="left" valign="bottom">(81) 3184-3288</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNICCON/DIAG - UNIDADE DE CONTRATOS E CONVÊNIOS</td>
<td align="left" valign="middle">Endereço:Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3215 / (81) 3184-3261</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNITOF - UNIDADE DE TRANSPORTES E OFICINA</td>
<td align="left" valign="middle">Endereço: Rua Artur Coutinho, 98 - Santo Amaro – Recife/PE - CEP:50.100-280</td>
<td align="left" valign="bottom">(81) 3184-3596 / (81) 3184-3894</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIMAVE/UNITOF/DIAG - DIVISÃO DE MANUTENÇÃO E CONTROLE DE VEÍCULOS</td>
<td align="left" valign="middle">Endereço : Rua Artur Coutinho, 98 - Santo Amaro – Recife/PE - CEP:50.100-280</td>
<td align="left" valign="bottom">(81) 3184-3598</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DICAS/UNITOF/DIAG - DIVISÃO DE CONTROLE DE ABASTECIMENTO E SERVIÇOS</td>
<td align="left" valign="middle">Endereço: Rua Artur Coutinho, 98 - Santo Amaro – Recife/PE - CEP:50.100-280</td>
<td align="left" valign="bottom">(81) 3184-3597</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNIPLANOR/DIAG - UNIDADE DE PLANEJAMENTO E ORÇAMENTO</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3239 / (81) 3184-3232</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIRESP/SUBCP - DIRETORIA INTEGRADA ESPECIALIZADA</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3258 / (81) 3184-3256 / (81) 3184-3260 / (81) 3184-3243</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">9ª DPH/DHMN/DIRESP - 9ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - OLINDA</td>
<td align="left" valign="middle">Endereço: Av. Governador Carlos de Lima Cavalcanti, Nº 5013, Rio Doce, Olinda/PE - CEP: 53.040-000</td>
<td align="left" valign="bottom">(81) 3182-5401 / (81) 3182-5400</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">6ª DPH/DHMN/DIRESP - 6ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA</td>
<td align="left" valign="middle">Endereço: Rua do Cajueiro, s/n, Praça Frederico Lundgren, Centro, Paulista/PE - CEP: 53401-908</td>
<td align="left" valign="bottom">(81) 3184-7089 / (81) 3184-7051</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">7ª DPH//DHMN/DIRESP - 7ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA</td>
<td align="left" valign="middle">Endereço: Avenida Marechal Floriano Peixoto, nº 76, Centro, Paulista/PE - CEP: 53401-460</td>
<td align="left" valign="bottom">(81) 3184-7142 / (81) 3184-7141 / (81) 3184-7140</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">8ª DPH/DHMN/DIRESP - 8ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA</td>
<td align="left" valign="middle">Endereço: Rua do Cajueiro, s/n, Praça Frederico Lundgren, Centro, Paulista/PE - CEP: 53401-908</td>
<td align="left" valign="bottom">(81) 3184-7052</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">10ª DPH/DHMN/DIRESP - 10ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - SÃO LOURENÇO DA MATA</td>
<td align="left" valign="middle">Endereço: Rua Nova, nº 233 (Antiga Rua Armínio Guilherme dos Santos, n° 55) Jardim Santo Inácio, Quadra 25, Lotes 4D, Cabo de Santo Agostinho/PE - CEP: 54515535</td>
<td align="left" valign="bottom">(81) 3184-7199 / (81) 3182-6034</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DHMS/DIRESP - DIVISÃO DE HOMICÍDIOS METROPOLITANA SUL</td>
<td align="left" valign="middle">Endereço: Av. Barreto de Menezes, 637, Cajueiro Seco - Jaboatão dos Guararapes /PE - CEP:54360-160​​</td>
<td align="left" valign="bottom">(81) 3184-3741 / (81) 3184-3743 / (81) 3184-3742 / (81) 3184-3740 / (81) 3184-3748 / (81) 3184-3751</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">11ª DPH/DHMS/DIRESP - 11ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - JABOATÃO DOS GUARARAPES</td>
<td align="left" valign="middle">Endereço:Av. Barreto de Menezes, 637, Cajueiro Seco - Jaboatão dos Guararapes /PE - CEP:54360-160</td>
<td align="left" valign="bottom">(81) 3184-3744 / (81) 3184-3755 / (81) 3184-3746</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">12ª DPH/DHMS/DIRESP - 12ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - JABOATÃO DOS GUARARAPES</td>
<td align="left" valign="middle">Endereço: Av. Barreto de Menezes, 637, Cajueiro Seco - Jaboatão dos Guararapes /PE - CEP:54360-160</td>
<td align="left" valign="bottom">(81) 3184-3750 / (81) 3184-3754 / (81) 3184-3752 / (81) 3184-3753</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">13ª DPH/DHMS/DIRESP - 13ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - JABOATÃO DOS GUARARAPES/MORENO</td>
<td align="left" valign="middle">Endereço: Av. Barreto de Menezes, 637, Cajueiro Seco - Jaboatão dos Guararapes /PE - CEP:54360-160</td>
<td align="left" valign="bottom">(81) 3184-3749 / (81) 3184-3757 / (81) 3184-3745 / (81) 3184-3756 / (81) 3184-3747 / (81) 3184-3758</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPCA/GCOE/DIRESP - DEPARTAMENTO DE POLÍCIA DA CRIANÇA E DO ADOLESCENTE</td>
<td align="left" valign="middle">Endereço: Rua Benfica, 1008, Madalena - Recife/PE – CEP: 50720-001</td>
<td align="left" valign="bottom">(81) 3184-3577 / (81) 3184-3579 / (81) 3184-3584 (81) 3184-3575 (81) 3184-3588 / (81) 3184-3582</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">ASSDPCA/DPCA/GCOE - ASSESSORIA DO DPCA</td>
<td align="left" valign="middle">Endereço: Rua João Fernandes Vieira, 405, Boa Vista, Recife/PE – CEP: 50.050-200</td>
<td align="left" valign="bottom">(81) 3184-3334 / (81) 3184-3343 (81) 3184-3346 / (81) 3184-3348</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">1ª DPCCAI/DPCA/DIRESP - 1ª DELEGACIA DE POLÍCIA DE CRIMES CONTRA A CRIANÇA E ADOLESCENTE E ATOS INFRACIONAIS - PAULISTA</td>
<td align="left" valign="middle">Endereço: Rua do Cajueiro, s/n, Praça Frederico Lundgren, Centro, Paulista/PE - CEP: 53401-908</td>
<td align="left" valign="bottom">(81) 3184-7090 / (81) 3184-7086 / (81) 3184-7094 / (81) 3184-7079 / (81) 3184-7080 / (81) 3184-7083 / (81) 3184-7092</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">UNIAT/DIRH - UNIDADE DE APOIO TÉCNICO</td>
<td align="left" valign="middle">Endereço: Rua Benfica, 1008 – Madalena - Recife/PE – CEP: 50720-001</td>
<td align="left" valign="bottom">(81) 3184-3583</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">UNIPRECCA/DPCA/DIRESP - UNIDADE DE PREVENÇÃO E REPRESSÃO AOS CRIMES CONTRA CRIANÇA E ADOLESCENTE</td>
<td align="left" valign="middle">Endereço: Rua Benfica, 1008 – Madalena - Recife/PE – CEP: 50720-001</td>
<td align="left" valign="bottom">(81) 3184-3587 / (81) 3184-3578</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DECCA/UNIPRECCA/DIRESP - DELEGACIA DE POLÍCIA DE CRIMES CONTRA CRIANÇA E ADOLESCENTE</td>
<td align="left" valign="middle">Endereço: Rua Benfica, 1008 – Madalena - Recife/PE – CEP: 50720-001</td>
<td align="left" valign="bottom">(81) 3184-3594 / (81) 3184-3595 / (81) 3184-3580 / (81) 3184-3591 / (81) 3184-3576 / (81) 3184-3574 / (81) 3182-6050 / (81) 3184-3590 / (81) 3184-3589 / (81) 3184-3593 / (81) 3182-6048</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">2ª DPCCAI/DPCA/DIRESP - 2ª DELEGACIA DE POLÍCIA DE CRIMES CONTRA CRIANÇA E ADOLESCENTE E ATOS INFRACIONAIS - JABOATÃO DOS GUARARAPES</td>
<td align="left" valign="middle">Endereço: Estrada da Batalha, 924, Prazeres, Jaboatão dos Guararapes/PE - CEP: 54315-010</td>
<td align="left" valign="bottom">(81) 3182-5415 / (81) 3182-5417 / (81) 3182-5418</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DHPP/GCOE/DIRESP - DEPARTAMENTO DE HOMICÍDIOS E DE PROTEÇÃO À PESSOA</td>
<td align="left" valign="middle">Endereço: Rua Dr. João Lacerda, 395, Cordeiro, Recife/PE – CEP: 50.711-280</td>
<td align="left" valign="bottom">(81) 3184-3542 / (81) 3182-5422 / (81) 3184-3544 / (81) 3182-5420 / (81) 3184-3565</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">CFTDHPP/DHPP/GCOE - COORDENAÇÃO DA FORÇA TAREFA</td>
<td align="left" valign="middle">Endereço: Rua Dr. João Lacerda, 395, Cordeiro, Recife/PE – CEP: 50.711-280</td>
<td align="left" valign="bottom">(81) 3184-3549 / (81) 3184-3560 / (81) 3184-3547</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DDPP/DHPP/GCOE - DELEGACIA DE DESAPARECIDOS E DE PROTEÇÃO À PESSOA</td>
<td align="left" valign="middle">Endereço: Rua Dr. João Lacerda, 395, Cordeiro, Recife/PE – CEP: 50.711-280</td>
<td align="left" valign="bottom">(81) 3184-3567 /</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">1ª DPH/DHPP/GCOE - 1ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS</td>
<td align="left" valign="middle">Endereço: Rua Dr. João Lacerda, 395, Cordeiro, Recife/PE – CEP: 50.711-280</td>
<td align="left" valign="bottom">(81) 3184-3546 / (81) 3184-3545</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">2ª DPH/DHPP/GCOE - 2ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS</td>
<td align="left" valign="middle">Endereço: Rua Dr. João Lacerda, 395, Cordeiro, Recife/PE – CEP: 50.711-280</td>
<td align="left" valign="bottom">(81) 3184-3551 / (81) 3184-3550 / (81) 3184-3552</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">3ª DPH/DHPP/GCOE - 3ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS</td>
<td align="left" valign="middle">Endereço: Rua Dr. João Lacerda, 395, Cordeiro, Recife/PE – CEP: 50.711-280</td>
<td align="left" valign="bottom">(81) 3184-3553 / (81) 3184-3554</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">4ª DPH/DHPP/GCOE - 4ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS</td>
<td align="left" valign="middle">Endereço: Rua Dr. João Lacerda, 395, Cordeiro, Recife/PE – CEP: 50.711-280</td>
<td align="left" valign="bottom">(81) 3184-3558 / (81) 3184-3557</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">5ª DPH/DHPP/GCOE - 5ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS</td>
<td align="left" valign="middle">Endereço: Rua Dr. João Lacerda, 395, Cordeiro, Recife/PE – CEP: 50.711-280</td>
<td align="left" valign="bottom">(81) 3184-3562 / (81) 3184-3561</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPI/DHPP/GCOE - DELEGACIA DE POLÍCIA DO IDOSO</td>
<td align="left" valign="middle">Endereço: Rua da Gloria, 301, Boa Vista, Recife/ PE - CEP: 50060-280</td>
<td align="left" valign="bottom">(81) 3184-3772</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DEPATRI/GCOE/DIRESP - DEPARTAMENTO DE REPRESSÃO AOS CRIMES PATRIMONIAIS</td>
<td align="left" valign="middle">Endereço: Rua São Miguel nº 268, Afogados, Recife/PE - CEP. 50850-275</td>
<td align="left" valign="bottom">(81) 3182-5457 / (81) 3182-5452 / (81) 3182-5451 / (81) 3182-5454 / (81) 3182-5459</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPRF/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS</td>
<td align="left" valign="middle">Endereço: Rua São Miguel nº 268, Afogados, Recife/PE - CEP. 50850-275</td>
<td align="left" valign="bottom">(81) 3182-6009 / (81) 3182-6008 / (81) 3182-5498 / (81) 3182-6001 / (81) 3182-6000 / (81) 3182-5497 / (81) 3182-6004 / (81) 3182-6002 / (81) 3182-6003</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPRFV/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS DE VEÍCULOS</td>
<td align="left" valign="middle">Endereço: Rua São Miguel nº 268, Afogados, Recife/PE - CEP. 50850-275</td>
<td align="left" valign="bottom">(81) 3182-5494 / (81) 3182-5485 / (81) 3182-5475 / (81) 3182-5477 / (81) 3182-5474 / (81) 3182-5488 / (81) 3182-5490 / (81) 3182-5491 / (81) 3182-5479 / (81) 3182-5487 / (81) 3182-5483</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPRFC/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS DE CARGAS</td>
<td align="left" valign="middle">Endereço: Rua São Miguel nº 268, Afogados, Recife/PE - CEP. 50850-275</td>
<td align="left" valign="bottom">(81) 3182-6027 / (81) 3182-6020 / (81) 3182-6029 / (81) 3182-6019 / (81) 3182-6021</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPRE/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DE REPRESSÃO AO ESTELIONATO</td>
<td align="left" valign="middle">Endereço: Rua São Miguel nº 268, Afogados, Recife/PE - CEP. 50850-275</td>
<td align="left" valign="bottom">(81) 3182-5467 / (81) 3182-5464 / (81) 3182-5465 / (81) 3182-5466 / (81) 3182-5455 / (81) 3182-5471 / (81) 3182-5470</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPTUR/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DO TURISTA</td>
<td align="left" valign="middle">Endereço: Aeroporto Internacional dos Guararapes, 201, Boa Viagem, – Recife/PE – CEP: 51.210-902</td>
<td align="left" valign="bottom">(81) 3184-3437 / (81) 3184-3438</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPDT/DEPATRI/GCOE - DELEGACIA DE POLÍCIA DE DELITOS DE TRÂNSITO</td>
<td align="left" valign="middle">Endereço: Av. da Recuperação, 95, Dois Irmãos, Recife/PE – CEP: 52.091-010</td>
<td align="left" valign="bottom">(81) 3184-3614 / (81) 3184-3617 / (81) 3184-3616 / (81) 3184-3613</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVAD/DEPATRI/GCOE - DIVISÃO ADMINISTRATIVA DO DEPATRI</td>
<td align="left" valign="middle">Endereço: Rua São Miguel nº 268, Afogados, Recife/PE - CEP. 50850-275</td>
<td align="left" valign="bottom">(81) 3182-5453 / (81) 3182-5460 / (81) 3182-5458</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/DIRESP - DEPARTAMENTO DE REPRESSÃO AO NARCOTRÁFICO</td>
<td align="left" valign="middle">Endereço:Rua da União, 217, Boa Vista, Recife/PE – CEP: 50.050-010</td>
<td align="left" valign="bottom">(81) 3184-7178 / (81) 3184-7174 / (81) 3184-3398 / (81) 3184-3402</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/ASSDENARC - ASSESSORIA DO DENARC</td>
<td align="left" valign="middle">Endereço:Rua da União, 225, Boa Vista, Recife/PE – CEP: 50.050-010</td>
<td align="left" valign="bottom">(81) 3184-3403</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/01ª DPRN - 01ª DP DE REPRESSÃO AO NARCOTRÁFICO</td>
<td align="left" valign="middle">Endereço:Rua da União, 225, Boa Vista, Recife/PE – CEP: 50.050-010</td>
<td align="left" valign="bottom">(81) 3184-7176 / (81) 3184-3399 / (81) 3184-7173</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/02ª DPRN - 02ª DP DE REPRESSÃO AO NARCOTRÁFICO</td>
<td align="left" valign="middle">Endereço:Rua da União, 225, Boa Vista, Recife/PE – CEP: 50.050-010</td>
<td align="left" valign="bottom">(81) 3184-7181 / (81) 3184-3404 / (81) 3184-7180</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/03ª DPRN - 03ª DP DE REPRESSÃO AO NARCOTRÁFICO</td>
<td align="left" valign="middle">Endereço: Rua da União, 225, Boa Vista, Recife/PE – CEP: 50.050-010</td>
<td align="left" valign="bottom">(81) 3184-7177 / (81) 3184-3405 / (81) 3184-7179</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DENARC/04ª DPRN - 04ª DP DE REPRESSÃO AO NARCOTRÁFICO - CABO DE SANTO AGOSTINHO</td>
<td align="left" valign="middle">Endereço: A ser instalada</td>
<td align="left" valign="bottom">&nbsp;</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/05ª DPRN - 05ª DP DE REPRESSÃO AO NARCOTRÁFICO - GOIANA</td>
<td align="left" valign="middle">Endereço: Rua do Jiló, nº 66, Centro, Goiana /PE - CEP: 55900-000</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/06ª DPRN - 06ª DP DE REPRESSÃO AO NARCOTRÁFICO - VITÓRIA DE SANTO ANTÃO</td>
<td align="left" valign="middle">Endereço: A ser instalada</td>
<td align="left" valign="bottom">&nbsp;</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/07ª DPRN - 07ª DP DE REPRESSÃO AO NARCOTRÁFICO - CARUARU</td>
<td align="left" valign="middle">Endereço: Rua Cristóvão Colombo, 99, Nossa Sra das Dores, Caruaru/PE - CEP: 55004-420</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/08ª DPRN - 08ª DP DE REPRESSÃO AO NARCOTRÁFICO - GARANHUNS</td>
<td align="left" valign="middle">Endereço: Rua Barreto Coelho s/n, São José - Garanhuns/PE - CEP: 55293-000</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/09ª DPRN - 09ª DP DE REPRESSÃO AO NARCOTRÁFICO - ARCOVERDE</td>
<td align="left" valign="middle">Endereço: A ser instalada</td>
<td align="left" valign="bottom">&nbsp;</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/10ª DPRN - 10ª DP DE REPRESSÃO AO NARCOTRÁFICO - SERRA TALHADA</td>
<td align="left" valign="middle">Endereço: A ser instalada</td>
<td align="left" valign="bottom">&nbsp;</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/11ª DPRN - 11ª DP DE REPRESSÃO AO NARCOTRÁFICO - OURICURI</td>
<td align="left" valign="middle">Endereço: A ser instalada</td>
<td align="left" valign="bottom">&nbsp;</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DENARC/12ª DPRN - 12ª DP DE REPRESSÃO AO NARCOTRÁFICO - PETROLINA</td>
<td align="left" valign="middle">Endereço: Avenida Cardoso de Sá, s/n, Colônia Imperial, Petrolina/PE - CEP 56328-904</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPMUL/DIRESP - DEPARTAMENTO DE PROTEÇÃO DA MULHER</td>
<td align="left" valign="middle">Endereço: Rua Alfredo Lisboa,188, Bairro do Recife, Recife/PE – CEP: 50030-150</td>
<td align="left" valign="bottom">(81) 3184-3571 / (81) 3184-3570 / (81) 3184-3568 / (81) 3184-3569</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPMUL/01ª DEAM - 01ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - SANTO AMARO</td>
<td align="left" valign="middle">Endereço: Rua do Pombal, Praça do Campo Santo, s/n, Santo Amaro, Recife/PE – CEP: 50100-700</td>
<td align="left" valign="bottom">(81) 3184-3356 / (81) 3184-3359 / (81) 3184-3354 / (81) 3184-3352 / (81) 3184-3357</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPMUL/02ª DEAM - 02ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER – PRAZERES</td>
<td align="left" valign="middle">Endereço: Estrada da Batalha, 924, Prazeres, Jaboatão dos Guararapes/PE - CEP: 54315-010</td>
<td align="left" valign="bottom">(81) 3184-3446 / (81) 3184-3445 / (81) 3184-7198 / (81) 3184-3444</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPMUL/03ª DEAM - 03ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER PETROLINA À MULHER</td>
<td align="left" valign="middle">Endereço: Avenida das Nações, 220, Centro Petrolina/PE - CEP: 56304-360</td>
<td align="left" valign="bottom">(87) 3866-6625</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPMUL/04ª DEAM - 04ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER CARUARU</td>
<td align="left" valign="middle">Endereço: Avenida Portugal, 155, Bairro Universitário, Caruaru/PE - CEP: 55016-400</td>
<td align="left" valign="bottom">(81) 3719-9107 / (81) 3719-9106 / (81) 3719-9108</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPMUL/05ª DEAM - 05ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - PAULISTA</td>
<td align="left" valign="middle">Endereço: Rua do Cajueiro, s/n, Praça Frederico Lundgren, Centro, Paulista/PE - CEP: 53401-908</td>
<td align="left" valign="bottom">(81) 3184-7077 / (81) 3184-7075 / (81) 3184-7071 / (81) 3184-7072 / (81) 3184-7076</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPMUL/06ªDEAM - 06ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - IPOJUCA</td>
<td align="left" valign="middle">Endereço: A ser instalada</td>
<td align="left" valign="bottom">.</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPMUL/07ª DEAM - 07ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - SURUBIM</td>
<td align="left" valign="middle">Endereço: Rua Santos Dumont, nº 85, Centro, Surubim-PE - CEP: 55750000</td>
<td align="left" valign="bottom">(81) 3624-1987 / (81) 3624-1983</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPMUL/08ª DEAM - 08ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - GOIANA</td>
<td align="left" valign="middle">Endereço: Rua Duque de Caxias, nº 661, Centro, Goiana /PE - CEP: 55900-000</td>
<td align="left" valign="bottom">(81) 3626-8509 / (81) 3626-8511 verificar ligando</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPMUL/09ª DEAM - 09ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - GARANHUNS</td>
<td align="left" valign="middle">Endereço: Rua Frei Caneca, nº 460 - Heliópolis - Garanhuns/PE - CEP: 55295-515</td>
<td align="left" valign="bottom">(87) 3761-8510 / (87) 3761-8509 / (87) 3761-8511 / (87) 3761-8507</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPMUL/10ª DEAM - 10ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - VITÓRIA DE SANTO ANTÃO</td>
<td align="left" valign="middle">Endereço: Rua Henrique De Holanda, N° 1333, Redenção, Vitória De Santo Antão/PE. - CEP 55.612-025</td>
<td align="left" valign="bottom">(81) 3526-8788 / (81) 3526-8789</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPMUL/11ª DEAM - 11ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - SALGUEIRO</td>
<td align="left" valign="middle">Endereço: Rua Antônio Figueiredo Sampaio, nº 93, Nossa Senhora das Graças, Salgueiro/PE - CEP: 56.000-000</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPMUL/12ªDEAM-12ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - OURICURI</td>
<td align="left" valign="middle">Endereço: A ser instalada</td>
<td align="left" valign="bottom">.</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPMUL/13ªDEAM-13ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - AFOGADOS DA INGAZEIRA</td>
<td align="left" valign="middle">Endereço: Rua Valdevino José Praxedes, s/nº, Manoela Valadares, Afogados da Ingazeira/PE - CEP: 56800-000</td>
<td align="left" valign="bottom">(87) 3838-8782</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPMUL/14ª DEAM - 14ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - CABO DE SANTO AGOSTINHO</td>
<td align="left" valign="middle">Endereço: Rodovia BR 101, s/n, Pontezinha , Cabo Stº Agostinho/PE - CEP: 54500-001</td>
<td align="left" valign="bottom">(81) 3184-3414 / (81) 3184-3415 / (81) 3184-3413</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPMUL/15ª DEAM - 15ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - OLINDA</td>
<td align="left" valign="middle">Endereço: Avenida Governador Carlos de Lima Cavalcanti, 2405, Casa Caiada,Olinda/PE - CEP: 53130-530</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DPMUL/16ª DEAM - 16ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - PALMARES</td>
<td align="left" valign="middle">Endereço: Av. Capitão Pedro Ivo, nº 590, Centro, Palmares/PE - CEP: 55540-000</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPMUL/17ª DEAM - 17ª DELEGACIA ESPECIALIZADA DE ATENDIMENTO À MULHER - ARCOVERDE</td>
<td align="left" valign="middle">Endereço: Rua Augusto Cavalcante, nº 253, Centro, Arcoverde/PE​​ - CEP: 56506-640</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DECCOT/GCOE/DIRESP - DELEGACIA DE POLÍCIA DE CRIMES CONTRA A ORDEM TRIBUTÁRIA</td>
<td align="left" valign="middle">Endereço: Rua Imperial, 2077, São José, Recife/PE - CEP: 50090-000</td>
<td align="left" valign="bottom">(81) 3182-6116 /</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DECON/GCOE/DIRESP - DELEGACIA DE POLÍCIA DE CRIMES CONTRA O CONSUMIDOR</td>
<td align="left" valign="middle">Endereço: Rua Gervásio Pires, 863, Boa Vista - Recife/PE- CEP: 50060-090</td>
<td align="left" valign="bottom">(81) 3184-3835 / (81) 3184-3837 / (81) 3184-3834</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DRACCO - DEPARTAMENTO DE REPRESSÃO AO CRIME ORGANIZADO E À CORRUPÇÃO</td>
<td align="left" valign="middle">Endereço: Avenida Liberdade, nº 364, Jardim São Paulo - Recife/PE - CEP: 509201-35</td>
<td align="left" valign="bottom">(81) 3184-7125 / (81) 3184-3492 / (81) 3184-3780</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">1ª DECCOR - DRACCO - 1ª DELEGACIA DE POLÍCIA DE REPRESSÃO AO CRIME ORGANIZADO E À CORRUPÇÃO</td>
<td align="left" valign="middle">Endereço:Avenida Liberdade, nº 364, Jardim São Paulo - Recife/PE - CEP: 509201-35</td>
<td align="left" valign="bottom">(81) 3184-3725 / (81) 3184-7124 / (81) 3184-3729</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">2ª DECCOR - DRACCO - 2ª DELEGACIA DE POLÍCIA DE REPRESSÃO AO CRIME ORGANIZADO E À CORRUPÇÃO</td>
<td align="left" valign="middle">Endereço: Avenida Liberdade, nº 364, Jardim São Paulo - Recife/PE - CEP: 509201-35</td>
<td align="left" valign="bottom">(81) 3184-3734 / (81) 3184-3730 / (81) 3184-3738 / (81) 3184-3732</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">POLINTER/GCOE/DIRESP - DELEGACIA DE POLÍCIA INTERESTADUAL E CAPTURAS</td>
<td align="left" valign="middle">Endereço: Avenida Liberdade, nº 364, Jardim São Paulo - Recife/PE - CEP: 509201-35</td>
<td align="left" valign="bottom">(81) 3184-3396 / (81) 3184-3395 / (81) 3184-3394 / (81) 3184-3391 / (81) 3184-3879 / (81) 3184-3877</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DEPOMA/GCOE/DIRESP - DELEGACIA DE POLÍCIA DO MEIO AMBIENTE</td>
<td align="left" valign="middle">Endereço: Rua Itanhenga, 65, Tejipió, Recife/PE – CEP: 50930-380</td>
<td align="left" valign="bottom">(81) 3184-7121 / (81) 3184-7123 / (81) 3184-7119</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DINT/GCOE/DIRESP - DELEGACIA INTERATIVA</td>
<td align="left" valign="middle">Endereço: Rua Gervásio Pires, 863, Boa Vista - Recife/PE- CEP: 50060-090</td>
<td align="left" valign="bottom">(81) 3184-1155 / (81) 3184-1156</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">GOE/GCOE/DIRESP - GRUPO DE OPERAÇÕES ESPECIAIS</td>
<td align="left" valign="middle">Endereço: Rua Odete Monteiro, s/n, Cordeiro, Recife/PE – CEP: 50711-440</td>
<td align="left" valign="bottom">(81) 3184-3315 / (81) 3184-3305 / (81) 3184-3302 / (81) 3184-3303 / (81) 3184-3304 / (81) 3184-3317 / (81) 3184-3311 / (81) 3184-3314 / (81) 3184-3300</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DPCRICI//GCOE/DIRESP - DELEGACIA DE POLÍCIA DE REPRESSÃO AOS CRIMES CIBERNÉTICOS</td>
<td align="left" valign="middle">Endereço: Rua Gervásio Pires, 863, Boa Vista - Recife/PE- CEP: 50060-090</td>
<td align="left" valign="bottom">(81) 3184-1152 / (81) 3184-1150 / 3184-1151 / (81) 3184-1153 / (81) 3184-1157 / (81) 3184-1154</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 36ª CIRC - 1ª TURMA/GCOE/DIRESP - DELEGACIA DE POLÍCIA DA 36ª CIRCUNSCRIÇÃO - FERNANDO DE NORONHA</td>
<td align="left" valign="middle">Endereço: Vila do Trinta - Centro de Conveniência - Fernando de Noronha/PE - CEP: 53990-000</td>
<td align="left" valign="bottom">(81) 3619-0844 / (81) 3619-0845 / (81) 3619-0843</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIM/SUBCP - DIRETORIA INTEGRADA METROPOLITANA</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3244 / (81) 3184-3275 / (81) 3184-3248 / (81) 3184-3241 / (81) 3184-3242 / (81) 3184-3246</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">CEPLANC/DIM - CENTRAL DE PLANTÕES DA CAPITAL</td>
<td align="left" valign="middle">Endereço: Rua Odorico Mendes, 700 – Campo Grande – Recife/PE – CEP 52031-080</td>
<td align="left" valign="bottom">(81) 3182-6077 / (81) 3182-6104 / (81) 3182-6100 / (81) 3182-6097 / (81) 3182-6094 / (81) 3182-6088</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">GCOM/DIM - GERÊNCIA DE CONTROLE OPERACIONAL METROPOLITANO DA POLICIA CIVIL</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3250</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">1ª DESEC/GCOM/DIM - 1ª DELEGACIA SECCIONAL DE POLÍCIA - SANTO AMARO</td>
<td align="left" valign="middle">Endereço: Rua Vicente Ferreira dos Guimarães, 261, Santo Amaro, Recife/PE - CEP: 50100-260</td>
<td align="left" valign="bottom">(81) 3184-3424 / (81) 3184-3421 / (81) 3182-5443</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 1ª CIRC./1ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 1ª CIRCUNSCRIÇÃO - RIO BRANCO</td>
<td align="left" valign="middle">Endereço: Rua Alfredo Lisboa,188, Bairro do Recife, Recife/PE – CEP: 50030-150</td>
<td align="left" valign="bottom">(81) 3184-3453 / (81) 3184-3882 / (81) 3184-3455 / (81) 3184-3452</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 2ª CIRC./1ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 2ª CIRCUNSCRIÇÃO - BOA VISTA</td>
<td align="left" valign="middle">Endereço:Rua Vicente Ferreira dos Guimarães, 261, Santo Amaro, Recife/PE - CEP: 50100-260</td>
<td align="left" valign="bottom">(81) 3184-3425 / (81) 3184-3459 / (81) 3184-3456 (81) 3184-3458</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 3ª CIRC./1ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 3ª CIRCUNSCRIÇÃO - JOANA BEZERRA</td>
<td align="left" valign="middle">Endereço: Av. Visconde de Suassuna, nº 164, Boa Vista, Recife-PE - CEP: 50050-540</td>
<td align="left" valign="bottom">(81) 3184-3520 / (81) 3184-3519 / (81) 3184-3522</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">2ª DESEC/GCOM/DIM - 2ª DELEGACIA SECCIONAL DE POLÍCIA - ESPINHEIRO</td>
<td align="left" valign="middle">Endereço: Rua prof. Othon paraíso, nº 343 - Torreão - Recife/PE - CEP: 52030250</td>
<td align="left" valign="bottom">(81) 3184-3387 / (81) 3184-3384 / (81) 3184-3385</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 4ª CIRC./2ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 4ª CIRCUNSCRIÇÃO - ESPINHEIRO</td>
<td align="left" valign="middle">Endereço:Rua prof. Othon paraíso, nº 343 - Torreão - Recife/PE - CEP: 52030250</td>
<td align="left" valign="bottom">(81) 3184-3378 / (81) 3184-3376</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">POSTO POLICIAL HR - POSTO POLICIAL DO HOSPITAL DA RESTAURAÇÃO</td>
<td align="left" valign="middle">Endereço: Av. Gov. Agamenon Magalhães, s/n - Derby, Recife - PE, 52171-011</td>
<td align="left" valign="bottom">(81) 3184-3383</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 6ª CIRC./2ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 6ª CIRCUNSCRIÇÃO - CORDEIRO</td>
<td align="left" valign="middle">Endereço: Rua Antero Mota, 87 – Cordeiro – Recife/PE – CEP: 50.731-010</td>
<td align="left" valign="bottom">(81) 3184-3408 / (81) 3184-3409 / (81) 3184-3406</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 16ª CIRC./2ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 16ª CIRCUNSCRIÇÃO - ÁGUA FRIA</td>
<td align="left" valign="middle">Endereço: Rua Júlio Ramos, 171 – Água Fria – Recife/PE – CEP: 52.120-170</td>
<td align="left" valign="bottom">(81) 3184-3652 / (81) 3184-3653 / (81) 3184-3650 / (81) 31843651</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">3ª DESEC/GCOM/DIM - 3ª DELEGACIA SECCIONAL DE POLÍCIA - BOA VIAGEM</td>
<td align="left" valign="middle">Endereço: Av. Domingos Ferreira, 4420 – Boa Viagem – Recife/PE – CEP: 51.021-040</td>
<td align="left" valign="bottom">(81) 3184-3328 / (81) 3184-3329</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 7ª CIRC./3ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 7ª CIRCUNSCRIÇÃO - BOA VIAGEM</td>
<td align="left" valign="middle">Endereço:Av. Domingos Ferreira, 4420 – Boa Viagem – Recife/PE – CEP: 51.021-040</td>
<td align="left" valign="bottom">(81) 3184-7149 / (81) 3184-3323 / (81) 3184-7146 / (81) 3184-3325 (81) 3184-7148</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 8ª CIRC./3ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 8ª CIRCUNSCRIÇÃO - JORDÃO</td>
<td align="left" valign="middle">Endereço: Rua Professora Arcelina Camara, 45, Jordão, Recife/PE - CEP: 51250-220</td>
<td align="left" valign="bottom">(81) 3184-3460 / (81) 3184-3461 / (81) 3184-3462 / (81) 3184-3463</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 9ª CIRC./3ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 9ª CIRCUNSCRIÇÃO - IPSEP</td>
<td align="left" valign="middle">Endereço: Rua Jean Emile Favre, s/n, IPSEP, Recife/PE –CEP: 51.190-450</td>
<td align="left" valign="bottom">(81) 3184-3477 / (81) 3184-3478 / (81) 3184-3479</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 10ª CIRC./3ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 10ª CIRCUNSCRIÇÃO - IBURA</td>
<td align="left" valign="middle">Endereço: Av. Campina Grande UR 1, s/n, Ibura - Recife /PE - CEP: 51290-040</td>
<td align="left" valign="bottom">(81) 3184-3774 / (81) 3184-3775 / (81) 3184-3776</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">4ª DESEC/GCOM/DIM - 4ª DELEGACIA SECCIONAL DE POLÍCIA - VÁRZEA</td>
<td align="left" valign="middle">Endereço: Rua Dona Maria Lacerda, 127 - Várzea, Recife/PE - CEP: 50741-011</td>
<td align="left" valign="bottom">(81) 3183-5409 / (81) 3183-5417</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 11ª CIRC./4ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 11ª CIRCUNSCRIÇÃO - AFOGADOS</td>
<td align="left" valign="middle">Endereço: Rua João Carlos Guimarães, 136 - Afogados, Recife/PE – CEP: 50770-150</td>
<td align="left" valign="bottom">(81) 3184-7134 / (81) 3184-3498 / (81) 3184-3499 / (81) 3184-3496</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 12ª CIRC./4ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 12ª CIRCUNSCRIÇÃO - JARDIM SÃO PAULO</td>
<td align="left" valign="middle">Endereço: Praça Jardim São Paulo, 240 , Jardim São Paulo, Recife/PE - CEP: 50781-760</td>
<td align="left" valign="bottom">(81) 3184-3473 / (81) 3184-7118 / (81) 3184-3472 /(81) 3184-3475</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 13ª CIRC./4ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 13ª CIRCUNSCRIÇÃO - MUSTARDINHA</td>
<td align="left" valign="middle">Endereço: Estrada do Bongi Armando da Fonte, 922 - Prado - Recife/PE – CEP: 50830-260</td>
<td align="left" valign="bottom">(81) 3184-3449 / (81) 3184-3448 / (81) 3184-3787</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 14ª CIRC./4ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 14ª CIRCUNSCRIÇÃO - VÁRZEA</td>
<td align="left" valign="middle">Endereço: Rua Dona Maria Lacerda, 127 - Várzea, Recife/PE - CEP: 50741-011</td>
<td align="left" valign="bottom">(81) 3183-5421 / (81) 3183-5420 / (81) 3183-5411 / (81) 3184-5418</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">5ª DESEC/GCOM/DIM - 5ª DELEGACIA SECCIONAL DE POLÍCIA - APIPUCOS</td>
<td align="left" valign="middle">Endereço: Rua Dois Irmãos, 15 – Apipucos – Recife/PE – CEP: 52071-440</td>
<td align="left" valign="bottom">(81) 3183-5477 / (81) 3183-5488</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 5ª CIRC./5ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 5ª CIRCUNSCRIÇÃO - CASA AMARELA</td>
<td align="left" valign="middle">Endereço: Rua Paula Batista, 616 - Casa Amarela - Recife/PE - CEP: 52070-070</td>
<td align="left" valign="bottom">(81) 3184-3430/ (81) 3184-3798 / (81) 3184-3431 / (81) 3184-3426 / (81) 3184-3427</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 15ª CIRC./5ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 15ª CIRCUNSCRIÇÃO - ALTO DO PASCOAL</td>
<td align="left" valign="middle">Endereço: Avenida Aníbal Benévolo, nº 1728, Alto Santa Terezinha, Recife/ PE – CEP: 52130-220</td>
<td align="left" valign="bottom">(81) 3184-3482 / (81) 3184-3483 / (81) 3184-3480 / (81) 3184-3481</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 17ª CIRC./5ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 17ª CIRCUNSCRIÇÃO - VASCO DA GAMA</td>
<td align="left" valign="middle">Endereço: Rua Vasco da Gama, s/n, Vasco da Gama, Recife /PE - CEP: 52171-011</td>
<td align="left" valign="bottom">(81) 3184-3628 / (81) 3184-3629 / (81) 3184-3625 / (81) 3184-3626</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 18ª CIRC./5ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 18ª CIRCUNSCRIÇÃO - MACAXEIRA</td>
<td align="left" valign="middle">Endereço: Av. Ver. Otacílio de Azevedo, nº 2880, Lote 27, Quadra "B" Brejo De Guabiraba - Nova Descoberta – Recife/PE - CEP: 52191000</td>
<td align="left" valign="bottom">(81) 3184-3673 / (81) 3184-3674 / (81) 3184-3675 / (81) 3184-3676</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">6ª DESEC/GCOM/DIM - 6ª DELEGACIA SECCIONAL DE POLÍCIA - JABOATÃO DOS GUARARAPES</td>
<td align="left" valign="middle">Endereço: Estrada da Batalha, 924, Prazeres, Jaboatão dos Guararapes/PE - CEP: 54315-010</td>
<td align="left" valign="bottom">(81) 3183-5492 / (81) 3183-5493 / (81) 3183-5694</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">1ª DP 19ª CIRC./6ª DESEC/GCOM - 1ª DELEGACIA DE POLÍCIA DA 19ª CIRCUNSCRIÇÃO - PRAZERES</td>
<td align="left" valign="middle">Endereço: Estrada da Batalha, 924, Prazeres, Jaboatão dos Guararapes/PE - CEP: 54315-010</td>
<td align="left" valign="bottom">(81) 3183-5699 / (81) 3183-5497 / (81) 3183-5996 / (81) 3183-5496</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">2ª DP 19ª CIRC./6ª DESEC/GCOM - 2ª DELEGACIA DE POLÍCIA DA 19ª CIRCUNSCRIÇÃO - MURIBECA</td>
<td align="left" valign="middle">Endereço: Estrada da Batalha, 924, Prazeres, Jaboatão dos Guararapes/PE - CEP: 54315-010</td>
<td align="left" valign="bottom">(81) 3183-5490</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 20ª CIRC./6ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 20ª CIRCUNSCRIÇÃO - JABOATÃO DOS GUARARAPES</td>
<td align="left" valign="middle">Endereço: Avenida Barão de Lucena, 330, Centro, Jaboatão dos Guararapes/PE - CEP: 54110-005</td>
<td align="left" valign="bottom">(81) 3184-3441 / (81) 3184-3440 / (81) 3184-3439 / (81) 3184-7129</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 21ª CIRC./6ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 21ª CIRCUNSCRIÇÃO - MORENO</td>
<td align="left" valign="middle">Endereço: Rua Artur Mendonça, n° 253, Centro, Moreno/PE - CEP: 54800-000</td>
<td align="left" valign="bottom">(81) 3184-3634 / (81) 3184-3635 (81) 3184-3631 / (81) 3184-3632</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 22ª CIRC./6ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 22ª CIRCUNSCRIÇÃO - PIEDADE</td>
<td align="left" valign="middle">Endereço: Rua São Sebastião, S/N, Piedade, Jaboatão dos Guararapes/PE CEP: 54410-500</td>
<td align="left" valign="bottom">(81) 3184-3831 / (81) 3184-3832</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 23ª CIRC./6ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 23ª CIRCUNSCRIÇÃO - CAVALEIRO</td>
<td align="left" valign="middle">Endereço: Rua 15 de Novembro, s/n, Cavaleiro, Jaboatão dos Guararapes/PE - CEP: 54250-480</td>
<td align="left" valign="bottom">(81) 3184-3502 / (81) 3184-3503 / (81) 3184-3789</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">7ª DESEC/GCOM/DIM - 7ª DELEGACIA SECCIONAL DE POLÍCIA - OLINDA</td>
<td align="left" valign="middle">Endereço: Rua José Dias Raposo 1000, Morro do Peludo, Ouro Preto - Olinda/PE - CEP: 53370-420</td>
<td align="left" valign="bottom">(81) 3184-3644 / (81) 3184-3645 / (81) 3184-3890</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 24ª CIRC./7ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 24ª CIRCUNSCRIÇÃO - VARADOURO</td>
<td align="left" valign="middle">Endereço: Avenida Olinda, nº 160, Varadouro, Olinda/ PE - CEP: 53020-081</td>
<td align="left" valign="bottom">(81) 3184-3720 / (81) 3184-3721 / (81) 3184-3722 / (81) 3184-3723 / (81) 3184-3724 / (81) 3184-7159</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 25ª CIRC./7ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 25ª CIRCUNSCRIÇÃO - PEIXINHOS</td>
<td align="left" valign="middle">Endereço: Avenida Nacional,333, Peixinhos, Olinda/PE - CEP: 53220-460</td>
<td align="left" valign="bottom">(81) 3184-3680 / (81) 3184-3681 / (81) 3184-3678</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 26ª CIRC./7ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 26ª CIRCUNSCRIÇÃO - RIO DOCE</td>
<td align="left" valign="middle">Endereço: Avenida Brasil, s/n, Rio Doce, Olinda/PE - CEP: 53150-470</td>
<td align="left" valign="bottom">(81) 3184-7099 / (81) 3184-3638 / (81) 3184-3637</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">8ª DESEC/GCOM/DIM - 8ª DELEGACIA SECCIONAL DE POLÍCIA - PAULISTA</td>
<td align="left" valign="middle">Endereço: Rua do Cajueiro, s/n, Praça Frederico Lundgren, Centro, Paulista/PE - CEP: 53401-908</td>
<td align="left" valign="bottom">(81) 3184-7050 / (81) 3184-7053 / (81) 3184-7093 / (81) 3184-7073</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 27ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 27ª CIRCUNSCRIÇÃO - ABREU E LIMA</td>
<td align="left" valign="middle">Endereço: Rua Marechal Mascarenhas de Moraes, nº 137, Timbó, Abreu e Lima/PE - CEP: 53520-140</td>
<td align="left" valign="bottom">(81) 3184-3536 / (81) 3184-3533 / (81) 3184-3534</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 28ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 28ª CIRCUNSCRIÇÃO - PAULISTA</td>
<td align="left" valign="middle">Endereço: Rua do Cajueiro, s/n, Praça Frederico Lundgren, Centro, Paulista/PE - CEP: 53401-908</td>
<td align="left" valign="bottom">(81) 3184-7065 / (81) 3184-7058 / (81) 3184-7069 / (81) 3184-7068</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 29ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 29ª CIRCUNSCRIÇÃO - IGARASSU</td>
<td align="left" valign="middle">Endereço: Rua Severino Uchoa Cavalcante, 63 – Centro – Igarassu /PE – CEP: 53810-635</td>
<td align="left" valign="bottom">(81) 3184-3490 / (81) 3184-3491 / (81) 3184-3489</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 30ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 30ª CIRCUNSCRIÇÃO - ITAMARACÁ</td>
<td align="left" valign="middle">Endereço: Av. João Pessoa Guerra, 65 , Pilar, Itamaracá/PE – CEP: 53.900-000</td>
<td align="left" valign="bottom">(81) 3184-3435 / (81) 3184-3436 / (81) 3184-3433</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 31ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 31ª CIRCUNSCRIÇÃO - ITAPISSUMA</td>
<td align="left" valign="middle">Endereço: Rua Frei Serafim, 114 - Centro, Itapissuma /PE - CEP: 53700-000</td>
<td align="left" valign="bottom">(81) 3184-3611 / (81) 3184-3608 / (81) 3184-3609</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 32ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 32ª CIRCUNSCRIÇÃO - ENGENHO MARANGUAPE</td>
<td align="left" valign="middle">Endereço: Av. Claudio Gueiros Leite s/n, Janga , Paulista/PE – CEP: 53427-085</td>
<td align="left" valign="bottom">(81) 3184-3509 / (81) 3184-3875 / (81) 3184-3510 / (81) 3184-3874</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 33ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 33ª CIRCUNSCRIÇÃO - CRUZ DE REBOUÇAS</td>
<td align="left" valign="middle">Endereço: Av. Luciana de Paiva, 100 , Centro, Cruz de Rebouças, Igarassu/PE – CEP: 53630-710</td>
<td align="left" valign="bottom">(81) 3184-3794 / (81) 3184-3487 / (81) 3184-3484 / (81) 3184-3485</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 34ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 34ª CIRCUNSCRIÇÃO - MARIA FARINHA</td>
<td align="left" valign="middle">Endereço: Av. Claudio Gueiros Leite, 9605 - Maria Farinha – Paulista/PE – CEP: 53427-085</td>
<td align="left" valign="bottom">(81) 3184-3525 / (81) 3184-3527 / (81) 31843523</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 35ª CIRC./8ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 35ª CIRCUNSCRIÇÃO - ARAÇOIABA</td>
<td align="left" valign="middle">Endereço: Rua José Luiz Da Silva, n° 895-A, Centro, Araçoiaba/PE - CEP: 53690000</td>
<td align="left" valign="bottom">(81) 3546-1002 / (81) 3546-1004 / (81) 3546-1001</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">9ª DESEC/GCOM/DIM - 9ª DELEGACIA SECCIONAL DE POLÍCIA - SÃO LOURENÇO DA MATA</td>
<td align="left" valign="middle">Endereço: Rua Padre Oséas Cavalcante, s/n, Novo do Carmelo - Camaragibe/PE - CEP: 54759-060</td>
<td align="left" valign="bottom">(81) 3184-3607 / (81) 3184-3606</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 37ª CIRC./9ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 37ª CIRCUNSCRIÇÃO - CAMARAGIBE</td>
<td align="left" valign="middle">Endereço: Rua Padre Oséas Cavalcante, s/n, Novo do Carmelo - Camaragibe/PE - CEP: 54759-060</td>
<td align="left" valign="bottom">(81) 3184-3765 / (81) 3184-3766 / (81) 3184-3764 / (81) 3184-3662 / (81) 3184-3768</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 38ª CIRC./9ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 38ª CIRCUNSCRIÇÃO - SÃO LOURENÇO DA MATA</td>
<td align="left" valign="middle">Endereço: Rua Dr. Francisco Correia, 74 , Centro , São Lourenço da Mata/PE - CEP: 54735-000</td>
<td align="left" valign="bottom">(81) 3184-3717 / (81) 3184-3880 / (81) 3184-3715 / (81) 3184-3716</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">10ª DESEC/GCOM/DIM - 10ª DELEGACIA SECCIONAL DE POLÍCIA - CABO DE SANTO AGOSTINHO</td>
<td align="left" valign="middle">Endereço: Rua Nova, nº 233 (Antiga Rua Armínio Guilherme dos Santos, n° 55) Jardim Santo Inácio, Quadra 25, Lotes 4D, Cabo de Santo Agostinho/PE - CEP: 54515535</td>
<td align="left" valign="bottom">(81) 3182-5449 / (81) 3182-5445 / (81) 3182-6042</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 40ª CIRC./10ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 40ª CIRCUNSCRIÇÃO - CABO DE SANTO AGOSTINHO</td>
<td align="left" valign="middle">Endereço: Rodovia BR 101, KM 33, antiga estrada do engenho velho , Cabo Stº Agostinho/PE - CEP: 54500-001</td>
<td align="left" valign="bottom">(81) 3184-3872 / (81) 3184-3468 / (81) 3184-3464 / (81) 3184-3465</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 41ª CIRC.10ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 41ª CIRCUNSCRIÇÃO - PONTE DOS CARVALHOS</td>
<td align="left" valign="middle">Endereço: Rua Bom Sucesso, nº 36, Lote 10, Quadra F-1, Loteamento Jardim Bom Sucesso, Ponte Dos Carvalhos, Cabo De Santo Agostinho/PE - CEP: 54580402</td>
<td align="left" valign="bottom">(81) 3184-3532 / (81) 3184-3530 / (81) 3184-3531</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 42ª CIRC.10ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 42ª CIRCUNSCRIÇÃO - IPOJUCA</td>
<td align="left" valign="middle">Endereço: Rua Hilda da Costa Monteiro, 172, Centro, Ipojuca/PE – CEP: 55590-000</td>
<td align="left" valign="bottom">(81) 3561-1931 / (81) 3561-1932</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 43ª CIRC.10ª DESEC/GCOM - DELEGACIA DE POLÍCIA DA 43ª CIRCUNSCRIÇÃO - PORTO DE GALINHAS</td>
<td align="left" valign="middle">Endereço: Rua Praça Dois, 56, Porto de Galinhas, Ipojuca/PE - CEP: 55590-000</td>
<td align="left" valign="bottom">(81) 3561-1940 / (81) 3561-1939 / (81) 3561-1941 / (81) 3561-1937</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DIVPLOM/GCOM/DIM - DIVISÃO DE PLANEJAMENTO OPERACIONAL METROPOLITANO</td>
<td align="left" valign="middle">Endereço: Rua da Aurora, 487 – Boa Vista - Recife/PE - CEP: 50.050-000</td>
<td align="left" valign="bottom">(81) 3184-3249</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DINTER 1/SUBCP - DIRETORIA INTEGRADA DO INTERIOR 1</td>
<td align="left" valign="middle">Endereço: BR 104, KM 67,Pinheirópolis, Caruaru/PE - CEP 55032-670</td>
<td align="left" valign="bottom">(81) 3725-7486 / (81) 3719-9146 / (81) 3719-9145</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">11ª DESEC/GCOI 1/DINTER 1 - 11ª DELEGACIA SECCIONAL DE POLÍCIA - GOIANA</td>
<td align="left" valign="middle">Endereço: Rua do Jiló, nº 66, Centro, Goiana /PE - CEP: 55900-000</td>
<td align="left" valign="bottom">(81) 3626-8695 / (81) 3626-8693 / (81) 3626-8694 / (81) 3626-8690 / (81) 3626-8691</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">1ª DP 44ª CIRC./11ª DESEC/GCOI 1 - 1ª DELEGACIA DE POLÍCIA DA 44ª CIRCUNSCRIÇÃO - GOIANA</td>
<td align="left" valign="middle">Endereço: Rua do Jiló, nº 66, Centro, Goiana /PE - CEP: 55900-000</td>
<td align="left" valign="bottom">(81) 3626-8686 / (81) 36226-8683</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 45ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 45ª CIRCUNSCRIÇÃO - CARPINA</td>
<td align="left" valign="middle">Endereço: Av. Ernesto Pompílio, n° 111, Santo Antônio - Carpina/PE - CEP: 55816-430</td>
<td align="left" valign="bottom">(81) 3622-8951 / (81) 3622-8949</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 46ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 46ª CIRCUNSCRIÇÃO - TIMBAÚBA</td>
<td align="left" valign="middle">Endereço: Rua Ismael Gouveia, 224, Centro, Timbaúba/PE- CEP: 55870-000</td>
<td align="left" valign="bottom">(81) 3631-5273 / (81) 3631-5237 / (81) 3631-5238</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 47ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 47ª CIRCUNSCRIÇÃO - PAUDALHO</td>
<td align="left" valign="middle">Endereço:Av. Senador Pinheiro Ramos, 460, Centro, Paudalho/PE – CEP: 55.825-000</td>
<td align="left" valign="bottom">(81) 3636-5618 / (81) 3636-5619</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 48ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 48ª CIRCUNSCRIÇÃO - ALIANÇA</td>
<td align="left" valign="middle">Endereço: Rua Juvino Gomes, nº 68, Centro, Aliança/PE - CEP: 55890-000</td>
<td align="left" valign="bottom">(81) 3637-5806 / (81) 3637-5803</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 49ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 49ª CIRCUNSCRIÇÃO - ITAMBÉ</td>
<td align="left" valign="middle">Endereço: Rua Joaquim Nabuco, 132, Centro, Itambé/PE – CEP: 55920-000</td>
<td align="left" valign="bottom">(81) 3635-3915 / (81) 3635-3913</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 50ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 50ª CIRCUNSCRIÇÃO - NAZARÉ DA MATA</td>
<td align="left" valign="middle">Endereço: Rua Coronel Luiz Inácio, s/n, Centro, Nazaré da Mata/PE - CEP: 55800-000</td>
<td align="left" valign="bottom">(81) 3633-4982 / (81) 3633-4980 / (81) 3633-4984</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 51ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 51ª CIRCUNSCRIÇÃO - VICÊNCIA</td>
<td align="left" valign="middle">Endereço: Rua Profª. Mota Albuquerque, s/n, Centro, Vicência/PE – CEP: 55850-000</td>
<td align="left" valign="bottom">(81) 3641-2802 / (81) 3641-2805</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 52ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 52ª CIRCUNSCRIÇÃO - MACAPARANA</td>
<td align="left" valign="middle">Endereço: Rua João Francisco, 134, Centro, Macaparana/PE – CEP: 55865-000</td>
<td align="left" valign="bottom">(81) 3639-2903 / (81) 3639-2902</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 53ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 53ª CIRCUNSCRIÇÃO - CONDADO</td>
<td align="left" valign="middle">Endereço:Travessa Severino Uchôa, Nº 07, Centro, Condado/PE - CEP 55940000</td>
<td align="left" valign="bottom">(81) 3642-0907 / (81) 3642-0905</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 54ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 54ª CIRCUNSCRIÇÃO - LAGOA DE ITAENGA</td>
<td align="left" valign="middle">Endereço: Rua Leopoldina Pinheiro, 140, Centro, Lagoa do Itaenga/PE - CEP: 55840-000</td>
<td align="left" valign="bottom">(81) 3653-2905 / (81) 3653-2906 / (81) 3653-2903</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 55ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 55ª CIRCUNSCRIÇÃO - ITAQUITINGA</td>
<td align="left" valign="middle">Endereço: Av. Joaquim bezerra Pereira de Lira, Nº 30, Centro, Itaquitinga/PE - CEP 55950-000</td>
<td align="left" valign="bottom">(81) 3614-1906 / (81) 3614-1903</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 56ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 56ª CIRCUNSCRIÇÃO - LAGOA DO CARRO</td>
<td align="left" valign="middle">Endereço: Rua Antônio Francisco da Silva, n° 47 - Centro - Lagoa Do Carro/PE, CEP: 55815-999</td>
<td align="left" valign="bottom">(81) 3621-9904 / (81) 3621-9901</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 57ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 57ª CIRCUNSCRIÇÃO - TRACUNHAÉM</td>
<td align="left" valign="middle">Endereço: Rua Antônio Felipe de Souza, n.º 110 - Centro - Tracunhaém - PE - CEP: 55805-000</td>
<td align="left" valign="bottom">(81) 3646-1908 / (81) 3646-1905</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 58ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 58ª CIRCUNSCRIÇÃO - BUENOS AIRES</td>
<td align="left" valign="middle">Endereço: Av. João T. de Azevedo, Buenos Aires - PE, 55845-000</td>
<td align="left" valign="bottom">(81) 3647-1908 / (81) 3647-1905</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 59ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 59ª CIRCUNSCRIÇÃO - FERREIROS</td>
<td align="left" valign="middle">Endereço: Av. Monsenhor Júlio Maria, n.º 95, Centro, Ferreiros/PE - CEP: 55880-000</td>
<td align="left" valign="bottom">(81) 3657-1906 / (81) 3657-1903</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 60ª CIRC./11ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 60ª CIRCUNSCRIÇÃO - CAMUTANGA</td>
<td align="left" valign="middle">Endereço: Rua Ciro Alves, nº 90 - Centro – Camutanga/PE - CEP: 55930-000</td>
<td align="left" valign="bottom">(81) 3652-1903 / (81) 3652-1904</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">12ª DESEC/GCOI 1/DINTER 1 - 12ª DELEGACIA SECCIONAL DE POLÍCIA - VITÓRIA DE SANTO ANTÃO</td>
<td align="left" valign="middle">Endereço: Rua Henrique De Holanda, N° 1333, Redenção, Vitória De Santo Antão/PE. - CEP 55.612-025</td>
<td align="left" valign="bottom">(81) 3526-8928 / (81) 3526-8786 / (81) 3526-8929</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 61ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 61ª CIRCUNSCRIÇÃO - VITÓRIA DE STO. ANTÃO</td>
<td align="left" valign="middle">Endereço:Rua Henrique De Holanda, N° 1333, Redenção, Vitória De Santo Antão/PE. - CEP 55.612-025</td>
<td align="left" valign="bottom">(81) 3526-8874 / (81) 3526-8875 / (81) 3526-8872 / (81) 3526-8873</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 62ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 62ª CIRCUNSCRIÇÃO - GRAVATÁ</td>
<td align="left" valign="middle">Endereço: Tv. Quintino Bocaiúva, s/n, Centro, Gravatá/PE - CEP: 55642-011</td>
<td align="left" valign="bottom">(81) 3533-9836 / (81) 3533-9833 / (81) 3533-9837</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 63ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 63ª CIRCUNSCRIÇÃO - ESCADA</td>
<td align="left" valign="middle">Endereço: Rua Mangueira s/n, Atalaia, Escada/PE - CEP: 55500-000</td>
<td align="left" valign="bottom">(81) 3658-2908 / (81) 3658-2905 / (81) 3658-2906</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 64ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 64ª CIRCUNSCRIÇÃO - GLÓRIA DO GOITÁ</td>
<td align="left" valign="middle">Endereço: Rua Maria José Borges, nº 58, Centro, Glória Do Goitá/PE - CEP: 55620-000</td>
<td align="left" valign="bottom">(81) 3534-8965 / (81) 3534-8962 / (81) 3534-8964</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 65ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 65ª CIRCUNSCRIÇÃO - POMBOS</td>
<td align="left" valign="middle">Endereço:Rua Vila Brasil, Nº 71, Bairro Vila Brasil, Pombos/PE - CEP 55630-000</td>
<td align="left" valign="bottom">(81) 3536-2806 / (81) 3536-2803 / (81) 3536-2804</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 66ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 66ª CIRCUNSCRIÇÃO - AMARAJI</td>
<td align="left" valign="middle">Endereço: Praca Doutor Jorge Coelho Silveira, s/n, Centro, Amaraji/PE - CEP: 55515-000</td>
<td align="left" valign="bottom">(81) 3553-2909 / (81) 3553-2910</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 67ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 67ª CIRCUNSCRIÇÃO - CHÃ GRANDE</td>
<td align="left" valign="middle">Endereço: Rua Noberto Cruz, nº 273, Dom Helder Camara, Chã Grande/PE - CEP:55636-000</td>
<td align="left" valign="bottom">(81) 3537-2105 / (81) 3537-2106</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 68ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 68ª CIRCUNSCRIÇÃO - PRIMAVERA</td>
<td align="left" valign="middle">Endereço: Rua Santo Antonio, nº 34 - Centro, Primavera/PE - CEP 55510-000</td>
<td align="left" valign="bottom">(81) 3562-1914 / (81) 3562-1915</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 69ª CIRC./12ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 69ª CIRCUNSCRIÇÃO - CHÃ DE ALEGRIA</td>
<td align="left" valign="middle">Endereço: Rua Dom Bernardo Otto, s/n, Centro, Chã de Alegria/PE - CEP: 55835-000</td>
<td align="left" valign="bottom">(81) 3581-1907 / (81) 3581-1904</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">13ª DESEC/GCOI 1/DINTER 1 - 13ª DELEGACIA SECCIONAL DE POLÍCIA - PALMARES</td>
<td align="left" valign="middle">Endereço: Avenida Jose Americo Miranda, s/n, Santa Rosa - Palmares/PE - CEP: 55540-000</td>
<td align="left" valign="bottom">(81) 3662-0110 / (81) 3662-0113 / 3662-0111</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 70ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 70ª CIRCUNSCRIÇÃO - PALMARES</td>
<td align="left" valign="middle">Endereço:Avenida Jose Americo Miranda, s/n, Santa Rosa - Palmares/PE - CEP: 55540-000</td>
<td align="left" valign="bottom">(81) 3662-0122</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 71ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 71ª CIRCUNSCRIÇÃO - RIBEIRÃO</td>
<td align="left" valign="middle">Endereço: Av. Mário Domingues, s/n, Cohab, Ribeirão/PE – CEP: 55520-000</td>
<td align="left" valign="bottom">(81) 3671-5608 / (81) 3671-5606</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 72ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 72ª CIRCUNSCRIÇÃO - BARREIROS</td>
<td align="left" valign="middle">Endereço:Av. Presidente Juscelino Kubistchek, 107, Centro, Barreiros/PE - CEP: 55560-000</td>
<td align="left" valign="bottom">(81) 3675-5856 / (81) 3675-5857</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 73ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 72ª CIRCUNSCRIÇÃO - SIRINHAÉM</td>
<td align="left" valign="middle">Endereço: R. Sebastião Chaves, s/n ,Centro, Sirinhaém /PE - CEP: 55580-000</td>
<td style="text-align: left;" align="right" valign="bottom">(81) 3577-2606 / (81) 3577-2608</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 74ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 74ª CIRCUNSCRIÇÃO - CATENDE</td>
<td align="left" valign="middle">Endereço: Rua 15 de Novembro, 71, Centro, Catende/PE – CEP: 55400-000</td>
<td align="left" valign="bottom">(81) 3673-5934 / (81) 3673-5931</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 75ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 75ª CIRCUNSCRIÇÃO - ÁGUA PRETA</td>
<td align="left" valign="middle">Endereço: Praça dos Três Poderes, 3027, Centro, Água Preta/PE – CEP: 55550-970</td>
<td align="left" valign="bottom">(81) 3681-3904 / (81) 3681-3902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 76ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 76ª CIRCUNSCRIÇÃO - GAMELEIRA</td>
<td align="left" valign="middle">Endereço: Avenida Luiz Rodolfo, 02, Centro, Gameleira – PE - CEP: 55530-000</td>
<td align="left" valign="bottom">(81) 3679-2903 / (81) 3679-2904 / (81) 3679-2902</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 077ª CIRC./13ª DESEC - DELEGACIA DE POLÍCIA DA 077ª CIRCUNSCRIÇÃO - QUIPAPÁ</td>
<td align="left" valign="middle">Endereço:Rua Tito Galvão, nº 78, Centro, Quipapá/PE - CEP:55415000</td>
<td style="text-align: left;" align="right" valign="bottom">(81) 3685-2909 / (81) 3685-2906</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 78ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 78ª CIRCUNSCRIÇÃO - RIO FORMOSO</td>
<td align="left" valign="middle">Endereço: Rua Siqueira Campos, 64, Centro, Rio Formoso/PE – CEP: 55570-000</td>
<td align="left" valign="bottom">(81) 3678-2805</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 79ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 79ª CIRCUNSCRIÇÃO - TAMANDARÉ</td>
<td align="left" valign="middle">Endereço: Rua Nova Campina, nº 758, Tamandaré/PE - CEP: 55578-000</td>
<td align="left" valign="bottom">(81) 3676-3903 / (81) 3676-3901</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 80ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 80ª CIRCUNSCRIÇÃO - JOAQUIM NABUCO</td>
<td align="left" valign="middle">Endereço:Rua Manoel José Da Costa Filho, n º 30, Centro, Joaquim Nabuco/PE - CEP: 55535-000</td>
<td align="left" valign="bottom">(81) 3682-1906 / (81) 3682-1903</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 81ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 81ª CIRCUNSCRIÇÃO - MARAIAL</td>
<td align="left" valign="middle">Endereço: Av. Salvador Teixeira, 238, Centro, Maraial/PE – CEP: 55.405-000</td>
<td align="left" valign="bottom">(81) 3683-1907 / (81) 3683-1908 / (81) 3683-1905</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 82ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 82ª CIRCUNSCRIÇÃO - SÃO JOSÉ DA COROA GRANDE</td>
<td align="left" valign="middle">Endereço: Rua Lídio Florentino, nº 68 - Centro - São José Da Coroa Grande/PE - CEP 55565000</td>
<td align="left" valign="bottom">(81) 3688-2906 / (81) 3688-2903</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 83ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 83ª CIRCUNSCRIÇÃO - XEXÉU</td>
<td align="left" valign="middle">Endereço: Rua Da Linha, nº 625, Centro - Xexéu/PE - CEP 55555-000</td>
<td align="left" valign="bottom">(81) 3681-8826 / (81) 3681-8823</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 84ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 84ª CIRCUNSCRIÇÃO - CORTÊS</td>
<td align="left" valign="middle">Endereço:Rua 13 de Maio, s/n, Centro, Cortês/PE – CEP: 55525-000</td>
<td align="left" valign="bottom">(81) 3695-2904 / (81) 3695-2901</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 85ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 85ª CIRCUNSCRIÇÃO - JAQUEIRA</td>
<td align="left" valign="middle">Endereço: Rua Vereador Luiz Nova Cosque, n° 287, Centro, Jaqueira/PE - CEP: 55409-000</td>
<td align="left" valign="bottom">(81) 3689-1903 / (81) 3689-1904</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 86ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 86ª CIRCUNSCRIÇÃO - BELÉM DE MARIA</td>
<td align="left" valign="middle">Endereço: Rua Jeter Carlos, nº 48 - Centro - Belém De Maria/PE – CEP: 55440-999</td>
<td align="left" valign="bottom">(81) 3686-1905 / (81) 3686-1906</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 87ª CIRC./13ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 87ª CIRCUNSCRIÇÃO - SÃO BENEDITO DO SUL</td>
<td align="left" valign="middle">Endereço: Rua da Boa Vista, nº 12, Centro, São Benedito Do Sul/PE - CEP: 55410-000</td>
<td align="left" valign="bottom">(81) 3684-1704 / (81) 3684-1701</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">14ª DESEC/GCOI 1/DINTER 1 - 14ª DELEGACIA SECCIONAL DE POLÍCIA - CARUARU</td>
<td align="left" valign="middle">Endereço: BR 104, KM 67,Pinheirópolis, Caruaru/PE - CEP 55032-670</td>
<td align="left" valign="bottom">(81) 3719-9104 / (81) 3719-9102 / (81) 3719-9105 / (81) 3719-9103</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 88ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 88ª CIRCUNSCRIÇÃO - CARUARU</td>
<td align="left" valign="middle">Endereço:Rua Cristóvão Colombo, 99, Nossa Sra das Dores, Caruaru/PE - CEP: 55004-420</td>
<td align="left" valign="bottom">(81) 3725-7481 / (81) 3719-9600 / (81) 3725-7480 / (81) 3725-7483 / (81) 3725-7485 / (81) 3719-9601 / (81) 3719-9599</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 89ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 89ª CIRCUNSCRIÇÃO - CARUARU</td>
<td align="left" valign="middle">Endereço: Rua Doutor Bartolomeu Anacleto, s/n, Salgado, Caruaru/PE - CEP: 55018-320</td>
<td align="left" valign="bottom">(81) 3719-9605 / (81) 3719-9606 / (81) 3719-9603 / (81) 3719-9604</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 90ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 90ª CIRCUNSCRIÇÃO - CARUARU</td>
<td align="left" valign="middle">Endereço: BR 104, KM 67,Pinheirópolis, Caruaru/PE - CEP 55032-670</td>
<td align="left" valign="bottom">(81) 3719-9596 / (81) 3719-9597 / (81) 3719-9594 / (81) 3719-9595</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">POSTO POLICIAL - POSTO POLICIAL DO HOSPITAL REGIONAL DO AGRESTE</td>
<td align="left" valign="middle">Endereço: Rodovia BR-232, Km 130, s/n - Indianópolis, Caruaru/PE - CEP: 55002-970</td>
<td align="left" valign="bottom">(81) 3719-9602</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 91ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 91ª CIRCUNSCRIÇÃO - BEZERROS</td>
<td align="left" valign="middle">Endereço: Av. Francisca de Moraes Lemos, s/n, São Sebastião, Bezerros/PE - CEP: 55660-000</td>
<td align="left" valign="bottom">(81) 3728-6673 / (81) 3728-6674 / (81) 3728-6671 / (81) 3728-6672</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 92ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 92ª CIRCUNSCRIÇÃO - BONITO</td>
<td align="left" valign="middle">Endereço:Rua Severino Mirandolino, nº 13, Centro, Bonito/PE – CEP: 55680000</td>
<td align="left" valign="bottom">(81) 3737-3910 / (81) 3737-3911 / (81) 3737-3908</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 94ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 94ª CIRCUNSCRIÇÃO - CUPIRA</td>
<td align="left" valign="middle">Endereço: Avenida Presidente Getúlio Vargas, 114, Centro, Cupira /PE - CEP 56180-000</td>
<td align="left" valign="bottom">(81) 3738-2910 / (81) 3738-2907</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 95ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 95ª CIRCUNSCRIÇÃO - ALTINHO</td>
<td align="left" valign="middle">Endereço:Rua Siqueira Campos, nº 41, Centro - Altinho/PE - CEP: 55490-000</td>
<td align="left" valign="bottom">(81) 3739-2906 / (81) 3739-2923</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 96ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 96ª CIRCUNSCRIÇÃO - AGRESTINA</td>
<td align="left" valign="middle">Endereço: Rua Pref. Sebastião Grande, 5, Agrestina/PE - CEP: 55495-000</td>
<td align="left" valign="bottom">(81) 3744-3905 / (81) 3744-3904 / (81) 3744-3906</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 97ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 97ª CIRCUNSCRIÇÃO - SÃO JOAQUIM DO MONTE</td>
<td align="left" valign="middle">Endereço: Rua José Cândido da Silva, nº 5, Centro, São Joaquim do Monte/PE - CEP: 55670-000</td>
<td align="left" valign="bottom">(81) 3753-2902 / (81) 3753-2905</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 98ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 98ª CIRCUNSCRIÇÃO - RIACHO DAS ALMAS</td>
<td align="left" valign="middle">Endereço: Rua Raul Bandeira, nº 13, Santa Terezinha, Riacho Das Almas/PE – CEP: 55120000</td>
<td align="left" valign="bottom">(81) 3745-1904 / (81) 3745-1907</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 99ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 99ª CIRCUNSCRIÇÃO - LAGOA DOS GATOS</td>
<td align="left" valign="middle">Endereço: Av. Sete de setembro, nº 79, Centro, Lagoa Dos Gatos/PE - CEP: 55450-000</td>
<td align="left" valign="bottom">(81) 3692-1905 / (81) 3692-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 100ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 100ª CIRCUNSCRIÇÃO - CAMOCIM DE SÃO FÉLIX</td>
<td align="left" valign="middle">Endereço:Travessa Agamenon Magalhães, nº 21, Centro, Camocim De São Félix/PE - CEP:55665-000</td>
<td align="left" valign="bottom">(81) 3743-2905 / (81) 3743-2902</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 101ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 101ª CIRCUNSCRIÇÃO - SAIRÉ</td>
<td align="left" valign="middle">Endereço: Rua David Lins de Andrade, s/n ,Centro, Sairé/PE – CEP: 55695-000</td>
<td align="left" valign="bottom">(81) 3748-1905 / (81) 3748-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 102ª CIRC./14ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 102ª CIRCUNSCRIÇÃO - BARRA DE GUABIRABA</td>
<td align="left" valign="middle">Endereço: Rua Praxedes Bezerra Pontes, nº 57, Centro, Barra de Guabiraba/PE – CEP 55690-000</td>
<td align="left" valign="bottom">(81) 3758-1905 / (81) 3758-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 103ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 103ª CIRCUNSCRIÇÃO - IBIRAJUBA</td>
<td align="left" valign="middle">Endereço: Rua José Apolinário de Amorim, 20 , Centro, Ibirajuba/PE - CEP: 55390-000</td>
<td align="left" valign="bottom">(87) 3794-1905 / (87) 3794-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 146ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 146ª CIRCUNSCRIÇÃO - JUREMA</td>
<td align="left" valign="middle">Endereço: Rua José Maria Simões, s/n , Centro, Jurema/PE – CEP: 55480-970</td>
<td align="left" valign="bottom">(87) 3795-1907 / (81) 3795-1904</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">15ª DESEC/GCOI 1/DINTER 1 - 15ª DELEGACIA SECCIONAL DE POLÍCIA - BELO JARDIM</td>
<td align="left" valign="middle">Endereço: Av. Sebastião Rodrigues da Costa, s/n - São Pedro - Belo Jardim - PE – CEP: 55155-730</td>
<td align="left" valign="bottom">(81) 3726-8926</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 104ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 104ª CIRCUNSCRIÇÃO - BELO JARDIM</td>
<td align="left" valign="middle">Endereço: Av. Sebastião Rodrigues da Costa, s/n - São Pedro - Belo Jardim - PE – CEP: 55155-730</td>
<td align="left" valign="bottom">(81) 3726-8929 / (81) 3726-8925 / (81) 3726-8927</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 105ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 105ª CIRCUNSCRIÇÃO - PESQUEIRA</td>
<td align="left" valign="middle">Endereço:Av. Maria de Brito, s/n, Centro, Pesqueira/PE - CEP: 55200-000</td>
<td align="left" valign="bottom">(87) 3835-8263 / (87) 3835-8260 / (87) 3835-8261</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 106ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 106ª CIRCUNSCRIÇÃO - SÃO BENTO DO UNA</td>
<td align="left" valign="middle">Endereço:Rua João Pessoa, 505 , Centro , São Bento do Una/PE – CEP: 55.370-000</td>
<td align="left" valign="bottom">(81) 3735-4928 / (81) 3735-4929 / (81) 3735-4927</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 108ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 108ª CIRCUNSCRIÇÃO - SÃO CAETANO</td>
<td align="left" valign="middle">Endereço: Rua Olindino Santino, 55 , Centro , São Caetano/PE - CEP: 55130-970</td>
<td align="left" valign="bottom">(81) 3736-3229 / (81) 3736-3226</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 109ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 109ª CIRCUNSCRIÇÃO - CACHOEIRINHA</td>
<td align="left" valign="middle">Endereço:Rua Luiz Gonzaga, O Rei do Baião, nº 136, Centro, Cachoeirinha/PE - CEP: 55380-000</td>
<td align="left" valign="bottom">(81) 3742-2910 / (81) 3742-2907</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 110ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 110ª CIRCUNSCRIÇÃO - SANHARÓ</td>
<td align="left" valign="middle">Endereço:Rua Domingos Zuza, n° 121, Marajás, Sanharó/PE - CEP: 55250-000</td>
<td align="left" valign="bottom">(87) 3836-2904 / (87) 3836-2901</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 112ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 112ª CIRCUNSCRIÇÃO - TACAIMBÓ</td>
<td align="left" valign="middle">Endereço:Av. Major João Gomes, 164 , Centro , Tacaimbó/PE – CEP: 55140-000</td>
<td align="left" valign="bottom">(81) 3755-1909 / (81)3755-1906</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 113ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 113ª CIRCUNSCRIÇÃO - ALAGOINHA</td>
<td align="left" valign="middle">Endereço: Rua Frei Jerônimo, 185 , Centro , Alagoinha/PE – CEP: 55260-000</td>
<td align="left" valign="bottom">(87) 3839-1905 / (81) 3839-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 114ª CIRC./15ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 114ª CIRCUNSCRIÇÃO - POÇÃO</td>
<td align="left" valign="middle">Endereço: Av. Monsenhor Estanislau, s/n, Centro, Poção/PE – CEP: 55240-000</td>
<td align="left" valign="bottom">(87) 3834-1905 / (87) 3834-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">16ª DESEC/GCOI 1/DINTER 1 - 16ª DELEGACIA SECCIONAL DE POLÍCIA - LIMOEIRO</td>
<td align="left" valign="middle">Endereço: Rua Jerônimo Heráclito, 1559, João Ernesto, Limoeiro/PE - CEP 55700-000</td>
<td align="left" valign="bottom">(81) 3628-8753 / (81) 3628-8752 / (81) 3628-8751</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 115ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 115ª CIRCUNSCRIÇÃO - LIMOEIRO</td>
<td align="left" valign="middle">Endereço: Rua Jerônimo Heráclito, 1559, João Ernesto, Limoeiro/PE - CEP 55700-000</td>
<td align="left" valign="bottom">(81) 3628-8759 / (81) 3628-8756 / (81) 3628-8755</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 116ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 116ª CIRCUNSCRIÇÃO - SURUBIM</td>
<td align="left" valign="middle">Endereço:Avenida São Sebastião, n° 407, Surubim/PE - CEP: 55750-000</td>
<td align="left" valign="bottom">(81) 3624-1976 / (81) 3624-1977 / (81) 3624-1974</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 117ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 117ª CIRCUNSCRIÇÃO - BOM JARDIM</td>
<td align="left" valign="middle">Endereço: Rua Cel. Etelvino Souto Maior, 11, Centro, Bom Jardim/PE – CEP: 55730-000</td>
<td align="left" valign="bottom">(81) 3638-2210 / (81) 3638-2207</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 118ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 118ª CIRCUNSCRIÇÃO - PASSIRA</td>
<td align="left" valign="middle">Endereço:Rua da Matriz, nº 104, Centro, Passira/PE - CEP: 55650-000</td>
<td align="left" valign="bottom">(81) 3651-2805 / (81) 3651-2802</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 119ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 119ª CIRCUNSCRIÇÃO - CUMARU</td>
<td align="left" valign="middle">Endereço: Av. Santa Terezinha, 19, Centro, Cumaru/PE – CEP: 55655-000</td>
<td align="left" valign="bottom">(81) 3644-1805 / (81) 3644-1802</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 120ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 120ª CIRCUNSCRIÇÃO - JOÃO ALFREDO</td>
<td align="left" valign="middle">Endereço:Rua José Herculano Soares ,n° 12, João Alfredo - CEP: 55720000</td>
<td align="left" valign="bottom">(81) 3648-2509 / (81) 3648-2506</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 121ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 121ª CIRCUNSCRIÇÃO - OROBÓ</td>
<td align="left" valign="middle">Endereço: Rua Cláudio Aguiar, 187, Centro, Orobó/PE - CEP: 55745-000</td>
<td align="left" valign="bottom">(81) 3656-1907 / (81) 3656-1904</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 122ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 122ª CIRCUNSCRIÇÃO - FEIRA NOVA</td>
<td align="left" valign="middle">Endereço: Av. Santos Dumont, 154, Centro, Feira Nova/PE – CEP: 55.715-000</td>
<td align="left" valign="bottom">(81) 3645-2900 / (81) 3645-2901</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 123ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 123ª CIRCUNSCRIÇÃO - SÃO VICENTE FÉRRER</td>
<td align="left" valign="middle">Endereço: Pç. Pedro Pereira Guedes, 70, Centro, São Vicente Férrer/PE - CEP 55860-000</td>
<td align="left" valign="bottom">(81) 3655-1910 / (81) 3655-1908</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 124ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 124ª CIRCUNSCRIÇÃO - CASINHAS</td>
<td align="left" valign="middle">Endereço: Rua Cel. Periandro, nº 144, Centro, Casinhas/PE – CEP 55755-000</td>
<td align="left" valign="bottom">(81) 3634-9903 / (81) 3634-9900</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 125ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 125ª CIRCUNSCRIÇÃO - MACHADOS</td>
<td align="left" valign="middle">Endereço: Rua José Antônio Cardoso, 69, Centro, Machados/PE – CEP: 55740-999</td>
<td align="left" valign="bottom">(81) 3649-1905 / (81) 3649-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 126ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 126ª CIRCUNSCRIÇÃO - VERTENTE DO LÉRIO</td>
<td align="left" valign="middle">Endereço:Rua Frei Mário, n° 20, Centro, Vertente do Lério/PE - CEP: 55760-970</td>
<td align="left" valign="bottom">(81) 3634-7903 / (81) 3634-7900</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 127ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 127ª CIRCUNSCRIÇÃO - SALGADINHO</td>
<td align="left" valign="middle">Endereço: Rua Eloi Pires de Andrade Lima, nº 04, Centro - Salgadinho/PE. - CEP: 55675000</td>
<td align="left" valign="bottom">(81) 3654-1903 / (81) 3654-1900</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">17ª DESEC/GCOI 1/DINTER 1 - 17ª DELEGACIA SECCIONAL DE POLÍCIA - SANTA CRUZ DO CAPIBARIBE</td>
<td align="left" valign="middle">Endereço:Rua José Francisco Barbosa, n° 321, Centro, Santa Cruz Do Capibaribe - CE 55192385</td>
<td align="left" valign="bottom">(81) 3759-8227 / (81) 3759-8226</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 107ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 107ª CIRCUNSCRIÇÃO - BREJO DA MADRE DE DEUS</td>
<td align="left" valign="middle">Endereço: Rua José Bonifácio, 34, Centro, Brejo da Madre de Deus/PE – CEP: 55170-000</td>
<td align="left" valign="bottom">(81) 3747-4906 / (81) 3747-4907 / (81) 3747-4905</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 111ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 111ª CIRCUNSCRIÇÃO - JATAÚBA</td>
<td align="left" valign="middle">Endereço: Avenida José Lopes de Siqueira, n° 510, Cohab, Jataúba/PE CEP - 55180-000.</td>
<td align="left" valign="bottom">(81) 3746-1905 / (81) 3746-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 128ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 128ª CIRCUNSCRIÇÃO STA. CRUZ DO CAPIBARIBE</td>
<td align="left" valign="middle">Endereço:Rua José Francisco Barbosa, n° 321, Centro, Santa Cruz Do Capibaribe - CE 55192385</td>
<td align="left" valign="bottom">(81) 3759-8232 / (81) 3759-8230 / (81) 3759-8229</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 129ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 129ª CIRCUNSCRIÇÃO - TORITAMA</td>
<td align="left" valign="middle">Endereço: Rua Emídio Jordão,491, Centro, Toritama/PE CEP: 55.125-00</td>
<td align="left" valign="bottom">(81) 3741-6908 / (81) 3741-6909 / (81) 3741-6907</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 130ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 130ª CIRCUNSCRIÇÃO - TAQUARITINGA DO NORTE</td>
<td align="left" valign="middle">Endereço: Rua Padre Berenguer,12, Centro,Taquaritinga do Norte/PE CEP: 55790-000</td>
<td align="left" valign="bottom">(81) 3733-2911 / (81) 3733-2908</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 131ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 131ª CIRCUNSCRIÇÃO - VERTENTES</td>
<td align="left" valign="middle">Endereço: Rua Emidio Cavalcante, 255, Centro, Vertentes /PE - CEP: 55770-000 (Rua Dr. Manoel Borba S/N)</td>
<td align="left" valign="bottom">(81) 3734-1907 / (81) 3734-1904</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 132ª CIRC./16ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 132ª CIRCUNSCRIÇÃO - FREI MIGUELINHO</td>
<td align="left" valign="middle">Endereço: Rua Dom Pedro II, nº 12, Centro, Frei Miguelinho/PE - CEP 55780-000</td>
<td align="left" valign="bottom">(81) 3751-1905 / (81) 3751-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 133ª CIRC./17ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 133ª CIRCUNSCRIÇÃO STA. MARIA DO CAMBUCÁ</td>
<td align="left" valign="middle">Endereço: Rua Dr. Miguel Brás, 103, Centro, Stª. Mª do Cambucá/PE – CEP: 55765-000</td>
<td align="left" valign="bottom">(81) 3757-1905 / (81) 3757-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">18ª DESEC/GCOI 1/DINTER 1 - 18ª DELEGACIA SECCIONAL DE POLÍCIA - GARANHUNS</td>
<td align="left" valign="middle">Endereço: Rua Joaquim Nabuco, 189, Centro, Garanhuns/PE - CEP 55295-000</td>
<td align="left" valign="bottom">(87) 3761-8208 / (87) 3761- 8206 / (87) 3761-8681 / (87) 3761-8209 / (87) 3761-8683 / (87) 3761-8207</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 93ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 93ª CIRCUNSCRIÇÃO - PANELAS</td>
<td align="left" valign="middle">Endereço: Praça Coronel João Rufino, n° 10, Centro, Panelas/PE - CEP 55470-000</td>
<td align="left" valign="bottom">(81) 3691-2706 / (81) 3691-2707 / (81) 3691-2704</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 134ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 134ª CIRCUNSCRIÇÃO - GARANHUNS</td>
<td align="left" valign="middle">Endereço: Av. Dantas Barreto,150, Santo Antônio, Garanhuns/PE – CEP: 55294-000</td>
<td align="left" valign="bottom">(87) 3761-8464 / (87) 3761-8460 / (87) 3761-8461</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 135ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 135ª CIRCUNSCRIÇÃO - GARANHUNS</td>
<td align="left" valign="middle">Endereço:Rua Joaquim Távora, 259, Heliópolis, Garanhuns/PE – CEP: 55290-410</td>
<td align="left" valign="bottom">(87) 3761-8685 / (87) 3761-8459 / (87) 3761-8456 / (81) 3761-8457</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 136ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 136ª CIRCUNSCRIÇÃO - BOM CONSELHO</td>
<td align="left" valign="middle">Endereço: Avenida Quinze de Novembro, Nº 172, Bom Conselho/PE - CEP: 55330-000</td>
<td align="left" valign="bottom">(87) 3771-3918 / (87) 3771-3915</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 137ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 137ª CIRCUNSCRIÇÃO - ÁGUAS BELAS</td>
<td align="left" valign="middle">Endereço: Rua Santa Cruz, s/n, Centro, Águas Belas /PE - CEP: 55340-000</td>
<td align="left" valign="bottom">(87) 3775-3917 / (87) 3775-3914</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 138ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 138ª CIRCUNSCRIÇÃO - LAJEDO</td>
<td align="left" valign="middle">Endereço: Rua Agamenon Magalhães, 381/389, Centro, Lajedo/PE – CEP: 55385-000</td>
<td align="left" valign="bottom">(87) 3773-4911 / (87) 3773-4910</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 139ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 139ª CIRCUNSCRIÇÃO - CANHOTINHO</td>
<td align="left" valign="middle">Endereço: Rua Marechal Deodoro, nº 121, Centro, Canhotinho/PE - CEP:55420-999</td>
<td align="left" valign="bottom">(87) 3781-2811 / (87) 3781-2808</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 140ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 140ª CIRCUNSCRIÇÃO - CAETÉS</td>
<td align="left" valign="middle">Endereço: Rua Dom José Adelino, S/N, Centro, Caetés/PE - CEP 55360-00</td>
<td align="left" valign="bottom">(87) 3783-1903 / (87) 3783-1900</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 141ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 141ª CIRCUNSCRIÇÃO - SÃO JOÃO</td>
<td align="left" valign="middle">Endereço: Rua Antonio Vilela, 205, Planalto, São João/PE - CEP 55435.000</td>
<td align="left" valign="bottom">(87) 3784-0903 / (87) 3784-0900</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 142ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 142ª CIRCUNSCRIÇÃO - CAPOEIRAS</td>
<td align="left" valign="middle">Endereço: Rua 21 de Dezembro, 203, Centro, Capoeiras/PE – CEP: 55.365-000</td>
<td align="left" valign="bottom">(87) 3796-1913 / (87) 3796-1910</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 143ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 143ª CIRCUNSCRIÇÃO - IATI</td>
<td align="left" valign="middle">Endereço: Av. 07 De Setembro, S/N - Centro - Iati/PE - CEP: 55345-000</td>
<td align="left" valign="bottom">(87) 3786-1905 / (87) 3786-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 144ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 144ª CIRCUNSCRIÇÃO - CORRENTES</td>
<td align="left" valign="middle">Endereço: Rua Professora Janoca, nº 17, Centro, Correntes/PE - CEP 52120-550</td>
<td align="left" valign="bottom">(87) 3772-2909 / (87) 3772-2906</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 145ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 145ª CIRCUNSCRIÇÃO - SALOÁ</td>
<td align="left" valign="middle">Endereço: Rua Senador Paulo Guerra, 16, Centro, Saloá/PE – CEP: 55350-000</td>
<td align="left" valign="bottom">(87) 3782-1905 / (87) 3782-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 147ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 147ª CIRCUNSCRIÇÃO - JUPI</td>
<td align="left" valign="middle">Endereço: Rua Antônio Inácio Primo, nº 122, Centro, Jupi/PE – CEP: 55395-000</td>
<td align="left" valign="bottom">(87) 3779-1907 / (87) 3779-1905</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 148ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 148ª CIRCUNSCRIÇÃO - CALÇADOS</td>
<td align="left" valign="middle">Endereço:Rua Euclides Basílio dos Santos, n° 18, Centro, Calçado/PE - CEP: 55375-000</td>
<td align="left" valign="bottom">(87) 3793-1807 / (87) 3793-1804</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 149ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 149ª CIRCUNSCRIÇÃO - LAGOA DO OURO</td>
<td align="left" valign="middle">Endereço:Rua Ananias Alves da Costa, nº 449, Centro, Lagoa do Ouro/ PE - CEP: 55320-000</td>
<td align="left" valign="bottom">(87) 3785-1905 / (87) 3785-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 150ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 150ª CIRCUNSCRIÇÃO - PARANATAMA</td>
<td align="left" valign="middle">Endereço: Rua Francisco de Paulo Melo, 08, Centro, Paranatama/PE – CEP: 55355-000</td>
<td align="left" valign="bottom">(87) 3787-1903 / (87) 3787-1900</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 151ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 151ª CIRCUNSCRIÇÃO - JUCATI</td>
<td align="left" valign="middle">Endereço: Rua Rui Barbosa, nº 51 - Centro - Jucati/PE - CEP: 55398-000</td>
<td align="left" valign="bottom">(87) 3779-8905 / (87) 3779-8902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 152ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 152ª CIRCUNSCRIÇÃO - PALMEIRINA</td>
<td align="left" valign="middle">Endereço: Rua General Ozório Nº 06, Térreo, Centro, Palmerina/PE - CEP. 55310000</td>
<td align="left" valign="bottom">(87) 3791-1907 / (87) 3791-1904</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 153ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 153ª CIRCUNSCRIÇÃO - ANGELIM</td>
<td align="left" valign="middle">Endereço: Rua Antônio Marniano da Costa, 53, Centro, Angelim/PE - CEP: 55430-000</td>
<td align="left" valign="bottom">(87) 3788-1905 / (87) 3788-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 154ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 154ª CIRCUNSCRIÇÃO - BREJÃO</td>
<td align="left" valign="middle">Endereço: Rua José Inacio dos Santos, 83 , Centro, Brejão/PE - CEP: 55325-000</td>
<td align="left" valign="bottom">(87) 3789-1905 / (87) 3789-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 155ª CIRC./18ª DESEC/GCOI 1 - DELEGACIA DE POLÍCIA DA 155ª CIRCUNSCRIÇÃO - TEREZINHA</td>
<td align="left" valign="middle">Endereço: Avenida Agamenon Magalhães, 09, Centro, Terezinha /PE – CEP: 55305-000</td>
<td align="left" valign="bottom">(87) 3792-1905 / (87) 3792-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DHA/DINTER 1 - DIVISÃO DE HOMICÍDIOS AGRESTE - CARUARU</td>
<td align="left" valign="middle">Endereço: BR 104, KM 67,Pinheirópolis, Caruaru/PE - CEP 55032-670</td>
<td align="left" valign="bottom">(81) 3719-9592</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">22ª DPH/DHA/DINTER 1 - 22ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - GARANHUNS</td>
<td align="left" valign="middle">Endereço: Rua Barreto Coelho s/n, São José - Garanhuns/PE - Cep: 55293-000</td>
<td align="left" valign="bottom">(87) 3761-8586 / (87) 3761-8587 / (87) 3761-8585</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">16ª DPH/DINTER 1 - 16ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - GOIANA</td>
<td align="left" valign="middle">Endereço: Rua do Jiló, nº 66, Centro, Goiana /PE - CEP: 55900-000</td>
<td align="left" valign="bottom">(81) 3626-8514 / (81) 3626-8513</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DINTER 2/SUBCP - DIRETORIA INTEGRADA DO INTERIOR 2</td>
<td align="left" valign="middle">Endereço: Avenida Cardoso de Sá, s/n, Colônia Imperial, Petrolina/PE - CEP 56328-904</td>
<td align="left" valign="bottom">(87) 3866-6204 / (87) 3866-6207 / (87) 3866-6203</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">19ª DESEC/GCOI 2/DINTER 2 - 19ª DELEGACIA SECCIONAL DE POLÍCIA - ARCOVERDE</td>
<td align="left" valign="middle">Endereço: Rua Herinque Dias, nº 200, São Cristovão, Arcoverde/PE - CEP: 56506-660</td>
<td align="left" valign="bottom">(87) 3821-8218 / (87)3821-8217</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">156ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 156ª CIRCUNSCRIÇÃO - ARCOVERDE</td>
<td align="left" valign="middle">Endereço: Rua Herinque Dias, nº 200, São Cristovão, Arcoverde/PE - CEP: 56506-660</td>
<td align="left" valign="bottom">(87) 3821-8585 / (87) 3821-8584 / (87) 3821-8586 / (87) 3821-8582</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 157ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 157ª CIRCUNSCRIÇÃO - BUÍQUE</td>
<td align="left" valign="middle">Endereço: Avenida Jonas Camelo de Almeida, 190, Centro, Buíque/PE - CEP: 56520-000</td>
<td align="left" valign="bottom">(87) 3855-2821 / (87) 3855-2822 / (87) 3855-2819</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 158ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 158ª CIRCUNSCRIÇÃO - SERTÂNIA</td>
<td align="left" valign="middle">Endereço: Rua Dr. Ulisses Lins de Albuquerque, 55, Centro, Sertânia/PE – CEP: 56600-000</td>
<td align="left" valign="bottom">(87) 3841-3958 / (87) 3841-3956</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 159ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 159ª CIRCUNSCRIÇÃO - CUSTÓDIA</td>
<td align="left" valign="middle">Endereço: Rua Luiz Epaminondas, 267, Custódia/PE - CEP: 56640-000</td>
<td align="left" valign="bottom">(87) 3848-3920 / (87) 3848-3917</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 160ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 160ª CIRCUNSCRIÇÃO - ITAÍBA</td>
<td align="left" valign="middle">Endereço: Avenida Dom Adelino Dantas, 24, Centro - Itaíba/PE - CEP: 56550-000</td>
<td align="left" valign="bottom">(87) 3849-1910 / (87) 3849-1908</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 161ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 161ª CIRCUNSCRIÇÃO - IBIMIRIM</td>
<td align="left" valign="middle">Endereço: Rua Carlos Augusto De Melo (Loteamento Angelo Gomes), nº 1080 - Centro - Ibimirim/PE - CEP 56580000</td>
<td align="left" valign="bottom">(87) 3842-0914 / (87) 3842-0911</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 162ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 162ª CIRCUNSCRIÇÃO - TUPANATINGA</td>
<td align="left" valign="middle">Endereço:Rua Alto São Félix, N° 75, Centro, Tupanatinga/PE - CEP 56540-000</td>
<td align="left" valign="bottom">(87) 3856-1906 / (87) 3856-1905</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 163ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 163ª CIRCUNSCRIÇÃO - PEDRA</td>
<td align="left" valign="middle">Endereço: Rua Capitão Manoel Leite, nº 40, Centro, Pedra/PE - CEP: 55280-000</td>
<td align="left" valign="bottom">(87) 3858-2923 / (87) 3858-2920</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 164ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 164ª CIRCUNSCRIÇÃO - VENTUROSA</td>
<td align="left" valign="middle">Endereço: Rua José Alves Bezerra, nº 198 – Venturosa/PE - CEP: 55270-000</td>
<td align="left" valign="bottom">(87) 3833-4011 / (87) 3833-4012 / (87) 3833-4009</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 166ª CIRC./19ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 166ª CIRCUNSCRIÇÃO - MANARI</td>
<td align="left" valign="middle">Endereço: Av. Costa e Silva, s/n, Centro, Manari/PE – CEP: 56.565-000</td>
<td align="left" valign="bottom">(87) 3840-7907 / (87) 3840-7908</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">20ª DESEC/GCOI 2/DINTER 2 - 20ª DELEGACIA SECCIONAL DE POLÍCIA - AFOGADOS DA INGAZEIRA</td>
<td align="left" valign="middle">Endereço: Rua Valdevino José Praxedes, s/nº, Manoela Valadares, Afogados da Ingazeira/PE - CEP: 56800-000</td>
<td align="left" valign="bottom">(87) 3838-8784 / (87) 3838-8786 / (87) 3838-8785</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 167ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 167ª CIRCUNSCRIÇÃO - AFOGADOS DA INGAZEIRA</td>
<td align="left" valign="middle">Endereço: Rua Valdevino José Praxedes, s/nº, Manoela Valadares, Afogados da Ingazeira/PE - CEP: 56800-000</td>
<td align="left" valign="bottom">(87) 3838-8778 / (87) 3838-8780 / (87) 3838-8777</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 168ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 168ª CIRCUNSCRIÇÃO - SÃO JOSÉ DO EGITO</td>
<td align="left" valign="middle">Endereço: Margem esquerda da PE 320 sentido Tabira/PE ,s/nº, Bairro de São João, São José do Egito/PE - CEP: 56700-000</td>
<td align="left" valign="bottom">(87) 3844-3416 / (87) 3844-3417</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 169ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 169ª CIRCUNSCRIÇÃO - TABIRA</td>
<td align="left" valign="middle">Endereço: Avenida Antônio Pereira Amorim, n° 2535, Bairro de Fátima I, Tabira/PE - CEP 56.780-000</td>
<td align="left" valign="bottom">(87) 3847-3907 / (87) 3847-3908 / (87) 3847-3906</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 170ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 170ª CIRCUNSCRIÇÃO - ITAPETIM</td>
<td align="left" valign="middle">Endereço: Rua Paulino Soares, 25, Centro, Itapetim/PE – CEP: 56720-000</td>
<td align="left" valign="bottom">(87) 3853-1910 / (87) 3853-1911 / (87) 3853-1908</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 171ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 171ª CIRCUNSCRIÇÃO - IGUARACI</td>
<td align="left" valign="middle">Endereço: Rua Dr. Ulisses Guimarães, s/nº, Centro, Iguaraci /PE – CEP: 56840-000</td>
<td align="left" valign="bottom">(87) 3837-1907 / (87) 3837-1908</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 172ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 172ª CIRCUNSCRIÇÃO - SANTA TEREZINHA</td>
<td align="left" valign="middle">Endereço: Rua José David De Vasconcelos, nº 117 - Centro - Santa Terezinha/PE - CEP: 56750-000</td>
<td align="left" valign="bottom">(87) 3859-1909 / (87) 3859-1906</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 173ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 173ª CIRCUNSCRIÇÃO - TUPARETAMA</td>
<td align="left" valign="middle">Endereço: Rua Monsenhor Rabelo, n.º 65, Centro, Tuparetama/PE – CEP: 56760-000</td>
<td align="left" valign="bottom">(87) 3828-1912 / (87) 3828-1910</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 174ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 174ª CIRCUNSCRIÇÃO - BREJINHO</td>
<td align="left" valign="middle">Endereço: Rua João Junes, nº 216, Centro, Brejinho/PE - CEP: 56740-000</td>
<td align="left" valign="bottom">(87) 3850-1904 / (87) 3850-1901</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 175ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 175ª CIRCUNSCRIÇÃO - SOLIDÃO</td>
<td align="left" valign="middle">Endereço: Rua Riacho Verde, S/N, Centro - Solidãol/PE - CEP: 56795-000</td>
<td align="left" valign="bottom">(87) 3830-1803 / (87) 3830-1800</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 176ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 176ª CIRCUNSCRIÇÃO - INGAZEIRA</td>
<td align="left" valign="middle">Endereço: ua Nivonaldo Quirino da Silva, nº 130, Térreo, Centro - Ingazeira/PE - CEP: 56830-000</td>
<td align="left" valign="bottom">(87) 3829-1909 / (87) 3829-1910</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 180ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 180ª CIRCUNSCRIÇÃO - CARNAÍBA</td>
<td align="left" valign="middle">Endereço:Rua Saturnino Bezerra, nº 655 - Centro – Carnaíba/PE - CEP: 56820000</td>
<td align="left" valign="bottom">(87) 3854-1935 / (87) 3854-1932</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 185ª CIRC./20ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 185ª CIRCUNSCRIÇÃO - QUIXABA</td>
<td align="left" valign="middle">Endereço: Rua Marçal Salvador, nº 554, Centro, Quixaba/PE - CEP: 56828-000</td>
<td align="left" valign="bottom">(87) 3854-8903 / (87) 3854-8900</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">21ª DESEC/GCOI 2/DINTER 2 - 21ª DELEGACIA SECCIONAL DE POLÍCIA - SERRA TALHADA</td>
<td align="left" valign="middle">Endereço: Rua Enoque de Carvalho, s/n, Serra Talhada/ PE - CEP: 56912-250</td>
<td align="left" valign="bottom">(87) 3831-9222 / (87) 3831-9221</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">21ª DESEC/DP 177ª CIRC. - DELEGACIA DE POLÍCIA DA 177ª CIRCUNSCRIÇÃO - SERRA TALHADA</td>
<td align="left" valign="middle">Endereço: Rua Enoque de Carvalho, s/n, Serra Talhada/ PE - CEP: 56912-250</td>
<td align="left" valign="bottom">(87) 3831-9226 / (87) 3831-9223</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 178ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 178ª CIRCUNSCRIÇÃO - SÃO JOSÉ DO BELMONTE</td>
<td align="left" valign="middle">Endereço: Rua Ruﬁno Pires da Silva, s/nº, Centro, São José do Belmonte/PE - CEP: 56950-000</td>
<td align="left" valign="bottom">(87) 3884-2913 / (87) 3884-2911</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 179ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 179ª CIRCUNSCRIÇÃO - FLORES</td>
<td align="left" valign="middle">Endereço:Rua Pedro Santos Estima, s/n, Flores/PE - CEP: 56850-000</td>
<td align="left" valign="bottom">(87) 3857-1911 / (87) 3857-1908</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 181ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 181ª CIRCUNSCRIÇÃO - TRIUNFO</td>
<td align="left" valign="middle">Endereço: Rua Galdino Diniz, nº 355, Bairro Guanabara, Triunfo/PE - CEP:56870-000</td>
<td align="left" valign="bottom">(87) 3846-2915 / (87) 3846-2912</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 182ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 182ª CIRCUNSCRIÇÃO - BETÂNIA</td>
<td align="left" valign="middle">Endereço: Rua Enoque Guerra, s/n, Betânia/ PE - CEP: 56670-000</td>
<td align="left" valign="bottom">(87) 3852-1904 / (87) 3852-1902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 183ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 183ª CIRCUNSCRIÇÃO STA. CRUZ DA BAIXA VERDE</td>
<td align="left" valign="middle">Endereço: Rua Joaquim José De Lima, nº 143, centro, Santa Cruz Da Baixa Verde/PE - CEP 56895-000</td>
<td align="left" valign="bottom">(87) 3846-8903 / (87) 3846-8901</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 184ª CIRC./21ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 184ª CIRCUNSCRIÇÃO - CALUMBI</td>
<td align="left" valign="middle">Endereço: Rua Projetada, 53, Centro, Calumbi/PE – CEP: 56930-000</td>
<td align="left" valign="bottom">(87) 3845-1902 / (87) 3845-1903</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">22ª DESEC/GCOI 2/DINTER 2 - 22ª DELEGACIA SECCIONAL DE POLÍCIA - FLORESTA</td>
<td align="left" valign="middle">Endereço: Av. Audomar Ferraz, 193, Centro, Floresta/PE - CEP 56400-000</td>
<td align="left" valign="bottom">(87) 3877-4943 / (87) 3877-4942</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 165ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 165ª CIRCUNSCRIÇÃO - INAJÁ</td>
<td align="left" valign="middle">Endereço: Rua José Malaquias dos Santos, 53 , Centro, Inajá /PE – CEP: 56560-000</td>
<td align="left" valign="bottom">(87) 3840-1612 / (87) 3840-1613</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 186ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 186ª CIRCUNSCRIÇÃO - PETROLÂNDIA</td>
<td align="left" valign="middle">Endereço: Rua Manoel Rodrigues de Almeida, nº 77 – Centro Petrolândia/PE - Petrolândia/PE - CEP: 56460000</td>
<td align="left" valign="bottom">(87) 3851-0722 / (87) 3851-0719</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 187ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 187ª CIRCUNSCRIÇÃO - FLORESTA</td>
<td align="left" valign="middle">Endereço: Av. Audomar Ferraz, 193, Centro, Floresta/PE - CEP 56400-000</td>
<td align="left" valign="bottom">(87) 3877-4948 / (87) 3877-4945 / (87) 3877-4946</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 188ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 188ª CIRCUNSCRIÇÃO - BELÉM DE SÃO FRANCISCO</td>
<td align="left" valign="middle">Endereço: Av. Cel. Jerônimo Píres, 1421, Belém de São Francisco/PE - CEP: 56440-000</td>
<td align="left" valign="bottom">(87) 3876-2918 / (87) 3876-2919 / (87) 3876-2916</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 189ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 189ª CIRCUNSCRIÇÃO - TACARATU</td>
<td align="left" valign="middle">Endereço: Trav. Félix Benzota de Carvalho, nº 146, Centro - Tacaratu/PE - CEP: 56480000</td>
<td align="left" valign="bottom">(87) 3843-1908 / (87) 3843-1909</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 190ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 190ª CIRCUNSCRIÇÃO - JATOBÁ</td>
<td align="left" valign="middle">Endereço: Rua Flores, s/n, Centro, Jatobá /PE - CEP: 56470-000</td>
<td align="left" valign="bottom">(87) 3851-3907 / (87) 3851-3904 / (87) 3851-3905</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 191ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 191ª CIRCUNSCRIÇÃO - CARNAUBEIRA DA PENHA</td>
<td align="left" valign="middle">Endereço: Rua Juvenal Lopes, n° 37, Centro, Carnaubeira Da Penha/PE - CEP 56420-000</td>
<td align="left" valign="bottom">(87) 3877-8903 / (87) 3877-8901</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 192ª CIRC./22ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 192ª CIRCUNSCRIÇÃO - ITACURUBA</td>
<td align="left" valign="middle">Endereço: Rua Olegário Resende, s/n, Centro, Itacuruba/PE - CEP: 56430-000</td>
<td align="left" valign="bottom">(87) 3893-1903 / (87) 3893-1900</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">23ª DESEC/GCOI 2/DINTER 2 - 23ª DELEGACIA SECCIONAL DE POLÍCIA - SALGUEIRO</td>
<td align="left" valign="middle">Endereço: Rua Joaquim Sampaio, nº 321, Centro,Salgueiro/PE - CEP: 56100-999</td>
<td align="left" valign="bottom">(87) 3871-8460 / (87) 3871-8457</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 193ª CIRC./23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 193ª CIRCUNSCRIÇÃO - SALGUEIRO</td>
<td align="left" valign="middle">Endereço: Rua Joaquim Sampaio, nº 321, Centro,Salgueiro/PE - CEP: 56100-999</td>
<td align="left" valign="bottom">(87) 3871-8450 / (87) 3871-8454 / (87) 3871-8449 / (87) 3871-8451 / (87) 3871-8452</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 194ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 194ª CIRCUNSCRIÇÃO - PARNAMIRIM</td>
<td align="left" valign="middle">Endereço: Rua da Matriz, n° 20, Centro, Parnamirim/PE - CEP: 56163-000</td>
<td align="left" valign="bottom">(87) 3883-1811 / (87) 3883-1812</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 195ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 195ª CIRCUNSCRIÇÃO - SERRITA</td>
<td align="left" valign="middle">Endereço: Rua Antônio Filgueira, nº 35, Centro, Serrita/PE - CEP 56.140-000</td>
<td align="left" valign="bottom">(87) 3882-1907 / (87) 3882-1904</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 196ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 196ª CIRCUNSCRIÇÃO - MIRANDIBA</td>
<td align="left" valign="middle">Endereço: Rua Cornélio Soares, nº 85, Centro, Mirandiba/PE - CEP: 56980-000</td>
<td align="left" valign="bottom">(87) 3885-1912 / (87) 3885-1909</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 197ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 197ª CIRCUNSCRIÇÃO - CEDRO</td>
<td align="left" valign="middle">Endereço: Rua Francisco Figueira Sampaio, nº 490 - Cedro/PE - CEP 56130-000</td>
<td align="left" valign="bottom">(87) 3889-1807 / (87) 3889-1805</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 198ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 198ª CIRCUNSCRIÇÃO - VERDEJANTE</td>
<td align="left" valign="middle">Endereço: Rua Osmundo Bezerra, n° 60, Verdejante/PE - CEP 56120-000</td>
<td align="left" valign="bottom">(87) 3886-1806 / (87) 3886-1807 / (87) 3886-1805</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 199ª CIRC.23ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 199ª CIRCUNSCRIÇÃO - TERRA NOVA</td>
<td align="left" valign="middle">Endereço: Rua Cornélio Antonio Pereira, n° 02, Centro, Terra Nova/PE - CEP :56190-000</td>
<td align="left" valign="bottom">(87) 3892-1907 / (87) 3892-1905</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">24ª DESEC/GCOI 2/DINTER 2 - 24ª DELEGACIA SECCIONAL DE POLÍCIA - ARARIPINA</td>
<td align="left" valign="middle">Endereço: Avenida Governador Muniz Falcão, s/n, Planalto, Araripina /PE - CEP: 56280-999</td>
<td align="left" valign="bottom">(87) 3873-8357 / (87) 3873-8358 / (87) 3873-8356</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 200ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 200ª CIRCUNSCRIÇÃO - ARARIPINA</td>
<td align="left" valign="middle">Endereço:Avenida Governador Muniz Falcão, s/n, Planalto, Araripina /PE - CEP: 56280-999</td>
<td align="left" valign="bottom">(87) 3873-8362 / (87) 3873-8436</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 201ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 201ª CIRCUNSCRIÇÃO - OURICURI</td>
<td align="left" valign="middle">Endereço: Av. Presidente Kennedy, 85, Centro, Ouricuri/PE – CEP: 56200-000</td>
<td align="left" valign="bottom">(87) 3874-4834 / (87) 3874-4832</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 202ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 202ª CIRCUNSCRIÇÃO - EXU</td>
<td align="left" valign="middle">Endereço:Avenida Edmundo Dantas, nº 140, Exu/PE - CEP: 56230-000</td>
<td align="left" valign="bottom">(87) 3879-2917 / (87) 3879-2914</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 203ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 203ª CIRCUNSCRIÇÃO - BODOCÓ</td>
<td align="left" valign="middle">Endereço:Rua Lourival Rodrigues de Alencar, 262,Bodocó/PE - CEP: 56220-000</td>
<td align="left" valign="bottom">(87) 3878-0913 / (87) 3878-0910</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 204ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 204ª CIRCUNSCRIÇÃO - IPUBI</td>
<td align="left" valign="middle">Endereço: Rua Fernando Bezerra, nº 08 – Ipubi/PE - CEP: 56260-000</td>
<td align="left" valign="bottom">(87) 3881-2911 / (87) 3881-2908</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 205ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 205ª CIRCUNSCRIÇÃO - TRINDADE</td>
<td align="left" valign="middle">Endereço: Av. Central Sul, 526, Trindade/PE - CEP: 56250-000</td>
<td align="left" valign="bottom">(87) 3870-3905 / (87) 3870-3902</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 206ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 206ª CIRCUNSCRIÇÃO STA. FILOMENA</td>
<td align="left" valign="middle">Endereço: Praça Da Matriz, n.º 61, Centro, Santa Filomena/PE.- CEP: 56210-970</td>
<td align="left" valign="bottom">(87) 3874-7906 / (87) 3874-7908</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 207ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 207ª CIRCUNSCRIÇÃO SANTA CRUZ</td>
<td align="left" valign="middle">Endereço: Rua 03 De Maio, s/n, Centro, Santa Cruz de Malta /PE - CEP: 56215-000</td>
<td align="left" valign="bottom">(87) 3874-8909 / (87) 3874-8906</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 208ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 208ª CIRCUNSCRIÇÃO - MOREILÂNDIA</td>
<td align="left" valign="middle">Endereço: Rua Sete de Setembro, nº 416, Centro, Moreilândia/PE - CEP: 56150-000</td>
<td align="left" valign="bottom">(87) 3891-1809 / (87) 3891-1807</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 209ª CIRC./24ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 209ª CIRCUNSCRIÇÃO - GRANITO</td>
<td align="left" valign="middle">Endereço: Avenida José Saraiva Xavier, s/n, Granito/PE - CEP: 56160-000</td>
<td align="left" valign="bottom">(87) 3880-1904 / (87) 3880-1905</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">25ª DESEC/GCOI 2/DINTER 2 - 25ª DELEGACIA SECCIONAL DE POLÍCIA - CABROBÓ</td>
<td align="left" valign="middle">Endereço:Rua Epaminondas Hipólito de Lima, 1087, Cabrobó/PE - CEP: 56180-000</td>
<td align="left" valign="bottom">(87) 3875-3901 / (87) 3875-3902 / (87) 3875-3900</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 210ª CIRC./25ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 210ª CIRCUNSCRIÇÃO STA. Mª DA BOA VISTA</td>
<td align="left" valign="middle">Endereço: Rua Dr. Oscar Sampaio, s/n, Centro. Santa Maria da Boa Vista/PE - CEP: 56380-000</td>
<td align="left" valign="bottom">(87) 3869-3615 / (87) 3869-3613</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 211ª CIRC./25ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 211ª CIRCUNSCRIÇÃO - CABROBÓ</td>
<td align="left" valign="middle">Endereço: Rua Epaminondas Hipólito de Lima, 1087, Cabrobó/PE - CEP: 56180-000</td>
<td align="left" valign="bottom">(87) 3875-3906</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">DP 212ª CIRC./25ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 212ª CIRCUNSCRIÇÃO - OROCÓ</td>
<td align="left" valign="middle">Endereço: Rua Quirino do Nascimento, s/n, Orocó/PE - CEP: 56170-000</td>
<td align="left" valign="bottom">(87) 3887-1805 / (87) 3887-1802</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 215ª CIRC./25ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 215ª CIRCUNSCRIÇÃO - LAGOA GRANDE</td>
<td align="left" valign="middle">Endereço: Rua Senador Marcos Freire, nº 70 - Centro - Lagoa Grande/PE - CEP: 56.395-000</td>
<td align="left" valign="bottom">(87) 3869-8810 / (87) 3869-8808</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">26ª DESEC/GCOI 2/DINTER 2 - 26ª DELEGACIA SECCIONAL DE POLÍCIA - PETROLINA</td>
<td align="left" valign="middle">Endereço: Avenida Cardoso de Sá, s/n, Colônia Imperial, Petrolina/PE - CEP 56328-904</td>
<td align="left" valign="bottom">(87) 3866-6238 / (87) 3866-6783 / (87) 3866-6438 / (87) 3866-6239</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 213ª CIRC./26ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 213ª CIRCUNSCRIÇÃO - PETROLINA</td>
<td align="left" valign="middle">Endereço: Av. Sete de setembro, s/n, Centro, Petrolina/PE – CEP: 56300-000</td>
<td align="left" valign="bottom">(87) 3866-6282</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 214ª CIRC./26ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 214ª CIRCUNSCRIÇÃO - PETROLINA</td>
<td align="left" valign="middle">Endereço: Avenida Cardoso de Sá, s/n, Colônia Imperial, Petrolina/PE - CEP 56328-904</td>
<td align="left" valign="bottom">(87) 3866-6624 / (87) 3866-6621 / (87) 3866-6622</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 216ª CIRC./26ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 216ª CIRCUNSCRIÇÃO - AFRÂNIO</td>
<td align="left" valign="middle">Endereço: Av. Francisco Rodrigues, s/n, Afrânio/PE - CEP: 56360-000</td>
<td align="left" valign="bottom">(87) 3868-1908 / (87) 3868-1905</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">DP 217ª CIRC./26ª DESEC/GCOI 2 - DELEGACIA DE POLÍCIA DA 217ª CIRCUNSCRIÇÃO - DORMENTES</td>
<td align="left" valign="middle">Endereço: Rua Antonio Salustiano, nº 10 - Dedé Damasceno – Dormentes/PE – CEP: 56355000</td>
<td align="left" valign="bottom">(87) 3865-1305 / (87) 3865-1302</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">17ª DPH/DINTER 2 - 17ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS – VITÓRIA DE SANTO ANTÃO</td>
<td align="left" valign="middle">Endereço: Rua Henrique De Holanda, N° 1333, Redenção, Vitória De Santo Antão/PE. - CEP 55.612-025</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">18ª DPH/DINTER 2 - 18ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PALMARES</td>
<td align="left" valign="middle">Endereço:Avenida Jose Americo Miranda, s/n, Santa Rosa - Palmares/PE - CEP: 55540-000</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">19ª DPH/DINTER 2 - 19ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - CARUARU</td>
<td align="left" valign="middle">Endereço: BR 104, KM 67,Pinheirópolis, Caruaru/PE - CEP 55032-670</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">20ª DPH/DINTER 2 - 20ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS – CARUARU</td>
<td align="left" valign="middle">Endereço: BR 104, KM 67,Pinheirópolis, Caruaru/PE - CEP 55032-670</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="32">21ª DPH/DINTER 2 - 21ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS – SANTA CRUZ DO CAPIBARIBE</td>
<td align="left" valign="middle">Endereço: Rua José Francisco Barbosa, n° 321, Centro, Santa Cruz Do Capibaribe - CE 55192385</td>
<td align="left" valign="bottom">Aguardando instalação</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">22ª DPH/DINTER 2 - 22ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - GARANHUNS</td>
<td align="left" valign="middle">Endereço: Rua Barreto Coelho s/n, São José - Garanhuns/PE - Cep: 55293-000</td>
<td align="left" valign="bottom">(87) 3761-8587</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">23ª DPH/DINTER 2 - 23ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - ARCOVERDE</td>
<td align="left" valign="middle">Endereço: Rua Herinque Dias, nº 200, São Cristovão, Arcoverde/PE - CEP: 56506-660</td>
<td align="left" valign="bottom">(87) 3821-8216</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">24ª DPH/DINTER 2 - 24ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - ARARIPINA</td>
<td align="left" valign="middle">Endereço: Av. Gov. Muniz Falcão, s/n, Planalto, Araripina/PE - CEP: 56280-000</td>
<td align="left" valign="bottom">(87) 3873-8433</td>
</tr>
<tr>
<td align="left" valign="middle" height="17">25ª DPH/DINTER 2 - 25ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PETROLINA</td>
<td align="left" valign="middle">Endereço:Avenida Cardoso de Sá, s/n, Colônia Imperial, Petrolina/PE - CEP 56328-904</td>
<td align="left" valign="bottom">(87) 3866-6781</td>
</tr>
</tbody>`;

// Função para formatar os dados da unidade policial
function formatUnitData(unitString) {
    const [unitName, address, phones] = unitString.match(/<td[^>]*>(.*?)<\/td>/g).map(td => td.replace(/<\/?[^>]+(>|$)/g, ""));
    const telefoneDaUnidade = phones.split(" / ").map(phone => phone.trim());
    return {
        nomeDaUnidade: unitName,
        enderecoDaUnidade: address.replace("Endereço: ", ""),
        telefoneDaUnidade,
        coordenadasDaUnidade: {
            latitude: "",
            longitude: "",
        }
    };
}

// Função para processar a string de dados das unidades policiais
function processDataString(dataString) {
    const units = dataString.split("</tr>\n<tr>");
    const unidadesPoliciais = units.map(unit => formatUnitData(unit));
    return unidadesPoliciais;
}

// Processa a string de dados e gera a lista de unidades policiais formatada
const unidadesPoliciais = processDataString(dataString);

// Imprime a lista formatada no console
console.log(unidadesPoliciais);

// Gerar o conteúdo do arquivo .js
const jsContent = 'const unidadesPoliciais = ' + JSON.stringify(unidadesPoliciais, null, 4).replace(/"([^"]+)":/g, '$1:') + ';\n\nexport { unidadesPoliciais };';

// Escrever o conteúdo no arquivo unidades.js
fs.writeFileSync('unidadesPoliciaiss.js', jsContent);

console.log("Arquivo unidades.js criado com sucesso!");