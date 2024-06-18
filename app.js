import{qtd_depositar,qtd_sacar,continuar,escolha_do_menu} from "./exibicao.js"
import { } from "./financeiro.js"
import { menu } from "./menu.js"

let saldo = 0

export function desicao() {
    const escolha = escolha_do_menu()
    switch (escolha) {

        case 1:
        saldo = qtd_depositar (saldo)
        menu()
        break
        
        case 2:
        saldo = qtd_sacar (saldo)
        menu()    
        break

        case 3:
        console.log(`
        
        voce esta com o saldo de R$ ${saldo}
        
        `);
    continuar()
    menu()
    break

    case "sair":
        break

    default:
        console.log("opçao invalida");
        menu()
        break
        
    }
}