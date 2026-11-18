import { ProjectCategory } from './constants';

export type Locale = 'en' | 'fil' | 'zh' | 'ja' | 'de' | 'hi' | 'es' | 'ar';

export interface LocaleOption {
  code: Locale;
  short: string;
  label: string;
}

export const LOCALE_OPTIONS: LocaleOption[] = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'fil', short: 'FIL', label: 'Filipino' },
  { code: 'zh', short: '中文', label: '中文 (Mandarin)' },
  { code: 'ja', short: '日本語', label: '日本語 (Japanese)' },
  { code: 'de', short: 'DE', label: 'Deutsch' },
  { code: 'hi', short: 'हिन्दी', label: 'हिन्दी (Hindi)' },
  { code: 'es', short: 'ES', label: 'Español' },
  { code: 'ar', short: 'AR', label: 'العربية' },
];

export interface TranslationSchema {
  nav: {
    about: string;
    services: string;
    portfolio: string;
    resume: string;
    letsTalk: string;
    theme: string;
    language: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitleBefore: string;
    subtitleEstimates: string;
    subtitleMiddle: string;
    subtitleVisuals: string;
    subtitleAfter: string;
    viewProjects: string;
    contactMe: string;
  };
  softwareStack: {
    heading: string;
  };
  about: {
    title: string;
    subtitle: string;
    quote: string;
    bio1: string;
    bio2: string;
    yearsLabel: string;
    projectsLabel: string;
  };
  services: {
    title: string;
    subtitle: string;
    footerTag: string;
    viewSamples: string;
    items: Record<ProjectCategory, { title: string; description: string }>;
  };
  gallery: {
    title: string;
    subtitle: string;
    allFilter: string;
    categories: Record<ProjectCategory, string>;
    projects: Record<string, { title: string; description: string; location: string }>;
  };
  projectModal: {
    expand: string;
    closePreview: string;
    remoteLocation: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    intro: string;
    items: Array<{
      text: string;
      author: string;
      role: string;
      company: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationLine1: string;
    locationLine2: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailAddressLabel: string;
    projectTypeLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    validationError: string;
    invalidEmailError: string;
    sendButton: string;
    whatsappButton: string;
    openingGmail: string;
    openInGmail: string;
    copyDetails: string;
    copied: string;
  };
  footer: {
    tagline: string;
    linkedin: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationSchema> = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      resume: 'Resume',
      letsTalk: "Let's Talk",
      theme: 'Theme',
      language: 'Language',
    },
    hero: {
      titleLine1: 'Architectural',
      titleLine2: 'Virtual Assistant',
      subtitleBefore: 'Providing accurate architectural ',
      subtitleEstimates: 'estimates',
      subtitleMiddle: ', realistic ',
      subtitleVisuals: '3D visualizations',
      subtitleAfter: ', and detailed drafting support.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    softwareStack: {
      heading: 'Tools & Platforms I Work With',
    },
    about: {
      title: 'The Architect',
      subtitle: 'About Allana',
      quote: '"Dedicated to providing reliable, high-quality support so you can focus on the creative side of your projects."',
      bio1: 'I am an Architectural Virtual Assistant with a strong background in architecture and construction. I help architects, interior designers, and contractors streamline their workflow by handling drafting, 3D modeling, and estimating tasks.',
      bio2: 'Whether you need help with a single residential rendering, an intricate set of construction documents, or a comprehensive cost estimate, I provide prompt, organized, and accurate results tailored to your specific needs.',
      yearsLabel: 'Years Experience',
      projectsLabel: 'Projects Delivered',
    },
    services: {
      title: 'Architectural Services',
      subtitle: 'Expertise & Precision',
      footerTag: 'Standard of Quality & Integrity',
      viewSamples: 'View Work Samples',
      items: {
        'Cost Estimates': {
          title: 'Architectural Estimates',
          description: 'Providing detailed and accurate cost estimates, including Bills of Quantities (BOQ) for various projects.',
        },
        'Architectural Rendering': {
          title: '3D Visualization',
          description: 'Creating realistic 3D renderings to help you present your designs to clients clearly and effectively.',
        },
        'Roadway Design': {
          title: 'Roadway Design',
          description: 'Assisting with layout and planning for roadways, subdivisions, and site development infrastructure.',
        },
        'Plans & Drafting': {
          title: 'CAD Drafting',
          description: 'Delivering clean, organized, and accurate technical drawings based on your sketches and specifications.',
        },
      },
    },
    gallery: {
      title: 'Work & Creations',
      subtitle: 'Selected Projects',
      allFilter: 'All',
      categories: {
        'Architectural Rendering': 'Architectural Rendering',
        'Cost Estimates': 'Cost Estimates',
        'Roadway Design': 'Roadway Design',
        'Plans & Drafting': 'Plans & Drafting',
      },
      projects: {
        '1': {
          title: 'Modern Residential Villa',
          description: 'A high-end, photorealistic 3D architectural visualization of a modern residential villa, designed to showcase contemporary architecture, sophisticated aesthetics, and luxurious living spaces. The project highlights clean architectural lines, premium materials, expansive glass elements, and a seamless connection between indoor and outdoor environments. Created with meticulous attention to detail, realistic lighting, textures, and spatial composition to deliver an elegant and lifelike representation of the proposed residence.',
          location: 'Philippines',
        },
        '2': {
          title: 'Roadway Planning',
          description: 'A transportation infrastructure planning project focused on the development of a dedicated busway system in the Monumento area of Metro Manila. The project aims to improve public transportation efficiency, optimize traffic flow, and provide safer and more accessible commuter facilities. It involves roadway layout planning, traffic circulation analysis, bus lane allocation, and integration of public transport infrastructure to support smoother and more organized urban mobility.',
          location: 'Manila, Philippines',
        },
        '3': {
          title: 'Complex Estimate',
          description: 'A comprehensive construction cost estimation project for a company office development, covering the preparation of a detailed Bill of Quantities (BOQ) and overall project cost analysis. The estimate includes material quantities, labor costs, equipment requirements, and other construction-related expenses. The project focuses on accurate quantity takeoffs, cost evaluation, and budget planning to support efficient resource allocation and informed project decision-making.',
          location: 'Philippines',
        },
        '4': {
          title: 'Plan and Visualization',
          description: 'A comprehensive architectural planning and visualization project for a luxury residential house, featuring a detailed floor plan and high-end 3D renderings.',
          location: 'Philippines',
        },
        '5': {
          title: 'Shelves Design',
          description: 'A comprehensive architectural and structural drafting project focused on custom shelving design for U.S.-based clients. The project involves developing detailed technical drawings, dimensions, material specifications, and structural considerations to ensure functionality, durability, and visual appeal.',
          location: 'Philippines',
        },
        '6': {
          title: 'Urban Planning',
          description: 'An integrated urban and landscape planning project focused on designing a sustainable community within a terraced agricultural landscape. The master plan incorporates residential houses strategically positioned along the natural terrain, with carefully planned pathways, access roads, and interconnected water channels.',
          location: 'Philippines',
        },
      },
    },
    projectModal: {
      expand: 'Expand',
      closePreview: 'Close Preview',
      remoteLocation: 'Philippines & Remote Worldwide',
    },
    testimonials: {
      title: 'Client Endorsements',
      subtitle: 'Trusted by private clients & studios',
      intro: "Hearing how my design or visualization impacts a client's project is the most rewarding part of my process. Their success is a reflection of our close collaboration.",
      items: [
        {
          text: 'Her drafting skills are solid and she always delivers on time. She has been a great extension of our team.',
          author: 'Anonymous',
          role: 'Lead Architect',
          company: 'USA',
        },
        {
          text: 'The 3D visualizations she provided were excellent. They really helped us present our ideas clearly to our clients.',
          author: 'Anonymous',
          role: 'Interior Designer',
          company: 'Australia',
        },
        {
          text: 'Her cost estimates are very detailed and accurate. She is easy to work with and highly professional.',
          author: 'Anonymous',
          role: 'Project Manager',
          company: 'Canada',
        },
      ],
    },
    contact: {
      title: 'Connect',
      subtitle: 'Get in Touch',
      intro: 'Ready to start your next architectural project? Reach out for a consultation or a detailed cost estimate tailored to your vision.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      locationLine1: 'Remote worldwide',
      locationLine2: 'Based in Asia-Pacific Timezone',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'John Doe',
      emailAddressLabel: 'Email Address',
      projectTypeLabel: 'Project Type',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Tell us about your project goals and requirements...',
      validationError: 'Please complete your name, email address, and message.',
      invalidEmailError: 'Please enter a valid email address.',
      sendButton: 'Send Message',
      whatsappButton: 'Send via WhatsApp',
      openingGmail: 'Opening Gmail compose for',
      openInGmail: 'Open in Gmail',
      copyDetails: 'Copy Details',
      copied: 'Copied',
    },
    footer: {
      tagline: 'Crafting architectural precision through estimates, renderings, and roadway design.',
      linkedin: 'Connect with me on LinkedIn',
      copyright: '© 2024 Allana Jeanne Baloy. All Rights Reserved.',
    },
  },

