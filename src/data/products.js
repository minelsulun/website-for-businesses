import img1 from '../images/WhatsApp Image 2025-11-17 at 14.41.25.jpeg'
import img2 from '../images/WhatsApp Image 2025-11-17 at 14.41.39.jpeg'
import img3 from '../images/WhatsApp Image 2025-11-17 at 14.42.53.jpeg'
import img4 from '../images/WhatsApp Image 2025-11-17 at 14.43.15.jpeg'

export const productCategories = [
  {
    title: 'Prefabrik Modüller',
    description:
      'Modüler plan seçeneği, yüksek taşıyıcı çelik karkas ve farklı cephe çözümleriyle üretime hazır konut ve ofis üniteleri.',
    measurements: ['Genişlik: 3.00 m', 'Uzunluk: 6.00 / 12.00 m', 'Tavan yüksekliği: 2.80 m'],
    image: img1,
  },
  {
    title: 'Karo & Zemin Çözümleri',
    description:
      'İç ve dış mekanlara uygun karo, drenajlı zemin ve modüler panel sistemleri. PDF’de belirtilen ölçüler ile tam uyumlu.',
    measurements: ['198 x 163 mm', '243 x 210 mm', 'Kalınlık: 40 / 60 mm'],
    image: img2,
  },
  {
    title: 'Çelik Yapı Elemanları',
    description:
      'Galvanizli taşıyıcı profiller, birleşim detayları ve sahada hızlı montaj için rafine edilmiş çelik elemanlar.',
    measurements: ['S355 kalite çelik', 'Galvaniz kaplama 275 gr/m²', 'Opsiyonel brandalı kaplama'],
    image: img3,
  },
  {
    title: 'Görme Engelli Kılavuz Karolar',
    description:
      'PDF sayfa 18’deki uyarıcı yüzey desenleriyle aynı ölçülerde, ISO standartlı dış mekan karoları.',
    measurements: ['300 x 300 mm', 'Kalınlık: 25 mm', 'UV dayanımlı dokulu yüzey'],
    image: img4,
  },
]

export const productDetails = [
  {
    code: 'PM-198',
    size: '198 x 163 mm',
    thickness: '60 mm',
    coverage: '10 m²',
    capacity: 'Taşıma kapasitesi: Yok',
    reference: 'PDF ref: 140',
    description: 'Standart prefabrik karo, drenajlı altyapı için seri üretim.',
  },
  {
    code: 'PM-243',
    size: '243 x 210 mm',
    thickness: '40 mm',
    coverage: '12 m²',
    capacity: 'Taşıma kapasitesi: 400 kg/m²',
    reference: 'PDF ref: 142',
    description: 'Kapalı saha geçişleri için hafif kompozit panel.',
  },
  {
    code: 'ÇK-320',
    size: '320 x 1200 mm',
    thickness: '80 mm',
    coverage: '8 m²',
    capacity: 'Taşıma kapasitesi: 650 kg/m²',
    reference: 'PDF ref: 156',
    description: 'Çelik karkaslı yüksek dayanımlı panel döşeme.',
  },
  {
    code: 'GK-300',
    size: '300 x 300 mm',
    thickness: '25 mm',
    coverage: 'Modüler',
    capacity: 'Taşıma kapasitesi: 200 kg/m²',
    reference: 'PDF ref: 18',
    description: 'Görme engelli kılavuz karo, uyarıcı yüzey desenli.',
  },
]

export const applicationAreas = [
  {
    title: 'Endüstriyel Kampüs',
    area: 'Uygulama alanı: Fabrika ve üretim hatları',
    image: img1,
  },
  {
    title: 'Kurumsal Ofis Alanı',
    area: 'Uygulama alanı: Yönetim ofisleri ve showroom',
    image: img2,
  },
  {
    title: 'Şantiye Yaşam Alanı',
    area: 'Uygulama alanı: Modüler konaklama ve yemekhane',
    image: img3,
  },
  {
    title: 'Altyapı Çözümleri',
    area: 'Uygulama alanı: Uyarıcı karolar, yürüyüş yolları',
    image: img4,
  },
  {
    title: 'Altyapı Çözümleri',
    area: 'Uygulama alanı: Uyarıcı karolar, yürüyüş yolları',
    image: img4,
  },
  {
    title: 'Altyapı Çözümleri',
    area: 'Uygulama alanı: Uyarıcı karolar, yürüyüş yolları',
    image: img4,
  }
]

export const technicalSpecs = [
  {
    parameter: 'Panel kalınlık seçenekleri',
    value: '40 / 60 / 80 mm',
    description: 'Çift taraflı galvaniz sac + EPS / taş yünü dolgu',
  },
  {
    parameter: 'Taşıyıcı karkas',
    value: 'S355 çelik, 2.5 mm',
    description: 'Galvaniz kaplama, modüler civata bağlantıları',
  },
  {
    parameter: 'Zemin kaplaması',
    value: 'PVC, karo veya kompozit alternatifleri',
    description: 'Kaymaz yüzey, EN 13845 sertifikalı',
  },
  {
    parameter: 'Isı / ses performansı',
    value: 'U değeri 0.32 W/m²K',
    description: 'Mineral yalıtım + buhar kesici detay',
  },
]

