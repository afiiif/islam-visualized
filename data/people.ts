type Relation = 'parent' | 'wife' | 'child' | 'grandchild' | 'relative';

type Role = 'prophet' | 'caliph';

export type Person = {
  id: string;
  name: string;
  sex: 'm' | 'f';
  lifetime: {
    from?: number;
    estimatedFrom?: number;
    to?: number | null | false;
    estimatedTo?: number;
  };
  relation?: Relation;
  roles?: Array<{
    name: Role;
    from: number;
    to: number;
  }>;
};

export type Marriage = {
  id: string;
  spouse1: string;
  spouse2: string;
  year: number;
};

export const people: Person[] = [
  {
    id: 'abdul-muthalib',
    name: 'Abdul Muthalib bin Hasyim',
    sex: 'm',
    lifetime: { from: 497, to: 578 },
  },
  {
    id: 'abdullah',
    name: 'Abdullah bin Abdul Muthalib',
    sex: 'm',
    lifetime: { from: 545, to: 570 },
    relation: 'parent',
  },
  {
    id: 'wahab-bin-abdu-manaf',
    name: 'Wahb bin Abdu Manaf',
    sex: 'm',
    lifetime: { estimatedFrom: 497, estimatedTo: 578 },
  },
  {
    id: 'aminah',
    name: 'Aminah binti Wahb',
    sex: 'f',
    lifetime: { from: 549, to: 576 },
    relation: 'parent',
  },
  {
    id: 'abu-thalib',
    name: 'Abu Thalib bin Abdul Muthalib',
    sex: 'm',
    lifetime: { from: 540, to: 619 },
    relation: 'relative',
  },
  {
    id: 'hamzah',
    name: 'Hamzah bin Abdul Muthalib',
    sex: 'm',
    lifetime: { from: 568, to: 625 },
    relation: 'relative',
  },
  {
    id: 'abbas',
    name: 'Abbas bin Abdul Muthalib',
    sex: 'm',
    lifetime: { from: 565, to: 653 },
    relation: 'relative',
  },
  {
    id: 'abu-lahab',
    name: 'Abu Lahab (Abdul Uzza bin Abdul Muthalib)',
    sex: 'm',
    lifetime: { from: 549, to: 624 },
    relation: 'relative',
  },
  {
    id: 'muhammad',
    name: 'Muhammad ﷺ',
    sex: 'm',
    lifetime: { from: 570, to: 632 },
    roles: [
      {
        name: 'prophet',
        from: 610,
        to: 632,
      },
    ],
  },
  {
    id: 'khadijah',
    name: 'Khadijah binti Khuwailid',
    sex: 'f',
    lifetime: { from: 555, to: 619 },
    relation: 'wife',
  },
  {
    id: 'qasim',
    name: 'Qasim bin Muhammad',
    sex: 'm',
    lifetime: { from: 598, to: 600 },
    relation: 'child',
  },
  {
    id: 'zainab',
    name: 'Zainab binti Muhammad',
    sex: 'f',
    lifetime: { from: 599, to: 629 },
    relation: 'child',
  },
  {
    id: 'ruqayyah',
    name: 'Ruqayyah binti Muhammad',
    sex: 'f',
    lifetime: { from: 601, to: 624 },
    relation: 'child',
  },
  {
    id: 'umm-kultsum',
    name: 'Ummu Kultsum binti Muhammad',
    sex: 'f',
    lifetime: { from: 603, to: 630 },
    relation: 'child',
  },
  {
    id: 'fatimah',
    name: 'Fatimah Az-Zahra',
    sex: 'f',
    lifetime: { from: 605, to: 632 },
    relation: 'child',
  },
  {
    id: 'abdullah-bin-muhammad',
    name: 'Abdullah bin Muhammad (At-Thayyib/At-Tahir)',
    sex: 'm',
    lifetime: { from: 611, to: 615 },
    relation: 'child',
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim bin Muhammad',
    sex: 'm',
    lifetime: { from: 630, to: 632 },
    relation: 'child',
  },
  {
    id: 'abu-bakar',
    name: 'Abu Bakar Ash-Shiddiq',
    sex: 'm',
    lifetime: { from: 573, to: 634 },
    roles: [
      {
        name: 'caliph',
        from: 632,
        to: 634,
      },
    ],
  },
  {
    id: 'umar',
    name: 'Umar bin Khattab',
    sex: 'm',
    lifetime: { from: 584, to: 644 },
    roles: [
      {
        name: 'caliph',
        from: 634,
        to: 644,
      },
    ],
  },
  {
    id: 'utsman',
    name: 'Utsman bin Affan',
    sex: 'm',
    lifetime: { from: 576, to: 656 },
    roles: [
      {
        name: 'caliph',
        from: 644,
        to: 656,
      },
    ],
  },
  {
    id: 'ali',
    name: 'Ali bin Abi Thalib',
    sex: 'm',
    lifetime: { from: 600, to: 661 },
    roles: [
      {
        name: 'caliph',
        from: 656,
        to: 661,
      },
    ],
  },
  {
    id: 'hasan-bin-ali',
    name: 'Hasan bin Ali',
    sex: 'm',
    lifetime: { from: 625, to: 670 },
    relation: 'grandchild',
  },
  {
    id: 'husain-bin-ali',
    name: 'Husain bin Ali',
    sex: 'm',
    lifetime: { from: 626, to: 680 },
    relation: 'grandchild',
  },
  {
    id: 'aisha',
    name: 'Aisyah binti Abu Bakar',
    sex: 'f',
    lifetime: { from: 614, to: 678 },
    relation: 'wife',
  },
  {
    id: "sawda-binti-zam'ah",
    name: "Sawda binti Zam'ah",
    sex: 'f',
    lifetime: { estimatedFrom: 570, estimatedTo: 644 },
    relation: 'wife',
  },
  {
    id: 'hafsah-binti-umar',
    name: 'Hafsah binti Umar',
    sex: 'f',
    lifetime: { from: 605, to: 665 },
    relation: 'wife',
  },
  {
    id: 'zaynab-binti-jahsy',
    name: 'Zaynab binti Jahsy',
    sex: 'f',
    lifetime: { from: 590, to: 641 },
    relation: 'wife',
  },
  {
    id: 'bilal',
    name: 'Bilal bin Rabah',
    sex: 'm',
    lifetime: { from: 580, to: 640 },
  },
  {
    id: 'zaid-bin-haritsah',
    name: 'Zaid bin Haritsah',
    sex: 'm',
    lifetime: { from: 581, to: 629 },
  },
  {
    id: 'umm-salamah',
    name: 'Umm Salamah',
    sex: 'f',
    lifetime: { from: 596, to: 683 },
  },
  {
    id: 'umm-aiman',
    name: 'Umm Aiman (Barakah)',
    sex: 'f',
    lifetime: { from: 550, to: 650 },
  },
  {
    id: 'saad-bin-abi-waqqash',
    name: 'Saad bin Abi Waqqash',
    sex: 'm',
    lifetime: { from: 595, to: 674 },
  },
  {
    id: 'abdurrahman-bin-auf',
    name: 'Abdurrahman bin Auf',
    sex: 'm',
    lifetime: { from: 580, to: 652 },
  },
  {
    id: 'abu-ubaidah',
    name: 'Abu Ubaidah bin Jarrah',
    sex: 'm',
    lifetime: { from: 583, to: 639 },
  },
  {
    id: 'musab-bin-umair',
    name: "Mus'ab bin Umair",
    sex: 'm',
    lifetime: { from: 585, to: 625 },
  },
  {
    id: 'asma-binti-abu-bakar',
    name: 'Asma binti Abu Bakar',
    sex: 'f',
    lifetime: { from: 595, to: 692 },
  },
  {
    id: 'muawiyah-bin-abu-sufyan',
    name: 'Muawiyah bin Abu Sufyan',
    sex: 'm',
    lifetime: { from: 602, to: 680 },
    roles: [
      {
        name: 'caliph',
        from: 661,
        to: 680,
      },
    ],
  },
  {
    id: 'yazid-bin-muawiyah',
    name: 'Yazid bin Muawiyah',
    sex: 'm',
    lifetime: { from: 646, to: 683 },
    roles: [
      {
        name: 'caliph',
        from: 680,
        to: 683,
      },
    ],
  },
  {
    id: 'muawiyah-ii-bin-yazid',
    name: 'Muawiyah II bin Yazid',
    sex: 'm',
    lifetime: { estimatedFrom: 664, to: 684 },
    roles: [
      {
        name: 'caliph',
        from: 683,
        to: 684,
      },
    ],
  },
  {
    id: 'marwan-bin-al-hakam',
    name: 'Marwan bin Al-Hakam',
    sex: 'm',
    lifetime: { from: 623, to: 685 },
    roles: [
      {
        name: 'caliph',
        from: 684,
        to: 685,
      },
    ],
  },
  {
    id: 'abdul-malik-bin-marwan',
    name: 'Abdul Malik bin Marwan',
    sex: 'm',
    lifetime: { from: 646, to: 705 },
    roles: [
      {
        name: 'caliph',
        from: 685,
        to: 705,
      },
    ],
  },
  {
    id: 'al-walid-bin-abdul-malik',
    name: 'Al-Walid bin Abdul Malik',
    sex: 'm',
    lifetime: { from: 668, to: 715 },
    roles: [
      {
        name: 'caliph',
        from: 705,
        to: 715,
      },
    ],
  },
  {
    id: 'sulaiman-bin-abdul-malik',
    name: 'Sulaiman bin Abdul Malik',
    sex: 'm',
    lifetime: { estimatedFrom: 675, to: 717 },
    roles: [
      {
        name: 'caliph',
        from: 715,
        to: 717,
      },
    ],
  },
  {
    id: 'umar-bin-abdul-aziz',
    name: 'Umar bin Abdul Aziz',
    sex: 'm',
    lifetime: { from: 682, to: 720 },
    roles: [
      {
        name: 'caliph',
        from: 717,
        to: 720,
      },
    ],
  },
  {
    id: 'yazid-ii-bin-abdul-malik',
    name: 'Yazid II bin Abdul Malik',
    sex: 'm',
    lifetime: { from: 687, to: 724 },
    roles: [
      {
        name: 'caliph',
        from: 720,
        to: 724,
      },
    ],
  },
  {
    id: 'hisham-bin-abdul-malik',
    name: 'Hisham bin Abdul Malik',
    sex: 'm',
    lifetime: { from: 691, to: 743 },
    roles: [
      {
        name: 'caliph',
        from: 724,
        to: 743,
      },
    ],
  },
];

// ---

export const marriages: Marriage[] = [
  {
    id: 'abdullah-aminah',
    spouse1: 'abdullah',
    spouse2: 'aminah',
    year: 568,
  },
  {
    id: 'muhammad-khadijah',
    spouse1: 'muhammad',
    spouse2: 'khadijah',
    year: 595,
  },
  {
    id: 'muhammad-sawda',
    spouse1: 'muhammad',
    spouse2: "sawda-binti-zam'ah",
    year: 620,
  },
  {
    id: 'muhammad-aisha',
    spouse1: 'muhammad',
    spouse2: 'aisha',
    year: 623,
  },
  {
    id: 'ali-fatimah',
    spouse1: 'ali',
    spouse2: 'fatimah',
    year: 623,
  },
  {
    id: 'muhammad-hafsah',
    spouse1: 'muhammad',
    spouse2: 'hafsah-binti-umar',
    year: 625,
  },
  {
    id: 'muhammad-zaynab-jahsy',
    spouse1: 'muhammad',
    spouse2: 'zaynab-binti-jahsy',
    year: 627,
  },
];
