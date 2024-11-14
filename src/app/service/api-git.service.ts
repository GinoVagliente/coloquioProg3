import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface Repo {
  full_name: string;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  readmeContent?: string;
}

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  // Usa las variables del archivo de entorno
  private apiUrl = environment.apiUrl;  // Accede a la URL desde environment
  private apiKey = environment.apiKey;



  constructor(private http: HttpClient) { }

  // Obtener los repositorios de un usuario de GitHub
  getRepos(username: string): Observable<Repo[]> {
    const url = `${this.apiUrl}/users/${username}/repos`;
    const headers = new HttpHeaders({
      'Authorization': `token ${this.apiKey}`,  // Usa la apiKey desde environment
    });

    return this.http.get<Repo[]>(url, { headers });
  }

  // Obtener el contenido del README de un repositorio
  getReadme(repoFullName: string): Observable<any> {
    console.log(environment.apiUrl);  // Imprime la URL de la API configurada
    console.log(environment.apiKey);  // Imprime la clave de la API configurada
    const url = `${this.apiUrl}/repos/${repoFullName}/readme`;
    const headers = new HttpHeaders({
      'Authorization': `token ${this.apiKey}`,  // Usa la apiKey desde environment
    });

    return this.http.get<any>(url, { headers });
  }
} 
