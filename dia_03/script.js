const perg1 = prompt("Front-End ou Back-End?")
let ling = ""
if (parte1 == "Front-End") {
    ling = prompt("Deseja aprender React ou Vue?")
} 
else if (parte1 == "Back-End") {
    ling = prompt("Deseja aprender C# ou JAVA?")
}
 else {
    alert("Você não digitou uma resposta valida!")
}

const parte2 = prompt(`ira seguir se especializando em ${ling} ou ira seguir se desenvolvendo para se tornar Fullstack??`)

if (parte2 == "Fullstack"){
    alert ("Parabens e boa sorte na sua jornada para se tornar um desenvolvedor Fullstack.")
} else {
    ling = prompt("Quais as tecnologias em que deseja se especializar?")

    alert(`Muito bem. Continue se especializando na area de ${ling}.`)
}

let parte3 = prompt("Tem mais alguma tecnologia que você gostaria de aprender?")
while (parte3 !== "não"){
    perg3 = prompt("Tem mais alguma tecnologia que você gostaria de aprender?")
}
