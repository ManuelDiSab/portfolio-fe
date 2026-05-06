import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../_servizi/api.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-project-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './project-form.component.html',
    styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnInit {
    projectForm: FormGroup;
    selectedFile: File | null = null;
    isEditMode = false;
    projectId: number | null = null;
    imagePreview: string | null = null;

    private fb = inject(FormBuilder);
    private apiService = inject(ApiService);
    private route = inject(ActivatedRoute);
    protected router = inject(Router);

    constructor() {
        this.projectForm = this.fb.group({
            titolo: ['', Validators.required],
            descrizione: ['', [Validators.required, Validators.minLength(50)]],
            tech: ['', Validators.required], // Verrà trasformato in array | Will be transformed in array
            link: [''],
            github: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        // Controllo se c'è un ID nell'URL | Check if there's an ID in the URL
        this.projectId = this.route.snapshot.params['id'];
        if (this.projectId) {
            this.isEditMode = true;
            this.loadProjectData(this.projectId);
        }
    }

    loadProjectData(id: number) {
        this.apiService.getProjectById(id).subscribe(project => {
            // Riemplo il form con i dati esistenti | Fill the form with the existing data
            this.projectForm.patchValue({
                titolo: project.titolo,
                descrizione: project.descrizione,
                tech: project.tech.join(', '), // Trasformo l'array in stringa separata da virgole | Transform array into comma-separated string
                link: project.link,
                github: project.github
            });
            if (project.img) {
                this.imagePreview = `http://localhost:8080/uploads/projects/${project.img}`;
            }
        });
    }

    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.selectedFile = file;
            // Anteprima dell'immagine | Image preview
            const reader = new FileReader();
            reader.onload = () => this.imagePreview = reader.result as string;
            reader.readAsDataURL(file);
        }
    }

    onSubmit() {
        if (this.projectForm.invalid) return;

        const projectData = {
            ...this.projectForm.value,
            // Trasformiamo la stringa delle tech in un vero array di stringhe 
            // Transform the string of tech into an array of strings
            tech: this.projectForm.value.tech.split(',').map((t: string) => t.trim())
        };

        if (this.isEditMode && this.projectId) {
            this.apiService.updateProject(this.projectId, projectData, this.selectedFile!).subscribe(() => {
                this.router.navigate(['/dashboard']);
            });
        } else {
            this.apiService.createProject(projectData, this.selectedFile!).subscribe(() => {
                this.router.navigate(['/dashboard']);
            });
        }
    }
}
