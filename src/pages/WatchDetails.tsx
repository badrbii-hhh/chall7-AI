import { motion } from 'framer-motion';
import { ArrowLeft, Star, Shield, Clock, Droplets, Heart, Share2, Package, Award, PenTool as Tool, Sparkles, AlignCenterVertical as Certificate, History, Check, Info } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

interface WatchEntry {
  id: string;
  brand: string;
  name: string;
  collection: string;
  reference: string;
  price: string;
  marketValue: {
    min: string;
    max: string;
  };
  description: string;
  releaseYear: string;
  limited: boolean;
  limitedQuantity?: number;
  condition: {
    rating: string;
    details: string;
    serviceHistory: {
      date: string;
      type: string;
      provider: string;
      details: string;
    }[];
  };
  authentication: {
    serialNumber: string;
    papers: boolean;
    box: boolean;
    warranty: {
      type: string;
      expiration: string;
      transferable: boolean;
    };
  };
  images: string[];
  specs: {
    movement: {
      type: string;
      caliber: string;
      details: string;
      frequency: string;
      jewels: string;
      power: string;
      chronometer?: boolean;
      finishing: string[];
    };
    case: {
      material: string;
      diameter: string;
      thickness: string;
      waterResistance: string;
      crystal: string;
      backCase: string;
      finishing: string[];
    };
    dial: {
      color: string;
      material: string;
      indices: string;
      hands: string;
      features: string[];
    };
    functions: {
      timekeeping: string;
      complications: string[];
      additional: string;
      luminescence: string;
    };
    bracelet: {
      type: string;
      material: string;
      clasp: string;
      width: string;
    };
  };
  features: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
  }>;
  status: string;
  rating: number;
  awards: string[];
}

