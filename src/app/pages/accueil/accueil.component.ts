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
