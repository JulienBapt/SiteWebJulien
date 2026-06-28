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
    { label: 'Présentation',   anchor: '#preface'  },
    { label: 'Exergues',  anchor: '#exergues' },
    { label: 'Galerie',    anchor: '#galerie'  },
    { label: 'Extraits', anchor: '#sommaire' },
    { label: 'Bibliographie', anchor: '#previous-work' },
  ]);
  menuOpen = signal<boolean>(false);
  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }
}
