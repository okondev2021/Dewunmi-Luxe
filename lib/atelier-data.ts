export interface FabricSwatch {
  id: string;
  name: string;
  origin: string;
  composition: string;
  weight: string;
  season: string;
  description: string;
  imageUrl: string;
  accentColor: string;
}

export interface LookbookPlate {
  id: string;
  plateNumber: string;
  title: string;
  category: 'trousers' | 'sets' | 'suiting' | 'native-femme' | 'native-homme';
  categoryLabel: string;
  tag: string;
  fabrication: string;
  description: string;
  imageUrl: string;
  details: string[];
  calibrationNo?: string;
  priceEstimate?: string;
}

export const FABRIC_SWATCHES: FabricSwatch[] = [
  {
    id: 'asooke-iseyin-navy',
    name: 'Iseyin Hand-Loomed Aso-Oke',
    origin: 'Iseyin Weaving Guilds, Oyo State, Nigeria',
    composition: '100% Organic Raw Cotton & Metallic Gilt Filament',
    weight: '380 GSM Heavy Structural Drape',
    season: 'All-Year Ceremonial / Lagos Climate Optimized',
    description: 'Woven on ancestral narrow wooden strip looms by master artisans. Provides unparalleled crisp structure for sovereign Agbadas and sculptured lapels.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaNmkk9kOA8xkggNHNbA5WBbLosw8Kuv_z2wyMeUyGMughlP9EB2Hfiq7AvqiRUFLcRlyV1VqjrpNln3l0PFXc54x_obqEDkGtDPNKO6dnhpms30-5968snLHYptnxe6sJJ5C_3KPXKFVP3i88GJjm4-AGFy5DXsrjJpfKCM8ELdf729UuM5HcFI7AZaqdZYWW9Wy_9sb9kw9hkrobWH4GxRqIBIkeDa00yKk-M0gmQKJVFs813eI',
    accentColor: '#B8975A'
  },
  {
    id: 'adire-abeokuta-indigo',
    name: 'Abeokuta Heritage Indigo Silk',
    origin: 'Itoku Market Artisan Compound, Abeokuta',
    composition: '100% Hand-Dyed Mulberry Silk & Cassava Resist',
    weight: '160 GSM Fluid Kinetic Weft',
    season: 'Warm Weather / Evening Soirée',
    description: 'Natural fermented indigo dyed using hand-drawn cassava paste geometry (Adire Eleko). Breathes effortlessly in tropical moisture.',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VbeGiOIxyjFEMOj3seOiX6o_73GH5fkyviDwPvHRcadzKAcBSOi93aJYT-KMO3au49lX9wgjL9z0gArDJJreqFF2Ox-wOyMDeCc08Gi2IAe0eVO1m675lGoFv3fMvkcj-1uqew-nZSjubyoNceNla6ZgE7m1T06uC0lOP8NxSGzbr4Stqx7wwVoWGOt1aFNifl-ZBl5fzPa2pjbhFnqJgWujeNe2mD7ub8PYiDaeqD-7--3eOJr66S',
    accentColor: '#4A6B82'
  },
  {
    id: 'tropical-wool-sand',
    name: 'Sandstone High-Twist Tropical Wool',
    origin: 'Biella Wool Guilds / Commissioned for Lagos',
    composition: 'Super 140s Open Plain-Weave Worsted Wool',
    weight: '230 GSM Ultra-Breathable',
    season: 'Year-Round Boardroom & Waterfront Leisure',
    description: 'High-twist yarns spring back naturally against humidity wrinkles while maintaining architectural crease sharpness.',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VzsogPawfV6KlyMlCXrJTbsLlSu0PFgySwm-meAocFln5-X8TN9udR4VKbTxKVGVtppFFrwwCRP-SXKvNwtmfKMhBuTLfXWjl9EoonWkpKFSlxg_ZiYYZdHZ61NXS0SmNm_Ucf9ps-QvO-MMfBqXe9xoPtDwQtvUSl_VaxilenAh96beTCcBBCeiTkD_n2kQicw47oNgTrfQTu0jFrk8wngb78qkNtv4fpb3RdFP9rf7bYTzwAhpf9vw',
    accentColor: '#C4B59D'
  },
  {
    id: 'charcoal-pinstripe-wool',
    name: 'Midnight Architectural Chalkstripe',
    origin: 'Huddersfield Sartorial Mills',
    composition: '100% Pure Virgin Wool with Floating Horsehair Weft',
    weight: '270 GSM Year-Round Suiting',
    season: 'Diplomatic & Executive Assembly',
    description: 'Subtle hand-felled chalk lines drafted to visually elongate posture and hold the chest canvas firmly.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdoGFDnnwqYaOprAhKzhWZBaLmRMENPUcDIRqTVhkAwmnKupoRv1g1FP_FwnQsphIXS4ASagCjdxaAcFnaCwmH9jwFsJp7_BD_nWtQK38uQakQ7VMaL0T32frqhuuEWYTTCU1Gp0e4AiaZo7ZqtV6hanxLK-W_dmNmw3jl7I6k0Gm2bMlJiwe3-0-WJEMA1vpbUFJ4h1-TKtjmuriQsV3ZBR7xzt39KeE9rO4c-lFBQevZ1zW12Yc',
    accentColor: '#2B2E33'
  },
  {
    id: 'emerald-brocade-gilt',
    name: 'Emerald Sculptural Damask Brocade',
    origin: 'Como Guilds & West African Heritage Atelier',
    composition: 'Raw Silk, Viscose & Metallic Lurex Thread',
    weight: '340 GSM Volumetric Origami Fold',
    season: 'Haute Festive & Coronation Attire',
    description: 'Lustrous emerald tones interwoven with micro-gilt filaments, engineered to support structured sculptural sleeve flares without collapsing.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0wt8FVz13Eo3I1WzKr9eMKTW4Xr9EC4Jk-yFaOTJSIY2omQLImCGWzAZY5YOKgyMwX2GYVPFxk9r6X4mxnRUORMjVo8t2jAWKLhJJ78FhR3yniMeps7PuQQ7TO21WXSrtlzl2SJXamKBWjrC_mF7sPlos5AMY6TjOWEPyC5ZeIxENrRZIXk27V16B9XbMVW3sxDGtXSuYkF-0DPA9rmXF_m1AKzLe03-e9HUHt7Q-z1m4DBcpnOQ',
    accentColor: '#1A4D3E'
  }
];

