import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { IProgetto } from '../_interfacce/iprogetto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiBaseUrl}/projects`;

  // --- PROGETTI ---

  // GET: Recupera tutti i progetti dal DB | Get all the project from database
  getAllProjects(): Observable<IProgetto[]> {
    return this.http.get<IProgetto[]>(this.apiUrl);
  }

  // GET: Recupera un singolo progetto | Get a single project from database
  getProjectById(id: number): Observable<IProgetto> {
    return this.http.get<IProgetto>(`${this.apiUrl}/${id}`);
  }

  // POST: Salva un nuovo progetto (con immagine) | Save a new project (with image)
  // Uso FormData perché devo inviare un file binario | I use FormData because I have to send a binary file
  createProject(projectDto: any, file: File): Observable<IProgetto> {
    const formData = new FormData();

    // Il backend si aspetta un parte chiamata "project" di tipo JSON | The backend expects a part called "project" of type JSON
    formData.append('project', new Blob([JSON.stringify(projectDto)], { type: 'application/json' }));

    // E una parte chiamata "file" | And a part called "file"
    if (file) {
      formData.append('file', file);
    }

    return this.http.post<IProgetto>(this.apiUrl, formData);
  }

  // PUT: Aggiorna un progetto esistente | Update an existing project
  updateProject(id: number, projectDto: any, file?: File): Observable<IProgetto> {
    const formData = new FormData();
    formData.append('project', new Blob([JSON.stringify(projectDto)], { type: 'application/json' }));
    if (file) {
      formData.append('file', file);
    }
    return this.http.put<IProgetto>(`${this.apiUrl}/${id}`, formData);
  }

  // DELETE: Elimina un progetto | Delete a project
  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
