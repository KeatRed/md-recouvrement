import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal-info',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnChanges {
  @Input() visible = false;
  @Input() title = '';
  @Input() content: string | null = null;
  @Output() close = new EventEmitter<void>();
  //showInfoModal = false;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      if (this.visible) {
        document.body.style.overflow = 'hidden'; // 🔒 empêche scroll
      } else {
        document.body.style.overflow = ''; // ✅ réactive scroll
      }
    }
  }


  onClose() {
    this.close.emit();
    document.body.style.overflow = ''; // sécurité en cas de fermeture
  }

  
}
