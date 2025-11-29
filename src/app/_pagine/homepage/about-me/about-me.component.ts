import { Component } from '@angular/core';
import { TypeWriterDirective } from '../../../_direttiva/type-writer.directive';
import { IContatto } from '../../../_interfacce/icontatto';

@Component({
    selector: 'app-about-me',
    imports: [TypeWriterDirective],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
    path: string = '/avatar.png'
    smile:string = ':=)'
    contatti: IContatto[] = [
        { idContatto: 1, icona: '/icon/github.svg', link: 'https://github.com/MAnuelDiSab' },
        { idContatto: 8, icona: '/icon/linkedin.svg', link: 'https://www.linkedin.com/in/manuel-di-sabatino/' },
        { idContatto: 10, icona: '/icon/gmail.svg', link: 'mailto:manueldisabat@gmail.com' }
    ]

    titoli: string[] = ['Manuel Di Sabatino', 'Full-stack developer']
}
