import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ExtractComponent} from './extract/extract.component';
import {FooterComponent} from './footer/footer.component';
import {GalleryComponent} from './gallery/gallery.component';
import {StorefrontComponent} from './storefront/storefront.component';
import {NavComponent} from './nav/nav.component';
import {PrefaceComponent} from './preface/preface.component';
import {ChaptersComponent} from './chapters/chapters.component';
import {PrefaceExtensionComponent} from './preface-extension/preface-extension.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, ExtractComponent, FooterComponent, GalleryComponent, StorefrontComponent, NavComponent, PrefaceComponent, PrefaceExtensionComponent, ChaptersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
}
