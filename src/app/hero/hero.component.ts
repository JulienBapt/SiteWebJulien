import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  book = {
    titleLine1: 'Pour un journalisme irrespectueux',
    titleLine2: 'Itinéraire de',
    titleLine3: 'Claude JULIEN',
    author: 'Christine Rigal',
    year: '2026',
    pages: '350 pages',
    subtitle: 'Le combat d\'une vie pour gueuler la vérité — récit d\'un parcours singulier.',
    ctaLabel: 'Commander le livre',
    ctaAnchor: '#commander',
  };
}
