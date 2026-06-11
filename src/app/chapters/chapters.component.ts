import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

export interface Chapter {
  number: string;
  title: string;
  titleItalic?: string;
  description: string;
  page: string;
}

@Component({
  selector: 'app-chapters',
  standalone: true,
  templateUrl: './chapters.component.html',
  styleUrl: './chapters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChaptersComponent {
  activeChapter = signal<number | null>(0);
  chapters = signal<Chapter[]>([
    {
      number: '1868-1942',
      title: 'Origines',
      description: 'Hélas pour Claude Julien, Léontine ne peut assurer ses frais scolaires pour qu’il aille au lycée. Il obtient le Certificat d’Études primaires élémentaires en juin 1937 avec la mention bien. Le manque de moyens financiers fait qu’il est orienté vers la filière EPS (Enseignement Primaire Supérieur) dont la fonction est « d’acheminer les élèves vers les professions auxquelles les prédestine le milieu natal, c’est-à-dire les emplois subalternes et moyens de l’industrie, du commerce et de l’administration.  » Cet événement est un élément fondateur de la personnalité de Claude Julien qui, tout en ayant une conscience aigüe que sa mère ne peut faire autrement, vit cette impossibilité de poursuivre des études générales comme une injustice. Injustice d’autant plus grande qu’il a bien repéré que ses camarades mieux lotis n’ont pas de goût particulier pour les études, et probablement moins de talent que lui… Iniquité sociale qui le marque de façon définitive, et participe vraisemblablement à ses choix futurs.\n' +
        'En juin 1940, Claude Julien obtient le brevet d’études primaires supérieures et cherche du travail : « Il y avait beaucoup de gens qui, voyant la situation difficile dans laquelle se trouvait notre famille, essayaient de nous aider. C’était ce que l’on appelle des “catholiques sociaux”. L’un d’eux m’a permis de gagner un peu d’argent en me trouvant tout d’abord un petit boulot. Par la suite, monsieur Bénard, l’homme qui m’avait trouvé cet emploi, m’a fait entrer comme aide-comptable à la droguerie Arnaud Nègre à Castres. C’était au tout début de la guerre, en 1940. J’avais alors quinze ans et je travaillais dans une cage vitrée qui donnait à l’arrière sur l’Agout.  » Ayant appris « à falsifier une comptabilité  », Claude Julien, obligé de suivre les directives de son patron, doit établir une double comptabilité. Ceci génèrera plus tard chez lui une répulsion viscérale pour les comptes mal tenus ou une gestion approximative.\n' 
      page: 'p. 9',
    },
    {
      number: '1942-1949',
      title: 'Jeunesse étudiante chrétienne',
      description: ' L’action militante au sein de la JEC et de l’ACJF1 a eu une influence déterminante sur mes choix et mes engagements d’adulte dans la société. » Claude Julien, 2003.\n' +
        'Présentation de la JEC\n' +
        'Née en 1929, la JEC « se définit comme un mouvement d’apostolat, [...] comme un mouvement de jeunesse mettant spécialement l’accent sur la formation et l’éducation de ses membres, [...qui] entend œuvrer à la réussite de l’institution scolaire en suppléant à ses insuffisances, en complétant sa formation éducatrice. Ainsi, la JEC se présente comme une école spirituelle, mais également sociale et civique2. » Dans sa préface de JEC 15 ans d’histoire3, André Mandouze4 explique que « la JEC est faite pour qu’on en sorte, mais qu’on en sorte armé pour la vie avec des idées chrétiennes et non pas cléricales ; avec des réflexes humains et non point partisans, avec la fermeté et la hardiesse de quelqu’un qui s’est ouvert aux problèmes de tous les hommes, au lieu de s’être enfermé dans les projets d’une classe prête à haïr avant de comprendre. » \n',
      page: 'p. 48',
    },
    {
      number: '1951-1972',
      title: '',
      titleItalic: 'Le Monde',
      description: '« Ce qui est légal n’est pas forcément démocratique [...] le suffrage universel n’est pas une garantie de démocratie » Claude Julien, 1961.\n' +
        'Le rêve de Claude Julien est d’entrer au Monde. Soutenu par Georges Hourdin, très proche de Hubert Beuve-Méry directeur du quotidien du soir, Claude Julien obtient un rendez-vous avec ce dernier en mai ou juin 1951. Pour Hubert Beuve-Méry, ne pas avoir suivi la ligne politique attendue du général Juin est une marque d’indépendance appréciable : « Beuve [Hubert Beuve-Méry] m’a reçu dans son bureau. Il m’a demandé pourquoi je n’étais pas resté à Tanger car il trouvait que ce que j’y faisais était intéressant. J’avais sur moi la lettre que j’avais reçue de la résidence [...] je la lui ai montrée. Après l’avoir lue, il m’a regardé en me disant : "c’est de gens comme vous dont j’ai besoin". Moi, j’étais devant lui, admiratif devant l’homme, le Dieu qui avait créé et développé le journal que j’appréciais le plus. Et Beuve a ajouté : " écoutez, ce journal existe depuis sept ans, mais son existence est menacée à tout moment. Mais enfin, si vous voulez tenter l’aventure..."1 ». \n' +
        'Claude Julien fait partie de ces candidats dont Hubert Beuve-Méry a dit qu’ils étaient « des gens qui en voulaient. Il y avait une sélection à faire suivant leurs aptitudes, ça c’était une autre question, mais sur le fond du caractère on avait une sécurité à peu près complète2 ». On venait au Monde pour ce qu’il représentait, la place qu’il occupait. Les rédacteurs étaient liés « par l’envie diffuse et acharnée de faire un journal propre3 ».',
      page: 'p. 82',
    },
    {
      number: '1979-1982',
      title: 'Succession à la direction du ',
      titleItalic: 'Monde',
      description: 'Directeur du Monde depuis 1969, Jacques Fauvet1 doit quitter ses fonctions le 31 décembre 1979. Aucun successeur n\'ayant été sérieusement pressenti, Jacques Fauvet demande en juin 1978 à la Société des Rédacteurs2 (SDR) que son mandat soit prolongé de 3 ans afin de préparer sa succession. Ceci lui est accordé de justesse le 15 octobre 1978, puis confirmé le 31 mai 1979 par l\'Assemblée générale de la SARL3 Le Monde.\n' +
        'Commence alors l\'épisode "succession" à proprement parler, qui va durer jusqu\'à la désignation d\'André Laurens le 23 mars 1982.\n' +
        'Dix ans après qu\'Hubert Beuve-Méry a transmis tout naturellement le flambeau à Jacques Fauvet, son rédacteur en chef depuis 1963, la situation est assez floue pour que la SDR s\'empare de la question. Avec sa minorité de blocage au sein de la SARL, elle a le pouvoir de paralyser la désignation d\'un directeur qui ne lui conviendrait pas. Forte de cette position, elle « s\'attribue le droit de choisir son directeur4. »\n' +
        'Débute alors une « interminable course d\'obstacles5. »\n' +
        'Le 8 mai 1979 l\'assemblée générale de la SDR donne mandat à son conseil d\'administration de lui soumettre un projet de procédure pour désigner son candidat à la direction. Tous s\'accordent sur la nécessité de le trouver au sein de la rédaction afin de préserver l\'indépendance du journal.\n',
      page: 'p. 134',
    },
  ]);

  toggle(index: number): void {
    this.activeChapter.set(this.activeChapter() === index ? null : index);
  }
}
