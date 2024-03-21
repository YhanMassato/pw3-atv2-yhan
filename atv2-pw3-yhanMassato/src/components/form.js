import {useState} from 'react'
import './form.css'

export default function Form(){
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [telAluno, setTelAluno] = useState('')
    const [telResp, setTelResp] = useState('')
    const [email, setEmail] = useState('')
    const [dataNasc, setDataNasc] = useState('')

    function maskCpf(cpf){
        cpf = cpf.replace(/\D/g, "")
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
        cpf = cpf.replace(/(\d{3})(\d)/, "$1-$2")
        setCpf(cpf)
    }

    function maskTelAluno(telAluno){
        telAluno = telAluno.replace(/\D/g, "")
        telAluno = telAluno.replace(/(\d{2})(\d)/, "($1)$2")
        telAluno = telAluno.replace(/(\d{5})(\d)/, "$1-$2")
        setTelAluno(telAluno)
    }

    function maskTelResp(telResp){
        telResp = telResp.replace(/\D/g, "")
        telResp = telResp.replace(/(\d{2})(\d)/, "($1)$2")
        telResp = telResp.replace(/(\d{5})(\d)/, "$1-$2")
        setTelResp(telResp)
    }

    function maskRg(rg){
        rg = rg.replace(/\D/g, "")
        rg = rg.replace(/(\d{2}),(\d)/, "$1.$2")
        rg = rg.replace(/(\d{3}),(\d)/, "$1.$2")
        rg = rg.replace(/(\d{3}}),(\d)/, "$1-$2")
        setRg(rg)
    }

    function cadastrarAluno(event){
        event.preventDefault();
        let aluno = JSON.stringify({name:nome, cpf:cpf, rg:rg, telA:telAluno, telR:telResp, email:email, dtNsc:dataNasc});

        console.log(aluno)
      }

    return(
    <>
        <div class='container'>
            <form class='form' onSubmit={cadastrarAluno}>

                <h1>Formulario de cadastro de aluno</h1>

                <p>Nome completo</p>

                <input 
                class="input-form"
                type="text"
                placeholder='Insira seu nome'
                required
                maxLength={100}
                value = {nome}
                onChange = {(event) => {setNome(event.target.value)}}
                />

                <p>Insira o CPF do aluno</p>
                <input 
                class="input-form"
                type="text"
                required
                maxLength={14}
                placeholder='XXX.XXX.XXX-XX'
                value = {cpf}
                onChange = {(event) => {maskCpf(event.target.value)}}
                />

                <p>Insira o RG do aluno</p>
                <input 
                class="input-form"
                type="text"
                required
                maxLength={12}
                value = {rg}
                placeholder='XX.XXX.XXX-X'
                onChange = {(event) => {maskRg(event.target.value)}}
                />

                <p>Insira o telefone do Aluno</p>
                <input 
                class="input-form"
                type="text"
                maxLength={14}
                minLength={13}
                value = {telAluno}
                placeholder='(XX)XXXXX-XXXX'
                onChange = {(event) => {maskTelAluno(event.target.value)}}
                />

                <p>Insira o Telefone do Responsável</p>
                <input 
                class="input-form"
                type="text"
                maxLength={14}
                minLength={13}
                placeholder='(XX)XXXXX-XXXX'
                value = {telResp}
                onChange = {(event) => {maskTelResp(event.target.value)}}
                />

                <p>Insira o Email</p>
                <input 
                class="input-form"
                type="email"
                required
                maxLength={100}
                value = {email}
                placeholder='exemplo@exemplo.com'
                onChange = {(event) => {setEmail(event.target.value)}}
                />

                <p>Insira sua data de nascimento.</p>
                <input 
                class="input-form"
                type="date"
                required
                value = {dataNasc}
                onChange = {(event) => {setDataNasc(event.target.value)}}
                />
                    <br/>
                <input 
                class="input-button"
                type="button"
                value='ENVIAR'
                />
            </form> {/*form*/}
        </div>
    </>
)}