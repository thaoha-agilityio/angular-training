import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';

// Types
import { Cell } from '@/app/core/types';

// Components
import { AvatarComponent } from '../..';

// Constants
import { NOTICE_MESSAGE } from '@/app/core/constants';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgStyle, NgFor, NgIf, AvatarComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T extends { id: number }> {
  @Input() columns: Cell[] = [];
  @Input() data: T[] = [];

  @Output() clickRow: EventEmitter<number> = new EventEmitter<number>();

  readonly NOTICE_MESSAGE = NOTICE_MESSAGE;

  renderTableCell(cell: Cell, row: any) {
    if (cell.renderCustomCell) {
      return cell.renderCustomCell(row[cell.key]);
    }

    return row[cell.key];
  }

  onClickRow(id: number) {
    this.clickRow.emit(id);
  }
}
