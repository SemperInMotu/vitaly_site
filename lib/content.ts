import type { Locale, Page } from './i18n';

export const ui = {
  en: {
    menu: 'Menu',
    about: 'About',
    building: 'Building',
    expertise: 'Expertise',
    knowledge: 'Knowledge',
    photography: 'Photography',
    genealogy: 'Genealogy',
    notes: 'Notes',
    contact: 'Contact',
    tagline: 'I build systems from knowledge — AI, data, software and domain expertise.',
    buildingCol: 'Building',
    experienceCol: 'Experience',
    knowledgeCol: 'Knowledge',
    personalCol: 'Personal',
    contactCol: 'Contact',
    formLink: 'Contact form',
    unp: 'UNP 102176582',
    sent: 'Message sent. We will reply to the address you provided.',
    langAria: 'Language',
    dismiss: 'Dismiss',
    selected: 'Selected works',
    archivePlate: 'Print not digitised yet',
  },
  ru: {
    menu: 'Меню',
    about: 'Обо мне',
    building: 'Building',
    expertise: 'Expertise',
    knowledge: 'Knowledge',
    photography: 'Фотография',
    genealogy: 'Генеалогия',
    notes: 'Notes',
    contact: 'Контакты',
    tagline: 'Строю системы из знаний — AI, данные, ПО и предметная экспертиза.',
    buildingCol: 'Building',
    experienceCol: 'Experience',
    knowledgeCol: 'Knowledge',
    personalCol: 'Личное',
    contactCol: 'Контакты',
    formLink: 'Форма связи',
    unp: 'УНП 102176582',
    sent: 'Заявка отправлена. Ответим на указанный адрес.',
    langAria: 'Язык',
    dismiss: 'Закрыть',
    selected: 'Selected works',
    archivePlate: 'Отпечаток ещё не оцифрован',
  },
  be: {
    menu: 'Меню',
    about: 'Пра мяне',
    building: 'Building',
    expertise: 'Expertise',
    knowledge: 'Knowledge',
    photography: 'Фатографія',
    genealogy: 'Генэалёгія',
    notes: 'Notes',
    contact: 'Кантакты',
    tagline: 'Будую сыстэмы зь ведаў — AI, зьвесткі, ПЗ і прадметная экспэртыза.',
    buildingCol: 'Building',
    experienceCol: 'Experience',
    knowledgeCol: 'Knowledge',
    personalCol: 'Асабістае',
    contactCol: 'Кантакты',
    formLink: 'Форма сувязі',
    unp: 'УНП 102176582',
    sent: 'Заяўка адпраўлена. Адкажам на пазначаны email.',
    langAria: 'Мова',
    dismiss: 'Закрыць',
    selected: 'Selected works',
    archivePlate: 'Адбітак яшчэ не алічбаваны',
  },
} as const;

export const hint = {
  ru: { text: 'Сайт доступен на русском', action: 'Перейти' },
  be: { text: 'Сайт даступны па-беларуску', action: 'Перайсці' },
} as const;

type Seo = { title: string; description: string };
type Card = { title: string; body: string; more: string };
type DirLink = { label: string; page: Page } | { label: string; href: string };
type MapGroup = { title: string; items: DirLink[] };
type Venture = {
  kind: 'venture' | 'experience';
  title: string;
  kicker: string;
  body: string;
  more: string;
  href?: string;
  page?: Page;
};
type IndexItem = {
  title: string;
  body: string;
  more: string;
  page?: Page;
  href?: string;
};
type CopySection = Seo & {
  eyebrow: string;
  heading: string;
  lead: string;
  body: string;
  cta: string;
  ctaPage?: Page;
  ctaHref?: string;
};
type Plate = { title: string; year: string; caption: string; meta?: string };
type Note = { date: string; tags: string[]; title: string; body: string };
type Story = {
  introTitle: string;
  intro: string;
  buildingTitle: string;
  building: string;
  dataTitle: string;
  data: string;
  genealogyTitle: string;
  genealogy: string;
  photographyTitle: string;
  photography: string;
  connectionTitle: string;
  connection: string;
  nowTitle: string;
  now: string;
  closing: string;
  signature: string;
};

export type PagesCopy = {
  home: Seo & {
    heading: string;
    lead: string;
    evidence: string;
    today: string;
    ctaBuilding: string;
    ctaAbout: string;
    map: MapGroup[];
    buildingTitle: string;
    ventures: Venture[];
  };
  building: Seo & { eyebrow: string; heading: string; lead: string; cards: Card[] };
  about: Seo & { eyebrow: string; heading: string; lead: string; products: string; cta: string; story: Story };
  contact: Seo & {
    eyebrow: string;
    heading: string;
    topic: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    topics: Record<'general' | 'alfakit' | 'semper' | 'heritavia' | 'other', string>;
  };
  expertise: Seo & { eyebrow: string; heading: string; lead: string; items: IndexItem[] };
  'expertise-ai': CopySection;
  'expertise-systems': CopySection;
  'expertise-logistics': CopySection;
  genealogy: Seo & { eyebrow: string; heading: string; lead: string; researchTitle: string; lines: string[]; heritaviaTitle: string; heritaviaBody: string; heritaviaMore: string };
  'genealogy-research': Seo & { eyebrow: string; heading: string; lead: string; body: string };
  'genealogy-family-history': Seo & { eyebrow: string; heading: string; lead: string; body: string };
  'genealogy-dna': Seo & { eyebrow: string; heading: string; lead: string; body: string };
  knowledge: Seo & { eyebrow: string; heading: string; lead: string; items: IndexItem[] };
  'knowledge-articles': CopySection;
  'knowledge-cases': Seo & { eyebrow: string; heading: string; lead: string; items: IndexItem[] };
  'knowledge-research': CopySection;
  photography: Seo & { eyebrow: string; heading: string; lead: string; plates: Plate[] };
  'photography-people': Seo & { eyebrow: string; heading: string; lead: string; plates: Plate[] };
  'photography-places': Seo & { eyebrow: string; heading: string; lead: string; plates: Plate[] };
  'photography-traces': Seo & { eyebrow: string; heading: string; lead: string; traces: (Plate & { story: string })[] };
  'photography-projects': Seo & { eyebrow: string; heading: string; lead: string; plates: Plate[] };
  notes: Seo & { eyebrow: string; heading: string; lead: string; items: Note[] };
};

export const GENEALOGY_NAV: { page: Page; en: string; ru: string; be: string }[] = [
  { page: 'genealogy', en: 'Overview', ru: 'Обзор', be: 'Агляд' },
  { page: 'genealogy-research', en: 'Research', ru: 'Исследования', be: 'Дасьледаваньні' },
  { page: 'genealogy-family-history', en: 'Family history', ru: 'Семейная история', be: 'Сямейная гісторыя' },
  { page: 'genealogy-dna', en: 'DNA', ru: 'ДНК', be: 'ДНК' },
];

export const PHOTO_NAV: { page: Page; en: string; ru: string; be: string }[] = [
  { page: 'photography', en: 'Selected', ru: 'Selected', be: 'Selected' },
  { page: 'photography-people', en: 'People', ru: 'People', be: 'People' },
  { page: 'photography-places', en: 'Places', ru: 'Places', be: 'Places' },
  { page: 'photography-traces', en: 'Traces', ru: 'Traces', be: 'Traces' },
  { page: 'photography-projects', en: 'Projects', ru: 'Projects', be: 'Projects' },
];

