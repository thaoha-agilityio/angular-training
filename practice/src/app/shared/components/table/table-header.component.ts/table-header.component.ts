import { Component, Input } from '@angular/core';

export interface Cell<T> {
  title: string;
  widthPercent: number;
}

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})
export class TableHeaderComponent<T> {
  @Input() columns: Cell<T>[] = [];
}
