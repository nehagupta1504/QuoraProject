import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoraPageComponent } from './quora-page.component';

describe('QuoraPageComponent', () => {
  let component: QuoraPageComponent;
  let fixture: ComponentFixture<QuoraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoraPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
