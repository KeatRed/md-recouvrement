import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conditions-generales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conditions-generales.component.html',
  styleUrls: ['./conditions-generales.component.scss']
})
export class ConditionsGeneralesComponent {
  @Output() close = new EventEmitter<void>();
}
