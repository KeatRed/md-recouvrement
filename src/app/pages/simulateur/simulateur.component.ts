import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ importer FormsModule

@Component({
  selector: 'app-simulateur',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // ✅ déclaration obligatoire pour utiliser ngModel
  ],
  templateUrl: './simulateur.component.html',
  styleUrls: ['./simulateur.component.scss']
})
export class SimulateurComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

montant: number = 0;
anciennete: string = '0-6';
nbDossiers: number = 1;
nbFactures: number = 1;
montantNet: number | null = null;


closeModal(): void {
  this.montant = 0;
  this.anciennete = '0-6';
  this.nbDossiers = 1;
  this.nbFactures = 1;
  this.montantNet = null;
  this.close.emit();
}

calculerSimulation(event: Event): void {
  event.preventDefault();

  const valid =
    this.montant > 0 &&
    this.nbDossiers > 0 &&
    this.nbFactures > 0;

  if (!valid) {
    this.montantNet = null;
    return;
  }

  const taux = this.anciennete === '0-6' ? 0.10 : 0.15;
  const montantNetUnitaire = this.montant * (1 - taux);
  this.montantNet = montantNetUnitaire * this.nbDossiers * this.nbFactures;
}
}
