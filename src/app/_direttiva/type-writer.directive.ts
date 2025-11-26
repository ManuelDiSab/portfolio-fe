import { Directive, ElementRef, Input, NgZone } from '@angular/core';

@Directive({
  selector: '[appTypeWriter]'
})
export class TypeWriterDirective {

  @Input() strings: string[] = [] // array di stringhe da mostrare
  @Input() typeSpeed: number = 100 //velocità di scrittura
  @Input() deleteSpeed: number = 100 // velocità di cancellazione
  @Input() pausa: number = 2000 // Pausa tra una parola e l'altra
  @Input() loop: boolean = true // Loop infinito
  private index = 0
  private charIndex = 0
  private isDeleting = false
  private timeoutID: any
  constructor(private el: ElementRef, private zone: NgZone) { }

  ngOnInit(): void {
    if (!this.strings || this.strings.length === 0) return;
    this.zone.runOutsideAngular(() => {
      this.startTyping()
    })
  }
  ngOnDestroy(): void {

  }

  private startTyping() {

    const current = this.strings[this.index]
    //Calcolo del testo parziale

    const displayedText = this.isDeleting ? current.substring(0, this.charIndex--)
      : current.substring(0, this.charIndex++)
    this.el.nativeElement.textContent = displayedText

    let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed
    if (!this.isDeleting && this.charIndex === current.length + 1) {
      this.isDeleting = true
      delay = this.pausa
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false
      this.index = (this.index + 1) % this.strings.length
      if (!this.loop && this.index === 0) {
        delay = this.typeSpeed
      }

    }
    this.timeoutID = setTimeout(() => this.startTyping(), delay);

  }

}
