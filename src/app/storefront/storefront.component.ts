import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-storefront',
  standalone: true,
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.scss',
  imports: [
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorefrontComponent {
  book = signal<any>({
    titleLine1: 'Pour un journalisme irrespectueux',
    titleLine2: 'Itinéraire de',
    titleLine3: 'Claude JULIEN',
    titleLine4: 'Ancien directeur du',
    titleLine4Italic: 'Monde diplomatique',
    author: 'Christine Rigal',
    year: '2026',
    pages: '350 pages',
    subtitle: 'Le combat d\'une vie pour \"gueuler la vérité\" —  (Blaise Pascal, Lettres à un provincial)',
    ctaLabel: 'COMMANDER',
    ctaAnchor: '#commander',
    // ctaAnchor: 'https://www.fnac.com/',
  });
}
