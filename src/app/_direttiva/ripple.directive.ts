import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const style = window.getComputedStyle(this.el.nativeElement);
    if (style.position === 'static' || !style.position) {
      this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    }
  }

  @HostListener('click', ['$event'])
  creaRipple(event: MouseEvent) {
    const button = this.el.nativeElement;
    const circle = this.renderer.createElement('span');
    this.renderer.addClass(circle, 'ripple');

    const rect = button.getBoundingClientRect();
    const diametro = Math.max(rect.width, rect.height);
    const radio = diametro / 2;

    this.renderer.setStyle(circle, 'width', `${diametro}px`);
    this.renderer.setStyle(circle, 'height', `${diametro}px`);
    this.renderer.setStyle(circle, 'left', `${event.clientX - rect.left - radio}px`);
    this.renderer.setStyle(circle, 'top', `${event.clientY - rect.top - radio}px`);
    this.renderer.setStyle(button, 'overflow', 'hidden');
    this.renderer.appendChild(button, circle);

    setTimeout(() => {
      this.renderer.removeChild(button, circle);
    }, 600);
  }

}
