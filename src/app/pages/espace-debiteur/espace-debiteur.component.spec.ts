import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceDebiteurComponent } from './espace-debiteur.component';

describe('EspaceDebiteurComponent', () => {
  let component: EspaceDebiteurComponent;
  let fixture: ComponentFixture<EspaceDebiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceDebiteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceDebiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
