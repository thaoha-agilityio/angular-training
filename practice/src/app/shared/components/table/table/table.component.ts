import { Component } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';

// Constants
import { USER_COLUMNS } from '@/app/core/constants';

// Types
import { Cell } from '@/app/core/types';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgStyle, NgFor, NgIf],
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

  readonly NOTICE_MESSAGE = 'No data available';

  renderTableCell(cell: Cell, row: any) {
    return row[cell.key];
  }
}
