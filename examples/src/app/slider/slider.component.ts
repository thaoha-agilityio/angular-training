import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'custom-slider',
  template: `<input />`,
})
export class CustomSlider {
  @Input({ transform: trimString }) label = '';
}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}
