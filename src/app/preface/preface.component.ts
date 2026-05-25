import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-preface',
  standalone: true,
  templateUrl: './preface.component.html',
  styleUrl: './preface.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrefaceComponent {
  heading = signal<string>(`Présentation du livre`);
  paragraphs = signal<string[]>([
    "         Ce livre retrace l’itinéraire humain, intellectuel et professionnel d’un journaliste qui a marqué son époque par son regard sur l’impérialisme américain, les désastres de la mondialisation, la désinformation, la place du citoyen, l’indépendance du journaliste face aux pouvoirs, etc.\n" +
    "         À travers ses reportages, ses analyses, sa critique des médias, Claude Julien a incarné une pensée libre qui pourrait éclairer notre temps tellement elle résonne aujourd’hui.\n" +
    "         Il a été pendant 20 ans au service étranger du Monde, puis directeur du Monde diplomatique de 1973 à 1990 dont il a grandement élargi l'audience en s’adressant aux citoyens.\n" +
    "         Il a notamment publié L'Empire américain (Grasset, 1968, Prix Aujourd'hui), Le Suicide des démocraties (Grasset, 1972), Le Rêve et l'Histoire - Deux siècles d'Amérique (Grasset, 1976), Le devoir d'irrespect (Moreau, 1979) dont est extrait cette définition du journalisme qu’il a tenté d’incarner : « celui qui tente de penser et d'écrire n'a d'autre choix que de révéler ce que tout pouvoir s'efforce de cacher, d'exposer en pleine lumière ce que tout pouvoir veut présenter sous l'éclairage le plus favorable, de mettre le doigt sur les contradictions et les impostures, d'attirer les regards sur ce qu'il peut être difficile de percevoir, d'écouter ceux qui ont peu de moyens de se faire entendre, de traduire ce qu'ils disent parfois si bien alors que nul ne les écoute. » \n"
  ]);
}
