import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sticky-footer',
  standalone: true,
  templateUrl: './sticky-footer.component.html',
  styleUrl: './sticky-footer.component.scss'
})
export class StickyFooterComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  
  ngAfterViewInit() {
    const footer = document.querySelector('app-footer');
    if (footer) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          const stickyFooter = document.querySelector('app-sticky-footer');
          if (stickyFooter) {
            if (entry.isIntersecting) {
              stickyFooter.classList.add('above-footer');
            } else {
              stickyFooter.classList.remove('above-footer');
            }
          }
        },
        {
          threshold: 0,
          rootMargin: '60px 0px 0px 0px' // Ajustez selon la hauteur de votre sticky footer
        }
      );
      
      this.observer.observe(footer);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}