import { Component } from '@angular/core';

export interface Chapter {
  number: string;
  title: string;
  description: string;
  page: string;
}

@Component({
  selector: 'app-chapters',
  standalone: true,
  templateUrl: './chapters.component.html',
  styleUrl: './chapters.component.scss'
})
export class ChaptersComponent {
  chapters: Chapter[] = [
    {
      number: 'I',
      title: 'Origines',
      description: 'Comprendre Claude Julien nécessite de remonter le temps. Cerner ses origines, connaître les épreuves traversées dans l’enfance et l’adolescence, apporte un éclairage instructif sur l’homme, son caractère, ses ambitions, ses rejets.\n' +
        'Le 17 mai 1925 Claude Julien naît à Saint-Rome-de-Cernon (Aveyron), neuvième d’une famille qui comptera 11 enfants vivants. La naissance en Aveyron est le fruit du hasard, comme celles de ses frères et sœurs, nés au fil des mutations du père, employé à la Compagnie des chemins de fer du Midi depuis octobre 1905. \n' +
        'Ses parents, Henri et Léontine, sont issus des environs de Mazamet, ville du Tarn située au pied de la Montagne noire. Mazamet est une petite ville connue pour son industrie textile puis pour ses activités de mégisserie et de délainage. Les ascendants des deux familles sont pour la plupart métayers, cultivateurs, laboureurs, ménagers (ou ménagères), autant de termes pour désigner celui qui travaille la terre sans la posséder. Une vingtaine sont hommes de peine, au bas de l’échelle du monde rural : brassiers, journaliers ou encore travailleurs de la terre. La proximité de Mazamet permet à quelques-uns de travailler pour les usines textiles en étant tisserand, cardeur, fileuse ou encore travailleur de la laine, métiers qui se pratiquent alors à domicile, parfois en complément du travail de la terre. Cinq sortent cependant du lot en étant notaire, meunier, maçon ou régent d’école c’est-à-dire instituteur.',
      page: 'p. 12',
    },
    {
      number: 'II',
      title: 'Jeunesse étudiante chrétienne',
      description: ' L’action militante au sein de la JEC et de l’ACJF1 a eu une influence déterminante sur mes choix et mes engagements d’adulte dans la société. » Claude Julien, 2003.\n' +
        'Présentation de la JEC\n' +
        'Née en 1929, la JEC « se définit comme un mouvement d’apostolat, [...] comme un mouvement de jeunesse mettant spécialement l’accent sur la formation et l’éducation de ses membres, [...qui] entend œuvrer à la réussite de l’institution scolaire en suppléant à ses insuffisances, en complétant sa formation éducatrice. Ainsi, la JEC se présente comme une école spirituelle, mais également sociale et civique2. » Dans sa préface de JEC 15 ans d’histoire3, André Mandouze4 explique que « la JEC est faite pour qu’on en sorte, mais qu’on en sorte armé pour la vie avec des idées chrétiennes et non pas cléricales ; avec des réflexes humains et non point partisans, avec la fermeté et la hardiesse de quelqu’un qui s’est ouvert aux problèmes de tous les hommes, au lieu de s’être enfermé dans les projets d’une classe prête à haïr avant de comprendre. » \n',
      page: 'p. 48',
    },
    {
      number: 'IV',
      title: 'Le Monde',
      description: '« Ce qui est légal n’est pas forcément démocratique [...] le suffrage universel n’est pas une garantie de démocratie » Claude Julien, 1961.\n' +
        'Le rêve de Claude Julien est d’entrer au Monde. Soutenu par Georges Hourdin, très proche de Hubert Beuve-Méry directeur du quotidien du soir, Claude Julien obtient un rendez-vous avec ce dernier en mai ou juin 1951. Pour Hubert Beuve-Méry, ne pas avoir suivi la ligne politique attendue du général Juin est une marque d’indépendance appréciable : « Beuve [Hubert Beuve-Méry] m’a reçu dans son bureau. Il m’a demandé pourquoi je n’étais pas resté à Tanger car il trouvait que ce que j’y faisais était intéressant. J’avais sur moi la lettre que j’avais reçue de la résidence [...] je la lui ai montrée. Après l’avoir lue, il m’a regardé en me disant : "c’est de gens comme vous dont j’ai besoin". Moi, j’étais devant lui, admiratif devant l’homme, le Dieu qui avait créé et développé le journal que j’appréciais le plus. Et Beuve a ajouté : " écoutez, ce journal existe depuis sept ans, mais son existence est menacée à tout moment. Mais enfin, si vous voulez tenter l’aventure..."1 ». \n' +
        'Claude Julien fait partie de ces candidats dont Hubert Beuve-Méry a dit qu’ils étaient « des gens qui en voulaient. Il y avait une sélection à faire suivant leurs aptitudes, ça c’était une autre question, mais sur le fond du caractère on avait une sécurité à peu près complète2 ». On venait au Monde pour ce qu’il représentait, la place qu’il occupait. Les rédacteurs étaient liés « par l’envie diffuse et acharnée de faire un journal propre3 ».',
      page: 'p. 82',
    },
    {
      number: 'VI',
      title: 'Succession à la direction du Monde',
      description: 'Directeur du Monde depuis 1969, Jacques Fauvet1 doit quitter ses fonctions le 31 décembre 1979. Aucun successeur n\'ayant été sérieusement pressenti, Jacques Fauvet demande en juin 1978 à la Société des Rédacteurs2 (SDR) que son mandat soit prolongé de 3 ans afin de préparer sa succession. Ceci lui est accordé de justesse le 15 octobre 1978, puis confirmé le 31 mai 1979 par l\'Assemblée générale de la SARL3 Le Monde.\n' +
        'Commence alors l\'épisode "succession" à proprement parler, qui va durer jusqu\'à la désignation d\'André Laurens le 23 mars 1982.\n' +
        'Dix ans après qu\'Hubert Beuve-Méry a transmis tout naturellement le flambeau à Jacques Fauvet, son rédacteur en chef depuis 1963, la situation est assez floue pour que la SDR s\'empare de la question. Avec sa minorité de blocage au sein de la SARL, elle a le pouvoir de paralyser la désignation d\'un directeur qui ne lui conviendrait pas. Forte de cette position, elle « s\'attribue le droit de choisir son directeur4. »\n' +
        'Débute alors une « interminable course d\'obstacles5. »\n' +
        'Le 8 mai 1979 l\'assemblée générale de la SDR donne mandat à son conseil d\'administration de lui soumettre un projet de procédure pour désigner son candidat à la direction. Tous s\'accordent sur la nécessité de le trouver au sein de la rédaction afin de préserver l\'indépendance du journal.\n',
      page: 'p. 134',
    },
  ];

  activeChapter: number | null = null;

  toggle(index: number): void {
    this.activeChapter = this.activeChapter === index ? null : index;
  }
}