  fil: {
    nav: {
      about: 'Tungkol',
      services: 'Mga Serbisyo',
      portfolio: 'Portpolyo',
      resume: 'Resume',
      letsTalk: 'Makipag-ugnayan',
      theme: 'Tema',
      language: 'Wika',
    },
    hero: {
      titleLine1: 'Architectural',
      titleLine2: 'Virtual Assistant',
      subtitleBefore: 'Nagbibigay ng eksaktong ',
      subtitleEstimates: 'cost estimates',
      subtitleMiddle: ', makatotohanang ',
      subtitleVisuals: '3D visualizations',
      subtitleAfter: ', at detalyadong suporta sa drafting.',
      viewProjects: 'Tingnan ang mga Proyekto',
      contactMe: 'Makipag-ugnayan',
    },
    softwareStack: {
      heading: 'Mga Kasangkapan at Plataporma',
    },
    about: {
      title: 'Ang Arkitekto',
      subtitle: 'Tungkol kay Allana',
      quote: '"Nakatuon sa pagbibigay ng maaasahan at de-kalidad na suporta upang makapagpokus ka sa malikhaing bahagi ng iyong mga proyekto."',
      bio1: 'Ako ay isang Architectural Virtual Assistant na may matibay na karanasan sa arkitektura at konstruksyon. Tinutulungan ko ang mga arkitekto, interior designer, at kontratista na pabilisin ang daloy ng trabaho sa pamamagitan ng drafting, 3D modeling, at cost estimating.',
      bio2: 'Kailangan mo man ng isang residential rendering, detalyadong construction documents, o kumpletong cost estimate, nagbibigay ako ng mabilis, maayos, at tumpak na resulta para sa iyong proyekto.',
      yearsLabel: 'Taon ng Karanasan',
      projectsLabel: 'Proyektong Natapos',
    },
    services: {
      title: 'Mga Serbisyong Arkitektural',
      subtitle: 'Kadalubhasaan at Katumpakan',
      footerTag: 'Pamantayan ng Kalidad at Integridad',
      viewSamples: 'Tingnan ang mga Halimbawa',
      items: {
        'Cost Estimates': {
          title: 'Architectural Estimates',
          description: 'Pagbibigay ng detalyado at tumpak na cost estimates, kabilang ang Bills of Quantities (BOQ) para sa iba’t ibang proyekto.',
        },
        'Architectural Rendering': {
          title: '3D Visualization',
          description: 'Paglikha ng makatotohanang 3D renderings upang malinaw at epektibong maipakita ang iyong mga disenyo sa mga kliyente.',
        },
        'Roadway Design': {
          title: 'Roadway Design',
          description: 'Pagtulong sa layout at pagpaplano para sa mga kalsada, subdibisyon, at imprastraktura sa pagpapaunlad ng lote.',
        },
        'Plans & Drafting': {
          title: 'CAD Drafting',
          description: 'Paghahatid ng malinis, organisado, at eksaktong teknikal na guhit batay sa iyong mga sketch at espesipikasyon.',
        },
      },
    },
    gallery: {
      title: 'Mga Gawa at Disenyo',
      subtitle: 'Mga Piling Proyekto',
      allFilter: 'Lahat',
      categories: {
        'Architectural Rendering': 'Architectural Rendering',
        'Cost Estimates': 'Cost Estimates',
        'Roadway Design': 'Roadway Design',
        'Plans & Drafting': 'Mga Plano at Drafting',
      },
      projects: {
        '1': {
          title: 'Modernong Residensyal na Villa',
          description: 'High-end at photorealistic na 3D architectural visualization ng isang modernong residensyal na villa na nagpapakita ng kontemporaryong arkitektura, malilinis na linya, at maayos na ugnayan ng loob at labas ng tahanan.',
          location: 'Pilipinas',
        },
        '2': {
          title: 'Pagpaplano ng Kalsada',
          description: 'Proyektong pang-imprastraktura na nakatuon sa pagpapaunlad ng dedicated busway system sa lugar ng Monumento sa Metro Manila upang mapabuti ang daloy ng trapiko at pampublikong transportasyon.',
          location: 'Maynila, Pilipinas',
        },
        '3': {
          title: 'Komprehensibong Estimate',
          description: 'Detalyadong construction cost estimation at Bill of Quantities (BOQ) para sa isang pagpapaunlad ng opisina ng kumpanya, kabilang ang mga materyales, paggawa, at kagamitan.',
          location: 'Pilipinas',
        },
        '4': {
          title: 'Plano at Biswalisasyon',
          description: 'Komprehensibong architectural planning at visualization para sa isang marangyang tahanan, na nagtatampok ng detalyadong floor plan at high-end na 3D renderings.',
          location: 'Pilipinas',
        },
        '5': {
          title: 'Disenyo ng mga Istante',
          description: 'Detalyadong architectural at structural drafting para sa pasadyang disenyo ng istante para sa mga kliyente sa U.S., kabilang ang teknikal na guhit at espesipikasyon ng materyales.',
          location: 'Pilipinas',
        },
        '6': {
          title: 'Pagpaplanong Urban',
          description: 'Pinagsamang urban at landscape planning para sa isang napapanatiling komunidad sa terraced agricultural landscape na may maayos na daluyan ng tubig at kalsada.',
          location: 'Pilipinas',
        },
      },
    },
    projectModal: {
      expand: 'Palakihin',
      closePreview: 'Isara ang Preview',
      remoteLocation: 'Pilipinas at Remote sa Buong Mundo',
    },
    testimonials: {
      title: 'Mga Rekomendasyon ng Kliyente',
      subtitle: 'Pinagkakatiwalaan ng mga kliyente at studio',
      intro: 'Ang marinig kung paano nakakatulong ang aking disenyo o biswalisasyon sa proyekto ng kliyente ang pinakamasarap na bahagi ng aking trabaho.',
      items: [
        {
          text: 'Matibay ang kanyang kasanayan sa drafting at palaging nasa oras maghatid. Napakalaking tulong niya sa aming koponan.',
          author: 'Hindi Nagpakilala',
          role: 'Lead Architect',
          company: 'USA',
        },
        {
          text: 'Napakahusay ng mga 3D visualization na ibinigay niya. Malaki ang naitulong nito upang malinaw naming maipakita ang aming mga ideya sa kliyente.',
          author: 'Hindi Nagpakilala',
          role: 'Interior Designer',
          company: 'Australia',
        },
        {
          text: 'Napakadetalyado at eksakto ang kanyang mga cost estimate. Madali siyang katrabaho at napakapropesyonal.',
          author: 'Hindi Nagpakilala',
          role: 'Project Manager',
          company: 'Canada',
        },
      ],
    },
    contact: {
      title: 'Makipag-ugnayan',
      subtitle: 'Makipag-usap sa Amin',
      intro: 'Handa ka na bang simulan ang iyong susunod na proyektong arkitektural? Magpadala ng mensahe para sa konsultasyon o detalyadong cost estimate.',
      emailLabel: 'Email',
      phoneLabel: 'Telepono',
      locationLabel: 'Lokasyon',
      locationLine1: 'Remote sa buong mundo',
      locationLine2: 'Nakabase sa Asia-Pacific Timezone',
      fullNameLabel: 'Buong Pangalan',
      fullNamePlaceholder: 'Juan Dela Cruz',
      emailAddressLabel: 'Email Address',
      projectTypeLabel: 'Uri ng Proyekto',
      messageLabel: 'Iyong Mensahe',
      messagePlaceholder: 'Ikwento sa amin ang mga layunin at pangangailangan ng iyong proyekto...',
      validationError: 'Pakipunan ang iyong pangalan, email address, at mensahe.',
      invalidEmailError: 'Maglagay ng wastong email address.',
      sendButton: 'Magpadala ng Mensahe',
      whatsappButton: 'Ipadala sa WhatsApp',
      openingGmail: 'Binubuksan ang Gmail para kay',
      openInGmail: 'Buksan sa Gmail',
      copyDetails: 'Kopyahin ang Detalye',
      copied: 'Nakopya',
    },
    footer: {
      tagline: 'Paglikha ng katumpakang arkitektural sa pamamagitan ng estimates, renderings, at roadway design.',
      linkedin: 'Makipag-ugnayan sa LinkedIn',
      copyright: '© 2024 Allana Jeanne Baloy. Nakalaan ang Lahat ng Karapatan.',
    },
  },

