import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-storefront',
  standalone: true,
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorefrontComponent {
  book = signal<any>({
    titleLine1: 'Pour un journalisme irrespectueux',
    titleLine2: 'Itinéraire de',
    titleLine3: 'Claude JULIEN',
    author: 'Christine Rigal',
    year: '2026',
    pages: '350 pages',
    subtitle: 'Le combat d\'une vie pour gueuler la vérité — récit d\'un parcours singulier.',
    ctaLabel: 'Commander le livre',
    ctaAnchor: '#commander',
  });
}
