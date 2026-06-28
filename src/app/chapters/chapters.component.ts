import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {ViewportScroller} from '@angular/common';

export interface Chapter {
  id: number;
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
  private viewportScroller = inject(ViewportScroller);
  activeChapter = signal<number | null>(0);
  chapters = signal<Chapter[]>([
    {
      id: 0,
      number: '1868-1942',
      title: 'Origines',
      description: 'Hélas pour Claude Julien, Léontine ne peut assurer ses frais scolaires pour qu’il aille au lycée. Il obtient le Certificat d’Études primaires élémentaires en juin 1937 avec la mention bien. Le manque de moyens financiers fait qu’il est orienté vers la filière EPS (Enseignement Primaire Supérieur) dont la fonction est «\xa0d’acheminer les élèves vers les professions auxquelles les prédestine le milieu natal, c’est-à-dire les emplois subalternes et moyens de l’industrie, du commerce et de l’administration.\xa0» Cet événement est un élément fondateur de la personnalité de Claude Julien qui, tout en ayant une conscience aigüe que sa mère ne peut faire autrement, vit cette impossibilité de poursuivre des études générales comme une injustice. Injustice d’autant plus grande qu’il a bien repéré que ses camarades mieux lotis n’ont pas de goût particulier pour les études, et probablement moins de talent que lui… Iniquité sociale qui le marque de façon définitive, et participe vraisemblablement à ses choix futurs.\n' +
        'En juin 1940, Claude Julien obtient le brevet d’études primaires supérieures et cherche du travail. «\xa0Il y avait beaucoup de gens qui, voyant la situation difficile dans laquelle se trouvait notre famille, essayaient de nous aider. C’était ce que l’on appelle des “catholiques sociaux”. L’un d’eux m’a permis de gagner un peu d’argent en me trouvant tout d’abord un petit boulot. Par la suite, monsieur Bénard, l’homme qui m’avait trouvé cet emploi, m’a fait entrer comme aide-comptable à la droguerie Arnaud Nègre à Castres. C’était au tout début de la guerre, en 1940. J’avais alors quinze ans et je travaillais dans une cage vitrée qui donnait à l’arrière sur l’Agout.\xa0» Claude Julien, obligé de suivre les directives de son patron, apprend à établir une double comptabilité. Ceci générera plus tard chez lui une répulsion viscérale pour les comptes mal tenus ou une gestion approximative.\n',
      page: 'p. 14',
    },
    {
      id: 1,
      number: '1942-1949',
      title: 'Jeunesse étudiante chrétienne',
      description: 'Tout n’est cependant pas simple : «\xa0le jour que j’attendais depuis longtemps est arrivé. Nous sommes libérés des Allemands. Mais la liberté n’est encore pas complète. Il faut libérer les esprits. C’est le plus dur. […] Ce qui est à craindre, c’est, par réaction, un nazisme français. En tout cas, autour de moi, on emploie, sous l’étiquette “communisme” ou sans étiquette du tout, des procédés allemands…\xa0» Liesse, bien compréhensible de la foule, mais aussi égarements qui ne lui conviennent pas du tout. «\xa0Avec quelques jeunes camarades appartenant à divers mouvements d’Action Catholique, nous sentions bien qu’il fallait d’urgence prendre des mesures pour éviter tout débordement. […] Mes amis me confièrent donc le soin d’aller voir le commandant Dunoyer de Segonzac pour lui présenter notre requête. Je lui exposai nos observations et notre désir de faire respecter la “loi du maquis”. Il m’écouta avec une ostensible bienveillance, dans un silence qui ne pouvait que m’intimider davantage. Il me donna volontiers raison.\xa0» Dunoyer de Segonzac estime nécessaire d’informer la population et en confie la charge à Claude Julien. S’en suit un échange durant lequel le commandant du maquis balaie chaque objection du jeune jéciste :\n' +
        '•	Claude Julien ne sait pas faire un journal, il apprendra. \n' +
        '•	Il lui faut une autorisation, qu’il aille à Albi, voir Charles d’Aragon, qui occupe la préfecture. \n' +
        '•	Il n’existe aucun moyen de transport pour aller à Albi, voici à sa disposition une voiture du maquis et un chauffeur du maquis armé, car les routes ne sont pas encore sûres.\n' +
        '•	Il faut un local pour le journal, il n’y a pas de local disponible, mais il peut utiliser la salle de réunion du maquis. \n' +
        '•	Il faut un imprimeur, il n’y a pas d’imprimeur disponible, mais il peut utiliser l’imprimerie du maquis. \n' +
        '•	Il faut de l’argent. Ce n’est pas un problème : «\xa0Dunoyer de Segonzac m’invita à le suivre jusqu’à l’autre extrémité de la vaste pièce où nous nous trouvions. Il marchait à grands pas, en faisant toujours claquer sa badine sur ses guêtres de cavalier. Et là, de la pointe du pied droit, il souleva le couvercle d’un grand coffre en bois simplement posé sur le sol, sans la moindre surveillance. Je n’avais jamais vu autant d’argent : […] un bon mètre cube de liasses de billets de banque… Cette fortune provenait à la fois des fonds parachutés par Londres et du trésor de guerre confisqué aux Allemands…\xa0» Claude Julien est prié de remplir la sacoche qu’il a avec lui.\n' +
        'Ainsi commence l’aventure de Debout, «\xa0un éphémère petit journal quotidien\xa0».',
      page: 'p. 27',
    },
    {
      id: 2,
      number: '1950-1951',
      title: '',
      titleItalic: 'La Dépêche marocaine',
      description: 'Claude Julien accentue l’orientation internationale du journal avec une rubrique qui fera chaud aux cœurs des membres du conseil d’administration, une «\xa0Chronique internationale\xa0» construite sur un réseau de correspondants dans les capitales méditerranéennes. Véritable tour de force : Claude Julien a trouvé douze correspondants particuliers pour tenir ses lecteurs au courant de l’actualité méditerranéenne. Le mercredi, un supplément intitulé «\xa0La vie internationale\xa0», permet de publier des études d’actualité (les élections aux États-Unis, l’intervention de la Chine en Corée, son agriculture, la viabilité de l’État d’Israël…), souvent signées, ce qui n’est pas si courant dans ce journal, mais signées de noms très majoritairement inconnus… Tout comme ceux des «\xa0Chroniques internationales\xa0». Un auteur sort du lot, George Bidault, publié une fois par semaine durant deux mois. Quand on sait que l’homme, alors ministre des Affaires étrangères, donne en 1947 l’instruction au général Juin «\xa0de “destituer” le Sultan s’il refusait de signer les dahirs », on peut être surpris que Claude Julien ait fait appel à lui. Les nouvelles plus brèves concernant les pays arabes du pourtour méditerranéen ont leur place dans la rubrique «\xa0Méditerranée\xa0» et dans des revues de presse. Une dizaine de «\xa0portraits politiques\xa0» complètent régulièrement la page. Enfin apparaît début novembre une revue de presse dont le nom, donc la nature, va évoluer : «\xa0L’opinion mondiale devant …\xa0» qui se transforme le 29 novembre en une revue de presse centrée sur la presse égyptienne et parfois celle du Caire.\n' +
        'Il remplace la page culturelle hebdomadaire par trois pages réparties sur trois jours : «\xa0Sciences et spectacles\xa0» le mardi, «\xa0Variétés\xa0» le vendredi et «\xa0Lettres, arts, philosophie\xa0» le dimanche. Construites en piochant dans la production d’Extinfor, elles permettent aux Tangérois d’être au fait de l’actualité théâtrale, cinématographique à Paris, de s’ouvrir à la littérature et à la philosophie en lisant des plumes, telles que celle de Julien Benda, ou de Paul Guth. Pour compléter, quelques conseils de lecture, à peu près toutes les deux semaines, le plaisir de lire des contes et nouvelles par trois fois. Fin janvier, s’inspirant peut-être de la pratique observée lors de son court passage à La Vie catholique illustrée, Claude Julien publie en feuilleton quotidien un roman de Jean Rounault, Mon ami Vassia, ouvrage dont l’auteur explique l’histoire dans quatre articles publiés les jours précédents. Fait extrêmement rare, ces publications sont réservées à La Dépêche marocaine comme en atteste la mention «\xa0Copyright by Jean Rounault et La Dépêche marocaine\xa0». L’histoire ne dit pas comment Claude Julien a trouvé cette pépite. Retenons cette place accordée à la littérature, signe précurseur de ce qu’il mettra en place au Monde et au Monde diplomatique.',
      page: 'p. 69',
    },
    {
      id: 3,
      number: '1951-1972',
      title: '',
      titleItalic: 'Le Monde',
      description: 'Le voyage au Vietnam se réalise en mai 1972\xa0; moment qui ne pouvait pas être mieux choisi de l’avis de Claude Julien, car le conflit est entré dans une phase qui paraît décisive. Trois semaines en enfer, mais passionnantes, dont il tire une série de huit articles rédigés sur place, envoyés aussitôt au journal. […] \n' +
        'Durant ces trois semaines, Claude Julien alterne rencontres et sorties hors de Hanoï. Ainsi va-t-il dans des villages, des écoles, des hôpitaux en ruines, etc., et au port de Haiphong, où il subit une déferlante de bombes pendant une demi-heure. Il raconte : «\xa0C’est le calme, ce paysage du Delta qui n’est plus à décrire, ce ciel immense et très pâle, le vert somptueux des rizières sous le grand soleil, les frêles lignes plus sombres qui marquent les rideaux d’arbres, les nappes d’eau où pataugent des enfants. Ils lèvent les bras et poussent de grands cris pour saluer ce Blanc qui passe et qui, bien entendu, ne peut être que Russe. Les plus petits jouent sur le dos des buffles. Les plus grands pêchent à la ligne et au filet […] Les paillotes, les boutiques, tout est pauvre, mais parfaitement serein. Heureux de vivre, les paysans creusent des canaux, renforcent des digues\xa0». Puis, très brutalement, l’enfer : «\xa0À quelques centaines de mètres devant nous, s’ouvre un immense geyser. Le chauffeur, occupé à se faufiler au milieu des bicyclettes et des attelages, n’a rien vu, mais son compagnon le fait arrêter. Le bruit de la voiture avait couvert le vacarme au centre duquel nous nous trouvions. […] Nous redécouvrons alors la signification de ces minces bourrelets qui, où que ce soit, absolument dans tout le pays, bordent les routes. C’est le bord des abris individuels. Simples trous cylindriques creusés dans le sol avec cette protection sommaire, mais efficace. Nous assistons au bombardement et au combat aérien. Les Phantom et les F-105 ont piqué devant nous aux abords de Lai-Vu d’où a surgi le geyser, puis ils font un grand cercle pour bombarder derrière nous, du côté de Phu-Long, sur la route Hanoï — Haiphong. […] Ces deux points, me dit-on, sont distants de 5 ou 6 kilomètres, et nous sommes à peu près au milieu. Pour échapper aux radars, un Phantom vole très bas au-dessus d’une ligne d’arbres parallèle à la route, à 300 mètres de nous, mais il se heurte au feu des groupes d’auto-défense qui, avec leurs fusils et leurs mitrailleuses, l’obligent à reprendre de la hauteur. Le ciel, tout à l’heure si calme, est moucheté de blanc par les obus de D.C.A. Nous suivons des yeux les fusées Sam, au vol superbement intelligent comme une volonté tendue vers une idée qu’il ne faut pas laisser échapper, fonçant vers ces points brillants qui paraissent insaisissables, et soudain mon guide pousse un cri. Un appareil américain a été touché, happé par un de ces engins qui tiennent de l’oiseau de proie et du javelot. L’appareil s’enflamme, grande torche qui se met à tomber avec une incroyable lenteur […] À côté de lui s’ouvre le parachute du pilote. On entend des cris derrière les arbres et les paysans se mettent à courir sur les digues pour s’emparer de l’aviateur. […] D’où est-il sorti\xa0? Un petit garçon arrive vers nous, trempé et crotté […] Je ne comprends pas ce qu’il dit, mais sa lèvre inférieure tremble. Le bruit suffit à faire peur. Il ne comprend pas ce que je lui dis, mais il devine que je l’invite à partager mon abri individuel. Il ne veut pas être seul dans ce carrousel, mais les règles imposées aux guides sont d’une rigoureuse sévérité. Leurs hôtes sont sacrés. Ils répondent de leur sécurité, et ce pays tout occupé à se défendre veut d’abord protéger ses visiteurs. […] Mon guide empêche le petit garçon de me rejoindre et je revois le Premier ministre, M. Pham Van Dong, disant qu’il faut vite terminer cette guerre si l’on veut que le caractère humain de ceux qui la subissent ne soit pas à jamais durci par tout ce qu’un tel combat peut avoir d’impitoyable.\xa0»\n' +
        'Claude Julien ne l’écrit pas, mais il nous l’a raconté à son retour : lorsqu’il se réfugie dans un abri individuel au bord de la route, ses accompagnateurs obstruent ce dernier en s’allongeant dessus… nécessité de garder en vie le témoin étranger.',
      page: 'p. 121',
    },
    {
      id: 4,
      number: '1979-1982',
      title: 'Succession à la direction du',
      titleItalic: 'Monde',
      description: 'Clairement identifié comme de gauche, Claude Julien dérange. Cela est d’autant plus visible depuis qu’il est rédacteur en chef du Monde diplomatique, mensuel auquel il a donné une orientation régulièrement qualifiée de tiers-mondiste. Comme déjà cité dans l’avant-propos, il formulera plus tard ce qu’il estime, de toujours, être son rôle qui est de s’engager «\xa0sous peine de se trahir… [il] n’a d’autre choix que de révéler ce que tout pouvoir s’efforce de cacher, d’exposer en pleine lumière ce que tout pouvoir veut présenter sous l’éclairage le plus favorable, de mettre le doigt sur les contradictions et impostures, d’attirer les regards sur ce qu’il peut être difficile de percevoir, d’écouter ceux qui ont peu de moyens de se faire entendre, de traduire tant bien que mal ce qu’ils disent parfois si bien, alors que nul ne les écoute.\xa0» \n' +
        '[…] \n' +
        'L’Express du 1-7 mars 1980 note que Claude Julien «\xa0s’exprime avec aisance, sans notes, ponctue chaque phrase d’un geste assuré de la main, aborde tous les problèmes qu’il semble dominer. Il affiche, lui, toutes les compétences d’un patron : la rigueur, le sérieux, la compétence, l’habileté même. D’une faiblesse, il fait un atout. Accusé d’avoir mauvais caractère, il le reconnaît : “mais, dit-il, si vous voulez un directeur sans caractère, alors ne venez pas me trouver”. Il ne cherche pas non plus à se disculper. On lui reproche d’avoir fait du Monde diplomatique un journal d’opinion. Il acquiesce et précise : “opinion, oui, mais sans s”. Julien, c’est d’abord la vieille école moralisatrice et donneuse de leçon. Celle qui, bien qu’elle ait fait le succès du Monde diplomatique, irrite tant. C’est aussi et surtout un homme de gauche. Mais d’une gauche que ses détracteurs qualifient d’archaïque et de doctrinaire. On craint surtout son intolérance.\xa0»',
      page: 'p. 137',
    },
   {
      id: 5,
      number: '1973-1990',
      title: '',
      titleItalic: 'Le Monde diplomatique',
      description: 'Le journaliste «\xa0évolue entre l’objectivité souvent glaciale de données minutieusement collationnées et la pulsion passionnelle que suscitent en lui le drame dont il est témoin, la catastrophe, la brutalité, la sottise triomphante, l’injustifiable espérance. Il s’efforce d’embrasser d’un même regard les ingrédients disparates qui, selon une recette inconnue, composent les soubresauts de l’actualité. Il sait ne pas y parvenir. Alors, leur ouvrant ses colonnes, il sollicite le concours de ceux qui sont réputés savoir. Ou, plus rarement, de ceux qui voient. Et voient différemment. » Ce qu’Arthur Rimbaud exprime dans Le bateau ivre en 1871 : «\xa0Et j’ai vu quelquefois ce que l’homme a cru voir\xa0!\xa0» \n' +
        '[…] \n' +
        'C’est pourquoi, à partir du mois de janvier 1977, dans une rubrique intitulée Le romancier et le politique, le journal ouvre ses colonnes à « l’artiste [qui] peut pallier les insuffisances du journaliste. Le talent du romancier restitue l’essentiel.\xa0» La rubrique est inaugurée avec une nouvelle de Julio Cortázar, La Deuxième fois, publication dont l’histoire mérite d’être racontée\xa0: «\xa0Une abominable junte militaire tenait alors depuis trois ans l’Argentine dans sa poigne de fer\xa0: arrestations au petit matin, interminables nuits de torture, assassinats en plein jour pour terroriser les opposants, et puis, alors inexpliquées, des “disparitions” de plus en plus nombreuses […] Le texte de Julio Cortázar était composé, corrigé, mis en page lorsque le courrier livra une lettre postée en Argentine et sans doute envoyée simultanément à bien d’autres journaux. Cette lettre, datée du 8 avril 1977, disait notamment\xa0: “Mon mari a été arrêté le 5 de ce mois au département de la police fédérale où il avait été convoqué pour une démarche concernant son passeport\xa0; au moment de retirer cette pièce, on l’appela dans un autre bureau\xa0; depuis, on ne sait plus rien de lui.” Cette lettre était signée par Mme Perez Esquivel [Adolfo Perez Esquivel, secrétaire général de Paix et Justice, fut enlevé le 5 avril 1977. Il reçut le prix Nobel de la Paix en 1980]. […] Dès que Julio Cortázar en eut ainsi pris connaissance, la plus vive stupéfaction, frisant l’incrédulité, se peignit sur son visage\xa0: il avait écrit La Deuxième Fois sans savoir que la junte argentine opérait ainsi pour faire “disparaître” les gêneurs… Quel sentiment avait pu le guider\xa0? L’intuition\xa0? Son talent d’écrivain lui avait révélé ce que l’information, avec tous les moyens techniques dont elle dispose, ne disait pas encore.\xa0» \n' +
        '[…] \n' +
        'En 1989, Le Monde se dote de nouvelles rotatives offset couleurs, une vraie «\xa0révolution\xa0». Au Diplo, le choix est fait d’introduire l’œuvre d’art, classique comme contemporaine. Le champ est vaste et la satisfaction des artistes à voir leurs œuvres accompagner les articles du Diplo ne fait aucun doute. Cela est très bien mis en valeur dans l’ouvrage paru pour les cinquante ans du Monde diplomatique. Voici par exemple ce qu’en dit Ernest Pignon-Ernest\xa0: «\xa0Dès que je reçois le Diplo, j’en feuillette toutes les pages, en quête, d’abord, des images. J’ai le sentiment qu’elles suggèrent comme un autre sommaire, transversal, inattendu, à la fois inscrit vraiment dans le journal, mais proposant aussi un autre plan, un autre temps. Car le lien, là, n’est pas dans l’illustratif, mais dans ce qu’il y a, plus profondément, en commun, entre les questions que posent au monde les articles du Diplo et les interrogations que ces œuvres contemporaines posent au regard, à la pensée, à la sensibilité, à l’imaginaire d’aujourd’hui.\xa0»',
      page: 'p. 183',
    },
    {
      id: 6,
      number: '1986-1990',
      title: 'Les cercles Condorcet',
      titleItalic: '',
      description: 'Un comité de pilotage se constitue, travaille sur le projet d’orientation du Cercle. Claude Julien rédige l’Acte constitutif, synthèse des travaux du comité de pilotage : «\xa0La seule démarche fructueuse consiste à rassembler dans le respect d’expériences et d’opinions diverses, tous ceux qui perçoivent la nécessité de porter un regard libre sur ce monde changeant et d’engager une réflexion commune sur ses évolutions probables, souhaitables, possibles…\xa0» afin de venir au secours de la démocratie. Il s’agit de proposer «\xa0des moyens de conduire ensemble cette conquête d’une pleine citoyenneté que d’aucuns voudraient restreindre pour la contrôler plus étroitement. » À cet Appel lancé par les membres du comité répondent en moins de deux mois cent fondateurs. Le Cercle de Paris peut naître avec Claude Julien à sa tête. \n' +
        '[…] \n' +
        'Parallèlement, des Cercles Condorcet naissent en province. Claude Julien et Michel Morineau arpentent le pays afin de soutenir les premiers pas d’un bon nombre d’entre eux. Chaque déplacement est l’occasion pour Claude Julien d’une conférence publique dont la presse locale fait généralement écho. Un thème fédère\xa0: la démocratie au travers des sujets tels que «\xa0Égalité des chances dans une société en mutation\xa0», «\xa0Démocratie et liberté\xa0», «\xa0Réinventer la République\xa0», «\xa0Réinventer la République dans un monde en mutation\xa0», «\xa0République d’experts ou de citoyens\xa0?\xa0», «\xa0La presse face aux nouveaux médias\xa0», «\xa0Les inégalités et la démocratie\xa0»…',
      page: 'p. 235',
    },
    {
      id: 7,
      number: '1990-1998',
      title: 'La Ligue de l’enseignement',
      titleItalic: '',
      description: 'Claude Julien a été élu président de la Ligue avec une demande précise de son prédécesseur : «\xa0Faire sortir la Ligue du pré carré de l’Éducation nationale [et] ouvrir la Ligue au monde.\xa0» Deux objectifs que Claude Julien embrasse avec enthousiasme, tout en respectant trois axes définis par les militants\xa0: l’intervention politique de la Ligue, le renforcement de son efficacité et la confirmation de la vitalité de leur réflexion. Le chantier est vaste… Il voit clairement l’impulsion qu’il souhaite donner à la Ligue\xa0: «\xa0à mon avis, on ne peut pas séparer le social de l’économique\xa0: on ne peut pas considérer les acteurs sociaux simplement comme des pompiers qui iraient éteindre les incendies allumés par un système économique qui crée des déséquilibres et des exclusions. Il faut donc ajouter à cette pratique sociale une réflexion sur les causes de l’exclusion, de l’échec scolaire, de l’illettrisme, de la délinquance juvénile, du non-accès de certains à la culture, aux loisirs. […] Il ne faut pas se contenter d’éteindre les incendies, il faut également faire en sorte, par une autre politique économique, qu’il n’y ait pas de foyers d’incendie aussi fréquemment allumés. […] Il faut essayer de suggérer des réponses politiques qui passeraient par l’État, les régions, les départements ou les municipalités. Je pense aussi que l’on peut, au besoin, dénoncer les pratiques de l’État ou du gouvernement qui vont parfois à contre-courant de ce que nous souhaitons ou qui portent l’action sur un autre terrain que celui qui nous paraît primordial. Autre chose\xa0: la Ligue a, depuis longtemps, un secteur international très important qui favorise des échanges. Toutes les déficiences, tous les problèmes de nos sociétés ont des causes qui sont à la fois nationales et mondiales\xa0; nous devons donc approfondir la connaissance que nous pouvons avoir des mécanismes mondiaux qui fabriquent des injustices, des exclusions, des inégalités.\xa0» \n' +
        '[…] \n' +
        '«\xa0Il nous aidait à voir loin, les pieds sur terre\xa0», témoignera Gilbert Auzias en décembre 2018.',
      page: 'p. 246',
    },
  ]);

  toggle(index: number): void {
    this.activeChapter.set(this.activeChapter() === index ? null : index);
    const anchor = "chapitre-" + index;
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(anchor, {behavior: "instant"});
    });
  }
}
