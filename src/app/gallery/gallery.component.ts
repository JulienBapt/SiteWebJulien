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
      caption: 'Claude et ses amis de la JEC',
      year: '1946',
    },
    {
      src: 'assets/images/1947_JEC_USA.jpg',
      alt: 'Claude devant une voiture au USA en 1947',
      caption: 'Claude au Etats-Unis',
      year: '1947',
    },
    {
      src: 'assets/images/1950_Couple_caleche.jpg',
      alt: 'Claude et sa femme devant une calèche en 1950',
      caption: 'Claude et sa femme',
      year: '1950',
    },
    {
      src: 'assets/images/1958_Cuba_Lanzmann_zoom.jpg',
      srcNotZoom: 'assets/images/1958_Cuba_Lanzmann.jpg',
      alt: 'Claude repas avec Lanzman à Cuba en 1958',
      caption: 'Claude et Lanzmann à Cuba',
      year: '1958',
    },
    {
      src: 'assets/images/1970_Conf_de_rédaction.jpg',
      alt: 'Claude conférence de rédaction',
      caption: 'Claude conférence rédaction',
      year: '1970',
    },
    {
      src: 'assets/images/1965_Service_etranger_zoom.jpg',
      srcNotZoom: 'assets/images/1965_Service_étranger.jpg',
      alt: 'Claude conférence service étranger en 1965',
      caption: 'Claude conférence service étranger',
      year: '1965',
    },
    {
      src: 'assets/images/1971_Chou_en_lai.jpg',
      alt: 'Claude avec Chou en lai en 1971',
      caption: 'Claude et Chou en Laï',
      year: '1971',
    },
    {
      src: 'assets/images/1972_Pham_Van_Dong_2.jpg',
      alt: 'Claude et Pham Van Dong dehors en 1972',
      caption: 'Claude et Pham Van Dong',
      year: '1972',
    },
    {
      src: 'assets/images/1978_Buguet_Mur_pierre_zoom.jpg',
      srcNotZoom: 'assets/images/1978_Buguet_Mur_pierre.jpg',
      alt: 'Claude au buguet haut construit un mur en pierre en 1978',
      caption: 'Claude au buguet',
      year: '1978',
    },
    {
      src: 'assets/images/1980_Au_Diplo_Scianna.jpg',
      alt: 'Claude au monde diplomatique en 1980',
      caption: 'Claude au monde diplomatique',
      year: '1980',
    },
    {
      src: 'assets/images/1980_Election_avec_Decornoy_Scianna.jpg',
      alt: 'Claude avec Decornoy en 1980',
      caption: 'Claude et Decornoy (©Scianna)',
      year: '1980',
    },
    {
      src: 'assets/images/1980_Election_Micro_Scianna.jpg',
      alt: 'Claude au micro pour une élection en 1980',
      caption: 'Claude election (©Scianna)',
      year: '1980',
    },
    {
      src: 'assets/images/1980_Imprimerie.jpg',
      alt: 'Claude à l\'imprimerie en 1980',
      caption: 'Claude à l\'imprimerie',
      year: '1980',
    },
    {
      src: 'assets/images/1995_Papa.jpg',
      alt: 'Claude en papa en 1995',
      caption: 'Claude Grand Père',
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
