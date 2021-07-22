import {Component} from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  templateUrl: 'tasks.component.html'
})

export class TasksComponent {
  dataSource: DataSource | undefined;
  masterList: any[]

  constructor() {
    this.masterList = [{id: 1, name: 'desc01'}, {id: 2, name: 'desc02'}, {id: 3, name: 'desc03'}];
    this.dataSource = new DataSource({
      store: new ArrayStore({
        data: this.masterList,
        key: 'id'
      })
    });
  }

}
