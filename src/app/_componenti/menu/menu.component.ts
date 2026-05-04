import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, TemplateRef, ViewChild } from '@angular/core';
import { UtilityService } from '../../_servizi/utility.service';
import { IVoce } from '../../_interfacce/ivoce';
import { RouterLink } from '@angular/router';
import { NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-menu',
    imports: [CommonModule, RouterLink, NgbModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    // animations: [
    //     trigger('menuState', [
    //         state('chiuso', style({
    //             height: '0px',
    //             overflow: 'hidden',
    //             // display:'none'
    //         })),
    //         state('aperto', style({
    //             height: '*', // altezza naturale
    //             overflow: 'hidden',
    //         })),
    //         transition('chiuso <=> aperto', [
    //             animate('300ms ease-in-out')
    //         ]),
    //         state('nessunaAnimazione', style({
    //             height: '*',
    //             overflow: 'visible',
    //         })),
    //     ])
    // ]
})
export class MenuComponent implements AfterViewInit {
    private offcanvasService = inject(NgbOffcanvas);
    logo: string = "/logo.png"
    voci: IVoce[] =
        [{ nome: 'Chi sono', url: 'intro', icon: '', href: true },
        { nome: 'Progetti', url: 'progetti', icon: '', href: true },
        { nome: 'Skill', url: 'competenze', icon: '', href: true },
        { nome: 'Formazione', url: 'formazione', icon: '', href: true },
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
            // const height = x[0].contentRect.height
            const height = this.navbar.nativeElement.offsetHeight
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
    openEnd(content: TemplateRef<any>) {
        this.offcanvasService.open(content, { position: 'end', animation: true, });
    }
    downloadCV() {
        const link = document.createElement('a');
        link.href = '/CV_Di_Sabatino_Manuel.pdf';
        link.download = 'CV_Di_Sabatino_Manuel.pdf';
        link.click();
    }
}
