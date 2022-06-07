import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiaHidraulicaComponent } from './energia-hidraulica.component';

describe('EnergiaHidraulicaComponent', () => {
  let component: EnergiaHidraulicaComponent;
  let fixture: ComponentFixture<EnergiaHidraulicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergiaHidraulicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergiaHidraulicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
