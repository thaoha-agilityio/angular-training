import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() appHighlight = '';
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight();
  }
  private highlight() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }
}
