import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Hace que este componente sea independiente de un módulo
  imports: [RouterOutlet, MainPageComponent],  // Se importan los componentes necesarios
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Cambié styleUrl a styleUrls
})
export class AppComponent {
  title = 'portafolio';
}
