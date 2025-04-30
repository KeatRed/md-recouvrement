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
      html: `<p>
    Procédures judiciaires pour garantir le paiement de vos créances. Action rapide et sécurisée.
  </p>

  <h3>Quand la voie amiable n’aboutit pas</h3>
  <p>
    Chez <strong>Cabinet MDrecouvrement</strong>, nous privilégions toujours la négociation et la résolution amiable. Toutefois, lorsqu’un débiteur reste sourd à nos démarches malgré nos relances, il devient nécessaire d’engager une procédure judiciaire pour faire valoir vos droits.
  </p>

  <h3>Dépôt de la requête en injonction de payer</h3>
  <p>Notre mission dans cette phase contentieuse est de :</p>
  <ul>
    <li>Constituer le dossier juridique complet nécessaire à la procédure.</li>
    <li>Déposer pour votre compte la requête d’injonction de payer auprès du tribunal compétent.</li>
    <li>Assurer le suivi de la procédure jusqu’à l’obtention d’un <strong>titre exécutoire</strong>, un document officiel qui permet d’engager les mesures de recouvrement forcé (saisie sur compte bancaire, saisie sur salaire, etc.).</li>
  </ul>

  <h3>Un accompagnement de A à Z</h3>
  <p>
    Vous restez informé à chaque étape. Nous collaborons avec des huissiers de justice et, si nécessaire, des avocats partenaires pour faire exécuter la décision de justice.
  </p>
  <p><strong>Nos honoraires (hors frais de dossier) ne sont facturés qu’en cas de succès !</strong></p>

  <h3>Tarifs</h3>

  <ul>
    <li><strong>Frais de dossier</strong> : 15€ HT <em>(sauf si le dossier a été ouvert initialement en amiable)</em></li>
    <li><strong>Frais de gestion contentieux</strong> : 150€ HT <em>(inclut l’obtention du titre exécutoire – hors frais de greffe et de commissaire de justice)</em></li>
  </ul>

  <h4>Honoraires sur encaissements :</h4>
  <ul>
    <li>10 % des sommes encaissées pour les créances de moins de 6 mois</li>
    <li>15 % des sommes encaissées pour les créances de plus de 6 mois</li>
  </ul>

  <p>
    Nos honoraires sont déduits avant le reversement des montants récupérés. <strong>Les fonds vous sont reversés sous 48h</strong> afin d’optimiser votre trésorerie.
  </p>

  <h4>Option : passage à l’adresse du débiteur</h4>
  <ul>
    <li><strong>Forfait</strong> : 50€ HT / passage</li>
    <li><strong>Frais kilométriques</strong> pris en charge par le client</li>
  </ul>

  <p><strong>Ma démarche en ligne</strong></p>`,
      background: 'assets/dossier.webp'
    },
    {
      title: 'FAIRE EXÉCUTER UNE DÉCISION PAR UN COMMISSAIRE DE JUSTICE',
      description: 'Remise officielle d’actes par un commissaire de justice. Procédures maîtrisées et rapides.',
      html: `<p>
    Remise officielle d’actes par un commissaire de justice. Procédures maîtrisées et rapides.
  </p>

  <h3>Comment ça marche ?</h3>
  <p>
    Vous êtes titulaire d’une décision de justice (jugement, arrêt, ordonnance) et souhaitez contraindre celui qui a été condamné à satisfaire à ses obligations ? 
    Sachez qu’il existe plusieurs procédures d’exécution afin de l’obliger à s’exécuter.
  </p>

  <h3>Procédure</h3>
  <p>
    La mise en œuvre des procédures civiles d’exécution est le monopole du commissaire de justice (anciennement huissier), garant de leur mise en place et de leur bon déroulement. En voici une liste non exhaustive :
  </p>

  <ul>
    <li><strong>Saisie-attribution</strong> : permet de saisir tous les comptes bancaires que détient le débiteur ou toute somme d’argent lui revenant entre les mains de tiers.</li>
    <li><strong>Saisie-vente</strong> : permet de dresser l’inventaire des biens mobiliers du débiteur afin de procéder à leur vente si nécessaire.</li>
    <li><strong>Saisie des rémunérations</strong> : permet de saisir une partie du salaire du débiteur.</li>
    <li><strong>Saisie des biens immobiliers</strong> : permet de saisir un bien immobilier appartenant au débiteur.</li>
    <li><strong>Saisie des véhicules terrestres à moteur</strong> : permet de saisir des véhicules comme une voiture ou une moto appartenant au débiteur.</li>
    <li><strong>Saisie-appréhension et saisie-revendication</strong> : permettent au propriétaire d’un bien détenu par le débiteur d’en obtenir la restitution.</li>
  </ul>

  <p><strong>Ma démarche en ligne</strong></p>`,
      background: 'assets/justice.webp'
    },
    {
      title: 'NOS FORMATIONS',
      description: 'Maîtrisez le recouvrement amiable grâce à notre programme.',
      html: `<div class="modal-content">
  <h1>MD Recouvrement - Programme Formation</h1>

  <section>
    <h2>Éléments de contexte</h2>
    <p>« Vendre c’est bien, encaisser c’est mieux ! ». Cette phrase résume à elle seule toute l’importance du métier de chargé de recouvrement. En effet, à quoi bon envoyer des factures si elles ne sont jamais payées à bonne date et si l’argent ne rentre jamais dans les caisses de l’entreprise ? Le Chargé de Recouvrement est donc une fonction essentielle qui doit être professionnalisée. Elle demande de réelles compétences pratiques, techniques et opérationnelles en Droit, en Finance et en Négociation.</p>
  </section>

  <section>
    <h2>Reconnaissance de la formation</h2>
    <p>La formation “les outils pour être un bon Chargé de Recouvrement” est une formation avec des contenus exclusivement métiers, centrés sur l’acquisition de savoir-faire opérationnels, directement applicables.</p>
    <p>Nous nous adressons à des candidats à la recherche de compétences professionnelles leur permettant de remplir des fonctions financières et commerciales dans leur entreprise d’accueil.</p>
  </section>

  <section>
    <h2>Programme de la formation</h2>

    <h3>Éléments de contexte</h3>
    <p>« Vendre c’est bien, encaisser c’est mieux ! ». Cette phrase résume à elle seule toute l’importance du métier de Chargé de Recouvrement...</p>
    <p>Face à ces constats, MD Recouvrement a mis en place une formation spécifique : <strong>« les outils pour être un bon chargé de recouvrement amiable »</strong></p>

    <ul>
      <li>Réaliser une relance téléphonique à partir d’une balance âgée</li>
      <li>Prioriser et planifier les tâches de relance</li>
      <li>Identifier la cause du retard du paiement</li>
      <li>Gérer un portefeuille de relance (profil payeur, huissier)</li>
      <li>Maîtriser les techniques de négociation de recouvrement</li>
      <li>Rédaction des documents de recouvrement amiable et précontentieux (confirmation-lettre)</li>
      <li>Les nouveaux modes de communication à disposition</li>
    </ul>
  </section>

  <section>
    <h2>Formations spécialisées en gestion des impayés</h2>
    <p>Vous faites face à des factures impayées mais vous vous sentez désemparé ? Nous proposons des formations couvrant :</p>

    <ul>
      <li><strong>L'anticipation des risques :</strong> identifier les signaux précurseurs d'impayés et mettre en place des stratégies</li>
      <li><strong>Les méthodes de relances amiables internes :</strong> techniques efficaces et cordiales</li>
      <li><strong>La préparation à l'externalisation :</strong> choisir le bon prestataire et collaborer efficacement</li>
    </ul>
  </section>

  <section>
    <h2>Pourquoi faire appel à MD Recouvrement ?</h2>
    <p>Notre cabinet propose des formations personnalisées de 1 à 3 jours, en présentiel ou à distance. Que vous souhaitiez vous former ou former vos équipes, nous vous accompagnons.</p>
  </section>

  <section>
    <h2>Module Gestionnaire de Recouvrement B to C</h2>
    <p><strong>Nombre de jours de formation :</strong> 2 jours</p>
    <p><strong>Tarif :</strong> 1 600€ HT</p>
  </section>
</div>`,
      background: 'assets/learning3.webp'
    }
  ];

  selectedMission: any = null;
  @Output() demandeOuverture = new EventEmitter<any>();

  openForm(mission: any) {
    this.demandeOuverture.emit(mission);
  }
  
  
  

}
