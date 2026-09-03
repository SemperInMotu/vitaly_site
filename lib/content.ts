import type { Locale } from './i18n';

export const ui = {
  en: {
    menu: 'Menu',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    tagline: 'Systems, data and documentary family history — through distinct projects.',
    projectsCol: 'Projects',
    contactCol: 'Contact',
    formLink: 'Contact form',
    unp: 'UNP 102176582',
    sent: 'Message sent. We will reply to the address you provided.',
    langAria: 'Language',
    dismiss: 'Dismiss',
  },
  ru: {
    menu: 'Меню',
    projects: 'Проекты',
    about: 'Обо мне',
    contact: 'Контакты',
    tagline: 'Системы, данные и документальная история — через отдельные проекты.',
    projectsCol: 'Проекты',
    contactCol: 'Контакты',
    formLink: 'Форма связи',
    unp: 'УНП 102176582',
    sent: 'Заявка отправлена. Ответим на указанный адрес.',
    langAria: 'Язык',
    dismiss: 'Закрыть',
  },
  be: {
    menu: 'Меню',
    projects: 'Праекты',
    about: 'Пра мяне',
    contact: 'Кантакты',
    tagline: 'Сыстэмы, зьвесткі й дакумэнтальная гісторыя — праз асобныя праекты.',
    projectsCol: 'Праекты',
    contactCol: 'Кантакты',
    formLink: 'Форма сувязі',
    unp: 'УНП 102176582',
    sent: 'Заяўка адпраўлена. Адкажам на пазначаны email.',
    langAria: 'Мова',
    dismiss: 'Закрыць',
  },
} as const;

export const hint = {
  ru: { text: 'Сайт доступен на русском', action: 'Перейти' },
  be: { text: 'Сайт даступны па-беларуску', action: 'Перайсці' },
} as const;

