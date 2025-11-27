import { Component, inject, OnInit, signal, TemplateRef, WritableSignal } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { IProgetto } from '../../../_interfacce/iprogetto';

@Component({
    selector: 'app-progetti',
    imports: [NgbModalModule],
    templateUrl: './progetti.component.html',
    styleUrl: './progetti.component.scss'
})
export class ProgettiComponent {
    private modalService = inject(NgbModal);
    closeResult: WritableSignal<string> = signal('');
    lavori: IProgetto[] = [
        {
            titolo: 'JSON ↔ CSV', descrizione: "CSV-JSON Converter è un'applicazione web semplice …immediata, pronta per essere copiata o scaricata.",
            id: 1, img: '/demo.png', tech: ['Angular', 'Typescript'], link: 'https://converter-json-csv.netlify.app/', github: 'https://github.com/ManuelDiSab/csv-json-converter'
        },
        {
            titolo: 'Gotta Catch', descrizione: 'Web app Pokemon con pokedex completo per visualizz…i deve indovinare il pokemon dalla sua silhouette',
            id: 2, img: '/gotta-catch.png', tech: ['PokeAPi', 'Laravel', 'Angular', 'Typescript'], link: 'https://gottacatch.netlify.app/', github: 'https://github.com/ManuelDiSab/ng-pokemon'
        }]
    tecnologie: string[] = ['PokeAPi', 'Laravel', 'Angular', 'Typescript']
    descrizione: string = ''
    titolo: string = ''
    constructor() { }
    open(content: TemplateRef<any>, descrizione: string, titolo: string) {
        this.descrizione = descrizione
        this.titolo = titolo
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
