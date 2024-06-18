


export function depositar() {
    let depositado = depositado_valido(qtd_depositar())
    let novovalor = saldo + depositado  
    return novovalor


}



export function deposita() {
    let sacado = saque_valido(qtd_sacar())
    let novovalor = saldo - depositado  
    return novovalor
}


















