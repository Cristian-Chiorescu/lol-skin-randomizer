export type ChampionDetail = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: { [key: string]: number };
  image: { [key: string]: any };
  tags: string[];
  partype: string;
  stats: { [key: string]: number };
};

export type ChampionListObject = {
  [key: string]: ChampionDetail;
};

export type ImageInfo = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ChampionStats = {
  armor: number;
  armorperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackrange: number;
  attackspeed: number;
  attackspeedperlevel: number;
  crit: number;
  critperlevel: number;
  hp: number;
  hpperlevel: number;
  hpregen: number;
  hpregenperlevel: number;
  movespeed: number;
  mp: number;
  mpperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
};

export type PassiveInfo = {
  name: string;
  description: string;
  image: ImageInfo;
};

export type SpellInfo = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  costType: string;
  range: number[];
  rangeBurn: string;
  image: ImageInfo;
  resource: string;
  datavalues: object;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: any[];
  maxammo: string;
};

export type ChampionSkin = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

export type FullChampionData = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ImageInfo;
  skins: ChampionSkin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  stats: ChampionStats;
  spells: SpellInfo[];
  passive: PassiveInfo;
  recommended: any[];
};

export type Skin = {
  chromas: boolean;
  id: string;
  name: string;
  num: number;
};
