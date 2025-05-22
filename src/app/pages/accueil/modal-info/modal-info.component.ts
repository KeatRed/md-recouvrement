import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
  encapsulation: ViewEncapsulation.None // ✅ rend les styles visibles dans le modal
})
export class ModalInfoComponent implements OnInit, OnDestroy {
  @Input() visible = false;
  @Input() title!: string;
  @Input() content!: string;
  @Input() showForm: boolean = false;
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.visible) {
      document.documentElement.style.overflow = 'hidden';
    }
  }

  ngOnDestroy(): void {
    document.documentElement.style.overflow = '';
  }

  onClose(): void {
    this.close.emit();
  }
}
