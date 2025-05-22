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
      description: 'Gestion efficace de vos créances. Nous transformons rapidement vos impayés en liquidités pour optimiser votre trésorerie.',
sections: [
  {
    title: 'Une approche amiable avant tout',
    content: `
      <p>
        Le cabinet <strong>MDrecouvrement</strong> agit généralement avant que des actions contentieuses ne soient engagées,
        en privilégiant toujours le terrain <strong>amiable</strong> pour vous aider à récupérer rapidement vos créances.
      </p>

      <p>
        Nous mettons systématiquement l'accent sur la <strong>médiation</strong> et la <strong>négociation</strong> avec les débiteurs
        et cherchons à trouver des solutions amiables, car nous considérons avant tout que le débiteur relancé est un client de votre entreprise.
      </p>

      <p>
        Notre équipe de professionnels expérimentés et hautement qualifiés est à l'écoute de vos besoins
        et adopte des <strong>stratégies efficaces</strong> pour récupérer vos impayés.
        Nous mettons en place des <strong>techniques de communication adaptées</strong> pour relancer vos clients :
      </p>

      <ul>
        <li>Négociation de délais de paiement</li>
        <li>Mise en place d’un échéancier</li>
      </ul>

      <p>
        <strong>Savoir échanger avec le débiteur</strong>, répondre à ses questions, proposer des solutions adaptées à sa situation :
        ce sont nos missions quotidiennes.
      </p>
    `
  },
  {
    title: 'Notre politique tarifaire transparente',
    content: `
      <p>
        Lorsque vous nous confiez votre dossier, le cabinet <strong>MDrecouvrement</strong> vous demandera des
        <strong>frais forfaitaires initiaux de 15€ HT</strong> afin de couvrir les frais fixes de base :
      </p>

      <ul>
        <li>1 appel téléphonique</li>
        <li>1 SMS</li>
        <li>1 email</li>
        <li>1 lettre simple</li>
        <li>1 lettre recommandée avec AR</li>
      </ul>

      <p><strong>Nos honoraires (hors frais de dossier) ne sont facturés qu’en cas de succès !</strong></p>

      <h4>Honoraires de recouvrement amiable :</h4>
      <ul>
        <li>10 % des sommes encaissées pour les créances de moins de 6 mois</li>
        <li>15 % des sommes encaissées pour les créances de plus de 6 mois</li>
      </ul>

      <p>
        Les honoraires sont déduits avant le reversement des montants récupérés. <br>
        <strong>Les fonds sont reversés sous 48h</strong> afin d’optimiser votre trésorerie.
      </p>

      <h4>Option : passage à l’adresse du débiteur</h4>
      <ul>
        <li>Forfait de <strong>50€ HT</strong> par passage</li>
        <li>Frais kilométriques pris en charge par le client (itinéraire fourni)</li>
      </ul>
    `
  }
],
      background: 'assets/facture.webp'
    },
    {
      title: 'RECOUVREMENT CONTENTIEUX DE VOS FACTURES',
      description: 'Procédures judiciaires pour garantir le paiement de vos créances. Action rapide et sécurisée.',
      sections: [
  {
    title: "Quand la voie amiable n’aboutit pas",
    content: `
      <p>Chez Cabinet MDrecouvrement, nous privilégions toujours la négociation et la résolution amiable. Toutefois, lorsqu’un débiteur reste sourd à nos démarches malgré nos relances, il devient nécessaire d’engager une procédure contentieuse pour faire valoir vos droits.</p>
    `
  },
  {
    title: "Dépôt de la requête en injonction de payer",
    content: `
      <p>Notre mission dans cette phase contentieuse est de :</p>
      <ul>
        <li>Constituer le dossier juridique complet nécessaire à la procédure.</li>
        <li>Déposer pour votre compte la requête d’injonction de payer auprès du tribunal compétent.</li>
        <li>Assurer le suivi de la procédure jusqu’à l’obtention d’un titre exécutoire, un document officiel qui permet d’engager les mesures de recouvrement forcé (saisie sur compte bancaire, saisie sur salaire, etc.).</li>
      </ul>
    `
  },
  {
    title: "Un accompagnement de A à Z",
    content: `
      <p>Vous restez informé à chaque étape de la procédure. Nous collaborons avec des commissaires de justice qui sont des professionnels réglementés et des acteurs légaux pour faire exécuter la décision de justice si le débiteur ne donne pas suite au titre exécutoire.</p>
    `
  },
  {
    title: "Notre politique tarifaire est transparente",
    content: `
      <p>Nos honoraires (hors frais de dossier) sont facturés uniquement en cas de succès !</p>
      <h4>Honoraires recouvrement contentieux :</h4>
      <ul>
        <li>Frais de dossier de 15€ HT (sauf si dossier ouvert initialement en amiable)</li>
        <li>Frais de gestion contentieux de 150€ HT (obtention du titre exécutoire, hors frais de greffe et de commissaire de justice)</li>
        <li>10 % des sommes encaissées pour les créances de moins de 6 mois</li>
        <li>15 % des sommes encaissées pour les créances de plus de 6 mois</li>
      </ul>
      <h4>Passage à l’adresse du débiteur (au choix du client) :</h4>
      <ul>
        <li>Forfait 50€ HT par passage</li>
        <li>Frais kilométriques pris en charge par le client avant le passage (itinéraire fourni par notre cabinet)</li>
      </ul>
      <p>Nos honoraires sont déduits avant le reversement des montants récupérés par le commissaire de justice.</p>
    `
  }
]
,
      background: 'assets/dossier.webp'
    },
    {
      title: 'FAIRE EXÉCUTER UNE DÉCISION PAR UN COMMISSAIRE DE JUSTICE',
      description: 'Remise officielle d’actes par un commissaire de justice. Procédures maîtrisées et rapides.',
      sections: [
  {
    title: "Comment ça marche ?",
    content: `
      <p>Vous avez obtenu une décision de justice (jugement, arrêt, ordonnance) et vous souhaitez contraindre celui qui a été condamné à satisfaire à ses obligations ? <br>Plusieurs procédures d’exécution l’obligent à s’exécuter.</p>
    `
  },
  {
    title: "Procédure",
    content: `
      <p>Seuls les commissaires de justice (anciennement nommés huissiers de justice) ont le monopole de la mise en œuvre des procédures civiles d’exécution, de leur mise en place et de leur bon déroulement. <br>Il peut s’agir par exemple d’une :</p>
      <ul>
        <li><strong>Saisie-attribution</strong> : les comptes bancaires que détient le débiteur ou toute somme d’argent lui revenant entre les mains de tiers sont saisies.</li>
        <li><strong>Saisie-vente</strong> : l’inventaire des biens mobiliers du débiteur est dressé afin de procéder à leur vente si nécessaire.</li>
        <li><strong>Saisie des rémunérations</strong> : une partie du salaire du débiteur est saisie.</li>
        <li><strong>Saisie des biens immobiliers</strong> : un bien immobilier appartenant au débiteur est saisi.</li>
        <li><strong>Saisie des véhicules terrestres à moteur</strong> : des véhicules comme une voiture ou une moto appartenant au débiteur sont saisis.</li>
        <li><strong>Saisie-appréhension et saisie-revendication</strong> : elles permettent au propriétaire d’un bien détenu par le débiteur d’en obtenir la restitution.</li>
      </ul>
    `
  }
]
,
      background: 'assets/justice.webp'
    },
    {
      title: 'NOS FORMATIONS',
      description: 'Maîtrisez le recouvrement amiable grâce à notre programme.',
      sections: [],
      background: 'assets/learning3.webp',
       soon: true 
    }
  ];

  selectedMission: any = null;
  @Output() demandeOuverture = new EventEmitter<any>();

  openForm(mission: any) {
    this.demandeOuverture.emit(mission);
  }
  
  
  

}
