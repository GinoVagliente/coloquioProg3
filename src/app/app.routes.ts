import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component'; // Asegúrate de que la ruta sea correcta
import { GitPageComponent } from './pages/git-page/git-page.component'; // Asegúrate de que la ruta sea correcta

export const routes: Routes = [
  { path: '', component: MainPageComponent }, // Ruta por defecto
  { path: 'git-pages', component: GitPageComponent }, // Ruta para GitPage
];
