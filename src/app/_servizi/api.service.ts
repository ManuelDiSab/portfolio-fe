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

  // GET: Recupera tutti i progetti dal DB
  getAllProjects(): Observable<IProgetto[]> {
    return this.http.get<IProgetto[]>(this.apiUrl);
  }

  // GET: Recupera un singolo progetto
  getProjectById(id: number): Observable<IProgetto> {
    return this.http.get<IProgetto>(`${this.apiUrl}/${id}`);
  }

  // POST: Salva un nuovo progetto (con immagine)
  // Usiamo FormData perché dobbiamo inviare un file binario
  createProject(projectDto: any, file: File): Observable<IProgetto> {
    const formData = new FormData();

    // Il backend si aspetta un parte chiamata "project" di tipo JSON
    formData.append('project', new Blob([JSON.stringify(projectDto)], { type: 'application/json' }));

    // E una parte chiamata "file"
    if (file) {
      formData.append('file', file);
    }

    return this.http.post<IProgetto>(this.apiUrl, formData);
  }

  // PUT: Aggiorna un progetto esistente
  updateProject(id: number, projectDto: any, file?: File): Observable<IProgetto> {
    const formData = new FormData();
    formData.append('project', new Blob([JSON.stringify(projectDto)], { type: 'application/json' }));
    if (file) {
      formData.append('file', file);
    }
    return this.http.put<IProgetto>(`${this.apiUrl}/${id}`, formData);
  }

  // DELETE: Elimina un progetto
  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
