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
        <p>Le recouvrement de créances est une étape essentielle pour maintenir la santé financière des entreprises...</p>
        <ul>
          <li>Nous ne sommes pas des huissiers.</li>
          <li>Notre méthode repose sur la négociation et l'accompagnement.</li>
        </ul>
        <p>Notre rôle est complémentaire et stratégique.</p>
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
      <li><strong>Le recouvrement juridique :</strong> étapes et procédures du recouvrement judiciaire</li>
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
