import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
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
            titolo: 'JSON ↔ CSV', descrizione: "CSV-JSON Converter è un'applicazione web in cui caricare e convertire file .json in file .csv e viceversa, con la possibilità di scaricarli",
            id: 1, img: '/demo.png', tech: ['Angular', 'Typescript'], link: 'https://converter-json-csv.netlify.app/', github: 'https://github.com/ManuelDiSab/csv-json-converter'
        },
        {
            titolo: 'Gotta Catch', descrizione: 'Web app Pokemon con pokedex completo per visualizzare tutti i pokemon e i loro dettagli. È presente inoltre un minigioco dove bisogno indovinare il nome del pokemon in base alla sua forma. Il sito è stato creato con Angular per fornt-end, un backend Laravel per le Api necessarie al filtraggio e le PokeApi ( Api OpenSource sui pokemon).',
            id: 2, img: '/GottaCatch.jpg', tech: ['PokeAPi', 'Laravel', 'Angular', 'Typescript'], link: 'https://gottacatch.netlify.app/', github: 'https://github.com/ManuelDiSab/ng-pokemon'
        },
        {
            titolo: 'Demo di gestionale libreria', descrizione: "Web Application basata sull'architettura MVC per la digitalizzazione dei processi di una libreria (prestiti, catalogo, utenti) e gestione della persistenza dei dati su database.",
            id: 3, img: '/library_managment.jpg', tech: ['Java', 'Spring', 'Maven', 'JPA', 'Thymeleaf'], link: '', github: 'https://github.com/ManuelDiSab/Demo_MVC_gestione_libreria_spring.git'
        },
        {
            titolo: 'Demo di gestionale palestra ', descrizione: 'Backend gestionale palestra sviluppato in Java con architettura RESTful protetta da Spring Security per la gestione di accessi e abbonamenti tramite database relazionale e Spring Data JPA.',
            id: 4, img: '/Api.jpg', tech: ['Spring', 'Spring Security', 'Maven', 'JPA'], link: '', github: 'https://github.com/ManuelDiSab/GymManagement.git'
        }
    ]
    descrizione: string = ''
    titolo: string = ''
    techs: string[] = []
    constructor() { }
    open(content: TemplateRef<any>, descrizione: string, titolo: string, tech: string[]) {
        this.descrizione = descrizione
        this.titolo = titolo
        this.techs = tech
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
