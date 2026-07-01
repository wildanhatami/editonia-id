import type { Language } from './index';

export const getSpells = (lang: Language) => {
  if (lang === 'id') {
    return [
      { id: 1, title: 'Manipulasi Mana', subtitle: '(Color Grading)' },
      { id: 2, title: 'Kendali Kronos', subtitle: '(Quick Cuts)' },
      { id: 3, title: 'Perubahan Realita', subtitle: '(VFX & Motion Graphics)' },
    ];
  }
  return [
    { id: 1, title: 'Mana Manipulation', subtitle: '(Color Grading)' },
    { id: 2, title: 'Chronos Control', subtitle: '(Quick Cuts)' },
    { id: 3, title: 'Reality Alteration', subtitle: '(VFX & Motion Graphics)' },
  ];
};

export const getPortfolioItems = (lang: Language) => {
  if (lang === 'id') {
    return [
      { id: 1, title: "Intro Nafas Naga", category: "Karakter Isekai", description: "Sekuens intro magis berapi-api yang cocok untuk penjinak naga." },
      { id: 2, title: "Klip Intro YouTube", category: "Intro YouTube", description: "Intro bergaya 8-bit berenergi tinggi untuk streaming game." },
      { id: 3, title: "Spot Komersial", category: "Intro YouTube", description: "Teaser sinematik untuk perilisan game fantasi terbaru." },
      { id: 4, title: "VFX Duel Sihir", category: "VFX & Sihir", description: "Penambahan efek mantra dan aura bercahaya pada duel aksi langsung." },
      { id: 5, title: "Suasana Kedai", category: "Motion Graphics", description: "Latar belakang kedai berulang dengan api dan pengunjung animasi." },
      { id: 6, title: "Rekrutmen Guild", category: "Komersial", description: "Montase bertempo cepat untuk merekrut anggota baru ke guild." },
      { id: 7, title: "Animasi Naik Level", category: "Motion Graphics", description: "Layar naik level khusus dengan ledakan partikel." },
      { id: 8, title: "Montase Pertarungan Bos", category: "Intro YouTube", description: "Editan yang disinkronkan dengan soundtrack pertarungan bos yang epik." },
    ];
  }
  return [
    { id: 1, title: "Dragon's Breath Intro", category: "Isekai Character", description: "A fiery, magical intro sequence fit for a dragon tamer." },
    { id: 2, title: "YouTube Intro Clip", category: "YouTube Intro", description: "High-energy 8-bit style intro for gaming streams." },
    { id: 3, title: "Commercial Spot", category: "YouTube Intro", description: "A cinematic teaser for a new fantasy game release." },
    { id: 4, title: "Magic Duel VFX", category: "VFX & Magic", description: "Added spell-casting effects and glowing auras to a live-action duel." },
    { id: 5, title: "Tavern Ambience", category: "Motion Graphics", description: "Looping tavern background with animated fire and patrons." },
    { id: 6, title: "Guild Recruitment", category: "Commercial", description: "Fast-paced montage to recruit new members to the guild." },
    { id: 7, title: "Level Up Animation", category: "Motion Graphics", description: "Custom level-up screen with particle explosions." },
    { id: 8, title: "Boss Fight Montage", category: "YouTube Intro", description: "Synced edits to an epic boss fight soundtrack." },
  ];
};

export const getTestimonials = (lang: Language) => {
  if (lang === 'id') {
    return [
      {
        id: 1,
        name: 'Arthur Pendragon',
        role: 'Master Guild',
        rating: 5,
        text: '"Efek visual yang ditambahkan ke log misi saya benar-benar legendaris. Video editing yang sungguh magis!"'
      },
      {
        id: 2,
        name: 'Elara Moonwhisper',
        role: 'Ranger Peri',
        rating: 5,
        text: '"Pengiriman cepat dan potongan videonya tajam! Ritme montase memanah saya sempurna. Sangat direkomendasikan untuk petualang mana pun."'
      },
      {
        id: 3,
        name: 'Kaelen',
        role: 'Rogue Streamer',
        rating: 5,
        text: '"Editonia menghidupkan sorotan streaming saya! Motion graphics-nya kelas atas dan transisinya sangat mulus."'
      }
    ];
  }
  return [
    {
      id: 1,
      name: 'Arthur Pendragon',
      role: 'Guild Master',
      rating: 5,
      text: '"The visual effects added to my quest logs were nothing short of legendary. Truly magical video editing!"'
    },
    {
      id: 2,
      name: 'Elara Moonwhisper',
      role: 'Elf Ranger',
      rating: 5,
      text: '"Fast delivery and crisp cuts! The pacing of my archery montage was perfect. Highly recommended to any adventurer."'
    },
    {
      id: 3,
      name: 'Kaelen',
      role: 'Rogue Streamer',
      rating: 5,
      text: '"Editonia brought my stream highlights to life! The motion graphics are top-tier and the transitions are seamless."'
    }
  ];
};

