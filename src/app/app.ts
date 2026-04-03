import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ExtractComponent} from './extract/extract.component';
import {FooterComponent} from './footer/footer.component';
import {GalleryComponent} from './gallery/gallery.component';
import {HeroComponent} from './hero/hero.component';
import {NavComponent} from './nav/nav.component';
import {PrefaceComponent} from './preface/preface.component';
import {ChaptersComponent} from './chapters/chapters.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, ExtractComponent, FooterComponent, GalleryComponent, HeroComponent, NavComponent, PrefaceComponent, ChaptersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('Claude Julien');
}
