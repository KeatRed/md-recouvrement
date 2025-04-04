import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil.component').then(m => m.AccueilComponent),
  },
  {
    path: 'missions',
    loadComponent: () => import('./pages/missions/missions.component').then(m => m.MissionsComponent),
  },
  {
    path: 'formation',
    loadComponent: () => import('./pages/formation/formation.component').then(m => m.FormationComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'espace-client',
    loadComponent: () => import('./pages/espace-client/espace-client.component').then(m => m.EspaceClientComponent),
  },
  {
    path: 'espace-debiteur',
    loadComponent: () => import('./pages/espace-debiteur/espace-debiteur.component').then(m => m.EspaceDebiteurComponent),
  },
  {
    path: 'transmettez-vos-pieces',
    loadComponent: () => import('./pages/televersement/televersement.component').then(m => m.TeleversementComponent),
  },
  {
    path: 'paiement',
    loadComponent: () => import('./pages/paiement/paiement.component').then(m => m.PaiementComponent),
  },
  {
    path: 'extranet',
    loadComponent: () => import('./pages/extranet/extranet.component').then(m => m.ExtranetComponent),
  },
  {
    path: 'footer',
    loadComponent: () => import('./pages/footer/footer.component').then(m => m.FooterComponent),
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'accueil'
  }
];
