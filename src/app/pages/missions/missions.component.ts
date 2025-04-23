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
      title2: '',
      description2: '',
      title3: '',
      description3: '',
      title4: '',
      description4: '',
      background: 'assets/facture.webp'
    },
    {
      title: 'RECOUVREMENT CONTENTIEUX DE VOS FACTURES',
      description: 'Procédures judiciaires pour garantir le paiement de vos créances. Action rapide et sécurisée.',
      title2: '',
      description2: '',
      title3: '',
      description3: '',
      list : [ ],
      title4: '',
      description4: '',
      background: '/assets/dossier.webp'
    },
    {
      title: 'FAIRE EXÉCUTER UNE DÉCISION PAR COMMISSAIRE DE JUSTICE',
      description: 'Remise officielle d’actes par un commissaire de justice. Procédures maîtrisées et rapides.',
      title2: 'Comment ça marche ?',
      description2: 'Vous êtes titulaire d’une décision de justice (jugement, arrêt, ordonnance) et souhaitez contraindre celui qui a été condamné à satisfaire à ses obligations ? Sachez qu’il existe plusieurs procédures d’exécution afin de l’obliger à s’exécuter.',
      title3: 'Procédure',
      description3: 'Sachez qu’il existe plusieurs procédures d’exécution afin d’obliger la personne condamnée à s’exécuter. La mise en œuvre des procédures civiles d’exécution est le monopole de l’huissier de justice qui est garant de leur mise en place et de leur bon déroulement. En voici une liste non exhaustive :',
      list : [ 'la saisie-attribution, qui permet de saisir tous les comptes bancaires que détient le débiteur ou toute somme d’argent devant lui revenir entre les mains de tiers',
        'la saisie-vente, qui permet de dresser l’inventaire des biens mobiliers appartenant au débiteur pour procéder à leur vente le cas échéant',
        'la saisie des rémunérations, qui permet de saisir une partie du salaire du débiteur',
        'la saisie des biens immobiliers, qui permet de saisir un bien immobilier appartenant au débiteur',
        'la saisie des véhicules terrestres à moteur,  qui permet de saisir notamment la voiture, la moto etc… dont pourrait être propriétaire le débiteur.',
        'la saisie-appréhension et la saisie-revendication, qui donnent la possibilité au propriétaire d’un bien détenu par le débiteur d’en obtenir la restitution.'
      ],
      title4: 'Ma démarche en ligne',
      description4: '',
      background: 'assets/justice.webp'
    }
  ];

  selectedMission: any = null;
  @Output() demandeOuverture = new EventEmitter<any>();

  openForm(mission: any) {
    this.demandeOuverture.emit(mission);
  }
  
  
  

}