export const pages = {
  en: {
    home: {
      title: 'Vitaly Khoruzhko — projects',
      description: 'Personal hub of Vitaly Khoruzhko: ALFAKIT, Semper In Motu, Heritavia.',
      brand: 'Vitaly Khoruzhko',
      lead: 'I turn knowledge into systems — for logistics, data, and family history.',
      support: 'Each project has its own site. This is the portfolio and entry point.',
      ctaProjects: 'View projects →',
      ctaContact: 'Contact',
      cards: [
        {
          title: 'ALFAKIT',
          body: 'Domino TMS Care for PROLOG / ALFAKIT (Semper In Motu practice). SLA packages and modules.',
          more: 'alfakit.by →',
        },
        {
          title: 'Semper In Motu',
          body: 'Ops practice: ALFAKIT Care, Data / DWH / ETL, ALFAKIT SMART, KPI POC.',
          more: 'semperinmotu.com →',
        },
        {
          title: 'Heritavia',
          body: 'Documentary family history — research and a living report as a service app.',
          more: 'Open the app →',
        },
      ],
    },
    projects: {
      title: 'Projects — Vitaly Khoruzhko',
      description: 'Projects: ALFAKIT, Semper In Motu, Heritavia.',
      eyebrow: 'Projects',
      heading: 'Three separate surfaces',
      lead: 'Domino specialist, Ops agency, and a family-history app — without mixing storefronts.',
      cards: [
        {
          title: 'ALFAKIT',
          body: 'Live Domino tenants, modules, Care–Scale retainers, NEXT roadmap.',
          more: 'alfakit.by →',
        },
        {
          title: 'Semper In Motu',
          body: 'Data lake / DWH, conversation intelligence, KPI-based AI POC.',
          more: 'semperinmotu.com →',
        },
        {
          title: 'Heritavia',
          body: 'Research packages, living report, search strategy — the service application site.',
          more: 'heritavia.vitalykhoruzhko.com →',
        },
      ],
    },
    about: {
      title: 'About — Vitaly Khoruzhko',
      description: 'Vitaly Khoruzhko: entrepreneur and full-stack, 20+ years TMS/CRM/ERP/BI.',
      eyebrow: 'About',
      heading: 'I build systems from knowledge.',
      lead: 'I’m Vitaly Khoruzhko — an engineer, entrepreneur, and product builder. I’ve spent more than 20 years working with software, data, and business systems. Today, I explore AI and knowledge systems, while in my spare time I’m building my own family tree, which has long since grown into a research project of its own.',
      products:
        'Products stay on separate surfaces: Domino on alfakit.by, Ops/data/AI on semperinmotu.com, family history on heritavia.vitalykhoruzhko.com.',
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
    
        connectionTitle: 'Different projects. Same obsession.',
        connection: `Software.
    
AI.
    
Data.
    
Maps.
    
Business.
    
Genealogy.
    
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
    
And, increasingly, a collector and organiser of knowledge.`,
    
        nowTitle: 'What I’m building now',
        now: `Today my work spans several directions.
    
I continue developing software products and exploring AI-powered systems.
    
I experiment with new ways of organising and using knowledge.
    
And through Heritavia, I help people reconstruct their family histories using archival research, historical sources, maps and genetic genealogy.
    
These projects may eventually evolve into something very different from what they are today.
    
That’s part of the fun.
    
I don’t have a perfectly defined 10-year plan.
    
I have a direction.`,
    
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
      leadAfter: ' · or the form below.',
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
  },
  ru: {
    home: {
      title: 'Vitaly Khoruzhko — проекты',
      description: 'Персональный хаб Виталия Хоружко: ALFAKIT, Semper In Motu, Heritavia.',
      brand: 'Виталий Хоружко',
      lead: 'Строю системы из знаний — для логистики, данных и семейной истории.',
      support: 'Каждый проект живёт на своём сайте. Здесь — портфель и точка входа.',
      ctaProjects: 'Смотреть проекты →',
      ctaContact: 'Написать',
      cards: [
        {
          title: 'ALFAKIT',
          body: 'Сопровождение PROLOG / ALFAKIT на Domino. Практика Semper In Motu — пакеты Care и SLA.',
          more: 'alfakit.by →',
        },
        {
          title: 'Semper In Motu',
          body: 'Ops-практика: ALFAKIT Care, Data / DWH / ETL, ALFAKIT SMART, KPI POC.',
          more: 'semperinmotu.com →',
        },
        {
          title: 'Heritavia',
          body: 'Документальная история семьи — исследование и живой отчёт как сервис-приложение.',
          more: 'Открыть приложение →',
        },
      ],
    },
    projects: {
      title: 'Projects — Vitaly Khoruzhko',
      description: 'Проекты: ALFAKIT, Semper In Motu, Heritavia.',
      eyebrow: 'Projects',
      heading: 'Три отдельных контура',
      lead: 'Specialist Domino, Ops-агентство и приложение семейной истории — без смешения витрин.',
      cards: [
        {
          title: 'ALFAKIT',
          body: 'Live Domino tenants, модули, retainer Care–Scale, roadmap NEXT.',
          more: 'alfakit.by →',
        },
        {
          title: 'Semper In Motu',
          body: 'Data lake / DWH, conversation intelligence, KPI-based AI POC.',
          more: 'semperinmotu.com →',
        },
        {
          title: 'Heritavia',
          body: 'Пакеты Research, живой отчёт, стратегия поиска — сайт-приложение сервиса.',
          more: 'heritavia.vitalykhoruzhko.com →',
        },
      ],
    },
    about: {
      title: 'About — Vitaly Khoruzhko',
      description: 'Виталий Хоружко: предприниматель и full-stack, 20+ лет TMS/CRM/ERP/BI.',
      eyebrow: 'About',
      heading: 'Я создаю системы из знаний.',
      lead: 'Я — Виталий Хоружко, инженер, предприниматель и создатель продуктов. Более 20 лет в разработке ПО, данных и бизнес-системах. Сегодня исследую AI и системы знаний, а в свободное время строю собственное семейное дерево, которое уже давно превратилось в отдельное исследование.',
      products:
        'Продукты и услуги не смешиваю на одной витрине: Domino — на alfakit.by, Ops/data/AI — на semperinmotu.com, семейная история — на heritavia.vitalykhoruzhko.com.',
      cta: 'Связаться',
    
      story: {
        introTitle: 'Я всегда был любопытен, как всё устроено',
        intro: `Я начал заниматься разработкой программного обеспечения в 2001 году. Меня всегда увлекало превращать абстрактные идеи в работающие системы, инструменты и продукты.

За более чем 20 лет я прошёл путь от разработчика и бизнес-аналитика до предпринимателя и создателя собственных продуктов. Работал с информационными системами, данными, BI, автоматизацией и бизнес-процессами.`,

        buildingTitle: 'От кода к продуктам',
        building: `Один из главных проектов моей профессиональной жизни - система управления для логистических и экспедиторских компаний.

Я начинал с разработки программного обеспечения, но со временем это превратилось в полноценный продукт и бизнес. Здесь сошлись архитектура, автоматизация, интеграции, аналитика, работа с клиентами, ценообразование и продуктовая стратегия.

Именно здесь я особенно хорошо понял, что хороший продукт - это не только код. Это система, в которой технологии, люди и бизнес должны работать вместе.`,

        dataTitle: 'Данные, AI и системы знаний',
        data: `Моё образование связано с AI и геоинформационными системами, поэтому мне всегда были близки карты, графы, базы данных, связи и поиск закономерностей в больших объёмах информации.

Сегодня я снова всё больше погружаюсь в AI, LLM, системы знаний и автоматизацию информационных процессов. Меня интересует один и тот же вопрос: как превратить знания в работающую систему, которая помогает находить связи, принимать решения и создавать что-то новое?`,

        genealogyTitle: 'А потом появилась генеалогия',
        genealogy: `Генеалогией я занимаюсь уже более 15 лет. Сначала это было обычное любопытство к истории своей семьи. Потом появились метрические книги, переписи, архивные документы, старые карты, земельные дела, варианты написания фамилий, исчезнувшие деревни и, наконец, генетическая генеалогия.

Постепенно собственное семейное дерево превратилось в отдельное исследование.

И здесь я неожиданно обнаружил ту же задачу, что и в IT: огромный объём разрозненной информации нужно собрать, проверить, связать между собой и превратить в понятную картину.`,

        connectionTitle: 'Разные проекты. Одна и та же идея.',
        connection: `На бумаге мои интересы могут выглядеть довольно разными: разработка ПО, бизнес, AI, данные, карты, история и генеалогия.

Для меня это всё части одной системы мышления.

Мне интересно находить структуру в хаосе, соединять разрозненные факты, проверять гипотезы и превращать знания в работающие инструменты. Иногда это происходит в коде, иногда в бизнесе, а иногда - в старой метрической книге, где одна строчка может изменить всё семейное дерево.`,

        nowTitle: 'Что я делаю сейчас',
        now: `Я продолжаю создавать программные продукты и системы, исследовать возможности AI и работать с данными и знаниями.

Параллельно развиваю Heritavia - проект, посвящённый восстановлению семейной истории с помощью архивных документов, исторических источников, карт и генетической генеалогии.

По сути, направление остаётся тем же: искать связи, собирать знания и превращать их в систему.`,

        closing: `Создавать полезные вещи.
Следовать за интересными вопросами.
Соединять точки.
И продолжать учиться.`,

        signature: 'Знания → системы → открытия.',
      },
    },
    contact: {
      title: 'Contact — Vitaly Khoruzhko',
      description: 'Связаться с Виталием Хоружко.',
      eyebrow: 'Contact',
      heading: 'Напишите',
      leadAfter: ' · или форма ниже.',
      topic: 'Тема',
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение',
      submit: 'Отправить',
      topics: {
        general: 'Общий вопрос',
        alfakit: 'ALFAKIT / Domino',
        semper: 'Semper In Motu / Ops',
        heritavia: 'Heritavia',
        other: 'Other',
      },
    },
  },
  be: {
    home: {
      title: 'Віталь Харужка — праекты',
      description: 'Пэрсанальны хаб Віталя Харужкі: ALFAKIT, Semper In Motu, Heritavia.',
      brand: 'Віталь Харужка',
      lead: 'Я ператвараю веды ў сыстэмы - для лягістыкі, дадзеных і сямейнай гісторыі.',
      support: 'Кожны праект жыве на сваім сайце. Тут — партфэль і кропка ўваходу.',
      ctaProjects: 'Глядзець праекты →',
      ctaContact: 'Напісаць',
      cards: [
        {
          title: 'ALFAKIT',
          body: 'Суправаджанне PROLOG / ALFAKIT на Domino. Практыка Semper In Motu — пакеты Care і SLA.',
          more: 'alfakit.by →',
        },
        {
          title: 'Semper In Motu',
          body: 'Ops-практыка: ALFAKIT Care, Data / DWH / ETL, ALFAKIT SMART, KPI POC.',
          more: 'semperinmotu.com →',
        },
        {
          title: 'Heritavia',
          body: 'Дакумэнтальная гісторыя сям’і — дасьледаваньне й жывая справаздача як сэрвіс-дастасаваньне.',
          more: 'Адкрыць дастасаваньне →',
        },
      ],
    },
    projects: {
      title: 'Projects — Віталь Харужка',
      description: 'Праекты: ALFAKIT, Semper In Motu, Heritavia.',
      eyebrow: 'Projects',
      heading: 'Тры асобныя контуры',
      lead: 'Specialist Domino, Ops-агенцыя й дастасаваньне сямейнай гісторыі — без зьмешваньня вітрынаў.',
      cards: [
        {
          title: 'ALFAKIT',
          body: 'Жывыя Domino-тэнанты, модулі, retainer Care–Scale, roadmap NEXT.',
          more: 'alfakit.by →',
        },
        {
          title: 'Semper In Motu',
          body: 'Data lake / DWH, conversation intelligence, KPI-based AI POC.',
          more: 'semperinmotu.com →',
        },
        {
          title: 'Heritavia',
          body: 'Пакеты Research, жывая справаздача, стратэґія пошуку — сайт-дастасаваньне сэрвісу.',
          more: 'heritavia.vitalykhoruzhko.com →',
        },
      ],
    },
    about: {
      title: 'About — Віталь Харужка',
      description: 'Віталь Харужка: прадпрымальнік і full-stack, 20+ гадоў TMS/CRM/ERP/BI.',
      eyebrow: 'About',
      heading: 'Я ствараю сыстэмы з ведаў.',
      lead: 'Я — Віталь Харужка, інжынэр, прадпрымальнік і стваральнік прадуктаў. Больш за 20 гадоў я працую з праграмным забесьпячэньнем, дадзенымі і бізнэс-сыстэмамі. Сёньня дасьледую AI і сыстэмы ведаў, а ў вольны час будую ўласнае сямейнае дрэва, якое даўно перарасло ў асобны дасьледчы праект.',
      products:
        'Прадукты й паслугі не зьмешваю на адной вітрыне: Domino — на alfakit.by, Ops/data/AI — на semperinmotu.com, сямейная гісторыя — на heritavia.vitalykhoruzhko.com.',
      cta: 'Зьвязацца',
      story: {
        introTitle: 'Мне заўсёды было цікава, як усё ўладкавана',
        intro: `Я пачаў займацца распрацоўкай праграмнага забесьпячэньня ў 2001 годзе. Мяне заўсёды захапляла магчымасьць ператвараць абстрактныя ідэі ў працуючыя сыстэмы, інструмэнты і прадукты.

За больш чым 20 гадоў я прайшоў шлях ад распрацоўніка і бізнэс-аналітыка да прадпрымальніка і стваральніка ўласных прадуктаў. Працаваў з інфармацыйнымі сыстэмамі, дадзенымі, BI, аўтаматызацыяй і бізнэс-працэсамі.`,

        buildingTitle: 'Ад коду да прадуктаў',
        building: `Адзін з галоўных праектаў майго прафэсійнага жыцьця - сыстэма кіраваньня для лягістычных і экспэдытарскіх кампаніяў.

Я пачынаў з распрацоўкі праграмнага забесьпячэньня, але з часам гэта ператварылася ў паўнавартасны прадукт і бізнэс. Тут сышліся архітэктура, аўтаматызацыя, інтэграцыі, аналітыка, праца з кліентамі, цэнаўтварэньне і прадуктовая стратэгія.

Менавіта тут я асабліва добра зразумеў, што добры прадукт - гэта ня толькі код. Гэта сыстэма, у якой тэхналёгіі, людзі і бізнэс павінны працаваць разам.`,

        dataTitle: 'Дадзеныя, AI і сыстэмы ведаў',
        data: `Мая адукацыя зьвязаная з AI і геаінфармацыйнымі сыстэмамі, таму мне заўсёды былі блізкія мапы, графы, базы дадзеных, сувязі і пошук заканамернасьцяў у вялікіх аб'ёмах інфармацыі.

Сёньня я ўсё больш паглыбляюся ў AI, LLM, сыстэмы ведаў і аўтаматызацыю інфармацыйных працэсаў. Мяне цікавіць адно і тое ж пытаньне: як ператварыць веды ў працуючую сыстэму, якая дапамагае знаходзіць сувязі, прымаць рашэньні і ствараць нешта новае?`,

        genealogyTitle: 'А потым зьявілася генэалёгія',
        genealogy: `Генэалёгіяй я займаюся ўжо больш за 15 гадоў. Спачатку гэта была звычайная цікаўнасьць да гісторыі сваёй сям'і. Потым зьявіліся мэтрычныя кнігі, перапісы, архіўныя дакумэнты, старыя мапы, зямельныя справы, варыянты напісаньня прозьвішчаў, зьніклыя вёскі і, нарэшце, генэтычная генэалёгія.

Паступова ўласнае сямейнае дрэва ператварылася ў асобнае дасьледаваньне.

І тут я нечакана выявіў тую ж задачу, што і ў IT: велізарны аб'ём разрозьненай інфармацыі трэба сабраць, праверыць, зьвязаць паміж сабой і ператварыць у зразумелую карціну.`,

        connectionTitle: 'Розныя праекты. Адна і тая ж ідэя.',
        connection: `На паперы мае інтарэсы могуць выглядаць даволі рознымі: распрацоўка ПЗ, бізнэс, AI, дадзеныя, мапы, гісторыя і генэалёгія.

Для мяне ўсё гэта - часткі адной сыстэмы мысьленьня.

Мне цікава знаходзіць структуру ў хаосе, злучаць разрозьненыя факты, правяраць гіпотэзы і ператвараць веды ў працуючыя інструмэнты. Часам гэта адбываецца ў кодзе, часам у бізнэсе, а часам - у старой мэтрычнай кнізе, дзе адзін радок можа зьмяніць усё сямейнае дрэва.`,

        nowTitle: 'Што я раблю цяпер',
        now: `Я працягваю ствараць праграмныя прадукты і сыстэмы, дасьледаваць магчымасьці AI і працаваць з дадзенымі ды ведамі.

Паралельна разьвіваю Heritavia - праект, прысьвечаны аднаўленьню сямейнай гісторыі з дапамогай архіўных дакумэнтаў, гістарычных крыніцаў, мапаў і генэтычнай генэалёгіі.

Па сутнасьці, напрамак застаецца тым самым: шукаць сувязі, зьбіраць веды і ператвараць іх у сыстэму.`,

        closing: `Ствараць карысныя рэчы.

Ісьці за цікавымі пытаньнямі.

Злучаць кропкі.

І працягваць вучыцца.`,

        signature: 'Веды → сыстэмы → адкрыцьці.',
      },
    },
  },
} satisfies Record<Locale, unknown>;

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vitaly Khoruzhko',
  url: 'https://vitalykhoruzhko.com/',
  email: 'info@vitalykhoruzhko.com',
  telephone: '+375296757858',
  sameAs: [
    'https://www.linkedin.com/in/vitalykhoruzhko',
    'https://t.me/N_FT210993',
    'https://alfakit.by/',
    'https://semperinmotu.com/',
  ],
  jobTitle: 'Systems / Domino / data consultant',
  knowsAbout: ['IBM Domino', 'HCL Notes', 'TMS', 'Data Warehouse', 'family history research'],
};

export const TOPICS = ['general', 'alfakit', 'semper', 'heritavia', 'other'] as const;
export type Topic = (typeof TOPICS)[number];

export function isTopic(value: string | undefined): value is Topic {
  return !!value && (TOPICS as readonly string[]).includes(value);
}