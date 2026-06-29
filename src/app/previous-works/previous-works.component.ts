import {Component} from '@angular/core';

export type Decade = 'd1950' | 'd1960' | 'd1970' | 'd1990' | 'd2000';

export interface Work {
  title:          string;
  publisher:      string;
  year:           number;
  decade:         Decade;
  collaboration?: string;
  isTranslation?: boolean;
  translationOf?: string;
  translationBy?: string;
  award?:         string;
  awardUrl?:      string;
  edition?:       string;
}

export interface DecadeLegend {
  key:   Decade;
  label: string;
}

@Component({
  selector: 'app-previous-works',
  standalone: true,
  templateUrl: './previous-works.component.html',
  styleUrl:    './previous-works.component.scss',
})
export class PreviousWorksComponent {

  legends: DecadeLegend[] = [
    { key: 'd1950', label: 'Années 50' },
    { key: 'd1960', label: 'Années 60' },
    { key: 'd1970', label: 'Années 70' },
    { key: 'd1990', label: 'Années 90' },
    { key: 'd2000', label: 'Années 2000' },
  ];

  works: Work[] = [
    {
      title:     'Puissance et faiblesses des syndicats américains',
      publisher: 'Monographie du Monde',
      year:      1955,
      decade:    'd1950',
    },
    {
      title:         'L\'Amérique en révolution',
      publisher:     'Bibliothèque de l\'homme d\'action',
      year:          1956,
      decade:        'd1950',
      collaboration: 'Jacqueline Julien',
    },
    {
      title:     'Cuba ou la ferveur contagieuse',
      publisher: 'Monographie du Monde',
      year:      1960,
      decade:    'd1960',
    },
    {
      title:     'Le nouveau Nouveau Monde',
      publisher: 'Julliard',
      year:      1960,
      decade:    'd1960',
    },
    {
      title:         'Sermons noirs',
      publisher:     'Le club du livre chrétien',
      year:          1960,
      decade:        'd1960',
      isTranslation: true,
      translationOf: 'God\'s Trombones',
      translationBy: 'James Weldon Johnson',
    },
    {
      title:     'La Révolution cubaine',
      publisher: 'Julliard',
      year:      1961,
      decade:    'd1960',
    },
    {
      title:     'Le Canada, dernière chance de l\'Europe',
      publisher: 'Grasset',
      year:      1965,
      decade:    'd1960',
    },
    {
      title:     'L\'Empire américain',
      publisher: 'Grasset',
      year:      1968,
      decade:    'd1960',
      award:     'Prix Aujourd\'hui',
      awardUrl:  'https://fr.wikipedia.org/wiki/Prix_Aujourd%27hui',
    },
    {
      title:     'Le Suicide des démocraties',
      publisher: 'Grasset',
      year:      1972,
      decade:    'd1970',
    },
    {
      title:     'L\'Empire américain',
      publisher: 'Le Livre de Poche',
      year:      1973,
      decade:    'd1970',
      edition:   '2ᵉ édition revue et corrigée',
    },
    {
      title:     'Le Rêve et l\'Histoire, deux siècles d\'Amérique',
      publisher: 'Grasset',
      year:      1976,
      decade:    'd1970',
    },
    {
      title:     'Le devoir d\'irrespect',
      publisher: 'Moreau',
      year:      1979,
      decade:    'd1970',
    },
    {
      title:         '1959, Castro prend le pouvoir',
      publisher:     'Seuil — Les événements dans Le Monde',
      year:          1999,
      decade:        'd1990',
      collaboration: 'Marcel Niedergang (présentation)',
    },
    {
      title:     'Le devoir d\'irrespect',
      publisher: 'HB',
      year:      2007,
      decade:    'd2000',
      edition:   '2ᵉ édition augmentée',
    },
  ];
}
