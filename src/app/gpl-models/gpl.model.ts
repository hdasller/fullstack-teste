export type Query = {
  buscaVeiculo: Veiculo[];
}

export type Veiculo = {
  marca: string
  modelo: string
  ano_fabricacao: number
  ano_modelo: number
  combustivel: boolean
  cor: string
  usado: boolean
}
