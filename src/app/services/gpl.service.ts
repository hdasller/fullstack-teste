import { Injectable } from '@angular/core';

import { Find, Create, Update, DeleteModel, Types } from '../gpl-models/queries.model';
import { Query } from '../gpl-models/gpl.model';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class GplService {
  modal;
  constructor(
    private apollo: Apollo,
  ) { }

  setModal(modal){
    this.modal = modal
  }
  getModal()
  {
    return this.modal
  }

  public findType(type){
    // this.apollo
    // .query({ Types(type) })
    // .then((result) => {
    //   console.log(JSON.stringify(result, null, '  '));
    // })
    // .catch((err) => {
    //   console.error(err);
    // });
    return this.apollo.watchQuery<Query>({
      // variables:  {data: ""},
      query: Types(type),
       fetchPolicy: 'network-only',
    }).valueChanges

  }

  public find(key, limit, page) {
    return this.query(Find, key, limit, page)
  }

  public create(data) {
    return this.mutate(Create, null, data)
  }

  public update(id, data) {
    return this.mutate(Update, id, data)
  }

  public deleteModel(id) {
    return this.mutate(DeleteModel,  id, null)
  }

  public mutate(query, id, data) {
    let variables = {
      id: id,
      data: data
    }
    if (!data) delete variables.data;
    if (!id) delete variables.id;
    let params = {
      mutation: query,
      variables: variables
    }
    return this.apollo.mutate(params)
  }

  public query(query, key, limit, page) {

    let variables = {
      "limit": limit,
      "page": page,
      "type": "veiculo",
      "query": key,
    }

    if (!key) delete variables.query;

    return this.apollo.watchQuery<Query>({
      variables: variables,
      query: query,
       fetchPolicy: 'network-only',
    }).valueChanges
  }


}
