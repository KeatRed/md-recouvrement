import { Component, EventEmitter, Output } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss'
})
export class MissionsComponent {
  missions = [
    {
      title: 'RECOUVREMENT AMIABLE DE VOS FACTURES',
      description: 'Gestion efficace de vos créances. Nous transformons vos impayés en liquidités rapidement.',
      background: 'assets/facture.webp'
    },
    {
      title: 'FAIRE EXÉCUTER UNE DÉCISION DE JUSTICE',
      description: 'Application des décisions judiciaires par des officiers compétents. Résultats concrets garantis.',
      background: '/assets/justice.webp'
    },
    {
      title: 'SIGNIFICATION PAR COMMISSAIRE DE JUSTICE',
      description: 'Remise officielle d’actes par un commissaire de justice. Procédures maîtrisées et rapides.',
      background: 'assets/dossier.webp'
    }
  ];

  selectedMission: any = null;
  @Output() demandeOuverture = new EventEmitter<any>();

  openForm(mission: any) {
    this.demandeOuverture.emit(mission);
  }
  
  
  

}