export const LOOKBOOK_PLATES: LookbookPlate[] = [
  {
    id: 'plate-1',
    plateNumber: 'PLATE I',
    title: 'The Sculptural Trouser & Breasted Vest',
    category: 'trousers',
    categoryLabel: '01 Corporate Trousers & Vests',
    tag: 'READY FOR COMMISSION',
    fabrication: 'PREMIUM SAND-TONE WOOL-BLEND // HAND-PADDED CANVAS // MADE IN LAGOS',
    description: 'Constructed with a continuous Hollywood waistband, hand-sewn button fly, and double forward pleats engineered specifically to accommodate kinetic gait without lateral pulling across the hip.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTziFojADkVwCqIIE9s2zJppKbZLECXAPqJq38XuHrWlh3mFAvXgbkCz3avHS1kk_X2gEa84wRJ9Ajd8j5JVxIGF0Vr9hD3dGboTGkg456E8T-sIxs3BFehEr8Uiq1c7znHAMwMdqv3JzVznk1lLaUbW54MypC0RPl1pmGtRcQhXgx5MfW6ynfb5dCpBT_mtscGH-39CkouhS77m3qtlBGTWvuDrPegcg2r_s0NI1p1jSPvd9sQFw',
    details: [
      'Continuous Hollywood High-Rise Waistband',
      'Hand-sewn horn button fastenings',
      'Double forward pleats for kinetic stride',
      'Floating horsehair canvas vest structure'
    ],
    calibrationNo: 'CALIBRATION NO. 418',
    priceEstimate: 'Custom Made from ₦450,000'
  },
  {
    id: 'plate-2',
    plateNumber: 'PLATE II',
    title: 'Chalk & Shear Metrics',
    category: 'trousers',
    categoryLabel: '01 Corporate Trousers & Vests',
    tag: 'ATELIER METRIC',
    fabrication: 'BASTED CUT ON UNBLEACHED LINEN // VINTAGE SHEFFIELD SHEARS',
    description: 'Plate 02 — Basted Cut & Chalk Geometry. Cut individually per client with 8-inch Sheffield shears; no standardized block patterns ever enter our cutting room.',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XGARfCuwj_yLCwIQh4VWAYJHQgga5gIfpXWp9RhjkusWOpTV5PR5RFH0K-BxGc-xExf0nS8D87N1svzwE0Vlbur3dIKjQvmsBmYeuL7rZ9UKTXl5Vty7Ga9N9ETYCZ3kqq62MlcUvXIu85FgIZkSb2P5FB1j3hmt5s2Lz-61zKhA5Sq21ieI0sGT2-LJGv_yx_-8CZmuD8KRvCOHmdRyWg0T77MAWih5ZuefokYNMpPbPEhyi3gtxm',
    details: [
      'Hand-chalked bespoke paper drafts',
      'Zero standardized grading blocks',
      'Single-artisan cutting lineage',
      'Waxed tailor basting threads'
    ],
    calibrationNo: 'ARCHIVE 19/30'
  },
  {
    id: 'plate-3',
    plateNumber: 'PLATE III',
    title: 'The Architectural Power Suit',
    category: 'suiting',
    categoryLabel: '03 Bespoke Suiting',
    tag: 'COMMANDING COMPOSURE',
    fabrication: 'BREATHABLE TROPICAL CHARCOAL WOOL // 4-INCH PEAK LAPEL // CUT IN LAGOS',
    description: 'Constructed with extended roped shoulders (con rollino) and unyielding chest canvas, tailored to articulate supreme commanding composure in diplomatic assembly.',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XTNp4f7gX9dj3N7c3BSl__ZcXwokIFYA_1Ti__MWPxitD2d8xq4mTpeF2oFT-1gfSZQ5DA0ca-jeoO4wxsRdqrUCxwhZq0-Adj2Pm_oH0LTR4JH_q4uwkjPiOibG7K2IC1GMiUtjZ805DfbZPfJc5jyMFN1RX7Y4-3G4zyPvneqMEsX3fJ_AgSTXjfzZfvtMsChyDwscLQoHxH981GZTFZvBJUzsE0NUgqJIshL3T4H876nzQ3FJmy',
    details: [
      '4-Inch Hand-Shaped Peak Lapels',
      'Con Rollino Roped Shoulder Architecture',
      'Full Floating Horsehair Canvas Interlining',
      'Bemberg Cupro Breathable Lining'
    ],
    calibrationNo: 'CALIBRATION NO. 502',
    priceEstimate: 'Custom Made from ₦520,000'
  },
  {
    id: 'plate-4',
    plateNumber: 'PLATE IV',
    title: 'Asymmetrical Pinstripe Ensemble',
    category: 'sets',
    categoryLabel: '02 Two-Piece Silhouettes',
    tag: 'EDITORIAL SILHOUETTE',
    fabrication: 'LIGHTWEIGHT STRIPED WOOL // HAND-SEWN MILANESE BUTTONHOLE // HANDMADE IN LAGOS',
    description: 'A contemporary exploration of directional chalk striping, drafted to accentuate vertical kinetic lines without compromising structural stability.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdoGFDnnwqYaOprAhKzhWZBaLmRMENPUcDIRqTVhkAwmnKupoRv1g1FP_FwnQsphIXS4ASagCjdxaAcFnaCwmH9jwFsJp7_BD_nWtQK38uQakQ7VMaL0T32frqhuuEWYTTCU1Gp0e4AiaZo7ZqtV6hanxLK-W_dmNmw3jl7I6k0Gm2bMlJiwe3-0-WJEMA1vpbUFJ4h1-TKtjmuriQsV3ZBR7xzt39KeE9rO4c-lFBQevZ1zW12Yc',
    details: [
      'Directional Asymmetric Pinstripe Alignment',
      'Milanese Buttonhole hand-sewn with silk gimp',
      'Unstructured soft shoulder slope',
      'Seamless pocket welts'
    ],
    calibrationNo: 'CALIBRATION NO. 441',
    priceEstimate: 'Custom Made from ₦480,000'
  },
  {
    id: 'plate-5',
    plateNumber: 'PLATE V',
    title: 'The Midnight Geometric Agbada',
    category: 'native-homme',
    categoryLabel: '05 Haute Agbada & Kaftans (Homme)',
    tag: 'HAUTE HERITAGE',
    fabrication: 'HEAVYWEIGHT HAND-LOOMED RAW SILK & WOOL // ANTIQUE GOLD CORDWORK EMBROIDERY',
    description: 'Reimagining the grand sovereign Agbada with tailored shoulders and controlled drape geometry. Features dense tambour stitch embroidery along the breastplate executed by our master artisans in Lagos.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQjXf5jdCca_mif-rg5bK6IGigfOAHpOeZlR5X_A3xsCj1ZfeFK8MyL6Il_DInBRBHXJoUiVsEefLJFNFPzCAKSHCf_sRoqpB82CTuvvDzsnrDYIj0EUwh-Ws88h_BRgJxulawrGzaU-ssYxW7nTeuXADsZkxL5JMxRvVNULXOqr29Qm_p9DV9gHEwkjKawMELp2QXt-WlvlR_omw5WfBqrH69jwj9uAykrBYb-7eIpmGSD861jA8',
    details: [
      'Iseyin Handwoven Raw Silk Aso-Oke Base',
      'Antique Gold Cordwork Tambour Embroidery',
      'Architectural Shoulder Epaulette Framing',
      'Matching Tapered Kembe & Buba Set'
    ],
    calibrationNo: 'PROVENANCE #883-LAG',
    priceEstimate: 'Custom Made from ₦550,000'
  },
  {
    id: 'plate-6',
    plateNumber: 'PLATE VI',
    title: 'The Emerald Sculptural Iro & Buba',
    category: 'native-femme',
    categoryLabel: '04 Native Attire (Femme)',
    tag: 'FEMME COUTURE',
    fabrication: 'BESPOKE WOVEN ASO-OKE BROCADE WITH STRUCTURED EPAULETTE FOLD',
    description: 'An architectural interpretation of Yoruba ceremonial vestments. Structured internal corsetry supports voluminous, origami-folded sleeves woven with metallic gilt filament.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0wt8FVz13Eo3I1WzKr9eMKTW4Xr9EC4Jk-yFaOTJSIY2omQLImCGWzAZY5YOKgyMwX2GYVPFxk9r6X4mxnRUORMjVo8t2jAWKLhJJ78FhR3yniMeps7PuQQ7TO21WXSrtlzl2SJXamKBWjrC_mF7sPlos5AMY6TjOWEPyC5ZeIxENrRZIXk27V16B9XbMVW3sxDGtXSuYkF-0DPA9rmXF_m1AKzLe03-e9HUHt7Q-z1m4DBcpnOQ',
    details: [
      'Origami-Folded Sculptural Sleeve Geometry',
      'Integrated Internal Waist Boning Corsetry',
      'Lustrous Metallic Gilt Brocade Filament',
      'Wrap Iro with Concealed Hand-Tacked Fasteners'
    ],
    calibrationNo: 'ARCHIVE FEMME N° 08',
    priceEstimate: 'Custom Made from ₦510,000'
  }
];
