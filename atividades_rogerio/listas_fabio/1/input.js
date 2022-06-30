import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}


export function inserir_numero(mensagem){

    let valor = Number(input(mensagem))

    while (isNaN(valor)){
        console.log('Não eh um numero, digite novamente!')
        valor = Number(input(mensagem))
    }
    return valor
}


export function inserir_numero_positivo(mensagem){
    
    let valor = Number(input(mensagem))

    while(valor < 0 || isNaN(valor)){
        console.log('Não é um numero positivo, digite novamente -> ')
        valor = Number(input(mensagem))
    }

    return valor
}


export function vetor_valor_padrao(tamanho, valor_padrao){

    let vetor = new Array(tamanho)
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = valor_padrao
    }

    return vetor
}


export function vetor_aleatorio(tamanho, max, min){

    let vetor = new Array(tamanho)
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number((Math.random() * (max - min) + min).toFixed(0))
    }

    return vetor
}


export function vetor_manual(tamanho){

    let vetor = new Array(tamanho)
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(inserir_numero(`Elemento ${i+1} -> `))
    }

    return vetor
}


export function adicionar_item_vetor(vetor, posicao, item){

    let novo_vetor = new Array(vetor.length+1)
    let j = 0

    for(let i = 0; i < novo_vetor.length; i++){
        if(i === posicao){
            novo_vetor[i] = item
        }else{
            novo_vetor[i] = vetor[j]
            j++
        }
    }

    return novo_vetor
}


export function remover_item_vetor(vetor, posicao){

    let novo_vetor = new Array(vetor.length - 1)
    let j = 0

    for(let i = 0; i < vetor.length; i++){
        if(i !== posicao){
            novo_vetor[j] = vetor[i]
            j++
        }
    }

    return novo_vetor
}


export function push(vetor, item){
    
    let novo_vetor = new Array(vetor.length+1)
    let j = 0

    for(let i = 0; i < novo_vetor.length; i++){
        if(i === novo_vetor.length-1){
            novo_vetor[i] = item
        }else{
            novo_vetor[i] = vetor[j]
            j++
        }
    }
    
    return novo_vetor
}


export function pop(vetor){
    let item_removido = vetor[vetor.length-1]
    let novo_vetor = remover_item_vetor(vetor, vetor.length-1)

    return [item_removido, novo_vetor]
}


export function map(vetor, funcao){
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = funcao(vetor[i])
    }

    return vetor
}


export function filter(vetor, funcao){
    let novo_vetor = new Array(0)

    for(let i = 0; i < vetor.length; i++){
        if(funcao(vetor[i])){
            novo_vetor = push(novo_vetor, vetor[i])
        }
    }
}


export function matriz_automatica(colunas, linhas, max, min){
    let matriz = new Array(colunas)

    for(let i = 0; i < colunas; i++){
        matriz[i] = new Array(linhas)
        for (let j = 0; j < linhas; j++) {
            matriz[i][j] = Number((Math.random() * (max - min) + min).toFixed(0))
        }
    }

    return matriz
}


export function soma_diagonal_principal(matriz){

    let soma_diagonal = 0

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(i === j){
                soma_diagonal += matriz[i][j]
            }
        }
    }
    return soma_diagonal
}


export function soma_diagonal_secundaria(matriz){

    let soma_diagonal = 0
    let a = 0
    let b = matriz.length-1

    for (let i = 0; i < matriz.length; i++) {
        soma_diagonal += matriz[a][b]
        a++
        b--
    }
    
    return soma_diagonal
}


export function soma_total_matrizes(matriz){

    let soma_matriz = 0

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma_matriz += matriz[i][j]
        }
    }

    return soma_matriz
}
