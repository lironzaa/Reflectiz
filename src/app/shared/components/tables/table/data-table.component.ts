import { Component, Input } from '@angular/core';

import { DataTableColumn } from "../../../interfaces/data-table";
import { DataTableColumnTypes } from "../../../enums/data-table-column-types";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: [ './data-table.component.scss' ]
})
export class DataTableComponent {
  @Input() columns: DataTableColumn[] = [];
  @Input() rowsData: any[] = [];
  @Input() columnsNamesArr: string[] = [];
  DataTableColumnTypes = DataTableColumnTypes;
}
