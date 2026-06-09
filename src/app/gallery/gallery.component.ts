import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Photo {
  src: string;
  srcNotZoom?: string;
  alt: string;
  caption: string;
  year: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  photos = signal<Photo[]>([
    {
      src: 'assets/images/1946_JEC_Photo_Cluzel.jpg',
      alt: 'Claude et ses amis sur une fontaine en 1946',
      caption: 'Claude Julien et ses amis de la JEC à Lyon',
      year: '1946',
    },
    {
      src: 'assets/images/1947_JEC_USA.jpg',
      alt: 'Claude devant une voiture au USA en 1947',
      caption: 'Claude Julien aux États-Unis avec Martin McLaughlin, responsable des YCS',
      year: '1947',
    },
    {
      src: 'assets/images/1950_Couple_caleche.jpg',
      alt: 'Claude et sa femme devant une calèche en 1950',
      caption: 'Claude Julien et sa femme Jacqueline à Genève',
      year: 'Juin 1949',
    },
    {
      src: 'assets/images/1958_Cuba_Lanzmann_zoom.jpg',
      srcNotZoom: 'assets/images/1958_Cuba_Lanzmann.jpg',
      alt: 'Claude Julien repas avec Lanzman à Cuba en 1958',
      caption: 'Claude Julien et Jacques Lanzmann à Cuba',
      year: '1958',
    },
    {
      src: 'assets/images/1970_Conf_de_rédaction.jpg',
      alt: 'Claude conférence de rédaction',
      caption: 'Claude Julien à une conférence rédaction',
      year: '1970',
    },
    {
      src: 'assets/images/1965_Service_etranger_zoom.jpg',
      srcNotZoom: 'assets/images/1965_Service_étranger.jpg',
      alt: 'Claude conférence service étranger en 1965',
      caption: 'Claude Julien au service Étranger',
      year: '1960',
    },
    {
      src: 'assets/images/1971_Chou_en_lai.jpg',
      alt: 'Claude avec Chou en lai en 1971',
      caption: 'Claude Julien et Chou en Laï, premier ministre chinois',
      year: '1971',
    },
    {
      src: 'assets/images/1972_Pham_Van_Dong_2.jpg',
      alt: 'Claude et Pham Van Dong dehors en 1972',
      caption: 'Claude Julien et Pham Van Dong, premier ministre du Vietnam du Nord',
      year: '1972',
    },
    {
      src: 'assets/images/1978_Buguet_Mur_pierre_zoom.jpg',
      srcNotZoom: 'assets/images/1978_Buguet_Mur_pierre.jpg',
      alt: 'Claude au Buguet-Haut construit un mur en pierre en 1978',
      caption: 'Claude Julien construit un mur en pierres sèches au Buguet-Haut',
      year: '1978',
    },
    {
      src: 'assets/images/1980_Au_Diplo_Scianna.jpg',
      alt: 'Claude au Monde diplomatique en 1980',
      caption: 'Claude Julien au Monde diplomatique',
      year: '1980',
    },
    {
      src: 'assets/images/1980_Election_avec_Decornoy_Scianna.jpg',
      alt: 'Claude avec Decornoy en 1980',
      caption: 'Claude Julien et Jacques Decornoy (©Scianna)',
      year: '1980',
    },
    {
      src: 'assets/images/1980_Election_Micro_Scianna.jpg',
      alt: 'Claude à une réunion pour la succession au Monde',
      caption: 'Claude Julien à une réunion pour la succession au Monde (©Scianna)',
      year: '1980',
    },
    {
      src: 'assets/images/1980_Imprimerie.jpg',
      alt: 'Claude à l\'imprimerie en 1980',
      caption: 'Claude Julien à l\'imprimerie du Monde',
      year: '1980',
    },
    {
      src: 'assets/images/1995_Papa.jpg',
      alt: 'Claude en papa en 1995',
      caption: 'Claude Julien grand-père',
      year: '1995',
    },
  ]);

  lightboxOpen = signal<boolean>(false);
  lightboxIndex = signal<number>(0);

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
  }

  prevPhoto(): void {
    this.lightboxIndex.set((this.lightboxIndex() - 1 + this.photos().length) % this.photos().length);
  }

  nextPhoto(): void {
    this.lightboxIndex.set((this.lightboxIndex() + 1) % this.photos().length);
  }
}
