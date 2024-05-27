import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'custom-slider',
  template: `
    <label for="item-input">Add an item:</label>
    <input type="text" id="item-input" #newItem />
    <button type="button" (click)="addNewItem(newItem.value)">
      Add to parent's list
    </button>
  `,
  inputs: ['disabled: sliderDisabled'],
})
export class CustomSlider {
  @Input({ transform: trimString }) label = '';
  @Input({ alias: 'sliderValue' }) value = 0;

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}
