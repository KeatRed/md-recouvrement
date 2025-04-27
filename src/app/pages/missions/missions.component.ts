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
      html: `<p>Gestion efficace de vos créances. Nous transformons vos impayés en liquidités rapidement.</p>`,
      background: 'assets/facture.webp'
    },
    {
      title: 'RECOUVREMENT CONTENTIEUX DE VOS FACTURES',
      description: 'Procédures judiciaires pour garantir le paiement de vos créances. Action rapide et sécurisée.',
      html: `<p>Procédures judiciaires pour garantir le paiement de vos créances. Action rapide et sécurisée.
      Quand la voie amiable n’aboutit pas, nous passons à l’étape supérieure.
      Chez Cabinet MDrecouvrement, nous privilégions toujours la négociation et la résolution amiable. Toutefois, lorsqu’un débiteur reste sourd à nos démarches malgré nos relances, il devient nécessaire d’engager une procédure judiciaire pour faire valoir vos droits.
      Dépôt de la requête en injonction de payer
      Notre mission dans cette phase contentieuse est de :
      Constituer le dossier juridique complet nécessaire à la procédure.
      Déposer pour votre compte la requête d’injonction de payer auprès du tribunal compétent.
      Assurer le suivi de la procédure jusqu’à l’obtention d’un titre exécutoire, un document officiel qui permet d’engager les mesures de recouvrement forcé (saisie sur compte bancaire, saisie sur salaire, etc.).
      Un accompagnement de A à Z
      Vous restez informé à chaque étape. Nous collaborons avec des huissiers de justice et, si nécessaire, des avocats partenaires pour faire exécuter la décision de justice.
      Nos honoraires (hors frais de dossier) ne sont facturés qu’en cas de succès ! 
Recouvrement contentieux : 
Frais de dossier de 15€ HT (sauf si dossier ouvert initialement en amiable) 
Frais de gestion contentieux de 150€ HT (obtention du titre exécutoire, hors frais de greffe et de commissaire de justice) 
Honoraires : 
10 % des sommes encaissées pour les créances de moins de 6 mois 
15 % des sommes encaissées pour les créances de moins de 6 mois 
 
Nos honoraires sont déduits avant le reversement des montants récupérées sur les créances et les fonds récupérés vous sont reversés sous 48h afin d’optimiser leur trésorerie 
 
Passage à l’adresse du débiteur (au choix du client) : 
Forfait 50€ HT/passage  
Frais kilométriques pris en charge par le client 
      
      
      Ma démarche en ligne
      </p>`,
      background: 'assets/dossier.webp'
    },
    {
      title: 'FAIRE EXÉCUTER UNE DÉCISION PAR UN COMMISSAIRE DE JUSTICE',
      description: 'Remise officielle d’actes par un commissaire de justice. Procédures maîtrisées et rapides.',
      html: `<p>Remise officielle d’actes par un commissaire de justice. Procédures maîtrisées et rapides.
      Comment ça marche ?
      Vous êtes titulaire d’une décision de justice (jugement, arrêt, ordonnance) et souhaitez contraindre celui qui a été condamné à satisfaire à ses obligations ? Sachez qu’il existe plusieurs procédures d’exécution afin de l’obliger à s’exécuter.
      Procédure
      Sachez qu’il existe plusieurs procédures d’exécution afin d’obliger la personne condamnée à s’exécuter. La mise en œuvre des procédures civiles d’exécution est le monopole de l’huissier de justice qui est garant de leur mise en place et de leur bon déroulement. En voici une liste non exhaustive :
      la saisie-attribution, qui permet de saisir tous les comptes bancaires que détient le débiteur ou toute somme d’argent devant lui revenir entre les mains de tiers
        la saisie-vente, qui permet de dresser l’inventaire des biens mobiliers appartenant au débiteur pour procéder à leur vente le cas échéant
        la saisie des rémunérations, qui permet de saisir une partie du salaire du débiteur
        la saisie des biens immobiliers, qui permet de saisir un bien immobilier appartenant au débiteur
        la saisie des véhicules terrestres à moteur,  qui permet de saisir notamment la voiture, la moto etc… dont pourrait être propriétaire le débiteur.
        la saisie-appréhension et la saisie-revendication, qui donnent la possibilité au propriétaire d’un bien détenu par le débiteur d’en obtenir la restitution.
     Ma démarche en ligne</p>`,
      background: 'assets/justice.webp'
    }
  ];

  selectedMission: any = null;
  @Output() demandeOuverture = new EventEmitter<any>();

  openForm(mission: any) {
    this.demandeOuverture.emit(mission);
  }
  
  
  

}
