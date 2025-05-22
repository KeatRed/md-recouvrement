import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionsLegalesComponent } from '../mentions-legales/mentions-legales.component';
import { ConditionsGeneralesComponent } from '../conditions-generales/conditions-generales.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MentionsLegalesComponent, ConditionsGeneralesComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  showMentions = false;
  showCGS = false;
}
