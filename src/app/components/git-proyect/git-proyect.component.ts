import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubService } from '../../service/api-git.service';
import { NzCardModule } from 'ng-zorro-antd/card'; 
import { NzIconModule } from 'ng-zorro-antd/icon'; 
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule aquí

@Component({
  selector: 'app-git-proyect',
  standalone: true,
  imports: [
    CommonModule, 
    NzCardModule, 
    NzIconModule, 
    NzTypographyModule, 
    HttpClientModule  // Agrega HttpClientModule aquí
  ],
  templateUrl: './git-proyect.component.html',
  styleUrls: ['./git-proyect.component.css']
})
export class GitProyectComponent implements OnInit {
  repos: any[] = [];

  techIcons: { [key: string]: string } = {
    'JavaScript': 'fab fa-js',
    'TypeScript': 'fab fa-js-square',
    'Python': 'fab fa-python',
    'Java': 'fab fa-java',
    'C#': 'fab fa-cuttlefish',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'React': 'fab fa-react',
    'Angular': 'fab fa-angular',
    'Vue': 'fab fa-vuejs',
  };

  constructor(private gitHubService: GitHubService) {}

  ngOnInit() {
    const username = 'GinoVagliente';  // Reemplaza con el nombre de usuario que desees

    this.gitHubService.getRepos(username).subscribe(
      (data) => {
        this.repos = data;
        this.repos.forEach(repo => {
          this.loadReadme(repo);
        });
      },
      (error) => {
        console.error('Error fetching repos:', error);
      }
    );
  }

  loadReadme(repo: any) {
    this.gitHubService.getReadme(repo.full_name).subscribe(
      (readmeData) => {
        const readmeContent = atob(readmeData.content);
        repo.readmeContent = readmeContent;
      },
      (error) => {
        console.error('Error fetching README:', error);
        repo.readmeContent = 'No README available';
      }
    );
  }

  getTechIcon(language: string): string {
    return this.techIcons[language] || 'fas fa-code';
  }

  getRows(): any[][] {
    const rows = [];
    for (let i = 0; i < this.repos.length; i += 3) {
      rows.push(this.repos.slice(i, i + 3));
    }
    return rows;
  }
}
