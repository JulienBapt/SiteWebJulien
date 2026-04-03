import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  year: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  // Remplacez les src par vos vraies images, ex: 'assets/photos/enfance.jpg'
  photos: Photo[] = [
    {
      src: 'assets/photos/photo-1.jpg',
      alt: 'Portrait d\'enfance en 1978',
      caption: 'Enfance',
      year: '1978',
    },
    {
      src: 'assets/photos/photo-2.jpg',
      alt: 'Les années passées à Paris',
      caption: 'Les années Paris',
      year: '1995',
    },
    {
      src: 'assets/photos/photo-3.jpg',
      alt: 'Portrait actuel de l\'auteur',
      caption: 'Aujourd\'hui',
      year: '2024',
    },
    {
      src: 'assets/photos/photo-4.jpg',
      alt: 'En famille',
      caption: 'En famille',
      year: '2001',
    },
  ];

  lightboxOpen = false;
  lightboxIndex = 0;

  openLightbox(index: number): void {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
  }

  prevPhoto(): void {
    this.lightboxIndex = (this.lightboxIndex - 1 + this.photos.length) % this.photos.length;
  }

  nextPhoto(): void {
    this.lightboxIndex = (this.lightboxIndex + 1) % this.photos.length;
  }
}
