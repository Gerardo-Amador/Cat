import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoComponent } from './gato.component';

describe('GatoComponent', () => {
  let component: GatoComponent;
  let fixture: ComponentFixture<GatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
