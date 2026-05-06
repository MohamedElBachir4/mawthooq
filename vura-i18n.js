/**
 * VURA — دعم العربية / الفرنسية / الإنجليزية (واجهة فقط)
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'vura_lang';

  /** لون فيروزي لافت للعين (#40E0D0) — أزرار اللغة + تمييز العملة */
  function injectVuraAccentStyle() {
    if (document.getElementById('vura-accent-turquoise')) return;
    var s = document.createElement('style');
    s.id = 'vura-accent-turquoise';
    s.textContent =
      '.vura-lang-btn.vura-lang-on{background:linear-gradient(145deg,#40E0D0,#2dc4b4)!important;color:#082032!important;font-weight:800!important;' +
      'box-shadow:0 0 0 2px rgba(64,224,208,.5),0 12px 36px -10px rgba(64,224,208,.75)!important}' +
      '.vura-lang-btn:not(.vura-lang-on):hover{background-color:rgba(64,224,208,.16)!important}' +
      '.vura-currency-mark{color:#119b8f!important;font-weight:800}';
    document.head.appendChild(s);
  }
  injectVuraAccentStyle();

  window.VURA_UI = {
    ar: {
      lang_group_aria: 'اختيار اللغة',
      currency_short: 'د.ج',
      meta_title_index: 'VURA — تجميل أصلي وعناية بالبشرة والمنتجات الصحية',
      meta_title_products: 'VURA — المنتجات',
      meta_title_product_detail: 'VURA — تفاصيل المنتج',
      meta_title_verify: 'VURA — التحقق من الأصالة',
      meta_title_login: 'VURA — تسجيل دخول الموزع',
      meta_title_dashboard: 'VURA — لوحة تحكم الموزع',
      meta_not_found: 'VURA — منتج غير موجود',
      aria_home: 'VURA — الرئيسية',
      aria_menu: 'القائمة',
      title_scan_qr: 'مسح رمز QR',
      nav_home: 'الرئيسية',
      nav_products: 'المنتجات',
      nav_distributor: 'تسجيل دخول الموزع',
      nav_verify_long: 'التحقق من المنتجات الأصلية',
      nav_verify_short: 'تحقق الأصالة',
      nav_store: 'المتجر',
      browse_products: 'تصفح المنتجات',
      products_detail: 'التفاصيل',
      hero_badge: 'عناية بالبشرة · جمال أصلي · منتجات صحية',
      hero_welcome: 'مرحباً بك في',
      hero_tagline: 'VURA منصة متخصصة في بيع منتجات التجميل الأصلية والمنتجات الصحية',
      hero_body: 'نختار لك مستحضرات التجميل وعناية بالبشرة ومنتجات صحية أصلية بعناية، مع تجربة تسوق هادئة وتأكيد أصالة عبر مسح رمز QR على العبوة — كل ذلك بواجهة بسيطة تركز على راحتك.',
      btn_browse_products: 'تصفح المنتجات',
      btn_verify_authenticity: 'التحقق من أصالة المنتج',
      hero_stat1: 'منتجات مختارة بعناية',
      hero_stat2: 'التحقق من الأصالة عبر QR',
      card_routine_title: 'روتين ناعم كل يوم',
      card_routine_sub: 'ترطيب · تنظيف لطيف · حماية يومية',
      card_demo: 'واجهة استعراض — بيانات تجريبية',
      why_title: 'لماذا VURA؟',
      why_sub: 'منصة تجمع بين جمال التصميم وسهولة التصفح — مع مسار واضح للتحقق من أصالة ما تشتريه.',
      feat1_title: 'أصلية المنتج',
      feat1_body: 'اطمئن عبر مسح QR والاطلاع على معلومات موجزة عن المنتج.',
      feat2_title: 'تجربة ناعمة',
      feat2_body: 'ألوان مستوحاة من الهوية وبطاقات منتجات واضحة على كل الشاشات.',
      feat3_title: 'عناية بالبشرة والصحة',
      feat3_body: 'تركيز على التجميل والعناية اليومية والمنتجات الصحية الموثوقة.',
      feat4_title: 'للموزعين',
      feat4_body: 'لوحة تحكم تجريبية لإدارة العرض.',
      cta_title: 'ابدأ جولة التسوق أو تحقق من أصالة منتجك',
      cta_sub: 'كلاهما متاح بلمسة واحدة — تصميم واجهة فقط دون معالجة دفع أو مخزون حقيقي.',
      cta_shop: 'تصفح المنتجات',
      cta_qr: 'التحقق عبر QR',
      footer_about: 'منصة لبيع منتجات التجميل والعناية بالبشرة والمنتجات الصحية الأصلية — واجهة تجريبية بدون خلفية برمجية.',
      footer_products: 'المنتجات',
      footer_verify: 'التحقق',
      footer_distributors: 'الموزعون',
      footer_rights: '© 2026 VURA — جميع الحقوق محفوظة.',
      products_header_title: 'منتجات التجميل والعناية والصحة',
      products_header_sub: 'VURA منصة متخصصة في بيع منتجات التجميل الأصلية والمنتجات الصحية — البيانات أدناه للعرض فقط.',
      products_footer_verify: 'التحقق من الأصالة',
      verify_badge: 'محاكاة الماسح',
      verify_title: 'التحقق من الأصالة',
      verify_lead: 'قم بمسح رمز QR للتحقق من أصالة المنتج',
      verify_note: 'هذه شاشة وهمية للعرض — لا يتم استخدام كاميرا حقيقية هنا.',
      verify_align: 'محاذاة الرمز داخل الإطار',
      verify_ready: 'جاهز للمسح… (عرض تجريبي)',
      verify_info: 'في النسخة الكاملة للمنصة، ستُفتح الكاميرا أو يُرفع صورة للرمز. هنا نعرض واجهة الماسح فقط وفق طلب التصميم.',
      verify_back_products: 'العودة إلى المنتجات',
      verify_footer: '© VURA — التحقق من الأصالة (واجهة تجريبية)',
      login_title: 'تسجيل دخول الموزع',
      login_sub: 'أدخل أي قيمة للمتابعة — لا يوجد تحقق حقيقي.',
      login_label: 'معرف الموزع أو البريد',
      login_placeholder: 'مثال: distributor@vura.test',
      login_submit: 'دخول لوحة التحكم',
      login_footer: 'واجهة تجريبية — التوجيه مباشر إلى لوحة التحكم.',
      detail_back: 'العودة إلى المنتجات',
      detail_not_found: 'المنتج غير موجود',
      detail_view_all: 'عرض كل المنتجات',
      detail_qty: 'الكمية',
      detail_add_cart: 'إضافة إلى السلة',
      detail_toast: 'تمت الإضافة (واجهة فقط — لا يوجد سلة حقيقية)',
      detail_verify_link: 'التحقق من أصالة منتج مشابه عبر QR',
      dash_sidebar_create: 'إنشاء منتج',
      dash_sidebar_orders: 'الطلبات',
      dash_sidebar_sales: 'المبيعات',
      dash_sidebar_account: 'الحساب',
      dash_back_site: 'العودة للموقع',
      dash_header_label: 'لوحة الموزع',
      dash_demo_badge: 'بيانات تجريبية',
      dash_form_title: 'نموذج إنشاء منتج',
      dash_label_name: 'اسم المنتج',
      dash_ph_name: 'مثال: سيروم ليلي',
      dash_label_price: 'السعر',
      dash_label_image: 'رابط الصورة',
      dash_label_desc: 'الوصف',
      dash_ph_desc: 'وصف مختصر للمنتج…',
      dash_save_fake: 'حفظ (وهمي)',
      dash_saved_msg: 'تم حفظ النموذج محلياً — لا يوجد خادم.',
      dash_orders_title: 'الطلبات الأخيرة',
      dash_orders_fake: 'جدول وهمي',
      dash_th_order: 'رقم الطلب',
      dash_th_customer: 'العميل',
      dash_th_product: 'المنتج',
      dash_th_status: 'الحالة',
      dash_th_amount: 'المبلغ',
      dash_st_done: 'مكتمل',
      dash_st_ship: 'قيد الشحن',
      dash_st_new: 'جديد',
      dash_sales_month: 'إجمالي المبيعات (شهر)',
      dash_sales_done_ct: 'طلبات مكتملة',
      dash_sales_avg: 'متوسط 6 طلبات / يوم',
      dash_sales_top: 'أفضل منتج',
      dash_sales_contrib: 'مساهمة ≈ 28٪ من الإيرادات',
      dash_sales_note: 'يمكن لاحقاً ربط رسوم بيانية حقيقية — هذه بطاقات إحصاء تجريبية فقط.',
      dash_acc_demo: 'موزع تجريبي',
      dash_acc_tier: 'ليلى الأحمد — العضوية الذهبية',
      dash_acc_email: 'البريد',
      dash_acc_phone: 'الهاتف',
      dash_acc_city: 'المدينة',
      dash_acc_city_val: 'الجزائر العاصمة',
      dash_acc_status: 'حالة الحساب',
      dash_acc_active: 'نشط',
      dash_month_hint: '+12٪ عن الشهر الماضي',
      dash_product_spf: 'واقي شمس سائل'
    },
    fr: {
      lang_group_aria: 'Choix de la langue',
      currency_short: 'DA',
      meta_title_index: 'VURA — Beauté authentique, soins et produits de santé',
      meta_title_products: 'VURA — Produits',
      meta_title_product_detail: 'VURA — Détail du produit',
      meta_title_verify: 'VURA — Vérification d’authenticité',
      meta_title_login: 'VURA — Connexion distributeur',
      meta_title_dashboard: 'VURA — Tableau de bord distributeur',
      meta_not_found: 'VURA — Produit introuvable',
      aria_home: 'VURA — Accueil',
      aria_menu: 'Menu',
      title_scan_qr: 'Scanner le code QR',
      nav_home: 'Accueil',
      nav_products: 'Produits',
      nav_distributor: 'Connexion distributeur',
      nav_verify_long: 'Vérifier les produits authentiques',
      nav_verify_short: 'Authenticité',
      nav_store: 'Boutique',
      browse_products: 'Voir les produits',
      products_detail: 'Détails',
      hero_badge: 'Soins · Beauté authentique · Santé',
      hero_welcome: 'Bienvenue sur',
      hero_tagline: 'VURA est une plateforme dédiée à la vente de produits de beauté authentiques et de produits de santé.',
      hero_body: 'Nous sélectionnons cosmétiques, soins de la peau et produits de santé authentiques, avec une expérience d’achat sereine et une vérification par QR sur l’emballage — le tout dans une interface simple.',
      btn_browse_products: 'Parcourir les produits',
      btn_verify_authenticity: 'Vérifier l’authenticité',
      hero_stat1: 'Produits sélectionnés avec soin',
      hero_stat2: 'Vérification par QR',
      card_routine_title: 'Une routine douce chaque jour',
      card_routine_sub: 'Hydratation · Nettoyage doux · Protection',
      card_demo: 'Aperçu — données de démonstration',
      why_title: 'Pourquoi VURA ?',
      why_sub: 'Design soigné et navigation fluide, avec un parcours clair pour vérifier l’authenticité de vos achats.',
      feat1_title: 'Authenticité',
      feat1_body: 'Scannez le QR et consultez des informations synthétiques sur le produit.',
      feat2_title: 'Expérience douce',
      feat2_body: 'Couleurs alignées sur la marque et fiches produits lisibles sur tous les écrans.',
      feat3_title: 'Peau & santé',
      feat3_body: 'Beauté, soins quotidiens et produits de santé de confiance.',
      feat4_title: 'Pour distributeurs',
      feat4_body: 'Tableau de bord de démonstration pour gérer le catalogue.',
      cta_title: 'Magasinez ou vérifiez l’authenticité d’un produit',
      cta_sub: 'Les deux en un clic — interface uniquement, sans paiement ni stock réel.',
      cta_shop: 'Voir les produits',
      cta_qr: 'Vérifier par QR',
      footer_about: 'Plateforme de vente de cosmétiques, soins et produits de santé authentiques — démo sans backend.',
      footer_products: 'Produits',
      footer_verify: 'Vérification',
      footer_distributors: 'Distributeurs',
      footer_rights: '© 2026 VURA — Tous droits réservés.',
      products_header_title: 'Cosmétiques, soins et santé',
      products_header_sub: 'VURA propose des produits de beauté authentiques et des produits de santé — données ci-dessous à titre de démo.',
      products_footer_verify: 'Vérification d’authenticité',
      verify_badge: 'Simulation du scanner',
      verify_title: 'Vérification d’authenticité',
      verify_lead: 'Scannez le code QR pour vérifier l’authenticité du produit',
      verify_note: 'Écran factice — aucune caméra réelle n’est utilisée ici.',
      verify_align: 'Alignez le code dans le cadre',
      verify_ready: 'Prêt à scanner… (démo)',
      verify_info: 'Dans la version complète, la caméra ou l’envoi d’une photo sera disponible. Ici, seule l’interface du scanner est affichée.',
      verify_back_products: 'Retour aux produits',
      verify_footer: '© VURA — Vérification (démo)',
      login_title: 'Connexion distributeur',
      login_sub: 'Saisissez n’importe quelle valeur pour continuer — aucune vérification réelle.',
      login_label: 'Identifiant ou e-mail',
      login_placeholder: 'Ex. : distributor@vura.test',
      login_submit: 'Accéder au tableau de bord',
      login_footer: 'Démo — redirection directe vers le tableau de bord.',
      detail_back: 'Retour aux produits',
      detail_not_found: 'Produit introuvable',
      detail_view_all: 'Voir tous les produits',
      detail_qty: 'Quantité',
      detail_add_cart: 'Ajouter au panier',
      detail_toast: 'Ajouté (interface uniquement — pas de panier réel)',
      detail_verify_link: 'Vérifier un produit similaire par QR',
      dash_sidebar_create: 'Créer un produit',
      dash_sidebar_orders: 'Commandes',
      dash_sidebar_sales: 'Ventes',
      dash_sidebar_account: 'Compte',
      dash_back_site: 'Retour au site',
      dash_header_label: 'Espace distributeur',
      dash_demo_badge: 'Données de démo',
      dash_form_title: 'Formulaire produit',
      dash_label_name: 'Nom du produit',
      dash_ph_name: 'Ex. : sérum de nuit',
      dash_label_price: 'Prix',
      dash_label_image: 'URL de l’image',
      dash_label_desc: 'Description',
      dash_ph_desc: 'Brève description…',
      dash_save_fake: 'Enregistrer (démo)',
      dash_saved_msg: 'Formulaire enregistré localement — aucun serveur.',
      dash_orders_title: 'Dernières commandes',
      dash_orders_fake: 'Tableau factice',
      dash_th_order: 'N° commande',
      dash_th_customer: 'Client',
      dash_th_product: 'Produit',
      dash_th_status: 'Statut',
      dash_th_amount: 'Montant',
      dash_st_done: 'Terminé',
      dash_st_ship: 'Expédition',
      dash_st_new: 'Nouveau',
      dash_sales_month: 'Ventes totales (mois)',
      dash_sales_done_ct: 'Commandes terminées',
      dash_sales_avg: 'Moy. 6 commandes / jour',
      dash_sales_top: 'Meilleur produit',
      dash_sales_contrib: '≈ 28 % du chiffre',
      dash_sales_note: 'Graphiques réels à brancher plus tard — indicateurs de démonstration.',
      dash_acc_demo: 'Distributeur démo',
      dash_acc_tier: 'Leïla Al Ahmed — adhésion or',
      dash_acc_email: 'E-mail',
      dash_acc_phone: 'Téléphone',
      dash_acc_city: 'Ville',
      dash_acc_city_val: 'Alger',
      dash_acc_status: 'Statut du compte',
      dash_acc_active: 'Actif',
      dash_month_hint: '+12 % vs mois dernier',
      dash_product_spf: 'Protection solaire fluide'
    },
    en: {
      lang_group_aria: 'Language selection',
      currency_short: 'DZD',
      meta_title_index: 'VURA — Authentic beauty, skincare & wellness products',
      meta_title_products: 'VURA — Products',
      meta_title_product_detail: 'VURA — Product details',
      meta_title_verify: 'VURA — Authenticity check',
      meta_title_login: 'VURA — Distributor login',
      meta_title_dashboard: 'VURA — Distributor dashboard',
      meta_not_found: 'VURA — Product not found',
      aria_home: 'VURA — Home',
      aria_menu: 'Menu',
      title_scan_qr: 'Scan QR code',
      nav_home: 'Home',
      nav_products: 'Products',
      nav_distributor: 'Distributor login',
      nav_verify_long: 'Verify authentic products',
      nav_verify_short: 'Verify',
      nav_store: 'Shop',
      browse_products: 'Browse products',
      products_detail: 'Details',
      hero_badge: 'Skincare · Authentic beauty · Wellness',
      hero_welcome: 'Welcome to',
      hero_tagline: 'VURA is a platform specialized in authentic beauty and wellness products.',
      hero_body: 'We curate cosmetics, skincare and authentic wellness items with a calm shopping experience and QR verification on the packaging — all in a simple, user-focused interface.',
      btn_browse_products: 'Browse products',
      btn_verify_authenticity: 'Verify product authenticity',
      hero_stat1: 'Carefully selected products',
      hero_stat2: 'QR authenticity check',
      card_routine_title: 'A gentle routine every day',
      card_routine_sub: 'Hydration · Gentle cleanse · Daily protection',
      card_demo: 'Preview — demo data',
      why_title: 'Why VURA?',
      why_sub: 'Thoughtful design and easy browsing, with a clear path to verify what you buy.',
      feat1_title: 'Product authenticity',
      feat1_body: 'Scan the QR code for concise product information.',
      feat2_title: 'Smooth experience',
      feat2_body: 'On-brand colors and clear product cards on every screen.',
      feat3_title: 'Skin & wellness',
      feat3_body: 'Beauty, daily care and trusted wellness products.',
      feat4_title: 'For distributors',
      feat4_body: 'Demo dashboard to manage listings — no live server.',
      cta_title: 'Start shopping or verify your product',
      cta_sub: 'Both one tap away — UI only, no real checkout or inventory.',
      cta_shop: 'Browse products',
      cta_qr: 'Verify via QR',
      footer_about: 'Selling authentic cosmetics, skincare and wellness products — demo UI without a backend.',
      footer_products: 'Products',
      footer_verify: 'Verify',
      footer_distributors: 'Distributors',
      footer_rights: '© 2026 VURA — All rights reserved.',
      products_header_title: 'Beauty, care & wellness',
      products_header_sub: 'VURA offers authentic beauty and wellness products — listing below is for demo only.',
      products_footer_verify: 'Authenticity check',
      verify_badge: 'Scanner simulation',
      verify_title: 'Authenticity check',
      verify_lead: 'Scan the QR code to verify product authenticity',
      verify_note: 'This is a mock screen — no real camera is used here.',
      verify_align: 'Align the code inside the frame',
      verify_ready: 'Ready to scan… (demo)',
      verify_info: 'In the full platform, camera or photo upload will be available. Here only the scanner UI is shown.',
      verify_back_products: 'Back to products',
      verify_footer: '© VURA — Authenticity (demo)',
      login_title: 'Distributor login',
      login_sub: 'Enter any value to continue — no real authentication.',
      login_label: 'Distributor ID or email',
      login_placeholder: 'e.g. distributor@vura.test',
      login_submit: 'Go to dashboard',
      login_footer: 'Demo — you will be redirected to the dashboard.',
      detail_back: 'Back to products',
      detail_not_found: 'Product not found',
      detail_view_all: 'View all products',
      detail_qty: 'Quantity',
      detail_add_cart: 'Add to cart',
      detail_toast: 'Added (UI only — no real cart)',
      detail_verify_link: 'Verify a similar product via QR',
      dash_sidebar_create: 'Create product',
      dash_sidebar_orders: 'Orders',
      dash_sidebar_sales: 'Sales',
      dash_sidebar_account: 'Account',
      dash_back_site: 'Back to site',
      dash_header_label: 'Distributor area',
      dash_demo_badge: 'Demo data',
      dash_form_title: 'Product form',
      dash_label_name: 'Product name',
      dash_ph_name: 'e.g. night serum',
      dash_label_price: 'Price',
      dash_label_image: 'Image URL',
      dash_label_desc: 'Description',
      dash_ph_desc: 'Short description…',
      dash_save_fake: 'Save (demo)',
      dash_saved_msg: 'Saved locally — no server.',
      dash_orders_title: 'Recent orders',
      dash_orders_fake: 'Mock table',
      dash_th_order: 'Order #',
      dash_th_customer: 'Customer',
      dash_th_product: 'Product',
      dash_th_status: 'Status',
      dash_th_amount: 'Amount',
      dash_st_done: 'Completed',
      dash_st_ship: 'Shipping',
      dash_st_new: 'New',
      dash_sales_month: 'Total sales (month)',
      dash_sales_done_ct: 'Completed orders',
      dash_sales_avg: 'Avg. 6 orders / day',
      dash_sales_top: 'Top product',
      dash_sales_contrib: '≈ 28% of revenue',
      dash_sales_note: 'Real charts can be connected later — demo metrics only.',
      dash_acc_demo: 'Demo distributor',
      dash_acc_tier: 'Layla Al Ahmad — gold tier',
      dash_acc_email: 'Email',
      dash_acc_phone: 'Phone',
      dash_acc_city: 'City',
      dash_acc_city_val: 'Algiers',
      dash_acc_status: 'Account status',
      dash_acc_active: 'Active',
      dash_month_hint: '+12% vs last month',
      dash_product_spf: 'Fluid sunscreen'
    }
  };

  function vuraLocale(lang) {
    if (lang === 'fr') return 'fr-FR';
    if (lang === 'en') return 'en-US';
    return 'ar-DZ';
  }

  window.vuraGetLang = function () {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === 'ar' || s === 'fr' || s === 'en') return s;
    } catch (e) {}
    return 'ar';
  };

  window.vuraCurrencyLabel = function (lang) {
    var L = lang || window.vuraGetLang();
    var ui = window.VURA_UI[L];
    return (ui && ui.currency_short) ? ui.currency_short : 'د.ج';
  };

  window.vuraProductName = function (p, lang) {
    if (!p) return '';
    var L = lang || window.vuraGetLang();
    if (L === 'fr' && p.nameFr) return p.nameFr;
    if (L === 'en' && p.nameEn) return p.nameEn;
    return p.nameAr || '';
  };

  window.vuraProductDesc = function (p, lang) {
    if (!p) return '';
    var L = lang || window.vuraGetLang();
    if (L === 'fr' && p.descriptionFr) return p.descriptionFr;
    if (L === 'en' && p.descriptionEn) return p.descriptionEn;
    return p.description || '';
  };

  window.vuraT = function (key, lang) {
    var L = lang || window.vuraGetLang();
    var dict = window.VURA_UI[L] || window.VURA_UI.ar;
    return dict[key] !== undefined ? dict[key] : (window.VURA_UI.ar[key] || key);
  };

  function injectNavLtrFix() {
    if (document.getElementById('vura-i18n-nav-fix')) return;
    var s = document.createElement('style');
    s.id = 'vura-i18n-nav-fix';
    s.textContent = '[dir="ltr"] .nav-link::after { left: 0; right: auto; }';
    document.head.appendChild(s);
  }

  window.vuraApplyLang = function (lang) {
    if (lang !== 'ar' && lang !== 'fr' && lang !== 'en') lang = 'ar';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    window.VURA_LANG = lang;
    document.documentElement.lang = lang === 'ar' ? 'ar' : lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    injectNavLtrFix();

    var dict = window.VURA_UI[lang] || window.VURA_UI.ar;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key && dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (key && dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (key && dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (key && dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    var titleKey = document.body && document.body.getAttribute('data-vura-meta');
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];

    document.querySelectorAll('.vura-lang-btn').forEach(function (btn) {
      var l = btn.getAttribute('data-vura-lang');
      var on = l === lang;
      btn.classList.toggle('vura-lang-on', on);
      btn.classList.toggle('text-slate-600', !on);
      btn.classList.remove('bg-teal-600', 'text-white', 'shadow-sm');
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    window.dispatchEvent(new CustomEvent('vuraLangChange', { detail: { lang: lang } }));
  };

  window.vuraBindLangButtons = function (root) {
    var r = root || document;
    r.querySelectorAll('.vura-lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var l = btn.getAttribute('data-vura-lang');
        if (l) window.vuraApplyLang(l);
      });
    });
  };

  window.vuraInitI18n = function () {
    window.vuraApplyLang(window.vuraGetLang());
    window.vuraBindLangButtons(document);
  };

  /** سعر للعرض في HTML (تفاصيل المنتج) */
  window.vuraFormatPriceHTML = function (price, lang) {
    var L = lang || window.vuraGetLang();
    var loc = L === 'fr' ? 'fr-FR' : L === 'en' ? 'en-US' : 'ar-DZ';
    var cur = window.vuraCurrencyLabel(L);
    return price.toLocaleString(loc) + ' <span class="text-xl font-bold vura-currency-mark">' + cur + '</span>';
  };
})();
