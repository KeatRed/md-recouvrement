import { Component, AfterViewInit, HostListener, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./pages/footer/footer.component";
import { StickyFooterComponent } from "./shared/sticky-footer/sticky-footer.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { NgForOf } from '@angular/common';
import { MissionsComponent } from "./pages/missions/missions.component";
import { TextesLegauxComponent } from "./pages/textes-legaux/textes-legaux.component";
@Component({
  selector: 'app-root',
  imports: [NgForOf, RouterModule, FooterComponent, StickyFooterComponent, AccueilComponent, MissionsComponent, TextesLegauxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  navbarLinks = [
    { label: 'Notre étude', target: 'accueil' },
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

  @HostListener('window:resize')
  onResize(): void {
    this.movePill(this.activeIndex); // ✅ Réajuste la taille/position
  }

  activateLink(event: Event, index: number): void {
    event.preventDefault();
    this.activeIndex = index;
    this.movePill(index);
    this.scrollToSection(this.navbarLinks[index].target);
  }

  movePill(index: number): void {
    const link = this.navLinks.toArray()[index].nativeElement;
    const pill = this.pillRef.nativeElement;

    const offsetLeft = link.offsetLeft;
    const offsetWidth = link.offsetWidth;

    pill.style.transform = `translateX(${offsetLeft}px)`;
    pill.style.width = `${offsetWidth}px`;
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) event.preventDefault();

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
