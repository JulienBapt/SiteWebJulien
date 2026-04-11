import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {interval} from 'rxjs';

export interface Extract {
  chapter: string;
  text: string;
  page: string;
}

@Component({
  selector: 'app-extract',
  standalone: true,
  templateUrl: './extract.component.html',
  styleUrl: './extract.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtractComponent implements OnInit {
  activeIndex = signal<number>(0);
  extracts = signal<Extract[]>([
    {
      chapter: 'Chapitre II - Jeunesse Etudiante Chrétienne',
      text: `« L’action militante au sein de la JEC et de l’ACJF a eu une influence déterminante sur mes choix et mes engagements d’adulte dans la société », Claude Julien, 2003.`,
      page: 'Page 22',
    },
    {
      chapter: 'Chapitre III - La dépêche Marocaine',
      text: `« Nous n'avons pas commencé par une lacheté [...] à la première grande occasion nous avons été fidèles », Claude Julien, 1950.`,
      page: 'Page 22',
    },
    {
      chapter: 'Chapitre IV - Le Monde',
      text: `« Ce qui est légal n’est pas forcément démocratique [...] le suffrage universel n’est pas une garantie de démocratie », Claude Julien, 1961.`,
      page: 'Page 91',
    },
    {
      chapter: 'Chapitre V - Le Monde diplomatique',
      text: `« Contribuer à l'active participation de ce que la république appelait naguère "des citoyens conscients et éclairés" », Claude Julien, 1990.`,
      page: 'Page 143',
    },
    {
      chapter: 'Chapitre VII - Engagement dans la Ligue',
      text: `« La citoyenneté n'est pas un concept, elle ne peut être qu'une pratique" », Claude Julien, 1990.`,
      page: 'Page 267',
    },
  ]);

  ngOnInit() {
    interval(5000).subscribe(() => {
        this.activeIndex.set(this.activeIndex() + 1);
        if (this.activeIndex() === this.extracts().length) {
          this.activeIndex.set(0);
        }
      });
  }

  setActive(index: number): void {
    this.activeIndex.set(index);
  }

  moveLeft(index: number): void {
    if (index === 0) {
      index = this.extracts().length;
    }
    this.activeIndex.set(index - 1);
  }

  moveRight(index: number): void {
    if (index === this.extracts().length - 1) {
      index = -1;
    }
    this.activeIndex.set(index + 1);
  }
}