export const getPricingTiers = (lang: Language) => {
  if (lang === 'id') {
    return [
      {
        id: 1,
        name: 'Editor Pemula',
        price: 'Rp 750k',
        features: ['Potong & Rapikan Dasar', 'Transisi Sederhana', '1x Revisi', 'Selesai dalam 3 hari'],
      },
      {
        id: 2,
        name: 'Penyihir Master',
        price: 'Rp 2,2jt',
        features: ['Color Grading', 'Motion Graphics', 'Audio Mixing', '3x Revisi', 'Selesai dalam 5 hari'],
        highlighted: true,
      },
      {
        id: 3,
        name: 'Grandmaster',
        price: 'Rp 4,5jt',
        features: ['Full VFX & Elemen 3D', 'Custom Sound Design', 'Revisi Sepuasnya', 'Dukungan Prioritas'],
      }
    ];
  }
  return [
    {
      id: 1,
      name: 'Novice Editor',
      price: '$50',
      features: ['Basic Cuts & Trims', 'Simple Transitions', '1 Revision', 'Delivery in 3 days'],
    },
    {
      id: 2,
      name: 'Master Wizard',
      price: '$150',
      features: ['Color Grading', 'Motion Graphics', 'Audio Mixing', '3 Revisions', 'Delivery in 5 days'],
      highlighted: true,
    },
    {
      id: 3,
      name: 'Grandmaster',
      price: '$300',
      features: ['Full VFX & 3D Elements', 'Custom Sound Design', 'Unlimited Revisions', 'Priority Support'],
    }
  ];
};

export const getFaqs = (lang: Language) => {
  if (lang === 'id') {
    return [
      {
        id: 1,
        question: "Berapa kali saya bisa meminta revisi?",
        answer: "Setiap paket memiliki jumlah revisi tertentu. Pemula mendapat 1x, Master mendapat 3x, dan Grandmaster mendapat revisi tanpa batas untuk memastikan sihirnya tepat."
      },
      {
        id: 2,
        question: "Software apa yang digunakan untuk menempa editan?",
        answer: "Saya utamanya menggunakan Adobe Premiere Pro dan After Effects untuk sebagian besar misi video, dilengkapi dengan DaVinci Resolve untuk pesona color grading."
      },
      {
        id: 3,
        question: "Berapa lama misi (edit video) diselesaikan?",
        answer: "Waktu pengerjaan bervariasi tergantung kompleksitas misi. Potongan sederhana memakan waktu sekitar 2-3 hari, sedangkan VFX berat atau editan tingkat Grandmaster bisa memakan waktu seminggu atau lebih."
      },
      {
        id: 4,
        question: "Bagaimana cara membayar bounty (metode pembayaran)?",
        answer: "Saya menerima koin emas melalui Transfer Bank, PayPal, dan scroll kripto utama. Deposit 50% diperlukan sebelum misi dimulai."
      }
    ];
  }
  return [
    {
      id: 1,
      question: "How many revisions do I get?",
      answer: "Each tier includes a specific number of revisions. Novice gets 1, Master gets 3, and Grandmaster gets unlimited revisions to ensure the magic is exactly right."
    },
    {
      id: 2,
      question: "What software do you use to forge your edits?",
      answer: "I primarily wield Adobe Premiere Pro and After Effects for most video quests, supplemented with DaVinci Resolve for color grading enchantments."
    },
    {
      id: 3,
      question: "How long does a quest (video edit) take?",
      answer: "Delivery time varies by the quest complexity. Simple cuts take about 2-3 days, while heavy VFX or Grandmaster-level edits can take a week or more."
    },
    {
      id: 4,
      question: "How do I pay my bounty (payment method)?",
      answer: "I accept gold coins via Bank Transfer, PayPal, and major crypto scrolls. A 50% deposit is required before the quest begins."
    }
  ];
};
