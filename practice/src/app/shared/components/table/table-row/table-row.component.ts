import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

// Types
import { Cell } from '@/app/core/types';

@Component({
  standalone: true,
  selector: 'app-table-row',
  imports: [NgIf, NgFor],
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],
})
export class TableRowComponent<T> {
  @Input() columns: Cell[] = [];
  @Input() data: T[] = [];

  readonly NOTICE_MESSAGE = 'No data available';

  renderTableCell(cell: Cell, row: any) {
    return row[cell.key];
  }
}
