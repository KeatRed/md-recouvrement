import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsGeneralesComponent } from './conditions-generales.component';

describe('ConditionsGeneralesComponent', () => {
  let component: ConditionsGeneralesComponent;
  let fixture: ComponentFixture<ConditionsGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionsGeneralesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionsGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
