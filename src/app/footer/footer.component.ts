import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

export interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  author = signal<string>('Chritine Rigal');
  year = signal<number>(new Date().getFullYear());

  links = signal<FooterLink[]>([
    { label: 'Préface',           href: '#preface'   },
    { label: 'Exergues',          href: '#exergues'  },
    { label: 'Galerie',           href: '#galerie' },
    { label: 'Chapitres',         href: '#sommaire' },
  ]);
}