export const EXPERTISE_NAV: { page: Page; en: string; ru: string; be: string }[] = [
  { page: 'expertise', en: 'Overview', ru: 'Обзор', be: 'Агляд' },
  { page: 'expertise-ai', en: 'AI & Data', ru: 'AI & Data', be: 'AI & Data' },
  { page: 'expertise-systems', en: 'Business Systems', ru: 'Business Systems', be: 'Business Systems' },
  { page: 'expertise-logistics', en: 'Logistics', ru: 'Logistics', be: 'Ляґістыка' },
  { page: 'genealogy', en: 'Genealogy', ru: 'Генеалогия', be: 'Генэалёгія' },
];

export const KNOWLEDGE_NAV: { page: Page; en: string; ru: string; be: string }[] = [
  { page: 'knowledge', en: 'Overview', ru: 'Обзор', be: 'Агляд' },
  { page: 'knowledge-articles', en: 'Articles', ru: 'Статьи', be: 'Артыкулы' },
  { page: 'knowledge-cases', en: 'Cases', ru: 'Кейсы', be: 'Кейсы' },
  { page: 'knowledge-research', en: 'Research', ru: 'Исследования', be: 'Дасьледаваньні' },
  { page: 'notes', en: 'Notes', ru: 'Notes', be: 'Notes' },
];

