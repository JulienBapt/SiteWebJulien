import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  links = signal<{ label: string, anchor: string }[]>([
    { label: 'Préface',   anchor: '#preface'  },
    { label: 'Exergues',  anchor: '#exergues' },
    { label: 'Photos',    anchor: '#galerie'   },
    { label: 'Chapitres', anchor: '#sommaire'},
  ]);
  menuOpen = signal<boolean>(false);
  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }
}
