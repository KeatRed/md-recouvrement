import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormulaireComponent } from './modal-formulaire.component';

describe('ModalFormulaireComponent', () => {
  let component: ModalFormulaireComponent;
  let fixture: ComponentFixture<ModalFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormulaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