const en: PagesCopy = {
  home: {
    title: 'Vitaly Khoruzhko — I build systems from knowledge',
    description:
      'Personal operating system of Vitaly Khoruzhko: AI, data, software and domain expertise. Semper In Motu, Heritavia, knowledge, photography.',
    heading: 'I build systems from knowledge.',
    lead: 'AI, data, software and domain expertise — turning complex business problems into working systems.',
    evidence: '25+ years in technology. 15+ years working with logistics. AI, data, software and business systems.',
    today:
      'Today I build AI and data solutions through Semper In Motu, investigate family histories through Heritavia, and continue working with real-world business systems.',
    ctaBuilding: 'What I am building',
    ctaAbout: 'About',
    map: [
      {
        title: 'Building',
        items: [
          { label: 'Semper In Motu', href: 'https://semperinmotu.com/' },
          { label: 'Heritavia', href: 'https://www.heritavia.com' },
        ],
      },
      {
        title: 'Expertise',
        items: [
          { label: 'AI & Data', page: 'expertise-ai' },
          { label: 'Business Systems', page: 'expertise-systems' },
          { label: 'Logistics', page: 'expertise-logistics' },
          { label: 'Genealogy & Historical Research', page: 'genealogy' },
        ],
      },
      {
        title: 'Knowledge',
        items: [
          { label: 'Articles', page: 'knowledge-articles' },
          { label: 'Cases', page: 'knowledge-cases' },
          { label: 'Research', page: 'knowledge-research' },
          { label: 'Notes', page: 'notes' },
        ],
      },
      {
        title: 'Personal',
        items: [
          { label: 'Photography', page: 'photography' },
          { label: 'About', page: 'about' },
        ],
      },
    ],
    buildingTitle: 'What I am building',
    ventures: [
      {
        kind: 'venture',
        title: 'Semper In Motu',
        kicker: 'AI · Data · Product Engineering',
        body: 'Building practical AI and data systems for businesses.',
        more: 'Explore →',
        href: 'https://semperinmotu.com/',
      },
      {
        kind: 'venture',
        title: 'Heritavia',
        kicker: 'Genealogy · Archives · DNA · Historical Data',
        body: 'Reconstructing family histories through archives, genetics and data.',
        more: 'Explore →',
        href: 'https://www.heritavia.com',
      },
      {
        kind: 'experience',
        title: 'ALFAKIT / PROLOG',
        kicker: 'Logistics · TMS · Business Systems',
        body: 'Long-term experience supporting and developing customer environments of a transportation management system.',
        more: 'Experience →',
        page: 'knowledge-cases',
      },
    ],
  },
  building: {
    title: 'Building — Vitaly Khoruzhko',
    description: 'What Vitaly Khoruzhko is building: Semper In Motu and Heritavia.',
    eyebrow: 'Building',
    heading: 'What I am building',
    lead: 'Two of my own surfaces. Semper In Motu is the commercial AI/data business. Heritavia is the genealogy business. Experience with other products lives under Cases.',
    cards: [
      {
        title: 'Semper In Motu',
        body: 'AI, data and product engineering for business. Not an agency brochure — systems that go into operations.',
        more: 'semperinmotu.com →',
      },
      {
        title: 'Heritavia',
        body: 'Find the people who came before you. Archive research, DNA, maps and a living family-history report.',
        more: 'heritavia.com →',
      },
    ],
  },
  about: {
    title: 'About — Vitaly Khoruzhko',
    description: 'Vitaly Khoruzhko: engineer, entrepreneur, genealogist, photographer. 20+ years in systems.',
    eyebrow: 'About',
    heading: 'I build systems from knowledge.',
    lead: '25+ years in technology. 15+ years working with logistics. AI, data, software and business systems. Today I build AI and data solutions through Semper In Motu, investigate family histories through Heritavia, and continue working with real-world business systems.',
    products:
      'Commercial AI/data work lives on Semper In Motu. Family history as a service lives on Heritavia. ALFAKIT / PROLOG is a product I implement and support — not a brand I market as my own. Photography and notes live here.',
    cta: 'Get in touch',
    story: {
      introTitle: 'I’ve always been curious about how things fit together.',
      intro: `My career started with code.

In 2001, I began working as a software developer. I was fascinated by the idea that a few lines of code could turn an abstract idea into something real: a system, a tool, a product.

More than twenty years later, I still feel the same way.

But somewhere along the way, I realised that writing code was only one part of what I really enjoyed.

I became interested in the systems behind the software: how businesses work, how people make decisions, how information moves through an organisation, where complexity comes from, and how technology can make that complexity easier to understand.

That took me from software development into business analysis, information systems, BI, product development and eventually entrepreneurship.`,
      buildingTitle: 'Building things that last',
      building: `I have always preferred building something of my own to simply working on someone else’s roadmap.

One of the results of that approach is a TMS platform for logistics and forwarding companies that I have been developing for many years.

It started as software.

Then it became a product.

Then a business.

And eventually it became a kind of laboratory where I learned about architecture, product strategy, automation, integrations, analytics, customers, pricing, business models and all the messy things that happen between an idea and a real product.

I still write code. I still design systems. I still enjoy opening an empty project and figuring out how to make something work.

But these days I am less interested in technology for technology’s sake.

I care about useful systems.`,
      dataTitle: 'Following the data',
      data: `My academic background is in artificial intelligence and geographic information systems.

Perhaps that explains some of my obsessions.

I like maps.

I like graphs.

I like databases.

I like patterns.

I like taking something chaotic and trying to find the structure hidden inside.

Today my curiosity naturally leads me toward AI, LLMs, knowledge systems, automation and new ways of working with information.

I am particularly interested in what happens when AI is combined with structured data, domain knowledge and systems designed around real human workflows.

The technology changes incredibly quickly.

The question that interests me remains surprisingly stable:

How can we turn knowledge into something useful?`,
      genealogyTitle: 'Then I discovered that genealogy was a systems problem too',
      genealogy: `For more than 15 years, I have been researching my own family history.

At first it was simply curiosity.

Who were my ancestors?

Where did they live?

What happened to them?

What did their world look like?

Then the rabbit hole opened.

Archives. Church records. Census lists. Land documents. Old maps. Surnames. Places that disappeared from modern maps. Different spellings of the same name. Thousands of people connected by dozens of family lines.

And eventually DNA.

The deeper I went, the more familiar the problem became.

Genealogy is essentially a massive, messy information system.

The data is fragmented across archives, databases, maps, documents, family stories and DNA matches.

The challenge is not simply finding another document.

The challenge is connecting the pieces and understanding what they mean together.

That is exactly the kind of problem I have always enjoyed solving.

So genealogy stopped being just a hobby.

It became another way to apply the same mindset.`,
      photographyTitle: 'And looking — with a camera',
      photography: `From 2004 to 2010 I photographed in Minsk and around Belarus: people, places, objects, light. Film first (Nikon F80, Bronica SQ-Ai), then digital. I built the first gallery CMS for znyata.com. I was in Творческая мастерская in 2004–2005.

It was never a studio I sold. It was another way of paying attention — the same habit as archives and data: notice what is about to disappear.

The archive is on this site, under Photography. Not a fourth product. A record.`,
      connectionTitle: 'Different projects. Same obsession.',
      connection: `Software.

AI.

Data.

Maps.

Business.

Genealogy.

Photography.

On paper, they don’t seem to belong together.

In my head, they do.

I am interested in complex systems and the hidden connections inside them.

I like taking scattered pieces of information and turning them into a picture.

I like building things rather than just talking about them.

And I like projects where there is still something unknown to discover.

That is probably why I have never been very good at having just one professional identity.

I am an engineer.

An entrepreneur.

A product builder.

A researcher.

A photographer.

And, increasingly, a collector and organiser of knowledge.`,
      nowTitle: 'What I’m building now',
      now: `Today I build AI and data solutions through Semper In Motu, investigate family histories through Heritavia, and continue working with real-world business systems.

Photography stays here — a record, not a product.

I don’t have a perfectly defined 10-year plan. I have a direction.`,
      closing: `Build useful things.

Follow interesting questions.

Connect the dots.

And keep learning.`,
      signature: 'Knowledge → systems → discovery.',
    },
  },
  contact: {
    title: 'Contact — Vitaly Khoruzhko',
    description: 'Contact Vitaly Khoruzhko.',
    eyebrow: 'Contact',
    heading: 'Write',
    topic: 'Topic',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send',
    topics: {
      general: 'General',
      alfakit: 'ALFAKIT / Domino',
      semper: 'Semper In Motu / Ops',
      heritavia: 'Heritavia',
      other: 'Other',
    },
  },
  expertise: {
    title: 'Expertise — Vitaly Khoruzhko',
    description: 'AI & data, business systems, logistics, genealogy and historical research.',
    eyebrow: 'Expertise',
    heading: 'Domains I actually work in',
    lead: 'Not a list of buzzwords. Places where I have shipped systems or spent years in the data.',
    items: [
      {
        title: 'AI & Data',
        body: 'Agents, copilots, DWH/ETL, KPI, operational analytics — through Semper In Motu.',
        more: 'Read →',
        page: 'expertise-ai',
      },
      {
        title: 'Business Systems',
        body: 'From a messy process to a working system: analysis, prototype, production.',
        more: 'Read →',
        page: 'expertise-systems',
      },
      {
        title: 'Logistics',
        body: '15+ years hands-on with transportation and forwarding systems. Domain, not a logistics company.',
        more: 'Read →',
        page: 'expertise-logistics',
      },
      {
        title: 'Genealogy & Historical Research',
        body: 'The laboratory. Archives, maps, DNA. Heritavia is the service that grew from it.',
        more: 'Read →',
        page: 'genealogy',
      },
    ],
  },
  'expertise-ai': {
    title: 'AI & Data — Vitaly Khoruzhko',
    description: 'AI engineering, data and analytics as part of how Vitaly builds systems.',
    eyebrow: 'Expertise',
    heading: 'AI & Data',
    lead: 'Practical systems, not a pitch deck about “AI transformation”.',
    body: `I work with AI agents, copilots, automation and LLM applications when they sit on real processes and real data.

Data work is the other half: BI, DWH, ETL, KPI, operational analytics.

The commercial surface for this is Semper In Motu. This page is only the personal map.`,
    cta: 'Semper In Motu →',
    ctaHref: 'https://semperinmotu.com/',
  },
  'expertise-systems': {
    title: 'Business Systems — Vitaly Khoruzhko',
    description: 'Turning business problems into working software and data systems.',
    eyebrow: 'Expertise',
    heading: 'Business Systems',
    lead: 'From the problem in operations to something people actually use.',
    body: `I have spent most of my career between software and how a business actually runs: documents, settlements, workflows, integrations, the ugly exceptions.

That includes long-running customer environments — see Cases for ALFAKIT / PROLOG — and new systems built through Semper In Motu.

The headline is not “25 years in IT”. It is: I can take a complex domain and turn it into a working system.`,
    cta: 'Cases →',
    ctaPage: 'knowledge-cases',
  },
  'expertise-logistics': {
    title: 'Logistics — Vitaly Khoruzhko',
    description: 'Hands-on experience in logistics and transportation systems. Domain expertise, not a logistics brand.',
    eyebrow: 'Expertise',
    heading: 'Logistics',
    lead: '15+ years of hands-on experience in logistics and transportation systems.',
    body: `TMS · freight forwarding · operations · settlements · documents · analytics · automation.

This is a domain I know from the inside. It is not what Semper In Motu “is”. Logistics is the first strong industry vertical for AI/data work — operational intelligence, margin, receivables, document processing, email intelligence, dashboards, assistants, workflow automation.

The product I have implemented and supported for forwarding companies is ALFAKIT / PROLOG. That story belongs in Cases, not on the home page.`,
    cta: 'Cases →',
    ctaPage: 'knowledge-cases',
  },
  knowledge: {
    title: 'Knowledge — Vitaly Khoruzhko',
    description: 'Articles, cases, research and notes: AI, data, logistics, genealogy, systems.',
    eyebrow: 'Knowledge',
    heading: 'Knowledge as an asset',
    lead: 'Experience becomes a short post, then an article, a case, a note, sometimes a product. This is the library — still being filled.',
    items: [
      {
        title: 'Articles',
        body: 'Longer pieces on AI & business, data, logistics, genealogy, systems.',
        more: 'Open →',
        page: 'knowledge-articles',
      },
      {
        title: 'Cases',
        body: 'Where the work actually happened. Including ALFAKIT / PROLOG.',
        more: 'Open →',
        page: 'knowledge-cases',
      },
      {
        title: 'Research',
        body: 'Genealogy and historical research — the laboratory, not the storefront.',
        more: 'Open →',
        page: 'knowledge-research',
      },
      {
        title: 'Notes',
        body: 'Short observations. No magazine cadence.',
        more: 'Open →',
        page: 'notes',
      },
    ],
  },
  'knowledge-articles': {
    title: 'Articles — Vitaly Khoruzhko',
    description: 'Articles on AI, data, logistics, genealogy and systems. Library in progress.',
    eyebrow: 'Knowledge',
    heading: 'Articles',
    lead: 'The shelf exists. The first long pieces are still being written.',
    body: `Categories that will live here: AI & Business · Data & Analytics · Logistics · Genealogy · Entrepreneurship · Systems.

Nothing is published yet on this URL. Notes are the short form in the meantime.`,
    cta: 'Notes →',
    ctaPage: 'notes',
  },
  'knowledge-cases': {
    title: 'Cases — Vitaly Khoruzhko',
    description: 'Cases: ALFAKIT / PROLOG logistics systems and client development.',
    eyebrow: 'Experience / Cases',
    heading: 'Cases',
    lead: 'What I have actually worked on — not a product catalogue.',
    items: [
      {
        title: 'ALFAKIT / PROLOG',
        body: 'Logistics systems & client development. Supporting and developing existing customer environments of a transport management system used by forwarding companies. IBM Domino / HCL Notes. Implementation, support, evolution — not my product to market as a personal brand.',
        more: 'alfakit.by →',
        href: 'https://alfakit.by/',
      },
    ],
  },
  'knowledge-research': {
    title: 'Research — Vitaly Khoruzhko',
    description: 'Personal genealogical and historical research. Laboratory, not Heritavia’s offer.',
    eyebrow: 'Knowledge',
    heading: 'Research',
    lead: 'The laboratory. Heritavia is the service that grew out of it — a different site.',
    body: `More than 15 years on my own lines: Belarus, Lithuania, former Commonwealth. Archives, maps, DNA, places that dropped off modern maps.

This is not the Heritavia storefront. If you want the service, go there. If you want the method and the personal stack, stay in Genealogy.`,
    cta: 'Genealogy →',
    ctaPage: 'genealogy',
  },
  genealogy: {
    title: 'Genealogy — Vitaly Khoruzhko',
    description: 'Personal genealogical research: Belarus, Lithuania, former Commonwealth. Archives, maps, DNA.',
    eyebrow: 'Genealogy',
    heading: 'More than 15 years of searching for the people behind my family tree.',
    lead: 'Archives. Maps. Documents. DNA. Places. Stories. This is the laboratory. Heritavia is the service that grew out of it.',
    researchTitle: 'My research',
    lines: [
      'Belarus — Pinsk district (Botowo, Pohost Zahorodny, Chuchowo); Vileyka / Rakov; Ihumen / Pukhavichy.',
      'Lithuania — former Święciany district: Linkmenys, Ignalina, Konciarzyno.',
      'Poland / former Commonwealth — parish books, inventories, noble and peasant lines that crossed moving borders.',
      'Family lines — Khoruzhko / Kharuzhko, Vazhnik, Mukharovsky, Kushnerevich, and the lines they married.',
      'DNA genealogy — matches as a hypothesis generator; the canon still needs a document.',
      'Historical geography — places that vanished from modern maps, gminy that changed names twice.',
    ],
    heritaviaTitle: 'Heritavia',
    heritaviaBody:
      'The same method, as a service: research strategy, one surname line, or a family history you can actually hand to children — map, timeline, people, stories. Not a ZIP of scans.',
    heritaviaMore: 'Open Heritavia →',
  },
  'genealogy-research': {
    title: 'Research — Genealogy — Vitaly Khoruzhko',
    description: 'How I research: funds, parishes, what survives, what to do next.',
    eyebrow: 'Research',
    heading: 'What the records can (and cannot) support',
    lead: 'A strategy before a large project: surnames, places, which funds survive, what the next step should cost.',
    body: `I start with geography, not with a promise of N generations.

Parish, volost, uyezd, the state that issued the book. Then: which метрики survive, which ревизские сказки, which inventories of the estate. NIAB, ZHAGAB, FamilySearch, local museums, notaries.

Hypotheses stay labeled. Verified facts go into the canon.

If your grandparents’ villages sit between Polesie, Minsk Governorate, and the wider former Russian Empire or Grand Duchy of Lithuania — this is the terrain I already walk.`,
  },
  'genealogy-family-history': {
    title: 'Family history — Vitaly Khoruzhko',
    description: 'From a tree of names to a story a family can use.',
    eyebrow: 'Family history',
    heading: 'A tree with more names is not a family story',
    lead: 'Documents, places on a map, a timeline, people — not a pedigree chart alone.',
    body: `I spent years adding collateral lines until the chart looked impressive and still explained nothing to a child.

The useful delivery is a living report: who lived where, what the parish looked like, which house stood on which plot, which spelling hid the same person.

That format became Heritavia. The research underneath remains mine: Botowo and Łaby, Pohost church, names that jump between Cyrillic and Polish Latin.`,
  },
  'genealogy-dna': {
    title: 'DNA — Genealogy — Vitaly Khoruzhko',
    description: 'DNA as a hypothesis generator. Ethnicity pies for Eastern Europe are noisy. Matches and geography are the useful part.',
    eyebrow: 'DNA',
    heading: 'DNA does not replace archives',
    lead: 'It tells you where to look when family legend runs out. The canon still needs a document.',
    body: `Ethnicity estimates for Eastern Europe are noisy. That is normal. The useful part is the matches and the geography, read against records.

A typical hard case: the oral history has a hole, the surname is common, the parish is unclear. Then a match from the diaspora points at a geography that was never in the stories. Cluster → parish → register → people the family had not seen in a century.

I treat DNA as a hypothesis generator, not as proof.

Gedmatch projects I use and run sit next to the paper trail — not instead of it.`,
  },
  photography: {
    title: 'Photography — Vitaly Khoruzhko',
    description: 'Photographs, 2004–2010. People, places and traces of time. Minsk and Belarus.',
    eyebrow: 'Photography',
    heading: 'I photograph people, places and traces of time.',
    lead: 'Archive 2004–2010. Film and early digital. Not a studio. Selected works below; series in the sections.',
    plates: [
      { title: 'Spring portrait', year: '2010', caption: 'Studio light, Minsk. Series indexed on old photo portals.' },
      { title: 'НастроениЯ', year: '2008–2009', caption: 'Moods — small prints, Photoforum album.' },
      { title: 'People / Люди', year: '2004–2009', caption: 'Portraits from the first years in Творческая мастерская and after.' },
      { title: 'Isloch', year: '2005', caption: 'First znyata outing, Rakov. People in a forest, no plan.' },
    ],
  },
  'photography-people': {
    title: 'People — Photography — Vitaly Khoruzhko',
    description: 'Portraits, family, street. 2004–2010.',
    eyebrow: 'People',
    heading: 'Portraits, family, street',
    lead: 'Faces first. Names of sitters are not published here.',
    plates: [
      { title: 'Portrait', year: '2009', caption: 'Available light, Minsk apartment.' },
      { title: 'Portrait', year: '2008', caption: 'Medium format, Bronica SQ-Ai.' },
      { title: 'Street', year: '2006', caption: 'Minsk, walking.' },
    ],
  },
  'photography-places': {
    title: 'Places — Photography — Vitaly Khoruzhko',
    description: 'Cities, villages, landscapes, places with history.',
    eyebrow: 'Places',
    heading: 'Cities, villages, landscapes',
    lead: 'Places that still exist on the map, and some that barely do.',
    plates: [
      { title: 'Olshevo, lake Glublya', year: '2006', caption: 'znyata trip. Shared frames with other photographers from the forum.' },
      { title: 'Rakov / Isloch', year: '2005', caption: 'The river that started the offline life of znyata.' },
      { title: 'Minsk', year: '2004–2010', caption: 'The city as a default backdrop.' },
    ],
  },
  'photography-traces': {
    title: 'Traces — Photography — Vitaly Khoruzhko',
    description: 'Visual genealogy: houses, cemeteries, objects, textures — with maps and archival ciphers.',
    eyebrow: 'Traces',
    heading: 'Houses, cemeteries, objects, textures',
    lead: 'Where photography meets the archive. A picture, a place, a document. Visual genealogy — not a mood board.',
    traces: [
      {
        title: 'Botowo',
        year: 'field / archive',
        caption: 'Village near lake Pohost, Pinsk district. Khoruzhko line.',
        meta: '52.3°N 26.0°E · Pohost Pokrov parish · NIAB inventories 1762–1763, estate Pohost, d. Botow',
        story:
          'The house is later than the books. The plot is not. Inventory numbers, метрики of Pohost church, and DNA clusters that keep pointing at the same parish — that is the stack, not the picturesque ruin.',
      },
      {
        title: 'Łaby',
        year: 'field / archive',
        caption: 'Zalesse selsoviet, Valozhyn district. Vazhnik / Bohdan line.',
        meta: 'Rakow volost, Minsk uyezd · Kryvichy church of St. Alexander Nevsky · NIAB biographical replies, 2025',
        story:
          'A photograph of a couple and their daughters. A missing maiden name. A letter from the archive that returned Богдан / Bohdan. Then four more surnames in a day. Camera first, cipher second — or the other way around.',
      },
    ],
  },
  'photography-projects': {
    title: 'Projects — Photography — Vitaly Khoruzhko',
    description: 'Finished series: Весенний портрет 2010, СОМЖИ, БУРАТИНО, НастроениЯ.',
    eyebrow: 'Projects',
    heading: 'Finished series',
    lead: 'Titles as they were published. Prints are being digitised; the names already live in old indexes.',
    plates: [
      { title: 'Весенний портрет 2010', year: '2010', caption: 'Spring portrait. Photocentra series.' },
      { title: 'СОМЖИ', year: 'c. 2009', caption: 'Closed series. Title kept as indexed.' },
      { title: 'БУРАТИНО', year: 'c. 2008', caption: 'Closed series. Title kept as indexed.' },
      { title: 'НастроениЯ', year: '2008–2009', caption: 'Photoforum album.' },
    ],
  },
  notes: {
    title: 'Notes — Vitaly Khoruzhko',
    description: 'Short notes on systems, genealogy, history and photography. Not a magazine.',
    eyebrow: 'Notes',
    heading: 'Notes',
    lead: 'Not a blog cadence. Observations that do not need a product page.',
    items: [
      {
        date: '2026-09-14',
        tags: ['#visual-history', '#genealogy'],
        title: 'A house is not a proof',
        body: 'Photographing the house where someone “lived” is easy. Tying the frame to a plot in an inventory, a parish, and a DNA cluster is the actual work. Traces is that stack: image → map → cipher → story. Without the cipher it is tourism.',
      },
      {
        date: '2026-08-21',
        tags: ['#genealogy', '#dna'],
        title: 'Ethnicity pies are not the point',
        body: 'For Eastern Europe the pie is noisy. Matches and geography, read against records, are the useful part. DNA proposes. The register disposes.',
      },
      {
        date: '2026-08-13',
        tags: ['#systems', '#genealogy'],
        title: 'Missing key',
        body: 'In data it is called a missing key. In the archive a man keeps the surname. A woman after the wedding often becomes “Ivan’s wife”. The maiden name drops out of family memory. Marriage books are the first to rot. Same bug, different store.',
      },
    ],
  },
};

