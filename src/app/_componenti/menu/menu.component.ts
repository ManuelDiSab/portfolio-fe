import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { UtilityService } from '../../_servizi/utility.service';
import { IVoce } from '../../_interfacce/ivoce';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-menu',
    imports: [CommonModule, RouterLink],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {

    logo: string = "/logo.png"
    voci: IVoce[] =
        [{ nome: 'Homepage', url: 'intro', icon: '', href: true },
        { nome: 'Chi sono', url: 'chi-sono', icon: '', href: true },
        { nome: 'Strumenti', url: 'competenze', icon: '', href: true },
        { nome: 'Progetti', url: 'progetti', icon: '', href: true },
        ]
    showMenu: boolean = false
    isOpen: boolean = false
    isNavbarFixed = true
    navbarHeight = 0
    isMobile = window.innerWidth <= 1024;



    @ViewChild('navbar') navbar!: ElementRef
    private navbarOffsetTop = 0
    constructor(private el: ElementRef, private cdr: ChangeDetectorRef, private UT: UtilityService) {

    }
    ngAfterViewInit(): void {
        const observer = new ResizeObserver(x => {
            // const height = this.navbar.nativeElement.offsetHeight
            const height = x[0].contentRect.height
            this.UT.setNavbarHeight(height)
        })
        observer.observe(this.navbar.nativeElement)
    }
    toggleMenu(event?: MouseEvent) {
        if (event) {
            event.stopPropagation(); // 🔥 ferma il click dal propagarsi al document
        }
        this.isOpen = !this.isOpen
        const menuElement = this.navbar.nativeElement.querySelector('.nav-links');
        if (this.isOpen) {
            menuElement.style.display = 'flex';  // o 'block' a seconda del layout
        } else {
            setTimeout(() => {
                menuElement.style.display = 'none';
            }, 290)
        }
    }
}
