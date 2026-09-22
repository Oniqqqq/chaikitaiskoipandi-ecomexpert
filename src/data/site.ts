export type Stock = "in" | "low" | "out";
export type Pack = { label: string; grams: number; price: number };

export type TeaProduct = {
  id: string;
  kind: "tea";
  name: string;
  category: string;
  tags: string[];
  image: string;
  packs: Pack[];
  stock: Stock;
  href: string;
};

export type WareProduct = {
  id: string;
  kind: "ware";
  name: string;
  category: string;
  tags: string[];
  image: string;
  price: number;
  colors: { id: string; name: string; hex: string }[];
  stock: Stock;
  href: string;
};

export type Product = TeaProduct | WareProduct;

export type HeroSlide = {
  id: string;
  category: string;
  product: string;
  taste: string;
  note: string;
  priceFrom: number;
  image: string;
  tint: string;
  href: string;
};

export const PHONE = "+7 (8442) 50-84-08";
export const PHONE_HREF = "tel:+78442508408";
export const TELEGRAM = "https://t.me/chai_kitaiskoi_pandi";
export const SITE_NAME = "Чай Китайской Панды";

export const NAV = [
  { label: "Чай", href: "#catalog" },
  { label: "Посуда", href: "#ware" },
  { label: "Подарки", href: "#gifts" },
  { label: "Подписка", href: "#subscription" },
  { label: "Чайные", href: "#tearooms" },
  { label: "Франшиза", href: "#franchise" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: "oolong",
    category: "Улун",
    product: "Габа Дон Фан Мей Жень",
    taste: "Цветочный и мягкий",
    note: "Прессованный улун: лилия, сухофрукты, тёплый мёд.",
    priceFrom: 690,
    image: "/images/cakes/hero-oolong.png",
    tint: "42 38% 46%",
    href: "#catalog",
  },
  {
    id: "puer",
    category: "Пуэр",
    product: "Шу Мей Хуа Бин 2017",
    taste: "Плотный и древесный",
    note: "«Зимняя слива» — выдержанный шу в блине 200 г.",
    priceFrom: 540,
    image: "/images/cakes/hero-puer.png",
    tint: "24 28% 38%",
    href: "#catalog",
  },
  {
    id: "red",
    category: "Красный чай",
    product: "Гу Шу Хун Ча 2013",
    taste: "Янтарный и собранный",
    note: "Красный чай со старых деревьев, прессован в блин.",
    priceFrom: 930,
    image: "/images/cakes/hero-red.png",
    tint: "8 42% 42%",
    href: "#catalog",
  },
  {
    id: "white",
    category: "Белый чай",
    product: "Бай Хао Инь Чжень ЧКП",
    taste: "Деликатный и тонкий",
    note: "Серебряные иглы в блине — ранний сбор, тихий вкус.",
    priceFrom: 660,
    image: "/images/cakes/hero-white.png",
    tint: "40 18% 52%",
    href: "#catalog",
  },
];

