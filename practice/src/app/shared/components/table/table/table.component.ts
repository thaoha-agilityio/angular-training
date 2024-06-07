import { Component } from '@angular/core';

// Components
import { TableHeaderComponent } from '../table-header/table-header.component';
import { TableRowComponent } from '../table-row/table-row.component';

// Constants
import { USER_COLUMNS } from '@/app/core/constants';

// Types
import { Cell } from '@/app/core/types';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableHeaderComponent, TableRowComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  columns: Cell[] = USER_COLUMNS;

  data = [
    {
      id: '2',
      fullName: 'Floyd Miles',
      email: 'jane@microsoft.com',
      status: 'active',
    },
    {
      id: '2',
      fullName: 'Floyd Miles',
      email: 'jane@microsoft.com',
      status: 'inactive',
    },
  ];
}
