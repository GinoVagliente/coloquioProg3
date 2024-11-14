import { Component } from '@angular/core';
import { GitProyectComponent } from "../../components/git-proyect/git-proyect.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { NzLayoutComponent } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-git-page',
  standalone: true,
  imports: [GitPageComponent, GitProyectComponent,FooterComponent,NzLayoutComponent],
  templateUrl: './git-page.component.html',
  styleUrl: './git-page.component.css'
})
export class GitPageComponent {

}