const ru: PagesCopy = {
  ...en,
  home: {
    ...en.home,
    title: 'Виталий Хоружко — строю системы из знаний',
    description:
      'Personal OS Виталия Хоружко: AI, данные, ПО и предметная экспертиза. Semper In Motu, Heritavia, knowledge, фотография.',
    heading: 'Я создаю системы из знаний.',
    lead: 'AI, данные, ПО и предметная экспертиза — сложные бизнес-задачи в работающие системы.',
    evidence: '25+ лет в технологиях. 15+ лет в логистике. AI, данные, ПО и бизнес-системы.',
    today:
      'Сегодня я строю AI- и data-решения через Semper In Motu, исследую семейные истории через Heritavia и продолжаю работать с живыми бизнес-системами.',
    ctaBuilding: 'Что я строю',
    ctaAbout: 'Обо мне',
    map: [
      {
        title: 'Building',
        items: [
          { label: 'Semper In Motu', href: 'https://semperinmotu.com/ru/' },
          { label: 'Heritavia', href: 'https://www.heritavia.com' },
        ],
      },
      {
        title: 'Expertise',
        items: [
          { label: 'AI & Data', page: 'expertise-ai' },
          { label: 'Business Systems', page: 'expertise-systems' },
          { label: 'Logistics', page: 'expertise-logistics' },
          { label: 'Genealogy & Historical Research', page: 'genealogy' },
        ],
      },
      {
        title: 'Knowledge',
        items: [
          { label: 'Статьи', page: 'knowledge-articles' },
          { label: 'Кейсы', page: 'knowledge-cases' },
          { label: 'Исследования', page: 'knowledge-research' },
          { label: 'Notes', page: 'notes' },
        ],
      },
      {
        title: 'Personal',
        items: [
          { label: 'Фотография', page: 'photography' },
          { label: 'Обо мне', page: 'about' },
        ],
      },
    ],
    buildingTitle: 'Что я строю',
    ventures: [
      {
        kind: 'venture',
        title: 'Semper In Motu',
        kicker: 'AI · Data · Product Engineering',
        body: 'Практические AI- и data-системы для бизнеса.',
        more: 'Explore →',
        href: 'https://semperinmotu.com/ru/',
      },
      {
        kind: 'venture',
        title: 'Heritavia',
        kicker: 'Genealogy · Archives · DNA · Historical Data',
        body: 'Семейные истории через архивы, генетику и данные.',
        more: 'Explore →',
        href: 'https://www.heritavia.com',
      },
      {
        kind: 'experience',
        title: 'ALFAKIT / PROLOG',
        kicker: 'Logistics · TMS · Business Systems',
        body: 'Долгий опыт сопровождения и развития клиентских сред транспортной системы.',
        more: 'Experience →',
        page: 'knowledge-cases',
      },
    ],
  },
  building: {
    ...en.building,
    title: 'Building — Виталий Хоружко',
    description: 'Что строит Виталий Хоружко: Semper In Motu и Heritavia.',
    heading: 'Что я строю',
    lead: 'Две своих витрины. Semper In Motu — коммерческий AI/data. Heritavia — genealogy-бизнес. Опыт с чужими продуктами — в Cases.',
    cards: [
      {
        title: 'Semper In Motu',
        body: 'AI, data и product engineering для бизнеса. Не брошюра агентства — системы, которые входят в операции.',
        more: 'semperinmotu.com →',
      },
      {
        title: 'Heritavia',
        body: 'Найти тех, кто был до вас. Архивы, ДНК, карты и живой отчёт семейной истории.',
        more: 'heritavia.com →',
      },
    ],
  },
  'expertise-ai': {
    ...en['expertise-ai'],
    title: 'AI & Data — Виталий Хоружко',
    heading: 'AI & Data',
    lead: 'Практические системы, не pitch deck про «AI transformation».',
    body: `Работаю с AI-агентами, копилотами, автоматизацией и LLM-приложениями, когда они садятся на реальные процессы и реальные данные.

Вторая половина — data: BI, DWH, ETL, KPI, операционная аналитика.

Коммерческая поверхность — Semper In Motu. Эта страница — только личная карта.`,
    cta: 'Semper In Motu →',
    ctaHref: 'https://semperinmotu.com/ru/',
  },
  'knowledge-cases': {
    ...en['knowledge-cases'],
    title: 'Cases — Виталий Хоружко',
    heading: 'Cases',
    lead: 'То, на чём я реально работал — не каталог продуктов.',
    items: [
      {
        title: 'ALFAKIT / PROLOG',
        body: 'Логистические системы и клиентская разработка. Сопровождение и развитие существующих сред TMS, которой пользуются экспедиторы. IBM Domino / HCL Notes. Внедрение, поддержка, эволюция — не мой продукт для личной витрины.',
        more: 'alfakit.by →',
        href: 'https://alfakit.by/ru/',
      },
    ],
  },
  expertise: {
    ...en.expertise,
    title: 'Expertise — Виталий Хоружко',
    heading: 'Области, в которых я реально работаю',
    lead: 'Не список модных слов. Места, где я запускал системы или годами сидел в данных.',
    items: [
      {
        title: 'AI & Data',
        body: 'Агенты, копилоты, DWH/ETL, KPI, операционная аналитика — через Semper In Motu.',
        more: 'Читать →',
        page: 'expertise-ai',
      },
      {
        title: 'Business Systems',
        body: 'От грязного процесса до работающей системы: анализ, прототип, продакшен.',
        more: 'Читать →',
        page: 'expertise-systems',
      },
      {
        title: 'Logistics',
        body: '15+ лет внутри транспортных и экспедиторских систем. Домен, не логистическая компания.',
        more: 'Читать →',
        page: 'expertise-logistics',
      },
      {
        title: 'Genealogy & Historical Research',
        body: 'Лаборатория. Архивы, карты, ДНК. Heritavia — сервис, который из неё вырос.',
        more: 'Читать →',
        page: 'genealogy',
      },
    ],
  },
  'expertise-systems': {
    ...en['expertise-systems'],
    title: 'Business Systems — Виталий Хоружко',
    heading: 'Business Systems',
    lead: 'От проблемы в операциях до того, чем люди реально пользуются.',
    body: `Большую часть карьеры я провёл между софтом и тем, как бизнес работает на самом деле: документы, расчёты, workflow, интеграции, уродливые исключения.

Сюда входят долгие клиентские среды — см. Cases про ALFAKIT / PROLOG — и новые системы через Semper In Motu.

Headline не «25 лет в IT». Headline: я умею взять сложный домен и превратить его в работающую систему.`,
    cta: 'Cases →',
  },
  'expertise-logistics': {
    ...en['expertise-logistics'],
    title: 'Logistics — Виталий Хоружко',
    heading: 'Logistics',
    lead: '15+ лет hands-on в логистике и транспортных системах.',
    body: `TMS · экспедирование · операции · расчёты · документы · аналитика · автоматизация.

Это домен, который я знаю изнутри. Это не то, «чем является» Semper In Motu. Логистика — первый сильный вертикальный домен для AI/data: operational intelligence, маржа, дебиторка, документы, email intelligence, дашборды, ассистенты, автоматизация workflow.

Продукт, который я внедрял и сопровождал для экспедиторов, — ALFAKIT / PROLOG. Эта история живёт в Cases, не на главной.`,
    cta: 'Cases →',
  },
  knowledge: {
    ...en.knowledge,
    title: 'Knowledge — Виталий Хоружко',
    heading: 'Знания как актив',
    lead: 'Опыт становится коротким постом, статьёй, кейсом, заметкой, иногда продуктом. Это библиотека — ещё наполняется.',
    items: [
      {
        title: 'Статьи',
        body: 'Длинные тексты: AI & business, data, логистика, генеалогия, системы.',
        more: 'Открыть →',
        page: 'knowledge-articles',
      },
      {
        title: 'Кейсы',
        body: 'Где работа реально происходила. В том числе ALFAKIT / PROLOG.',
        more: 'Открыть →',
        page: 'knowledge-cases',
      },
      {
        title: 'Исследования',
        body: 'Генеалогия и исторические исследования — лаборатория, не витрина.',
        more: 'Открыть →',
        page: 'knowledge-research',
      },
      {
        title: 'Notes',
        body: 'Короткие наблюдения. Без журнальной регулярности.',
        more: 'Открыть →',
        page: 'notes',
      },
    ],
  },
  'knowledge-articles': {
    ...en['knowledge-articles'],
    title: 'Articles — Виталий Хоружко',
    heading: 'Статьи',
    lead: 'Полка есть. Первые длинные тексты ещё пишутся.',
    body: `Категории, которые здесь будут жить: AI & Business · Data & Analytics · Logistics · Genealogy · Entrepreneurship · Systems.

На этом URL пока ничего не опубликовано. Notes — короткая форма пока что.`,
    cta: 'Notes →',
  },
  'knowledge-research': {
    ...en['knowledge-research'],
    title: 'Research — Виталий Хоружко',
    heading: 'Исследования',
    lead: 'Лаборатория. Heritavia — сервис, который из неё вырос. Другой сайт.',
    body: `Больше 15 лет по своим линиям: Беларусь, Литва, бывшая Речь Посполитая. Архивы, карты, ДНК, места, которые выпали с современных карт.

Это не витрина Heritavia. Если нужен сервис — туда. Если метод и личный стек — оставайтесь в Genealogy.`,
    cta: 'Genealogy →',
  },
  about: {
    ...en.about,
    title: 'About — Виталий Хоружко',
    description: 'Виталий Хоружко: инженер, предприниматель, генеалог, фотограф. 20+ лет в системах.',
    eyebrow: 'Обо мне',
    heading: 'Я создаю системы из знаний.',
    lead: 'Я — Виталий Хоружко, инженер, предприниматель и создатель продуктов. Более 20 лет в разработке ПО, данных и бизнес-системах. Сегодня строю AI и data через Semper In Motu, семейные истории через Heritavia, и держу фотоархив 2004–2010.',
    products:
      'Коммерческий AI/data — на Semper In Motu. Семейная история как сервис — на Heritavia. ALFAKIT / PROLOG — продукт, который я внедряю и сопровождаю, не мой бренд для витрины. Фотография и заметки — здесь.',
    cta: 'Связаться',
    story: {
      ...en.about.story,
      introTitle: 'Я всегда был любопытен, как всё устроено',
      intro: `Я начал заниматься разработкой программного обеспечения в 2001 году. Меня всегда увлекало превращать абстрактные идеи в работающие системы, инструменты и продукты.

За более чем 20 лет я прошёл путь от разработчика и бизнес-аналитика до предпринимателя и создателя собственных продуктов. Работал с информационными системами, данными, BI, автоматизацией и бизнес-процессами.`,
      buildingTitle: 'От кода к продуктам',
      building: `Один из главных проектов моей профессиональной жизни — система управления для логистических и экспедиторских компаний.

Я начинал с разработки программного обеспечения, но со временем это превратилось в полноценный продукт и бизнес. Здесь сошлись архитектура, автоматизация, интеграции, аналитика, работа с клиентами, ценообразование и продуктовая стратегия.

Именно здесь я особенно хорошо понял, что хороший продукт — это не только код. Это система, в которой технологии, люди и бизнес должны работать вместе.`,
      dataTitle: 'Данные, AI и системы знаний',
      data: `Моё образование связано с AI и геоинформационными системами, поэтому мне всегда были близки карты, графы, базы данных, связи и поиск закономерностей в больших объёмах информации.

Сегодня я снова всё больше погружаюсь в AI, LLM, системы знаний и автоматизацию информационных процессов. Меня интересует один и тот же вопрос: как превратить знания в работающую систему, которая помогает находить связи, принимать решения и создавать что-то новое?`,
      genealogyTitle: 'А потом появилась генеалогия',
      genealogy: `Генеалогией я занимаюсь уже более 15 лет. Сначала это было обычное любопытство к истории своей семьи. Потом появились метрические книги, переписи, архивные документы, старые карты, земельные дела, варианты написания фамилий, исчезнувшие деревни и, наконец, генетическая генеалогия.

Постепенно собственное семейное дерево превратилось в отдельное исследование.

И здесь я неожиданно обнаружил ту же задачу, что и в IT: огромный объём разрозненной информации нужно собрать, проверить, связать между собой и превратить в понятную картину.`,
      photographyTitle: 'И взгляд через камеру',
      photography: `С 2004 по 2010 снимал в Минске и по Беларуси: люди, места, предметы, свет. Сначала плёнка (Nikon F80, Bronica SQ-Ai), потом цифра. Собрал первую галерею-CMS для znyata.com. Творческая мастерская — 2004–2005.

Это не была студия на продажу. Это был ещё один способ смотреть — та же привычка, что в архивах и данных: замечать то, что вот-вот исчезнет.

Архив лежит на этом сайте, в Photography. Не четвёртый продукт. Запись.`,
      connectionTitle: 'Разные проекты. Одна и та же идея.',
      connection: `На бумаге мои интересы могут выглядеть довольно разными: разработка ПО, бизнес, AI, данные, карты, история, генеалогия, фотография.

Для меня это всё части одной системы мышления.

Мне интересно находить структуру в хаосе, соединять разрозненные факты, проверять гипотезы и превращать знания в работающие инструменты. Иногда это происходит в коде, иногда в бизнесе, иногда в старой метрической книге, иногда в кадре.`,
      nowTitle: 'Что я делаю сейчас',
      now: `Сегодня я строю AI- и data-решения через Semper In Motu, исследую семейные истории через Heritavia и продолжаю работать с живыми бизнес-системами.

Фотография остаётся здесь — запись, не продукт.

Идеального десятилетнего плана нет. Есть направление.`,
      closing: `Создавать полезные вещи.
Следовать за интересными вопросами.
Соединять точки.
И продолжать учиться.`,
      signature: 'Знания → системы → открытия.',
    },
  },
  contact: {
    ...en.contact,
    title: 'Контакты — Виталий Хоружко',
    description: 'Связаться с Виталием Хоружко.',
    eyebrow: 'Контакты',
    heading: 'Напишите',
    topic: 'Тема',
    name: 'Имя',
    message: 'Сообщение',
    submit: 'Отправить',
    topics: {
      general: 'Общий вопрос',
      alfakit: 'ALFAKIT / Domino',
      semper: 'Semper In Motu / Ops',
      heritavia: 'Heritavia',
      other: 'Другое',
    },
  },
  genealogy: {
    ...en.genealogy,
    title: 'Генеалогия — Виталий Хоружко',
    description: 'Личные генеалогические исследования: Беларусь, Литва, бывшая Речь Посполитая.',
    eyebrow: 'Генеалогия',
    heading: 'Больше 15 лет ищу людей за своим деревом.',
    lead: 'Архивы. Карты. Документы. ДНК. Места. Истории. Это лаборатория. Heritavia — сервис, который из неё вырос.',
    researchTitle: 'Мои исследования',
    lines: [
      'Беларусь — Пинский район (Ботово, Погост-Загородский, Чухово); Вилейка / Раков; Игумен / Пуховичи.',
      'Литва — бывший Свенцянский уезд: Лынгмяны, Игналина, Концяржино.',
      'Польша / Речь Посполитая — метрики, инвентари, линии, которые переходили двигавшиеся границы.',
      'Линии — Хоружко / Харужко, Важник, Мухаровский, Кушнеревич и те, с кем венчались.',
      'ДНК-генеалогия — совпадения как генератор гипотез; в канон всё равно нужен документ.',
      'Историческая география — места, которых нет на современной карте, гмины, которые дважды сменили имя.',
    ],
    heritaviaBody:
      'Тот же метод, как услуга: стратегия поиска, одна фамильная линия или история, которую можно отдать детям — карта, хронология, люди, сюжеты. Не ZIP со сканами.',
    heritaviaMore: 'Открыть Heritavia →',
  },
  'genealogy-research': {
    ...en['genealogy-research'],
    title: 'Исследования — Генеалогия — Виталий Хоружко',
    eyebrow: 'Исследования',
    heading: 'Что документы могут подтвердить — и чего не могут',
    lead: 'Сначала стратегия: фамилии, места, какие фонды живы, сколько стоит следующий шаг.',
    body: `Начинаю с географии, не с обещания N поколений.

Приход, волость, уезд, государство, которое выдало книгу. Потом: какие метрики сохранились, какие ревизские сказки, какие инвентари имения. НИАБ, ЖАГАБ, FamilySearch, местные музеи, нотариусы.

Гипотезы подписаны. В канон идут проверенные факты.

Если деревни бабушек и дедов лежат между Полесьем, Минской губернией и более широкой бывшей Российской империей или ВКЛ — это территория, по которой я уже хожу.`,
  },
  'genealogy-family-history': {
    ...en['genealogy-family-history'],
    title: 'Семейная история — Виталий Хоружко',
    eyebrow: 'Семейная история',
    heading: 'Дерево с большим числом имён — ещё не история семьи',
    lead: 'Документы, места на карте, хронология, люди — не одна схема предков.',
    body: `Годы я дописывал боковые линии, пока схема не стала внушительной и всё ещё ничего не объясняла ребёнку.

Полезная выдача — живой отчёт: кто где жил, как выглядел приход, какой дом стоял на каком участке, какое написание прятало того же человека.

Этот формат стал Heritavia. Исследование под ним остаётся моим: Ботово и Лабы, Погосткая церковь, имена, которые прыгают между кириллицей и польской латиницей.`,
  },
  'genealogy-dna': {
    ...en['genealogy-dna'],
    title: 'ДНК — Генеалогия — Виталий Хоружко',
    eyebrow: 'ДНК',
    heading: 'ДНК не заменяет архив',
    lead: 'Она говорит, куда смотреть, когда семейная легенда кончается. В канон всё равно нужен документ.',
    body: `Оценки «этничности» для Восточной Европы шумные. Это нормально. Полезны совпадения и география, прочитанные против документов.

Типичный трудный случай: в устной истории дыра, фамилия частая, приход неясен. Потом совпадение из диаспоры указывает на географию, которой не было в рассказах. Кластер → приход → метрика → люди, которых семья не видела сто лет.

ДНК — генератор гипотез, не доказательство.

Проекты на Gedmatch стоят рядом с бумажным следом, не вместо него.`,
  },
  photography: {
    ...en.photography,
    title: 'Фотография — Виталий Хоружко',
    description: 'Снимки 2004–2010. Люди, места и следы времени. Минск и Беларусь.',
    heading: 'Снимаю людей, места и следы времени.',
    lead: 'Архив 2004–2010. Плёнка и ранняя цифра. Не студия. Selected ниже; серии — в разделах.',
  },
  'photography-people': {
    ...en['photography-people'],
    title: 'People — Фотография — Виталий Хоружко',
    heading: 'Портреты, семья, улица',
    lead: 'Сначала лица. Имена моделей здесь не публикую.',
  },
  'photography-places': {
    ...en['photography-places'],
    title: 'Places — Фотография — Виталий Хоружко',
    heading: 'Города, деревни, пейзаж',
    lead: 'Места, которые ещё есть на карте, и те, что едва держатся.',
  },
  'photography-traces': {
    ...en['photography-traces'],
    title: 'Traces — Фотография — Виталий Хоружко',
    heading: 'Дома, кладбища, предметы, фактуры',
    lead: 'Где фотография встречается с архивом. Кадр, место, документ. Visual genealogy — не мудборд.',
    traces: [
      {
        title: 'Ботово',
        year: 'поле / архив',
        caption: 'Деревня у озера Погост, Пинский район. Линия Хоружко.',
        meta: '52.3°N 26.0°E · Погосткий Покровский приход · НИАБ, инвентари 1762–1763, имение Pohost, д. Botow',
        story:
          'Дом позже книг. Участок — нет. Номера инвентаря, метрики Погосткой церкви и ДНК-кластеры, которые снова указывают на тот же приход — вот стек, а не живописные руины.',
      },
      {
        title: 'Лабы',
        year: 'поле / архив',
        caption: 'Залесский сельсовет, Воложинский район. Линия Важник / Богдан.',
        meta: 'Раковская волость, Минский уезд · Кривичская церковь Александра Невского · НИАБ, биографические ответы, 2025',
        story:
          'Снимок пары и дочерей. Пропавшая девичья фамилия. Письмо из архива: БАГДАН / Bohdan. Потом ещё четыре фамилии за сутки. Сначала камера, потом шифр — или наоборот.',
      },
    ],
  },
  'photography-projects': {
    ...en['photography-projects'],
    title: 'Projects — Фотография — Виталий Хоружко',
    heading: 'Законченные серии',
    lead: 'Названия как публиковались. Отпечатки оцифровываются; имена уже сидят в старых индексах.',
  },
  notes: {
    ...en.notes,
    title: 'Notes — Виталий Хоружко',
    heading: 'Notes',
    lead: 'Не журнальная регулярность. Наблюдения, которым не нужна продуктовая страница.',
    items: [
      {
        date: '2026-09-14',
        tags: ['#visual-history', '#genealogy'],
        title: 'Дом — не доказательство',
        body: 'Снять «дом, где жили» легко. Привязать кадр к участку в инвентаре, приходу и ДНК-кластеру — вот работа. Traces это этот стек: снимок → карта → шифр → история. Без шифра это туризм.',
      },
      {
        date: '2026-08-21',
        tags: ['#genealogy', '#dna'],
        title: 'Пирог этничности ни при чём',
        body: 'Для Восточной Европы пирог шумный. Совпадения и география, прочитанные против документов, — полезная часть. ДНК предлагает. Метрика распоряжается.',
      },
      {
        date: '2026-08-13',
        tags: ['#systems', '#genealogy'],
        title: 'Missing key',
        body: 'В данных это называется missing key. В архиве мужчина держится за фамилию. Женщина после венчания часто становится «женой Ивана». Девичья исчезает из памяти семьи. Брачные книги — первые, что не сохраняются. Тот же баг, другое хранилище.',
      },
    ],
  },
};

