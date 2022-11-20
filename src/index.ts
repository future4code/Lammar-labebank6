import express, {Request,Response} from 'express'
import cors from 'cors'
import { UsuarioDaConta } from './types'
import { users } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.post("/users/addUser", (req:Request, res:Response)=>{
let errorCode = 400

try{
    const {nome, cpf, aniversario} = req.body
if(!nome || !cpf || !aniversario){
errorCode = 422
throw new Error("Falta passar paramentros, nome CPF, data de Nascimento");
}

let idadeUsuario = aniversario.split('/')
let dataAtual = new Date()
let stringData = idadeUsuario[1] + '-' + idadeUsuario[0] + '-' + idadeUsuario[2];
let idade = new Date(stringData);
let daIdade = idade.setFullYear(idade.getFullYear()+18)
console.log('Data formatada 2:' + idade)
console.log('Data de hoje:' + dataAtual)

  if(idade > dataAtual){
    errorCode = 401
    throw new Error("Menor de 18 anos. Usuário não autorizado!");
  }

  const novoUsuario : UsuarioDaConta ={
    nome : nome,
    cpf : cpf,
    aniversario : aniversario,
    // balancoDaConta : balancoDaConta,
    extrato : []
  }

  users.push(novoUsuario)

  res.status(201).send(users)

} catch (error:any){
    res.status(errorCode).send(error.message)
}

})

app.get('/users',(req:Request,res:Response)=>{
  res.send(users)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

