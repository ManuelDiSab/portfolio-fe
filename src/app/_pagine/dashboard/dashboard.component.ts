import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProgetto } from '../../_interfacce/iprogetto';
import { ApiService } from '../../_servizi/api.service';

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule, RouterLink],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

    projects: IProgetto[] = []
    private apiService = inject(ApiService)


    ngOnInit(): void {
        this.loadProjects()
    }

    // Carica i progetti dal database | Load the projects from the database
    loadProjects() {
        this.apiService.getAllProjects().subscribe({
            next: (data) => this.projects = data,
            error: (err) => console.error('Errore nel caricamento dei progetti', err)
        })
    }

    // Elimina un progetto dal database | Delete a project from the database
    deleteProject(id: number) {
        this.apiService.deleteProject(id).subscribe({
            next: () => {
                this.projects = this.projects.filter(p => p.id !== id)
            },
            error: (err) => console.error("Errore nell'eliminazione del progetto", err)
        })
    }

    // saveProject() {
    //     this.apiService.createProject(this.newProject).subscribe({
    //         next: () => {
    //             this.newProject = { title: "", description: "", imageUrl: "", url: "" }
    //             this.loadProjects()
    //         },
    //         error: (err) => console.error('Errore nella creazione del progetto', err)
    //     })
    // }
}