  zh: {
    nav: {
      about: '关于',
      services: '服务',
      portfolio: '作品集',
      resume: '简历',
      letsTalk: '联系合作',
      theme: '主题',
      language: '语言',
    },
    hero: {
      titleLine1: '建筑设计',
      titleLine2: '虚拟助理',
      subtitleBefore: '提供精准的建筑',
      subtitleEstimates: '工程预算',
      subtitleMiddle: '、逼真的',
      subtitleVisuals: '3D 效果表现',
      subtitleAfter: '以及精细的制图支持。',
      viewProjects: '查看作品',
      contactMe: '联系我',
    },
    softwareStack: {
      heading: '常用工具与平台',
    },
    about: {
      title: '关于建筑师',
      subtitle: '认识 Allana',
      quote: '“致力于提供可靠、高品质的专业支持，让您专注于项目最具创造力的核心部分。”',
      bio1: '我是一名拥有丰富建筑与施工背景的建筑虚拟助理，协助建筑师、室内设计师和承包商通过高效制图、3D建模与工程预算优化工作流程。',
      bio2: '无论是住宅效果图、精细施工图还是完整的工程量清单与成本估算，我都能根据您的需求按时交付清晰准确的成果。',
      yearsLabel: '年从业经验',
      projectsLabel: '个交付项目',
    },
    services: {
      title: '建筑专业服务',
      subtitle: '专业与精准',
      footerTag: '品质与诚信标准',
      viewSamples: '查看作品示例',
      items: {
        'Cost Estimates': {
          title: '建筑工程预算',
          description: '为各类建筑项目提供详尽准确的成本估算与工程量清单（BOQ）。',
        },
        'Architectural Rendering': {
          title: '3D 建筑可视化',
          description: '制作逼真的 3D 渲染效果图，助您向客户清晰呈现设计方案。',
        },
        'Roadway Design': {
          title: '道路规划设计',
          description: '协助完成道路系统、住宅区及场地开发基础设施的规划与布局。',
        },
        'Plans & Drafting': {
          title: 'CAD 施工制图',
          description: '根据您的草图与技术规范，交付整洁规范、精准严谨的技术图纸。',
        },
      },
    },
    gallery: {
      title: '作品与项目',
      subtitle: '精选案例',
      allFilter: '全部',
      categories: {
        'Architectural Rendering': '建筑渲染',
        'Cost Estimates': '工程预算',
        'Roadway Design': '道路设计',
        'Plans & Drafting': '平面与制图',
      },
      projects: {
        '1': {
          title: '现代住宅别墅',
          description: '高端写实 3D 建筑效果表现，展现当代建筑简洁线条、优质材料、大面积采光玻璃与室内外空间的无缝融合。',
          location: '菲律宾',
        },
        '2': {
          title: '城市道路规划',
          description: '聚焦马尼拉大都会 Monumento 区域专用公交走廊系统的交通基础设施规划，优化交通流线并提升通勤效率。',
          location: '菲律宾马尼拉',
        },
        '3': {
          title: '综合办公楼预算',
          description: '针对企业办公开发项目的全面施工成本估算，涵盖详细工程量清单（BOQ）、材料、人工及设备费用分析。',
          location: '菲律宾',
        },
        '4': {
          title: '豪宅平面与效果表现',
          description: '面向高端住宅的综合建筑规划与可视化项目，包含精细平面布置图与高品质 3D 室内外渲染。',
          location: '菲律宾',
        },
        '5': {
          title: '定制货架结构设计',
          description: '为美国客户打造的定制货架建筑与结构制图项目，涵盖技术图纸、尺寸标注与材料结构规范。',
          location: '菲律宾',
        },
        '6': {
          title: '梯田生态城市规划',
          description: '结合梯田农业景观的综合城市与景观总体规划，统筹住宅布局、道路通道与生态灌溉排水水系。',
          location: '菲律宾',
        },
      },
    },
    projectModal: {
      expand: '全屏查看',
      closePreview: '关闭预览',
      remoteLocation: '菲律宾 · 面向全球远程合作',
    },
    testimonials: {
      title: '客户评价',
      subtitle: '深受私人客户与设计工作室信赖',
      intro: '见证我的设计与可视化成果如何推动客户项目落地，是工作中最有成就感的部分。客户的成功源自紧密的团队协作。',
      items: [
        {
          text: '她的制图功底扎实，总是按时交付，已经成为我们团队不可或缺的得力延伸。',
          author: '匿名客户',
          role: '主创建筑师',
          company: '美国',
        },
        {
          text: '她提供的 3D 效果图非常出色，极大帮助我们向客户清晰传达设计理念。',
          author: '匿名客户',
          role: '室内设计师',
          company: '澳大利亚',
        },
        {
          text: '她的成本估算非常细致准确，沟通顺畅且极具专业精神。',
          author: '匿名客户',
          role: '项目经理',
          company: '加拿大',
        },
      ],
    },
    contact: {
      title: '联系我们',
      subtitle: '开始沟通',
      intro: '准备启动您的下一个建筑项目了吗？欢迎联系咨询或获取为您量身定制的详细工程预算。',
      emailLabel: '电子邮箱',
      phoneLabel: '联系电话',
      locationLabel: '服务区域',
      locationLine1: '全球远程协作',
      locationLine2: '位于亚太时区',
      fullNameLabel: '您的姓名',
      fullNamePlaceholder: '张伟',
      emailAddressLabel: '邮箱地址',
      projectTypeLabel: '项目类型',
      messageLabel: '项目需求',
      messagePlaceholder: '请简要介绍您的项目目标与具体需求...',
      validationError: '请完整填写您的姓名、邮箱地址和项目需求。',
      invalidEmailError: '请输入有效的电子邮箱地址。',
      sendButton: '发送邮件',
      whatsappButton: '通过 WhatsApp 发送',
      openingGmail: '正在打开 Gmail 发送至',
      openInGmail: '在 Gmail 中打开',
      copyDetails: '复制详情',
      copied: '已复制',
    },
    footer: {
      tagline: '以工程预算、三维渲染与道路设计成就建筑精准之美。',
      linkedin: '在 LinkedIn 上联系',
      copyright: '© 2024 Allana Jeanne Baloy. 保留所有权利。',
    },
  },

  ja: {
    nav: {
      about: 'プロフィール',
      services: 'サービス',
      portfolio: '実績',
      resume: '履歴書',
      letsTalk: 'お問い合わせ',
      theme: 'テーマ',
      language: '言語',
    },
    hero: {
      titleLine1: '建築専門',
      titleLine2: 'バーチャルアシスタント',
      subtitleBefore: '正確な建築',
      subtitleEstimates: '積算・見積もり',
      subtitleMiddle: '、高品質な',
      subtitleVisuals: '3Dビジュアライゼーション',
      subtitleAfter: '、精密な作図サポートをご提供します。',
      viewProjects: '作品を見る',
      contactMe: 'お問い合わせ',
    },
    softwareStack: {
      heading: '対応ツール・プラットフォーム',
    },
    about: {
      title: '建築家について',
      subtitle: 'Allana のご紹介',
      quote: '「信頼できる高品質なサポートにより、お客様がデザインの創造的な領域に集中できるよう尽力しています。」',
      bio1: '建築および建設分野での確かな実務経験を持つ建築バーチャルアシスタントです。作図、3Dモデリング、積算業務を通じて、建築家やインテリアデザイナー、施工会社の業務効率化を支援しています。',
      bio2: '住宅の3Dパースから詳細な実施設計図面、包括的なコスト積算まで、ご要望に合わせた迅速かつ正確な成果物をお届けします。',
      yearsLabel: '年の実務経験',
      projectsLabel: '件の納品実績',
    },
    services: {
      title: '建築サービス',
      subtitle: '専門性と精度',
      footerTag: '品質と誠実さの基準',
      viewSamples: '制作事例を見る',
      items: {
        'Cost Estimates': {
          title: '建築積算・見積もり',
          description: '各種プロジェクト向けに詳細な数量調書（BOQ）および精度の高いコスト見積もりを作成します。',
        },
        'Architectural Rendering': {
          title: '3Dビジュアライゼーション',
          description: 'クライアントへ設計意図を分かりやすく伝える、リアルで魅力的な3Dパースを制作します。',
        },
        'Roadway Design': {
          title: '道路・インフラ設計',
          description: '道路レイアウト、宅地造成、敷地インフラ計画の設計・作図をサポートします。',
        },
        'Plans & Drafting': {
          title: 'CAD作図',
          description: 'スケッチや仕様書をもとに、整理された高精度な技術図面を丁寧に仕上げます。',
        },
      },
    },
    gallery: {
      title: '制作実績',
      subtitle: '厳選プロジェクト',
      allFilter: 'すべて',
      categories: {
        'Architectural Rendering': '建築レンダリング',
        'Cost Estimates': '積算・見積',
        'Roadway Design': '道路設計',
        'Plans & Drafting': '図面・CAD作図',
      },
      projects: {
        '1': {
          title: 'モダン・レジデンシャル・ヴィラ',
          description: '洗練された現代建築の美しさと上質な居住空間を表現した、高精細フォトリアル3D建築パース。直線的なデザインと自然光の調和を追求しました。',
          location: 'フィリピン',
        },
        '2': {
          title: '道路交通計画',
          description: 'マニラ首都圏モニュメント地区における専用バスレーン整備を中心とした交通インフラ計画。交通流の最適化と利便性向上を図りました。',
          location: 'フィリピン・マニラ',
        },
        '3': {
          title: '複合オフィス積算計画',
          description: '企業オフィス開発向けの包括的な建設コスト積算および数量調書（BOQ）作成。資材・労務・機材費用を精密に算出しました。',
          location: 'フィリピン',
        },
        '4': {
          title: '邸宅平面図＆パース制作',
          description: 'ラグジュアリー住宅の平面計画とハイエンド3Dレンダリングを組み合わせた建築プランニング・ビジュアライゼーション。',
          location: 'フィリピン',
        },
        '5': {
          title: 'カスタムシェルフ設計',
          description: '米国クライアント向けの特注シェルフに関する建築・構造作図。寸法精度と耐久性、意匠性を両立した技術図面を作成しました。',
          location: 'フィリピン',
        },
        '6': {
          title: '棚田地域の都市・ランドスケープ計画',
          description: '棚田の自然地形と調和する持続可能なコミュニティ計画。住宅配置、アクセス道路、灌漑・排水水路を統合的に設計しました。',
          location: 'フィリピン',
        },
      },
    },
    projectModal: {
      expand: '拡大表示',
      closePreview: 'プレビューを閉じる',
      remoteLocation: 'フィリピン・世界各国リモート対応',
    },
    testimonials: {
      title: 'クライアントの声',
      subtitle: '個人クライアント・設計事務所からの信頼',
      intro: '自分のデザインや3Dパースがプロジェクトの成功に貢献できたと聞くことが、何よりのやりがいです。',
      items: [
        {
          text: '作図スキルが非常に高く、常に納期通りに納品してくれます。私たちのチームにとって欠かせない存在です。',
          author: '匿名',
          role: 'リードアーキテクト',
          company: 'アメリカ',
        },
        {
          text: '提供してくれた3Dパースは素晴らしく、クライアントへの提案がとてもスムーズになりました。',
          author: '匿名',
          role: 'インテリアデザイナー',
          company: 'オーストラリア',
        },
        {
          text: '積算が非常に詳細で正確です。コミュニケーションも取りやすく、プロフェッショナルな仕事ぶりです。',
          author: '匿名',
          role: 'プロジェクトマネージャー',
          company: 'カナダ',
        },
      ],
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'ご相談はこちら',
      intro: '次の建築プロジェクトを始める準備はできましたか？ご相談や詳細なコスト見積もりについてお気軽にお問い合わせください。',
      emailLabel: 'メール',
      phoneLabel: '電話',
      locationLabel: '拠点',
      locationLine1: '世界各国リモート対応',
      locationLine2: 'アジア太平洋タイムゾーン拠点',
      fullNameLabel: 'お名前',
      fullNamePlaceholder: '山田 太郎',
      emailAddressLabel: 'メールアドレス',
      projectTypeLabel: 'プロジェクト種別',
      messageLabel: 'お問い合わせ内容',
      messagePlaceholder: 'プロジェクトの目的やご要望をお聞かせください...',
      validationError: 'お名前、メールアドレス、お問い合わせ内容をご入力ください。',
      invalidEmailError: '有効なメールアドレスをご入力ください。',
      sendButton: 'メッセージを送信',
      whatsappButton: 'WhatsAppで送信',
      openingGmail: 'Gmailの作成画面を開いています（宛先：',
      openInGmail: 'Gmailで開く',
      copyDetails: '内容をコピー',
      copied: 'コピー済み',
    },
    footer: {
      tagline: '積算・3Dレンダリング・道路設計を通じて、精密な建築サポートを提供します。',
      linkedin: 'LinkedInでつながる',
      copyright: '© 2024 Allana Jeanne Baloy. All Rights Reserved.',
    },
  },

