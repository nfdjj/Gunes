const whatsappBase = 'https://wa.me/905526857270';

const translations = {
  tr: {
    'brand.kicker': 'بالتعاون مع',
    'hero.eyebrow': 'GÜNEŞ POLİKARBON İLE İŞ BİRLİĞİ',
    'hero.title': 'Her Alanda Doğal Işığı Getirin.',
    'hero.support': 'Premium polikarbon çözümleriyle çatı, endüstriyel alan ve modern mimari projeler için daha fazla doğal ışık.',
    'cta.primary': 'Teklif Al',
    'cta.secondary': 'WhatsApp',
    'hero.microcopy': 'Hızlı teklif için proje ölçüsü, kullanım alanı ve miktarı paylaşın.',
    'slide.sunbright.name': 'SUNBRIGHT',
    'slide.sunbright.meta': 'Multiwall Panel',
    'slide.sunbright.tag': 'Işık + Dayanıklılık',
    'slide.sunlighter.name': 'SUNLIGHTER',
    'slide.sunlighter.meta': 'Endüstriyel Işık',
    'slide.sunlighter.tag': 'Isıl Dengede',
    'slide.sunwave.name': 'SUNWAVE',
    'slide.sunwave.meta': 'Çatı Sistemi',
    'slide.sunwave.tag': 'UV Koruma',
    'messages.general': 'Merhaba, GÜNEŞ POLİKARBON ürünleri hakkında bilgi ve projem için teklif almak istiyorum.',
    'messages.sunbright': 'Merhaba, SUNBRIGHT ürünü hakkında bilgi ve fiyat teklifi almak istiyorum.',
    'messages.sunlighter': 'Merhaba, SUNLIGHTER ürünü hakkında bilgi ve fiyat teklifi almak istiyorum.',
    'messages.sunwave': 'Merhaba, SUNWAVE ürünü hakkında bilgi ve fiyat teklifi almak istiyorum.'
  },
  en: {
    'brand.kicker': 'In collaboration with',
    'hero.eyebrow': 'IN COLLABORATION WITH GÜNEŞ POLİKARBON',
    'hero.title': 'Bring Natural Light Into Every Space.',
    'hero.support': 'Premium polycarbonate solutions designed to bring more daylight to rooftops, industrial spaces and modern architecture projects.',
    'cta.primary': 'Get a Quote',
    'cta.secondary': 'WhatsApp',
    'hero.microcopy': 'Share project size, usage area and quantity for a fast quotation.',
    'slide.sunbright.name': 'SUNBRIGHT',
    'slide.sunbright.meta': 'Multiwall Panel',
    'slide.sunbright.tag': 'Light + Strength',
    'slide.sunlighter.name': 'SUNLIGHTER',
    'slide.sunlighter.meta': 'Industrial Light',
    'slide.sunlighter.tag': 'Thermal Balance',
    'slide.sunwave.name': 'SUNWAVE',
    'slide.sunwave.meta': 'Roof System',
    'slide.sunwave.tag': 'UV Protection',
    'messages.general': 'Hello, I would like information and a quotation for GÜNEŞ POLİKARBON products for my project.',
    'messages.sunbright': 'Hello, I would like information and a price quotation for the SUNBRIGHT product.',
    'messages.sunlighter': 'Hello, I would like information and a price quotation for the SUNLIGHTER product.',
    'messages.sunwave': 'Hello, I would like information and a price quotation for the SUNWAVE product.'
  },
  ar: {
    'brand.kicker': 'بالتعاون مع',
    'hero.eyebrow': 'بالتعاون مع GÜNEŞ POLİKARBON',
    'hero.title': 'أدخل الضوء الطبيعي إلى كل مساحة.',
    'hero.support': 'حلول بولي كاربونات عالية الجودة لزيادة ضوء النهار في الأسقف والمناطق الصناعية والمشاريع المعمارية الحديثة.',
    'cta.primary': 'احصل على عرض سعر',
    'cta.secondary': 'واتساب',
    'hero.microcopy': 'شارك حجم المشروع ونوع الاستخدام والكمية للحصول على عرض سعر سريع.',
    'slide.sunbright.name': 'SUNBRIGHT',
    'slide.sunbright.meta': 'لوحة متعددة الجدران',
    'slide.sunbright.tag': 'ضوء + متانة',
    'slide.sunlighter.name': 'SUNLIGHTER',
    'slide.sunlighter.meta': 'إضاءة صناعية',
    'slide.sunlighter.tag': 'توازن حراري',
    'slide.sunwave.name': 'SUNWAVE',
    'slide.sunwave.meta': 'نظام السقف',
    'slide.sunwave.tag': 'حماية من الأشعة فوق البنفسجية',
    'messages.general': 'مرحباً، أريد الحصول على معلومات وعرض سعر لمنتجات GÜNEŞ POLİKARBON لمشروعي.',
    'messages.sunbright': 'مرحباً، أريد معلومات وعرض سعر لمنتج SUNBRIGHT.',
    'messages.sunlighter': 'مرحباً، أريد معلومات وعرض سعر لمنتج SUNLIGHTER.',
    'messages.sunwave': 'مرحباً، أريد معلومات وعرض سعر لمنتج SUNWAVE.'
  }
};

const state = { language: 'tr' };

function buildWhatsAppLink(productKey) {
  const current = translations[state.language];
  const productName = productKey || 'general';
  const message = current['messages.' + productName] || current['messages.general'];
  return whatsappBase + '?text=' + encodeURIComponent(message);
}

function applyTranslations() {
  const current = translations[state.language];

  document.documentElement.lang = state.language;
  document.body.setAttribute('dir', state.language === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (current[key]) {
      node.textContent = current[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const active = button.dataset.lang === state.language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  document.querySelectorAll('.whatsapp-link').forEach((link) => {
    const product = link.dataset.product || 'general';
    link.href = buildWhatsAppLink(product);
  });
}

function activateSlide(index) {
  const slides = document.querySelectorAll('.product-slide');
  const dots = document.querySelectorAll('.dot');

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === index);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === index);
  });
}

function startCarousel() {
  const slides = document.querySelectorAll('.product-slide');
  let index = 0;

  if (!slides.length) return;

  const cycle = () => {
    index = (index + 1) % slides.length;
    activateSlide(index);
  };

  document.querySelectorAll('.dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      const next = Number(dot.dataset.slide || 0);
      index = next;
      activateSlide(index);
    });
  });

  window.setInterval(cycle, 3600);
}

function initLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      if (!lang) return;
      state.language = lang;
      applyTranslations();
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initLanguageButtons();
  startCarousel();
});