const watchCatalog: Record<string, WatchEntry> = {
  'royal-oak-offshore': {
    id: 'royal-oak-offshore',
    brand: 'Audemars Piguet',
    name: 'Royal Oak Offshore Chronograph',
    collection: 'Royal Oak Offshore',
    reference: '26238TI.OO.CH001TI.01',
    price: '$52,900',
    marketValue: {
      min: '$48,000',
      max: '$55,000'
    },
    description: "The Royal Oak Offshore Chronograph in titanium represents the perfect fusion of sporty elegance and technical excellence. This latest iteration features a refined 42mm case with the collection's signature octagonal bezel and 'Méga Tapisserie' pattern dial.",
    releaseYear: '2024',
    limited: false,
    condition: {
      rating: 'New',
      details: 'Factory fresh condition with all protective seals intact',
      serviceHistory: []
    },
    authentication: {
      serialNumber: 'H98234',
      papers: true,
      box: true,
      warranty: {
        type: 'Manufacturer',
        expiration: '2029-02-15',
        transferable: true
      }
    },
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      movement: {
        type: 'Automatic chronograph',
        caliber: 'Calibre 4401',
        details: 'In-house integrated chronograph movement',
        frequency: '28,800 vph (4 Hz)',
        jewels: '40 jewels',
        power: '70 hours power reserve',
        chronometer: true,
        finishing: [
          'Côtes de Genève',
          'Circular graining',
          'Polished bevels'
        ]
      },
      case: {
        material: 'Grade 5 Titanium',
        diameter: '42mm',
        thickness: '15.2mm',
        waterResistance: '100m / 330ft',
        crystal: 'Sapphire with anti-reflective coating',
        backCase: 'Sapphire crystal exhibition caseback',
        finishing: [
          'Satin-brushed surfaces',
          'Polished bevels',
          'Sandblasted recesses'
        ]
      },
      dial: {
        color: 'Slate grey',
        material: 'Brass with Méga Tapisserie pattern',
        indices: 'Applied white gold hour markers',
        hands: 'Royal Oak hands with luminescent coating',
        features: [
          "Chronograph counters at 3, 6, and 9 o'clock",
          "Date window at 4:30",
          "Tachymeter scale"
        ]
      },
      functions: {
        timekeeping: 'Hours, minutes, small seconds',
        complications: [
          'Flyback chronograph',
          'Date',
          'Tachymeter'
        ],
        additional: 'Column wheel chronograph mechanism',
        luminescence: 'Super-LumiNova® on hands and indices'
      },
      bracelet: {
        type: 'Integrated bracelet',
        material: 'Grade 5 Titanium',
        clasp: 'AP folding clasp with security system',
        width: '22mm tapering to 18mm'
      }
    },
    features: [
      {
        icon: <Tool className="w-5 h-5" />,
        title: 'In-House Movement',
        description: 'Manufacture Calibre 4401 with integrated chronograph'
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: '5-Year Warranty',
        description: 'International warranty with worldwide service'
      },
      {
        icon: <Certificate className="w-5 h-5" />,
        title: 'Chronometer Certified',
        description: 'Precision tested and certified for accuracy'
      },
      {
        icon: <History className="w-5 h-5" />,
        title: 'Heritage',
        description: 'Part of the iconic Royal Oak collection since 1972'
      }
    ],
    status: 'In Stock',
    rating: 4.9,
    awards: [
      'GPHG 2023 - Sports Watch Prize Finalist',
      'Watch of the Year 2023 - Innovation in Design'
    ]
  },
  'nova-automatic': {
    id: 'nova-automatic',
    brand: 'MORCO AURA',
    name: 'Nova Automatic',
    collection: 'Celestial Series',
    reference: '26238TI.OO.CH001TI.01',
    price: '$48,900',
    marketValue: {
      min: '$48,000',
      max: '$55,000'
    },
    description: "The Royal Oak Offshore Chronograph in titanium represents the perfect fusion of sporty elegance and technical excellence. This latest iteration features a refined 42mm case with the collection's signature octagonal bezel and 'Méga Tapisserie' pattern dial.",
    releaseYear: '2024',
    limited: false,
    condition: {
      rating: 'New',
      details: 'Factory fresh condition with all protective seals intact',
      serviceHistory: []
    },
    authentication: {
      serialNumber: 'H98234',
      papers: true,
      box: true,
      warranty: {
        type: 'Manufacturer',
        expiration: '2029-02-15',
        transferable: true
      }
    },
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      movement: {
        type: 'Automatic chronograph',
        caliber: 'Calibre 4401',
        details: 'In-house integrated chronograph movement',
        frequency: '28,800 vph (4 Hz)',
        jewels: '40 jewels',
        power: '70 hours power reserve',
        chronometer: true,
        finishing: [
          'Côtes de Genève',
          'Circular graining',
          'Polished bevels'
        ]
      },
      case: {
        material: 'Grade 5 Titanium',
        diameter: '42mm',
        thickness: '15.2mm',
        waterResistance: '100m / 330ft',
        crystal: 'Sapphire with anti-reflective coating',
        backCase: 'Sapphire crystal exhibition caseback',
        finishing: [
          'Satin-brushed surfaces',
          'Polished bevels',
          'Sandblasted recesses'
        ]
      },
      dial: {
        color: 'Slate grey',
        material: 'Brass with Méga Tapisserie pattern',
        indices: 'Applied white gold hour markers',
        hands: 'Royal Oak hands with luminescent coating',
        features: [
          "Chronograph counters at 3, 6, and 9 o'clock",
          "Date window at 4:30",
          "Tachymeter scale"
        ]
      },
      functions: {
        timekeeping: 'Hours, minutes, small seconds',
        complications: [
          'Flyback chronograph',
          'Date',
          'Tachymeter'
        ],
        additional: 'Column wheel chronograph mechanism',
        luminescence: 'Super-LumiNova® on hands and indices'
      },
      bracelet: {
        type: 'Integrated bracelet',
        material: 'Grade 5 Titanium',
        clasp: 'AP folding clasp with security system',
        width: '22mm tapering to 18mm'
      }
    },
    features: [
      {
        icon: <Tool className="w-5 h-5" />,
        title: 'In-House Movement',
        description: 'Manufacture Calibre 4401 with integrated chronograph'
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: '5-Year Warranty',
        description: 'International warranty with worldwide service'
      },
      {
        icon: <Certificate className="w-5 h-5" />,
        title: 'Chronometer Certified',
        description: 'Precision tested and certified for accuracy'
      },
      {
        icon: <History className="w-5 h-5" />,
        title: 'Heritage',
        description: 'Part of the iconic Royal Oak collection since 1972'
      }
    ],
    status: 'In Stock',
    rating: 4.9,
    awards: [
      'GPHG 2023 - Sports Watch Prize Finalist',
      'Watch of the Year 2023 - Innovation in Design'
    ]
  },
  'stellar-gmt': {
    id: 'stellar-gmt',
    brand: 'MORCO AURA',
    name: 'Stellar GMT',
    collection: 'Celestial Series',
    reference: 'MA2024.GMT.001',
    price: '150DH',
    marketValue: {
      min: '70DH',
      max: '300DH'
    },
    description: "ساعة جي-شوك GA-2100-1A1 هي ساعة رياضية أنيقة بتصميم عصري وهيكل رفيع. مزودة بحركة رقمية وعقارب مع مقاومة للصدمات بفضل مادة الراتنج المقوى بألياف الكربون، وهي مقاومة للماء حتى 200 متر. تحتوي على إضاءة LED ونظام توقيت عالمي، مما يجعلها مثالية للنشاطات الرياضية والمغامرات..",
    releaseYear: '2024',
    limited: false,
    condition: {
      rating: 'New',
      details: 'Factory fresh condition with all protective seals intact',
      serviceHistory: []
    },
    authentication: {
      serialNumber: 'H98234',
      papers: true,
      box: true,
      warranty: {
        type: 'Manufacturer',
        expiration: '2029-02-15',
        transferable: true
      }
    },
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      movement: {
        type: 'Automatic chronograph',
        caliber: 'Calibre 4401',
        details: 'In-house integrated chronograph movement',
        frequency: '28,800 vph (4 Hz)',
        jewels: '40 jewels',
        power: '70 hours power reserve',
        chronometer: true,
        finishing: [
          'Côtes de Genève',
          'Circular graining',
          'Polished bevels'
        ]
      },
      case: {
        material: 'Grade 5 Titanium',
        diameter: '42mm',
        thickness: '15.2mm',
        waterResistance: '100m / 330ft',
        crystal: 'Sapphire with anti-reflective coating',
        backCase: 'Sapphire crystal exhibition caseback',
        finishing: [
          'Satin-brushed surfaces',
          'Polished bevels',
          'Sandblasted recesses'
        ]
      },
      dial: {
        color: 'Slate grey',
        material: 'Brass with Méga Tapisserie pattern',
        indices: 'Applied white gold hour markers',
        hands: 'Royal Oak hands with luminescent coating',
        features: [
          "Chronograph counters at 3, 6, and 9 o'clock",
          "Date window at 4:30",
          "Tachymeter scale"
        ]
      },
      functions: {
        timekeeping: 'Hours, minutes, small seconds',
        complications: [
          'Flyback chronograph',
          'Date',
          'Tachymeter'
        ],
        additional: 'Column wheel chronograph mechanism',
        luminescence: 'Super-LumiNova® on hands and indices'
      },
      bracelet: {
        type: 'Integrated bracelet',
        material: 'Grade 5 Titanium',
        clasp: 'AP folding clasp with security system',
        width: '22mm tapering to 18mm'
      }
    },
    features: [
      {
        icon: <Tool className="w-5 h-5" />,
        title: 'In-House Movement',
        description: 'Manufacture Calibre 4401 with integrated chronograph'
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: '5-Year Warranty',
        description: 'International warranty with worldwide service'
      },
      {
        icon: <Certificate className="w-5 h-5" />,
        title: 'Chronometer Certified',
        description: 'Precision tested and certified for accuracy'
      },
      {
        icon: <History className="w-5 h-5" />,
        title: 'Heritage',
        description: 'Part of the iconic Royal Oak collection since 1972'
      }
    ],
    status: 'In Stock',
    rating: 4.9,
    awards: [
      'GPHG 2023 - Sports Watch Prize Finalist',
      'Watch of the Year 2023 - Innovation in Design'
    ]
  },
  'submariner-date': {
    id: 'submariner-date',
    brand: 'MORCO AURA',
    name: 'Submariner Date',
    collection: 'rolex collection',
    reference: '26238TI.OO.CH001TI.01',
    price: '150DH',
    marketValue: {
      min: '70DH',
      max: '150DH'
    },
    description: "رولكس ميلغوس بلانش (Rolex Milgauss Blanche) ساعة رولكس ميلغوس بلانش هي تحفة فنية تعكس الأناقة والابتكار التقني. تتميز بمينا أبيض نقي يرمز إلى البساطة والرقي، مع مؤشرات برتقالية تضفي تباينًا جذابًا وأسلوبًا عصريًا. تم تصميمها لتلبية احتياجات المهنيين في المجالات العلمية والهندسية، حيث توفر مقاومة استثنائية للمجالات المغناطيسية حتى 1000 غاوس، مما يجعلها اختيارًا مثاليًا للأداء العالي في الظروف القاسية. يتميز تصميمها بعلبة فولاذية متينة مصنوعة من الفولاذ المقاوم للصدأ 904L، وسوار أنيق يوفر راحة فائقة أثناء الارتداء. العقرب البرتقالي على شكل البرق هو توقيع مميز لسلسلة ميلغوس، مما يضيف لمسة ديناميكية تعكس روح الابتكار. إنها ساعة تجمع بين التقنية المتقدمة والجمال الراقي لعشاق التميز.",
    releaseYear: '2024',
    limited: false,
    condition: {
      rating: 'New',
      details: 'Factory fresh condition with all protective seals intact',
      serviceHistory: []
    },
    authentication: {
      serialNumber: 'H98234',
      papers: true,
      box: true,
      warranty: {
        type: 'Manufacturer',
        expiration: '2029-02-15',
        transferable: true
      }
    },
    images: [
      "https://i.imgur.com/3O4BXvu.png",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      movement: {
        type: 'Automatic chronograph',
        caliber: 'Calibre 4401',
        details: 'In-house integrated chronograph movement',
        frequency: '28,800 vph (4 Hz)',
        jewels: '40 jewels',
        power: '70 hours power reserve',
        chronometer: true,
        finishing: [
          'Côtes de Genève',
          'Circular graining',
          'Polished bevels'
        ]
      },
      case: {
        material: 'Grade 5 Titanium',
        diameter: '42mm',
        thickness: '15.2mm',
        waterResistance: '100m / 330ft',
        crystal: 'Sapphire with anti-reflective coating',
        backCase: 'Sapphire crystal exhibition caseback',
        finishing: [
          'Satin-brushed surfaces',
          'Polished bevels',
          'Sandblasted recesses'
        ]
      },
      dial: {
        color: 'Slate grey',
        material: 'Brass with Méga Tapisserie pattern',
        indices: 'Applied white gold hour markers',
        hands: 'Royal Oak hands with luminescent coating',
        features: [
          "Chronograph counters at 3, 6, and 9 o'clock",
          "Date window at 4:30",
          "Tachymeter scale"
        ]
      },
      functions: {
        timekeeping: 'Hours, minutes, small seconds',
        complications: [
          'Flyback chronograph',
          'Date',
          'Tachymeter'
        ],
        additional: 'Column wheel chronograph mechanism',
        luminescence: 'Super-LumiNova® on hands and indices'
      },
      bracelet: {
        type: 'Integrated bracelet',
        material: 'Grade 5 Titanium',
        clasp: 'AP folding clasp with security system',
        width: '22mm tapering to 18mm'
      }
    },
    features: [
      {
        icon: <Tool className="w-5 h-5" />,
        title: 'In-House Movement',
        description: 'Manufacture Calibre 4401 with integrated chronograph'
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: '5-Year Warranty',
        description: 'International warranty with worldwide service'
      },
      {
        icon: <Certificate className="w-5 h-5" />,
        title: 'Chronometer Certified',
        description: 'Precision tested and certified for accuracy'
      },
      {
        icon: <History className="w-5 h-5" />,
        title: 'Heritage',
        description: 'Part of the iconic Royal Oak collection since 1972'
      }
    ],
    status: 'In Stock',
    rating: 4.9,
    awards: [
      'GPHG 2023 - Sports Watch Prize Finalist',
      'Watch of the Year 2023 - Innovation in Design'
    ]
  },
  'seastar-2000': {
    id: 'seastar-2000',
    brand: 'Seastar 2000',
    name: 'Seastar 2000',
    collection: 'rolex collection',
    reference: '26238TI.OO.CH001TI.01',
    price: '150DH',
    marketValue: {
      min: '70DH',
      max: '150DH'
    },
    description: "رولكس ميلغوس بلانش (Rolex Milgauss Blanche) ساعة رولكس ميلغوس بلانش هي تحفة فنية تعكس الأناقة والابتكار التقني. تتميز بمينا أبيض نقي يرمز إلى البساطة والرقي، مع مؤشرات برتقالية تضفي تباينًا جذابًا وأسلوبًا عصريًا. تم تصميمها لتلبية احتياجات المهنيين في المجالات العلمية والهندسية، حيث توفر مقاومة استثنائية للمجالات المغناطيسية حتى 1000 غاوس، مما يجعلها اختيارًا مثاليًا للأداء العالي في الظروف القاسية. يتميز تصميمها بعلبة فولاذية متينة مصنوعة من الفولاذ المقاوم للصدأ 904L، وسوار أنيق يوفر راحة فائقة أثناء الارتداء. العقرب البرتقالي على شكل البرق هو توقيع مميز لسلسلة ميلغوس، مما يضيف لمسة ديناميكية تعكس روح الابتكار. إنها ساعة تجمع بين التقنية المتقدمة والجمال الراقي لعشاق التميز.",
    releaseYear: '2024',
    limited: false,
    condition: {
      rating: 'New',
      details: 'Factory fresh condition with all protective seals intact',
      serviceHistory: []
    },
    authentication: {
      serialNumber: 'H98234',
      papers: true,
      box: true,
      warranty: {
        type: 'Manufacturer',
        expiration: '2029-02-15',
        transferable: true
      }
    },
    images: [
      "https://i.imgur.com/3O4BXvu.png",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      movement: {
        type: 'Automatic chronograph',
        caliber: 'Calibre 4401',
        details: 'In-house integrated chronograph movement',
        frequency: '28,800 vph (4 Hz)',
        jewels: '40 jewels',
        power: '70 hours power reserve',
        chronometer: true,
        finishing: [
          'Côtes de Genève',
          'Circular graining',
          'Polished bevels'
        ]
      },
      case: {
        material: 'Grade 5 Titanium',
        diameter: '42mm',
        thickness: '15.2mm',
        waterResistance: '100m / 330ft',
        crystal: 'Sapphire with anti-reflective coating',
        backCase: 'Sapphire crystal exhibition caseback',
        finishing: [
          'Satin-brushed surfaces',
          'Polished bevels',
          'Sandblasted recesses'
        ]
      },
      dial: {
        color: 'Slate grey',
        material: 'Brass with Méga Tapisserie pattern',
        indices: 'Applied white gold hour markers',
        hands: 'Royal Oak hands with luminescent coating',
        features: [
          "Chronograph counters at 3, 6, and 9 o'clock",
          "Date window at 4:30",
          "Tachymeter scale"
        ]
      },
      functions: {
        timekeeping: 'Hours, minutes, small seconds',
        complications: [
          'Flyback chronograph',
          'Date',
          'Tachymeter'
        ],
        additional: 'Column wheel chronograph mechanism',
        luminescence: 'Super-LumiNova® on hands and indices'
      },
      bracelet: {
        type: 'Integrated bracelet',
        material: 'Grade 5 Titanium',
        clasp: 'AP folding clasp with security system',
        width: '22mm tapering to 18mm'
      }
    },
    features: [
      {
        icon: <Tool className="w-5 h-5" />,
        title: 'In-House Movement',
        description: 'Manufacture Calibre 4401 with integrated chronograph'
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: '5-Year Warranty',
        description: 'International warranty with worldwide service'
      },
      {
        icon: <Certificate className="w-5 h-5" />,
        title: 'Chronometer Certified',
        description: 'Precision tested and certified for accuracy'
      },
      {
        icon: <History className="w-5 h-5" />,
        title: 'Heritage',
        description: 'Part of the iconic Royal Oak collection since 1972'
      }
    ],
    status: 'In Stock',
    rating: 4.9,
    awards: [
      'GPHG 2023 - Sports Watch Prize Finalist',
      'Watch of the Year 2023 - Innovation in Design'
    ]
  },
  'gmt-master-ii': {
    id: 'gmt-master-ii',
    brand: 'MORCO AURA',
    name: 'GMT-Master II',
    collection: 'Professional Series',
    reference: 'MA2024.GMT.002',
    price: '180DH',
    marketValue: {
      min: '160DH',
      max: '200DH'
    },
    description: "The GMT-Master II represents the pinnacle of dual time zone functionality, featuring our signature ceramic bezel and precision movement. Perfect for the modern traveler.",
    releaseYear: '2024',
    limited: false,
    condition: {
      rating: 'New',
      details: 'Factory fresh condition with all protective seals intact',
      serviceHistory: []
    },
    authentication: {
      serialNumber: 'MA24GMT002',
      papers: true,
      box: true,
      warranty: {
        type: 'Manufacturer',
        expiration: '2029-02-15',
        transferable: true
      }
    },
    images: [
      "https://i.imgur.com/3O4BXvu.png",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      movement: {
        type: 'Automatic GMT',
        caliber: 'MA.24-GMT',
        details: 'In-house GMT movement',
        frequency: '28,800 vph (4 Hz)',
        jewels: '31 jewels',
        power: '70 hours power reserve',
        chronometer: true,
        finishing: [
          'Geneva stripes',
          'Circular graining',
          'Polished bevels'
        ]
      },
      case: {
        material: 'Stainless Steel 904L',
        diameter: '40mm',
        thickness: '12.1mm',
        waterResistance: '100m / 330ft',
        crystal: 'Sapphire with anti-reflective coating',
        backCase: 'Screw-down caseback',
        finishing: [
          'Polished surfaces',
          'Brushed lugs',
          'Ceramic bezel insert'
        ]
      },
      dial: {
        color: 'Black',
        material: 'Lacquered with sunburst finish',
        indices: 'Applied hour markers with luminous fill',
        hands: 'Mercedes-style with luminous coating',
        features: [
          "24-hour GMT hand",
          "Date window at 3 o'clock",
          "Bi-directional rotating bezel"
        ]
      },
      functions: {
        timekeeping: 'Hours, minutes, seconds, GMT',
        complications: [
          'Independent GMT hand',
          'Date',
          'Rotating bezel'
        ],
        additional: 'Quickset date function',
        luminescence: 'Super-LumiNova® on hands and indices'
      },
      bracelet: {
        type: 'Oyster-style bracelet',
        material: 'Stainless Steel 904L',
        clasp: 'Folding safety clasp with extension',
        width: '20mm tapering to 16mm'
      }
    },
    features: [
      {
        icon: <Tool className="w-5 h-5" />,
        title: 'In-House Movement',
        description: 'MA.24-GMT caliber with true GMT function'
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: '5-Year Warranty',
        description: 'International warranty with worldwide service'
      },
      {
        icon: <Certificate className="w-5 h-5" />,
        title: 'Chronometer Certified',
        description: 'COSC-certified for precision'
      },
      {
        icon: <History className="w-5 h-5" />,
        title: 'Heritage',
        description: 'Built on decades of watchmaking excellence'
      }
    ],
    status: 'In Stock',
    rating: 4.8,
    awards: [
      'Watch Innovation Award 2024',
      'Best GMT Watch Under $500'
    ]
  }
};

const WatchDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const watch = watchCatalog[id || ''];

  if (!watch) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Watch not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-accent-purple hover:text-accent-purple/80 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Collections
        </motion.button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-square rounded-lg overflow-hidden bg-[#1a1f36]"
            >
              <img
                src={watch.images[0]}
                alt={watch.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {watch.images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                  className="aspect-square rounded-lg overflow-hidden bg-[#1a1f36]"
                >
                  <img
                    src={image}
                    alt={`${watch.name} view ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent-yellow" />
                  <span className="text-accent-yellow font-medium">{watch.rating}</span>
                </div>
                <div className="h-4 w-px bg-border"></div>
                <span className="text-text-secondary">{watch.status}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl font-bold mb-2"
              >
                {watch.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="text-2xl font-bold text-accent-purple">{watch.price}</span>
                <div className="text-sm text-text-secondary">
                  Market Value: {watch.marketValue.min} - {watch.marketValue.max}
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-text-secondary leading-relaxed mb-8"
              >
                {watch.description}
              </motion.p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-accent-purple hover:bg-accent-purple/90 text-white py-3 rounded-lg transition-colors"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 border border-border hover:border-accent-purple/30 rounded-lg transition-colors"
              >
                <Heart className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 border border-border hover:border-accent-purple/30 rounded-lg transition-colors"
              >
                <Share2 className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {watch.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-4 rounded-lg bg-[#1a1f36] border border-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent-purple/10 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{feature.title}</h4>
                      <p className="text-sm text-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Specifications */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Technical Specifications</h3>
              
              {/* Movement */}
              <div className="space-y-4">
                <h4 className="font-medium text-accent-purple">Movement</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Type</p>
                    <p>{watch.specs.movement.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Caliber</p>
                    <p>{watch.specs.movement.caliber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Power Reserve</p>
                    <p>{watch.specs.movement.power}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Frequency</p>
                    <p>{watch.specs.movement.frequency}</p>
                  </div>
                </div>
              </div>

              {/* Case */}
              <div className="space-y-4">
                <h4 className="font-medium text-accent-purple">Case</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Material</p>
                    <p>{watch.specs.case.material}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Diameter</p>
                    <p>{watch.specs.case.diameter}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Water Resistance</p>
                    <p>{watch.specs.case.waterResistance}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Crystal</p>
                    <p>{watch.specs.case.crystal}</p>
                  </div>
                </div>
              </div>

              {/* Authentication */}
              <div className="space-y-4">
                <h4 className="font-medium text-accent-purple">Authentication & Warranty</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Serial Number</p>
                    <p>{watch.authentication.serialNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Papers</p>
                    <p>{watch.authentication.papers ? 'Included' : 'Not included'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Warranty Type</p>
                    <p>{watch.authentication.warranty.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Warranty Expiration</p>
                    <p>{watch.authentication.warranty.expiration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            {watch.awards.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Awards & Recognition</h3>
                <div className="space-y-2">
                  {watch.awards.map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-3 text-text-secondary"
                    >
                      <Award className="w-5 h-5 text-accent-yellow" />
                      <span>{award}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchDetails;