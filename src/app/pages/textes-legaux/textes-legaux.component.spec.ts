import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextesLegauxComponent } from './textes-legaux.component';

describe('TextesLegauxComponent', () => {
  let component: TextesLegauxComponent;
  let fixture: ComponentFixture<TextesLegauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextesLegauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextesLegauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