  de: {
    nav: {
      about: 'Über mich',
      services: 'Leistungen',
      portfolio: 'Portfolio',
      resume: 'Lebenslauf',
      letsTalk: 'Kontakt',
      theme: 'Design',
      language: 'Sprache',
    },
    hero: {
      titleLine1: 'Architektur-',
      titleLine2: 'Assistenz (Remote)',
      subtitleBefore: 'Präzise ',
      subtitleEstimates: 'Baukostenschätzungen',
      subtitleMiddle: ', realistische ',
      subtitleVisuals: '3D-Visualisierungen',
      subtitleAfter: ' und detaillierte CAD-Zeichenunterstützung.',
      viewProjects: 'Projekte ansehen',
      contactMe: 'Kontakt aufnehmen',
    },
    softwareStack: {
      heading: 'Tools & Plattformen',
    },
    about: {
      title: 'Die Architektin',
      subtitle: 'Über Allana',
      quote: '„Engagiert für zuverlässige, hochwertige Unterstützung, damit Sie sich ganz auf die kreative Seite Ihrer Projekte konzentrieren können.“',
      bio1: 'Ich bin Architectural Virtual Assistant mit fundiertem Hintergrund in Architektur und Bauwesen. Ich unterstütze Architekten, Innenarchitekten und Bauunternehmen durch CAD-Zeichnung, 3D-Modellierung und Kalkulation.',
      bio2: 'Ob einzelne Wohnvisualisierung, komplexe Ausführungsplanung oder detaillierte Kostenschätzung – ich liefere pünktliche, strukturierte und präzise Ergebnisse.',
      yearsLabel: 'Jahre Erfahrung',
      projectsLabel: 'Abgeschlossene Projekte',
    },
    services: {
      title: 'Architektur-Leistungen',
      subtitle: 'Kompetenz & Präzision',
      footerTag: 'Standard für Qualität & Integrität',
      viewSamples: 'Arbeitsproben ansehen',
      items: {
        'Cost Estimates': {
          title: 'Baukostenschätzung',
          description: 'Detaillierte und präzise Kostenschätzungen einschließlich Leistungsverzeichnissen (BOQ) für vielfältige Bauprojekte.',
        },
        'Architectural Rendering': {
          title: '3D-Visualisierung',
          description: 'Fotorealistische 3D-Renderings, mit denen Sie Ihre Entwürfe überzeugend und klar präsentieren können.',
        },
        'Roadway Design': {
          title: 'Straßenplanung',
          description: 'Unterstützung bei Trassierung und Planung von Straßen, Erschließungen und Infrastrukturprojekten.',
        },
        'Plans & Drafting': {
          title: 'CAD-Zeichnung',
          description: 'Saubere, strukturierte und maßgenaue technische Zeichnungen auf Basis Ihrer Skizzen und Vorgaben.',
        },
      },
    },
    gallery: {
      title: 'Werke & Projekte',
      subtitle: 'Ausgewählte Arbeiten',
      allFilter: 'Alle',
      categories: {
        'Architectural Rendering': '3D-Rendering',
        'Cost Estimates': 'Kostenschätzung',
        'Roadway Design': 'Straßenplanung',
        'Plans & Drafting': 'Pläne & CAD',
      },
      projects: {
        '1': {
          title: 'Moderne Wohnvilla',
          description: 'Hochwertige, fotorealistische 3D-Architekturvisualisierung einer modernen Villa mit klaren Linien, edlen Materialien und nahtlosem Übergang zwischen Innen- und Außenraum.',
          location: 'Philippinen',
        },
        '2': {
          title: 'Straßen- & Verkehrsplanung',
          description: 'Verkehrsinfrastrukturprojekt zur Entwicklung eines eigenen Busway-Systems im Raum Monumento (Metro Manila) zur Optimierung des Verkehrsflusses.',
          location: 'Manila, Philippinen',
        },
        '3': {
          title: 'Bürokomplex-Kalkulation',
          description: 'Umfassende Baukostenschätzung für ein Büroprojekt inklusive detailliertem Leistungsverzeichnis (BOQ), Materialmengen, Lohn- und Gerätekosten.',
          location: 'Philippinen',
        },
        '4': {
          title: 'Grundriss & Visualisierung',
          description: 'Ganzheitliche Architekturplanung und Visualisierung für ein luxuriöses Wohnhaus mit detailliertem Grundriss und hochwertigen 3D-Renderings.',
          location: 'Philippinen',
        },
        '5': {
          title: 'Regalsystem-Konstruktion',
          description: 'Technische und konstruktive CAD-Ausarbeitung maßgeschneiderter Regalsysteme für US-Kunden mit präzisen Maßen und Materialvorgaben.',
          location: 'Philippinen',
        },
        '6': {
          title: 'Städtebau & Landschaftsplanung',
          description: 'Integrierter Masterplan für eine nachhaltige Siedlung in einer terrassierten Agrarlandschaft mit abgestimmten Wegen, Straßen und Wasserkanälen.',
          location: 'Philippinen',
        },
      },
    },
    projectModal: {
      expand: 'Vergrößern',
      closePreview: 'Vorschau schließen',
      remoteLocation: 'Philippinen & weltweit remote',
    },
    testimonials: {
      title: 'Kundenstimmen',
      subtitle: 'Vertrauen von Studios & Privatkunden',
      intro: 'Zu hören, wie meine Entwürfe oder Visualisierungen ein Kundenprojekt voranbringen, ist der schönste Teil meiner Arbeit.',
      items: [
        {
          text: 'Ihre Zeichenfähigkeiten sind hervorragend und sie liefert immer pünktlich. Sie ist eine großartige Erweiterung unseres Teams.',
          author: 'Anonym',
          role: 'Leitender Architekt',
          company: 'USA',
        },
        {
          text: 'Die von ihr erstellten 3D-Visualisierungen waren exzellent und haben uns geholfen, unsere Ideen den Kunden klar zu präsentieren.',
          author: 'Anonym',
          role: 'Innenarchitektin',
          company: 'Australien',
        },
        {
          text: 'Ihre Kostenschätzungen sind sehr detailliert und genau. Die Zusammenarbeit mit ihr ist angenehm und äußerst professionell.',
          author: 'Anonym',
          role: 'Projektmanager',
          company: 'Kanada',
        },
      ],
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Sprechen wir',
      intro: 'Bereit für Ihr nächstes Architekturprojekt? Kontaktieren Sie mich für eine Beratung oder eine maßgeschneiderte Kostenschätzung.',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      locationLabel: 'Standort',
      locationLine1: 'Weltweit remote',
      locationLine2: 'Zeitzone Asien-Pazifik',
      fullNameLabel: 'Vollständiger Name',
      fullNamePlaceholder: 'Max Mustermann',
      emailAddressLabel: 'E-Mail-Adresse',
      projectTypeLabel: 'Projektart',
      messageLabel: 'Ihre Nachricht',
      messagePlaceholder: 'Erzählen Sie mir von Ihren Projektzielen und Anforderungen...',
      validationError: 'Bitte geben Sie Ihren Namen, Ihre E-Mail-Adresse und eine Nachricht ein.',
      invalidEmailError: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      sendButton: 'Nachricht senden',
      whatsappButton: 'Per WhatsApp senden',
      openingGmail: 'Gmail-Entwurf wird geöffnet für',
      openInGmail: 'In Gmail öffnen',
      copyDetails: 'Details kopieren',
      copied: 'Kopiert',
    },
    footer: {
      tagline: 'Architektonische Präzision durch Kalkulation, 3D-Rendering und Straßenplanung.',
      linkedin: 'Auf LinkedIn vernetzen',
      copyright: '© 2024 Allana Jeanne Baloy. Alle Rechte vorbehalten.',
    },
  },

