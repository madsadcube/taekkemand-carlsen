export interface City {
  slug: string
  name: string
  region: string
  description: string
}

export const cities: City[] = [
  {
    slug: 'helsinge',
    name: 'Helsinge',
    region: 'Nordsjælland',
    description: 'Professionel tækkemand i Helsinge. Tækkemand Carlsen tilbyder nyt stråtag, reparation og mønning i Helsinge og Gribskov.',
  },
  {
    slug: 'hillerod',
    name: 'Hillerød',
    region: 'Nordsjælland',
    description: 'Tækkemand i Hillerød – stråtag, reparation og vedligehold i Hillerød og omegn. Uforpligtende tilbud.',
  },
  {
    slug: 'frederiksvaerk',
    name: 'Frederiksværk',
    region: 'Nordsjælland',
    description: 'Lokal tækkemand i Frederiksværk med 15+ års erfaring i stråtækning og tagrenovering.',
  },
  {
    slug: 'gilleleje',
    name: 'Gilleleje',
    region: 'Nordsjælland',
    description: 'Tækkemand i Gilleleje – vi dækker hele Nordkysten med professionelt stråtagsarbejde.',
  },
  {
    slug: 'hundested',
    name: 'Hundested',
    region: 'Nordsjælland',
    description: 'Stråtag og tækkearbejde i Hundested. Hurtig levering og uforpligtende tilbud.',
  },
  {
    slug: 'tisvildeleje',
    name: 'Tisvildeleje',
    region: 'Nordsjælland',
    description: 'Tækkemand i Tisvildeleje – professionelt stråtagsarbejde på Nordkysten.',
  },
  {
    slug: 'ringsted',
    name: 'Ringsted',
    region: 'Midtsjælland',
    description: 'Tækkemand i Ringsted – vi dækker Midtsjælland med stråtag, reparation og vedligehold.',
  },
  {
    slug: 'soroe',
    name: 'Sorø',
    region: 'Midtsjælland',
    description: 'Lokal tækkemand i Sorø med lang erfaring i stråtækning og tagrenovering.',
  },
  {
    slug: 'naestved',
    name: 'Næstved',
    region: 'Sydsjælland',
    description: 'Tækkemand i Næstved og omegn – stråtag, mønning og algebehandling.',
  },
  {
    slug: 'frederikssund',
    name: 'Frederikssund',
    region: 'Nordsjælland',
    description: 'Professionel tækkemand i Frederikssund. Nyt stråtag og reparation til konkurrencedygtige priser.',
  },
]
