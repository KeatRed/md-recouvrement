import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInfoComponent } from "./modal-info/modal-info.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, ModalInfoComponent], 
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {


  modals = [
    {
      title: 'Vous êtes une entreprise',
      content: `
<section class="presentation-mdrecouvrement">
  <p>
    <strong>Le Cabinet MDrecouvrement</strong> accompagne les petites et moyennes entreprises dans la gestion de leurs impayés clients, en privilégiant une approche amiable, efficace et respectueuse.
    Nous intervenons principalement dans les départements du Val-d'Oise (95), de l’Oise (60) ainsi que sur la plateforme de Roissy (93/77), au cœur d’un tissu économique dynamique.
  </p>

  <p>Notre offre s’adresse aux :</p>
  <ul>
    <li>Entreprises du secteur des services</li>
    <li>Artisans</li>
    <li>Professions libérales</li>
    <li>Garages</li>
    <li>Établissements scolaires</li>
    <li>Bailleurs</li>
    <li>Etc...</li>
  </ul>

  <p><strong>Structures locales confrontées à des retards ou défauts de paiement.</strong></p>

  <h3>Ce qui nous distingue :</h3>
  <ul>
    <li><strong>Réactivité et efficacité :</strong> Une prise en charge immédiate des dossiers pour une résolution rapide.</li>
    <li><strong>Zéro risque financier :</strong> Un modèle de rémunération basé sur le succès, sans avance de frais pour vos clients.</li>
    <li><strong>Outils digitaux et transparence :</strong> Un suivi en temps réel des dossiers pour un contrôle total du recouvrement.</li>
  </ul>

  <p><a href="#en-savoir-plus">En savoir plus</a></p>

  <section id="en-savoir-plus">
    <p>
      L’objectif du Cabinet MDrecouvrement est d’accompagner les TPE, PME, garages, écoles privées, bailleurs, sous-traitants etc. de notre région dans la récupération de leurs impayés, grâce à une solution simple, efficace, rapide et professionnelle avec une démarche RSE :
    </p>

    <ul>
      <li>Développement durable avec le moins d’impressions possibles</li>
      <li>Politique de recrutement</li>
      <li>Démarche de relances respectueuses des débiteurs - sans détériorer la relation client</li>
      <li>Une gestion sur mesure adaptée à chaque secteur d'activité</li>
      <li>Une tarification transparente et sans engagement</li>
    </ul>

    <p>
      Le cabinet MDrecouvrement propose un service local, avec des frais de dossiers forfaitaires initiaux de <strong>15€</strong> afin de couvrir les frais fixes de base (un appel, un SMS, un mail, une lettre RAR et une lettre simple) puis une rémunération de nos services basée sur des tarifs uniquement au résultat.
    </p>

    <p>
      Nous proposons également la gestion ainsi que le suivi des dossiers en contentieux en cas d’échec de l’amiable à la demande du client et contre rémunération spécifique.
    </p>

    <h3>Notre politique tarifaire et nos atouts :</h3>

    <p><strong>Nos honoraires (hors frais de dossier) ne sont facturés qu’en cas de succès !</strong></p>

    <h4>Recouvrement amiable :</h4>
    <ul>
      <li>Frais de dossier de <strong>15€ HT</strong></li>
      <li><strong>Honoraires :</strong>
        <ul>
          <li>10 % des sommes encaissées pour les créances de moins de 6 mois</li>
          <li>15 % pour les créances de plus de 6 mois</li>
        </ul>
      </li>
    </ul>

    <h4>Recouvrement contentieux :</h4>
    <ul>
      <li>Frais de dossier de <strong>15€ HT</strong> (sauf si dossier ouvert initialement en amiable)</li>
      <li>Frais de gestion contentieux de <strong>150€ HT</strong> (obtention du titre exécutoire, hors frais de greffe et de commissaire de justice)</li>
      <li><strong>Honoraires :</strong>
        <ul>
          <li>10 % des sommes encaissées pour les créances de moins de 6 mois</li>
          <li>15 % des sommes encaissées pour les créances de plus de 6 mois</li>
        </ul>
      </li>
    </ul>

    <p><strong>Nos honoraires sont déduits avant le reversement des montants récupérés sur les créances et les fonds récupérés vous sont reversés sous 48h afin d’optimiser votre trésorerie.</strong></p>

    <h4>Passage à l’adresse du débiteur (au choix du client) :</h4>
    <ul>
      <li>Forfait <strong>50€ HT</strong> par passage</li>
      <li>Frais kilométriques pris en charge par le client</li>
    </ul>
  </section>
</section>

      `
    },
    {
      title: 'Nos Formations',
      content: `
<div class="modal-content">
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
</div>

      `
    }
  ];
  
  selectedModalIndex: number | null = null;
  
  openModal(index: number) {
    this.selectedModalIndex = index;
  }
  
  closeModal() {
    this.selectedModalIndex = null;
  }
  

}
