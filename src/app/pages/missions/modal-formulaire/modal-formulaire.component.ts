import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-formulaire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-formulaire.component.html',
  styleUrls: ['./modal-formulaire.component.scss']
})
export class ModalFormulaireComponent {
  @Input() mission: any;


  @Output() closed = new EventEmitter<void>();
openSections: number[] = [];

toggle(index: number): void {
  if (this.openSections.includes(index)) {
    this.openSections = this.openSections.filter(i => i !== index);
  } else {
    this.openSections.push(index);
  }
}

isOpen(index: number): boolean {
  return this.openSections.includes(index);
}

  sendForm(event: Event): void {
    event.preventDefault();
    // TODO: Traitement du formulaire ici
    alert('Formulaire envoyé !');
    this.close();
  }

  close(): void {
    this.closed.emit();
  }
}
