import prompt from "prompt-sync";
const ler = prompt()

export function qtd_depositar(){
        return Number (ler('quanto voce deseja depositar: R$'))
}

export function qtd_sacar(){
    return Number (ler('quanto voce deseja sacar: R$'))
}

export function escolha_do_menu(){
    console.log('digite sair do programa')
    const escolha = ler('qual sua escolha: ')
    return escolha.toLowerCase() === 'sair' ?  'sair' : Number(escolha)
}

export function continuar (){
    ler ("aperte enter para continuar")
    console.clear()
}