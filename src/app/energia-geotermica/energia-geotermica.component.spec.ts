import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiaGeotermicaComponent } from './energia-geotermica.component';

describe('EnergiaGeotermicaComponent', () => {
  let component: EnergiaGeotermicaComponent;
  let fixture: ComponentFixture<EnergiaGeotermicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergiaGeotermicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergiaGeotermicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
