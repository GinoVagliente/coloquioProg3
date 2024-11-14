import { Component } from '@angular/core';
import { NzContentComponent, NzFooterComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NzLayoutComponent,NzFooterComponent,NzContentComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent { }
