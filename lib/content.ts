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
      heading: 'Knowledge → systems',
      lead: 'Entrepreneur and full-stack builder, 20+ years TMS/CRM/ERP/BI, AI+GIS since 2003. Strength: turning knowledge into systems with audit, provenance and human-in-the-loop.',
      products:
        'Products stay on separate surfaces: Domino on alfakit.by, Ops/data/AI on semperinmotu.com, family history on heritavia.vitalykhoruzhko.com.',
      principle: 'Principle: no focus dilution. Healthcare and craft stay off the storefront.',
      cta: 'Get in touch',
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
      brand: 'Vitaly Khoruzhko',
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
      heading: 'Знания → системы',
      lead: 'Предприниматель и full-stack, 20+ лет TMS/CRM/ERP/BI, AI+GIS с 2003. Суперсила: превращать знания в системы с audit, provenance и human-in-the-loop.',
      products:
        'Продукты и услуги не смешиваю на одной витрине: Domino — на alfakit.by, Ops/data/AI — на semperinmotu.com, семейная история — на heritavia.vitalykhoruzhko.com.',
      principle: 'Принцип: не размываем фокус. Healthcare и craft — не на витрине.',
      cta: 'Связаться',
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
      lead: 'Будую сыстэмы зь ведаў — для ляґістыкі, зьвестак і сямейнай гісторыі.',
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
      heading: 'Веды → сыстэмы',
      lead: 'Прадпрымальнік і full-stack, 20+ гадоў TMS/CRM/ERP/BI, AI+GIS з 2003. Суперсіла: ператвараць веды ў сыстэмы з audit, provenance і human-in-the-loop.',
      products:
        'Прадукты й паслугі не зьмешваю на адной вітрыне: Domino — на alfakit.by, Ops/data/AI — на semperinmotu.com, сямейная гісторыя — на heritavia.vitalykhoruzhko.com.',
      principle: 'Прынцып: не размываем фокус. Healthcare і craft — не на вітрыне.',
      cta: 'Зьвязацца',
    },
    contact: {
      title: 'Contact — Віталь Харужка',
      description: 'Зьвязацца зь Віталём Харужкам.',
      eyebrow: 'Contact',
      heading: 'Напішыце',
      leadAfter: ' · ці форма ніжэй.',
      topic: 'Тэма',
      name: 'Імя',
      email: 'Email',
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
