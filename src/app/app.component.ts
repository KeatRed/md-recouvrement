import { Component, AfterViewInit, HostListener, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StickyFooterComponent } from "./shared/sticky-footer/sticky-footer.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';

import { MissionsComponent } from "./pages/missions/missions.component";
import { ModalFormulaireComponent } from './pages/missions/modal-formulaire/modal-formulaire.component';
import { TextesLegauxComponent } from "./pages/textes-legaux/textes-legaux.component";
import { ContactComponent } from "./pages/contact/contact.component";
@Component({
  selector: 'app-root',
  imports: [ModalFormulaireComponent, CommonModule, NgForOf, RouterModule, StickyFooterComponent, AccueilComponent, MissionsComponent, TextesLegauxComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  navbarLinks = [
    { label: 'Notre cabinet', target: 'accueil' },
    { label: 'Nos missions', target: 'missions' },
    { label: 'Les textes légaux', target: 'textes-legaux' },
    { label: 'Contact', target: 'contact' }
  ];

  activeIndex: number = 0;

  @ViewChildren('navLink') navLinks!: QueryList<ElementRef<HTMLAnchorElement>>;
  @ViewChild('pill') pillRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    setTimeout(() => this.movePill(this.activeIndex));
  }
  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveLinkOnScroll();
  }
  updateActiveLinkOnScroll(): void {
    const scrollY = window.scrollY;
    const navbar = document.querySelector('header.navbar');
    const navbarHeight = navbar?.clientHeight || 0;
  
    let closestIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;
  
    this.navbarLinks.forEach((link, i) => {
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
  
  @HostListener('window:resize')
  onResize(): void {
    this.movePill(this.activeIndex); // ✅ Réajuste la taille/position
  }

  activateLink(event: Event, index: number): void {
    event.preventDefault();
  
    // Scroll fluide vers la section
    this.scrollToSection(this.navbarLinks[index].target);
  
    // Retarder le movePill pour éviter les glitchs visuels
    setTimeout(() => {
      this.activeIndex = index;
      this.movePill(index);
    }, 300); // délai ajustable selon la vitesse du scroll
  }
  

  movePill(index: number): void {
    const link = this.navLinks.toArray()[index].nativeElement;
    const pill = this.pillRef.nativeElement;

    const offsetLeft = link.offsetLeft;
    const offsetWidth = link.offsetWidth;

    pill.style.transform = `translateX(${offsetLeft}px)`;
    pill.style.width = `${offsetWidth}px`;
  }

  scrollToSection(sectionId: string): void { 
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector('header.navbar'); // ou app-navbar si tu utilises un component
    const navbarHeight = navbar?.clientHeight || 0;
  
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight -20; // scroll avec un padding de la hauteur de la navbar 
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
  

  selectedMission: any = null;

  modalTop: string = '50vh'; // valeur par défaut

  openForm(mission: any): void {
    this.selectedMission = mission;
  
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const positionY = scrollY + viewportHeight / 2;
  
    this.modalTop = `${positionY}px`;
  
    document.body.style.overflow = 'hidden';
  }
closeForm() {
  this.selectedMission = null;
  document.body.style.overflow = '';
}

}
