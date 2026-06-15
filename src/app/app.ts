import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ExtractComponent} from './extract/extract.component';
import {FooterComponent} from './footer/footer.component';
import {GalleryComponent} from './gallery/gallery.component';
import {StorefrontComponent} from './storefront/storefront.component';
import {NavComponent} from './nav/nav.component';
import {PrefaceComponent} from './preface/preface.component';
import {ChaptersComponent} from './chapters/chapters.component';
import {PreviousWorksComponent} from './previous-works/previous-works.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NavComponent, ExtractComponent, FooterComponent, GalleryComponent, StorefrontComponent, NavComponent, PrefaceComponent, ChaptersComponent, PreviousWorksComponent, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "(window:scroll)": "onWindowScroll()",
  }
})
export class App {
  prefaceExtensionHeading = signal<string>("Présentation de l'auteure");
  windowScrolled = signal<boolean>(false);

  onWindowScroll(): void {
    const scrollY = window.scrollY;
    this.windowScrolled.set(scrollY > 300);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
