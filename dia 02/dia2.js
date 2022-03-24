const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
const linguagem = prompt("qual a linguagem que você esta estudando no momento?")

function teste() {
    const msg = `Olá ${nome} você tem ${idade} anos e já está aprendendo ${linguagem}.`
    document.write(msg)
}

teste2()

function teste2() {
    const msg2 = confirm(`Você gosta de estudar ${linguagem}? Click no botão OK para SIM ou cancelar para NÃO.`)

    if (msg2 == true) {
        alert("Muito bom! Continue estudando e você terá muito sucesso.")
    } else {
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    }
}