  hi: {
    nav: {
      about: 'परिचय',
      services: 'सेवाएँ',
      portfolio: 'पोर्टफोलियो',
      resume: 'रिज़्यूमे',
      letsTalk: 'संपर्क करें',
      theme: 'थीम',
      language: 'भाषा',
    },
    hero: {
      titleLine1: 'आर्किटेक्चरल',
      titleLine2: 'वर्चुअल असिस्टेंट',
      subtitleBefore: 'सटीक आर्किटेक्चरल ',
      subtitleEstimates: 'लागत अनुमान',
      subtitleMiddle: ', यथार्थवादी ',
      subtitleVisuals: '3D विज़ुअलाइज़ेशन',
      subtitleAfter: ', और विस्तृत ड्राफ्टिंग सहायता।',
      viewProjects: 'प्रोजेक्ट देखें',
      contactMe: 'संपर्क करें',
    },
    softwareStack: {
      heading: 'उपकरण और प्लेटफ़ॉर्म',
    },
    about: {
      title: 'आर्किटेक्ट के बारे में',
      subtitle: 'Allana का परिचय',
      quote: '"विश्वसनीय और उच्च-गुणवत्ता सहायता प्रदान करने के लिए समर्पित, ताकि आप अपने प्रोजेक्ट के रचनात्मक पक्ष पर ध्यान केंद्रित कर सकें।"',
      bio1: 'मैं आर्किटेक्चर और निर्माण क्षेत्र में मजबूत अनुभव रखने वाली एक आर्किटेक्चरल वर्चुअल असिस्टेंट हूँ। मैं ड्राफ्टिंग, 3D मॉडलिंग और लागत अनुमान कार्यों के माध्यम से आर्किटेक्ट्स, इंटीरियर डिज़ाइनर्स और ठेकेदारों का कार्यप्रवाह सरल बनाती हूँ।',
      bio2: 'चाहे आपको एक आवासीय रेंडरिंग की आवश्यकता हो, निर्माण दस्तावेजों के सेट की, या विस्तृत लागत अनुमान की — मैं समय पर, व्यवस्थित और सटीक परिणाम प्रदान करती हूँ।',
      yearsLabel: 'वर्षों का अनुभव',
      projectsLabel: 'पूर्ण प्रोजेक्ट्स',
    },
    services: {
      title: 'आर्किटेक्चरल सेवाएँ',
      subtitle: 'विशेषज्ञता और सटीकता',
      footerTag: 'गुणवत्ता और ईमानदारी का मानक',
      viewSamples: 'कार्य नमूने देखें',
      items: {
        'Cost Estimates': {
          title: 'आर्किटेक्चरल अनुमान',
          description: 'विभिन्न परियोजनाओं के लिए बिल ऑफ़ क्वांटिटीज़ (BOQ) सहित विस्तृत और सटीक लागत अनुमान।',
        },
        'Architectural Rendering': {
          title: '3D विज़ुअलाइज़ेशन',
          description: 'क्लाइंट्स को आपके डिज़ाइन स्पष्ट और प्रभावी ढंग से प्रस्तुत करने के लिए यथार्थवादी 3D रेंडरिंग।',
        },
        'Roadway Design': {
          title: 'सड़क डिज़ाइन',
          description: 'सड़कों, सबडिविज़न और साइट विकास अवसंरचना के लेआउट और योजना में सहायता।',
        },
        'Plans & Drafting': {
          title: 'CAD ड्राफ्टिंग',
          description: 'आपके स्केच और विनिर्देशों के आधार पर स्वच्छ, व्यवस्थित और सटीक तकनीकी चित्र।',
        },
      },
    },
    gallery: {
      title: 'कार्य और रचनाएँ',
      subtitle: 'चयनित प्रोजेक्ट्स',
      allFilter: 'सभी',
      categories: {
        'Architectural Rendering': 'आर्किटेक्चरल रेंडरिंग',
        'Cost Estimates': 'लागत अनुमान',
        'Roadway Design': 'सड़क डिज़ाइन',
        'Plans & Drafting': 'प्लान और ड्राफ्टिंग',
      },
      projects: {
        '1': {
          title: 'आधुनिक आवासीय विला',
          description: 'आधुनिक आवासीय विला का उच्च-स्तरीय फ़ोटोरियलिस्टिक 3D विज़ुअलाइज़ेशन, जिसमें स्वच्छ रेखाएँ, प्रीमियम सामग्री और इनडोर-आउटडोर का सहज जुड़ाव दिखाया गया है।',
          location: 'फिलीपींस',
        },
        '2': {
          title: 'सड़क और परिवहन योजना',
          description: 'मेट्रो मनीला के मॉन्यूमेंटो क्षेत्र में समर्पित बसवे प्रणाली के विकास और यातायात प्रवाह को बेहतर बनाने पर केंद्रित परिवहन अवसंरचना परियोजना।',
          location: 'मनीला, फिलीपींस',
        },
        '3': {
          title: 'कॉम्प्लेक्स लागत अनुमान',
          description: 'एक कंपनी कार्यालय विकास परियोजना के लिए विस्तृत बिल ऑफ़ क्वांटिटीज़ (BOQ) और संपूर्ण निर्माण लागत विश्लेषण।',
          location: 'फिलीपींस',
        },
        '4': {
          title: 'फ्लोर प्लान और विज़ुअलाइज़ेशन',
          description: 'एक लक्ज़री आवासीय घर के लिए विस्तृत फ्लोर प्लान और उच्च-स्तरीय 3D रेंडरिंग के साथ समग्र वास्तुशिल्प योजना।',
          location: 'फिलीपींस',
        },
        '5': {
          title: 'कस्टम शेल्विंग डिज़ाइन',
          description: 'अमेरिकी ग्राहकों के लिए कस्टम शेल्विंग डिज़ाइन हेतु तकनीकी ड्राइंग, आयाम और संरचनात्मक विनिर्देश।',
          location: 'फिलीपींस',
        },
        '6': {
          title: 'शहरी और परिदृश्य योजना',
          description: 'सीढ़ीदार कृषि परिदृश्य में टिकाऊ समुदाय के लिए समेकित मास्टर प्लान, जिसमें आवास, सड़कें और सिंचाई जल निकासी चैनल शामिल हैं।',
          location: 'फिलीपींस',
        },
      },
    },
    projectModal: {
      expand: 'बड़ा करें',
      closePreview: 'पूर्वावलोकन बंद करें',
      remoteLocation: 'फिलीपींस और विश्वभर में रिमोट',
    },
    testimonials: {
      title: 'ग्राहक प्रशंसापत्र',
      subtitle: 'क्लाइंट्स और स्टूडियो द्वारा विश्वसनीय',
      intro: 'यह सुनना कि मेरे डिज़ाइन या विज़ुअलाइज़ेशन ने किसी क्लाइंट के प्रोजेक्ट को कैसे सफल बनाया, मेरे काम का सबसे संतोषजनक हिस्सा है।',
      items: [
        {
          text: 'उनका ड्राफ्टिंग कौशल बेहद मजबूत है और वे हमेशा समय पर डिलीवरी करती हैं। वे हमारी टीम का एक बेहतरीन हिस्सा रही हैं।',
          author: 'गुमनाम',
          role: 'लीड आर्किटेक्ट',
          company: 'USA',
        },
        {
          text: 'उनके द्वारा दिए गए 3D विज़ुअलाइज़ेशन उत्कृष्ट थे। इनसे हमें अपने विचार क्लाइंट्स को स्पष्ट रूप से समझाने में बहुत मदद मिली।',
          author: 'गुमनाम',
          role: 'इंटीरियर डिज़ाइनर',
          company: 'ऑस्ट्रेलिया',
        },
        {
          text: 'उनके लागत अनुमान बहुत विस्तृत और सटीक हैं। उनके साथ काम करना आसान और अत्यंत पेशेवर है।',
          author: 'गुमनाम',
          role: 'प्रोजेक्ट मैनेजर',
          company: 'कनाडा',
        },
      ],
    },
    contact: {
      title: 'संपर्क',
      subtitle: 'जुड़ें',
      intro: 'अपने अगले आर्किटेक्चरल प्रोजेक्ट की शुरुआत करने के लिए तैयार हैं? परामर्श या विस्तृत लागत अनुमान के लिए संपर्क करें।',
      emailLabel: 'ईमेल',
      phoneLabel: 'फ़ोन',
      locationLabel: 'स्थान',
      locationLine1: 'विश्वभर में रिमोट सेवा',
      locationLine2: 'एशिया-पैसिफिक टाइमज़ोन में स्थित',
      fullNameLabel: 'पूरा नाम',
      fullNamePlaceholder: 'राहुल शर्मा',
      emailAddressLabel: 'ईमेल पता',
      projectTypeLabel: 'प्रोजेक्ट प्रकार',
      messageLabel: 'आपका संदेश',
      messagePlaceholder: 'अपने प्रोजेक्ट के लक्ष्यों और आवश्यकताओं के बारे में बताएं...',
      validationError: 'कृपया अपना नाम, ईमेल पता और संदेश भरें।',
      invalidEmailError: 'कृपया एक मान्य ईमेल पता दर्ज करें।',
      sendButton: 'संदेश भेजें',
      whatsappButton: 'WhatsApp से भेजें',
      openingGmail: 'Gmail खुल रहा है:',
      openInGmail: 'Gmail में खोलें',
      copyDetails: 'विवरण कॉपी करें',
      copied: 'कॉपी हो गया',
    },
    footer: {
      tagline: 'अनुमान, रेंडरिंग और सड़क डिज़ाइन के माध्यम से वास्तुशिल्प सटीकता।',
      linkedin: 'LinkedIn पर जुड़ें',
      copyright: '© 2024 Allana Jeanne Baloy. सर्वाधिकार सुरक्षित।',
    },
  },

