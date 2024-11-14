import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitPageComponent } from './git-page.component';

describe('GitPageComponent', () => {
  let component: GitPageComponent;
  let fixture: ComponentFixture<GitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
