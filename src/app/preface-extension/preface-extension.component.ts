import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-preface-extension',
  standalone: true,
  templateUrl: './preface-extension.component.html',
  styleUrl: './preface-extension.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrefaceExtensionComponent {
  heading = signal<string>(`Présentation de l'auteure`);
  paragraphs = signal<string[]>([
    "         L'auteure, Christine Rigal, est la troisième des quatre enfants de Jacqueline et Claude Julien. Après un master en histoire, elle a fait quasiment toute sa carrière au sein de l'éducation nationale, au GRETA (GRoupement d’ETAblissements, formation continue des adultes), puis à la Validation des Acquis de l'Expérience (VAE) dans sa région du Sud-Ouest.\n" +
    "         À la retraite en 2019, elle a plongé dans les archives (familiales, nationales et internationales) afin de retracer le parcours exceptionnel de Claude Julien, fils du chef de la petite gare de Labruguière dans le Tarn.\n"
  ]);
}
