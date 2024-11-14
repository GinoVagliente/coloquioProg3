import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProyectComponent } from './git-proyect.component';

describe('GitProyectComponent', () => {
  let component: GitProyectComponent;
  let fixture: ComponentFixture<GitProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitProyectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
