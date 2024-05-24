import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'custom-slider',
  template: `<input />`,
})
export class CustomSlider {
  @Input({ transform: trimString }) label = '';
  @Input({ alias: 'sliderValue' }) value = 0;
}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}
