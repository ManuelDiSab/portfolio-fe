import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { IFormazione } from '../../../_interfacce/iformazione';
import { ModalDismissReasons, NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-educazione',
    imports: [NgbModalModule],
    templateUrl: './educazione.component.html',
    styleUrl: './educazione.component.scss'
})
export class EducazioneComponent {
    private modalService = inject(NgbModal);
    closeResult: WritableSignal<string> = signal('');
    img_modal: string = ''
    currentlyLearning: Partial<IFormazione>[] = [
        { titolo: 'React', icona: 'devicon-react-original colored' },
        { titolo: 'Redux', icona: 'devicon-redux-original colored' },
        { titolo: 'Next.js', icona: 'devicon-nextjs-plain' },
    ]

    arr_formazione: IFormazione[] = [
        { img: '/code1.jpg', titolo: 'Certficazione in sviluppo FullStack', periodo: 'Aprile 2024 - Giugno 2025', descrizione: 'Certificazione in sviluppo full-stack con Angular e Laravel: progettazione frontend, creazione di API REST, integrazione con database SQL e gestione dell’autenticazione JWT.' },
        { img: '/code2.jpg', titolo: 'Certificazione in progettazione UI/UX ', periodo: 'Aprile 2024 - Giugno 2025', descrizione: 'Attestato in UX/UI Experience con focus su progettazione di interfacce intuitive, analisi dei percorsi utente e creazione di layout moderni e responsive.' },
        { img: '/diploma.jpg', titolo: 'Diploma istituto tecnico, indirizzo informatico', periodo: '2015-2020', descrizione: 'Diploma in Informatica presso l’I.T.T. V.Cerulli, un percorso tecnico di cinque anni che mi ha fornito basi nella programmazione, nei sistemi informatici e nelle reti.' }
    ]

    

    open(content: TemplateRef<any>, img: string | null) {
        if (img === null) return
        this.img_modal = img
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title', centered: true, animation: true,
            size: 'lg'
        }).result.then(
            (result) => {
                this.closeResult.set(`Closed with: ${result}`);
            },
            (reason) => {
                this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
            },
        );
    }

    private getDismissReason(reason: any): string {
        switch (reason) {
            case ModalDismissReasons.ESC:
                return 'by pressing ESC';
            case ModalDismissReasons.BACKDROP_CLICK:
                return 'by clicking on a backdrop';
            default:
                return `with: ${reason}`;
        }
    }
}
