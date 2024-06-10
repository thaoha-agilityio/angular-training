import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';

// Types
import { Cell } from '@/app/core/types';

// Components
import { AvatarComponent } from '../..';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgStyle, NgFor, NgIf, AvatarComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T> {
  @Input() columns: Cell[] = [];
  @Input() data: T[] = [];

  readonly NOTICE_MESSAGE = 'No data available';

  renderTableCell(cell: Cell, row: any) {
    if (cell.renderCustomCell) {
      return cell.renderCustomCell(row[cell.key]);
    }

    return row[cell.key];
  }
}
