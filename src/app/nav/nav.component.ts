import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  links = [
    { label: 'Préface',   anchor: '#preface'  },
    { label: 'Extraits',  anchor: '#extraits' },
    { label: 'Photos',    anchor: '#photos'   },
    { label: 'Chapitres', anchor: '#chapters'},
  ];

  menuOpen = false;
  toggleMenu() { this.menuOpen = !this.menuOpen; }
}