  es: {
    nav: {
      about: 'Sobre mí',
      services: 'Servicios',
      portfolio: 'Portafolio',
      resume: 'Currículum',
      letsTalk: 'Hablemos',
      theme: 'Tema',
      language: 'Idioma',
    },
    hero: {
      titleLine1: 'Asistente Virtual',
      titleLine2: 'de Arquitectura',
      subtitleBefore: 'Ofreciendo ',
      subtitleEstimates: 'presupuestos',
      subtitleMiddle: ' precisos, ',
      subtitleVisuals: 'visualizaciones 3D',
      subtitleAfter: ' realistas y soporte técnico de dibujo.',
      viewProjects: 'Ver Proyectos',
      contactMe: 'Contáctame',
    },
    softwareStack: {
      heading: 'Herramientas y Plataformas',
    },
    about: {
      title: 'La Arquitecta',
      subtitle: 'Sobre Allana',
      quote: '"Comprometida a brindar un apoyo confiable y de alta calidad para que puedas enfocarte en la parte creativa de tus proyectos."',
      bio1: 'Soy Asistente Virtual de Arquitectura con una sólida formación en arquitectura y construcción. Ayudo a arquitectos, diseñadores de interiores y contratistas a optimizar su flujo de trabajo mediante dibujo CAD, modelado 3D y presupuestos.',
      bio2: 'Ya sea que necesites un render residencial, un juego completo de planos constructivos o un presupuesto detallado, entrego resultados puntuales, organizados y precisos.',
      yearsLabel: 'Años de Experiencia',
      projectsLabel: 'Proyectos Entregados',
    },
    services: {
      title: 'Servicios de Arquitectura',
      subtitle: 'Experiencia y Precisión',
      footerTag: 'Estándar de Calidad e Integridad',
      viewSamples: 'Ver Muestras',
      items: {
        'Cost Estimates': {
          title: 'Presupuestos de Obra',
          description: 'Estimaciones de costos detalladas y precisas, incluyendo cuadros de cantidades (BOQ) para todo tipo de proyectos.',
        },
        'Architectural Rendering': {
          title: 'Visualización 3D',
          description: 'Creación de renders 3D realistas para ayudarte a presentar tus diseños a los clientes con total claridad.',
        },
        'Roadway Design': {
          title: 'Diseño Vial',
          description: 'Asistencia en trazado y planificación de carreteras, urbanizaciones e infraestructura de desarrollo.',
        },
        'Plans & Drafting': {
          title: 'Dibujo CAD',
          description: 'Entrega de planos técnicos limpios, organizados y exactos basados en tus bocetos y especificaciones.',
        },
      },
    },
    gallery: {
      title: 'Obras y Creaciones',
      subtitle: 'Proyectos Seleccionados',
      allFilter: 'Todos',
      categories: {
        'Architectural Rendering': 'Renderizado Arquitectónico',
        'Cost Estimates': 'Presupuestos',
        'Roadway Design': 'Diseño Vial',
        'Plans & Drafting': 'Planos y Dibujo',
      },
      projects: {
        '1': {
          title: 'Villa Residencial Moderna',
          description: 'Visualización arquitectónica 3D fotorrealista de alta gama para una villa residencial moderna, destacando líneas limpias, materiales nobles y conexión interior-exterior.',
          location: 'Filipinas',
        },
        '2': {
          title: 'Planificación Vial',
          description: 'Proyecto de infraestructura de transporte enfocado en el desarrollo de un sistema exclusivo de autobuses en la zona de Monumento, Metro Manila.',
          location: 'Manila, Filipinas',
        },
        '3': {
          title: 'Presupuesto de Complejo',
          description: 'Estimación integral de costos de construcción y cuadro de cantidades (BOQ) para un desarrollo corporativo de oficinas.',
          location: 'Filipinas',
        },
        '4': {
          title: 'Plano y Visualización',
          description: 'Planificación arquitectónica integral y visualización 3D para una residencia de lujo, con plano detallado y renders de alta gama.',
          location: 'Filipinas',
        },
        '5': {
          title: 'Diseño de Estanterías',
          description: 'Dibujo arquitectónico y estructural detallado para el diseño de estanterías a medida para clientes en EE. UU.',
          location: 'Filipinas',
        },
        '6': {
          title: 'Planificación Urbana',
          description: 'Plan maestro urbano y paisajístico integrado para una comunidad sostenible en un paisaje agrícola en terrazas con canales de agua interconectados.',
          location: 'Filipinas',
        },
      },
    },
    projectModal: {
      expand: 'Ampliar',
      closePreview: 'Cerrar Vista',
      remoteLocation: 'Filipinas y Remoto Mundial',
    },
    testimonials: {
      title: 'Testimonios de Clientes',
      subtitle: 'La confianza de clientes y estudios',
      intro: 'Escuchar cómo mi diseño o visualización impulsa el proyecto de un cliente es lo más gratificante de mi trabajo.',
      items: [
        {
          text: 'Sus habilidades de dibujo son sólidas y siempre entrega a tiempo. Ha sido una gran extensión de nuestro equipo.',
          author: 'Anónimo',
          role: 'Arquitecto Principal',
          company: 'EE. UU.',
        },
        {
          text: 'Las visualizaciones 3D que nos entregó fueron excelentes. Nos ayudaron muchísimo a presentar nuestras ideas con claridad.',
          author: 'Anónimo',
          role: 'Diseñadora de Interiores',
          company: 'Australia',
        },
        {
          text: 'Sus presupuestos son muy detallados y exactos. Es fácil trabajar con ella y sumamente profesional.',
          author: 'Anónimo',
          role: 'Gerente de Proyecto',
          company: 'Canadá',
        },
      ],
    },
    contact: {
      title: 'Conectar',
      subtitle: 'Ponte en Contacto',
      intro: '¿Listo para comenzar tu próximo proyecto arquitectónico? Escríbeme para una consulta o un presupuesto detallado a tu medida.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      locationLine1: 'Remoto en todo el mundo',
      locationLine2: 'Zona horaria Asia-Pacífico',
      fullNameLabel: 'Nombre Completo',
      fullNamePlaceholder: 'Carlos García',
      emailAddressLabel: 'Correo Electrónico',
      projectTypeLabel: 'Tipo de Proyecto',
      messageLabel: 'Tu Mensaje',
      messagePlaceholder: 'Cuéntanos sobre los objetivos y requisitos de tu proyecto...',
      validationError: 'Por favor completa tu nombre, correo electrónico y mensaje.',
      invalidEmailError: 'Por favor ingresa un correo electrónico válido.',
      sendButton: 'Enviar Mensaje',
      whatsappButton: 'Enviar por WhatsApp',
      openingGmail: 'Abriendo redacción en Gmail para',
      openInGmail: 'Abrir en Gmail',
      copyDetails: 'Copiar Detalles',
      copied: 'Copiado',
    },
    footer: {
      tagline: 'Precisión arquitectónica a través de presupuestos, renders y diseño vial.',
      linkedin: 'Conecta conmigo en LinkedIn',
      copyright: '© 2024 Allana Jeanne Baloy. Todos los derechos reservados.',
    },
  },

