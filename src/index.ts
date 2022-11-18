import express from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())


console.log ('Olá mundo')

// 1. Criar conta
// crie um tipo apra representar a conta do usuário

type userConta ={
    nome: string,
    cpf: number,
    dataNascimento: number,
    saldo: number,
    gastos: {
        valor: number,
        data: Date,
        descricao: string
    }
}

const user1 = {
    nome: "Rafael",
    cpf: "000.000.000-01",
    dataNascimento:"01/01/1995",
    saldo: 0,
    gastos: {
        valor: 15,
        data: 16/11/2022,
        descricao: "ParkShopping"
    }
}

// type ArrayUser = 


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});