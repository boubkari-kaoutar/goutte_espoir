export type Article = {
  slug: string;
  color: string;
  image: string;
  fr: {
    tag: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: string;
    content: string;
  };
  ar: {
    tag: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: string;
    content: string;
  };
  video?: string;
};

export const blogArticles: Article[] = [
  {
    slug: 'choisir-puissance-installation-solaire',
    color: '#327700',
    image: '/images/blog/a1.png',
    fr: {
      tag: 'Guide pratique',
      title: 'Comment choisir la bonne puissance pour votre installation solaire ?',
      excerpt: 'Dimensionner correctement son système photovoltaïque est la clé d\'un retour sur investissement optimal.',
      date: '15 Jan 2026',
      readTime: '5',
      author: 'Équipe Goutte d\'Espoir',
      content: `
        <p class="lead-paragraph">Dimensionner correctement son système photovoltaïque est la clé d'un retour sur investissement optimal. Beaucoup de particuliers commettent l'erreur de sous-estimer ou surdimensionner leur installation, perdant ainsi en rentabilité. Voici les critères essentiels à prendre en compte.</p>

        <h2>1. Analyser votre consommation électrique</h2>
        <p>La première étape consiste à analyser vos factures d'électricité sur les 12 derniers mois. Relevez votre consommation annuelle en kWh. La moyenne marocaine pour un foyer est de 3 000 à 5 000 kWh/an, mais cela varie énormément selon votre équipement (climatisation, chauffe-eau, pompe à eau...).</p>

        <blockquote>
          "Un système solaire bien dimensionné devrait couvrir 70 à 90% de votre consommation annuelle."
          <cite>— Ingénieurs Goutte d'Espoir</cite>
        </blockquote>

        <h2>2. Évaluer votre ensoleillement local</h2>
        <p>Le Maroc bénéficie d'un ensoleillement exceptionnel : entre 2 500 et 3 500 heures de soleil par an selon les régions. Marrakech et Ouarzazate sont parmi les zones les plus ensoleillées, tandis que le Nord (Tanger, Tétouan) reçoit légèrement moins. Cette donnée influence directement la puissance nécessaire.</p>

        <h2>3. Calculer la puissance idéale</h2>
        <p>Une règle simple : pour chaque 1 000 kWh de consommation annuelle, comptez environ 1 kWc de puissance installée au Maroc. Donc pour une consommation de 4 000 kWh/an, un système de 4 kWc sera adapté. Mais cette estimation doit être affinée par une étude technique personnalisée.</p>

        <h2>4. Choisir entre réseau, hybride ou autonome</h2>
        <p>Trois configurations existent : le système <strong>connecté au réseau</strong> (le plus rentable en zone urbaine), le système <strong>hybride</strong> avec batterie (idéal pour les zones avec coupures fréquentes) et le système <strong>autonome</strong> (hors réseau, pour les zones rurales isolées).</p>

        <h2>5. Anticiper l'évolution de vos besoins</h2>
        <p>Pensez à long terme : une voiture électrique dans 5 ans ? Une piscine ? Un agrandissement de la maison ? Il est souvent judicieux de prévoir une légère surcapacité pour absorber ces évolutions sans investissement supplémentaire.</p>

        <p class="conclusion">Le dimensionnement est une science précise qui mérite une analyse sérieuse. Chez Goutte d'Espoir, nous réalisons une étude gratuite et personnalisée pour chaque client, en tenant compte de tous ces paramètres. Contactez-nous pour obtenir votre simulation sur mesure.</p>
      `,
    },
    ar: {
      tag: 'دليل عملي',
      title: 'كيف تختار القدرة المناسبة لتركيبك الشمسي؟',
      excerpt: 'تحديد حجم المنظومة الكهروضوئية هو مفتاح العائد الأمثل على الاستثمار.',
      date: '15 يناير 2026',
      readTime: '5',
      author: 'فريق قطرة أمل',
      content: `
        <p class="lead-paragraph">تحديد حجم منظومتك الكهروضوئية بشكل صحيح هو مفتاح العائد الأمثل على الاستثمار. يقع كثير من الأفراد في خطأ التقليل أو المبالغة في تصميم تركيبهم، مما يؤثر على الربحية. إليك المعايير الأساسية التي يجب مراعاتها.</p>

        <h2>١. تحليل استهلاكك من الكهرباء</h2>
        <p>الخطوة الأولى هي تحليل فواتير الكهرباء خلال الاثني عشر شهراً الماضية. سجّل استهلاكك السنوي بالكيلوواط ساعة. المعدل المغربي لأسرة عادية هو من 3000 إلى 5000 كيلوواط ساعة/سنة، لكنه يتفاوت كثيراً حسب المعدات (تكييف، سخان ماء، مضخة مياه...).</p>

        <blockquote>
          "يجب أن تغطي منظومة شمسية مُحسَّنة 70 إلى 90% من استهلاكك السنوي."
          <cite>— مهندسو قطرة أمل</cite>
        </blockquote>

        <h2>٢. تقييم الإشعاع الشمسي في منطقتك</h2>
        <p>يتمتع المغرب بإشعاع شمسي استثنائي: بين 2500 و3500 ساعة شمس سنوياً حسب المناطق. مراكش وورزازات من أكثر المناطق إشعاعاً، بينما الشمال يستقبل أقل قليلاً. هذه المعطيات تؤثر مباشرة على القدرة المطلوبة.</p>

        <h2>٣. حساب القدرة المثالية</h2>
        <p>قاعدة بسيطة: لكل 1000 كيلوواط ساعة من الاستهلاك السنوي، احسب حوالي 1 كيلوواط ذروة من القدرة المركّبة في المغرب. إذن لاستهلاك 4000 كيلوواط ساعة/سنة، منظومة 4 كيلوواط ذروة ستكون مناسبة.</p>

        <h2>٤. الاختيار بين الشبكة والهجين والمستقل</h2>
        <p>ثلاثة تكوينات موجودة: النظام <strong>المتصل بالشبكة</strong> (الأكثر ربحية في المناطق الحضرية)، النظام <strong>الهجين</strong> مع بطارية (مثالي للمناطق ذات انقطاعات متكررة) والنظام <strong>المستقل</strong> (خارج الشبكة، للمناطق القروية المعزولة).</p>

        <p class="conclusion">التحجيم علم دقيق يستحق تحليلاً جاداً. في قطرة أمل، نُجري دراسة مجانية وشخصية لكل عميل، مع مراعاة جميع هذه المعطيات. تواصل معنا للحصول على محاكاتك المخصصة.</p>
      `,
    },
  },
  {
    slug: 'energie-solaire-economies-eau',
    color: '#1c0b64',
    image: '/images/blog/a2.png',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-solar-panels-in-a-field-at-sunset-26466-large.mp4',
    fr: {
      tag: 'Environnement',
      title: "Énergie solaire et économies d'eau : le duo gagnant pour le Maroc",
      excerpt: "Au-delà de l'électricité, le solaire offre des solutions concrètes pour la gestion durable de l'eau.",
      date: '28 Jan 2026',
      readTime: '4',
      author: "Équipe Goutte d'Espoir",
      content: `
        <p class="lead-paragraph">Au-delà de la production d'électricité, l'énergie solaire offre des solutions concrètes pour la gestion durable de l'eau dans les zones rurales et agricoles marocaines. Le duo solaire-eau représente une révolution silencieuse pour des millions de Marocains.</p>

        <h2>Le défi de l'eau au Maroc</h2>
        <p>Le Maroc fait face à un stress hydrique croissant. Selon le ministère de l'Eau, la disponibilité en eau par habitant a chuté de 2 500 m³ en 1960 à moins de 700 m³ aujourd'hui. Le changement climatique accentue cette tendance avec des sécheresses plus fréquentes et plus sévères.</p>

        <h2>Le pompage solaire : l'eau là où il n'y a pas d'électricité</h2>
        <p>Dans les zones rurales non raccordées au réseau électrique, le pompage solaire permet d'extraire l'eau des puits et forages sans coût d'énergie. Un système de pompage solaire de 1 kWc peut soulever 20 à 40 m³ d'eau par jour — suffisant pour irriguer 1 à 2 hectares ou alimenter un village de 200 personnes en eau potable.</p>

        <blockquote>
          "Le pompage solaire a transformé notre village. Nous avons maintenant de l'eau toute l'année, et nos enfants n'ont plus à marcher 3 km pour en chercher."
          <cite>— Habitant d'un douar de la région de Souss-Massa</cite>
        </blockquote>

        <h2>L'irrigation solaire pour l'agriculture</h2>
        <p>L'agriculture représente 85% de la consommation d'eau au Maroc. Le passage à l'irrigation solaire permet non seulement de réduire les coûts d'exploitation, mais aussi d'optimiser l'utilisation de l'eau grâce à des systèmes de goutte-à-goutte alimentés par énergie solaire.</p>

        <h2>Le chauffe-eau solaire thermique</h2>
        <p>Un chauffe-eau solaire thermique ne produit pas d'électricité, mais convertit directement l'énergie solaire en chaleur pour l'eau sanitaire. Avec un rendement de 60 à 80%, il est beaucoup plus efficace que les panneaux photovoltaïques pour cet usage spécifique. Une famille de 4 personnes peut économiser 80% sur sa facture de chauffe-eau.</p>

        <p class="conclusion">La synergie entre énergie solaire et gestion de l'eau représente une opportunité exceptionnelle pour le développement durable du Maroc. Chez Goutte d'Espoir, nous proposons des solutions intégrées qui combinent production d'électricité, pompage solaire et chauffe-eau thermique pour maximiser l'impact de votre transition énergétique.</p>
      `,
    },
    ar: {
      tag: 'بيئة',
      title: "الطاقة الشمسية وتوفير المياه: ثنائي رابح للمغرب",
      excerpt: "يقدم الطاقة الشمسية حلولاً ملموسة لإدارة المياه المستدامة في المناطق القروية والزراعية.",
      date: '28 يناير 2026',
      readTime: '4',
      author: 'فريق قطرة أمل',
      content: `
        <p class="lead-paragraph">بعيداً عن إنتاج الكهرباء، تقدم الطاقة الشمسية حلولاً ملموسة لإدارة المياه المستدامة في المناطق القروية والزراعية المغربية. ثنائي الطاقة الشمسية والمياه يمثل ثورة صامتة لملايين المغاربة.</p>

        <h2>تحدي المياه في المغرب</h2>
        <p>يواجه المغرب إجهاداً مائياً متزايداً. وفقاً لوزارة الماء، انخفض توفر المياه للفرد من 2500 متر مكعب عام 1960 إلى أقل من 700 متر مكعب اليوم. يُفاقم تغير المناخ هذا الاتجاه مع جفاف أكثر تواتراً وشدة.</p>

        <h2>الضخ الشمسي: المياه حيث لا توجد كهرباء</h2>
        <p>في المناطق القروية غير المرتبطة بالشبكة الكهربائية، يتيح الضخ الشمسي استخراج المياه من الآبار والحفريات دون تكلفة طاقة. يمكن لنظام ضخ شمسي بقدرة 1 كيلوواط ذروة رفع 20 إلى 40 متراً مكعباً من الماء يومياً.</p>

        <blockquote>
          "غيّر الضخ الشمسي قريتنا. لدينا الآن ماء طوال العام، ولم يعد أطفالنا بحاجة للمشي 3 كيلومترات لإحضاره."
          <cite>— ساكن من دوار بجهة سوس ماسة</cite>
        </blockquote>

        <p class="conclusion">يمثل التآزر بين الطاقة الشمسية وإدارة المياه فرصة استثنائية للتنمية المستدامة في المغرب. في قطرة أمل، نقدم حلولاً متكاملة تجمع إنتاج الكهرباء والضخ الشمسي وسخانات المياه الحرارية لتعظيم أثر تحولك الطاقي.</p>
      `,
    },
  },
  {
    slug: 'aides-subventions-solaire-maroc-2026',
    color: '#16390d',
    image: '/images/blog/a3.png',
    fr: {
      tag: 'Financement',
      title: 'Aides et subventions disponibles pour le solaire au Maroc en 2026',
      excerpt: 'Le gouvernement marocain et plusieurs organismes proposent des aides pour faciliter la transition solaire.',
      date: '10 Fév 2026',
      readTime: '6',
      author: "Équipe Goutte d'Espoir",
      content: `
        <p class="lead-paragraph">Le gouvernement marocain et plusieurs organismes proposent des aides pour faciliter la transition vers l'énergie solaire. En 2026, plusieurs dispositifs sont disponibles pour réduire significativement le coût de votre installation photovoltaïque.</p>

        <h2>Le Programme National pour l'Efficacité Énergétique</h2>
        <p>L'AMEE (Agence Marocaine pour l'Efficacité Énergétique) pilote plusieurs programmes d'aide à la transition énergétique. Ces programmes ciblent notamment les ménages à revenus modestes, les coopératives agricoles et les collectivités territoriales.</p>

        <h2>Les crédits verts des banques marocaines</h2>
        <p>Plusieurs banques marocaines ont développé des produits de financement spécifiques pour l'énergie solaire : <strong>Attijariwafa Bank</strong> avec son crédit "Imtiaz Vert", <strong>CIH Bank</strong> avec le prêt "Éco-Habitat", et <strong>Banque Populaire</strong> avec son offre "Énergie Propre". Ces crédits proposent des taux préférentiels entre 4 et 6% sur des durées allant jusqu'à 10 ans.</p>

        <blockquote>
          "Avec le crédit vert de ma banque, j'ai financé mon installation à 100% et les économies sur ma facture remboursent intégralement les mensualités."
          <cite>— Client Goutte d'Espoir, Casablanca</cite>
        </blockquote>

        <h2>La TVA réduite sur les équipements solaires</h2>
        <p>Depuis 2016, les équipements solaires (panneaux, onduleurs, batteries) bénéficient d'une TVA réduite à 14% au lieu de 20% pour les équipements photovoltaïques destinés à un usage résidentiel. Cette réduction représente une économie directe de 5 à 8% sur le prix total de l'installation.</p>

        <h2>Les aides des collectivités locales</h2>
        <p>Certaines communes et régions ont mis en place leurs propres programmes d'aide. La Région de Souss-Massa, pionnière en la matière, subventionne jusqu'à 30% des installations solaires pour les agriculteurs. D'autres régions suivent progressivement.</p>

        <h2>Comment bénéficier de ces aides ?</h2>
        <p>Pour obtenir ces aides, il faut généralement : faire appel à un installateur certifié, fournir une étude technique validée, et soumettre un dossier complet aux organismes concernés. Chez Goutte d'Espoir, nous vous accompagnons dans toutes ces démarches administratives sans frais supplémentaires.</p>

        <p class="conclusion">Les aides disponibles peuvent réduire le coût de votre installation de 20 à 40%. En combinant crédit vert, TVA réduite et subventions régionales, une installation de 5 kWc initialement estimée à 55 000 DH peut revenir à moins de 40 000 DH. Contactez-nous pour un bilan complet des aides auxquelles vous avez droit.</p>
      `,
    },
    ar: {
      tag: 'تمويل',
      title: 'المساعدات والدعم المتاحة للطاقة الشمسية في المغرب 2026',
      excerpt: 'الحكومة المغربية وعدة هيئات تقدم مساعدات لتسهيل التحول نحو الطاقة الشمسية.',
      date: '10 فبراير 2026',
      readTime: '6',
      author: 'فريق قطرة أمل',
      content: `
        <p class="lead-paragraph">تقدم الحكومة المغربية وعدة هيئات مساعدات لتسهيل التحول نحو الطاقة الشمسية. في عام 2026، تتوفر عدة آليات لتخفيض تكلفة تركيبك الكهروضوئي بشكل كبير.</p>

        <h2>البرنامج الوطني للكفاءة الطاقية</h2>
        <p>تُشرف الوكالة المغربية للكفاءة الطاقية على عدة برامج دعم للتحول الطاقي. تستهدف هذه البرامج الأسر ذات الدخل المحدود والتعاونيات الزراعية والجماعات الترابية بشكل خاص.</p>

        <h2>القروض الخضراء للبنوك المغربية</h2>
        <p>طورت عدة بنوك مغربية منتجات تمويل خاصة بالطاقة الشمسية بأسعار تفضيلية تتراوح بين 4 و6% على مدد تصل إلى 10 سنوات.</p>

        <blockquote>
          "بفضل القرض الأخضر من بنكي، موّلت تركيبي بنسبة 100% والوفورات في فاتورتي تسدد الأقساط الشهرية بالكامل."
          <cite>— عميل قطرة أمل، الدار البيضاء</cite>
        </blockquote>

        <p class="conclusion">يمكن للمساعدات المتاحة تخفيض تكلفة تركيبك من 20 إلى 40%. تواصل معنا للحصول على جرد كامل للمساعدات التي يحق لك الاستفادة منها.</p>
      `,
    },
  },
  {
    slug: 'panneaux-monocristallins-vs-polycristallins',
    color: '#31b6e7',
    image: '/images/blog/a4.png',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-solar-panels-in-the-sun-26464-large.mp4',
    fr: {
      tag: 'Technologie',
      title: 'Panneaux monocristallins vs polycristallins : lequel choisir ?',
      excerpt: 'Comprendre les différences techniques entre ces deux technologies pour faire le bon choix.',
      date: '22 Fév 2026',
      readTime: '5',
      author: "Équipe Goutte d'Espoir",
      content: `
        <p class="lead-paragraph">Le choix entre panneaux monocristallins et polycristallins est l'une des premières questions que se posent les futurs propriétaires d'installation solaire. Ces deux technologies ont des caractéristiques distinctes qui influencent la performance, l'esthétique et le coût de votre système.</p>

        <h2>Les panneaux monocristallins</h2>
        <p>Fabriqués à partir d'un seul cristal de silicium de haute pureté, les panneaux monocristallins offrent le meilleur rendement du marché : entre 19 et 23%. Leur couleur noire uniforme les rend esthétiquement séduisants. Ils sont plus performants par temps nuageux et à haute température — un avantage non négligeable au Maroc.</p>

        <h2>Les panneaux polycristallins</h2>
        <p>Composés de multiples fragments de silicium fondus ensemble, les panneaux polycristallins ont un rendement légèrement inférieur (15-18%) mais un coût de production plus faible. Leur teinte bleue distinctive est reconnaissable entre mille. Pour une grande surface disponible, ils restent une option économique valable.</p>

        <blockquote>
          "Dans les conditions climatiques marocaines, avec une forte chaleur et un ensoleillement intense, les monocristallins offrent généralement un meilleur rendement énergétique sur la durée."
          <cite>— Ingénieurs Goutte d'Espoir</cite>
        </blockquote>

        <h2>Tableau comparatif</h2>
        <p><strong>Rendement :</strong> Mono 19-23% vs Poly 15-18%<br/>
        <strong>Prix :</strong> Mono légèrement plus cher (+10-15%)<br/>
        <strong>Performance chaleur :</strong> Mono supérieur<br/>
        <strong>Esthétique :</strong> Mono noir uniforme vs Poly bleu tacheté<br/>
        <strong>Durée de vie :</strong> Équivalente (25-30 ans)</p>

        <h2>Notre recommandation</h2>
        <p>Dans le contexte marocain, avec un fort ensoleillement mais aussi des températures élevées en été, nous recommandons généralement les <strong>panneaux monocristallins</strong>. L'écart de prix est rapidement compensé par le meilleur rendement, surtout si l'espace disponible est limité.</p>

        <p class="conclusion">Le choix final dépend de votre budget, de la surface disponible et de votre priorité entre performance et économies à court terme. Nos ingénieurs peuvent vous aider à simuler les deux scénarios pour votre situation spécifique. Contactez-nous pour une étude comparative gratuite.</p>
      `,
    },
    ar: {
      tag: 'تكنولوجيا',
      title: 'ألواح أحادية البلورة مقابل متعددة البلورة: أيهما تختار؟',
      excerpt: 'فهم الفروق التقنية بين هاتين التقنيتين لاتخاذ القرار الصحيح.',
      date: '22 فبراير 2026',
      readTime: '5',
      author: 'فريق قطرة أمل',
      content: `
        <p class="lead-paragraph">الاختيار بين الألواح أحادية البلورة ومتعددة البلورة هو أحد الأسئلة الأولى التي يطرحها أصحاب التركيبات الشمسية المستقبليون. لهاتين التقنيتين خصائص مميزة تؤثر على الأداء والجماليات وتكلفة نظامك.</p>

        <h2>الألواح أحادية البلورة</h2>
        <p>مصنوعة من بلورة سيليكون واحدة عالية النقاء، تقدم الألواح أحادية البلورة أفضل مردودية في السوق: بين 19 و23%. لونها الأسود الموحد يجعلها جذابة من الناحية الجمالية. أداؤها أفضل في الطقس الغائم وعند درجات الحرارة المرتفعة.</p>

        <h2>الألواح متعددة البلورة</h2>
        <p>مكونة من شظايا سيليكون متعددة مصهورة معاً، لديها مردودية أقل قليلاً (15-18%) لكن تكلفة إنتاج أخفض. للمساحات الكبيرة المتاحة، تبقى خياراً اقتصادياً صالحاً.</p>

        <blockquote>
          "في الظروف المناخية المغربية، مع الحرارة الشديدة والإشعاع الشمسي المكثف، توفر الألواح أحادية البلورة عموماً مردودية طاقية أفضل على المدى البعيد."
          <cite>— مهندسو قطرة أمل</cite>
        </blockquote>

        <p class="conclusion">يعتمد الاختيار النهائي على ميزانيتك والمساحة المتاحة. يمكن لمهندسينا مساعدتك في محاكاة كلا السيناريوهين لوضعك المحدد. تواصل معنا للحصول على دراسة مقارنة مجانية.</p>
      `,
    },
  },
  {
    slug: 'temoignage-cooperative-marrakech',
    color: '#327700',
    image: '/images/blog/a5.png',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-farmer-walking-in-a-green-field-with-a-tablet-41655-large.mp4',
    fr: {
      tag: 'Témoignage',
      title: "Comment une coopérative agricole a réduit ses coûts de 75% grâce au solaire",
      excerpt: "Retour d'expérience concret sur l'installation de 20 kWc pour une coopérative agricole près de Marrakech.",
      date: '5 Mar 2026',
      readTime: '7',
      author: "Équipe Goutte d'Espoir",
      content: `
        <p class="lead-paragraph">La coopérative agricole Al Baraka, située à 45 km de Marrakech, produisait des fruits rouges et des légumes biologiques. Mais chaque mois, les factures d'électricité dévoraient 18 000 DH de leur budget — soit plus du tiers de leurs charges d'exploitation. Voici leur parcours de transformation énergétique.</p>

        <h2>Le diagnostic initial</h2>
        <p>Quand la direction de la coopérative nous a contactés en mars 2024, ils faisaient face à un paradoxe douloureux : leurs serres fonctionnaient grâce au soleil, mais l'énergie pour les pompes d'irrigation, le stockage réfrigéré et les ateliers de transformation venait du réseau électrique — à un coût qui menaçait leur viabilité économique.</p>

        <h2>L'étude et le dimensionnement</h2>
        <p>Après une analyse complète de leurs factures et une visite technique approfondie, nos ingénieurs ont recommandé un système hybride de 20 kWc avec 40 kWh de stockage batterie. Ce dimensionnement permettait de couvrir 75% des besoins en journée (pompes, ateliers) et de stocker l'excédent pour alimenter le stockage réfrigéré la nuit.</p>

        <blockquote>
          "Avant, je regardais la facture d'électricité avec angoisse chaque mois. Maintenant, je la reçois même plus — elle est quasiment nulle."
          <cite>— Président de la coopérative Al Baraka</cite>
        </blockquote>

        <h2>L'installation et la mise en service</h2>
        <p>L'installation a été réalisée en 4 jours par notre équipe de 6 techniciens. 50 panneaux monocristallins de 400 Wc ont été posés sur les toitures des hangars, orientés plein sud avec une inclinaison de 28°. L'onduleur hybride de 20 kW a été installé dans le local technique avec les 8 batteries lithium-fer-phosphate.</p>

        <h2>Les résultats après 8 mois</h2>
        <p>Les chiffres parlent d'eux-mêmes : la facture mensuelle est passée de 18 000 DH à 4 500 DH, soit une économie de 13 500 DH par mois, ou 162 000 DH par an. Avec un investissement total de 185 000 DH (après crédit vert), le retour sur investissement sera atteint en moins de 14 mois.</p>

        <p class="conclusion">Cette transformation n'est pas un cas isolé. Chaque mois, nous accompagnons des coopératives, des PME et des particuliers dans leur transition vers l'autonomie énergétique. Le solaire n'est plus une option luxueuse — c'est une nécessité économique. Contactez-nous pour calculer vos économies potentielles.</p>
      `,
    },
    ar: {
      tag: 'شهادة',
      title: 'كيف خفّضت تعاونية زراعية تكاليفها 75% بالطاقة الشمسية',
      excerpt: 'تجربة ملموسة لتركيب 20 كيلوواط لتعاونية زراعية قرب مراكش.',
      date: '5 مارس 2026',
      readTime: '7',
      author: 'فريق قطرة أمل',
      content: `
        <p class="lead-paragraph">التعاونية الزراعية البركة، الواقعة على بُعد 45 كيلومتراً من مراكش، كانت تُنتج الفواكه الحمراء والخضروات العضوية. لكن كل شهر، كانت فواتير الكهرباء تلتهم 18,000 درهم من ميزانيتها. إليك مسيرة تحولهم الطاقي.</p>

        <h2>التشخيص الأولي</h2>
        <p>عندما تواصلت إدارة التعاونية معنا في مارس 2024، كانوا يواجهون مفارقة مؤلمة: بيوتهم المحمية تعمل بفضل الشمس، لكن الطاقة لمضخات الري والتخزين المبرد وورش التحويل كانت تأتي من الشبكة الكهربائية بتكلفة تهدد استمراريتهم الاقتصادية.</p>

        <blockquote>
          "كنت أنظر إلى فاتورة الكهرباء بقلق كل شهر. الآن لم أعد أستقبلها — تكاد تكون صفراً."
          <cite>— رئيس تعاونية البركة</cite>
        </blockquote>

        <h2>النتائج بعد 8 أشهر</h2>
        <p>الأرقام تتحدث عن نفسها: انتقلت الفاتورة الشهرية من 18,000 درهم إلى 4,500 درهم، أي توفير 13,500 درهم شهرياً، أو 162,000 درهم سنوياً. مع استثمار إجمالي قدره 185,000 درهم، سيتم استرداد الاستثمار في أقل من 14 شهراً.</p>

        <p class="conclusion">هذا التحول ليس حالة استثنائية. كل شهر نرافق تعاونيات ومقاولات وأفراداً في تحولهم نحو الاستقلالية الطاقية. الطاقة الشمسية لم تعد خياراً فاخراً — إنها ضرورة اقتصادية. تواصل معنا لحساب وفوراتك المحتملة.</p>
      `,
    },
  },
  {
    slug: 'entretien-installation-solaire',
    color: '#f97316',
    image: '/images/blog/a6.png',
    fr: {
      tag: 'Entretien',
      title: '5 gestes simples pour maintenir votre installation solaire en parfait état',
      excerpt: 'Un entretien régulier garantit la longévité et la performance de vos panneaux.',
      date: '18 Mar 2026',
      readTime: '3',
      author: "Équipe Goutte d'Espoir",
      content: `
        <p class="lead-paragraph">Un entretien régulier garantit la longévité et la performance de vos panneaux solaires. Sans maintenance, une installation peut perdre 15 à 25% de sa production en quelques années. Voici 5 gestes simples que tout propriétaire peut faire.</p>

        <h2>1. Nettoyer les panneaux régulièrement</h2>
        <p>La poussière, le sable et les fientes d'oiseaux réduisent le rendement des panneaux. Au Maroc, avec les vents de sable fréquents, un nettoyage trimestriel est recommandé. Utilisez de l'eau claire et un chiffon doux — jamais de produits abrasifs ni d'eau sous pression élevée qui pourrait endommager les cellules.</p>

        <h2>2. Vérifier l'absence d'ombrage</h2>
        <p>Un arbre qui a poussé, un nouvel immeuble à proximité... l'ombrage partiel peut réduire la production de 30 à 50%. Inspectez régulièrement les abords de votre installation et taillez les arbres si nécessaire. En cas de nouvel ombrage permanent, des optimiseurs de puissance peuvent être ajoutés.</p>

        <blockquote>
          "Un panneau recouvert à 10% de sa surface par une ombre peut perdre jusqu'à 50% de sa production si aucun bypass n'est installé. La maintenance préventive est donc cruciale."
          <cite>— Technicien Goutte d'Espoir</cite>
        </blockquote>

        <h2>3. Surveiller la production en temps réel</h2>
        <p>Tous nos onduleurs sont équipés d'un système de monitoring Wi-Fi. Vérifiez régulièrement les données via l'application : une baisse anormale de production peut signaler un problème à traiter rapidement. Comparez votre production actuelle avec les mêmes périodes des années précédentes.</p>

        <h2>4. Inspecter les connexions électriques</h2>
        <p>Une fois par an, faites inspecter les connexions DC et AC par un technicien qualifié. Les connecteurs mal serrés peuvent créer des arcs électriques et, dans le pire des cas, des incendies. Cette inspection doit être réalisée par un professionnel habilité.</p>

        <h2>5. Entretenir le système de batterie (si hybride)</h2>
        <p>Si vous avez un système hybride avec batterie lithium, vérifiez que la température ambiante du local technique reste entre 15 et 35°C. Les batteries au lithium sont sensibles aux températures extrêmes. Évitez également les décharges profondes répétées qui réduisent la durée de vie.</p>

        <p class="conclusion">Ces 5 gestes simples peuvent maintenir votre installation à 98% de son rendement optimal pendant 25 ans. Chez Goutte d'Espoir, nous proposons des contrats de maintenance annuelle qui incluent un nettoyage professionnel, une inspection complète et un rapport de performance. Contactez-nous pour un devis de maintenance.</p>
      `,
    },
    ar: {
      tag: 'صيانة',
      title: '5 خطوات بسيطة للحفاظ على تركيبك الشمسي في حالة مثالية',
      excerpt: 'الصيانة المنتظمة تضمن طول عمر وأداء ألواحك الشمسية.',
      date: '18 مارس 2026',
      readTime: '3',
      author: 'فريق قطرة أمل',
      content: `
        <p class="lead-paragraph">الصيانة المنتظمة تضمن طول عمر وأداء ألواحك الشمسية. بدون صيانة، يمكن أن تفقد المنظومة من 15 إلى 25% من إنتاجها خلال سنوات قليلة. إليك 5 خطوات بسيطة يمكن لكل مالك تطبيقها.</p>

        <h2>١. تنظيف الألواح بانتظام</h2>
        <p>الغبار والرمل وفضلات الطيور تقلل مردودية الألواح. في المغرب مع الرياح الرملية المتكررة، يُوصى بالتنظيف كل ثلاثة أشهر. استخدم الماء النظيف وقطعة قماش ناعمة — لا منظفات كاشطة ولا ماء تحت ضغط عالٍ.</p>

        <blockquote>
          "لوح تغطي الظلال 10% من مساحته يمكنه فقدان 50% من إنتاجه إذا لم يكن مجهزاً بنظام تجاوز. الصيانة الوقائية إذن بالغة الأهمية."
          <cite>— تقني قطرة أمل</cite>
        </blockquote>

        <h2>٢. مراقبة الإنتاج في الوقت الفعلي</h2>
        <p>جميع عواكسنا مجهزة بنظام مراقبة Wi-Fi. تحقق بانتظام من البيانات عبر التطبيق: انخفاض غير طبيعي في الإنتاج قد يشير إلى مشكلة تحتاج لمعالجة سريعة.</p>

        <p class="conclusion">هذه الخطوات الخمس البسيطة يمكنها الحفاظ على تركيبك عند 98% من مردوديته الأمثل لمدة 25 عاماً. في قطرة أمل، نقدم عقود صيانة سنوية تشمل تنظيفاً احترافياً وفحصاً شاملاً وتقرير أداء. تواصل معنا للحصول على عرض صيانة.</p>
      `,
    },
  },
];
