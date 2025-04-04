import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleversementComponent } from './televersement.component';

describe('TeleversementComponent', () => {
  let component: TeleversementComponent;
  let fixture: ComponentFixture<TeleversementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeleversementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleversementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