const be: PagesCopy = {
  ...ru,
  home: {
    ...ru.home,
    title: 'Віталь Харужка — будую сыстэмы зь ведаў',
    description:
      'Personal OS Віталя Харужкі: AI, зьвесткі, ПЗ і прадметная экспэртыза. Semper In Motu, Heritavia, knowledge, фатографія.',
    heading: 'Я ствараю сыстэмы з ведаў.',
    lead: 'AI, зьвесткі, ПЗ і прадметная экспэртыза — складаныя бізнэс-задачы ў працуючыя сыстэмы.',
    evidence: '25+ гадоў у тэхналёгіях. 15+ гадоў у ляґістыцы. AI, зьвесткі, ПЗ і бізнэс-сыстэмы.',
    today:
      'Сёньня будую AI- і data-рашэньні праз Semper In Motu, дасьледую сямейныя гісторыі праз Heritavia і працягваю працаваць з жывымі бізнэс-сыстэмамі.',
    ctaBuilding: 'Што я будую',
    ctaAbout: 'Пра мяне',
    map: ru.home.map.map((group) =>
      group.title === 'Building'
        ? {
            ...group,
            items: [
              { label: 'Semper In Motu', href: 'https://semperinmotu.com/be/' },
              { label: 'Heritavia', href: 'https://www.heritavia.com' },
            ],
          }
        : group.title === 'Personal'
          ? {
              ...group,
              items: [
                { label: 'Фатографія', page: 'photography' as const },
                { label: 'Пра мяне', page: 'about' as const },
              ],
            }
          : group,
    ),
    buildingTitle: 'Што я будую',
    ventures: [
      {
        ...ru.home.ventures[0],
        href: 'https://semperinmotu.com/be/',
      },
      {
        ...ru.home.ventures[1],
        href: 'https://www.heritavia.com',
      },
      ru.home.ventures[2],
    ],
  },
  building: {
    ...ru.building,
    title: 'Building — Віталь Харужка',
  },
  'expertise-ai': {
    ...ru['expertise-ai'],
    ctaHref: 'https://semperinmotu.com/be/',
  },
  'knowledge-cases': {
    ...ru['knowledge-cases'],
    items: [
      {
        ...ru['knowledge-cases'].items[0],
        href: 'https://alfakit.by/be/',
      },
    ],
  },
  about: {
    ...ru.about,
    title: 'About — Віталь Харужка',
    description: 'Віталь Харужка: інжынэр, прадпрымальнік, генэалёг, фатограф.',
    eyebrow: 'Пра мяне',
    heading: 'Я ствараю сыстэмы з ведаў.',
    lead: 'Я — Віталь Харужка, інжынэр, прадпрымальнік і стваральнік прадуктаў. Больш за 20 гадоў з ПЗ, зьвесткамі і бізнэс-сыстэмамі. Сёньня будую AI і data праз Semper In Motu, сямейныя гісторыі праз Heritavia, і трымаю фотаархіў 2004–2010.',
    products:
      'Камэрцыйны AI/data — на Semper In Motu. Сямейная гісторыя як сэрвіс — на Heritavia. ALFAKIT / PROLOG — прадукт, які я ўкараняю й суправаджаю, не мой брэнд для вітрыны. Фатографія й нататкі — тут.',
    cta: 'Зьвязацца',
    story: {
      ...ru.about.story,
      introTitle: 'Мне заўсёды было цікава, як усё ўладкавана',
      signature: 'Веды → сыстэмы → адкрыцьці.',
    },
  },
  contact: {
    ...ru.contact,
    title: 'Кантакты — Віталь Харужка',
    description: 'Зьвязацца зь Віталем Харужкам.',
    eyebrow: 'Кантакты',
    heading: 'Напішыце',
    topic: 'Тэма',
    name: 'Імя',
    message: 'Паведамленьне',
    submit: 'Адправіць',
    topics: {
      general: 'Агульнае пытаньне',
      alfakit: 'ALFAKIT / Domino',
      semper: 'Semper In Motu / Ops',
      heritavia: 'Heritavia',
      other: 'Іншае',
    },
  },
  genealogy: {
    ...ru.genealogy,
    title: 'Генэалёгія — Віталь Харужка',
    eyebrow: 'Генэалёгія',
    heading: 'Больш за 15 гадоў шукаю людзей за сваім дрэвам.',
    lead: 'Архівы. Мапы. Дакумэнты. ДНК. Мясьціны. Гісторыі. Гэта лябараторыя. Heritavia — сэрвіс, які зь яе вырас.',
    researchTitle: 'Мае дасьледаваньні',
  },
  photography: {
    ...ru.photography,
    title: 'Фатографія — Віталь Харужка',
    heading: 'Здымаю людзей, мясьціны й сьляды часу.',
  },
  notes: {
    ...ru.notes,
    title: 'Notes — Віталь Харужка',
  },
};

export const pages: Record<Locale, PagesCopy> = { en, ru, be };

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vitaly Khoruzhko',
  alternateName: ['Виталий Хоружко', 'Vitali Kharuzhko', 'Віталь Харужка'],
  url: 'https://vitalykhoruzhko.com/',
  email: 'info@vitalykhoruzhko.com',
  telephone: '+375296757858',
  sameAs: [
    'https://www.linkedin.com/in/vitalykhoruzhko',
    'https://t.me/N_FT210993',
    'https://alfakit.by/',
    'https://semperinmotu.com/',
    'https://www.heritavia.com',
  ],
  jobTitle: 'I build systems from knowledge',
  knowsAbout: [
    'AI engineering',
    'data analytics',
    'business systems',
    'IBM Domino',
    'HCL Notes',
    'TMS',
    'logistics',
    'family history research',
    'photography',
  ],
};

export const TOPICS = ['general', 'alfakit', 'semper', 'heritavia', 'other'] as const;
export type Topic = (typeof TOPICS)[number];

export function isTopic(value: string | undefined): value is Topic {
  return !!value && (TOPICS as readonly string[]).includes(value);
}
