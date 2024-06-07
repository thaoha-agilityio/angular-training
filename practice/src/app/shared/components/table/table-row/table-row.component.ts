import { Component, Input } from '@angular/core';

// Types
import { Cell, ObjectWithTypeCheck } from '@/app/core/types';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-table-row',
  imports: [NgIf, NgFor],
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],
})
export class TableRowComponent<T extends ObjectWithTypeCheck> {
  @Input() columns: Cell[] = [];
  @Input() data: T[] = [];

  readonly NOTICE_MESSAGE = 'No data available';

  renderTableCell(cell: Cell, row: T) {
    return row[cell.key];
  }
}
