import { Component, OnInit } from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

export interface Listado {
  id: number,
  mercaderiaNombre: string,
  mercaderiaApellido: string,
  parametroValue: number,
  analisisNombre: string,
  analisisValor: number
}


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  dataSource: DataSource | undefined;
  defaultList: Listado[] = [];

  mainList = [{
    id: 1,
    mercaderias: [{id: 1, nome: 'caballo 001', apellido: 'azul'}],
    parametros: [
      {id: 1, parentId: 1, value: 101, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 2, parentId: 1, value: 102, parametrosAnalise: {nome: 'hola', valor:6}},
      {id: 3, parentId: 1, value: 103, parametrosAnalise: {nome: 'hola', valor:5}},
      {id: 4, parentId: 1, value: 104, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 5, parentId: 1, value: 201, parametrosAnalise: {nome: 'hola', valor:11}},
      {id: 6, parentId: 1, value: 202, parametrosAnalise: {nome: 'hola', valor:200}},
      {id: 7, parentId: 1, value: 203, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 8, parentId: 1, value: 204, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 9, parentId: 1, value: 205, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 10, parentId: 1, value: 206, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 11, parentId: 1, value: 207, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 12, parentId: 1, value: 301, parametrosAnalise: {nome: 'hola', valor:2}}
    ]
  },
  {
    id: 5,
    mercaderias: [{id: 2, nome: 'caballo', apellido: 'azul'}],
    parametros: [
      {id: 1, parentId: 5, value: 101, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 2, parentId: 5, value: 102, parametrosAnalise: {nome: 'hola', valor:6}},
      {id: 3, parentId: 5, value: 103, parametrosAnalise: {nome: 'hola', valor:5}},
      {id: 4, parentId: 5, value: 104, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 5, parentId: 5, value: 201, parametrosAnalise: {nome: 'hola', valor:11}},
      {id: 6, parentId: 5, value: 202, parametrosAnalise: {nome: 'hola', valor:200}},
      {id: 7, parentId: 5, value: 203, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 8, parentId: 5, value: 204, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 9, parentId: 5, value: 205, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 10, parentId: 5, value: 206, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 11, parentId: 5, value: 207, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 12, parentId: 5, value: 301, parametrosAnalise: {nome: 'hola', valor:2}}
    ]
  },
  {
    id: 12,
    mercaderias: [{id: 3,nome: 'caballo 003', apellido: 'azul'}],
    parametros: [
      {id: 1, parentId: 12, value: 101, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 2, parentId: 12, value: 102, parametrosAnalise: {nome: 'hola', valor:6}},
      {id: 3, parentId: 12, value: 103, parametrosAnalise: {nome: 'hola', valor:5}},
      {id: 4, parentId: 12, value: 104, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 5, parentId: 12, value: 201, parametrosAnalise: {nome: 'hola', valor:11}},
      {id: 6, parentId: 12, value: 202, parametrosAnalise: {nome: 'hola', valor:200}},
      {id: 7, parentId: 12, value: 203, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 8, parentId: 12, value: 204, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 9, parentId: 12, value: 205, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 10, parentId: 12, value: 206, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 11, parentId: 12, value: 207, parametrosAnalise: {nome: 'hola', valor:2}},
      {id: 12, parentId: 12, value: 301, parametrosAnalise: {nome: 'hola', valor:2}}
    ]
  }];

  constructor() {
    this.mainList.forEach(ll => {

      let main = { id:ll.id };
      let mercaderias = ll.mercaderias.map(m => {
        return {mercaderiaNombre:m.nome, mercaderiaApellido:m.apellido}
      });
      let parametros = ll.parametros.map(p => {
        return {parametroValue: p.value}
      });
      let analis = ll.parametros.map(a => {
        return {analisisNombre: a.parametrosAnalise.nome, analisisValor: a.parametrosAnalise.valor}
      });

      parametros.map(par => {
          mercaderias.map(mer => {
            analis.map(ana => {
              let item: Listado = {...main, ...par, ...mer, ...ana} as Listado;
              if (this.defaultList.findIndex(f => JSON.stringify(f) === JSON.stringify(item)) === -1) this.defaultList.push(item);
            })
        })
      });
    });

    this.dataSource = new DataSource({
      store: new ArrayStore({
        data: this.defaultList,
        key: 'id'
      })
    });
  }

  ngOnInit(): void {
    console.log('LISTA', this.defaultList);
  }

}
