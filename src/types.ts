//usuario de conta//

export type UsuarioDaConta= {
    nome: string,
    cpf: string,
    aniversario: string,
    // balancoDaConta: number,
    extrato: Extrato[]
}

//TYpes//
export type Extrato ={
    valorPagamento: number,
    descricaoPaga: string,
    dataPagamento: string
}

//Tipos de Transição//

export type SaldoDaConta={
    nome: string,
    cpf: string
}

export type Valoradd={
    nome: string,
    cpf: string,
    valor: number
}

export type Pagamento={
    valorPagamento: number,
    descricaoPagamento: string,
    dataPagemento: string
}

export type TransferenciaDeDinheiro={
    name: string,
    cpf: string,
    nomeDoDestinatario: string,
    cpfDoDestinatario: string,
    valorTrasferido: number
}