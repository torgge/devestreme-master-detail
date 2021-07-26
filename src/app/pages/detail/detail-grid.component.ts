import { Component, Input, AfterViewInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';


@Component({
    selector: 'app-detail-grid',
    templateUrl: 'detail-grid.component.html'
})
export class DetailGridComponent implements AfterViewInit {

    @Input() key: number | undefined;
    detailDataSource: DataSource | any;
    detailList: any[];

  constructor() {
    this.detailList =  [
      {id: 1, parentId: 1, value: 101, description: 'description 001'},
      {id: 2, parentId: 1, value: 102, description: 'description 002'},
      {id: 3, parentId: 1, value: 103, description: 'description 003'},
      {id: 4, parentId: 1, value: 104, description: 'description 004'},
      {id: 5, parentId: 2, value: 201, description: 'description 005'},
      {id: 6, parentId: 2, value: 202, description: 'description 006'},
      {id: 7, parentId: 2, value: 203, description: 'description 007'},
      {id: 8, parentId: 2, value: 204, description: 'description 008'},
      {id: 9, parentId: 2, value: 205, description: 'description 009'},
      {id: 10, parentId: 2, value: 206, description: 'description 010'},
      {id: 11, parentId: 2, value: 207, description: 'description 011'},
      {id: 12, parentId: 3, value: 301, description: 'description 012'}
    ];
  }

  ngAfterViewInit(): void {
    this.detailDataSource = new DataSource({
      store: new ArrayStore({
        data: this.detailList,
        key: 'id'
      }),
      filter: ['parentId', '=', this.key]
    });
  }
}

