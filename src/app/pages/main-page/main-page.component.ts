import { Component } from '@angular/core';
import {MainTitleComponent} from '../../components/main-title/main-title.component'
import { NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';
import {GitProyectComponent} from '../../components/git-proyect/git-proyect.component'
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MainTitleComponent,NzLayoutComponent, NzHeaderComponent, NzContentComponent,NzFooterComponent,GitProyectComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
