import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para el enrutamiento
import { MainTitleComponent } from '../../components/main-title/main-title.component';
import { GitProyectComponent } from '../../components/git-proyect/git-proyect.component';
import { NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';
import { FooterComponent } from '../../components/footer/footer.component';  // Importa FooterComponent
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MainTitleComponent,
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzFooterComponent,
    FooterComponent,  // Agrega FooterComponent a la lista de imports
    GitProyectComponent,
    NzButtonModule
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  constructor(private router: Router) {} // Inyecta el Router en el constructor

  // Método que redirige a la página git-pages
  redirectToGitPage(): void {
    this.router.navigate(['/git-pages']); // Redirige internamente a la ruta '/git-pages'
  }
}
