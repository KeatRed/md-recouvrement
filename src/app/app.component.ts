import {
  Component,
  AfterViewInit,
  HostListener,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  OnInit
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { StickyFooterComponent } from "./shared/sticky-footer/sticky-footer.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MissionsComponent } from "./pages/missions/missions.component";
import { ModalFormulaireComponent } from './pages/missions/modal-formulaire/modal-formulaire.component';
import { TarifComponent } from './pages/tarif/tarif.component';
import { TextesLegauxComponent } from "./pages/textes-legaux/textes-legaux.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { SimulateurComponent } from './pages/simulateur/simulateur.component';

@Component({
  selector: 'app-root',
  imports: [
    ModalFormulaireComponent,
    CommonModule,
    NgForOf,
    RouterModule,
    StickyFooterComponent,
    AccueilComponent,
    MissionsComponent,
    TextesLegauxComponent,
    ContactComponent,
    TarifComponent,
    SimulateurComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  isMobile: boolean = false;
  isTarifModalOpen = false;
  activeIndex: number = 0;
  selectedMission: any = null;
  modalTop: string = '50vh';
  isSimulateurModalOpen = false;
  navbarLinks = [
    { label: 'Notre cabinet', target: 'accueil' },
    { label: 'Nos missions', target: 'missions' },
  { label: 'Nos tarifs', isModal: true, modal: 'tarif' },
  { label: 'Simulateur', isModal: true, modal: 'simulateur' },
    { label: 'Les textes légaux', target: 'textes-legaux' },
    { label: 'Contact', target: 'contact' }
  ];

  @ViewChildren('navLink') navLinks!: QueryList<ElementRef<HTMLAnchorElement>>;
  @ViewChild('pill') pillRef!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.movePill(this.activeIndex));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveLinkOnScroll();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.movePill(this.activeIndex);
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

handleNavClick(event: Event, link: any, index: number): void {
  event.preventDefault();

  if (link.isModal) {
    if (link.modal === 'tarif') this.isTarifModalOpen = true;
    if (link.modal === 'simulateur') this.isSimulateurModalOpen = true;
    return;
  }

  if (link.target) {
    this.scrollToSection(link.target);
    setTimeout(() => {
      this.activeIndex = index;
      this.movePill(index);
    }, 300);
  }
}




  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector('header.navbar');
    const navbarHeight = navbar?.clientHeight || 0;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  movePill(index: number): void {
    const link = this.navLinks.toArray()[index]?.nativeElement;
    if (!link) return;

    const pill = this.pillRef.nativeElement;
    pill.style.transform = `translateX(${link.offsetLeft}px)`;
    pill.style.width = `${link.offsetWidth}px`;
  }

updateActiveLinkOnScroll(): void {
  const scrollY = window.scrollY;
  const navbar = document.querySelector('header.navbar');
  const navbarHeight = navbar?.clientHeight || 0;

  let closestIndex = 0;
  let minDistance = Number.POSITIVE_INFINITY;

  this.navbarLinks.forEach((link, i) => {
    if (!link.target) return; // ✅ Ignorer les entrées sans target

    const section = document.getElementById(link.target);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      const distance = Math.abs(scrollY - top);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
  });

  if (this.activeIndex !== closestIndex) {
    this.activeIndex = closestIndex;
    this.movePill(this.activeIndex);
  }
}


  openForm(mission: any): void {
    this.selectedMission = mission;
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const positionY = scrollY + viewportHeight / 2;
    this.modalTop = `${positionY}px`;

    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  }

  closeForm(): void {
    this.selectedMission = null;
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  }

  openTarifModal(): void {
    this.isTarifModalOpen = true;
  }
  openSimulateurModal(): void {
  this.isSimulateurModalOpen = true;
}
}