export const products: Product[] = [
  {
    id: "meihua",
    kind: "tea",
    name: "Пуэр Шу Мей Хуа Бин 2017 «Зимняя слива»",
    category: "Шу пуэр",
    tags: ["блин", "выдержанный", "древесный"],
    image: "/images/products/meihua.jpg",
    packs: [
      { label: "30 г", grams: 30, price: 540 },
      { label: "50 г", grams: 50, price: 900 },
      { label: "100 г", grams: 100, price: 1800 },
    ],
    stock: "in",
    href: "http://chaikitaiskoipandi.ru/shupuer/tproduct/922346155-801739348902-puer-shu-mei-hua-bin-2017-g-zimnyaya-sli",
  },
  {
    id: "baihao",
    kind: "tea",
    name: "Бай Хао Инь Чжень ЧКП Бин Ча",
    category: "Белый чай",
    tags: ["почки", "блин", "тонкий"],
    image: "/images/products/baihao.jpg",
    packs: [
      { label: "30 г", grams: 30, price: 660 },
      { label: "50 г", grams: 50, price: 1100 },
      { label: "100 г", grams: 100, price: 2200 },
    ],
    stock: "in",
    href: "http://chaikitaiskoipandi.ru/whitetea/tproduct/3313111101-409086970082-bai-hao-in-chzhen-chkp-bin-cha",
  },
  {
    id: "gushuhong",
    kind: "tea",
    name: "Гу Шу Хун Ча 2013 г.",
    category: "Красный чай",
    tags: ["гу шу", "блин", "янтарный"],
    image: "/images/products/gushuhong.jpg",
    packs: [
      { label: "30 г", grams: 30, price: 930 },
      { label: "50 г", grams: 50, price: 1550 },
      { label: "100 г", grams: 100, price: 3100 },
    ],
    stock: "low",
    href: "http://chaikitaiskoipandi.ru/redtea",
  },
  {
    id: "tieguanyin",
    kind: "tea",
    name: "Те Гуань Инь «Golden Baby»",
    category: "Улун",
    tags: ["цветочный", "светлый", "аньси"],
    image: "/images/products/tieguanyin.jpg",
    packs: [
      { label: "30 г", grams: 30, price: 570 },
      { label: "50 г", grams: 50, price: 950 },
      { label: "100 г", grams: 100, price: 1900 },
    ],
    stock: "in",
    href: "http://chaikitaiskoipandi.ru/lightoolong/tproduct/922328671-820416644452-te-guan-in-golden-vaby",
  },
  {
    id: "dianhong",
    kind: "tea",
    name: "Дянь Хун «Золотой»",
    category: "Красный чай",
    tags: ["юньнань", "мягкий", "дневной"],
    image: "/images/products/dianhong.jpg",
    packs: [
      { label: "30 г", grams: 30, price: 450 },
      { label: "50 г", grams: 50, price: 750 },
      { label: "100 г", grams: 100, price: 1500 },
    ],
    stock: "in",
    href: "http://chaikitaiskoipandi.ru/redtea",
  },
  {
    id: "jingmai",
    kind: "tea",
    name: "ЧКП Шен Дзин Май",
    category: "Шен пуэр",
    tags: ["молодой", "цзинмай", "блин"],
    image: "/images/products/shen-jingmai.jpg",
    packs: [
      { label: "30 г", grams: 30, price: 660 },
      { label: "50 г", grams: 50, price: 1100 },
      { label: "100 г", grams: 100, price: 2200 },
    ],
    stock: "out",
    href: "http://chaikitaiskoipandi.ru/shenpuer/tproduct/922339876-834448839162-chkp-shen-dzin-mai-blin",
  },
  {
    id: "nannuo",
    kind: "tea",
    name: "Шу пуэр ЧКП Нань Но Шань",
    category: "Шу пуэр",
    tags: ["блин", "наньно", "плотный"],
    image: "/images/products/nannuo.jpg",
    packs: [
      { label: "30 г", grams: 30, price: 480 },
      { label: "50 г", grams: 50, price: 800 },
      { label: "100 г", grams: 100, price: 1600 },
    ],
    stock: "in",
    href: "http://chaikitaiskoipandi.ru/shupuer/tproduct/922346155-425711860083-shu-puer-chkp-nan-no-shan-blinchik-100-g",
  },
  {
    id: "pia",
    kind: "ware",
    name: "Пиала цветная, 40 мл",
    category: "Посуда",
    tags: ["фарфор", "для чая", "6 цветов"],
    image: "/images/products/pia-color.jpg",
    price: 350,
    colors: [
      { id: "blush", name: "Пыльная роза", hex: "#E8D4CB" },
      { id: "clay", name: "Глина", hex: "#C4A484" },
      { id: "ink", name: "Графит", hex: "#4A4743" },
      { id: "olive", name: "Олива", hex: "#7A7A55" },
      { id: "milk", name: "Молоко", hex: "#F3EEE6" },
      { id: "tea", name: "Чайный", hex: "#8B5A3C" },
    ],
    stock: "in",
    href: "http://chaikitaiskoipandi.ru/teawear",
  },
];

export const categories = [
  { id: "oolong", title: "Улуны", count: "67 сортов", image: "/images/cakes/oolong-alt.jpg", href: "#catalog" },
  { id: "puer", title: "Пуэры", count: "99 блинов", image: "/images/categories/puer.jpg", href: "#catalog" },
  { id: "red", title: "Красный чай", count: "38 сортов", image: "/images/rooms/hall.jpg", href: "#catalog" },
  { id: "white", title: "Белый чай", count: "31 сорт", image: "/images/categories/white.jpg", href: "#catalog" },
  { id: "green", title: "Зелёный чай", count: "12 сортов", image: "/images/scenes/interior-1.jpg", href: "#catalog" },
  { id: "ware", title: "Посуда", count: "гайвани и пиалы", image: "/images/categories/ware.jpg", href: "#ware" },
  { id: "gifts", title: "Подарочные наборы", count: "блины в наборе", image: "/images/products/gift-set.jpg", href: "#gifts" },
];

