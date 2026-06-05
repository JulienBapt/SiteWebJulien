import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ExtractComponent} from './extract/extract.component';
import {FooterComponent} from './footer/footer.component';
import {GalleryComponent} from './gallery/gallery.component';
import {StorefrontComponent} from './storefront/storefront.component';
import {NavComponent} from './nav/nav.component';
import {PrefaceComponent} from './preface/preface.component';
import {ChaptersComponent} from './chapters/chapters.component';
import {PreviousWorksComponent} from './previous-works/previous-works.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, ExtractComponent, FooterComponent, GalleryComponent, StorefrontComponent, NavComponent, PrefaceComponent, ChaptersComponent, PreviousWorksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  prefaceExtensionHeading = signal<string>("Présentation de l'auteure");
  prefaceExtensionParagraphs = signal<string[]>([
    "         L’auteure, Christine Rigal, est la troisième des quatre enfants de Jacqueline et Claude Julien. Après une Maîtrise d’histoire, elle a consacré sa vie professionnelle à la formation pour les adultes au sein de l’Éducation nationale. Tout d’abord dans les dispositifs de formation personnalisée d’un GRETA (GRoupement d’ETAblissements), puis à la Validation des Acquis de l’Expérience (VAE) dans sa région du Sud-Ouest.\n" +
    "         À la retraite en 2019, elle a plongé dans les archives (familiales, nationales et internationales) afin de retracer le parcours exceptionnel de Claude Julien, fils du chef de la petite gare de Labruguière dans le Tarn.\n"
  ]);
}
