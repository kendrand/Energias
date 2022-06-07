import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiaEolicaComponent } from './energia-eolica.component';

describe('EnergiaEolicaComponent', () => {
  let component: EnergiaEolicaComponent;
  let fixture: ComponentFixture<EnergiaEolicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergiaEolicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergiaEolicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