export const rooms = [
  {
    id: "loft",
    city: "Волгоград",
    name: "Лофт 1890",
    address: "ул. 10-й Дивизии НКВД, 5А",
    hours: "Круглосуточно",
    phone: "+7 (8442) 50-84-08",
    phoneHref: "tel:+78442508408",
    x: 28,
    y: 62,
  },
  {
    id: "vtc",
    city: "Волгоград",
    name: "Ворошиловский ТЦ",
    address: "Рабоче-Крестьянская ул., 9Б",
    hours: "10:00–22:00",
    phone: "+7 (8442) 50-42-04",
    phoneHref: "tel:+78442504204",
    x: 36,
    y: 74,
  },
  {
    id: "park",
    city: "Волгоград",
    name: "Парк Хаус",
    address: "бул. 30-летия Победы, 21",
    hours: "10:00–22:00",
    phone: "+7 (8442) 50-04-34",
    phoneHref: "tel:+78442500434",
    x: 22,
    y: 48,
  },
  {
    id: "zorge",
    city: "Москва",
    name: "Зорге",
    address: "ул. Зорге, 9А, корп. 1",
    hours: "12:00–22:00",
    phone: "+7 (904) 777-77-51",
    phoneHref: "tel:+79047777751",
    x: 68,
    y: 34,
  },
  {
    id: "stolyarny",
    city: "Москва",
    name: "Столярный",
    address: "Столярный переулок, 3к8",
    hours: "12:00–22:00",
    phone: "+7 (985) 519-31-70",
    phoneHref: "tel:+79855193170",
    x: 78,
    y: 46,
  },
];

export const legal = {
  ip: "ИП Карпов Артём Николаевич",
  inn: "344603677668",
  ogrn: "313344319800039 от 17.07.2013",
};

export const quizQuestions = [
  {
    id: "strength",
    title: "Какой крепости хочется?",
    options: [
      { id: "light", label: "Лёгкий", hint: "прозрачный, тихий" },
      { id: "medium", label: "Средний", hint: "собранный, ровный" },
      { id: "dense", label: "Плотный", hint: "насыщенный, долгий" },
    ],
  },
  {
    id: "taste",
    title: "Какой вкус ближе?",
    options: [
      { id: "floral", label: "Цветочный", hint: "сирень, лилия, османтус" },
      { id: "wood", label: "Древесный", hint: "кора, орех, земля" },
      { id: "berry", label: "Ягодный", hint: "сухофрукты, мёд" },
      { id: "nut", label: "Ореховый", hint: "какао, жжёный сахар" },
    ],
  },
  {
    id: "time",
    title: "Когда будете пить?",
    options: [
      { id: "morning", label: "Утром", hint: "чтобы собраться" },
      { id: "day", label: "Днём", hint: "вместо кофе" },
      { id: "evening", label: "Вечером", hint: "чтобы замедлиться" },
    ],
  },
  {
    id: "experience",
    title: "Как давно пьёте китайский чай?",
    options: [
      { id: "new", label: "Только начинаю", hint: "нужен понятный вход" },
      { id: "some", label: "Уже пробовал", hint: "хочу точнее" },
      { id: "collect", label: "Собираю", hint: "интересны годы и регионы" },
    ],
  },
  {
    id: "brew",
    title: "Как удобнее заваривать?",
    options: [
      { id: "gaiwan", label: "Гайвань", hint: "короткие проливы" },
      { id: "pot", label: "Чайник", hint: "на компанию" },
      { id: "mug", label: "Кружка", hint: "один раз, надолго" },
    ],
  },
];

export function recommendTeas(answers: Record<string, string>): {
  product: TeaProduct;
  why: string;
}[] {
  const teas = products.filter((p): p is TeaProduct => p.kind === "tea");
  const scored = teas.map((product) => {
    let score = 0;
    const why: string[] = [];
    if (answers.strength === "light" && /белый|улун/i.test(product.category + product.tags.join())) {
      score += 3;
      why.push("лёгкая крепость");
    }
    if (answers.strength === "dense" && /пуэр|шу/i.test(product.category)) {
      score += 3;
      why.push("плотное тело");
    }
    if (answers.strength === "medium" && /красный|шен/i.test(product.category)) {
      score += 2;
      why.push("ровная середина");
    }
    if (answers.taste === "floral" && product.tags.some((t) => /цвет|тонк|почки/.test(t))) {
      score += 3;
      why.push("цветочный профиль");
    }
    if (answers.taste === "wood" && product.tags.some((t) => /древ|блин|гу шу/.test(t))) {
      score += 3;
      why.push("древесная глубина");
    }
    if (answers.taste === "berry" && /красный|дянь/i.test(product.name + product.category)) {
      score += 2;
      why.push("янтарная ягода");
    }
    if (answers.taste === "nut" && /шу|пуэр/i.test(product.category)) {
      score += 2;
      why.push("орех и какао");
    }
    if (answers.time === "evening" && /белый|шен/i.test(product.category)) {
      score += 1;
      why.push("спокойный вечер");
    }
    if (answers.time === "morning" && /улун|красный/i.test(product.category)) {
      score += 1;
      why.push("собирает утром");
    }
    if (answers.experience === "new" && product.stock === "in" && product.packs[0].price < 600) {
      score += 1;
      why.push("понятный вход");
    }
    if (answers.experience === "collect" && /201[0-9]|гу шу|блин/.test(product.name + product.tags.join(" "))) {
      score += 2;
      why.push("есть год и история");
    }
    if (!why.length) why.push("хорошо встаёт в выбранный ритм");
    return { product, score, why: why.slice(0, 2).join(" · ") };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, 4);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}
