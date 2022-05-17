
## story

O conceito de Blockchain é da década de 90 e vem lá dos laboratórios da Xerox, em Palo Alto, Califórnia. Sim, o mesmo laboratório que inventou o mouse e a interface gráfica na década de 70.

Apesar de ser um conceito “noventista”, sua primeira aplicação prática e famosa foi com a invenção do Bitcoin em 2008, por Satoshi Nakamoto. Embora o próprio Satoshi não cite o termo “blockchain” em seu [https://bitcoin.org/bitcoin.pdf](white-paper) de explicação do Bitcoin, os termos blocks e chain (blocos e cadeia/corrente) são citados diversas vezes, tendo originado então o termo como o conhecemos desde então.

Mas final, o que é a blockchain então? Como ela funciona? Como uma blockchain é programada?


## O que e Blockchain ?

A primeira coisa que devemos entede, que Blockchain é um tipo de banco de dados. 

Mas nao um banco de dados comum, ele tem algumas características únicas.

1 - Invés de ele possuir colunas e tabelas, como um banco de dados, a blockchain trabalha com blocos que se interconectam, formando assim uma corrente (chain), cada bloco posssui informações(dados). Todo bloco possui uma referência do seu bloco anterior, chamamos isso de (hash). Essa referência e bem sensível, pois se um dado mudar, tanto o bloco atual quanto o anterior, fica inválida.

2 - A blockchain é imutável, ou seja! voçè pode consultar e adicionar novos dados, menos remover, ou editar, isso porque sendo uma corrente de blocos, qualquer modificacao de um bloco existente, quebraria a referência(hash) entre os blocos, e consequentimente a corrente. assim só pode ser adicionados novos blocos no final.

3 - A outra característica importante, a blockchain é um banco **descentralizado**, ou seja, não fica apenas em um servidor, mas sim em vários nós(node), que atuam em cooperação para manter a blockchain no ar (rede), segura e, em funcionamento. nós(node) entrar e sair livremente da rede, enquanto ao menos un nó(node) estiver online, a blockchain permanecerá em funcionamento. O funcionameto da blockchain consistem em adicionar novos dados(podem ser dados de quanlquer coisa) contiuamente, ou validar a rede. Nós(node) que registram dados na blockchain, chamamos de **Mineradores**, e eles são recompensados com tokens ou moedas da própria rede quando é efetuado as atividades com sucesso.

4 - No caso da Blockchain "original", a do **Bitcoin**, podemos adicionar mais uma características que é o fato dela ser **Pública**, mas não é regra em todas blockchains. Podendo esistir blockchains **Privadas** que envolve dados sensíveis de governos e empresas, por exemplo. Isso porque apesar da Blockchain Bitcoin, registrar apenas transações com a moeda do mesmo nome, Blockchain com a **Etehereum** e outras mais modernas, permite o registro de _Qualquer_ tipo de informação, o que constumamos chamar de **Smart Contracts**(Contrato Inteligentes).


