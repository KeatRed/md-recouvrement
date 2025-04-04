import { Component } from '@angular/core';
import { NgForOf,NgIf } from '@angular/common';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [NgForOf,NgIf],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss'
})
export class MissionsComponent {
  missions = [
    {
      title: 'FACTURES IMPAYÉES',
      icon: 'fa fa-file-text-o',
      description: 'Gestion efficace de vos créances. Nous transformons vos impayés en liquidités rapidement.',
      background: 'assets/facture.jpg'
    },
    {
      title: 'FAIRE EXÉCUTER UNE DÉCISION DE JUSTICE',
      icon: 'fa fa-gavel',
      description: 'Application des décisions judiciaires par des officiers compétents. Résultats concrets garantis.',
      background: 'assets/justice.jpg'
    },
    {
      title: 'SIGNIFICATION PAR COMMISSAIRE DE JUSTICE',
      icon: 'fa fa-legal',
      description: 'Remise officielle d’actes par un commissaire de justice. Procédures maîtrisées et rapides.',
      background: 'assets/dossier.jpg'
    }
  ];

  selectedMission: any = null;

  openForm(item: any) {
    this.selectedMission = item;
    document.body.classList.add('modal-open');
  }
  
  closeForm() {
    this.selectedMission = null;
    document.body.classList.remove('modal-open');
  }
  

  sendForm(event: Event) {
    event.preventDefault();
    alert('Formulaire envoyé !');
    this.closeForm();
  }
}
