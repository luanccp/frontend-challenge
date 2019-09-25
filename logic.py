def main():
    dataset = [
        [1,1,1,1], #['A', 'B', 'C', 'D']
        [0,1,1,0], #['E', 'F', 'G', 'H']
        [0,1,0,1], #['I', 'J', 'K', 'L']
        [0,1,1,0], #['M', 'N', 'O', 'P']
        [1,9,1,1]  #['Q', 'R', 'S', 'T']
    ]
    # transforma input para estrutura usada              
    grafo = transforma_grafo(dataset)

    # pega qual sera o ponto de partida
    path_origem = transforma_origem([0,3])

    # descobre qual sera o ponto de chegada
    path_nine_xy = where_is_9(dataset)

    # calcula qual sera o menor caminho
    menor_path(grafo,path_origem,path_nine_xy)

# retorna a menor distancia de um No origem ate um No destino e o caminho ate ele
def menor_path(grafo, origem, fim): 

    controle = { }
    distanciaAtual = { }
    noAtual = { }
    naoVisitados = []
    # nao perder a referencia
    atual = origem 
    noAtual[atual] = 0

    
    for vertice in grafo.keys():
        #inclui os vertices nos nao visitados    
        naoVisitados.append(vertice) 
        #inicia os vertices como infinito
        distanciaAtual[vertice] = float('inf') 

    # inicializa a contagem da distancia atual
    distanciaAtual[atual] = [0,origem] 

    # para nao contar a origem
    naoVisitados.remove(atual)

    # para esse caso os pesos sao considerado sempre 1
    while naoVisitados:
        for vizinho, peso in grafo[atual].items():
             pesoCalc = peso + noAtual[atual]
             if distanciaAtual[vizinho] == float("inf") or distanciaAtual[vizinho][0] > pesoCalc:
                 distanciaAtual[vizinho] = [pesoCalc,atual]
                 controle[vizinho] = pesoCalc
                 
        if controle == {} : break    
        
        #seleciona o menor vizinho
        minVizinho = min(controle.items(), key=lambda x: x[1]) 
        atual=minVizinho[0]
        noAtual[atual] = minVizinho[1]

        #remove o no visitado
        naoVisitados.remove(atual)
        del controle[atual]

    if(distanciaAtual[fim][0]):
        print("A menor distancia de %s ate %s e: %s" % (origem, fim, distanciaAtual[fim][0]))
        print("O menor caminho e: %s" % printPath(distanciaAtual,origem, fim))          
    else:
        print("Nao encontrado.")

def printPath(distancias,inicio, fim):
        if  fim != inicio:
            return "%s -- > %s" % (printPath(distancias,inicio, distancias[fim][1]),fim)
        else:
            return inicio

def where_is_9(df):
        sum = 0
        for i in range(len(df)):
            for j in range(len(df[i])):
                sum = sum + 1
                if df[i][j] == 9:
                    return chr(sum+64)     

def transforma_grafo(a):
    No='A'
    grafo = {}
    Nos = []
    for i in range(0,len(a)):
        Nos.append([chr(ord(No)+j) for j in range(i*len(a[i]),i*len(a[i])+len(a[i]))])

    for i in range(0,len(a)):
        for j in range(0,len(a[i])):
            grafo[Nos[i][j]]= {}
            if a[i][j]==1:
                if i>0:
                    if a[i-1][j]!=0:
                        grafo[Nos[i][j]][Nos[i-1][j]]=1
                if j>0:
                    if a[i][j-1]!=0:
                        grafo[Nos[i][j]][Nos[i][j-1]]=1
                if i<len(a)-1:
                    if a[i+1][j]!=0:
                        grafo[Nos[i][j]][Nos[i+1][j]]=1
                if j<len(a[i])-1:
                    if a[i][j+1]!=0:
                        grafo[Nos[i][j]][Nos[i][j+1]]=1
    
    return grafo

def transforma_origem(pos):
    return chr(65 + (pos[1]*pos[0]) + pos[1])

main()