  ar: {
    nav: {
      about: 'نبذة عني',
      services: 'الخدمات',
      portfolio: 'الأعمال',
      resume: 'السيرة الذاتية',
      letsTalk: 'تواصل معي',
      theme: 'المظهر',
      language: 'اللغة',
    },
    hero: {
      titleLine1: 'مساعدة معمارية',
      titleLine2: 'افتراضية',
      subtitleBefore: 'تقديم ',
      subtitleEstimates: 'تقديرات تكاليف',
      subtitleMiddle: ' دقيقة، و',
      subtitleVisuals: 'تصورات ثلاثية الأبعاد',
      subtitleAfter: ' واقعية، ودعم هندسي مفصل للرسم.',
      viewProjects: 'عرض المشاريع',
      contactMe: 'تواصل معي',
    },
    softwareStack: {
      heading: 'الأدوات والمنصات المستخدمة',
    },
    about: {
      title: 'المهندسة المعمارية',
      subtitle: 'عن Allana',
      quote: '"مكرسة لتقديم دعم موثوق وعالي الجودة حتى تتمكن من التركيز على الجانب الإبداعي من مشاريعك."',
      bio1: 'أنا مساعدة معمارية افتراضية أتمتع بخلفية قوية في العمارة والإنشاءات. أساعد المعماريين ومصممي الديكور والمقاولين على تسريع سير العمل عبر الرسم الهندسي والنمذجة ثلاثية الأبعاد وحساب الكميات.',
      bio2: 'سواء كنت بحاجة إلى لقطة ثلاثية الأبعاد، أو مجموعة رسومات تنفيذية، أو دراسة تكاليف شاملة، فأنا أقدم نتائج منظمة ودقيقة وفي الوقت المحدد.',
      yearsLabel: 'سنوات الخبرة',
      projectsLabel: 'مشروعاً منجزاً',
    },
    services: {
      title: 'الخدمات المعمارية',
      subtitle: 'الخبرة والدقة',
      footerTag: 'معيار الجودة والنزاهة',
      viewSamples: 'عرض نماذج الأعمال',
      items: {
        'Cost Estimates': {
          title: 'تقديرات التكاليف المعمارية',
          description: 'إعداد تقديرات تكلفة دقيقة ومفصلة بما في ذلك جداول الكميات (BOQ) لمختلف المشاريع.',
        },
        'Architectural Rendering': {
          title: 'التصور ثلاثي الأبعاد',
          description: 'إنشاء تصورات ثلاثية الأبعاد واقعية تساعدك على عرض تصاميمك للعملاء بوضوح وفعالية.',
        },
        'Roadway Design': {
          title: 'تصميم الطرق',
          description: 'المساعدة في تخطيط وتصميم الطرق والمجمعات السكنية والبنية التحتية للمواقع.',
        },
        'Plans & Drafting': {
          title: 'الرسم الهندسي CAD',
          description: 'تسليم مخططات فنية نظيفة ومنظمة ودقيقة استناداً إلى مسوداتك ومواصفاتك.',
        },
      },
    },
    gallery: {
      title: 'الأعمال والتصاميم',
      subtitle: 'مشاريع مختارة',
      allFilter: 'الكل',
      categories: {
        'Architectural Rendering': 'الإظهار المعماري',
        'Cost Estimates': 'تقدير التكاليف',
        'Roadway Design': 'تصميم الطرق',
        'Plans & Drafting': 'المخططات والرسم',
      },
      projects: {
        '1': {
          title: 'فيلا سكنية حديثة',
          description: 'إظهار معماري ثلاثي الأبعاد واقعي عالي الجودة لفيلا سكنية حديثة، يبرز الخطوط المعمارية النظيفة والمواد الفاخرة والربط السلس بين الداخل والخارج.',
          location: 'الفلبين',
        },
        '2': {
          title: 'تخطيط الطرق والنقل',
          description: 'مشروع تخطيط بنية تحتية للنقل يركز على تطوير مسار مخصص للحافلات في منطقة مونيومينتو بمانيلا لتحسين انسيابية المرور.',
          location: 'مانيلا، الفلبين',
        },
        '3': {
          title: 'تقدير تكاليف مجمع إداري',
          description: 'دراسة شاملة لتكاليف البناء وإعداد جدول الكميات (BOQ) لمشروع مكاتب شركات متكامل، يشمل المواد والعمالة والمعدات.',
          location: 'الفلبين',
        },
        '4': {
          title: 'مخطط وإظهار معماري',
          description: 'مشروع تخطيط وإظهار معماري متكامل لمنزل سكني فاخر، يتضمن مخططاً تفصيلياً وتصورات ثلاثية الأبعاد عالية الدقة.',
          location: 'الفلبين',
        },
        '5': {
          title: 'تصميم أرفف مخصصة',
          description: 'رسومات معمارية وإنشائية تفصيلية لتصميم أرفف مخصصة لعملاء في الولايات المتحدة مع تحديد الأبعاد والمواصفات الفنية.',
          location: 'الفلبين',
        },
        '6': {
          title: 'التخطيط العمراني والمناظر الطبيعية',
          description: 'مخطط عام متكامل لمجتمع مستدام وسط مدرجات زراعية طبيعية يراعي توزيع المساكن والطرق وقنوات الري والصرف.',
          location: 'الفلبين',
        },
      },
    },
    projectModal: {
      expand: 'تكبير',
      closePreview: 'إغلاق المعاينة',
      remoteLocation: 'الفلبين وعن بُعد حول العالم',
    },
    testimonials: {
      title: 'شهادات العملاء',
      subtitle: 'موثوقة من العملاء والاستوديوهات',
      intro: 'إن سماع كيف أثّر تصميمي أو إظهاري المعماري على نجاح مشروع العميل هو أكثر ما يسعدني في عملي.',
      items: [
        {
          text: 'مهاراتها في الرسم الهندسي متميزة وتلتزم دائماً بالمواعيد. لقد كانت إضافة رائعة لفريقنا.',
          author: 'عميل مجهول',
          role: 'مهندس معماري رئيسي',
          company: 'الولايات المتحدة',
        },
        {
          text: 'كانت التصورات ثلاثية الأبعاد التي قدمتها ممتازة، وساعدتنا كثيراً في عرض أفكارنا بوضوح لعملائنا.',
          author: 'عميل مجهول',
          role: 'مصممة ديكور داخلي',
          company: 'أستراليا',
        },
        {
          text: 'تقديراتها للتكاليف مفصلة ودقيقة للغاية. التعامل معها سلس ومهني جداً.',
          author: 'عميل مجهول',
          role: 'مدير مشاريع',
          company: 'كندا',
        },
      ],
    },
    contact: {
      title: 'تواصل',
      subtitle: 'تواصل معنا',
      intro: 'هل أنت مستعد لبدء مشروعك المعماري القادم؟ تواصل للحصول على استشارة أو تقدير تكلفة مفصل يناسب رؤيتك.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      locationLabel: 'الموقع',
      locationLine1: 'عمل عن بُعد حول العالم',
      locationLine2: 'مقيمون في توقيت آسيا والمحيط الهادئ',
      fullNameLabel: 'الاسم الكامل',
      fullNamePlaceholder: 'أحمد محمد',
      emailAddressLabel: 'البريد الإلكتروني',
      projectTypeLabel: 'نوع المشروع',
      messageLabel: 'رسالتك',
      messagePlaceholder: 'أخبرنا عن أهداف مشروعك ومتطلباته...',
      validationError: 'يرجى إدخال الاسم والبريد الإلكتروني والرسالة.',
      invalidEmailError: 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
      sendButton: 'إرسال الرسالة',
      whatsappButton: 'إرسال عبر واتساب',
      openingGmail: 'جاري فتح Gmail للإرسال إلى',
      openInGmail: 'فتح في Gmail',
      copyDetails: 'نسخ التفاصيل',
      copied: 'تم النسخ',
    },
    footer: {
      tagline: 'صناعة الدقة المعمارية من خلال التقديرات والتصورات ثلاثية الأبعاد وتصميم الطرق.',
      linkedin: 'تواصل معي على LinkedIn',
      copyright: '© 2024 Allana Jeanne Baloy. جميع الحقوق محفوظة.',
    },
  },
};
