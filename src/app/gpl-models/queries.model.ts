import gql from 'graphql-tag';

export const Find  = gql`
query	BuscaVeiculo ($page: Int, $limit: Int, $query: String ,$type: String){
  buscaVeiculo(page: $page, limit: $limit, query: $query ,type: $type){
    total

    pageInfo{

       hasPreviousPage
       hasNextPage
       pages
       page

     }

  	edges{
      node {
                _id
                modelo
                marca
                ano_modelo
                ano_fabricacao
                combustivel
                cor
                usado
    }
    }
  }
}`;

export const Create = gql`mutation	CreateVeiculo ($data: VeiculoInput!){
  createVeiculo(data: $data)
}`
export const Update = gql`mutation	UpdateVeiculo ($data: JSON! $id: ID!){
  updateVeiculo(data: $data, id: $id)
}`
export const DeleteModel = gql`mutation	DeleteVeiculo ( $id: ID!){
  deleteVeiculo( id: $id)
}`

export const Types = (type) => {

  return gql`
  {
  __type(name: "${type}") {
    name
    enumValues {
      name
    }
  }
}`

}
