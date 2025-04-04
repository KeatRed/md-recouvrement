import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-textes-legaux',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './textes-legaux.component.html',
  styleUrl: './textes-legaux.component.scss'
})
export class TextesLegauxComponent {

  openedArticleIndex: number | null = null;

  toggleArticle(index: number): void {
    this.openedArticleIndex = this.openedArticleIndex === index ? null : index;
  }
  articles = [
    {
      title: 'Article R124-1',
      content: [
        "Les dispositions du présent chapitre s'appliquent aux personnes physiques ou morales qui, d'une manière habituelle ou occasionnelle, même à titre accessoire, procèdent au recouvrement amiable des créances pour le compte d'autrui, à l'exception de celles qui y procèdent au titre de leur statut professionnel ou dans le cadre de la réglementation de leur profession."
      ]
    },
    {
      title: 'Article R124-2',
      content: [
        "Les personnes mentionnées à l'article R. 124-1 justifient qu'elles ont souscrit un contrat d'assurance les garantissant contre les conséquences pécuniaires de la responsabilité civile professionnelle qu'elles peuvent encourir en raison de leur activité.",
"Elles justifient également être titulaires d'un compte dans l'un des établissements de crédit mentionnés à l'article L. 511-9 du code monétaire et financier ou l'une des institutions ou l'un des établissements de services mentionnés à l'article L. 518-1 du même code. Ce compte doit être exclusivement affecté à la réception des fonds encaissés pour le compte des créanciers.",
"La justification des conditions requises aux alinéas précédents est assurée par déclaration écrite des intéressés, remise ou adressée, avant tout exercice de l'activité, au procureur de la République près le tribunal de grande instance dans le ressort duquel ils ont le siège de leurs activités. A tout moment, le procureur de la République peut vérifier que les intéressés se conforment aux obligations prescrites par le présent article."
      ]
    },
    {
      title: 'Article R124-3',
      content: [
        "La personne chargée du recouvrement amiable ne peut procéder à celui-ci qu'après avoir conclu une convention écrite avec le créancier dans laquelle il lui est donné pouvoir de recevoir pour son compte.",
        "Cette convention précise notamment :",
        "1° Le fondement et le montant des sommes dues, avec l'indication distincte des différents éléments de la ou des créances à recouvrer sur le débiteur ;",
        "2° Les conditions et les modalités de la garantie donnée au créancier contre les conséquences pécuniaires de la responsabilité civile encourue en raison de l'activité de recouvrement des créances ;",
        "3° Les conditions de détermination de la rémunération à la charge du créancier ;",
        "4° Les conditions de reversement des fonds encaissés pour le compte du créancier."
      ]
    },
    {
      title: 'Article R124-4',
      content: [
        "La personne chargée du recouvrement amiable adresse au débiteur une lettre qui contient les mentions suivantes :",

        "1° Les nom ou dénomination sociale de la personne chargée du recouvrement amiable, son adresse ou son siège social, l'indication qu'elle exerce une activité de recouvrement amiable ;",
        
        "2° Les nom ou dénomination sociale du créancier, son adresse ou son siège social ;",
        
        "3° Le fondement et le montant de la somme due en principal, intérêts et autres accessoires, en distinguant les différents éléments de la dette, à l'exclusion des frais qui restent à la charge du créancier en application du troisième alinéa de l'article L. 111-8 ;",
        
        "4° L'indication d'avoir à payer la somme due et les modalités de paiement de la dette ;",
        
        "5° La reproduction des deuxième et troisième alinéas alinéas de l'article L. 111-8.",
        
        "Les références et date d'envoi de la lettre mentionnée au premier alinéa sont rappelées à l'occasion de toute autre démarche auprès du débiteur en vue du recouvrement amiable.",
      ]
    },
    {
      title: 'Article R124-5',
      content: [
        "La personne chargée du recouvrement informe le créancier qu'elle a obtenu un paiement même partiel de la part du débiteur, à moins que le paiement résulte de l'exécution d'un accord de versement échelonné déjà connu du créancier.",
"Sauf stipulation contraire, elle le tient également informé de toute proposition du débiteur tendant à s'acquitter de son obligation par un autre moyen que le paiement immédiat de la somme réclamée.",
      ]
    },
    {
      title: 'Article R124-6',
      content: [
        "Une quittance est remise au débiteur pour tout paiement.",
"Les fonds reçus par la personne chargée du recouvrement donnent lieu, sauf convention contraire, à un reversement dans un délai d'un mois à compter de leur encaissement effectif.",
      ]
    },
    {
      title: 'Article R124-7',
      content: [
        "Est puni de l'amende prévue par le 5° de l'article 131-13 du code pénal pour les contraventions de la cinquième classe le fait pour toute personne exerçant l'activité mentionnée à l'article R. 124-1 de :",

        "1° Ne pas se conformer aux obligations prévues à l'article R. 124-2 ;",
        
        "2° Omettre l'une des mentions prévues à l'article R. 124-4 dans la lettre adressée au débiteur.",
        
        "En cas de récidive, la peine d'amende prévue au même alinéa pour la récidive des contraventions de la cinquième classe est applicable.",
      ]
    }
  ];
}