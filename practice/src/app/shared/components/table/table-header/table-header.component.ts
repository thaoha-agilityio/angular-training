import { NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

// Types
import { Cell } from '@/app/core/types';
@Component({
  standalone: true,
  selector: 'app-table-header',
  imports: [NgStyle, NgFor],
  templateUrl: './table-header.component.html',
})
export class TableHeaderComponent {
  @Input() columns: Cell[] = [];
}
