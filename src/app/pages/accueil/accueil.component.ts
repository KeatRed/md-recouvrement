import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalInfoComponent } from "./modal-info/modal-info.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, ModalInfoComponent, FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  modals = [
    {
      title: 'Vous êtes une entreprise',
      type: 'entreprise'
    }
  ];

  selectedModalIndex: number | null = null;
  showForm = false;
  showPresentationActive = false; // ✅ utilisé pour déclencher la transition

  openModal(index: number) {
    this.selectedModalIndex = index;
    this.showForm = false;
    this.showPresentationActive = false;

    // ⚡ Déclenche la transition après que le DOM ait été rendu
    setTimeout(() => {
      this.showPresentationActive = true;
    }, 10);
  }

  closeModal() {
    this.selectedModalIndex = null;
    this.showForm = false;
    this.showPresentationActive = false;
  }

  creerDossier() {
    this.showForm = true;
    this.showPresentationActive = false; // on cache l'autre contenu au clic
  }

  validerFormulaire() {
    console.log('✅ Formulaire validé !');
  }
}
