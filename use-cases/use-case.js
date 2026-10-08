(function () {
  var SUPPORTED = ["en", "ja", "es", "fr", "de", "it", "ko", "pt_BR", "zh_CN", "zh_TW"];
  var STORE = {
    chrome: "https://chromewebstore.google.com/detail/deopoklicobmohifoikcgepdodohcaaf",
    edge: "https://microsoftedge.microsoft.com/addons/detail/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%B8%80%E6%8B%AC%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89/ebacgdhmcofpoilfllhkoioabjbaemef",
    firefox: "https://addons.mozilla.org/firefox/addon/grab-all-files/"
  };
  var LANG_LABELS = {
    en: "English",
    ja: "日本語",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    it: "Italiano",
    ko: "한국어",
    pt_BR: "Português (BR)",
    zh_CN: "简体中文",
    zh_TW: "繁體中文"
  };
  var UI = {
    en: {
      home: "Home",
      useCases: "Use cases",
      useCasesTitle: "Use cases — download & combine pages",
      security: "Security",
      pricing: "Pricing",
      install: "Install free",
      dlHeading: "Download Grab All Files in your browser:",
      dlChrome: "Download for Chrome",
      dlEdge: "Download for Edge",
      dlFirefox: "Download for Firefox",
      bestFor: "Best for",
      workflow: "Workflow",
      faq: "FAQ",
      related: "Related use-case guides",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Purchase",
      license: "Pro — $19.99 one-time: no file cap + multi-page HTML",
      trial: "Free — 10 files per run + 1 chosen page as HTML",
      local: "PDF merge, ZIP, and CSV run locally in the browser",
      privacy: "Files download directly from the source site to your device",
      ctaTitle: "Try Grab All Files on your browser.",
      ctaText: "Free saves up to 10 files per run and exactly one chosen related page as HTML. Images and directly linked files on that page have no plan-based count cap. Pro ($19.99, one-time) removes the file cap and combines multiple selected page bodies into one HTML.",
      skip: "Skip to content",
      primaryNav: "Primary navigation",
      themeToggle: "Toggle theme",
      languageLabel: "Language",
      footer: "Independent browser extension by Serima Kawai. Not affiliated with Google, Microsoft, or Mozilla."
    },
    ja: {
      home: "ホーム",
      useCases: "用途別",
      useCasesTitle: "用途別 — 一括DLとページのHTML化",
      security: "セキュリティ",
      pricing: "料金",
      install: "無料インストール",
      dlHeading: "お使いのブラウザで Grab All Files をダウンロード:",
      dlChrome: "Chrome 用をダウンロード",
      dlEdge: "Edge 用をダウンロード",
      dlFirefox: "Firefox 用をダウンロード",
      bestFor: "向いている用途",
      workflow: "使い方",
      faq: "よくある質問",
      related: "関連する用途別ガイド",
      chrome: "Chrome ウェブストア",
      edge: "Edge アドオン",
      firefox: "Firefox アドオン",
      purchase: "購入",
      license: "Pro — $19.99買い切り：ファイル上限解除＋複数ページ結合",
      trial: "無料版 — 1回10ファイル＋選んだ1ページをHTML保存",
      local: "PDF結合・ZIP化・CSV出力はブラウザ内でローカル処理",
      privacy: "ファイルは元サイトから端末へ直接ダウンロード",
      ctaTitle: "実際のページで Grab All Files を試せます。",
      ctaText: "無料版はファイルを1回10件まで保存し、関連候補から選んだ1ページをHTML保存します。そのページ内の画像・直接リンクされたファイルにはプラン上の件数制限がありません。Pro（$19.99・買い切り）はファイル上限を解除し、複数ページ本文を1つのHTMLに結合します。",
      skip: "本文へスキップ",
      primaryNav: "メインナビゲーション",
      themeToggle: "表示テーマを切り替え",
      languageLabel: "言語",
      footer: "Serima Kawai による独立したブラウザ拡張機能。Google、Microsoft、Mozillaとは提携していません。"
    },
    es: {
      home: "Inicio",
      useCases: "Casos de uso",
      useCasesTitle: "Casos de uso — descargar y unir páginas",
      security: "Seguridad",
      pricing: "Precio",
      install: "Instalar gratis",
      dlHeading: "Descarga Grab All Files en tu navegador:",
      dlChrome: "Descargar para Chrome",
      dlEdge: "Descargar para Edge",
      dlFirefox: "Descargar para Firefox",
      bestFor: "Ideal para",
      workflow: "Flujo de trabajo",
      faq: "Preguntas frecuentes",
      related: "Guías relacionadas",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Comprar",
      license: "Pro — $19.99, pago único: sin tope + HTML multipágina",
      trial: "Free — 10 archivos por ejecución + 1 página elegida en HTML",
      local: "PDF, ZIP y CSV se procesan localmente en el navegador",
      privacy: "Los archivos se descargan del sitio fuente a tu dispositivo",
      ctaTitle: "Prueba Grab All Files en tu navegador.",
      ctaText: "Free guarda hasta 10 archivos por ejecución y exactamente una página relacionada elegida como HTML. Las imágenes y los archivos enlazados directamente en esa página no tienen límite de cantidad por plan. Pro ($19.99, pago único) elimina el límite y combina el contenido de varias páginas seleccionadas.",
      skip: "Saltar al contenido",
      primaryNav: "Navegación principal",
      themeToggle: "Cambiar tema",
      languageLabel: "Idioma",
      footer: "Extensión independiente de Serima Kawai. Sin afiliación con Google, Microsoft ni Mozilla."
    },
    fr: {
      home: "Accueil",
      useCases: "Cas d'usage",
      useCasesTitle: "Cas d'usage — télécharger et réunir",
      security: "Sécurité",
      pricing: "Tarif",
      install: "Installer gratuitement",
      dlHeading: "Téléchargez Grab All Files dans votre navigateur :",
      dlChrome: "Télécharger pour Chrome",
      dlEdge: "Télécharger pour Edge",
      dlFirefox: "Télécharger pour Firefox",
      bestFor: "Idéal pour",
      workflow: "Processus",
      faq: "FAQ",
      related: "Guides associés",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Acheter",
      license: "Pro — 19,99 $, achat unique : sans plafond + HTML multipage",
      trial: "Free — 10 fichiers par lot + 1 page choisie en HTML",
      local: "PDF, ZIP et CSV restent traités localement dans le navigateur",
      privacy: "Les fichiers se téléchargent du site source vers votre appareil",
      ctaTitle: "Essayez Grab All Files dans votre navigateur.",
      ctaText: "Free enregistre jusqu’à 10 fichiers par lot et exactement une page associée choisie en HTML. Les images et fichiers directement liés sur cette page n’ont pas de plafond lié au forfait. Pro (19,99 $, achat unique) supprime la limite et regroupe le contenu de plusieurs pages sélectionnées.",
      skip: "Aller au contenu",
      primaryNav: "Navigation principale",
      themeToggle: "Changer de thème",
      languageLabel: "Langue",
      footer: "Extension indépendante par Serima Kawai. Non affiliée à Google, Microsoft ou Mozilla."
    },
    de: {
      home: "Startseite",
      useCases: "Anwendungsfälle",
      useCasesTitle: "Anwendungsfälle — Dateien & Seiten",
      security: "Sicherheit",
      pricing: "Preis",
      install: "Kostenlos installieren",
      dlHeading: "Grab All Files in Ihrem Browser herunterladen:",
      dlChrome: "Für Chrome herunterladen",
      dlEdge: "Für Edge herunterladen",
      dlFirefox: "Für Firefox herunterladen",
      bestFor: "Geeignet für",
      workflow: "Ablauf",
      faq: "FAQ",
      related: "Verwandte Leitfäden",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Kaufen",
      license: "Pro — 19,99 $, einmalig: kein Dateilimit + Mehrseiten-HTML",
      trial: "Free — 10 Dateien je Durchlauf + 1 gewählte Seite als HTML",
      local: "PDF, ZIP und CSV werden lokal im Browser verarbeitet",
      privacy: "Dateien werden direkt von der Quellseite auf Ihr Gerät geladen",
      ctaTitle: "Testen Sie Grab All Files in Ihrem Browser.",
      ctaText: "Free speichert bis zu 10 Dateien pro Durchlauf und genau eine gewählte zugehörige Seite als HTML. Bilder und direkt verlinkte Dateien auf dieser Seite haben kein planbedingtes Mengenlimit. Pro (19,99 $, einmalig) hebt das Dateilimit auf und bündelt mehrere ausgewählte Seiteninhalte.",
      skip: "Zum Inhalt springen",
      primaryNav: "Hauptnavigation",
      themeToggle: "Darstellung wechseln",
      languageLabel: "Sprache",
      footer: "Unabhängige Browser-Erweiterung von Serima Kawai. Nicht mit Google, Microsoft oder Mozilla verbunden."
    },
    it: {
      home: "Home",
      useCases: "Casi d'uso",
      useCasesTitle: "Casi d'uso — scaricare e unire",
      security: "Sicurezza",
      pricing: "Prezzo",
      install: "Installa gratis",
      dlHeading: "Scarica Grab All Files nel tuo browser:",
      dlChrome: "Scarica per Chrome",
      dlEdge: "Scarica per Edge",
      dlFirefox: "Scarica per Firefox",
      bestFor: "Ideale per",
      workflow: "Flusso",
      faq: "FAQ",
      related: "Guide correlate",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Acquista",
      license: "Pro — $19.99 una tantum: nessun limite + HTML multipagina",
      trial: "Free — 10 file per esecuzione + 1 pagina scelta in HTML",
      local: "PDF, ZIP e CSV vengono elaborati localmente nel browser",
      privacy: "I file vengono scaricati dal sito sorgente al dispositivo",
      ctaTitle: "Prova Grab All Files nel tuo browser.",
      ctaText: "Free salva fino a 10 file per esecuzione ed esattamente una pagina correlata scelta come HTML. Immagini e file collegati direttamente in quella pagina non hanno un limite numerico del piano. Pro ($19.99, una tantum) rimuove il limite e unisce il contenuto di più pagine selezionate.",
      skip: "Vai al contenuto",
      primaryNav: "Navigazione principale",
      themeToggle: "Cambia tema",
      languageLabel: "Lingua",
      footer: "Estensione indipendente di Serima Kawai. Non affiliata a Google, Microsoft o Mozilla."
    },
    ko: {
      home: "홈",
      useCases: "사용 사례",
      useCasesTitle: "용도별 — 일괄 다운로드와 HTML화",
      security: "보안",
      pricing: "가격",
      install: "무료 설치",
      dlHeading: "브라우저에서 Grab All Files 다운로드:",
      dlChrome: "Chrome용 다운로드",
      dlEdge: "Edge용 다운로드",
      dlFirefox: "Firefox용 다운로드",
      bestFor: "적합한 용도",
      workflow: "작업 흐름",
      faq: "자주 묻는 질문",
      related: "관련 사용 사례 가이드",
      chrome: "Chrome 웹 스토어",
      edge: "Edge 추가 기능",
      firefox: "Firefox 부가 기능",
      purchase: "구매",
      license: "Pro — $19.99 1회 결제: 파일 제한 해제 + 여러 페이지 결합",
      trial: "Free — 실행당 파일 10개 + 선택한 1페이지 HTML 저장",
      local: "PDF 병합, ZIP, CSV는 브라우저에서 로컬 처리",
      privacy: "파일은 원본 사이트에서 기기로 직접 다운로드됩니다",
      ctaTitle: "브라우저에서 Grab All Files를 사용해 보세요.",
      ctaText: "Free는 실행당 파일을 최대 10개 저장하고 관련 후보 중 정확히 1페이지를 HTML로 저장합니다. 그 페이지의 이미지와 직접 연결된 파일에는 플랜상 개수 제한이 없습니다. Pro($19.99, 1회 결제)는 파일 제한을 없애고 선택한 여러 페이지 본문을 하나의 HTML로 결합합니다.",
      skip: "본문으로 건너뛰기",
      primaryNav: "주요 탐색",
      themeToggle: "테마 전환",
      languageLabel: "언어",
      footer: "Serima Kawai의 독립 브라우저 확장 프로그램. Google, Microsoft, Mozilla와 제휴하지 않습니다."
    },
    pt_BR: {
      home: "Início",
      useCases: "Casos de uso",
      useCasesTitle: "Casos de uso — baixar e unir páginas",
      security: "Segurança",
      pricing: "Preço",
      install: "Instalar grátis",
      dlHeading: "Baixe o Grab All Files no seu navegador:",
      dlChrome: "Baixar para Chrome",
      dlEdge: "Baixar para Edge",
      dlFirefox: "Baixar para Firefox",
      bestFor: "Ideal para",
      workflow: "Fluxo",
      faq: "Perguntas frequentes",
      related: "Guias relacionados",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Comprar",
      license: "Pro — $19.99, compra única: sem limite + HTML multipágina",
      trial: "Free — 10 arquivos por execução + 1 página escolhida em HTML",
      local: "PDF, ZIP e CSV são processados localmente no navegador",
      privacy: "Os arquivos são baixados do site fonte para o seu dispositivo",
      ctaTitle: "Teste o Grab All Files no seu navegador.",
      ctaText: "O Free salva até 10 arquivos por execução e exatamente uma página relacionada escolhida como HTML. Imagens e arquivos diretamente vinculados nessa página não têm limite de quantidade do plano. O Pro ($19.99, compra única) remove o limite e reúne o conteúdo de várias páginas selecionadas.",
      skip: "Ir para o conteúdo",
      primaryNav: "Navegação principal",
      themeToggle: "Alternar tema",
      languageLabel: "Idioma",
      footer: "Extensão independente de Serima Kawai. Sem afiliação com Google, Microsoft ou Mozilla."
    },
    zh_CN: {
      home: "首页",
      useCases: "用途",
      useCasesTitle: "用途 — 批量下载与网页合并",
      security: "安全",
      pricing: "价格",
      install: "免费安装",
      dlHeading: "在浏览器中下载 Grab All Files：",
      dlChrome: "下载 Chrome 版",
      dlEdge: "下载 Edge 版",
      dlFirefox: "下载 Firefox 版",
      bestFor: "适合用途",
      workflow: "工作流程",
      faq: "常见问题",
      related: "相关用途指南",
      chrome: "Chrome 应用商店",
      edge: "Edge 加载项",
      firefox: "Firefox 附加组件",
      purchase: "购买",
      license: "Pro — $19.99一次性购买：解除文件上限＋多页面HTML",
      trial: "Free — 每次10个文件＋将所选1个页面保存为HTML",
      local: "PDF合并、ZIP和CSV均在浏览器本地处理",
      privacy: "文件从源网站直接下载到您的设备",
      ctaTitle: "在浏览器中试用 Grab All Files。",
      ctaText: "Free 每次最多保存10个文件，并从相关候选中仅选择1个页面保存为HTML。该页面内的图片和直接链接文件没有套餐数量上限。Pro（$19.99，一次性购买）解除文件上限，并将多个所选页面正文合并为一个HTML。",
      skip: "跳至主要内容",
      primaryNav: "主导航",
      themeToggle: "切换主题",
      languageLabel: "语言",
      footer: "Serima Kawai 的独立浏览器扩展程序。与 Google、Microsoft 或 Mozilla 无关联。"
    },
    zh_TW: {
      home: "首頁",
      useCases: "用途",
      useCasesTitle: "用途 — 批次下載與網頁合併",
      security: "安全",
      pricing: "價格",
      install: "免費安裝",
      dlHeading: "在瀏覽器中下載 Grab All Files：",
      dlChrome: "下載 Chrome 版",
      dlEdge: "下載 Edge 版",
      dlFirefox: "下載 Firefox 版",
      bestFor: "適合用途",
      workflow: "工作流程",
      faq: "常見問題",
      related: "相關用途指南",
      chrome: "Chrome 線上應用程式商店",
      edge: "Edge 附加元件",
      firefox: "Firefox 附加元件",
      purchase: "購買",
      license: "Pro — $19.99一次購買：解除檔案上限＋多頁面HTML",
      trial: "Free — 每次10個檔案＋將所選1個頁面儲存為HTML",
      local: "PDF合併、ZIP和CSV均在瀏覽器本機處理",
      privacy: "檔案從來源網站直接下載到您的裝置",
      ctaTitle: "在瀏覽器中試用 Grab All Files。",
      ctaText: "Free 每次最多儲存10個檔案，並從相關候選中只選1個頁面儲存為HTML。該頁面內的圖片和直接連結檔案沒有方案數量上限。Pro（$19.99，一次購買）解除檔案上限，並將多個所選頁面正文合併為一個HTML。",
      skip: "跳至主要內容",
      primaryNav: "主要導覽",
      themeToggle: "切換主題",
      languageLabel: "語言",
      footer: "Serima Kawai 的獨立瀏覽器擴充功能。與 Google、Microsoft 或 Mozilla 無關聯。"
    }
  };

  function c(title, desc, eyebrow, h1, lead, best, steps, faq) {
    return { title: title, desc: desc, eyebrow: eyebrow, h1: h1, lead: lead, best: best, steps: steps, faq: faq };
  }

  var GUIDE_ORDER = [
    "download-arxiv-pdfs-and-research-files",
    "web-tables-to-csv-for-excel-ai",
    "save-and-compare-document-revisions",
    "rename-and-organize-bulk-pdf-downloads",
    "collect-public-government-documents",
    "save-web-pages-as-markdown",
    "save-online-manuals-and-knowledge-pages",
    "web-pages-for-reading-and-ai-analysis",
    "combine-web-pages-into-one-html",
    "download-all-pdfs",
    "bulk-download-images",
    "download-files-from-webpage",
    "internal-portal-downloads",
    "merge-pdfs-locally"
  ];

  var GUIDE_LABELS = {
    en: {
      "download-arxiv-pdfs-and-research-files": "arXiv PDFs & research files",
      "web-tables-to-csv-for-excel-ai": "Web tables to CSV",
      "save-and-compare-document-revisions": "Save & compare revisions",
      "rename-and-organize-bulk-pdf-downloads": "Name & organise PDF downloads",
      "collect-public-government-documents": "Public guidance & documents",
      "save-web-pages-as-markdown": "Web sources as Markdown",
      "save-online-manuals-and-knowledge-pages": "Save manuals & knowledge pages",
      "web-pages-for-reading-and-ai-analysis": "Collect, read & analyse with AI",
      "combine-web-pages-into-one-html": "Combine pages into HTML",
      "download-all-pdfs": "Download all PDFs",
      "bulk-download-images": "Bulk-download images",
      "download-files-from-webpage": "Download files from a page",
      "internal-portal-downloads": "Internal portals & LMS",
      "merge-pdfs-locally": "Merge PDFs locally"
    },
    ja: {
      "download-arxiv-pdfs-and-research-files": "arXivのPDF・研究資料",
      "web-tables-to-csv-for-excel-ai": "Web表をCSVで活用",
      "save-and-compare-document-revisions": "改訂前後の資料を比較",
      "rename-and-organize-bulk-pdf-downloads": "PDFの題名・種類別整理",
      "collect-public-government-documents": "自治体・公的機関の資料セット",
      "save-web-pages-as-markdown": "Web資料をMarkdownで再利用",
      "save-online-manuals-and-knowledge-pages": "業務マニュアル・ナレッジを保存",
      "web-pages-for-reading-and-ai-analysis": "集めて読む・AIで分析する",
      "combine-web-pages-into-one-html": "ページをHTMLにまとめる",
      "download-all-pdfs": "PDFを一括ダウンロード",
      "bulk-download-images": "画像を一括ダウンロード",
      "download-files-from-webpage": "ページ上のファイルを保存",
      "internal-portal-downloads": "社内ポータル・LMS",
      "merge-pdfs-locally": "PDFをローカル結合"
    },
    es: {
      "download-arxiv-pdfs-and-research-files": "PDF y archivos de arXiv",
      "web-tables-to-csv-for-excel-ai": "Tablas web a CSV",
      "save-and-compare-document-revisions": "Guardar y comparar versiones",
      "rename-and-organize-bulk-pdf-downloads": "Nombrar y organizar PDF",
      "collect-public-government-documents": "Guías y documentos públicos",
      "save-web-pages-as-markdown": "Fuentes web en Markdown",
      "save-online-manuals-and-knowledge-pages": "Guardar manuales y conocimiento",
      "web-pages-for-reading-and-ai-analysis": "Recopilar, leer y analizar con IA",
      "combine-web-pages-into-one-html": "Combinar páginas en HTML",
      "download-all-pdfs": "Descargar todos los PDF",
      "bulk-download-images": "Descargar imágenes en masa",
      "download-files-from-webpage": "Archivos de una página",
      "internal-portal-downloads": "Portales internos y LMS",
      "merge-pdfs-locally": "Fusionar PDF localmente"
    },
    fr: {
      "download-arxiv-pdfs-and-research-files": "PDF et fichiers arXiv",
      "web-tables-to-csv-for-excel-ai": "Tableaux web en CSV",
      "save-and-compare-document-revisions": "Enregistrer et comparer les versions",
      "rename-and-organize-bulk-pdf-downloads": "Nommer et classer les PDF",
      "collect-public-government-documents": "Guides et documents publics",
      "save-web-pages-as-markdown": "Sources web en Markdown",
      "save-online-manuals-and-knowledge-pages": "Enregistrer manuels et connaissances",
      "web-pages-for-reading-and-ai-analysis": "Collecter, lire et analyser avec l’IA",
      "combine-web-pages-into-one-html": "Regrouper les pages en HTML",
      "download-all-pdfs": "Télécharger tous les PDF",
      "bulk-download-images": "Télécharger les images",
      "download-files-from-webpage": "Fichiers d'une page",
      "internal-portal-downloads": "Portails internes et LMS",
      "merge-pdfs-locally": "Fusionner PDF localement"
    },
    de: {
      "download-arxiv-pdfs-and-research-files": "arXiv-PDFs und Forschungsdateien",
      "web-tables-to-csv-for-excel-ai": "Webtabellen als CSV",
      "save-and-compare-document-revisions": "Dokumentstände vergleichen",
      "rename-and-organize-bulk-pdf-downloads": "PDFs benennen und ordnen",
      "collect-public-government-documents": "Öffentliche Hinweise & Dokumente",
      "save-web-pages-as-markdown": "Webquellen als Markdown",
      "save-online-manuals-and-knowledge-pages": "Handbücher und Wissensseiten sichern",
      "web-pages-for-reading-and-ai-analysis": "Sammeln, lesen und mit KI analysieren",
      "combine-web-pages-into-one-html": "Seiten als HTML bündeln",
      "download-all-pdfs": "Alle PDFs herunterladen",
      "bulk-download-images": "Bilder gesammelt laden",
      "download-files-from-webpage": "Dateien einer Seite",
      "internal-portal-downloads": "Interne Portale & LMS",
      "merge-pdfs-locally": "PDFs lokal zusammenführen"
    },
    it: {
      "download-arxiv-pdfs-and-research-files": "PDF e file di ricerca arXiv",
      "web-tables-to-csv-for-excel-ai": "Tabelle web in CSV",
      "save-and-compare-document-revisions": "Salvare e confrontare versioni",
      "rename-and-organize-bulk-pdf-downloads": "Nominare e organizzare PDF",
      "collect-public-government-documents": "Guide e documenti pubblici",
      "save-web-pages-as-markdown": "Fonti web in Markdown",
      "save-online-manuals-and-knowledge-pages": "Salvare manuali e pagine di conoscenza",
      "web-pages-for-reading-and-ai-analysis": "Raccogliere, leggere e analizzare con IA",
      "combine-web-pages-into-one-html": "Unisci pagine in HTML",
      "download-all-pdfs": "Scaricare tutti i PDF",
      "bulk-download-images": "Scaricare immagini",
      "download-files-from-webpage": "File da una pagina",
      "internal-portal-downloads": "Portali interni e LMS",
      "merge-pdfs-locally": "Unire PDF localmente"
    },
    ko: {
      "download-arxiv-pdfs-and-research-files": "arXiv PDF·연구 파일",
      "web-tables-to-csv-for-excel-ai": "웹 표를 CSV로 활용",
      "save-and-compare-document-revisions": "개정 전후 자료 비교",
      "rename-and-organize-bulk-pdf-downloads": "PDF 제목 저장·종류별 정리",
      "collect-public-government-documents": "공공기관 자료 세트",
      "save-web-pages-as-markdown": "웹 자료를 Markdown으로",
      "save-online-manuals-and-knowledge-pages": "업무 매뉴얼·지식 페이지 저장",
      "web-pages-for-reading-and-ai-analysis": "정보 수집·읽기·AI 분석",
      "combine-web-pages-into-one-html": "페이지를 HTML로 합치기",
      "download-all-pdfs": "모든 PDF 다운로드",
      "bulk-download-images": "이미지 일괄 다운로드",
      "download-files-from-webpage": "페이지 파일 다운로드",
      "internal-portal-downloads": "사내 포털 및 LMS",
      "merge-pdfs-locally": "PDF 로컬 병합"
    },
    pt_BR: {
      "download-arxiv-pdfs-and-research-files": "PDFs e arquivos do arXiv",
      "web-tables-to-csv-for-excel-ai": "Tabelas web em CSV",
      "save-and-compare-document-revisions": "Salvar e comparar revisões",
      "rename-and-organize-bulk-pdf-downloads": "Nomear e organizar PDFs",
      "collect-public-government-documents": "Orientações e documentos públicos",
      "save-web-pages-as-markdown": "Fontes web em Markdown",
      "save-online-manuals-and-knowledge-pages": "Salvar manuais e conhecimento",
      "web-pages-for-reading-and-ai-analysis": "Coletar, ler e analisar com IA",
      "combine-web-pages-into-one-html": "Juntar páginas em HTML",
      "download-all-pdfs": "Baixar todos os PDFs",
      "bulk-download-images": "Baixar imagens",
      "download-files-from-webpage": "Arquivos de uma página",
      "internal-portal-downloads": "Portais internos e LMS",
      "merge-pdfs-locally": "Mesclar PDFs localmente"
    },
    zh_CN: {
      "download-arxiv-pdfs-and-research-files": "arXiv PDF与研究文件",
      "web-tables-to-csv-for-excel-ai": "网页表格转CSV",
      "save-and-compare-document-revisions": "保存并比较修订前后资料",
      "rename-and-organize-bulk-pdf-downloads": "PDF题名保存与格式整理",
      "collect-public-government-documents": "公共机构资料集",
      "save-web-pages-as-markdown": "用Markdown复用Web资料",
      "save-online-manuals-and-knowledge-pages": "保存业务手册与知识文章",
      "web-pages-for-reading-and-ai-analysis": "收集信息·阅读·AI分析",
      "combine-web-pages-into-one-html": "将网页合并为 HTML",
      "download-all-pdfs": "下载所有PDF",
      "bulk-download-images": "批量下载图片",
      "download-files-from-webpage": "下载网页文件",
      "internal-portal-downloads": "内部门户和LMS",
      "merge-pdfs-locally": "本地合并PDF"
    },
    zh_TW: {
      "download-arxiv-pdfs-and-research-files": "arXiv PDF與研究檔案",
      "web-tables-to-csv-for-excel-ai": "網頁表格轉CSV",
      "save-and-compare-document-revisions": "儲存並比較修訂前後資料",
      "rename-and-organize-bulk-pdf-downloads": "PDF題名儲存與格式整理",
      "collect-public-government-documents": "公部門資料集",
      "save-web-pages-as-markdown": "用Markdown重用Web資料",
      "save-online-manuals-and-knowledge-pages": "儲存業務手冊與知識文章",
      "web-pages-for-reading-and-ai-analysis": "收集資訊·閱讀·AI分析",
      "combine-web-pages-into-one-html": "將網頁合併為 HTML",
      "download-all-pdfs": "下載所有PDF",
      "bulk-download-images": "批次下載圖片",
      "download-files-from-webpage": "下載網頁檔案",
      "internal-portal-downloads": "內部入口和LMS",
      "merge-pdfs-locally": "本機合併PDF"
    }
  };

  var CASES = {
    "download-arxiv-pdfs-and-research-files": {
      "path": "download-arxiv-pdfs-and-research-files.html",
      "related": [
        "download-all-pdfs",
        "rename-and-organize-bulk-pdf-downloads",
        "web-pages-for-reading-and-ai-analysis"
      ],
      "copy": {
        "en": {
          "title": "Download arXiv PDFs & research files | Grab All Files",
          "desc": "Scan an arXiv results page, filter PDFs and save selected papers with titles, folders, ZIP or a file-list CSV. See the real extension screen.",
          "eyebrow": "arXiv PDFs & research files",
          "h1": "Save the arXiv papers you need.",
          "lead": "Search on arXiv first, then turn the results you are viewing into a useful reading folder. Grab All Files scans that page for PDFs and supported public file links; you review the list and choose what to save.",
          "best": [
            "Build a reading list from a focused search or category page.",
            "Save selected paper PDFs with names you can recognize.",
            "Keep public, supported linked files and a file-list CSV alongside your papers."
          ],
          "steps": [
            "Use arXiv search to narrow the topic, category and date range. Open the results or paper list you want to work with.",
            "Open Grab All Files and scan the displayed page. Start with that page, then review the detected file titles and source URLs.",
            "Filter by PDF and select the papers you need. Review other public file links separately and choose only supported files relevant to your work.",
            "Check or edit titles, choose title-based saving and a folder option. Save the selection as files or ZIP; export the file-list CSV for a record of the URLs.",
            "Open the saved PDFs and review the results. Keep the source URL and paper version in your notes. For a large corpus, use arXiv’s official bulk services."
          ],
          "faq": [
            {
              "q": "Does the extension search all of arXiv for my topic?",
              "a": "No. Search and refine the results on arXiv itself. The extension scans the page you choose; it is not a scholarly search engine or a complete arXiv downloader."
            },
            {
              "q": "What about PDF links without a .pdf extension?",
              "a": "arXiv PDF URLs such as /pdf/paper-id can be recognized as PDFs. Review the detected file type and URL before saving."
            },
            {
              "q": "Can I save TeX, datasets and code too?",
              "a": "Only public links that are found and match a supported file format can be selected. TeX sources, datasets and code are not present or downloadable for every paper; following an external repository may require a separate visit."
            },
            {
              "q": "Can I save these papers for free?",
              "a": "Free saves up to 10 selected files per run, and you can repeat the operation. Pro removes that file-count cap. Free page collection saves one chosen page as HTML; Pro can combine multiple selected pages."
            },
            {
              "q": "How do title names, ZIP and CSV help?",
              "a": "Review or edit a title before saving. Automatic naming can fall back to the original name when no useful title is available. Type and domain folders are alternative options. ZIP packages selected files; CSV records their file information and URLs."
            },
            {
              "q": "Is this an official arXiv tool?",
              "a": "No. Grab All Files is an independent tool, not affiliated with arXiv. Follow arXiv’s access guidance and each paper’s reuse terms. Use the official API for metadata, and official bulk access for large-scale PDF or full-text collection."
            }
          ],
          "arxiv": {
            "searchLabel": "Search on arXiv",
            "visualTitle": "From a focused list to a reading folder",
            "stages": [
              "Choose the paper list",
              "Review and select PDFs",
              "Save a research folder"
            ],
            "sample": [
              "Graph learning overview",
              "A method comparison",
              "Research papers"
            ],
            "visualNote": "Illustrative example with fictional titles. Search on arXiv first; scan and save only the files you choose.",
            "screenTitle": "The actual extension on arXiv",
            "screenAlt": "Grab All Files scanning public arXiv paper links, with PDF filtering and file selection controls",
            "screenCaption": "Actual extension in an isolated test environment using a previously fetched public paper page. This example shows titles checked and edited.",
            "officialTitle": "Use the right arXiv access route",
            "officialText": "For a personal reading set, review a focused list and save the papers you need. For large collections, use arXiv’s official bulk access; its API provides metadata. Read the access guidance before automated collection.",
            "officialLabels": [
              "arXiv access guidance",
              "Official bulk data access",
              "arXiv metadata API"
            ]
          }
        },
        "ja": {
          "title": "arXivのPDF・研究資料を一括保存 | Grab All Files",
          "desc": "arXivで絞り込んだ論文一覧をスキャンし、必要なPDFを選んで保存。題名での命名、フォルダ分け、ZIP、ファイル一覧CSVを実画面と図解で紹介します。",
          "eyebrow": "arXivのPDF・研究資料",
          "h1": "arXivの論文を、必要な分だけ保存。",
          "lead": "まずarXivで探し、表示した検索結果や論文一覧を読み返しやすい資料フォルダへ。Grab All FilesはそのページのPDFや対応形式の公開ファイルリンクを検出します。一覧を確認し、必要な資料を選んで保存できます。",
          "best": [
            "検索語やカテゴリで絞った論文の読書リストを作る。",
            "必要な論文PDFを、見つけやすい題名で保存する。",
            "公開されている対応形式の関連ファイルと、URLを記録したCSVを一緒に管理する。"
          ],
          "steps": [
            "arXivの検索でキーワード・カテゴリ・期間を絞り、対象の検索結果や論文一覧を開きます。",
            "Grab All Filesを開き、表示したページをスキャンします。まずそのページを対象にして、検出したファイルの題名と元URLを確認します。",
            "PDFで絞り込み、必要な論文を選択します。他の公開ファイルリンクは別に確認し、対応形式で研究に必要なものだけを選びます。",
            "題名を確認・編集し、保存名とフォルダ分けを選びます。選択したファイルを個別保存またはZIPで保存し、元URLの記録用にファイル一覧CSVも出力します。",
            "保存したPDFを開いて結果を確認します。元URLと論文の版を資料メモに控え、大規模な論文集合にはarXiv公式の一括取得手段を使います。"
          ],
          "faq": [
            {
              "q": "拡張機能がarXiv全体をキーワード検索しますか？",
              "a": "検索と絞り込みはarXiv側で行います。拡張機能は表示したページをスキャンするため、学術検索エンジンやarXiv全件ダウンローダーではありません。"
            },
            {
              "q": "末尾に.pdfがないPDFリンクも対象ですか？",
              "a": "/pdf/論文IDのようなarXivのPDF URLもPDFとして検出できます。保存前に検出した種類とURLを確認してください。"
            },
            {
              "q": "TeX・データ・コードも保存できますか？",
              "a": "検出できた公開リンクのうち、対応するファイル形式を選択できます。すべての論文にTeXソース・データ・コードがあるわけではなく、外部のリポジトリは別途開いて確認する場合があります。"
            },
            {
              "q": "無料で論文を保存できますか？",
              "a": "無料版は1回10ファイルまで保存でき、繰り返し実行できます。Proはファイル件数上限を解除します。ページ収集は無料版で選んだ1ページをHTML保存し、Proで複数の選択ページを結合できます。"
            },
            {
              "q": "題名での命名・ZIP・CSVはどう役立ちますか？",
              "a": "保存前に題名を確認・編集できます。自動命名で有用な題名がない場合は元名を使います。種類別とドメイン別のフォルダ分けは選択肢です。ZIPは選択ファイルをまとめ、CSVはファイル情報と元URLを記録します。"
            },
            {
              "q": "arXiv公式のツールですか？",
              "a": "Grab All FilesはarXivと提携していない独立したツールです。arXivのアクセス案内と各論文の利用条件に従ってください。メタデータには公式API、大規模なPDF・本文取得には公式の一括取得手段を利用してください。"
            }
          ],
          "arxiv": {
            "searchLabel": "arXivで検索する",
            "visualTitle": "絞った論文一覧から、読み返す資料フォルダへ",
            "stages": [
              "対象の論文一覧を開く",
              "PDFを確認・選択する",
              "研究用フォルダへ保存"
            ],
            "sample": [
              "グラフ学習の概要",
              "手法の比較",
              "研究資料"
            ],
            "visualNote": "架空の論文名による図解例です。arXivで探してから、必要なファイルを選んで保存します。",
            "screenTitle": "arXivで使う実際の拡張画面",
            "screenAlt": "arXivの公開論文リンクを検出し、PDFの絞り込みとファイル選択を行うGrab All Filesの実画面",
            "screenCaption": "取得済みの公開論文ページを使った隔離検証環境の実画面です。題名を確認・編集した例を示しています。",
            "officialTitle": "用途に合ったarXivの取得手段を選ぶ",
            "officialText": "読むための資料集は、絞った一覧を確認して必要な論文を選びます。大量の取得にはarXiv公式の一括アクセスを利用し、メタデータにはAPIを使えます。自動取得の前に公式のアクセス案内を確認してください。",
            "officialLabels": [
              "arXivのアクセス案内",
              "公式の一括データ取得",
              "arXivメタデータAPI"
            ]
          }
        },
        "es": {
          "title": "Descargar PDF y archivos de arXiv | Grab All Files",
          "desc": "Escanea resultados de arXiv, filtra PDF y guarda los artículos elegidos con títulos, carpetas, ZIP o CSV. Guía con pantalla real de la extensión.",
          "eyebrow": "PDF y archivos de arXiv",
          "h1": "Guarda los artículos de arXiv que necesitas.",
          "lead": "Busca primero en arXiv y convierte la lista que estás viendo en una carpeta de lectura. Grab All Files detecta PDF y enlaces públicos a archivos compatibles en esa página; tú revisas los resultados y eliges qué guardar.",
          "best": [
            "Crear una lista de lectura a partir de una búsqueda o categoría concreta.",
            "Guardar PDF seleccionados con nombres reconocibles.",
            "Gestionar archivos públicos compatibles y un CSV con sus URL."
          ],
          "steps": [
            "En arXiv, limita la búsqueda por palabras, categoría y fechas. Abre los resultados o la lista de artículos.",
            "Abre Grab All Files y escanea la página visible. Empieza por esa página y revisa títulos y URL de origen.",
            "Filtra por PDF y selecciona los artículos. Comprueba otros enlaces públicos por separado y elige solo formatos compatibles que necesites.",
            "Revisa o edita los títulos y elige el nombre y la clasificación en carpetas. Guarda archivos o ZIP y exporta el CSV para registrar las URL.",
            "Abre los PDF guardados y verifica los resultados. Anota la URL y la versión del artículo; para grandes colecciones, usa los servicios oficiales de arXiv."
          ],
          "faq": [
            {
              "q": "¿La extensión busca por tema en todo arXiv?",
              "a": "No. Busca y filtra en arXiv. La extensión escanea la página elegida; no es un buscador académico ni un descargador completo de arXiv."
            },
            {
              "q": "¿Detecta enlaces sin extensión .pdf?",
              "a": "Las URL PDF de arXiv como /pdf/ID pueden reconocerse como PDF. Revisa el tipo y la URL antes de guardar."
            },
            {
              "q": "¿También guarda TeX, datos y código?",
              "a": "Solo enlaces públicos encontrados y formatos compatibles. No todos los artículos ofrecen esos archivos; un repositorio externo puede requerir otra visita."
            },
            {
              "q": "¿Puedo guardar artículos gratis?",
              "a": "Free guarda hasta 10 archivos por operación, que puedes repetir. Pro elimina el límite de archivos. La recopilación gratuita guarda una página elegida en HTML; Pro combina varias páginas seleccionadas."
            },
            {
              "q": "¿Para qué sirven los títulos, ZIP y CSV?",
              "a": "Revisa o edita los títulos. El nombre automático vuelve al original si no hay un título útil. Las carpetas por tipo o dominio son opciones alternativas. ZIP reúne archivos elegidos; CSV registra información y URL."
            },
            {
              "q": "¿Es una herramienta oficial de arXiv?",
              "a": "No. Es independiente y no está afiliada a arXiv. Sigue sus pautas de acceso y las condiciones de cada artículo. Usa la API oficial para metadatos y el acceso masivo oficial para grandes colecciones de PDF o texto completo."
            }
          ],
          "arxiv": {
            "searchLabel": "Buscar en arXiv",
            "visualTitle": "De una lista concreta a una carpeta de lectura",
            "stages": [
              "Elegir la lista",
              "Revisar y seleccionar PDF",
              "Guardar la carpeta"
            ],
            "sample": [
              "Resumen del aprendizaje en grafos",
              "Comparación de métodos",
              "Artículos de investigación"
            ],
            "visualNote": "Ejemplo ilustrativo con títulos ficticios. Busca primero en arXiv y guarda solo los archivos que elijas.",
            "screenTitle": "La extensión real en arXiv",
            "screenAlt": "Grab All Files detectando enlaces públicos de arXiv con filtro PDF y selección de archivos",
            "screenCaption": "Pantalla real en un entorno de prueba aislado con una página pública de artículos obtenida previamente. Ejemplo con títulos revisados y editados. Interfaz en inglés.",
            "officialTitle": "Elige la vía de acceso adecuada",
            "officialText": "Para una colección de lectura, revisa una lista concreta. Para colecciones grandes, utiliza el acceso masivo oficial; la API ofrece metadatos. Consulta las pautas antes de recopilar automáticamente.",
            "officialLabels": [
              "Pautas de acceso de arXiv",
              "Acceso masivo oficial",
              "API de metadatos de arXiv"
            ]
          }
        },
        "fr": {
          "title": "Télécharger PDF et fichiers arXiv | Grab All Files",
          "desc": "Analysez une liste arXiv, filtrez les PDF et enregistrez les articles choisis avec titres, dossiers, ZIP ou CSV. Guide et écran réel de l’extension.",
          "eyebrow": "PDF et fichiers arXiv",
          "h1": "Gardez les articles arXiv utiles.",
          "lead": "Cherchez d’abord sur arXiv, puis transformez les résultats affichés en dossier de lecture. Grab All Files détecte les PDF et les liens publics de formats pris en charge sur cette page. Vous vérifiez la liste et choisissez les fichiers.",
          "best": [
            "Créer une liste de lecture depuis une recherche ou catégorie ciblée.",
            "Enregistrer des PDF choisis avec des noms reconnaissables.",
            "Conserver les fichiers publics compatibles et un CSV des URL."
          ],
          "steps": [
            "Sur arXiv, affinez les mots-clés, la catégorie et les dates. Ouvrez les résultats ou la liste d’articles.",
            "Ouvrez Grab All Files et analysez la page affichée. Commencez par cette page et vérifiez les titres et URL sources.",
            "Filtrez les PDF et choisissez vos articles. Vérifiez séparément les autres liens publics et les formats compatibles utiles.",
            "Vérifiez ou modifiez les titres, puis choisissez les noms et le classement des dossiers. Enregistrez les fichiers ou un ZIP et exportez le CSV des URL.",
            "Ouvrez les PDF sauvegardés et vérifiez les résultats. Notez l’URL et la version de l’article. Pour un grand corpus, utilisez les services officiels arXiv."
          ],
          "faq": [
            {
              "q": "L’extension recherche-t-elle dans tout arXiv ?",
              "a": "Non. Effectuez la recherche sur arXiv. L’extension analyse la page choisie ; ce n’est pas un moteur de recherche scientifique ni un téléchargement exhaustif."
            },
            {
              "q": "Les liens sans extension .pdf sont-ils détectés ?",
              "a": "Les URL PDF arXiv telles que /pdf/identifiant sont reconnues comme PDF. Vérifiez le type détecté et l’URL avant de sauvegarder."
            },
            {
              "q": "Et les sources TeX, données et code ?",
              "a": "Seuls les liens publics détectés dans un format pris en charge sont sélectionnables. Ces fichiers n’existent pas pour chaque article ; un dépôt externe peut nécessiter une visite séparée."
            },
            {
              "q": "Puis-je enregistrer des articles gratuitement ?",
              "a": "Free enregistre jusqu’à 10 fichiers par opération, renouvelable. Pro supprime ce plafond. La collecte gratuite conserve une page choisie en HTML ; Pro regroupe plusieurs pages sélectionnées."
            },
            {
              "q": "Quel intérêt pour les titres, ZIP et CSV ?",
              "a": "Vérifiez ou modifiez les titres. Le nom automatique reprend le nom original faute de titre utile. Le classement par type ou domaine offre deux options. ZIP regroupe les fichiers ; CSV consigne leurs informations et URL."
            },
            {
              "q": "Est-ce un outil officiel arXiv ?",
              "a": "Non. Cet outil indépendant n’est pas affilié à arXiv. Respectez les consignes d’accès et les conditions des articles. Utilisez l’API officielle pour les métadonnées et l’accès officiel en masse pour de grands ensembles de PDF ou de textes intégraux."
            }
          ],
          "arxiv": {
            "searchLabel": "Chercher sur arXiv",
            "visualTitle": "D’une liste ciblée à un dossier de lecture",
            "stages": [
              "Choisir la liste",
              "Vérifier et choisir les PDF",
              "Enregistrer le dossier"
            ],
            "sample": [
              "Introduction aux graphes",
              "Comparaison de méthodes",
              "Articles de recherche"
            ],
            "visualNote": "Exemple illustratif avec titres fictifs. Cherchez sur arXiv, puis sauvegardez les fichiers choisis.",
            "screenTitle": "L’extension réelle sur arXiv",
            "screenAlt": "Grab All Files détectant des liens publics arXiv avec filtre PDF et sélection des fichiers",
            "screenCaption": "Écran réel dans un environnement de test isolé utilisant une page publique d’articles récupérée auparavant. Exemple de titres vérifiés et modifiés. Interface en anglais.",
            "officialTitle": "Choisir la bonne voie d’accès",
            "officialText": "Pour vos lectures, vérifiez une liste ciblée. Pour un corpus important, utilisez l’accès officiel en masse ; l’API fournit les métadonnées. Consultez les consignes avant toute collecte automatisée.",
            "officialLabels": [
              "Consignes d’accès arXiv",
              "Accès officiel en masse",
              "API de métadonnées arXiv"
            ]
          }
        },
        "de": {
          "title": "arXiv-PDFs und Forschungsdateien laden | Grab All Files",
          "desc": "arXiv-Ergebnisse scannen, PDFs filtern und gewählte Artikel mit Titeln, Ordnern, ZIP oder CSV speichern. Mit echtem Erweiterungsbildschirm.",
          "eyebrow": "arXiv-PDFs und Forschungsdateien",
          "h1": "Benötigte arXiv-Artikel speichern.",
          "lead": "Suchen Sie zuerst auf arXiv und machen Sie die angezeigte Liste zu einem Leseordner. Grab All Files erkennt PDFs und öffentliche Links unterstützter Dateiformate auf dieser Seite. Prüfen Sie die Liste und wählen Sie Ihre Dateien.",
          "best": [
            "Eine Leseliste aus einer eingegrenzten Suche oder Kategorie erstellen.",
            "Gewählte PDFs mit verständlichen Namen speichern.",
            "Unterstützte öffentliche Dateien und eine CSV mit URLs verwalten."
          ],
          "steps": [
            "Grenzen Sie die Suche auf arXiv nach Begriff, Kategorie und Zeitraum ein. Öffnen Sie die Ergebnisse oder Artikelliste.",
            "Öffnen Sie Grab All Files und scannen Sie die angezeigte Seite. Beginnen Sie dort und prüfen Sie Titel sowie Quell-URLs.",
            "Filtern Sie nach PDF und wählen Sie die Artikel. Prüfen Sie andere öffentliche Dateilinks getrennt auf benötigte unterstützte Formate.",
            "Prüfen oder bearbeiten Sie Titel und wählen Sie Dateinamen und Ordneroption. Speichern Sie Dateien oder ZIP und exportieren Sie die Dateiliste als CSV.",
            "Öffnen Sie die PDFs und prüfen Sie das Ergebnis. Notieren Sie Quell-URL und Artikelversion. Für große Bestände nutzen Sie die offiziellen arXiv-Dienste."
          ],
          "faq": [
            {
              "q": "Durchsucht die Erweiterung ganz arXiv nach meinem Thema?",
              "a": "Nein. Suchen und filtern Sie auf arXiv. Die Erweiterung scannt die gewählte Seite; sie ist keine wissenschaftliche Suchmaschine und kein vollständiger arXiv-Downloader."
            },
            {
              "q": "Werden Links ohne .pdf erkannt?",
              "a": "arXiv-PDF-URLs wie /pdf/Artikel-ID können als PDF erkannt werden. Prüfen Sie Dateityp und URL vor dem Speichern."
            },
            {
              "q": "Kann ich auch TeX, Daten und Code speichern?",
              "a": "Nur gefundene öffentliche Links in unterstützten Formaten sind auswählbar. Nicht jeder Artikel bietet diese Dateien; externe Repositorien können einen eigenen Besuch erfordern."
            },
            {
              "q": "Kann ich Artikel kostenlos speichern?",
              "a": "Free speichert bis zu 10 Dateien je Vorgang; Sie können ihn wiederholen. Pro hebt das Dateilimit auf. Die kostenlose Seitensammlung speichert eine gewählte Seite als HTML; Pro bündelt mehrere ausgewählte Seiten."
            },
            {
              "q": "Wozu dienen Titel, ZIP und CSV?",
              "a": "Prüfen oder bearbeiten Sie die Titel. Automatische Namen verwenden ohne brauchbaren Titel den Originalnamen. Typ- und Domainordner sind alternative Optionen. ZIP bündelt die Auswahl; CSV dokumentiert Dateiinformationen und URLs."
            },
            {
              "q": "Ist dies ein offizielles arXiv-Werkzeug?",
              "a": "Nein. Das unabhängige Werkzeug ist nicht mit arXiv verbunden. Beachten Sie Zugriffshinweise und Nutzungsbedingungen der Artikel. Nutzen Sie die offizielle API für Metadaten und den offiziellen Massenzugang für große PDF- oder Volltextsammlungen."
            }
          ],
          "arxiv": {
            "searchLabel": "Auf arXiv suchen",
            "visualTitle": "Von der gezielten Liste zum Leseordner",
            "stages": [
              "Artikelliste wählen",
              "PDFs prüfen und auswählen",
              "Forschungsordner speichern"
            ],
            "sample": [
              "Überblick über Graphenlernen",
              "Methodenvergleich",
              "Forschungsartikel"
            ],
            "visualNote": "Beispiel mit erfundenen Titeln. Erst auf arXiv suchen, dann gewählte Dateien scannen und speichern.",
            "screenTitle": "Die echte Erweiterung auf arXiv",
            "screenAlt": "Grab All Files erkennt öffentliche arXiv-Links mit PDF-Filter und Dateiauswahl",
            "screenCaption": "Echter Erweiterungsbildschirm in einer isolierten Testumgebung mit einer zuvor abgerufenen öffentlichen Artikelseite. Beispiel mit geprüften und bearbeiteten Titeln. Englische Oberfläche.",
            "officialTitle": "Den passenden arXiv-Zugang nutzen",
            "officialText": "Für Ihre Lesesammlung prüfen Sie eine gezielte Liste. Für große Bestände nutzen Sie den offiziellen Massenzugang; die API liefert Metadaten. Lesen Sie vor automatisierter Sammlung die Zugriffshinweise.",
            "officialLabels": [
              "arXiv-Zugriffshinweise",
              "Offizieller Massenzugang",
              "arXiv-Metadaten-API"
            ]
          }
        },
        "it": {
          "title": "Scaricare PDF e file di ricerca arXiv | Grab All Files",
          "desc": "Scansiona risultati arXiv, filtra PDF e salva gli articoli scelti con titoli, cartelle, ZIP o CSV. Guida con schermata reale dell’estensione.",
          "eyebrow": "PDF e file di ricerca arXiv",
          "h1": "Salva gli articoli arXiv che ti servono.",
          "lead": "Cerca prima su arXiv e trasforma l’elenco visualizzato in una cartella di lettura. Grab All Files rileva PDF e link pubblici a formati supportati su quella pagina; controlla i risultati e scegli cosa salvare.",
          "best": [
            "Creare una lista di lettura da una ricerca o categoria mirata.",
            "Salvare PDF scelti con nomi riconoscibili.",
            "Gestire file pubblici supportati e un CSV con gli URL."
          ],
          "steps": [
            "In arXiv, restringi parole chiave, categoria e periodo. Apri i risultati o l’elenco degli articoli.",
            "Apri Grab All Files e scansiona la pagina visualizzata. Inizia da quella pagina e verifica titoli e URL di origine.",
            "Filtra per PDF e seleziona gli articoli. Controlla separatamente gli altri link pubblici e scegli formati supportati utili.",
            "Verifica o modifica i titoli, scegli nomi e cartelle. Salva file o ZIP ed esporta il CSV per tenere traccia degli URL.",
            "Apri i PDF salvati e controlla il risultato. Annota URL e versione dell’articolo; per grandi raccolte usa i servizi ufficiali di arXiv."
          ],
          "faq": [
            {
              "q": "L’estensione cerca per tema in tutto arXiv?",
              "a": "No. Cerca e filtra su arXiv. L’estensione scansiona la pagina scelta; non è un motore accademico né un downloader completo."
            },
            {
              "q": "Rileva link senza estensione .pdf?",
              "a": "Gli URL PDF arXiv come /pdf/ID possono essere riconosciuti come PDF. Controlla il tipo e l’URL prima del salvataggio."
            },
            {
              "q": "Posso salvare anche TeX, dati e codice?",
              "a": "Solo link pubblici rilevati in formati supportati. Non ogni articolo offre tali file; un archivio esterno può richiedere una visita separata."
            },
            {
              "q": "Posso salvare articoli gratis?",
              "a": "Free salva fino a 10 file per operazione, ripetibile. Pro rimuove il limite di file. La raccolta gratuita salva una pagina scelta in HTML; Pro unisce più pagine selezionate."
            },
            {
              "q": "A cosa servono titoli, ZIP e CSV?",
              "a": "Verifica o modifica i titoli. Il nome automatico torna all’originale se manca un titolo utile. Cartelle per tipo e dominio sono opzioni alternative. ZIP raccoglie i file scelti; CSV registra informazioni e URL."
            },
            {
              "q": "È uno strumento ufficiale arXiv?",
              "a": "No. È indipendente e non affiliato ad arXiv. Segui le indicazioni di accesso e i termini degli articoli. Usa l’API ufficiale per i metadati e l’accesso massivo ufficiale per grandi raccolte di PDF o testi integrali."
            }
          ],
          "arxiv": {
            "searchLabel": "Cercare su arXiv",
            "visualTitle": "Da un elenco mirato alla cartella di lettura",
            "stages": [
              "Scegliere l’elenco",
              "Verificare e scegliere PDF",
              "Salvare la cartella"
            ],
            "sample": [
              "Introduzione ai grafi",
              "Confronto di metodi",
              "Articoli di ricerca"
            ],
            "visualNote": "Esempio con titoli inventati. Cerca su arXiv, poi salva solo i file scelti.",
            "screenTitle": "L’estensione reale su arXiv",
            "screenAlt": "Grab All Files rileva link pubblici arXiv con filtro PDF e selezione dei file",
            "screenCaption": "Schermata reale in un ambiente di test isolato con una pagina pubblica di articoli già acquisita. Esempio con titoli verificati e modificati. Interfaccia in inglese.",
            "officialTitle": "Usa l’accesso arXiv adatto",
            "officialText": "Per leggere, controlla un elenco mirato. Per grandi raccolte, usa l’accesso massivo ufficiale; l’API fornisce metadati. Leggi le indicazioni prima di una raccolta automatizzata.",
            "officialLabels": [
              "Indicazioni di accesso arXiv",
              "Accesso massivo ufficiale",
              "API di metadati arXiv"
            ]
          }
        },
        "ko": {
          "title": "arXiv PDF·연구 파일 저장 | Grab All Files",
          "desc": "arXiv 검색 결과를 스캔하고 PDF를 골라 제목, 폴더, ZIP, 파일 목록 CSV로 저장하세요. 실제 확장 화면과 사용 흐름을 소개합니다.",
          "eyebrow": "arXiv PDF·연구 파일",
          "h1": "필요한 arXiv 논문을 저장하세요.",
          "lead": "먼저 arXiv에서 검색하고, 보고 있는 논문 목록을 읽기 좋은 자료 폴더로 만드세요. Grab All Files는 해당 페이지의 PDF와 지원 형식의 공개 파일 링크를 찾아줍니다. 목록을 확인하고 필요한 자료를 선택합니다.",
          "best": [
            "주제나 분야를 좁혀 논문 읽기 목록을 만들기.",
            "선택한 PDF를 알아보기 쉬운 제목으로 저장하기.",
            "지원되는 공개 파일과 URL 목록 CSV를 함께 관리하기."
          ],
          "steps": [
            "arXiv에서 검색어, 분야, 기간을 좁혀 검색 결과나 논문 목록을 엽니다.",
            "Grab All Files를 열고 표시된 페이지를 스캔합니다. 우선 해당 페이지에서 파일 제목과 원본 URL을 확인합니다.",
            "PDF로 필터링하고 필요한 논문을 선택합니다. 다른 공개 링크는 별도로 확인하고 필요한 지원 형식만 선택합니다.",
            "제목을 확인·수정하고 저장 이름과 폴더 옵션을 고릅니다. 파일 또는 ZIP으로 저장하고 URL 기록용 파일 목록 CSV를 내보냅니다.",
            "저장된 PDF를 열어 결과를 확인합니다. 원본 URL과 논문 버전을 메모하고, 대규모 자료는 arXiv 공식 일괄 접근 서비스를 사용합니다."
          ],
          "faq": [
            {
              "q": "확장이 arXiv 전체를 주제로 검색하나요?",
              "a": "아니요. 검색과 필터링은 arXiv에서 합니다. 확장은 선택한 페이지를 스캔하며 학술 검색 엔진이나 전체 arXiv 다운로더가 아닙니다."
            },
            {
              "q": ".pdf가 없는 링크도 감지하나요?",
              "a": "/pdf/논문ID 같은 arXiv PDF URL도 PDF로 인식할 수 있습니다. 저장 전 감지된 종류와 URL을 확인하세요."
            },
            {
              "q": "TeX·데이터·코드도 저장할 수 있나요?",
              "a": "발견된 공개 링크 중 지원 형식만 선택할 수 있습니다. 모든 논문에 해당 자료가 있는 것은 아니며 외부 저장소는 별도로 확인해야 할 수 있습니다."
            },
            {
              "q": "무료로 논문을 저장할 수 있나요?",
              "a": "Free는 실행당 최대 10개 파일을 저장하고 반복 실행할 수 있습니다. Pro는 파일 수 제한을 해제합니다. 무료 페이지 수집은 선택한 1페이지를 HTML로 저장하고 Pro는 여러 선택 페이지를 결합합니다."
            },
            {
              "q": "제목·ZIP·CSV는 어떻게 도움이 되나요?",
              "a": "제목을 확인·수정하세요. 유용한 제목이 없으면 자동 이름은 원래 파일명을 사용합니다. 종류별과 도메인별 폴더는 별도 선택지입니다. ZIP은 선택 파일을 묶고 CSV는 정보와 URL을 기록합니다."
            },
            {
              "q": "arXiv 공식 도구인가요?",
              "a": "아니요. arXiv와 제휴하지 않은 독립 도구입니다. 접근 안내와 논문 이용 조건을 따르세요. 메타데이터에는 공식 API를, 대규모 PDF·본문 수집에는 공식 일괄 접근 서비스를 사용하세요."
            }
          ],
          "arxiv": {
            "searchLabel": "arXiv에서 검색",
            "visualTitle": "논문 목록에서 읽기용 폴더로",
            "stages": [
              "논문 목록 선택",
              "PDF 확인·선택",
              "연구 폴더 저장"
            ],
            "sample": [
              "그래프 학습 개요",
              "방법 비교",
              "연구 논문"
            ],
            "visualNote": "가상의 제목을 사용한 그림 예시입니다. arXiv에서 찾은 뒤 필요한 파일만 선택해 저장합니다.",
            "screenTitle": "arXiv의 실제 확장 화면",
            "screenAlt": "arXiv 공개 논문 링크를 감지하고 PDF 필터와 파일 선택을 표시하는 Grab All Files",
            "screenCaption": "미리 가져온 공개 논문 페이지를 사용한 격리된 검증 환경의 실제 확장 화면입니다. 제목을 확인·수정한 예시이며 영어 UI입니다.",
            "officialTitle": "용도에 맞는 arXiv 접근 경로",
            "officialText": "읽기용 자료는 범위를 좁힌 목록에서 고릅니다. 대규모 자료는 공식 일괄 접근을 사용하고 메타데이터는 API를 이용하세요. 자동 수집 전 접근 안내를 확인하세요.",
            "officialLabels": [
              "arXiv 접근 안내",
              "공식 일괄 데이터 접근",
              "arXiv 메타데이터 API"
            ]
          }
        },
        "pt_BR": {
          "title": "Baixar PDFs e arquivos do arXiv | Grab All Files",
          "desc": "Escaneie resultados do arXiv, filtre PDFs e salve artigos com títulos, pastas, ZIP ou CSV. Guia com tela real da extensão.",
          "eyebrow": "PDFs e arquivos do arXiv",
          "h1": "Salve os artigos arXiv que precisa.",
          "lead": "Pesquise primeiro no arXiv e transforme a lista exibida em uma pasta de leitura. Grab All Files detecta PDFs e links públicos de formatos compatíveis nessa página. Confira a lista e escolha os arquivos.",
          "best": [
            "Montar uma lista de leitura de uma busca ou categoria específica.",
            "Salvar PDFs escolhidos com nomes reconhecíveis.",
            "Gerenciar arquivos públicos compatíveis e um CSV com URLs."
          ],
          "steps": [
            "No arXiv, filtre palavras, categoria e período. Abra os resultados ou a lista de artigos.",
            "Abra Grab All Files e escaneie a página exibida. Comece por essa página e confira títulos e URLs de origem.",
            "Filtre por PDF e escolha os artigos. Confira outros links públicos separadamente e escolha apenas formatos compatíveis úteis.",
            "Confira ou edite títulos e escolha nomes e pastas. Salve arquivos ou ZIP e exporte o CSV para registrar as URLs.",
            "Abra os PDFs salvos e confira o resultado. Anote URL e versão do artigo; para grandes coleções, use os serviços oficiais do arXiv."
          ],
          "faq": [
            {
              "q": "A extensão pesquisa por tema em todo o arXiv?",
              "a": "Não. Pesquise e filtre no arXiv. A extensão escaneia a página escolhida; não é um buscador acadêmico nem um downloader completo."
            },
            {
              "q": "Detecta links sem extensão .pdf?",
              "a": "URLs PDF do arXiv como /pdf/ID podem ser reconhecidas como PDF. Confira o tipo e a URL antes de salvar."
            },
            {
              "q": "Posso salvar TeX, dados e código também?",
              "a": "Apenas links públicos encontrados em formatos compatíveis podem ser escolhidos. Nem todo artigo oferece esses arquivos; repositórios externos podem exigir outra visita."
            },
            {
              "q": "Posso salvar artigos grátis?",
              "a": "O Free salva até 10 arquivos por operação, que pode ser repetida. O Pro remove o limite de arquivos. A coleta gratuita salva uma página escolhida em HTML; o Pro reúne várias páginas selecionadas."
            },
            {
              "q": "Como títulos, ZIP e CSV ajudam?",
              "a": "Confira ou edite os títulos. Sem título útil, o nome automático usa o original. Pastas por tipo e domínio são opções alternativas. ZIP reúne a seleção; CSV registra informações e URLs."
            },
            {
              "q": "É uma ferramenta oficial do arXiv?",
              "a": "Não. É independente e não afiliada ao arXiv. Siga as orientações de acesso e os termos dos artigos. Use a API oficial para metadados e o acesso em massa oficial para grandes coleções de PDFs ou textos completos."
            }
          ],
          "arxiv": {
            "searchLabel": "Pesquisar no arXiv",
            "visualTitle": "Da lista específica à pasta de leitura",
            "stages": [
              "Escolher a lista",
              "Conferir e selecionar PDFs",
              "Salvar a pasta"
            ],
            "sample": [
              "Visão geral de grafos",
              "Comparação de métodos",
              "Artigos de pesquisa"
            ],
            "visualNote": "Exemplo ilustrativo com títulos fictícios. Pesquise no arXiv e salve apenas os arquivos escolhidos.",
            "screenTitle": "A extensão real no arXiv",
            "screenAlt": "Grab All Files detectando links públicos do arXiv com filtro PDF e seleção de arquivos",
            "screenCaption": "Tela real em ambiente de teste isolado com uma página pública de artigos obtida previamente. Exemplo com títulos conferidos e editados. Interface em inglês.",
            "officialTitle": "Escolha a via de acesso adequada",
            "officialText": "Para leitura, confira uma lista específica. Para grandes coleções, use o acesso em massa oficial; a API fornece metadados. Leia as orientações antes da coleta automatizada.",
            "officialLabels": [
              "Orientações de acesso arXiv",
              "Acesso em massa oficial",
              "API de metadados arXiv"
            ]
          }
        },
        "zh_CN": {
          "title": "批量保存arXiv PDF与研究文件 | Grab All Files",
          "desc": "扫描arXiv搜索结果，筛选并选择所需PDF，按题名、文件夹、ZIP或文件列表CSV保存。附实际扩展界面与流程图。",
          "eyebrow": "arXiv PDF与研究文件",
          "h1": "保存需要的arXiv论文。",
          "lead": "先在arXiv搜索，再把正在查看的论文列表整理成阅读资料夹。Grab All Files检测该页面的PDF与受支持格式的公开文件链接。由您核对列表并选择要保存的资料。",
          "best": [
            "从筛选后的搜索或类别列表建立阅读清单。",
            "以易识别的题名保存选定PDF。",
            "同时管理受支持的公开文件与记录URL的CSV。"
          ],
          "steps": [
            "在arXiv按关键词、类别和时间筛选，打开目标搜索结果或论文列表。",
            "打开Grab All Files并扫描当前页面。先从该页面开始，核对文件题名和来源URL。",
            "筛选PDF并选择需要的论文。其他公开链接另行核对，只选择需要的受支持格式。",
            "检查或编辑题名，选择保存名称与文件夹方式。单独保存或打包ZIP，并导出文件列表CSV记录URL。",
            "打开已保存PDF核对结果。记录来源URL与论文版本；大规模论文集合使用arXiv官方批量访问服务。"
          ],
          "faq": [
            {
              "q": "扩展会在整个arXiv按主题搜索吗？",
              "a": "不会。搜索与筛选在arXiv完成。扩展扫描选定页面，不是学术搜索引擎或arXiv全站下载器。"
            },
            {
              "q": "没有.pdf后缀的链接能识别吗？",
              "a": "/pdf/论文ID等arXiv PDF URL也可识别为PDF。保存前请核对检测类型与URL。"
            },
            {
              "q": "也能保存TeX、数据和代码吗？",
              "a": "仅能选择发现的公开链接与受支持格式。并非每篇论文都提供这些文件，外部仓库可能需要另行访问。"
            },
            {
              "q": "可以免费保存论文吗？",
              "a": "Free每次保存最多10个文件，可重复执行。Pro解除文件数量上限。免费页面收集保存选定的1页HTML，Pro可合并多个选定页面。"
            },
            {
              "q": "题名、ZIP与CSV有什么帮助？",
              "a": "保存前检查或编辑题名。自动命名无有效题名时使用原名。按格式与按来源域名分类是不同选项。ZIP打包选定文件，CSV记录文件信息与URL。"
            },
            {
              "q": "这是arXiv官方工具吗？",
              "a": "不是。Grab All Files为独立工具，与arXiv无合作关系。请遵守访问指南与各论文使用条件。元数据使用官方API，大规模PDF或正文集合使用官方批量访问途径。"
            }
          ],
          "arxiv": {
            "searchLabel": "在arXiv搜索",
            "visualTitle": "从筛选列表到阅读资料夹",
            "stages": [
              "打开论文列表",
              "核对并选择PDF",
              "保存研究资料夹"
            ],
            "sample": [
              "图学习概述",
              "方法比较",
              "研究论文"
            ],
            "visualNote": "使用虚构题名的流程示例。先在arXiv查找，再选择并保存所需文件。",
            "screenTitle": "arXiv上的实际扩展界面",
            "screenAlt": "Grab All Files检测arXiv公开论文链接，并显示PDF筛选与文件选择",
            "screenCaption": "使用已获取公开论文页面的隔离验证环境中的实际扩展界面。示例展示题名核对与编辑，界面为英文。",
            "officialTitle": "选择合适的arXiv访问途径",
            "officialText": "阅读资料从筛选后的列表选择。大规模集合使用官方批量访问；API提供元数据。自动收集前请阅读访问指南。",
            "officialLabels": [
              "arXiv访问指南",
              "官方批量数据访问",
              "arXiv元数据API"
            ]
          }
        },
        "zh_TW": {
          "title": "批次儲存arXiv PDF與研究檔案 | Grab All Files",
          "desc": "掃描arXiv搜尋結果，篩選並選取所需PDF，依題名、資料夾、ZIP或檔案清單CSV儲存。附實際擴充畫面與流程圖。",
          "eyebrow": "arXiv PDF與研究檔案",
          "h1": "儲存需要的arXiv論文。",
          "lead": "先在arXiv搜尋，再把正在查看的論文清單整理成閱讀資料夾。Grab All Files偵測該頁面的PDF與支援格式的公開檔案連結。由您核對清單並選取要儲存的資料。",
          "best": [
            "從篩選後的搜尋或類別清單建立閱讀清單。",
            "以易辨識的題名儲存選定PDF。",
            "同時管理支援的公開檔案與記錄URL的CSV。"
          ],
          "steps": [
            "在arXiv依關鍵字、類別和期間篩選，開啟目標搜尋結果或論文清單。",
            "開啟Grab All Files並掃描目前頁面。先從該頁面開始，核對檔案題名和來源URL。",
            "篩選PDF並選取需要的論文。其他公開連結另行核對，只選擇需要的支援格式。",
            "檢查或編輯題名，選擇儲存名稱與資料夾方式。個別儲存或打包ZIP，並匯出檔案清單CSV記錄URL。",
            "開啟已儲存PDF核對結果。記錄來源URL與論文版本；大規模論文集合使用arXiv官方批次存取服務。"
          ],
          "faq": [
            {
              "q": "擴充功能會在整個arXiv依主題搜尋嗎？",
              "a": "不會。搜尋與篩選在arXiv完成。擴充功能掃描選定頁面，不是學術搜尋引擎或arXiv全站下載器。"
            },
            {
              "q": "沒有.pdf副檔名的連結能辨識嗎？",
              "a": "/pdf/論文ID等arXiv PDF URL也可辨識為PDF。儲存前請核對偵測類型與URL。"
            },
            {
              "q": "也能儲存TeX、資料和程式碼嗎？",
              "a": "只能選取找到的公開連結與支援格式。並非每篇論文都提供這些檔案，外部儲存庫可能需另外造訪。"
            },
            {
              "q": "可以免費儲存論文嗎？",
              "a": "Free每次儲存最多10個檔案，可重複執行。Pro解除檔案數量上限。免費頁面收集儲存選定的1頁HTML，Pro可合併多個選定頁面。"
            },
            {
              "q": "題名、ZIP與CSV有什麼幫助？",
              "a": "儲存前檢查或編輯題名。自動命名無有效題名時使用原名。依格式與依來源網域分類是不同選項。ZIP打包選定檔案，CSV記錄檔案資訊與URL。"
            },
            {
              "q": "這是arXiv官方工具嗎？",
              "a": "不是。Grab All Files為獨立工具，與arXiv無合作關係。請遵守存取指南與各論文使用條件。中繼資料使用官方API，大規模PDF或正文集合使用官方批次存取途徑。"
            }
          ],
          "arxiv": {
            "searchLabel": "在arXiv搜尋",
            "visualTitle": "從篩選清單到閱讀資料夾",
            "stages": [
              "開啟論文清單",
              "核對並選取PDF",
              "儲存研究資料夾"
            ],
            "sample": [
              "圖學習概述",
              "方法比較",
              "研究論文"
            ],
            "visualNote": "使用虛構題名的流程範例。先在arXiv尋找，再選取並儲存所需檔案。",
            "screenTitle": "arXiv上的實際擴充畫面",
            "screenAlt": "Grab All Files偵測arXiv公開論文連結，並顯示PDF篩選與檔案選取",
            "screenCaption": "使用已取得公開論文頁面的隔離驗證環境中的實際擴充畫面。範例展示題名核對與編輯，介面為英文。",
            "officialTitle": "選擇合適的arXiv存取途徑",
            "officialText": "閱讀資料從篩選後的清單選擇。大規模集合使用官方批次存取；API提供中繼資料。自動收集前請閱讀存取指南。",
            "officialLabels": [
              "arXiv存取指南",
              "官方批次資料存取",
              "arXiv中繼資料API"
            ]
          }
        }
      }
    },
    "web-tables-to-csv-for-excel-ai": {
      "path": "web-tables-to-csv-for-excel-ai.html",
      "related": [
        "web-pages-for-reading-and-ai-analysis",
        "save-web-pages-as-markdown"
      ],
      "copy": {
        "en": {
          "title": "Web tables to CSV for Excel & AI analysis | Grab All Files",
          "h1": "Use web tables in Excel or AI.",
          "desc": "Export supported web tables as CSV, check headers and units, then import them into Excel or give selected files to an external AI tool.",
          "lead": "Turn a useful web table into data you can sort, filter and compare. Prepare table files through the page collector’s AI output, then choose whether to work in Excel or ask an external AI tool. You decide which pages and files to use.",
          "best": [
            "Compare public fee or eligibility tables while keeping units and footnotes.",
            "Reuse a published list for filtering and checking in Excel."
          ],
          "steps": [
            "Open the permitted source and choose “Combine pages into HTML” in the extension. Select the page with the table.",
            "Before collection, enable “AI analysis data (Markdown with sources)”, choose “Per-page Markdown” or “Full package”, and enable “Also export tables as CSV/JSON”.",
            "Collect the page and save the AI ZIP. Inspect the CSV/JSON table files against the original headings, cells, units and notes. “Save AI analysis ZIP”",
            "Import a CSV into Excel or manually give supported files to your external AI service. Check dates, identifiers and the resulting analysis."
          ],
          "faq": [
            {
              "q": "Is this the file-list CSV?",
              "a": "No. File-list CSV describes downloaded-file URLs and metadata. This workflow extracts supported HTML table data through the collector’s AI output."
            },
            {
              "q": "Will every table become CSV?",
              "a": "Table export applies to meaningful HTML tables within extraction limits when per-page or full-package output is selected. Layout tables are excluded; images and PDF screenshots are not guaranteed table data."
            },
            {
              "q": "Can I export XLSX directly?",
              "a": "This workflow produces CSV/JSON table files. Open or import CSV in Excel yourself; a direct XLSX export is not described."
            },
            {
              "q": "Can I start with Free?",
              "a": "Free collects one chosen page; Pro can select multiple page bodies. The extension prepares files locally. You pass them to Excel or an external AI tool yourself."
            }
          ],
          "guide": {
            "title": "Choose how to use the table",
            "modes": [
              [
                "Work in Excel",
                "Import CSV, check data types, then filter or sort the rows. Keep identifiers as text where needed."
              ],
              [
                "Ask external AI",
                "Choose the relevant table and source material and ask for a comparison or summary. Verify the answer against the original table."
              ]
            ],
            "examplesTitle": "Useful questions for a table",
            "examples": [
              [
                "Compare stated conditions",
                "Compare the rows using only the supplied values. Keep units and footnotes, cite the source page, and mark unavailable values rather than guessing."
              ],
              [
                "Check a list",
                "Identify duplicate entries and missing fields. Explain the rule used and leave the original values available for review."
              ]
            ],
            "formatsTitle": "Files and settings",
            "headers": [
              "Output",
              "Use"
            ],
            "rows": [
              [
                "CSV / JSON tables",
                "Enable table export with per-page or full-package output. Check extracted cells before reuse."
              ],
              [
                "Markdown / JSONL / manifest",
                "Source URLs and capture dates in AI output help you check where the material came from."
              ],
              [
                "HTML",
                "Read the collected page and compare the table with its context."
              ]
            ]
          },
          "eyebrow": "Web tables to CSV"
        },
        "ja": {
          "title": "Web表をCSV保存してExcel・AIで分析 | Grab All Files",
          "h1": "Webの表をCSVで活用。",
          "desc": "Webページの表をCSVに保存し、Excelで集計・比較、外部AIで分析する手順。表の出力設定、単位・注記の確認、ファイル一覧CSVとの違いを紹介します。",
          "lead": "必要なWeb表を、並べ替え・集計・比較できる資料に。ページ収集のAI向け出力から表のファイルを準備し、Excelで使うか、外部AIへ質問するかを選べます。利用するページと資料は自分で確認します。",
          "best": [
            "公開された料金・条件の表を、単位や注記を保って比較する。",
            "公開リストをExcelで絞り込み、重複や記載を確認する。"
          ],
          "steps": [
            "閲覧・保存が許可された起点ページを開き、拡張機能の「ページをHTMLにまとめる」を選びます。表があるページを選択します。",
            "収集前に「AI分析用データ（Markdown・出典付き）」を有効にし、「ページ別Markdown」または「フルパッケージ」と「表をCSV/JSONとしても書き出す」を選びます。",
            "ページを収集してAI ZIPを保存。CSV・JSONの表ファイルを開き、見出し・セル・単位・注記を原文と照合します。 “AI分析用ZIPを保存”",
            "CSVをExcelへ取り込むか、対応する資料を外部AIへ自分で渡します。日付や識別番号の扱い、分析結果を確認します。"
          ],
          "faq": [
            {
              "q": "ファイル一覧のCSVとは違いますか？",
              "a": "違います。ファイル一覧CSVはURLやファイル情報の一覧です。この手順は、ページ収集のAI向け出力から対応するHTML表のデータを抽出します。"
            },
            {
              "q": "どんな表でもCSVになりますか？",
              "a": "ページ別／完全パッケージで表の出力を有効にした場合に、意味のあるHTML表を対応範囲・上限内で抽出します。レイアウト表は除外され、画像やPDFの見た目の表が必ずデータになるわけではありません。"
            },
            {
              "q": "XLSXを直接出力できますか？",
              "a": "この手順ではCSV・JSONの表ファイルを作ります。CSVは利用者がExcelで開く・取り込む使い方です。XLSX直接出力としては案内していません。"
            },
            {
              "q": "無料版から試せますか？",
              "a": "無料版は選んだ1ページを収集し、Proは複数ページ本文を選べます。資料の準備は端末内で行い、Excelや外部AIへは自分で渡します。"
            }
          ],
          "guide": {
            "title": "表を使う目的に合わせて選ぶ",
            "modes": [
              [
                "Excelで集計する",
                "CSVを取り込み、データ型を確認して行を絞り込み・並べ替えます。識別番号などは必要に応じて文字列として扱います。"
              ],
              [
                "外部AIで比較する",
                "必要な表と出典資料を選び、比較や要約を依頼します。回答は元の表と照合して確認します。"
              ]
            ],
            "examplesTitle": "表の内容に合わせて質問する",
            "examples": [
              [
                "条件の比較",
                "提供した数値と記載だけを使って各行を比較してください。単位・注記を保ち、出典ページを示してください。値がない場合は推測せず、その旨を記載してください。"
              ],
              [
                "リストの確認",
                "重複する項目や未記入欄を確認してください。判定方法を説明し、元の値を確認できる形にしてください。"
              ]
            ],
            "formatsTitle": "出力ファイルと設定",
            "headers": [
              "出力",
              "使い方"
            ],
            "rows": [
              [
                "表のCSV / JSON",
                "ページ別／完全パッケージで表の出力を有効にします。再利用前に抽出セルを確認します。"
              ],
              [
                "Markdown / JSONL / manifest",
                "AI出力の元URLと取得日を使い、資料の出典を確認します。"
              ],
              [
                "HTML",
                "表の周囲の説明を読み返し、内容を照合します。"
              ]
            ]
          },
          "eyebrow": "Web表をCSVで活用"
        },
        "es": {
          "title": "Tablas web a CSV para Excel e IA | Grab All Files",
          "h1": "Usa tablas web en Excel o IA.",
          "desc": "Exporta tablas web compatibles a CSV, revisa encabezados y unidades e impórtalas en Excel o entrégalas a una IA externa.",
          "lead": "Convierte una tabla útil en datos para ordenar, filtrar y comparar. Prepara los archivos mediante la salida IA del recopilador y elige Excel o una IA externa. Revisa qué páginas y materiales usas.",
          "best": [
            "Comparar tablas públicas de tarifas o requisitos con unidades y notas.",
            "Filtrar listas publicadas y comprobar entradas en Excel."
          ],
          "steps": [
            "Abre la fuente permitida y elige «Combinar páginas en HTML» en la extensión. Elige la página con la tabla.",
            "Antes de recopilar, activa «Datos para análisis con IA (Markdown con fuentes)», elige «Markdown por página» o «Paquete completo» y activa «Exportar también las tablas como CSV/JSON».",
            "Recopila y guarda el ZIP IA. Contrasta archivos CSV/JSON con encabezados, celdas, unidades y notas originales. “Guardar ZIP de análisis IA”",
            "Importa CSV en Excel o entrega manualmente archivos aceptados a tu IA externa. Revisa fechas, identificadores y resultados."
          ],
          "faq": [
            {
              "q": "¿Es el CSV de la lista de archivos?",
              "a": "No. Ese CSV enumera URL y metadatos de archivos. Aquí se extraen datos de tablas HTML mediante la salida IA del recopilador."
            },
            {
              "q": "¿Cualquier tabla se convierte en CSV?",
              "a": "Con salida por página o paquete completo y exportación de tablas activada se extraen tablas HTML significativas dentro de los límites. Se excluyen tablas de diseño; no se garantiza convertir imágenes o capturas PDF."
            },
            {
              "q": "¿Exporta XLSX directamente?",
              "a": "Este flujo genera CSV/JSON. Abre o importa CSV en Excel tú mismo; no se describe exportación XLSX directa."
            },
            {
              "q": "¿Puedo empezar gratis?",
              "a": "Free recopila una página elegida; Pro selecciona varias. La preparación es local y tú entregas los archivos a Excel o IA externa."
            }
          ],
          "guide": {
            "title": "Elige cómo usar la tabla",
            "modes": [
              [
                "Trabajar en Excel",
                "Importa CSV, revisa tipos de datos y filtra u ordena filas. Conserva identificadores como texto si hace falta."
              ],
              [
                "Consultar una IA externa",
                "Elige tabla y fuentes y pide una comparación o resumen. Verifica la respuesta con el original."
              ]
            ],
            "examplesTitle": "Preguntas útiles sobre una tabla",
            "examples": [
              [
                "Comparar condiciones",
                "Compara filas solo con los valores proporcionados. Conserva unidades y notas, cita la fuente y señala valores ausentes sin inventarlos."
              ],
              [
                "Revisar una lista",
                "Identifica duplicados y campos vacíos. Explica la regla y conserva los valores originales para comprobarlos."
              ]
            ],
            "formatsTitle": "Archivos y ajustes",
            "headers": [
              "Salida",
              "Uso"
            ],
            "rows": [
              [
                "CSV / JSON",
                "Activa tablas con salida por página o paquete completo y revisa las celdas extraídas."
              ],
              [
                "Markdown / JSONL / manifest",
                "URL y fechas de captura de la salida IA ayudan a comprobar las fuentes."
              ],
              [
                "HTML",
                "Lee el contexto y contrasta la tabla."
              ]
            ]
          },
          "eyebrow": "Tablas web a CSV"
        },
        "fr": {
          "title": "Tableaux web en CSV pour Excel et IA | Grab All Files",
          "h1": "Utiliser les tableaux web dans Excel ou l’IA.",
          "desc": "Exportez les tableaux web compatibles en CSV, vérifiez colonnes et unités, puis importez dans Excel ou transmettez à une IA externe.",
          "lead": "Transformez un tableau utile en données à trier, filtrer et comparer. Préparez les fichiers via l’export IA du collecteur, puis choisissez Excel ou une IA externe. Vérifiez les pages et documents utilisés.",
          "best": [
            "Comparer tarifs ou critères publiés avec unités et notes.",
            "Filtrer des listes publiées et contrôler les entrées dans Excel."
          ],
          "steps": [
            "Ouvrez la source autorisée puis «Regrouper les pages en HTML» dans l’extension. Choisissez la page avec le tableau.",
            "Avant collecte, activez «Données pour analyse par IA (Markdown avec sources)», choisissez «Markdown par page» ou «Paquet complet» et «Exporter aussi les tableaux en CSV/JSON».",
            "Collectez et enregistrez le ZIP IA. Comparez CSV/JSON aux colonnes, cellules, unités et notes originales. “Enregistrer le ZIP d’analyse IA”",
            "Importez CSV dans Excel ou transmettez vous-même les fichiers acceptés à une IA externe. Vérifiez dates, identifiants et résultats."
          ],
          "faq": [
            {
              "q": "Est-ce le CSV de la liste de fichiers ?",
              "a": "Non. Ce CSV liste URL et métadonnées des fichiers. Ce flux extrait les données de tableaux HTML par l’export IA du collecteur."
            },
            {
              "q": "Tout tableau devient-il CSV ?",
              "a": "Avec sortie par page ou paquet complet et export de tableaux activé, les tableaux HTML significatifs sont extraits dans les limites prévues. Les tableaux de mise en page sont exclus ; images et captures PDF ne sont pas garantis."
            },
            {
              "q": "Peut-on exporter directement en XLSX ?",
              "a": "Ce flux produit CSV/JSON. Ouvrez ou importez CSV vous-même dans Excel ; aucun export XLSX direct n’est présenté."
            },
            {
              "q": "Puis-je commencer gratuitement ?",
              "a": "Free collecte une page choisie ; Pro en sélectionne plusieurs. Les fichiers sont préparés localement et vous les transmettez à Excel ou à une IA externe."
            }
          ],
          "guide": {
            "title": "Choisir l’usage du tableau",
            "modes": [
              [
                "Travailler dans Excel",
                "Importez CSV, vérifiez les types et triez ou filtrez les lignes. Gardez les identifiants en texte si nécessaire."
              ],
              [
                "Interroger une IA externe",
                "Choisissez tableau et sources pour demander comparaison ou résumé. Vérifiez la réponse dans l’original."
              ]
            ],
            "examplesTitle": "Questions utiles sur un tableau",
            "examples": [
              [
                "Comparer des conditions",
                "Comparez les lignes avec les seules valeurs fournies. Gardez unités et notes, citez la source et indiquez les valeurs absentes sans les deviner."
              ],
              [
                "Contrôler une liste",
                "Identifiez doublons et champs manquants. Expliquez la règle et gardez les valeurs originales vérifiables."
              ]
            ],
            "formatsTitle": "Fichiers et réglages",
            "headers": [
              "Sortie",
              "Usage"
            ],
            "rows": [
              [
                "CSV / JSON",
                "Activez les tableaux avec sortie par page ou paquet complet et vérifiez les cellules extraites."
              ],
              [
                "Markdown / JSONL / manifest",
                "Les URL et dates de capture de l’export IA aident à vérifier les sources."
              ],
              [
                "HTML",
                "Relisez le contexte et comparez le tableau."
              ]
            ]
          },
          "eyebrow": "Tableaux web en CSV"
        },
        "de": {
          "title": "Webtabellen als CSV für Excel und KI | Grab All Files",
          "h1": "Webtabellen in Excel oder KI nutzen.",
          "desc": "Unterstützte Webtabellen als CSV exportieren, Spalten und Einheiten prüfen und in Excel importieren oder an externe KI übergeben.",
          "lead": "Machen Sie eine Webtabelle zu Daten zum Sortieren, Filtern und Vergleichen. Bereiten Sie Dateien über die KI-Ausgabe des Collectors vor und wählen Sie Excel oder externe KI. Prüfen Sie die ausgewählten Seiten und Materialien.",
          "best": [
            "Öffentliche Gebühren oder Kriterien mit Einheiten und Fußnoten vergleichen.",
            "Veröffentlichte Listen in Excel filtern und Einträge prüfen."
          ],
          "steps": [
            "Öffnen Sie die erlaubte Quelle und wählen Sie „Seiten als HTML bündeln“ in der Erweiterung. Wählen Sie die Seite mit der Tabelle.",
            "Aktivieren Sie vor der Sammlung „KI-Analysedaten (Markdown mit Quellen)“, wählen Sie „Markdown je Seite“ oder „Komplettpaket“ und „Tabellen zusätzlich als CSV/JSON exportieren“.",
            "Sammeln und speichern Sie das KI-ZIP. Prüfen Sie CSV/JSON an Originalspalten, Zellen, Einheiten und Hinweisen. “KI-Analyse-ZIP speichern”",
            "Importieren Sie CSV in Excel oder übergeben Sie passende Dateien selbst an externe KI. Prüfen Sie Datumswerte, Kennungen und Ergebnisse."
          ],
          "faq": [
            {
              "q": "Ist das die CSV-Dateiliste?",
              "a": "Nein. Diese listet Datei-URLs und Metadaten auf. Hier werden HTML-Tabellendaten über die KI-Ausgabe des Collectors extrahiert."
            },
            {
              "q": "Wird jede Tabelle zu CSV?",
              "a": "Bei seitenweiser Ausgabe oder vollständigem Paket und aktivem Tabellenexport werden inhaltliche HTML-Tabellen innerhalb der Grenzen extrahiert. Layouttabellen sind ausgeschlossen; Bilder oder PDF-Abbildungen sind nicht garantiert."
            },
            {
              "q": "Gibt es direkten XLSX-Export?",
              "a": "Dieser Ablauf erzeugt CSV/JSON. Öffnen oder importieren Sie CSV selbst in Excel; direkter XLSX-Export wird nicht beschrieben."
            },
            {
              "q": "Kann ich kostenlos beginnen?",
              "a": "Free sammelt eine gewählte Seite, Pro mehrere. Die Vorbereitung ist lokal; Dateien übergeben Sie selbst an Excel oder externe KI."
            }
          ],
          "guide": {
            "title": "Die Tabelle passend verwenden",
            "modes": [
              [
                "In Excel arbeiten",
                "CSV importieren, Datentypen prüfen und Zeilen filtern oder sortieren. Kennungen bei Bedarf als Text erhalten."
              ],
              [
                "Externe KI fragen",
                "Tabelle und Quellen auswählen und Vergleich oder Zusammenfassung anfragen. Die Antwort am Original prüfen."
              ]
            ],
            "examplesTitle": "Nützliche Fragen zu Tabellen",
            "examples": [
              [
                "Bedingungen vergleichen",
                "Vergleiche Zeilen nur mit gelieferten Werten. Behalte Einheiten und Fußnoten, nenne die Quelle und markiere fehlende Werte statt zu raten."
              ],
              [
                "Liste prüfen",
                "Finde doppelte Einträge und fehlende Felder. Erkläre die Regel und erhalte Originalwerte zur Prüfung."
              ]
            ],
            "formatsTitle": "Dateien und Einstellungen",
            "headers": [
              "Ausgabe",
              "Verwendung"
            ],
            "rows": [
              [
                "CSV / JSON",
                "Tabellenexport bei seitenweiser Ausgabe oder vollständigem Paket aktivieren und Zellen prüfen."
              ],
              [
                "Markdown / JSONL / manifest",
                "Quell-URLs und Erfassungsdaten der KI-Ausgabe helfen beim Quellencheck."
              ],
              [
                "HTML",
                "Kontext nachlesen und die Tabelle vergleichen."
              ]
            ]
          },
          "eyebrow": "Webtabellen als CSV"
        },
        "it": {
          "title": "Tabelle web in CSV per Excel e IA | Grab All Files",
          "h1": "Usa le tabelle web in Excel o IA.",
          "desc": "Esporta tabelle web supportate in CSV, verifica colonne e unità e importa in Excel o fornisci file scelti a un’IA esterna.",
          "lead": "Trasforma una tabella utile in dati da ordinare, filtrare e confrontare. Prepara i file tramite l’output IA del raccoglitore e scegli Excel o un’IA esterna. Controlla pagine e materiali utilizzati.",
          "best": [
            "Confrontare tariffe o criteri pubblicati con unità e note.",
            "Filtrare liste pubblicate e controllare voci in Excel."
          ],
          "steps": [
            "Apri la fonte consentita e scegli «Unisci pagine in HTML» nell’estensione. Scegli la pagina con la tabella.",
            "Prima della raccolta attiva «Dati per analisi con IA (Markdown con fonti)», scegli «Markdown per pagina» o «Pacchetto completo» e «Esporta anche le tabelle come CSV/JSON».",
            "Raccogli e salva lo ZIP IA. Confronta CSV/JSON con colonne, celle, unità e note originali. “Salva ZIP di analisi IA”",
            "Importa CSV in Excel o consegna manualmente file accettati all’IA esterna. Verifica date, identificatori e risultati."
          ],
          "faq": [
            {
              "q": "È il CSV della lista dei file?",
              "a": "No. Quel CSV elenca URL e metadati dei file. Questo flusso estrae tabelle HTML tramite l’output IA del raccoglitore."
            },
            {
              "q": "Ogni tabella diventa CSV?",
              "a": "Con output per pagina o pacchetto completo e tabelle attivate si estraggono tabelle HTML significative entro i limiti previsti. Sono escluse tabelle di impaginazione; immagini o tabelle in PDF non sono garantite."
            },
            {
              "q": "Si esporta XLSX direttamente?",
              "a": "Questo flusso crea CSV/JSON. Apri o importa CSV in Excel tu stesso; non si presenta un export XLSX diretto."
            },
            {
              "q": "Posso iniziare gratis?",
              "a": "Free raccoglie una pagina scelta; Pro ne seleziona più. I file si preparano localmente e li fornisci tu a Excel o IA esterna."
            }
          ],
          "guide": {
            "title": "Scegli come usare la tabella",
            "modes": [
              [
                "Lavorare in Excel",
                "Importa CSV, verifica i tipi e filtra o ordina righe. Mantieni gli identificatori come testo se serve."
              ],
              [
                "Chiedere a un’IA esterna",
                "Scegli tabella e fonti per un confronto o riassunto. Controlla la risposta con l’originale."
              ]
            ],
            "examplesTitle": "Domande utili su una tabella",
            "examples": [
              [
                "Confrontare condizioni",
                "Confronta righe solo con i valori forniti. Mantieni unità e note, cita la fonte e segnala valori assenti senza indovinarli."
              ],
              [
                "Controllare una lista",
                "Identifica duplicati e campi vuoti. Spiega la regola e conserva i valori originali verificabili."
              ]
            ],
            "formatsTitle": "File e impostazioni",
            "headers": [
              "Output",
              "Uso"
            ],
            "rows": [
              [
                "CSV / JSON",
                "Attiva tabelle con output per pagina o pacchetto completo e controlla le celle estratte."
              ],
              [
                "Markdown / JSONL / manifest",
                "URL fonte e date di acquisizione nell’output IA aiutano a verificare le fonti."
              ],
              [
                "HTML",
                "Rileggi il contesto e confronta la tabella."
              ]
            ]
          },
          "eyebrow": "Tabelle web in CSV"
        },
        "ko": {
          "title": "웹 표를 CSV로 저장해 Excel·AI로 분석 | Grab All Files",
          "h1": "웹 표를 Excel이나 AI에서 사용하세요.",
          "desc": "지원되는 웹 표를 CSV로 내보내고 열과 단위를 확인한 후 Excel에 가져오거나 외부 AI에 선택한 파일을 전달하는 방법입니다.",
          "lead": "필요한 웹 표를 정렬·필터·비교할 데이터로 준비하세요. 페이지 수집기의 AI 출력으로 표 파일을 만들고 Excel 또는 외부 AI에서 활용할 수 있습니다. 사용할 페이지와 자료는 직접 확인합니다.",
          "best": [
            "공개된 요금·조건 표를 단위와 주석을 유지해 비교합니다.",
            "공개 목록을 Excel에서 필터링하고 항목을 확인합니다."
          ],
          "steps": [
            "허용된 시작 페이지를 열고 확장 프로그램의 “페이지를 HTML로 합치기”를 선택합니다.표가 있는 페이지를 선택합니다.",
            "수집 전에 “AI 분석용 데이터(출처 포함 Markdown)”를 켜고 “페이지별 Markdown” 또는 “전체 패키지”, “표도 CSV/JSON으로 내보내기”를 선택합니다.",
            "수집 후 AI ZIP을 저장합니다. CSV·JSON 표의 열·셀·단위·주석을 원본과 대조합니다. “AI 분석용 ZIP 저장”",
            "CSV를 Excel로 가져오거나 지원 자료를 외부 AI에 직접 전달합니다. 날짜·식별번호와 분석 결과를 확인합니다."
          ],
          "faq": [
            {
              "q": "파일 목록 CSV와 같은 기능인가요?",
              "a": "아니요. 파일 목록 CSV는 파일 URL과 정보를 나열합니다. 이 절차는 수집기의 AI 출력에서 HTML 표 데이터를 추출합니다."
            },
            {
              "q": "모든 표가 CSV가 되나요?",
              "a": "페이지별 또는 전체 패키지 출력에서 표 내보내기를 켜면 의미 있는 HTML 표를 지원 한도 안에서 추출합니다. 레이아웃 표는 제외되며 이미지나 PDF 화면 표의 변환은 보장하지 않습니다."
            },
            {
              "q": "XLSX를 바로 출력하나요?",
              "a": "이 절차는 CSV·JSON을 만듭니다. CSV는 직접 Excel로 열거나 가져오며 XLSX 직접 출력으로 안내하지 않습니다."
            },
            {
              "q": "무료로 시작할 수 있나요?",
              "a": "Free는 선택한 1페이지, Pro는 여러 본문을 수집합니다. 파일은 기기에서 준비하고 Excel이나 외부 AI에 직접 전달합니다."
            }
          ],
          "guide": {
            "title": "표를 사용할 목적에 맞게 선택",
            "modes": [
              [
                "Excel에서 집계",
                "CSV를 가져와 데이터 형식을 확인하고 행을 필터링·정렬합니다. 식별번호는 필요하면 텍스트로 유지합니다."
              ],
              [
                "외부 AI로 비교",
                "필요한 표와 출처 자료를 골라 비교나 요약을 요청하고 원본과 답변을 대조합니다."
              ]
            ],
            "examplesTitle": "표에 맞춘 질문 예시",
            "examples": [
              [
                "조건 비교",
                "제공한 값으로만 행을 비교해 주세요. 단위·주석·출처를 유지하고 없는 값은 추측하지 말고 표시해 주세요."
              ],
              [
                "목록 확인",
                "중복 항목과 빈칸을 확인해 주세요. 판단 규칙을 설명하고 원래 값을 검토할 수 있게 남겨 주세요."
              ]
            ],
            "formatsTitle": "출력 파일과 설정",
            "headers": [
              "출력",
              "사용 방법"
            ],
            "rows": [
              [
                "CSV / JSON",
                "페이지별 또는 전체 패키지 출력과 표 설정을 켜고 추출한 셀을 확인합니다."
              ],
              [
                "Markdown / JSONL / manifest",
                "AI 출력의 출처 URL과 수집일로 자료의 출처를 확인합니다."
              ],
              [
                "HTML",
                "주변 설명을 읽고 표를 대조합니다."
              ]
            ]
          },
          "eyebrow": "웹 표를 CSV로 활용"
        },
        "pt_BR": {
          "title": "Tabelas web em CSV para Excel e IA | Grab All Files",
          "h1": "Use tabelas web no Excel ou na IA.",
          "desc": "Exporte tabelas web compatíveis em CSV, confira colunas e unidades e importe no Excel ou entregue arquivos escolhidos a uma IA externa.",
          "lead": "Transforme uma tabela útil em dados para ordenar, filtrar e comparar. Prepare arquivos pela saída IA do coletor e escolha Excel ou IA externa. Confira as páginas e os materiais utilizados.",
          "best": [
            "Comparar tarifas ou critérios publicados mantendo unidades e notas.",
            "Filtrar listas publicadas e conferir entradas no Excel."
          ],
          "steps": [
            "Abra a fonte permitida e escolha “Juntar páginas em HTML” na extensão. Escolha a página com a tabela.",
            "Antes da coleta ative “Dados para análise com IA (Markdown com fontes)”, escolha “Markdown por página” ou “Pacote completo” e “Também exportar tabelas como CSV/JSON”.",
            "Colete e salve o ZIP IA. Compare CSV/JSON com colunas, células, unidades e notas originais. “Salvar ZIP de análise IA”",
            "Importe CSV no Excel ou entregue manualmente arquivos aceitos à IA externa. Confira datas, identificadores e resultados."
          ],
          "faq": [
            {
              "q": "É o CSV da lista de arquivos?",
              "a": "Não. Esse CSV lista URLs e metadados dos arquivos. Este fluxo extrai dados de tabelas HTML pela saída IA do coletor."
            },
            {
              "q": "Toda tabela vira CSV?",
              "a": "Com saída por página ou pacote completo e tabelas ativadas, são extraídas tabelas HTML significativas dentro dos limites. Tabelas de layout são excluídas; imagens ou capturas PDF não são garantidas."
            },
            {
              "q": "Exporta XLSX diretamente?",
              "a": "Este fluxo produz CSV/JSON. Abra ou importe CSV no Excel você mesmo; não se apresenta exportação XLSX direta."
            },
            {
              "q": "Posso começar grátis?",
              "a": "O Free coleta uma página escolhida, o Pro várias. Os arquivos são preparados localmente e você os entrega ao Excel ou IA externa."
            }
          ],
          "guide": {
            "title": "Escolha como usar a tabela",
            "modes": [
              [
                "Trabalhar no Excel",
                "Importe CSV, confira tipos e filtre ou ordene linhas. Mantenha identificadores como texto quando necessário."
              ],
              [
                "Perguntar à IA externa",
                "Escolha tabela e fontes para pedir comparação ou resumo. Confira a resposta com o original."
              ]
            ],
            "examplesTitle": "Perguntas úteis sobre tabelas",
            "examples": [
              [
                "Comparar condições",
                "Compare linhas usando apenas valores fornecidos. Preserve unidades e notas, cite a fonte e indique valores ausentes sem adivinhar."
              ],
              [
                "Conferir uma lista",
                "Identifique duplicatas e campos vazios. Explique a regra e deixe os valores originais verificáveis."
              ]
            ],
            "formatsTitle": "Arquivos e configurações",
            "headers": [
              "Saída",
              "Uso"
            ],
            "rows": [
              [
                "CSV / JSON",
                "Ative tabelas na saída por página ou pacote completo e confira as células extraídas."
              ],
              [
                "Markdown / JSONL / manifest",
                "URLs e datas de captura da saída IA ajudam a conferir as fontes."
              ],
              [
                "HTML",
                "Leia o contexto e confira a tabela."
              ]
            ]
          },
          "eyebrow": "Tabelas web em CSV"
        },
        "zh_CN": {
          "title": "网页表格保存为CSV供Excel与AI分析 | Grab All Files",
          "h1": "将网页表格用于Excel或AI。",
          "desc": "将支持的网页表格导出为CSV，检查列名与单位，再导入Excel或手动交给外部AI进行比较与分析。",
          "lead": "将需要的网页表格整理为可排序、筛选与比较的数据。通过页面收集器的AI输出准备表格文件，选择在Excel或外部AI中使用。请确认使用的页面和资料。",
          "best": [
            "保留单位与注释，比较公开费用或条件表。",
            "在Excel中筛选公开列表并检查条目。"
          ],
          "steps": [
            "打开允许保存的来源，在扩展中选择“将网页合并为 HTML”。选择含表格的页面。",
            "收集前启用“AI分析数据（带出处的Markdown）”，选择“按页Markdown”或“完整包”并启用“同时将表格导出为CSV/JSON”。",
            "收集后保存AI ZIP，将CSV、JSON表格的列名、单元格、单位与注释同原表核对。 “保存AI分析ZIP”",
            "将CSV导入Excel，或手动将支持的文件交给外部AI。检查日期、标识编号与分析结果。"
          ],
          "faq": [
            {
              "q": "这是文件列表CSV吗？",
              "a": "不是。文件列表CSV记录文件URL和信息，此流程通过收集器的AI输出提取HTML表格数据。"
            },
            {
              "q": "任何表格都能变成CSV吗？",
              "a": "选择按页面或完整资料包并启用表格导出后，在支持范围内提取有意义的HTML表格。布局表格被排除，不保证图片或PDF画面中的表格能转为数据。"
            },
            {
              "q": "能直接输出XLSX吗？",
              "a": "此流程生成CSV、JSON。由您在Excel中打开或导入CSV，并非直接导出XLSX。"
            },
            {
              "q": "可以从免费版开始吗？",
              "a": "Free收集所选1页，Pro可选择多个页面正文。文件在设备上准备，由您交给Excel或外部AI。"
            }
          ],
          "guide": {
            "title": "按用途选择表格的使用方式",
            "modes": [
              [
                "在Excel中处理",
                "导入CSV后确认数据类型，再筛选、排序。需要时将标识编号作为文本保留。"
              ],
              [
                "使用外部AI比较",
                "选择相关表格和来源资料，请求比较或摘要，并将回答与原表核对。"
              ]
            ],
            "examplesTitle": "针对表格提出问题",
            "examples": [
              [
                "比较条件",
                "请仅使用提供的值比较各行。保留单位与注释，引用来源，缺失值请明确标出，不要推测。"
              ],
              [
                "检查列表",
                "请查找重复条目与空白字段，解释判断规则，并保留可核对的原始值。"
              ]
            ],
            "formatsTitle": "输出文件与设置",
            "headers": [
              "输出",
              "用途"
            ],
            "rows": [
              [
                "CSV / JSON",
                "选择按页面或完整资料包并启用表格导出，检查提取的单元格。"
              ],
              [
                "Markdown / JSONL / manifest",
                "利用AI输出的来源URL与采集时间核对出处。"
              ],
              [
                "HTML",
                "阅读周围说明，与表格内容核对。"
              ]
            ]
          },
          "eyebrow": "网页表格转CSV"
        },
        "zh_TW": {
          "title": "網頁表格儲存為CSV供Excel與AI分析 | Grab All Files",
          "h1": "將網頁表格用於Excel或AI。",
          "desc": "將支援的網頁表格匯出為CSV，檢查欄名與單位，再匯入Excel或手動交給外部AI進行比較與分析。",
          "lead": "將需要的網頁表格整理為可排序、篩選與比較的資料。透過頁面收集器的AI輸出準備表格檔案，選擇在Excel或外部AI中使用。請確認使用的頁面及資料。",
          "best": [
            "保留單位與註記，比較公開費用或條件表。",
            "在Excel中篩選公開清單並檢查項目。"
          ],
          "steps": [
            "開啟允許儲存的來源，在擴充功能中選擇「將網頁合併為 HTML」。選擇含表格的頁面。",
            "收集前啟用「AI分析資料（附出處的Markdown）」，選擇「逐頁Markdown」或「完整套件」並啟用「同時將表格匯出為CSV/JSON」。",
            "收集後儲存AI ZIP，將CSV、JSON表格的欄名、儲存格、單位與註記和原表核對。 “儲存AI分析ZIP”",
            "將CSV匯入Excel，或手動將支援檔案交給外部AI。檢查日期、識別編號與分析結果。"
          ],
          "faq": [
            {
              "q": "這是檔案清單CSV嗎？",
              "a": "不是。檔案清單CSV記錄檔案URL與資訊，此流程透過收集器的AI輸出擷取HTML表格資料。"
            },
            {
              "q": "任何表格都能變成CSV嗎？",
              "a": "選擇按頁面或完整資料包並啟用表格匯出後，在支援範圍內擷取有意義的HTML表格。排版表格會被排除，不保證圖片或PDF畫面中的表格能轉為資料。"
            },
            {
              "q": "能直接輸出XLSX嗎？",
              "a": "此流程產生CSV、JSON。由您在Excel中開啟或匯入CSV，並非直接匯出XLSX。"
            },
            {
              "q": "可以從免費版開始嗎？",
              "a": "Free收集所選1頁，Pro可選擇多個頁面本文。檔案在裝置上準備，由您交給Excel或外部AI。"
            }
          ],
          "guide": {
            "title": "依用途選擇表格的使用方式",
            "modes": [
              [
                "在Excel中處理",
                "匯入CSV後確認資料類型，再篩選、排序。需要時將識別編號保留為文字。"
              ],
              [
                "使用外部AI比較",
                "選擇相關表格與來源資料，請求比較或摘要，並將回答和原表核對。"
              ]
            ],
            "examplesTitle": "針對表格提出問題",
            "examples": [
              [
                "比較條件",
                "請僅使用提供的值比較各列。保留單位與註記，引用來源，缺少值請明確標出，不要推測。"
              ],
              [
                "檢查清單",
                "請找出重複項目與空白欄位，解釋判斷規則，並保留可核對的原始值。"
              ]
            ],
            "formatsTitle": "輸出檔案與設定",
            "headers": [
              "輸出",
              "用途"
            ],
            "rows": [
              [
                "CSV / JSON",
                "選擇按頁面或完整資料包並啟用表格匯出，檢查擷取的儲存格。"
              ],
              [
                "Markdown / JSONL / manifest",
                "利用AI輸出的來源URL與擷取時間核對出處。"
              ],
              [
                "HTML",
                "閱讀周圍說明，與表格內容核對。"
              ]
            ]
          },
          "eyebrow": "網頁表格轉CSV"
        }
      }
    },
    "save-and-compare-document-revisions": {
      "path": "save-and-compare-document-revisions.html",
      "related": [
        "web-pages-for-reading-and-ai-analysis",
        "save-online-manuals-and-knowledge-pages"
      ],
      "copy": {
        "en": {
          "title": "Save and compare document revisions | Grab All Files",
          "h1": "Keep before and after. Review what changed.",
          "desc": "Save material before and after an update, review the previous-collection change report and compare wording with saved originals or external tools.",
          "lead": "Keep separate copies so you can explain which wording you reviewed. Use the collector’s previous-run change report to find affected pages, then read the before-and-after material or ask an external comparison tool or AI about the actual content.",
          "best": [
            "Check revised procedures, requirements or public guidance against a saved copy.",
            "Retain the stated revision and source so an update can be explained later."
          ],
          "steps": [
            "Open the permitted source and choose “Combine pages into HTML” in the extension. Select the pages and note the source’s stated revision yourself.",
            "Save the collection with a recognisable before label. Later, manually collect the same site and comparable page scope and save a separate after copy.",
            "After the later collection, save the previous-run change report. Check added, updated and removed-or-unavailable entries against collection results. “Save change report vs. previous run”",
            "Read the two originals side by side or manually give supported before/after files to an external comparison tool or AI. Confirm any claimed change in the source wording."
          ],
          "faq": [
            {
              "q": "What does the built-in change report compare?",
              "a": "The report uses this extension’s most recent completed collection before the current one on the same site. It summarises page-URL, title and collected-body changes, not line-by-line or official-revision interpretation. For arbitrary saved PDFs or other before/after files, compare their content in an external tool."
            },
            {
              "q": "Does a removed entry prove the site deleted that page?",
              "a": "No. It may reflect different selection, collection failure or unavailable content. Compare the page scope and results before treating it as a source deletion."
            },
            {
              "q": "Does the extension watch for updates or recover old versions?",
              "a": "You collect again manually. Use previously saved material or versions published by the source; automatic monitoring and recovery of an unseen older version are not described."
            },
            {
              "q": "How do I identify the revision and use Free?",
              "a": "Record the source’s revision yourself in titles or notes. AI output source URLs and capture dates help with tracing. Free selects one page; Pro can collect multiple page bodies."
            }
          ],
          "guide": {
            "title": "Separate change detection from content comparison",
            "modes": [
              [
                "Find pages to review",
                "Use the previous-collection report to narrow down added or changed pages. Keep collection scope comparable."
              ],
              [
                "Compare the wording",
                "Read saved originals or use external tools to compare requirements and exceptions. Verify findings in both versions."
              ]
            ],
            "examplesTitle": "Ask for evidence of a change",
            "examples": [
              [
                "Compare a procedure",
                "Compare only the supplied before and after materials. List changed steps, requirements and exceptions with supporting passages and source URLs. Mark uncertain comparisons rather than inferring a revision."
              ]
            ],
            "formatsTitle": "Keep a clear comparison set",
            "headers": [
              "Material",
              "Role"
            ],
            "rows": [
              [
                "Before / after HTML",
                "Store separately and read collected page content with context."
              ],
              [
                "Previous-run Markdown report",
                "Summarises changes relative to the same site’s previous completed collection."
              ],
              [
                "Source notes / AI export",
                "Record the manual’s stated revision yourself. Use AI source URLs and capture dates for checking."
              ]
            ]
          },
          "eyebrow": "Save & compare revisions"
        },
        "ja": {
          "title": "改訂前後のWeb資料を保存して比較する | Grab All Files",
          "h1": "改訂資料を保存・比較。",
          "desc": "改訂前後の資料を分けて保存し、前回との差分レポートで対象ページを確認。原文や外部AI・比較ツールで、手順・条件・例外の変更を確かめる使い方です。",
          "lead": "確認した時点の資料を残し、どの記載が変わったかを説明しやすく。ページ収集の前回との差分レポートで確認対象を絞り、前後の原文を読むか、外部AIや比較ツールへ資料を渡して内容を見比べます。",
          "best": [
            "手順・要件・公開案内の改訂を、保存済みの資料と照合する。",
            "表記版と出典を控え、あとで変更内容を説明できるようにする。"
          ],
          "steps": [
            "閲覧・保存が許可された起点ページを開き、拡張機能の「ページをHTMLにまとめる」を選びます。対象ページを選び、資料に表記された版は自分のメモへ控えます。",
            "「改訂前」など分かる名前で収集資料を保存。あとで同じサイト・比較できる取得範囲を手動で再収集し、「改訂後」として別に保存します。",
            "後の収集が完了したら、前回との差分レポートを保存します。追加・更新・削除または取得不可の項目を、収集結果と照合します。 “前回との差分レポートを保存”",
            "前後の原文を並べて読むか、対応ファイルを外部AI・比較ツールへ自分で渡します。変更と判断した箇所は、両方の原文で確認します。"
          ],
          "faq": [
            {
              "q": "拡張機能の差分レポートは何を比べますか？",
              "a": "この拡張機能で同じサイトを収集した直近の完了履歴と、ページURL・タイトル・取得本文を使って変化をまとめます。ページ単位の変化一覧で、行単位比較や公式の改訂判断ではありません。任意の手元PDFや別に保存した旧版ファイルの内容比較は、外部ツールへ資料を渡して行います。"
            },
            {
              "q": "削除と出たら元サイトから消えたということですか？",
              "a": "取得範囲の違い、取得失敗、内容の取得不可などの可能性があります。実際のサイト削除と判断する前に、選択範囲と収集結果を照合します。"
            },
            {
              "q": "更新の監視や過去版の復元もしますか？",
              "a": "再収集は利用者が手動で行います。保存済みの資料や元サイトが公開している過去版を使います。自動監視や、取得していない過去版の復元としては案内していません。"
            },
            {
              "q": "資料の版や無料版の扱いは？",
              "a": "元資料に表記された版は、利用者がタイトルやメモへ控えます。AI出力の元URL・取得日は出典の照合に使えます。無料版は選んだ1ページ、Proは複数ページ本文を収集できます。"
            }
          ],
          "guide": {
            "title": "変化の一覧と、内容の比較を使い分ける",
            "modes": [
              [
                "確認するページを絞る",
                "前回との差分レポートで、追加や更新されたページを確認します。比較できる取得範囲にそろえると照合しやすくなります。"
              ],
              [
                "記載内容を見比べる",
                "保存した原文を読むか、外部ツールで手順・条件・例外を比較します。結果は前後の原文で確認します。"
              ]
            ],
            "examplesTitle": "変更の根拠を付けて質問する",
            "examples": [
              [
                "手順の改訂確認",
                "提供した改訂前・改訂後の資料だけを比較してください。変わった手順・要件・例外を、根拠の原文と出典URL付きで整理してください。比較できない点は推測せず明示してください。"
              ]
            ],
            "formatsTitle": "前後を確認できる資料セット",
            "headers": [
              "資料",
              "役割"
            ],
            "rows": [
              [
                "改訂前／改訂後のHTML",
                "別に保存し、取得した本文と周囲の説明を読み返します。"
              ],
              [
                "前回との差分Markdown",
                "同じサイトの直近の完了済み収集からの変化を一覧にします。"
              ],
              [
                "資料メモ／AI出力",
                "表記版は自分で控え、AI出力の元URLと取得日を照合に使います。"
              ]
            ]
          },
          "eyebrow": "改訂前後の資料を比較"
        },
        "es": {
          "title": "Guardar y comparar revisiones de documentos | Grab All Files",
          "h1": "Conserva antes y después. Revisa los cambios.",
          "desc": "Guarda materiales antes y después, revisa el informe de cambios de la recopilación anterior y compara el texto con originales o herramientas externas.",
          "lead": "Conserva copias separadas para explicar qué texto revisaste. El informe de la recopilación anterior ayuda a localizar páginas afectadas; después lee los originales o entrega archivos a una herramienta externa o IA para comparar el contenido.",
          "best": [
            "Comprobar procedimientos o requisitos revisados frente a una copia guardada.",
            "Conservar versión declarada y fuente para explicar una actualización."
          ],
          "steps": [
            "Abre la fuente permitida y elige «Combinar páginas en HTML» en la extensión. Elige páginas y anota la revisión declarada.",
            "Guarda el conjunto como «antes». Más tarde recopila manualmente el mismo sitio con un alcance comparable y guarda «después» por separado.",
            "Tras la nueva recopilación guarda el informe de cambios. Contrasta añadidos, actualizados y eliminados o no disponibles con los resultados. “Guardar informe de cambios vs. ejecución anterior”",
            "Lee los dos originales o entrega manualmente archivos compatibles a una herramienta externa o IA. Confirma cada cambio en los textos."
          ],
          "faq": [
            {
              "q": "¿Qué compara el informe integrado?",
              "a": "Usa la última recopilación completada anterior del mismo sitio realizada por esta extensión. Resume cambios de URL, títulos y textos, sin comparación por líneas ni interpretación oficial. Para PDF guardados u otros archivos anteriores y posteriores, compara el contenido con una herramienta externa."
            },
            {
              "q": "¿Eliminado significa que el sitio borró la página?",
              "a": "No. Puede deberse a otra selección, errores o contenido no disponible. Compara alcance y resultados antes de concluir que se eliminó."
            },
            {
              "q": "¿Vigila actualizaciones o recupera versiones antiguas?",
              "a": "Tú recopilas de nuevo manualmente. Usa copias guardadas o versiones publicadas; no se presenta vigilancia automática ni recuperación de versiones nunca recopiladas."
            },
            {
              "q": "¿Cómo registro la versión y uso Free?",
              "a": "Anota tú mismo la versión en títulos o notas. URL y fechas del export IA ayudan a rastrear. Free elige una página; Pro puede recopilar varias."
            }
          ],
          "guide": {
            "title": "Distingue detección de cambios y comparación",
            "modes": [
              [
                "Localizar páginas",
                "Usa el informe anterior para enfocar páginas añadidas o modificadas y mantener un alcance comparable."
              ],
              [
                "Comparar el texto",
                "Lee originales o usa herramientas externas para requisitos y excepciones. Verifica hallazgos en ambas versiones."
              ]
            ],
            "examplesTitle": "Pide evidencias de los cambios",
            "examples": [
              [
                "Comparar procedimientos",
                "Compara solo el material anterior y posterior proporcionado. Enumera pasos, requisitos y excepciones cambiados con pasajes y URL fuente; marca lo incierto sin inferir una revisión."
              ]
            ],
            "formatsTitle": "Un conjunto claro de comparación",
            "headers": [
              "Material",
              "Función"
            ],
            "rows": [
              [
                "HTML antes / después",
                "Guarda por separado y lee el contenido con contexto."
              ],
              [
                "Informe Markdown anterior",
                "Resume cambios frente a la recopilación completada anterior del mismo sitio."
              ],
              [
                "Notas / salida IA",
                "Anota la versión declarada y usa URL y fechas IA para comprobar fuentes."
              ]
            ]
          },
          "eyebrow": "Guardar y comparar versiones"
        },
        "fr": {
          "title": "Enregistrer et comparer les révisions | Grab All Files",
          "h1": "Garder avant et après. Vérifier les changements.",
          "desc": "Conservez les documents avant et après, consultez le rapport de la collecte précédente et comparez le texte avec les originaux ou des outils externes.",
          "lead": "Gardez des copies séparées pour expliquer le texte consulté. Le rapport de la collecte précédente repère les pages concernées ; lisez ensuite les originaux ou utilisez un outil externe ou une IA pour comparer leur contenu.",
          "best": [
            "Contrôler procédures ou critères révisés face à une copie enregistrée.",
            "Conserver la révision annoncée et la source pour expliquer une mise à jour."
          ],
          "steps": [
            "Ouvrez la source autorisée puis «Regrouper les pages en HTML» dans l’extension. Choisissez les pages et notez la révision affichée.",
            "Enregistrez un ensemble «avant». Plus tard, recollectez manuellement le même site avec un périmètre comparable et gardez «après» séparément.",
            "Après la nouvelle collecte, enregistrez le rapport de changements. Comparez ajouts, mises à jour et suppressions ou indisponibilités aux résultats. “Enregistrer le rapport de modifications vs exécution précédente”",
            "Lisez les originaux ou transmettez vous-même les fichiers acceptés à un outil externe ou IA. Confirmez chaque changement dans les textes."
          ],
          "faq": [
            {
              "q": "Que compare le rapport intégré ?",
              "a": "Il utilise la dernière collecte terminée antérieure du même site réalisée dans cette extension. Il résume URL, titres et textes, sans comparaison ligne par ligne ni interprétation officielle. Comparez les PDF enregistrés ou autres fichiers avant/après dans un outil externe."
            },
            {
              "q": "Une suppression prouve-t-elle le retrait sur le site ?",
              "a": "Non. Elle peut refléter sélection différente, échec ou contenu indisponible. Comparez périmètre et résultats avant de conclure."
            },
            {
              "q": "Surveille-t-il les mises à jour ou récupère-t-il des versions ?",
              "a": "Vous recollectez manuellement. Utilisez les copies conservées ou versions publiées ; aucune surveillance automatique ni récupération d’une version jamais collectée n’est présentée."
            },
            {
              "q": "Comment noter la révision et utiliser Free ?",
              "a": "Notez vous-même la révision dans titre ou notes. URL et dates de l’export IA aident au suivi. Free sélectionne une page ; Pro peut en collecter plusieurs."
            }
          ],
          "guide": {
            "title": "Séparer repérage et comparaison du contenu",
            "modes": [
              [
                "Repérer les pages",
                "Le rapport précédent aide à cibler les pages ajoutées ou modifiées avec un périmètre comparable."
              ],
              [
                "Comparer les textes",
                "Lisez les originaux ou utilisez des outils externes pour critères et exceptions. Vérifiez dans les deux versions."
              ]
            ],
            "examplesTitle": "Demander les preuves d’un changement",
            "examples": [
              [
                "Comparer une procédure",
                "Comparez uniquement les documents avant et après fournis. Listez étapes, critères et exceptions modifiés avec passages et URL sources. Signalez les incertitudes sans déduire une révision."
              ]
            ],
            "formatsTitle": "Un ensemble de comparaison clair",
            "headers": [
              "Document",
              "Rôle"
            ],
            "rows": [
              [
                "HTML avant / après",
                "Conserver séparément et relire le contexte."
              ],
              [
                "Rapport Markdown précédent",
                "Résume les changements depuis la collecte terminée précédente du même site."
              ],
              [
                "Notes / export IA",
                "Notez la révision affichée et utilisez URL et dates IA pour vérifier."
              ]
            ]
          },
          "eyebrow": "Enregistrer et comparer les versions"
        },
        "de": {
          "title": "Dokumentstände speichern und vergleichen | Grab All Files",
          "h1": "Vorher und nachher sichern. Änderungen prüfen.",
          "desc": "Material vor und nach einer Änderung sichern, den Bericht zur vorherigen Sammlung prüfen und Formulierungen mit Originalen oder externen Werkzeugen vergleichen.",
          "lead": "Bewahren Sie getrennte Kopien auf, um geprüfte Formulierungen nachvollziehbar zu machen. Der Bericht zur vorherigen Sammlung zeigt betroffene Seiten; lesen Sie danach die Originale oder vergleichen Sie Inhalte mit externen Werkzeugen oder KI.",
          "best": [
            "Geänderte Abläufe oder Voraussetzungen mit gesicherten Kopien prüfen.",
            "Angegebene Revision und Quelle für spätere Erläuterungen erhalten."
          ],
          "steps": [
            "Öffnen Sie die erlaubte Quelle und wählen Sie „Seiten als HTML bündeln“ in der Erweiterung. Wählen Sie Seiten und notieren Sie die genannte Revision.",
            "Speichern Sie einen erkennbaren Vorher-Stand. Sammeln Sie später dieselbe Site manuell mit vergleichbarem Umfang und speichern Sie einen separaten Nachher-Stand.",
            "Speichern Sie nach der neuen Sammlung den Änderungsbericht. Prüfen Sie hinzugefügte, aktualisierte und entfernte oder nicht verfügbare Einträge an den Ergebnissen. “Änderungsbericht zum vorherigen Lauf speichern”",
            "Lesen Sie beide Originale oder geben Sie passende Dateien selbst an externe Werkzeuge oder KI. Prüfen Sie behauptete Änderungen an den Texten."
          ],
          "faq": [
            {
              "q": "Was vergleicht der eingebaute Bericht?",
              "a": "Er nutzt die zuletzt abgeschlossene vorherige Sammlung derselben Site in dieser Erweiterung. Er fasst URLs, Titel und gesammelte Texte zusammen, ohne zeilenweisen Vergleich oder offizielle Revisionsbewertung. Beliebige gespeicherte PDFs oder andere Vorher-/Nachher-Dateien vergleichen Sie in externen Werkzeugen."
            },
            {
              "q": "Beweist entfernt eine Löschung auf der Site?",
              "a": "Nein. Andere Auswahl, Fehler oder nicht erreichbare Inhalte sind möglich. Prüfen Sie Umfang und Ergebnisse zuerst."
            },
            {
              "q": "Überwacht es Änderungen oder stellt alte Versionen wieder her?",
              "a": "Sie sammeln erneut manuell. Verwenden Sie gesicherte oder veröffentlichte Versionen; automatische Überwachung und Wiederherstellung nie gesammelter Stände werden nicht beschrieben."
            },
            {
              "q": "Wie notiere ich Revisionen und nutze Free?",
              "a": "Notieren Sie die Revision selbst im Titel oder in Notizen. KI-Quell-URLs und Erfassungsdaten helfen beim Nachweis. Free wählt eine Seite, Pro mehrere."
            }
          ],
          "guide": {
            "title": "Änderungsübersicht und Textvergleich trennen",
            "modes": [
              [
                "Seiten eingrenzen",
                "Der Bericht zur vorherigen Sammlung zeigt neue oder geänderte Seiten bei vergleichbarem Umfang."
              ],
              [
                "Formulierungen vergleichen",
                "Originale lesen oder externe Werkzeuge für Voraussetzungen und Ausnahmen nutzen. Beide Stände prüfen."
              ]
            ],
            "examplesTitle": "Änderungen mit Belegen anfragen",
            "examples": [
              [
                "Ablauf vergleichen",
                "Vergleiche nur geliefertes Vorher- und Nachher-Material. Liste geänderte Schritte, Voraussetzungen und Ausnahmen mit Quellenstellen und URLs. Markiere unsichere Vergleiche statt Revisionen zu vermuten."
              ]
            ],
            "formatsTitle": "Ein nachvollziehbarer Vergleichssatz",
            "headers": [
              "Material",
              "Rolle"
            ],
            "rows": [
              [
                "Vorher- / Nachher-HTML",
                "Getrennt sichern und im Kontext lesen."
              ],
              [
                "Vorheriger Markdown-Bericht",
                "Änderungen zur vorherigen abgeschlossenen Sammlung derselben Site zusammenfassen."
              ],
              [
                "Notizen / KI-Ausgabe",
                "Genannte Revision selbst notieren und KI-URLs und Daten prüfen."
              ]
            ]
          },
          "eyebrow": "Dokumentstände vergleichen"
        },
        "it": {
          "title": "Salvare e confrontare revisioni dei documenti | Grab All Files",
          "h1": "Conserva prima e dopo. Verifica i cambiamenti.",
          "desc": "Salva materiali prima e dopo, consulta il rapporto della raccolta precedente e confronta il testo con originali o strumenti esterni.",
          "lead": "Conserva copie separate per spiegare quale testo hai verificato. Il rapporto della raccolta precedente individua le pagine interessate; poi leggi gli originali o usa strumenti esterni o IA per confrontare il contenuto.",
          "best": [
            "Controllare procedure o requisiti aggiornati con una copia salvata.",
            "Conservare revisione dichiarata e fonte per spiegare un aggiornamento."
          ],
          "steps": [
            "Apri la fonte consentita e scegli «Unisci pagine in HTML» nell’estensione. Scegli le pagine e annota la revisione dichiarata.",
            "Salva un insieme «prima». Più tardi raccogli manualmente lo stesso sito con un ambito comparabile e salva «dopo» separatamente.",
            "Dopo la nuova raccolta salva il rapporto di cambiamenti. Confronta aggiunte, aggiornamenti e voci rimosse o non disponibili con i risultati. “Salva rapporto modifiche vs esecuzione precedente”",
            "Leggi i due originali o fornisci manualmente file accettati a strumenti esterni o IA. Conferma i cambiamenti nei testi."
          ],
          "faq": [
            {
              "q": "Cosa confronta il rapporto integrato?",
              "a": "Usa l’ultima raccolta completata precedente dello stesso sito effettuata in questa estensione. Riassume URL, titoli e testi senza confronto riga per riga o interpretazione ufficiale. Per PDF salvati o altri file prima/dopo confronta i contenuti con uno strumento esterno."
            },
            {
              "q": "Rimosso prova che il sito ha eliminato la pagina?",
              "a": "No. Può dipendere da selezione, errori o contenuti non disponibili. Confronta ambito e risultati prima."
            },
            {
              "q": "Monitora aggiornamenti o recupera vecchie versioni?",
              "a": "Raccogli di nuovo manualmente. Usa copie salvate o versioni pubblicate; non si descrivono monitoraggio automatico o recupero di versioni mai raccolte."
            },
            {
              "q": "Come registro revisioni e uso Free?",
              "a": "Annota la revisione in titoli o note. URL e date nell’output IA aiutano la tracciabilità. Free sceglie una pagina; Pro può raccoglierne più."
            }
          ],
          "guide": {
            "title": "Separare rilevamento e confronto del testo",
            "modes": [
              [
                "Individuare pagine",
                "Il rapporto precedente aiuta a scegliere pagine nuove o modificate con ambito comparabile."
              ],
              [
                "Confrontare le parole",
                "Leggi originali o usa strumenti esterni per requisiti ed eccezioni. Verifica entrambe le versioni."
              ]
            ],
            "examplesTitle": "Chiedere prove dei cambiamenti",
            "examples": [
              [
                "Confrontare una procedura",
                "Confronta solo materiali prima e dopo forniti. Elenca passi, requisiti ed eccezioni cambiati con passaggi e URL fonte. Segnala confronti incerti senza dedurre una revisione."
              ]
            ],
            "formatsTitle": "Un insieme chiaro per il confronto",
            "headers": [
              "Materiale",
              "Ruolo"
            ],
            "rows": [
              [
                "HTML prima / dopo",
                "Salva separatamente e rileggi il contesto."
              ],
              [
                "Rapporto Markdown precedente",
                "Riassume cambiamenti rispetto alla raccolta completata precedente dello stesso sito."
              ],
              [
                "Note / output IA",
                "Annota la revisione dichiarata e usa URL e date IA per controllare."
              ]
            ]
          },
          "eyebrow": "Salvare e confrontare versioni"
        },
        "ko": {
          "title": "개정 전후 웹자료를 저장해 비교하기 | Grab All Files",
          "h1": "개정 전후 자료를 쉽게 비교하세요.",
          "desc": "전후 자료를 따로 저장하고 이전 수집과의 변경 보고서로 대상 페이지를 확인합니다. 원문이나 외부 AI·비교 도구로 절차와 조건의 변화를 확인하세요.",
          "lead": "확인한 시점의 자료를 남겨 어떤 문구가 변했는지 설명하기 쉽게 만드세요. 이전 수집 변경 보고서로 대상을 좁히고 전후 원문을 읽거나 외부 비교 도구·AI로 내용을 비교할 수 있습니다.",
          "best": [
            "절차·요건·공개 안내의 개정을 저장 자료와 대조합니다.",
            "표기된 버전과 출처를 남겨 나중에 변경을 설명합니다."
          ],
          "steps": [
            "허용된 시작 페이지를 열고 확장 프로그램의 “페이지를 HTML로 합치기”를 선택합니다.페이지를 선택하고 표기된 버전을 직접 메모합니다.",
            "‘개정 전’처럼 알아볼 이름으로 저장합니다. 나중에 같은 사이트의 비교 가능한 범위를 직접 재수집해 ‘개정 후’를 따로 저장합니다.",
            "다음 수집이 완료되면 이전 수집과의 변경 보고서를 저장하고 추가·갱신·삭제 또는 이용 불가 항목을 결과와 비교합니다. “이전 실행과의 변경 보고서 저장”",
            "원문을 나란히 읽거나 지원 파일을 외부 AI·비교 도구에 직접 전달합니다. 변경 판단은 양쪽 원문에서 확인합니다."
          ],
          "faq": [
            {
              "q": "기본 변경 보고서는 무엇을 비교하나요?",
              "a": "이 확장 프로그램에서 같은 사이트를 수집한 직전 완료 기록과 URL·제목·수집 본문으로 변화를 요약합니다. 줄 단위 비교나 공식 개정 판단은 아닙니다. 임의의 저장 PDF나 다른 전후 파일은 외부 도구에서 내용을 비교합니다."
            },
            {
              "q": "삭제 표시는 원사이트 삭제를 뜻하나요?",
              "a": "선택 범위 차이·수집 실패·접근 불가 때문일 수도 있습니다. 범위와 결과를 확인한 후 판단하세요."
            },
            {
              "q": "업데이트 감시나 과거 버전 복원도 하나요?",
              "a": "재수집은 직접 실행합니다. 이미 저장했거나 사이트가 공개한 과거 자료를 사용하며 자동 감시나 미수집 과거 버전 복원으로 안내하지 않습니다."
            },
            {
              "q": "버전 기록과 무료 이용은 어떻게 하나요?",
              "a": "자료 버전은 제목이나 메모에 직접 적습니다. AI 출력의 출처 URL·수집일은 대조에 쓸 수 있습니다. Free는 1페이지, Pro는 여러 본문을 수집합니다."
            }
          ],
          "guide": {
            "title": "변경 목록과 내용 비교를 나눠 사용",
            "modes": [
              [
                "확인할 페이지 선택",
                "이전 보고서에서 추가·변경 페이지를 확인하고 비교 가능한 범위를 유지합니다."
              ],
              [
                "문구 비교",
                "원문을 읽거나 외부 도구로 조건·예외를 비교하고 전후 원문에서 확인합니다."
              ]
            ],
            "examplesTitle": "변경 근거와 함께 질문하기",
            "examples": [
              [
                "절차 개정 확인",
                "제공한 전후 자료만 비교해 주세요. 달라진 단계·요건·예외를 근거 원문과 출처 URL로 정리하고 불확실한 부분은 추측하지 말고 표시해 주세요."
              ]
            ],
            "formatsTitle": "전후를 확인할 자료 세트",
            "headers": [
              "자료",
              "역할"
            ],
            "rows": [
              [
                "전후 HTML",
                "따로 저장하고 수집 내용과 주변 설명을 읽습니다."
              ],
              [
                "이전 변경 Markdown 보고서",
                "같은 사이트의 이전 완료 수집과의 변화를 요약합니다."
              ],
              [
                "메모 / AI 출력",
                "표기 버전을 직접 기록하고 AI 출처 URL·수집일로 확인합니다."
              ]
            ]
          },
          "eyebrow": "개정 전후 자료 비교"
        },
        "pt_BR": {
          "title": "Salvar e comparar revisões de documentos | Grab All Files",
          "h1": "Guarde antes e depois. Confira as mudanças.",
          "desc": "Salve materiais antes e depois, revise o relatório da coleta anterior e compare a redação com originais ou ferramentas externas.",
          "lead": "Guarde cópias separadas para explicar qual texto você conferiu. O relatório da coleta anterior indica páginas afetadas; depois leia os originais ou use ferramentas externas ou IA para comparar o conteúdo.",
          "best": [
            "Conferir procedimentos ou requisitos revisados com uma cópia salva.",
            "Manter revisão declarada e fonte para explicar atualizações."
          ],
          "steps": [
            "Abra a fonte permitida e escolha “Juntar páginas em HTML” na extensão. Escolha as páginas e anote a revisão declarada.",
            "Salve um conjunto ‘antes’. Depois colete manualmente o mesmo site com escopo comparável e guarde ‘depois’ separadamente.",
            "Após a nova coleta salve o relatório de mudanças. Confira itens adicionados, atualizados e removidos ou indisponíveis com os resultados. “Salvar relatório de mudanças vs. execução anterior”",
            "Leia os dois originais ou entregue arquivos aceitos manualmente a ferramenta externa ou IA. Confirme mudanças nos textos."
          ],
          "faq": [
            {
              "q": "O que o relatório integrado compara?",
              "a": "Usa a coleta concluída anterior mais recente do mesmo site nesta extensão. Resume URLs, títulos e textos, sem comparação linha a linha ou interpretação oficial. Compare PDFs salvos ou outros arquivos antes/depois com ferramentas externas."
            },
            {
              "q": "Removido prova exclusão no site?",
              "a": "Não. Pode refletir seleção diferente, falhas ou conteúdo indisponível. Confira escopo e resultados antes de concluir."
            },
            {
              "q": "Monitora atualizações ou recupera versões antigas?",
              "a": "Você coleta novamente de forma manual. Use cópias salvas ou versões publicadas; não se descrevem monitoramento automático ou recuperação de versões nunca coletadas."
            },
            {
              "q": "Como registro revisão e uso Free?",
              "a": "Anote a revisão em títulos ou notas. URLs e datas do export IA ajudam a rastrear. O Free escolhe uma página; o Pro pode coletar várias."
            }
          ],
          "guide": {
            "title": "Separe identificação e comparação do conteúdo",
            "modes": [
              [
                "Localizar páginas",
                "O relatório anterior ajuda a focar páginas novas ou alteradas com escopo comparável."
              ],
              [
                "Comparar a redação",
                "Leia originais ou use ferramentas externas para requisitos e exceções. Confira nas duas versões."
              ]
            ],
            "examplesTitle": "Peça evidências de uma mudança",
            "examples": [
              [
                "Comparar procedimento",
                "Compare apenas os materiais antes e depois fornecidos. Liste etapas, requisitos e exceções alterados com trechos e URLs fonte. Marque incertezas sem inferir uma revisão."
              ]
            ],
            "formatsTitle": "Um conjunto claro para comparar",
            "headers": [
              "Material",
              "Papel"
            ],
            "rows": [
              [
                "HTML antes / depois",
                "Guarde separado e leia o contexto."
              ],
              [
                "Relatório Markdown anterior",
                "Resume mudanças frente à coleta concluída anterior do mesmo site."
              ],
              [
                "Notas / saída IA",
                "Anote a revisão declarada e use URLs e datas IA para conferir."
              ]
            ]
          },
          "eyebrow": "Salvar e comparar revisões"
        },
        "zh_CN": {
          "title": "保存修订前后的网页资料并比较 | Grab All Files",
          "h1": "保留前后资料，方便核对变化。",
          "desc": "分别保存修订前后资料，用与前次收集比较的报告确定页面，再通过原文或外部AI、比较工具核对步骤、条件与例外的变化。",
          "lead": "保留确认时的资料，便于解释哪些文字发生变化。先用前次收集变化报告找到相关页面，再阅读前后原文，或将资料交给外部比较工具、AI比较内容。",
          "best": [
            "将修订后的步骤、要求或公开说明与保存副本核对。",
            "记录标明的版本和来源，便于以后说明更新。"
          ],
          "steps": [
            "打开允许保存的来源，在扩展中选择“将网页合并为 HTML”。选择页面并自行记录资料标明的版本。",
            "以“修订前”等清晰名称保存。之后手动重新收集同一网站的可比较范围，另存“修订后”。",
            "后次收集完成后保存与前次比较的变化报告，将新增、更新、移除或无法获取的条目同结果核对。 “保存与上次收集的变更报告”",
            "并排阅读原文，或手动将支持的文件交给外部AI、比较工具。判断为变化的内容须在两份原文中确认。"
          ],
          "faq": [
            {
              "q": "内置变化报告比较什么？",
              "a": "它使用本扩展在同一网站本次之前最近完成的收集，通过URL、标题和正文汇总变化，不是逐行比较或官方修订判断。任意已保存PDF或其他前后文件的内容，请交给外部工具比较。"
            },
            {
              "q": "移除表示原网站删除页面吗？",
              "a": "可能是选择范围不同、收集失败或内容无法获取。请先比较范围和结果再作判断。"
            },
            {
              "q": "会监控更新或恢复旧版吗？",
              "a": "由您手动重新收集，使用已保存资料或来源公开的旧版。此处不介绍自动监控或恢复从未收集的旧资料。"
            },
            {
              "q": "如何记录版本及使用Free？",
              "a": "资料版本由您写在标题或备注中。AI输出的来源URL与采集时间有助核对。Free选择1页，Pro可收集多个页面正文。"
            }
          ],
          "guide": {
            "title": "区分变化列表与内容比较",
            "modes": [
              [
                "确定核对页面",
                "用前次报告找到新增或更新的页面，并保持可比较的收集范围。"
              ],
              [
                "比较文字",
                "阅读原文或用外部工具比较要求与例外，在前后两份来源中验证。"
              ]
            ],
            "examplesTitle": "要求提供变化的依据",
            "examples": [
              [
                "核对步骤修订",
                "请仅比较提供的修订前后资料，列出变化的步骤、要求与例外，附原文和来源URL。不确定的比较请明确标出，不要推测修订。"
              ]
            ],
            "formatsTitle": "准备清晰的前后资料集",
            "headers": [
              "资料",
              "作用"
            ],
            "rows": [
              [
                "前后HTML",
                "分别保存并阅读正文及上下文。"
              ],
              [
                "前次变化Markdown报告",
                "汇总同一网站前次已完成收集以来的变化。"
              ],
              [
                "备注 / AI输出",
                "手动记录版本，利用AI来源URL和采集时间核对。"
              ]
            ]
          },
          "eyebrow": "保存并比较修订前后资料"
        },
        "zh_TW": {
          "title": "儲存修訂前後的網頁資料並比較 | Grab All Files",
          "h1": "保留前後資料，方便核對變化。",
          "desc": "分別儲存修訂前後資料，用與前次收集比較的報告確認頁面，再透過原文或外部AI、比較工具核對步驟、條件及例外的變化。",
          "lead": "保留確認時的資料，便於解釋哪些文字發生變化。先用前次收集變化報告找到相關頁面，再閱讀前後原文，或將資料交給外部比較工具、AI比較內容。",
          "best": [
            "將修訂後的步驟、要求或公開說明與儲存副本核對。",
            "記錄標明的版本及來源，便於日後說明更新。"
          ],
          "steps": [
            "開啟允許儲存的來源，在擴充功能中選擇「將網頁合併為 HTML」。選擇頁面並自行記錄資料標明的版本。",
            "以「修訂前」等清楚名稱儲存。之後手動重新收集同一網站的可比較範圍，另存「修訂後」。",
            "後次收集完成後儲存與前次比較的變化報告，將新增、更新、移除或無法取得的項目和結果核對。 “儲存與上次收集的變更報告”",
            "並排閱讀原文，或手動將支援檔案交給外部AI、比較工具。判斷為變化的內容須在兩份原文中確認。"
          ],
          "faq": [
            {
              "q": "內建變化報告比較什麼？",
              "a": "它使用本擴充功能在同一網站本次之前最近完成的收集，透過URL、標題及本文彙整變化，不是逐行比較或官方修訂判斷。任意已儲存PDF或其他前後檔案的內容，請交給外部工具比較。"
            },
            {
              "q": "移除表示原網站刪除頁面嗎？",
              "a": "可能是選擇範圍不同、收集失敗或內容無法取得。請先比較範圍和結果再判斷。"
            },
            {
              "q": "會監控更新或恢復舊版嗎？",
              "a": "由您手動重新收集，使用已儲存資料或來源公開的舊版。此處不介紹自動監控或恢復從未收集的舊資料。"
            },
            {
              "q": "如何記錄版本及使用Free？",
              "a": "資料版本由您寫在標題或備註中。AI輸出的來源URL與擷取時間有助核對。Free選擇1頁，Pro可收集多個頁面本文。"
            }
          ],
          "guide": {
            "title": "區分變化清單與內容比較",
            "modes": [
              [
                "確認核對頁面",
                "用前次報告找到新增或更新的頁面，並保持可比較的收集範圍。"
              ],
              [
                "比較文字",
                "閱讀原文或用外部工具比較要求與例外，在前後兩份來源中驗證。"
              ]
            ],
            "examplesTitle": "要求提供變化的依據",
            "examples": [
              [
                "核對步驟修訂",
                "請僅比較提供的修訂前後資料，列出變化的步驟、要求及例外，附原文和來源URL。不確定的比較請明確標出，不要推測修訂。"
              ]
            ],
            "formatsTitle": "準備清楚的前後資料集",
            "headers": [
              "資料",
              "作用"
            ],
            "rows": [
              [
                "前後HTML",
                "分別儲存並閱讀本文及上下文。"
              ],
              [
                "前次變化Markdown報告",
                "彙整同一網站前次已完成收集以來的變化。"
              ],
              [
                "備註 / AI輸出",
                "手動記錄版本，利用AI來源URL及擷取時間核對。"
              ]
            ]
          },
          "eyebrow": "儲存並比較修訂前後資料"
        }
      }
    },
    "rename-and-organize-bulk-pdf-downloads": {
      "path": "rename-and-organize-bulk-pdf-downloads.html",
      "related": [
        "download-all-pdfs",
        "internal-portal-downloads"
      ],
      "copy": {
        "en": {
          "title": "Name PDF downloads and organise files by type | Grab All Files",
          "h1": "Give PDFs useful names. Keep files organised.",
          "desc": "Save PDFs using retrieved or edited titles, choose file-type or source-site folders and check the downloaded results. Keep original names when more useful.",
          "lead": "A readable filename and a predictable folder make a document set easier to revisit. Review the titles found for your PDFs, choose a naming mode, and organise a mixed file set by format or source site. Check the saved results rather than assuming every title is useful.",
          "best": [
            "Keep PDFs from a manual or public-document list easier to recognise.",
            "Separate a mixed set of PDFs, spreadsheets and other files by format."
          ],
          "steps": [
            "Open a page you are permitted to use and scan for downloadable files. Filter the results to the PDFs you need.",
            "Review each selected title and original filename. Edit a title when appropriate; keep the original name if it identifies the document better.",
            "Choose “Save as”: “Auto (title when usable)”, “Title” or “Original file name”. For “Organize”, choose “By type”, “By domain” or “No folders”.",
            "Download the selected files or create a ZIP. Check filenames, extensions, grouping, duplicates and any failed downloads in the saved result."
          ],
          "faq": [
            {
              "q": "Does it always find the PDF’s real title?",
              "a": "No. Available metadata or page headings may be missing or generic. Review the retrieved title; automatic mode can use the original filename when no useful title is found."
            },
            {
              "q": "Does type grouping understand document subjects?",
              "a": "It groups files by file type or source domain, not by an inferred business subject. A PDF-only set is still the same file format."
            },
            {
              "q": "Can I choose any destination folder in every browser?",
              "a": "Destination depends on browser support and download settings. Chromium can offer a folder picker; Firefox uses its Downloads/GrabAllFiles route. Check the resulting destination."
            },
            {
              "q": "Can I keep using Free for a large set?",
              "a": "The naming and grouping settings are also available in Free. Free file actions use a 10-file per-run cap; select the next batch and repeat. Pro removes that file-count cap. Scan and review the results before saving."
            }
          ],
          "guide": {
            "title": "Names and folders serve different purposes",
            "modes": [
              [
                "Recognise a document",
                "Use a meaningful retrieved or edited title, or deliberately keep the original filename. Check the extension as well."
              ],
              [
                "Find a file set",
                "Group a mixed set by file type or source site. Choose no grouping when a single folder is easier."
              ]
            ],
            "examplesTitle": "Decide what makes a name useful",
            "examples": [
              [
                "Procedure materials",
                "Check that titles distinguish the procedure, required documents and supporting guidance. Add a stated revision to your own title only after confirming it."
              ],
              [
                "Mixed reference set",
                "Keep PDFs and spreadsheets in file-type groups, and verify that the files you expected were saved."
              ]
            ],
            "formatsTitle": "Save-name and grouping choices",
            "headers": [
              "Choice",
              "Use"
            ],
            "rows": [
              [
                "Automatic / title / original name",
                "Choose based on the title quality and the original name. Title mode can retain generic titles, so review them."
              ],
              [
                "File type / domain / no grouping",
                "Organise by format or source site; this is not automatic subject classification."
              ],
              [
                "Download / ZIP",
                "Use an ordinary file set or archive and check the saved structure."
              ]
            ]
          },
          "eyebrow": "Name & organise PDF downloads"
        },
        "ja": {
          "title": "大量PDFを題名で保存・ファイル形式別に整理 | Grab All Files",
          "h1": "PDFを題名で整理。",
          "desc": "取得したタイトルや編集した題名でPDFを保存し、ファイル形式・取得元サイト別に整理する手順。元のファイル名との使い分けと保存結果の確認も紹介します。",
          "lead": "読み返せる名前と整理されたフォルダで、資料セットを探しやすく。PDFのタイトルを確認して保存名を選び、PDFや表計算ファイルが混じった資料は形式・取得元で整理できます。取得した題名が適切か、保存後の結果も確かめます。",
          "best": [
            "マニュアルや公開資料のPDFを、名前から見つけやすくする。",
            "PDF・表計算・その他のファイルを、形式別にまとめる。"
          ],
          "steps": [
            "利用が許可されたページでファイルをスキャンし、必要なPDFに絞って選択します。",
            "選択したタイトルと元のファイル名を確認します。必要ならタイトルを編集し、元の名前の方が分かりやすければ残します。",
            "「保存名」で「自動（タイトル優先）」「タイトル」「元のファイル名」を選びます。「整理」は「種類別」「ドメイン別」「フォルダ分けなし」から選べます。",
            "選択したファイルをダウンロードするかZIP保存します。保存された名前・拡張子・分類・重複・取得失敗を確認します。"
          ],
          "faq": [
            {
              "q": "PDFの本来の題名が必ず分かりますか？",
              "a": "取得できるメタデータやページ見出しがない、汎用的な場合があります。取得したタイトルを確認し、自動モードでは有用なタイトルがなければ元のファイル名を使えます。"
            },
            {
              "q": "種類別は資料の内容を自動分類しますか？",
              "a": "ファイル形式や取得元ドメインによる整理です。業務上の内容を推測して分類するものではありません。PDFだけの資料は同じファイル形式です。"
            },
            {
              "q": "どのブラウザでも任意フォルダを選べますか？",
              "a": "保存先はブラウザの対応やダウンロード設定に従います。Chromiumではフォルダ選択が使える場合があり、FirefoxはDownloads/GrabAllFilesの保存経路です。実際の保存先を確認します。"
            },
            {
              "q": "大量の資料を無料で続けて保存できますか？",
              "a": "保存名・整理の設定は無料版でも使えます。無料のファイル操作は、1回10ファイルの上限に従います。次の対象を選んで繰り返せます。Proはこの件数上限を解除します。保存前には一覧を確認してください。"
            }
          ],
          "guide": {
            "title": "名前とフォルダを使い分ける",
            "modes": [
              [
                "資料を名前で見分ける",
                "取得・編集したタイトルを使うか、元のファイル名を残すかを選びます。拡張子も確認します。"
              ],
              [
                "資料セットを整理する",
                "混在するファイルを形式別・取得元別にまとめます。1つの場所が分かりやすい場合はフォルダ分けなしを選べます。"
              ]
            ],
            "examplesTitle": "資料を見分けられる名前を考える",
            "examples": [
              [
                "手順の資料",
                "手順・必要書類・補足説明を区別できる題名か確認します。表記版を自分で題名へ加える場合は、原文で確認してから付けます。"
              ],
              [
                "混在する資料セット",
                "PDFや表計算を形式別に整理し、必要なファイルが実際に保存されたか照合します。"
              ]
            ],
            "formatsTitle": "保存名・整理・保存形式",
            "headers": [
              "選択",
              "使い方"
            ],
            "rows": [
              [
                "自動／タイトル／元の名前",
                "取得したタイトルと元の名前の分かりやすさで選びます。タイトルモードは汎用的な題名も使うため確認します。"
              ],
              [
                "種類別／ドメイン別／なし",
                "形式や取得元による整理で、内容の自動分類ではありません。"
              ],
              [
                "ダウンロード／ZIP",
                "ファイル一式かアーカイブとして保存し、構成を確認します。"
              ]
            ]
          },
          "eyebrow": "PDFの題名・種類別整理"
        },
        "es": {
          "title": "Nombrar PDF y organizar archivos por tipo | Grab All Files",
          "h1": "Nombres útiles para PDF y archivos ordenados.",
          "desc": "Guarda PDF con títulos obtenidos o editados, organiza por tipo o sitio fuente y comprueba los resultados. Conserva nombres originales cuando sean más útiles.",
          "lead": "Un nombre claro y una carpeta predecible facilitan volver a los documentos. Revisa títulos, elige el modo de nombre y organiza conjuntos mixtos por formato o sitio. Comprueba los archivos guardados.",
          "best": [
            "Reconocer PDF de manuales o listas públicas por su nombre.",
            "Separar PDF, hojas de cálculo y otros archivos por formato."
          ],
          "steps": [
            "Escanea archivos en una página permitida y filtra los PDF necesarios.",
            "Revisa títulos y nombres originales. Edita un título si corresponde o conserva el original cuando sea mejor.",
            "Elige «Guardar como»: «Automático (título si sirve)», «Título» o «Nombre de archivo original». En «Organizar», elige «Por tipo», «Por dominio» o «Sin carpetas».",
            "Descarga la selección o crea ZIP. Comprueba nombres, extensiones, grupos, duplicados y errores."
          ],
          "faq": [
            {
              "q": "¿Siempre encuentra el título real del PDF?",
              "a": "No. Metadatos o encabezados pueden faltar o ser genéricos. Revisa el título; el modo automático puede usar el nombre original si no encuentra uno útil."
            },
            {
              "q": "¿Agrupar por tipo interpreta temas?",
              "a": "Agrupa por formato o dominio fuente, no por tema de negocio inferido. Un conjunto solo PDF sigue siendo un único formato."
            },
            {
              "q": "¿Puedo elegir cualquier carpeta en todo navegador?",
              "a": "Depende del navegador y ajustes. Chromium puede ofrecer selector de carpeta; Firefox usa Downloads/GrabAllFiles. Comprueba el destino real."
            },
            {
              "q": "¿Puedo guardar un conjunto grande gratis?",
              "a": "Los ajustes de nombre y agrupación también están disponibles en Free. Las acciones Free siguen un máximo de 10 archivos por operación. Selecciona otro lote y repite. Pro elimina ese límite; revisa la lista antes de guardar."
            }
          ],
          "guide": {
            "title": "Nombres y carpetas tienen funciones distintas",
            "modes": [
              [
                "Reconocer documentos",
                "Usa un título útil obtenido o editado, o conserva el original. Revisa la extensión."
              ],
              [
                "Encontrar el conjunto",
                "Agrupa por tipo o sitio fuente, o elige sin agrupación si resulta más claro."
              ]
            ],
            "examplesTitle": "Decidir qué nombre ayuda",
            "examples": [
              [
                "Materiales de un procedimiento",
                "Comprueba que los títulos distinguen pasos, documentos y ayudas. Añade tú mismo una revisión solo después de confirmarla."
              ],
              [
                "Conjunto mixto",
                "Agrupa PDF y hojas de cálculo por formato y verifica los archivos esperados."
              ]
            ],
            "formatsTitle": "Opciones de nombre y organización",
            "headers": [
              "Opción",
              "Uso"
            ],
            "rows": [
              [
                "Automático / título / original",
                "Elige según calidad del título. El modo título puede mantener títulos genéricos."
              ],
              [
                "Tipo / dominio / sin grupos",
                "Organiza formatos o sitios, sin clasificación automática por tema."
              ],
              [
                "Descarga / ZIP",
                "Guarda archivos o un archivo ZIP y revisa su estructura."
              ]
            ]
          },
          "eyebrow": "Nombrar y organizar PDF"
        },
        "fr": {
          "title": "Nommer les PDF et classer les fichiers par type | Grab All Files",
          "h1": "Des PDF bien nommés et des fichiers organisés.",
          "desc": "Nommez les PDF avec les titres récupérés ou modifiés, classez par format ou site source et vérifiez les résultats. Gardez le nom original si plus utile.",
          "lead": "Un nom lisible et un rangement prévisible facilitent les consultations. Vérifiez les titres, choisissez le mode de nommage et classez les ensembles mixtes par format ou source. Contrôlez les fichiers enregistrés.",
          "best": [
            "Reconnaître les PDF de manuels ou listes publiques par leur nom.",
            "Séparer PDF, tableurs et autres fichiers par format."
          ],
          "steps": [
            "Analysez les fichiers d’une page autorisée et filtrez les PDF utiles.",
            "Vérifiez titres et noms originaux. Modifiez un titre si nécessaire ou gardez le nom original plus clair.",
            "Choisissez «Enregistrer sous» : «Automatique (titre si utilisable)», «Titre» ou «Nom de fichier d'origine». Pour «Classement», choisissez «Par type», «Par domaine» ou «Sans dossiers».",
            "Téléchargez la sélection ou créez ZIP. Vérifiez noms, extensions, classement, doublons et échecs."
          ],
          "faq": [
            {
              "q": "Le vrai titre du PDF est-il toujours trouvé ?",
              "a": "Non. Métadonnées ou titres de page peuvent manquer ou être génériques. Vérifiez le titre ; le mode automatique peut reprendre le nom original."
            },
            {
              "q": "Le classement par type comprend-il les sujets ?",
              "a": "Il classe par format ou domaine source, pas par sujet métier déduit. Un lot uniquement PDF reste un seul format."
            },
            {
              "q": "Peut-on choisir toute destination sur chaque navigateur ?",
              "a": "Cela dépend du navigateur et des réglages. Chromium peut proposer un dossier ; Firefox utilise Downloads/GrabAllFiles. Vérifiez la destination réelle."
            },
            {
              "q": "Puis-je enregistrer beaucoup de fichiers gratuitement ?",
              "a": "Les réglages de nom et de classement sont aussi disponibles avec Free. Free suit la limite de 10 fichiers par opération. Sélectionnez le lot suivant et recommencez. Pro retire cette limite ; vérifiez la liste avant enregistrement."
            }
          ],
          "guide": {
            "title": "Noms et dossiers ont deux rôles",
            "modes": [
              [
                "Reconnaître le document",
                "Utilisez un titre pertinent récupéré ou modifié, ou gardez le nom original. Vérifiez l’extension."
              ],
              [
                "Retrouver l’ensemble",
                "Classez les fichiers mixtes par type ou source, ou gardez un seul dossier si plus pratique."
              ]
            ],
            "examplesTitle": "Choisir un nom utile",
            "examples": [
              [
                "Documents de procédure",
                "Vérifiez que les noms distinguent étapes, pièces et aide. Ajoutez vous-même une révision seulement après confirmation."
              ],
              [
                "Ensemble mixte",
                "Classez PDF et tableurs par format et contrôlez les fichiers attendus."
              ]
            ],
            "formatsTitle": "Choix de noms et classement",
            "headers": [
              "Choix",
              "Usage"
            ],
            "rows": [
              [
                "Automatique / titre / original",
                "Choisir selon la pertinence du titre. Le mode titre conserve aussi les titres génériques."
              ],
              [
                "Type / domaine / sans classement",
                "Organiser formats ou sources, sans classement thématique automatique."
              ],
              [
                "Téléchargement / ZIP",
                "Enregistrer un ensemble ou une archive et vérifier sa structure."
              ]
            ]
          },
          "eyebrow": "Nommer et classer les PDF"
        },
        "de": {
          "title": "PDFs benennen und nach Dateityp ordnen | Grab All Files",
          "h1": "PDFs verständlich benennen und ordnen.",
          "desc": "PDFs nach erfassten oder bearbeiteten Titeln benennen, nach Format oder Quellsite ordnen und gespeicherte Ergebnisse prüfen. Originalnamen bei Bedarf behalten.",
          "lead": "Lesbare Namen und klare Ordner erleichtern das Nachschlagen. Prüfen Sie Titel, wählen Sie den Namensmodus und ordnen Sie gemischte Dateien nach Format oder Quelle. Kontrollieren Sie gespeicherte Ergebnisse.",
          "best": [
            "PDFs aus Handbüchern oder öffentlichen Listen besser erkennen.",
            "PDFs, Tabellen und andere Dateien nach Format trennen."
          ],
          "steps": [
            "Scannen Sie Dateien einer erlaubten Seite und filtern Sie benötigte PDFs.",
            "Prüfen Sie Titel und Originalnamen. Bearbeiten Sie einen Titel bei Bedarf oder behalten Sie den verständlicheren Originalnamen.",
            "Wählen Sie unter „Speichern als“: „Automatisch (Titel, wenn brauchbar)“, „Titel“ oder „Ursprünglicher Dateiname“. Unter „Ablage“ wählen Sie „Nach Typ“, „Nach Domain“ oder „Keine Ordner“.",
            "Laden Sie die Auswahl herunter oder erstellen Sie ZIP. Prüfen Sie Namen, Erweiterungen, Ordner, Duplikate und Fehler."
          ],
          "faq": [
            {
              "q": "Wird immer der echte PDF-Titel erkannt?",
              "a": "Nein. Metadaten oder Seitenüberschriften können fehlen oder allgemein sein. Prüfen Sie den Titel; Automatik kann den Originalnamen verwenden."
            },
            {
              "q": "Versteht Typgruppierung Dokumentthemen?",
              "a": "Sie ordnet nach Dateiformat oder Quelldomain, nicht nach vermutetem Geschäftsthema. Ein reiner PDF-Satz bleibt ein Format."
            },
            {
              "q": "Ist jeder Zielordner in jedem Browser wählbar?",
              "a": "Das hängt von Browser und Einstellungen ab. Chromium kann eine Ordnerwahl bieten, Firefox nutzt Downloads/GrabAllFiles. Prüfen Sie das tatsächliche Ziel."
            },
            {
              "q": "Kann ich große Sätze kostenlos speichern?",
              "a": "Namens- und Gruppierungsoptionen sind auch in Free verfügbar. Free folgt einer Grenze von 10 Dateien je Vorgang. Nächsten Satz wählen und wiederholen; Pro entfernt diese Dateigrenze. Die Liste vorher prüfen."
            }
          ],
          "guide": {
            "title": "Namen und Ordner erfüllen verschiedene Zwecke",
            "modes": [
              [
                "Dokument erkennen",
                "Sinnvollen erfassten oder bearbeiteten Titel nutzen oder Originalnamen behalten. Erweiterung prüfen."
              ],
              [
                "Dateisatz finden",
                "Gemischte Dateien nach Format oder Quelle gruppieren oder bei Bedarf flach speichern."
              ]
            ],
            "examplesTitle": "Nützliche Namen wählen",
            "examples": [
              [
                "Ablaufunterlagen",
                "Prüfen Sie, ob Titel Schritte, Unterlagen und Hinweise unterscheiden. Eine genannte Revision erst nach eigener Prüfung ergänzen."
              ],
              [
                "Gemischter Satz",
                "PDFs und Tabellen nach Format ordnen und erwartete Dateien prüfen."
              ]
            ],
            "formatsTitle": "Namens- und Gruppierungsoptionen",
            "headers": [
              "Wahl",
              "Verwendung"
            ],
            "rows": [
              [
                "Automatisch / Titel / Original",
                "Nach Titelqualität entscheiden. Titelmodus kann allgemeine Titel erhalten."
              ],
              [
                "Typ / Domain / keine Gruppen",
                "Formate oder Quellen ordnen, keine automatische Themenklassifikation."
              ],
              [
                "Download / ZIP",
                "Dateisatz oder Archiv speichern und Struktur prüfen."
              ]
            ]
          },
          "eyebrow": "PDFs benennen und ordnen"
        },
        "it": {
          "title": "Nominare PDF e organizzare file per tipo | Grab All Files",
          "h1": "Nomi utili per i PDF e file ordinati.",
          "desc": "Salva PDF con titoli trovati o modificati, organizza per formato o sito fonte e controlla i risultati. Mantieni nomi originali quando più chiari.",
          "lead": "Un nome leggibile e una cartella prevedibile aiutano a ritrovare i documenti. Controlla titoli, scegli il modo di nomina e organizza file misti per formato o fonte. Verifica i risultati salvati.",
          "best": [
            "Riconoscere PDF di manuali o liste pubbliche dal nome.",
            "Separare PDF, fogli di calcolo e altri file per formato."
          ],
          "steps": [
            "Scansiona file di una pagina consentita e filtra i PDF necessari.",
            "Controlla titoli e nomi originali. Modifica un titolo se utile o conserva il nome originale più chiaro.",
            "Scegli «Salva come»: «Automatico (titolo se utilizzabile)», «Titolo» o «Nome file originale». Per «Organizza» scegli «Per tipo», «Per dominio» o «Nessuna cartella».",
            "Scarica la selezione o crea ZIP. Controlla nomi, estensioni, gruppi, duplicati ed errori."
          ],
          "faq": [
            {
              "q": "Trova sempre il vero titolo PDF?",
              "a": "No. Metadati o intestazioni possono mancare o essere generici. Controlla il titolo; automatico può usare il nome originale."
            },
            {
              "q": "Il raggruppamento per tipo capisce gli argomenti?",
              "a": "Organizza per formato o dominio fonte, non per argomento dedotto. Un insieme solo PDF resta lo stesso formato."
            },
            {
              "q": "Posso scegliere ogni cartella in ogni browser?",
              "a": "Dipende da browser e impostazioni. Chromium può offrire scelta cartella; Firefox usa Downloads/GrabAllFiles. Controlla il percorso effettivo."
            },
            {
              "q": "Posso salvare grandi insiemi gratis?",
              "a": "Le impostazioni di nome e raggruppamento sono disponibili anche in Free. Free segue il limite di 10 file per operazione. Scegli il lotto successivo e ripeti; Pro rimuove quel limite. Controlla la lista prima di salvare."
            }
          ],
          "guide": {
            "title": "Nomi e cartelle hanno scopi distinti",
            "modes": [
              [
                "Riconoscere un documento",
                "Usa un titolo utile trovato o modificato oppure mantieni l’originale. Verifica l’estensione."
              ],
              [
                "Ritrovare il gruppo",
                "Raggruppa file misti per formato o fonte, o scegli nessun gruppo se più pratico."
              ]
            ],
            "examplesTitle": "Scegliere un nome utile",
            "examples": [
              [
                "Materiali di procedura",
                "Controlla che i titoli distinguano passi, documenti e spiegazioni. Aggiungi una revisione solo dopo averla verificata."
              ],
              [
                "Insieme misto",
                "Ordina PDF e fogli di calcolo per formato e verifica i file attesi."
              ]
            ],
            "formatsTitle": "Opzioni di nomi e organizzazione",
            "headers": [
              "Scelta",
              "Uso"
            ],
            "rows": [
              [
                "Automatico / titolo / originale",
                "Scegli secondo il titolo. Il modo titolo può mantenere titoli generici."
              ],
              [
                "Tipo / dominio / nessun gruppo",
                "Organizza formati o fonti, senza classificazione automatica per argomento."
              ],
              [
                "Download / ZIP",
                "Salva file o archivio e controlla la struttura."
              ]
            ]
          },
          "eyebrow": "Nominare e organizzare PDF"
        },
        "ko": {
          "title": "PDF를 제목으로 저장하고 파일 형식별로 정리 | Grab All Files",
          "h1": "PDF를 알아보기 좋은 이름으로 저장하세요.",
          "desc": "가져오거나 편집한 제목으로 PDF를 저장하고 파일 형식·출처별로 정리합니다. 원래 파일명과의 선택 및 저장 결과 확인 방법을 안내합니다.",
          "lead": "읽기 좋은 이름과 정돈된 폴더로 자료를 찾기 쉽게 만드세요. PDF 제목을 확인해 저장 이름을 선택하고 혼합 파일은 형식이나 출처별로 정리합니다. 저장 결과도 직접 확인합니다.",
          "best": [
            "매뉴얼·공개 목록의 PDF를 이름으로 쉽게 찾습니다.",
            "PDF·스프레드시트·다른 파일을 형식별로 구분합니다."
          ],
          "steps": [
            "허용된 페이지에서 파일을 스캔해 필요한 PDF로 필터링합니다.",
            "선택한 제목과 원래 이름을 확인하고 필요하면 제목을 편집하거나 더 나은 원래 이름을 유지합니다.",
            "“저장 이름”에서 “자동(쓸 수 있으면 제목)”, “제목”, “원래 파일 이름” 중 선택합니다. “정리”는 “유형별”, “도메인별”, “폴더 없음” 중 선택합니다.",
            "다운로드 또는 ZIP으로 저장하고 이름·확장자·분류·중복·실패를 확인합니다."
          ],
          "faq": [
            {
              "q": "PDF의 실제 제목을 항상 찾나요?",
              "a": "아니요. 메타데이터나 페이지 제목이 없거나 일반적인 값일 수 있습니다. 제목을 확인하고 자동 모드에서는 유용한 제목이 없으면 원래 이름을 쓸 수 있습니다."
            },
            {
              "q": "종류별은 내용 주제를 자동 분류하나요?",
              "a": "파일 형식이나 출처 도메인으로 정리하며 업무 주제를 추론하지 않습니다. PDF만 있는 자료는 같은 형식입니다."
            },
            {
              "q": "모든 브라우저에서 임의 폴더를 고르나요?",
              "a": "브라우저·다운로드 설정에 따릅니다. Chromium은 폴더 선택을 제공할 수 있고 Firefox는 Downloads/GrabAllFiles 경로를 씁니다. 실제 저장 위치를 확인하세요."
            },
            {
              "q": "많은 자료를 무료로 계속 저장하나요?",
              "a": "저장 이름과 정리 설정은 Free에서도 사용할 수 있습니다. Free는 실행당 10개 파일 제한을 따릅니다. 다음 묶음을 골라 반복할 수 있고 Pro는 파일 개수 제한을 없앱니다. 저장 전 목록을 확인하세요."
            }
          ],
          "guide": {
            "title": "이름과 폴더의 역할을 나눠 선택",
            "modes": [
              [
                "자료 이름으로 구별",
                "가져오거나 편집한 제목 또는 원래 이름을 선택하고 확장자도 확인합니다."
              ],
              [
                "자료 세트 정리",
                "혼합 파일을 형식·출처별로 모으거나 한 폴더가 더 편하면 분류 없이 저장합니다."
              ]
            ],
            "examplesTitle": "자료를 구별할 이름을 생각하기",
            "examples": [
              [
                "절차 자료",
                "단계·필요 서류·설명을 구별할 제목인지 확인하고 표기 버전은 원문을 확인한 뒤 직접 추가합니다."
              ],
              [
                "혼합 자료 세트",
                "PDF와 스프레드시트를 형식별로 정리하고 필요한 파일의 실제 저장 여부를 확인합니다."
              ]
            ],
            "formatsTitle": "저장 이름과 정리 옵션",
            "headers": [
              "선택",
              "사용 방법"
            ],
            "rows": [
              [
                "자동 / 제목 / 원래 이름",
                "제목 품질로 선택합니다. 제목 모드는 일반적인 제목도 유지할 수 있습니다."
              ],
              [
                "종류 / 도메인 / 없음",
                "형식이나 출처로 정리하며 내용 주제의 자동 분류는 아닙니다."
              ],
              [
                "다운로드 / ZIP",
                "파일 세트나 압축으로 저장하고 구성을 확인합니다."
              ]
            ]
          },
          "eyebrow": "PDF 제목 저장·종류별 정리"
        },
        "pt_BR": {
          "title": "Nomear PDFs e organizar arquivos por tipo | Grab All Files",
          "h1": "Nomes úteis para PDFs e arquivos organizados.",
          "desc": "Salve PDFs com títulos obtidos ou editados, organize por formato ou site fonte e confira resultados. Mantenha nomes originais quando mais úteis.",
          "lead": "Um nome claro e uma pasta previsível facilitam revisitar documentos. Confira títulos, escolha a forma do nome e organize conjuntos mistos por formato ou fonte. Verifique os arquivos salvos.",
          "best": [
            "Reconhecer PDFs de manuais ou listas públicas pelo nome.",
            "Separar PDFs, planilhas e outros arquivos por formato."
          ],
          "steps": [
            "Escaneie arquivos de uma página permitida e filtre os PDFs necessários.",
            "Confira títulos e nomes originais. Edite um título quando útil ou preserve o nome original mais claro.",
            "Escolha “Salvar como”: “Automático (título quando útil)”, “Título” ou “Nome de arquivo original”. Em “Organizar”, escolha “Por tipo”, “Por domínio” ou “Sem pastas”.",
            "Baixe a seleção ou crie ZIP. Confira nomes, extensões, grupos, duplicatas e falhas."
          ],
          "faq": [
            {
              "q": "Sempre encontra o verdadeiro título do PDF?",
              "a": "Não. Metadados ou títulos da página podem faltar ou ser genéricos. Confira o título; automático pode usar o nome original."
            },
            {
              "q": "Agrupar por tipo entende assuntos?",
              "a": "Agrupa por formato ou domínio fonte, não por assunto de negócio inferido. Um conjunto só PDF continua um único formato."
            },
            {
              "q": "Posso escolher qualquer pasta em todo navegador?",
              "a": "Depende do navegador e ajustes. Chromium pode oferecer seleção de pasta; Firefox usa Downloads/GrabAllFiles. Confira o destino real."
            },
            {
              "q": "Posso salvar grandes conjuntos grátis?",
              "a": "Os ajustes de nome e agrupamento também estão disponíveis no Free. Free segue o limite de 10 arquivos por operação. Selecione outro lote e repita. Pro remove esse limite; confira a lista antes de salvar."
            }
          ],
          "guide": {
            "title": "Nomes e pastas têm funções distintas",
            "modes": [
              [
                "Reconhecer documentos",
                "Use título útil obtido ou editado, ou mantenha o original. Confira a extensão."
              ],
              [
                "Encontrar o conjunto",
                "Agrupe arquivos mistos por formato ou fonte, ou escolha sem grupos se mais prático."
              ]
            ],
            "examplesTitle": "Escolher um nome útil",
            "examples": [
              [
                "Materiais de procedimento",
                "Confira se títulos distinguem etapas, documentos e orientação. Acrescente revisão por conta própria após confirmar."
              ],
              [
                "Conjunto misto",
                "Agrupe PDFs e planilhas por formato e confira os arquivos esperados."
              ]
            ],
            "formatsTitle": "Opções de nome e organização",
            "headers": [
              "Opção",
              "Uso"
            ],
            "rows": [
              [
                "Automático / título / original",
                "Escolha conforme qualidade do título. Modo título pode manter títulos genéricos."
              ],
              [
                "Tipo / domínio / sem grupos",
                "Organize formatos ou fontes, sem classificação temática automática."
              ],
              [
                "Download / ZIP",
                "Salve arquivos ou arquivo ZIP e confira a estrutura."
              ]
            ]
          },
          "eyebrow": "Nomear e organizar PDFs"
        },
        "zh_CN": {
          "title": "按题名保存PDF并按文件格式整理 | Grab All Files",
          "h1": "用易读的名称保存PDF，方便查找。",
          "desc": "用获取或编辑的标题保存PDF，按文件格式或来源网站整理，并检查保存结果。根据需要保留原始文件名。",
          "lead": "清晰的文件名和可预期的文件夹能让资料更容易查找。确认PDF标题，选择命名方式，并按格式或来源整理混合文件。请检查保存结果，而不是假定每个标题都适用。",
          "best": [
            "按名称识别手册或公开列表中的PDF。",
            "将PDF、表格文件与其他文件按格式区分。"
          ],
          "steps": [
            "在允许使用的页面扫描文件，筛选并选择所需PDF。",
            "检查标题与原始文件名，需要时编辑标题；原名更清晰时可保留。",
            "在“保存名称”中选择“自动（可用时使用标题）”“标题”或“原始文件名”。在“整理”中选择“按类型”“按域名”或“不分文件夹”。",
            "下载所选文件或保存ZIP，检查名称、扩展名、分类、重复及失败项。"
          ],
          "faq": [
            {
              "q": "总能找到PDF的真实题名吗？",
              "a": "不能保证。元数据或页面标题可能缺失或过于通用。请检查标题，自动模式可在没有有用标题时采用原名。"
            },
            {
              "q": "按类型会自动判断资料主题吗？",
              "a": "这是按文件格式或来源域名整理，并非推断业务主题。全部为PDF的集合仍是同一格式。"
            },
            {
              "q": "所有浏览器都能选择任意文件夹吗？",
              "a": "依浏览器和下载设置而定。Chromium可能提供文件夹选择，Firefox使用Downloads/GrabAllFiles路径。请确认实际保存位置。"
            },
            {
              "q": "大量文件可以继续免费保存吗？",
              "a": "保存名称与整理设置在Free中也可使用。Free遵循每次10个文件的上限，可选择下一批重复操作。Pro解除文件数量上限；保存前请检查列表。"
            }
          ],
          "guide": {
            "title": "区分名称与文件夹的作用",
            "modes": [
              [
                "按名称识别资料",
                "选用获取或编辑的有效标题，或保留原始文件名，同时检查扩展名。"
              ],
              [
                "整理资料集",
                "将混合文件按格式或来源整理，需要时选择不分类存放。"
              ]
            ],
            "examplesTitle": "选择能区分资料的名称",
            "examples": [
              [
                "步骤资料",
                "确认标题能区分步骤、所需文件与补充说明。自行添加版本时先确认原文标记。"
              ],
              [
                "混合资料集",
                "按格式整理PDF与表格，并确认需要的文件实际已保存。"
              ]
            ],
            "formatsTitle": "保存名称与整理选项",
            "headers": [
              "选择",
              "用途"
            ],
            "rows": [
              [
                "自动 / 标题 / 原始名称",
                "按标题质量选择。标题模式也可能保留通用标题。"
              ],
              [
                "类型 / 域名 / 不分类",
                "按格式或来源整理，不自动判断内容主题。"
              ],
              [
                "下载 / ZIP",
                "保存文件集或压缩包，并检查结构。"
              ]
            ]
          },
          "eyebrow": "PDF题名保存与格式整理"
        },
        "zh_TW": {
          "title": "依題名儲存PDF並依檔案格式整理 | Grab All Files",
          "h1": "用易讀的名稱儲存PDF，方便查找。",
          "desc": "用取得或編輯的標題儲存PDF，依檔案格式或來源網站整理並檢查結果。依需要保留原始檔名。",
          "lead": "清楚的檔名和可預期的資料夾讓資料更容易查找。確認PDF標題，選擇命名方式，並依格式或來源整理混合檔案。請檢查儲存結果，不要假定每個標題都適用。",
          "best": [
            "依名稱識別手冊或公開清單中的PDF。",
            "將PDF、試算表與其他檔案依格式區分。"
          ],
          "steps": [
            "在允許使用的頁面掃描檔案，篩選並選擇所需PDF。",
            "檢查標題與原始檔名，需要時編輯標題；原名更清楚時可保留。",
            "在「儲存名稱」中選擇「自動（可用時使用標題）」「標題」或「原始檔名」。在「整理」中選擇「依類型」「依網域」或「不分資料夾」。",
            "下載所選檔案或儲存ZIP，檢查名稱、副檔名、分類、重複及失敗項。"
          ],
          "faq": [
            {
              "q": "總能找到PDF的真實題名嗎？",
              "a": "不能保證。中繼資料或頁面標題可能缺少或過於通用。請檢查標題，自動模式可在沒有有用標題時採用原名。"
            },
            {
              "q": "依類型會自動判斷資料主題嗎？",
              "a": "這是依檔案格式或來源網域整理，並非推測業務主題。全部為PDF的集合仍是同一格式。"
            },
            {
              "q": "所有瀏覽器都能選擇任意資料夾嗎？",
              "a": "依瀏覽器及下載設定而定。Chromium可能提供資料夾選擇，Firefox使用Downloads/GrabAllFiles路徑。請確認實際儲存位置。"
            },
            {
              "q": "大量檔案可以繼續免費儲存嗎？",
              "a": "儲存名稱與整理設定在Free中也可使用。Free遵循每次10個檔案的上限，可選擇下一批重複操作。Pro解除檔案數量上限；儲存前請檢查清單。"
            }
          ],
          "guide": {
            "title": "區分名稱與資料夾的作用",
            "modes": [
              [
                "依名稱識別資料",
                "選用取得或編輯的有效標題，或保留原始檔名，同時檢查副檔名。"
              ],
              [
                "整理資料集",
                "將混合檔案依格式或來源整理，需要時選擇不分類存放。"
              ]
            ],
            "examplesTitle": "選擇能區分資料的名稱",
            "examples": [
              [
                "步驟資料",
                "確認標題能區分步驟、所需文件及補充說明。自行加入版本時先確認原文標記。"
              ],
              [
                "混合資料集",
                "依格式整理PDF與試算表，並確認需要的檔案實際已儲存。"
              ]
            ],
            "formatsTitle": "儲存名稱與整理選項",
            "headers": [
              "選擇",
              "用途"
            ],
            "rows": [
              [
                "自動 / 標題 / 原始名稱",
                "依標題品質選擇。標題模式也可能保留通用標題。"
              ],
              [
                "類型 / 網域 / 不分類",
                "依格式或來源整理，不自動判斷內容主題。"
              ],
              [
                "下載 / ZIP",
                "儲存檔案集或壓縮包，並檢查結構。"
              ]
            ]
          },
          "eyebrow": "PDF題名儲存與格式整理"
        }
      }
    },
    "collect-public-government-documents": {
      "path": "collect-public-government-documents.html",
      "related": [
        "download-all-pdfs",
        "save-online-manuals-and-knowledge-pages",
        "save-web-pages-as-markdown"
      ],
      "copy": {
        "en": {
          "title": "Keep public guidance and attachments together | Grab All Files",
          "desc": "Collect public-scheme guidance, instructions and linked PDF or Word files. Keep a readable reference, a document ZIP and source notes ready for later checking.",
          "eyebrow": "Public guidance & documents",
          "h1": "Keep public guidance and its documents together.",
          "lead": "Put a scheme overview, its detailed guidance and the relevant attachments in one reference folder. Read selected page bodies as HTML and keep original documents beside them, so you can return to the right source without searching again.",
          "best": [
            "Prepare a reference set for one publicly described scheme or service.",
            "Keep a guidance page with its linked PDF and Word forms.",
            "Record sources and dates for research or an internal briefing."
          ],
          "steps": [
            "Open the official guidance page you are allowed to save. In “Combine pages into HTML”, compare candidates with the source menu and choose one relevant topic. Free saves one chosen page; Pro combines multiple selected page bodies.",
            "If you want source-tracked AI files, enable “AI analysis data (Markdown with sources)” before collecting. Choose image and linked-document settings. Save the explanation as HTML; use the file downloader to select obtainable PDF or Word attachments. Check document titles and revisions before downloading.",
            "Package selected original files as ZIP and keep it beside the HTML. Open the saved result and compare needed headings, attachments and any reported failures with the official page.",
            "After collection, save “Save AI analysis ZIP”. Check source_url and captured_at, and keep the stated revision and date checked in your own notes.",
            "Name the folder by topic and date, and group overview, guidance and forms. Before using the material later, revisit the official source for revised documents and dates."
          ],
          "faq": [
            {
              "q": "Which pages belong in a useful set?",
              "a": "Start with one scheme or service: overview, detailed guidance and the forms it links to. Review discovered candidates against the menu and remove unrelated news or topics. Site structure affects which links can be found."
            },
            {
              "q": "Can the PDF or Word text be included in the HTML?",
              "a": "Keep the original document separately. Linked PDF and Word text is not merged into the readable HTML. Successfully extracted text from supported documents can be included in AI output; check missing or failed documents."
            },
            {
              "q": "Does saving a set confirm that it is complete or current?",
              "a": "Compare the saved pages and files with the needed official list. Record a stated revision yourself; capture time is not a document version. Recheck the current source before relying on a deadline or requirement."
            },
            {
              "q": "How do I use a source list in a briefing?",
              "a": "Use source_url and captured_at from the AI output to identify saved material. Add the official document title and stated revision in your notes, and link each briefing point to the supporting source."
            },
            {
              "q": "Can I start with one guidance page?",
              "a": "Yes. Free discovers candidates and saves one chosen page as HTML; Pro combines multiple selected page bodies. Start with the overview and needed attachments, then check the saved results against the source."
            }
          ],
          "guide": {
            "title": "Build a set you can revisit",
            "modes": [
              [
                "Readable guidance",
                "Use HTML for the overview and selected explanation pages. Its contents and search help you find a section."
              ],
              [
                "Original documents",
                "Keep PDF and Word files in a separate ZIP or folder, with their original names where useful."
              ]
            ],
            "examplesTitle": "A generic reference set",
            "examples": [
              [
                "One public scheme",
                "Overview → detailed guidance → linked PDF instructions and Word forms. Choose only the items needed for that topic."
              ],
              [
                "A briefing note",
                "For each point, note the source URL, date checked and any stated revision. Mark material you could not obtain as missing."
              ]
            ],
            "formatsTitle": "Choose the output for the job",
            "headers": [
              "Output",
              "Use"
            ],
            "rows": [
              [
                "HTML",
                "Read selected guidance pages with contents and search."
              ],
              [
                "Original files / ZIP",
                "Keep attachments in their original formats for reference."
              ],
              [
                "Markdown / manifest",
                "Review saved text and its source_url and captured_at."
              ],
              [
                "Page list / file-information CSV",
                "Keep the collected page URL, title, status and failure reason list, and use the file downloader’s file-information CSV to organise attachments."
              ],
              [
                "Your reference note",
                "Record stated revisions and your date checked; revise it when the source changes."
              ]
            ]
          }
        },
        "ja": {
          "title": "自治体・公的機関の案内と添付資料をまとめて保存 | Grab All Files",
          "desc": "公的制度の案内、申請要領、PDF・Wordの添付資料を必要な単位で収集。HTML・ZIP・出典一覧を整理し、後から確認しやすい資料セットにします。",
          "eyebrow": "自治体・公的機関の資料セット",
          "h1": "公的な案内と添付資料を、ひとまとまりに。",
          "lead": "制度の概要、詳しい要領、関係する添付資料を同じフォルダーに。説明ページはHTMLで読み返し、PDF・Wordの原本を横に置けば、探し直さずに出典へ戻れます。",
          "best": [
            "1つの制度や行政サービスに必要な資料を集める。",
            "説明ページと、リンク先のPDF・Word様式を一緒に整理する。",
            "調査や社内説明に使う出典と確認日を残す。"
          ],
          "steps": [
            "保存が許可された公式案内ページを開き、「ページをHTMLにまとめる」で候補を元のメニューと照合します。必要な制度・テーマに絞って選択。無料版は選んだ1ページ、Proは複数ページ本文をまとめられます。",
            "出典付きAI資料も使う場合は、収集前に「AI分析用データ（Markdown・出典付き）」を有効にします。 画像・リンク文書の設定を選び、説明ページをHTMLで保存します。添付PDF・Wordはファイルダウンローダーで取得可能なリンクを選び、名称と記載された版を確認します。",
            "必要な原本ファイルをZIPにまとめ、HTMLと同じフォルダーへ。保存物を開き、必要な見出し・添付資料と失敗した項目を公式ページと照合します。",
            "収集完了後に「AI分析用ZIPを保存」で出典付き資料を保存します。source_url・captured_atを確認し、表記版と確認日は自分のメモに残します。",
            "テーマと日付でフォルダー名を付け、概要・要領・様式を整理します。後日使うときは公式ページを再確認し、文書や日付の更新を確かめます。"
          ],
          "faq": [
            {
              "q": "どのページを集めると使いやすいですか？",
              "a": "1つの制度・サービスについて、概要、詳しい要領、そこから案内される様式を選びます。候補と元のメニューを比較し、無関係なニュースや別制度を外してください。候補の見つかり方はサイトの構成で異なります。"
            },
            {
              "q": "PDFやWordの本文もHTMLにまとまりますか？",
              "a": "原本は別ファイルとして保存します。PDF・Wordの本文は閲覧用HTMLには統合されません。対応文書で抽出に成功した本文はAI向け出力へ含められますが、不足や失敗を確認してください。"
            },
            {
              "q": "保存すれば、必要資料が全部そろい最新だと分かりますか？",
              "a": "必要な公式資料の一覧と保存結果を照合します。文書に記載された版は自分で記録し、取得日時と区別してください。期限や条件を使う前には最新の出典も確認します。"
            },
            {
              "q": "出典一覧を社内説明に使うには？",
              "a": "AI向け出力のsource_urlとcaptured_atで保存した資料を特定できます。自分のメモに公式の文書名と記載された版を補い、説明する項目と根拠の出典を対応させます。"
            },
            {
              "q": "まず1つの案内ページで試せますか？",
              "a": "無料版で候補を探し、選んだ1ページをHTML保存できます。Proは複数ページ本文を結合できます。まず概要ページと必要な添付資料を選び、保存結果を元の資料と照合してください。"
            }
          ],
          "guide": {
            "title": "後から確認しやすい資料セットにする",
            "modes": [
              [
                "読める案内",
                "概要や必要な説明ページはHTMLへ。目次と本文検索で確認したい箇所に戻れます。"
              ],
              [
                "原本の添付資料",
                "PDF・Wordは別のZIPやフォルダーへ。照合に役立つ原本の名前も残します。"
              ]
            ],
            "examplesTitle": "架空のテーマで整理する例",
            "examples": [
              [
                "1つの公開制度",
                "概要 → 詳しい要領 → 添付PDFの説明とWord様式。テーマに必要な項目だけを選びます。"
              ],
              [
                "説明用のメモ",
                "項目ごとに出典URL、確認日、記載された版をメモ。取得できなかった資料は不足として残します。"
              ]
            ],
            "formatsTitle": "目的で出力を選ぶ",
            "headers": [
              "出力",
              "使い方"
            ],
            "rows": [
              [
                "HTML",
                "選んだ案内ページを目次と検索で読み返す。"
              ],
              [
                "原本ファイル／ZIP",
                "添付資料を元の形式でまとめて参照する。"
              ],
              [
                "Markdown／manifest",
                "保存した本文とsource_url・captured_atを確認する。"
              ],
              [
                "ページ一覧／ファイル情報CSV",
                "収集ページのURL・タイトル・状態・失敗理由の一覧を残し、添付資料はファイルダウンローダーのファイル情報CSVで整理します。"
              ],
              [
                "自分の資料メモ",
                "記載された版と確認日を記録し、出典の更新時に見直す。"
              ]
            ]
          }
        },
        "es": {
          "title": "Guarda guías públicas y sus documentos juntos | Grab All Files",
          "desc": "Recopila guías de programas públicos y archivos PDF o Word enlazados. Organiza HTML, ZIP y fuentes para consultarlos más tarde.",
          "eyebrow": "Guías y documentos públicos",
          "h1": "Reúne las guías públicas y sus documentos.",
          "lead": "Pon la descripción de un programa, sus instrucciones y los adjuntos pertinentes en una carpeta. Lee las páginas elegidas en HTML y conserva los documentos originales al lado para volver a la fuente sin buscar de nuevo.",
          "best": [
            "Preparar referencias sobre un programa o servicio público.",
            "Guardar una guía junto a sus PDF y formularios Word.",
            "Anotar fuentes y fechas para una investigación o informe interno."
          ],
          "steps": [
            "Abre la guía oficial que tengas permiso para guardar. En «Combinar páginas en HTML», compara las candidatas con el menú y elige un tema. Free guarda una página elegida; Pro combina el contenido de varias.",
            "Si necesitas archivos IA con fuentes, activa «Datos para análisis con IA (Markdown con fuentes)» antes de recopilar. Elige opciones de imágenes y documentos enlazados. Guarda la explicación en HTML y selecciona los PDF o Word accesibles en el descargador. Comprueba títulos y versiones.",
            "Agrupa los originales elegidos en un ZIP junto al HTML. Abre el resultado y coteja secciones, adjuntos y fallos con la página oficial.",
            "Tras recopilar, usa «Guardar ZIP de análisis IA». Comprueba source_url y captured_at y anota versión declarada y fecha revisada.",
            "Nombra la carpeta por tema y fecha y organiza descripción, instrucciones y formularios. Antes de volver a usarlos, revisa si la fuente oficial cambió documentos o fechas."
          ],
          "faq": [
            {
              "q": "¿Qué páginas conviene reunir?",
              "a": "Elige un programa: descripción, instrucciones detalladas y formularios enlazados. Compara las candidatas con el menú y excluye noticias o temas ajenos. Los enlaces detectables varían según el sitio."
            },
            {
              "q": "¿El texto de PDF o Word se integra en el HTML?",
              "a": "Guarda los originales aparte. Su texto no se combina con el HTML de lectura. El texto extraído correctamente de documentos compatibles puede incluirse en la salida para IA; revisa lo que falta."
            },
            {
              "q": "¿Guardar garantiza un conjunto completo y actualizado?",
              "a": "Compara el resultado con la lista oficial que necesitas. Anota tú la versión publicada: la fecha de captura no es una versión. Revisa la fuente actual antes de usar plazos o requisitos."
            },
            {
              "q": "¿Cómo uso las fuentes en un informe?",
              "a": "Identifica el material guardado con source_url y captured_at de la salida para IA. Añade el título oficial y la versión indicada a tus notas y vincula cada punto con su fuente."
            },
            {
              "q": "¿Puedo empezar con una sola guía?",
              "a": "Sí. Free descubre candidatas y guarda una página elegida en HTML; Pro combina el contenido de varias. Empieza con la descripción y los adjuntos necesarios y verifica el resultado con la fuente."
            }
          ],
          "guide": {
            "title": "Un conjunto fácil de consultar",
            "modes": [
              [
                "Guías legibles",
                "Usa HTML para la descripción y las explicaciones; consulta su índice y búsqueda."
              ],
              [
                "Documentos originales",
                "Conserva PDF y Word en una carpeta o ZIP aparte, con nombres originales útiles."
              ]
            ],
            "examplesTitle": "Ejemplo de referencias genéricas",
            "examples": [
              [
                "Un programa público",
                "Descripción → instrucciones → PDF y formularios Word enlazados. Elige solo lo necesario."
              ],
              [
                "Una nota informativa",
                "Anota la URL, fecha de consulta y versión indicada para cada punto. Señala los documentos no obtenidos."
              ]
            ],
            "formatsTitle": "Elige el formato según la tarea",
            "headers": [
              "Salida",
              "Uso"
            ],
            "rows": [
              [
                "HTML",
                "Leer las guías con índice y búsqueda."
              ],
              [
                "Originales / ZIP",
                "Consultar adjuntos en su formato original."
              ],
              [
                "Markdown / manifest",
                "Revisar texto, source_url y captured_at."
              ],
              [
                "Lista de páginas / CSV de archivos",
                "Conserva la lista de URL, título, estado y motivo de fallo de las páginas recopiladas. Usa el CSV de información del descargador para ordenar los adjuntos."
              ],
              [
                "Tus notas",
                "Registrar versiones y fecha de consulta y revisarlas si cambia la fuente."
              ]
            ]
          }
        },
        "fr": {
          "title": "Réunir les guides publics et leurs documents | Grab All Files",
          "desc": "Collectez les guides de dispositifs publics et leurs PDF ou Word. Organisez HTML, ZIP et sources pour retrouver facilement vos références.",
          "eyebrow": "Guides et documents publics",
          "h1": "Gardez les guides publics avec leurs documents.",
          "lead": "Réunissez la présentation d’un dispositif, les consignes et les pièces utiles dans un dossier. Lisez les pages choisies en HTML et conservez les originaux à côté pour retrouver la bonne source.",
          "best": [
            "Préparer des références sur un dispositif ou service public.",
            "Associer une page explicative à ses PDF et formulaires Word.",
            "Noter les sources et dates pour une recherche ou une présentation interne."
          ],
          "steps": [
            "Ouvrez le guide officiel que vous pouvez enregistrer. Dans « Regrouper les pages en HTML », comparez les pages proposées au menu et choisissez un sujet. Free enregistre une page choisie ; Pro regroupe plusieurs contenus.",
            "Pour des fichiers IA avec sources, activez «Données pour analyse par IA (Markdown avec sources)» avant la collecte. Réglez les images et documents liés. Enregistrez les explications en HTML et sélectionnez les PDF ou Word accessibles dans le téléchargeur. Vérifiez titres et versions.",
            "Regroupez les originaux choisis en ZIP à côté du HTML. Ouvrez les résultats et comparez rubriques, pièces jointes et échecs signalés à la page officielle.",
            "Après collecte, utilisez «Enregistrer le ZIP d’analyse IA». Vérifiez source_url et captured_at et notez révision affichée et date de vérification.",
            "Nommez le dossier par sujet et date, puis classez présentation, consignes et formulaires. Avant de les réutiliser, vérifiez les documents et dates sur la source officielle actuelle."
          ],
          "faq": [
            {
              "q": "Quelles pages réunir ?",
              "a": "Choisissez un dispositif : présentation, consignes détaillées et formulaires liés. Comparez les propositions au menu et écartez les actualités sans rapport. La détection dépend de la structure du site."
            },
            {
              "q": "Le texte PDF ou Word entre-t-il dans le HTML ?",
              "a": "Conservez les originaux séparément. Leur texte n’est pas fusionné avec le HTML de lecture. Le texte extrait avec succès des documents compatibles peut entrer dans la sortie IA ; vérifiez les manques."
            },
            {
              "q": "L’ensemble enregistré est-il complet et à jour ?",
              "a": "Comparez les résultats à la liste officielle nécessaire. Notez vous-même la version publiée : la date de capture n’est pas une version. Revérifiez la source avant d’utiliser un délai ou une condition."
            },
            {
              "q": "Comment citer les sources dans une présentation ?",
              "a": "Identifiez les données avec source_url et captured_at de la sortie IA. Ajoutez le titre officiel et la version indiquée dans vos notes et reliez chaque point à sa source."
            },
            {
              "q": "Puis-je commencer par un seul guide ?",
              "a": "Oui. Free recherche les pages candidates et enregistre une page choisie en HTML ; Pro regroupe plusieurs contenus. Commencez par la présentation et les pièces utiles, puis comparez le résultat à la source."
            }
          ],
          "guide": {
            "title": "Des références faciles à retrouver",
            "modes": [
              [
                "Guides à lire",
                "Utilisez le HTML pour la présentation et les explications, avec sommaire et recherche."
              ],
              [
                "Documents originaux",
                "Gardez les PDF et Word dans un dossier ou ZIP séparé, avec des noms utiles pour les reconnaître."
              ]
            ],
            "examplesTitle": "Un exemple de dossier générique",
            "examples": [
              [
                "Un dispositif public",
                "Présentation → consignes → PDF et formulaires Word liés. Sélectionnez les seules pièces utiles."
              ],
              [
                "Une note de présentation",
                "Pour chaque point, notez URL, date de consultation et version indiquée. Signalez les pièces non obtenues."
              ]
            ],
            "formatsTitle": "Choisir le format selon le besoin",
            "headers": [
              "Sortie",
              "Usage"
            ],
            "rows": [
              [
                "HTML",
                "Relire les guides avec sommaire et recherche."
              ],
              [
                "Originaux / ZIP",
                "Consulter les pièces dans leur format initial."
              ],
              [
                "Markdown / manifest",
                "Vérifier le texte, source_url et captured_at."
              ],
              [
                "Liste des pages / CSV des fichiers",
                "Gardez la liste des URL, titres, états et motifs d’échec des pages collectées. Utilisez le CSV d’information du téléchargeur pour classer les pièces."
              ],
              [
                "Vos notes",
                "Consigner versions et date de consultation, puis réviser si la source évolue."
              ]
            ]
          }
        },
        "de": {
          "title": "Öffentliche Hinweise und Dokumente bündeln | Grab All Files",
          "desc": "Sammeln Sie öffentliche Programminformationen, Anleitungen und verlinkte PDF- oder Word-Dateien. Ordnen Sie HTML, ZIP und Quellen für die spätere Prüfung.",
          "eyebrow": "Öffentliche Hinweise & Dokumente",
          "h1": "Öffentliche Hinweise und Unterlagen beisammen.",
          "lead": "Legen Sie Programmübersicht, genaue Hinweise und zugehörige Anlagen in einem Ordner ab. Lesen Sie ausgewählte Seiten als HTML und bewahren Sie Originaldokumente daneben auf, um die Quelle wiederzufinden.",
          "best": [
            "Unterlagen für ein öffentlich beschriebenes Programm zusammenstellen.",
            "Eine Erklärung zusammen mit PDF und Word-Formularen sichern.",
            "Quellen und Prüfdaten für Recherche oder interne Information festhalten."
          ],
          "steps": [
            "Öffnen Sie die offizielle Seite, die Sie speichern dürfen. Vergleichen Sie in „Seiten als HTML bündeln“ die Vorschläge mit dem Quellmenü und wählen Sie ein Thema. Free speichert eine gewählte Seite; Pro bündelt mehrere Seiteninhalte.",
            "Für KI-Dateien mit Quellen aktivieren Sie „KI-Analysedaten (Markdown mit Quellen)“ vor der Sammlung. Wählen Sie Einstellungen für Bilder und Dokumente. Speichern Sie die Erklärung als HTML und wählen Sie erreichbare PDF- oder Word-Anlagen im Datei-Downloader. Prüfen Sie Titel und Versionsangaben.",
            "Packen Sie ausgewählte Originaldateien als ZIP neben das HTML. Öffnen Sie das Ergebnis und vergleichen Sie benötigte Abschnitte, Anlagen und gemeldete Fehler mit der offiziellen Seite.",
            "Nach der Sammlung speichern Sie mit „KI-Analyse-ZIP speichern“. Prüfen Sie source_url und captured_at und notieren Sie Revision und Prüfdatum selbst.",
            "Benennen Sie den Ordner nach Thema und Datum und ordnen Sie Übersicht, Hinweise und Formulare. Prüfen Sie vor späterer Nutzung aktuelle Dokumente und Datumsangaben an der offiziellen Quelle."
          ],
          "faq": [
            {
              "q": "Welche Seiten gehören zusammen?",
              "a": "Wählen Sie ein Programm oder einen Dienst: Übersicht, genaue Hinweise und verlinkte Formulare. Gleichen Sie Vorschläge mit dem Menü ab und entfernen Sie fremde Themen. Auffindbare Links hängen vom Seitenaufbau ab."
            },
            {
              "q": "Wird PDF- oder Word-Text in das HTML aufgenommen?",
              "a": "Bewahren Sie Originale separat auf. Ihr Text wird nicht in das Lese-HTML eingefügt. Erfolgreich extrahierter Text unterstützter Dokumente kann in die KI-Ausgabe eingehen; prüfen Sie fehlende Inhalte."
            },
            {
              "q": "Ist das gespeicherte Material vollständig und aktuell?",
              "a": "Vergleichen Sie es mit der benötigten offiziellen Liste. Erfassen Sie Versionsangaben selbst: Aufnahmezeit ist keine Dokumentversion. Prüfen Sie die aktuelle Quelle vor Verwendung von Fristen oder Bedingungen."
            },
            {
              "q": "Wie nutze ich die Quellen in einer Information?",
              "a": "Identifizieren Sie Material anhand von source_url und captured_at der KI-Ausgabe. Ergänzen Sie amtlichen Titel und Versionsangabe in Ihren Notizen und ordnen Sie Aussagen ihren Quellen zu."
            },
            {
              "q": "Kann ich mit einer Hinweisseite beginnen?",
              "a": "Ja. Free findet Vorschläge und speichert eine gewählte Seite als HTML; Pro bündelt mehrere Seiteninhalte. Beginnen Sie mit Übersicht und benötigten Anlagen und gleichen Sie das Ergebnis mit der Quelle ab."
            }
          ],
          "guide": {
            "title": "Unterlagen zum späteren Nachschlagen",
            "modes": [
              [
                "Lesbare Hinweise",
                "Nutzen Sie HTML für Übersicht und Erläuterungen, mit Inhaltsverzeichnis und Suche."
              ],
              [
                "Originaldokumente",
                "Legen Sie PDF und Word in einem separaten ZIP oder Ordner ab; behalten Sie hilfreiche Originalnamen."
              ]
            ],
            "examplesTitle": "Ein allgemeines Beispiel",
            "examples": [
              [
                "Ein öffentliches Programm",
                "Übersicht → genaue Hinweise → verlinkte PDF und Word-Formulare. Wählen Sie nur benötigte Teile."
              ],
              [
                "Eine Informationsnotiz",
                "Notieren Sie je Punkt URL, Prüfdatum und angegebene Version. Kennzeichnen Sie nicht erhaltene Unterlagen."
              ]
            ],
            "formatsTitle": "Das passende Ausgabeformat",
            "headers": [
              "Ausgabe",
              "Verwendung"
            ],
            "rows": [
              [
                "HTML",
                "Hinweise mit Inhaltsverzeichnis und Suche lesen."
              ],
              [
                "Originaldateien / ZIP",
                "Anlagen im ursprünglichen Format nachschlagen."
              ],
              [
                "Markdown / manifest",
                "Text, source_url und captured_at prüfen."
              ],
              [
                "Seitenliste / Dateiinformationen als CSV",
                "Bewahren Sie URL, Titel, Status und Fehlergrund der gesammelten Seiten auf. Ordnen Sie Anlagen mit der Datei-Informations-CSV des Downloaders."
              ],
              [
                "Eigene Notiz",
                "Versionsangaben und Prüfdatum festhalten und bei Quellenänderungen aktualisieren."
              ]
            ]
          }
        },
        "it": {
          "title": "Riunisci guide pubbliche e documenti | Grab All Files",
          "desc": "Raccogli guide di programmi pubblici, istruzioni e PDF o Word collegati. Organizza HTML, ZIP e fonti per consultare di nuovo i materiali.",
          "eyebrow": "Guide e documenti pubblici",
          "h1": "Tieni le guide pubbliche insieme ai documenti.",
          "lead": "Metti la presentazione di un programma, le istruzioni e gli allegati pertinenti in una cartella. Leggi le pagine scelte in HTML e conserva gli originali accanto, per ritrovare la fonte senza una nuova ricerca.",
          "best": [
            "Preparare riferimenti su un programma o servizio pubblico.",
            "Conservare una guida con PDF e moduli Word collegati.",
            "Annotare fonti e date per ricerche o comunicazioni interne."
          ],
          "steps": [
            "Apri la guida ufficiale che puoi salvare. In «Unisci pagine in HTML», confronta le candidate con il menu e scegli un argomento. Free salva una pagina scelta; Pro unisce il contenuto di più pagine.",
            "Per file IA con fonti attiva «Dati per analisi con IA (Markdown con fonti)» prima della raccolta. Scegli le impostazioni per immagini e documenti. Salva la spiegazione in HTML e seleziona PDF o Word accessibili nel downloader. Controlla titoli e versioni indicate.",
            "Raggruppa gli originali scelti in uno ZIP accanto all’HTML. Apri il risultato e confronta sezioni, allegati ed errori segnalati con la pagina ufficiale.",
            "Dopo la raccolta usa «Salva ZIP di analisi IA». Controlla source_url e captured_at e annota revisione dichiarata e data verificata.",
            "Nomina la cartella per argomento e data e organizza presentazione, istruzioni e moduli. Prima di riutilizzarli, verifica aggiornamenti di documenti e date sulla fonte ufficiale."
          ],
          "faq": [
            {
              "q": "Quali pagine conviene raccogliere?",
              "a": "Scegli un programma: presentazione, istruzioni dettagliate e moduli collegati. Confronta le candidate con il menu ed elimina notizie e temi estranei. I collegamenti trovati dipendono dalla struttura del sito."
            },
            {
              "q": "Il testo PDF o Word viene unito all’HTML?",
              "a": "Salva gli originali separatamente. Il loro testo non viene integrato nell’HTML di lettura. Il testo estratto correttamente da documenti supportati può entrare nell’output IA; verifica le parti mancanti."
            },
            {
              "q": "Il materiale salvato è completo e aggiornato?",
              "a": "Confronta il risultato con l’elenco ufficiale necessario. Annota tu la versione pubblicata: la data di acquisizione non è una versione. Ricontrolla la fonte attuale prima di usare scadenze o requisiti."
            },
            {
              "q": "Come uso le fonti in una nota informativa?",
              "a": "Identifica i materiali con source_url e captured_at dell’output IA. Aggiungi titolo ufficiale e versione indicata nelle note e associa ogni punto alla sua fonte."
            },
            {
              "q": "Posso iniziare da una sola guida?",
              "a": "Sì. Free trova le candidate e salva una pagina scelta in HTML; Pro unisce più contenuti. Parti dalla presentazione e dagli allegati necessari e confronta il risultato con la fonte."
            }
          ],
          "guide": {
            "title": "Riferimenti facili da ritrovare",
            "modes": [
              [
                "Guide da leggere",
                "Usa HTML per presentazione e spiegazioni, con indice e ricerca."
              ],
              [
                "Documenti originali",
                "Conserva PDF e Word in una cartella o ZIP separato, mantenendo nomi originali utili."
              ]
            ],
            "examplesTitle": "Un esempio generico",
            "examples": [
              [
                "Un programma pubblico",
                "Presentazione → istruzioni → PDF e moduli Word collegati. Scegli solo ciò che serve."
              ],
              [
                "Una nota informativa",
                "Per ogni punto annota URL, data di verifica e versione indicata. Segnala i documenti non ottenuti."
              ]
            ],
            "formatsTitle": "Scegliere il formato per l’attività",
            "headers": [
              "Output",
              "Uso"
            ],
            "rows": [
              [
                "HTML",
                "Rileggere guide con indice e ricerca."
              ],
              [
                "Originali / ZIP",
                "Consultare allegati nel formato originale."
              ],
              [
                "Markdown / manifest",
                "Verificare testo, source_url e captured_at."
              ],
              [
                "Elenco pagine / CSV dei file",
                "Conserva URL, titolo, stato e motivo di errore delle pagine raccolte. Usa il CSV delle informazioni del downloader per ordinare gli allegati."
              ],
              [
                "Le tue note",
                "Registrare versioni e data di verifica; aggiornarle se cambia la fonte."
              ]
            ]
          }
        },
        "ko": {
          "title": "공공기관 안내와 첨부 자료를 함께 저장 | Grab All Files",
          "desc": "공공 제도 안내, 신청 요령과 연결된 PDF·Word를 필요한 단위로 모읍니다. HTML·ZIP·출처 목록을 정리해 다시 확인할 자료 세트를 준비하세요.",
          "eyebrow": "공공기관 자료 세트",
          "h1": "공공 안내와 첨부 자료를 한곳에.",
          "lead": "제도 개요, 자세한 안내와 관련 첨부 자료를 같은 폴더에 둡니다. 선택한 설명 페이지는 HTML로 읽고 원본 PDF·Word를 함께 보관하면 다시 검색하지 않고 출처를 찾을 수 있습니다.",
          "best": [
            "하나의 공공 제도나 서비스에 필요한 참고 자료를 모으기.",
            "설명 페이지와 연결된 PDF·Word 양식을 함께 정리하기.",
            "조사나 내부 설명에 쓸 출처와 확인일 기록하기."
          ],
          "steps": [
            "저장이 허용된 공식 안내 페이지를 엽니다. “페이지를 HTML로 합치기”에서 후보를 원본 메뉴와 비교하고 필요한 주제만 선택합니다. 무료 버전은 선택한 한 페이지, Pro는 여러 페이지 본문을 저장·결합합니다.",
            "출처가 있는 AI 파일도 사용하려면 수집 전에 “AI 분석용 데이터(출처 포함 Markdown)”를 켭니다. 이미지·연결 문서 설정을 선택하고 설명을 HTML로 저장합니다. 첨부 PDF·Word는 파일 다운로더에서 가져올 수 있는 링크를 선택하고 제목과 표기된 버전을 확인합니다.",
            "선택한 원본 파일을 ZIP으로 묶어 HTML 옆에 둡니다. 저장 결과를 열어 필요한 제목·첨부 자료와 실패 항목을 공식 페이지와 비교합니다.",
            "수집 완료 후 “AI 분석용 ZIP 저장”로 저장하고 source_url·captured_at을 확인합니다. 표기 버전과 확인일은 직접 기록합니다.",
            "주제와 날짜로 폴더 이름을 정하고 개요·안내·양식을 구분합니다. 나중에 사용할 때 공식 출처에서 문서와 날짜의 변경 여부를 확인합니다."
          ],
          "faq": [
            {
              "q": "어떤 페이지를 함께 모으면 좋을까요?",
              "a": "하나의 제도나 서비스에서 개요, 자세한 안내, 연결된 양식을 고릅니다. 후보와 원본 메뉴를 비교해 관련 없는 뉴스나 다른 주제를 제외하세요. 링크 탐색은 사이트 구성에 따라 달라집니다."
            },
            {
              "q": "PDF·Word 본문도 HTML에 합쳐지나요?",
              "a": "원본은 별도 파일로 보관합니다. 해당 본문은 읽기용 HTML에 통합되지 않습니다. 지원 문서에서 추출에 성공한 텍스트는 AI 출력에 포함될 수 있으므로 누락과 실패를 확인하세요."
            },
            {
              "q": "저장하면 자료가 모두 있고 최신인지 알 수 있나요?",
              "a": "필요한 공식 목록과 저장 결과를 비교합니다. 문서에 표기된 버전은 직접 기록하며, 취득 시각과 구별하세요. 기한이나 조건을 사용하기 전에 최신 출처를 확인합니다."
            },
            {
              "q": "내부 설명에 출처를 활용하려면요?",
              "a": "AI 출력의 source_url과 captured_at으로 저장한 자료를 확인합니다. 공식 문서명과 표기된 버전을 메모에 덧붙이고 설명 항목을 근거 출처와 연결하세요."
            },
            {
              "q": "안내 페이지 하나로 시작할 수 있나요?",
              "a": "무료 버전은 후보를 탐색하고 선택한 한 페이지를 HTML로 저장합니다. Pro는 여러 페이지 본문을 결합합니다. 개요와 필요한 첨부 자료부터 고르고 저장 결과를 원본과 비교하세요."
            }
          ],
          "guide": {
            "title": "다시 확인하기 쉬운 자료 세트",
            "modes": [
              [
                "읽기용 안내",
                "개요와 설명은 HTML로 저장하고 목차·검색으로 필요한 부분을 찾습니다."
              ],
              [
                "첨부 원본",
                "PDF·Word는 별도 ZIP이나 폴더에 보관하고 대조에 도움이 되는 원본 이름을 남깁니다."
              ]
            ],
            "examplesTitle": "일반적인 정리 예시",
            "examples": [
              [
                "공개 제도 하나",
                "개요 → 자세한 안내 → 연결된 PDF 설명과 Word 양식. 해당 주제에 필요한 항목만 선택합니다."
              ],
              [
                "설명 메모",
                "항목별 출처 URL, 확인일과 표기된 버전을 기록합니다. 가져오지 못한 자료는 누락으로 표시합니다."
              ]
            ],
            "formatsTitle": "목적에 맞게 출력 선택",
            "headers": [
              "출력",
              "사용 방법"
            ],
            "rows": [
              [
                "HTML",
                "목차와 검색으로 안내 페이지를 다시 읽기."
              ],
              [
                "원본 파일 / ZIP",
                "첨부 자료를 원래 형식으로 보관·참조하기."
              ],
              [
                "Markdown / manifest",
                "본문과 source_url·captured_at 확인하기."
              ],
              [
                "페이지 목록 / 파일 정보 CSV",
                "수집 페이지의 URL·제목·상태·실패 이유 목록을 남깁니다. 첨부 자료는 파일 다운로더의 파일 정보 CSV로 정리합니다."
              ],
              [
                "직접 작성한 메모",
                "표기된 버전과 확인일을 기록하고 출처 변경 시 갱신하기."
              ]
            ]
          }
        },
        "pt_BR": {
          "title": "Reúna orientações públicas e seus documentos | Grab All Files",
          "desc": "Colete orientações de programas públicos, instruções e PDF ou Word vinculados. Organize HTML, ZIP e fontes para consultar o material depois.",
          "eyebrow": "Orientações e documentos públicos",
          "h1": "Guarde orientações públicas com seus documentos.",
          "lead": "Coloque a apresentação de um programa, as instruções e os anexos relevantes na mesma pasta. Leia páginas escolhidas em HTML e mantenha os documentos originais ao lado para voltar à fonte sem pesquisar tudo novamente.",
          "best": [
            "Preparar referências sobre um programa ou serviço público.",
            "Guardar uma orientação com PDF e formulários Word vinculados.",
            "Registrar fontes e datas para pesquisa ou apresentação interna."
          ],
          "steps": [
            "Abra a orientação oficial que você pode salvar. Em “Juntar páginas em HTML”, compare as candidatas com o menu e escolha um tema. Free salva uma página escolhida; Pro combina o conteúdo de várias.",
            "Para arquivos IA com fontes, ative “Dados para análise com IA (Markdown com fontes)” antes da coleta. Escolha opções de imagens e documentos vinculados. Salve a explicação em HTML e selecione PDF ou Word acessíveis no downloader. Confira títulos e versões indicadas.",
            "Reúna os originais escolhidos em um ZIP junto do HTML. Abra o resultado e compare seções, anexos e falhas informadas com a página oficial.",
            "Após a coleta use “Salvar ZIP de análise IA”. Confira source_url e captured_at e anote revisão declarada e data verificada.",
            "Nomeie a pasta por tema e data e organize apresentação, instruções e formulários. Antes de reutilizar, confira mudanças nos documentos e datas na fonte oficial."
          ],
          "faq": [
            {
              "q": "Quais páginas vale reunir?",
              "a": "Escolha um programa: apresentação, instruções detalhadas e formulários vinculados. Compare candidatas com o menu e retire notícias e temas sem relação. Os links detectados dependem da estrutura do site."
            },
            {
              "q": "O texto de PDF ou Word entra no HTML?",
              "a": "Guarde os originais separadamente. O texto não se integra ao HTML de leitura. Texto extraído com sucesso de documentos compatíveis pode entrar na saída para IA; confira lacunas e falhas."
            },
            {
              "q": "O conjunto salvo está completo e atualizado?",
              "a": "Compare o resultado com a lista oficial necessária. Registre você a versão publicada: data de captura não é versão de documento. Consulte a fonte atual antes de usar prazos ou requisitos."
            },
            {
              "q": "Como uso as fontes em uma apresentação?",
              "a": "Identifique o material com source_url e captured_at da saída para IA. Acrescente título oficial e versão indicada nas notas e relacione cada ponto à sua fonte."
            },
            {
              "q": "Posso começar com uma única orientação?",
              "a": "Sim. Free encontra candidatas e salva uma página escolhida em HTML; Pro combina vários conteúdos. Comece pela apresentação e pelos anexos necessários e compare o resultado com a fonte."
            }
          ],
          "guide": {
            "title": "Referências fáceis de consultar",
            "modes": [
              [
                "Orientações para leitura",
                "Use HTML para apresentação e explicações, com sumário e busca."
              ],
              [
                "Documentos originais",
                "Guarde PDF e Word em outra pasta ou ZIP, mantendo nomes originais úteis."
              ]
            ],
            "examplesTitle": "Um exemplo genérico",
            "examples": [
              [
                "Um programa público",
                "Apresentação → instruções → PDF e formulários Word vinculados. Escolha apenas o necessário."
              ],
              [
                "Uma nota informativa",
                "Anote URL, data de consulta e versão indicada para cada ponto. Marque documentos não obtidos."
              ]
            ],
            "formatsTitle": "Escolha o formato conforme a tarefa",
            "headers": [
              "Saída",
              "Uso"
            ],
            "rows": [
              [
                "HTML",
                "Ler orientações com sumário e busca."
              ],
              [
                "Originais / ZIP",
                "Consultar anexos no formato original."
              ],
              [
                "Markdown / manifest",
                "Verificar texto, source_url e captured_at."
              ],
              [
                "Lista de páginas / CSV dos arquivos",
                "Guarde URL, título, status e motivo de falha das páginas coletadas. Use o CSV de informações do downloader para organizar anexos."
              ],
              [
                "Suas notas",
                "Registrar versões e data de consulta e revisar se a fonte mudar."
              ]
            ]
          }
        },
        "zh_CN": {
          "title": "集中保存公共机构说明与附件资料 | Grab All Files",
          "desc": "按需要收集公共制度说明、申请指南及PDF、Word附件。整理HTML、ZIP与来源列表，准备便于日后核对的参考资料。",
          "eyebrow": "公共机构资料集",
          "h1": "把公共说明与附件放在一起。",
          "lead": "将制度概览、详细指南及相关附件放在同一个文件夹中。选中的说明页面用HTML阅读，原始PDF、Word放在旁边，日后无需重新搜索就能找到来源。",
          "best": [
            "为一个公共制度或服务准备参考资料。",
            "把说明页面与链接的PDF、Word表格一起整理。",
            "为研究或内部说明记录来源和核对日期。"
          ],
          "steps": [
            "打开允许保存的官方说明页面，在“将网页合并为 HTML”中将候选与原菜单核对，只选择需要的主题。免费版保存所选的一个页面，Pro可合并多个页面正文。",
            "需要带来源的AI文件时，收集前启用“AI分析数据（带出处的Markdown）”。 选择图片和链接文档设置，保存说明HTML。在文件下载器中选择可获取的PDF、Word附件链接，并核对文件名称和标示版本。",
            "将选中的原始文件打包为ZIP，与HTML一起保存。打开保存结果，对照官方页面检查所需标题、附件及报告的失败项目。",
            "收集完成后使用“保存AI分析ZIP”保存资料，核对source_url与captured_at，版本及确认日期自行记录。",
            "按主题与日期命名文件夹，整理概览、指南和表格。日后使用前回到官方来源，检查文档和日期是否更新。"
          ],
          "faq": [
            {
              "q": "哪些页面适合一起收集？",
              "a": "以一个制度或服务为单位，选择概览、详细指南及链接的表格。比较候选和原菜单，排除无关新闻或其他主题。链接的发现情况因网站结构而异。"
            },
            {
              "q": "PDF、Word正文会合并到HTML吗？",
              "a": "原件作为独立文件保存，其正文不会并入阅读用HTML。支持文档中成功提取的文字可加入AI输出，但需检查缺失与失败内容。"
            },
            {
              "q": "保存后能确定资料完整且最新吗？",
              "a": "请将结果与所需官方资料列表核对。自行记录标示版本，获取时间不等于文档版本。使用期限或条件前还需查看最新来源。"
            },
            {
              "q": "如何在内部说明中使用来源列表？",
              "a": "通过AI输出中的source_url和captured_at识别已保存资料。在自己的笔记中补充正式文档名称及标示版本，并把每个说明项目与依据来源对应。"
            },
            {
              "q": "可以先从一个说明页面开始吗？",
              "a": "免费版可查找候选，将所选的一个页面保存为HTML；Pro可合并多个页面正文。先选概览与所需附件，再将保存结果与来源核对。"
            }
          ],
          "guide": {
            "title": "整理成便于回查的资料集",
            "modes": [
              [
                "可阅读的说明",
                "概览和说明页面保存为HTML，通过目录与搜索定位内容。"
              ],
              [
                "原始附件",
                "PDF、Word另存为ZIP或文件夹，并保留有助核对的原文件名。"
              ]
            ],
            "examplesTitle": "通用整理示例",
            "examples": [
              [
                "一个公开制度",
                "概览 → 详细指南 → 链接的PDF说明与Word表格。仅选择该主题需要的项目。"
              ],
              [
                "说明笔记",
                "逐项记录来源URL、核对日期及标示版本；无法取得的资料标为缺失。"
              ]
            ],
            "formatsTitle": "按用途选择输出",
            "headers": [
              "输出",
              "用途"
            ],
            "rows": [
              [
                "HTML",
                "通过目录与搜索重读说明页面。"
              ],
              [
                "原始文件／ZIP",
                "以原格式保存和查阅附件。"
              ],
              [
                "Markdown／manifest",
                "核对正文、source_url和captured_at。"
              ],
              [
                "页面列表／文件信息CSV",
                "保留收集页面的URL、标题、状态与失败原因列表。通过文件下载器的文件信息CSV整理附件。"
              ],
              [
                "自己的资料笔记",
                "记录标示版本及核对日期，在来源更新时调整。"
              ]
            ]
          }
        },
        "zh_TW": {
          "title": "集中儲存公部門說明與附件資料 | Grab All Files",
          "desc": "依需要收集公共制度說明、申請指南及PDF、Word附件。整理HTML、ZIP與來源清單，準備便於日後核對的參考資料。",
          "eyebrow": "公部門資料集",
          "h1": "把公共說明與附件放在一起。",
          "lead": "將制度概覽、詳細指南及相關附件放在同一個資料夾。選取的說明頁面用HTML閱讀，原始PDF、Word放在旁邊，日後無須重新搜尋就能找到來源。",
          "best": [
            "為一個公共制度或服務準備參考資料。",
            "把說明頁面與連結的PDF、Word表格一起整理。",
            "為研究或內部說明記錄來源和核對日期。"
          ],
          "steps": [
            "開啟允許儲存的官方說明頁面，在「將網頁合併為 HTML」中將候選與原選單核對，只選需要的主題。免費版儲存選取的一個頁面，Pro可合併多個頁面本文。",
            "需要附來源的AI檔案時，收集前啟用「AI分析資料（附出處的Markdown）」。 選擇圖片和連結文件設定，儲存說明HTML。在檔案下載器中選取可取得的PDF、Word附件連結，核對檔案名稱與標示版本。",
            "將選取的原始檔案打包為ZIP，與HTML一起儲存。開啟儲存結果，對照官方頁面檢查所需標題、附件及回報的失敗項目。",
            "收集完成後使用「儲存AI分析ZIP」儲存資料，核對source_url與captured_at，版本及確認日期自行記錄。",
            "依主題與日期命名資料夾，整理概覽、指南與表格。日後使用前回到官方來源，檢查文件和日期是否更新。"
          ],
          "faq": [
            {
              "q": "哪些頁面適合一起收集？",
              "a": "以一個制度或服務為單位，選取概覽、詳細指南及連結的表格。比較候選和原選單，排除無關新聞或其他主題。連結的發現情況因網站結構而異。"
            },
            {
              "q": "PDF、Word本文會合併到HTML嗎？",
              "a": "原件作為獨立檔案儲存，其本文不會併入閱讀用HTML。支援文件中成功擷取的文字可加入AI輸出，但需檢查缺漏與失敗內容。"
            },
            {
              "q": "儲存後能確定資料完整且最新嗎？",
              "a": "請將結果與所需官方資料清單核對。自行記錄標示版本，取得時間不等於文件版本。使用期限或條件前仍需查看最新來源。"
            },
            {
              "q": "如何在內部說明使用來源清單？",
              "a": "透過AI輸出的source_url和captured_at識別已儲存資料。在自己的筆記中補充正式文件名稱及標示版本，並把每個說明項目與依據來源對應。"
            },
            {
              "q": "可以先從一個說明頁面開始嗎？",
              "a": "免費版可尋找候選，將選取的一個頁面儲存為HTML；Pro可合併多個頁面本文。先選概覽與所需附件，再將儲存結果與來源核對。"
            }
          ],
          "guide": {
            "title": "整理成便於回查的資料集",
            "modes": [
              [
                "可閱讀的說明",
                "概覽和說明頁面儲存為HTML，透過目錄與搜尋定位內容。"
              ],
              [
                "原始附件",
                "PDF、Word另存為ZIP或資料夾，並保留有助核對的原檔名。"
              ]
            ],
            "examplesTitle": "通用整理範例",
            "examples": [
              [
                "一個公開制度",
                "概覽 → 詳細指南 → 連結的PDF說明與Word表格。僅選該主題需要的項目。"
              ],
              [
                "說明筆記",
                "逐項記錄來源URL、核對日期及標示版本；無法取得的資料標為缺漏。"
              ]
            ],
            "formatsTitle": "依用途選擇輸出",
            "headers": [
              "輸出",
              "用途"
            ],
            "rows": [
              [
                "HTML",
                "透過目錄與搜尋重讀說明頁面。"
              ],
              [
                "原始檔案／ZIP",
                "以原格式儲存和查閱附件。"
              ],
              [
                "Markdown／manifest",
                "核對本文、source_url與captured_at。"
              ],
              [
                "頁面清單／檔案資訊CSV",
                "保留收集頁面的URL、標題、狀態與失敗原因清單。透過檔案下載器的檔案資訊CSV整理附件。"
              ],
              [
                "自己的資料筆記",
                "記錄標示版本及核對日期，在來源更新時調整。"
              ]
            ]
          }
        }
      }
    },
    "save-web-pages-as-markdown": {
      "path": "save-web-pages-as-markdown.html",
      "related": [
        "web-pages-for-reading-and-ai-analysis",
        "save-online-manuals-and-knowledge-pages",
        "collect-public-government-documents"
      ],
      "copy": {
        "en": {
          "title": "Save web sources as reusable Markdown | Grab All Files",
          "desc": "Export collected web text as one Markdown file, per-page notes or a full package. Keep sources for research, writing and manual reuse in notes or external AI.",
          "eyebrow": "Web sources as Markdown",
          "h1": "Turn web sources into notes you can reuse.",
          "lead": "Keep collected headings, text, lists, supported HTML tables and ordinary links in Markdown, with sources and capture dates. Choose one reading file or separate page notes, then reuse the saved material in research, writing or a tool you choose.",
          "best": [
            "Build source-linked research notes from related articles.",
            "Keep reference text beside your writing or manual notes.",
            "Prepare selected Markdown files for questions in an external AI tool."
          ],
          "steps": [
            "Open a page you are allowed to save and start “Combine pages into HTML”. Review related candidates and choose needed pages. Free saves one chosen page as HTML; Pro combines multiple selected page bodies.",
            "Before collecting, enable “AI analysis data (Markdown with sources)”. Choose “One Markdown file”, “Per-page Markdown” or “Full package” to suit a reading file, separate notes or structured reuse.",
            "Collect and review the result. Compare headings, links and important text with the source and check any failures. Save the HTML too if you want its table of contents and search.",
            "Use “Save AI analysis ZIP”, extract the ZIP and open the Markdown files in a compatible editor. Keep source_url and captured_at with your notes; add your own topic labels and date checked.",
            "Copy or import supported files manually into your notes workflow. For external AI, choose suitable files and use “Copy AI request text” with your question. Check conclusions against the supplied text and current source."
          ],
          "faq": [
            {
              "q": "Does it sync with Obsidian or Notion?",
              "a": "Export files first, then manually copy or import them using the destination’s supported method. Check headings, tables and links after import. The extension does not automatically sync a vault or workspace, and import support varies."
            },
            {
              "q": "Are images and interactive content preserved?",
              "a": "Markdown can reference images using their original URLs; image files are not always included in the package. Extraction is not a complete site clone. Review important images and content that depends on interaction at the original page."
            },
            {
              "q": "Does the 25 MB setting limit the entire package?",
              "a": "The default 25 MB is a splitting target for Markdown text. It does not guarantee the total ZIP size or acceptance by another tool. Extract the ZIP and select or split the files to match the destination’s limits."
            },
            {
              "q": "What happens to linked PDFs and Word files?",
              "a": "Successfully extracted text from selected supported documents can enter AI output. Keep needed originals separately and review unreadable or missing text; scanned material is not guaranteed to be extracted. Document text is not merged into the readable HTML."
            },
            {
              "q": "Does exporting send the material to AI?",
              "a": "No. Export prepares files on your device. You choose an external service and manually provide supported files and your question. Keep source_url and captured_at when checking answers; a capture date does not prove that the source is still current."
            }
          ],
          "guide": {
            "title": "Two ways to reuse the saved text",
            "modes": [
              [
                "Read and annotate",
                "Use one Markdown file for a compact reference. Add your own comments while retaining the source information."
              ],
              [
                "Organise page notes",
                "Use per-page Markdown to group sources by topic and link them from your own research or writing notes."
              ]
            ],
            "examplesTitle": "Examples for research and writing",
            "examples": [
              [
                "A research note",
                "Summarise the points stated in these pages. Link each point to its source URL and separate source wording from my own observations."
              ],
              [
                "A writing reference",
                "List the facts that support this draft. Include source URLs and capture dates, and mark claims that the supplied material does not support."
              ]
            ],
            "formatsTitle": "Choose your Markdown output",
            "headers": [
              "Format",
              "When to use it"
            ],
            "rows": [
              [
                "One Markdown file",
                "Collected text in one reading file with per-page sources; large text may be split."
              ],
              [
                "Per-page Markdown",
                "A Markdown file for each page plus manifest.json in a ZIP, useful for separate source notes."
              ],
              [
                "Full package",
                "corpus.md, chunks.jsonl, manifest.json, request text and readable HTML in a ZIP for structured reuse. In a full package, reading HTML is included. In masking mode, HTML is not included."
              ],
              [
                "HTML / original documents",
                "Keep the readable reference and any needed original attachments beside your Markdown."
              ]
            ]
          }
        },
        "ja": {
          "title": "Web資料を出典付きMarkdownで保存・再利用 | Grab All Files",
          "desc": "Web本文を1つのMarkdown、ページ別、フルパッケージで保存。出典を残し、ノート・調査・執筆・外部AIへ手動で再利用する手順を紹介します。",
          "eyebrow": "Web資料をMarkdownで再利用",
          "h1": "Web資料を、使い回せるMarkdownノートに。",
          "lead": "集めた見出し・本文・箇条書き・対応するHTML表・通常のリンクを、出典と取得日時付きのMarkdownへ。1つの読み物にもページ別のノートにもでき、調査・執筆や選んだツールで資料を活用できます。",
          "best": [
            "関連記事を、出典付きの調査ノートとして整理する。",
            "執筆中の原稿や手動ノートの横に、根拠となる本文を置く。",
            "必要なMarkdownファイルを選び、外部AIへの質問に使う。"
          ],
          "steps": [
            "保存が許可されたページを開き、「ページをHTMLにまとめる」で関連候補を確認し、必要なページを選びます。無料版は選んだ1ページをHTML保存し、Proは複数ページ本文をまとめられます。",
            "収集前に「AI分析用データ（Markdown・出典付き）」を有効にします。読み物なら「1つのMarkdown」、出典別ノートなら「ページ別Markdown」、構造化データも使うなら「フルパッケージ」を選びます。",
            "収集結果を確認し、見出し・リンク・重要な本文を元ページと照合します。失敗した項目も確認。目次や本文検索で読むならHTMLも保存します。",
            "「AI分析用ZIPを保存」を使い、ZIPを展開して対応するエディターでMarkdownを開きます。source_url・captured_atを残し、自分のテーマ名や確認日をメモに加えます。",
            "ノートで使うファイルは、対応する方法で自分でコピー・取り込みます。外部AIへは必要なファイルと「AIへの依頼文をコピー」で用意した依頼文・質問を渡し、回答を原文と最新の出典で確認します。"
          ],
          "faq": [
            {
              "q": "ObsidianやNotionと自動同期できますか？",
              "a": "ファイルを書き出してから、取り込み先が対応する方法で手動コピー・インポートします。取り込み後に見出し・表・リンクを確認してください。拡張機能は保管庫やワークスペースを自動同期せず、対応する取り込み方法もツールで異なります。"
            },
            {
              "q": "画像や動きのあるページもそのまま残りますか？",
              "a": "Markdownでは画像が元URLへのリンクなどとして残り、画像ファイル本体が常に同梱されるわけではありません。サイトの完全な複製ではないため、重要な画像や操作で表示される内容は元ページでも確認してください。"
            },
            {
              "q": "25MBの設定ならZIP全体も25MB以内になりますか？",
              "a": "既定の25MBはMarkdown本文の分割目安です。ZIP全体のサイズや他のツールでの受け入れを保証するものではありません。ZIPを展開し、取り込み先の制限に合わせてファイルを選択・分割します。"
            },
            {
              "q": "リンク先のPDFやWordはどうなりますか？",
              "a": "選んだ対応文書で抽出に成功した本文はAI向け出力に含められます。必要な原本は別に保存し、読めなかった部分や不足も確認してください。スキャン資料の本文抽出は保証されず、文書本文は閲覧用HTMLには統合されません。"
            },
            {
              "q": "書き出すとAIへ送信されますか？",
              "a": "端末内でファイルを準備します。外部サービスは利用者が選び、対応ファイルと質問を手動で渡します。回答の確認ではsource_url・captured_atを残して使い、取得日時と出典の現在の内容を区別します。"
            }
          ],
          "guide": {
            "title": "保存した本文を、2つの形で活用する",
            "modes": [
              [
                "読む・書き込む",
                "1つのMarkdownを手元の資料に。出典を残しながら、自分のコメントを付けて読み返します。"
              ],
              [
                "ページ別に整理する",
                "ページ別Markdownをテーマでまとめ、自分の調査・執筆ノートから出典ごとに参照します。"
              ]
            ],
            "examplesTitle": "調査・執筆で使う例",
            "examples": [
              [
                "調査ノート",
                "このページ群に記載された要点をまとめてください。各項目に出典URLを付け、原文の内容と自分の考察を分けて整理します。"
              ],
              [
                "執筆用の参考資料",
                "この原稿の根拠となる事実を資料から列挙してください。出典URLと取得日時を付け、提供資料で確認できない主張は明示してください。"
              ]
            ],
            "formatsTitle": "Markdownの出力形式を選ぶ",
            "headers": [
              "形式",
              "向いている使い方"
            ],
            "rows": [
              [
                "1つのMarkdown",
                "本文を1つの読み物に。ページごとの出典を含み、大きな本文は分割される場合があります。"
              ],
              [
                "ページ別Markdown",
                "ページごとの.mdとmanifest.jsonをZIPに。出典別ノートとして整理しやすい形式です。"
              ],
              [
                "フルパッケージ",
                "corpus.md・chunks.jsonl・manifest.json・依頼文・閲覧用HTMLをZIPにまとめ、構造化データも再利用します。フルパッケージでは閲覧用HTMLを同梱します。伏字モードではHTMLを同梱しません。"
              ],
              [
                "HTML／原本文書",
                "読み返すHTMLや必要な添付原本を、Markdownと一緒に保管します。"
              ]
            ]
          }
        },
        "es": {
          "title": "Guarda fuentes web como Markdown reutilizable | Grab All Files",
          "desc": "Exporta texto web en un Markdown, notas por página o un paquete completo. Conserva fuentes para investigar, escribir y reutilizar manualmente en notas o IA.",
          "eyebrow": "Fuentes web en Markdown",
          "h1": "Convierte fuentes web en notas reutilizables.",
          "lead": "Conserva títulos, texto, listas, tablas HTML compatibles y enlaces normales en Markdown, con fuentes y fechas de captura. Elige un archivo de lectura o notas separadas y reutilízalo en investigación, escritura o la herramienta que prefieras.",
          "best": [
            "Crear notas de investigación con fuentes de artículos relacionados.",
            "Tener el texto de referencia junto a tu borrador o notas.",
            "Preparar Markdown seleccionado para preguntar a una IA externa."
          ],
          "steps": [
            "Abre una página que puedas guardar y usa «Combinar páginas en HTML». Revisa las candidatas y elige las necesarias. Free guarda una página elegida en HTML; Pro combina el contenido de varias.",
            "Activa «Datos para análisis con IA (Markdown con fuentes)» antes de recopilar. Elige «Un solo Markdown», «Markdown por página» o «Paquete completo» para lectura, notas separadas o reutilización estructurada.",
            "Recopila y revisa el resultado. Compara títulos, enlaces y texto importante con la fuente y comprueba fallos. Guarda también HTML si quieres índice y búsqueda.",
            "Usa «Guardar ZIP de análisis IA», extrae el ZIP y abre los Markdown en un editor compatible. Conserva source_url y captured_at y añade tus temas y fecha de consulta.",
            "Copia o importa archivos compatibles manualmente a tus notas. Para IA externa, elige archivos y usa «Copiar petición para la IA» con tu pregunta. Verifica las conclusiones con el texto y la fuente actual."
          ],
          "faq": [
            {
              "q": "¿Se sincroniza con Obsidian o Notion?",
              "a": "Exporta primero y copia o importa manualmente mediante el método compatible del destino. Revisa títulos, tablas y enlaces tras importar. La extensión no sincroniza automáticamente tu almacén o espacio; la compatibilidad de importación varía."
            },
            {
              "q": "¿Se conservan imágenes y contenido interactivo?",
              "a": "Markdown puede referenciar imágenes con sus URL originales; sus archivos no siempre se incluyen. La extracción no clona todo el sitio. Comprueba imágenes importantes y contenido que requiere interacción en la página original."
            },
            {
              "q": "¿25 MB limita el paquete completo?",
              "a": "El valor predeterminado de 25 MB es un objetivo para dividir el texto Markdown. No garantiza el tamaño total del ZIP ni su aceptación por otra herramienta. Extrae y selecciona o divide archivos según los límites del destino."
            },
            {
              "q": "¿Qué pasa con PDF o Word enlazados?",
              "a": "El texto extraído correctamente de documentos seleccionados compatibles puede entrar en la salida para IA. Guarda los originales necesarios aparte y revisa texto ilegible o faltante. No se garantiza la extracción de escaneos; el texto de documentos no se integra en el HTML de lectura."
            },
            {
              "q": "¿Exportar envía los datos a IA?",
              "a": "No. Los archivos se preparan en tu dispositivo. Tú eliges el servicio y le entregas manualmente archivos compatibles y preguntas. Conserva source_url y captured_at para verificar respuestas; la captura no prueba que la fuente siga actualizada."
            }
          ],
          "guide": {
            "title": "Dos formas de reutilizar el texto",
            "modes": [
              [
                "Leer y anotar",
                "Usa un Markdown como referencia compacta y añade comentarios conservando las fuentes."
              ],
              [
                "Organizar notas por página",
                "Agrupa Markdown por temas y enlaza cada fuente desde tus notas de investigación o escritura."
              ]
            ],
            "examplesTitle": "Ejemplos para investigar y escribir",
            "examples": [
              [
                "Una nota de investigación",
                "Resume los puntos de estas páginas. Enlaza cada punto a su URL fuente y separa el texto original de mis observaciones."
              ],
              [
                "Una referencia de escritura",
                "Enumera los hechos que respaldan este borrador. Incluye URL y fechas de captura y marca las afirmaciones sin respaldo en los documentos."
              ]
            ],
            "formatsTitle": "Elige la salida Markdown",
            "headers": [
              "Formato",
              "Cuándo usarlo"
            ],
            "rows": [
              [
                "Un solo Markdown",
                "Texto en un archivo de lectura con fuentes por página; el texto grande puede dividirse."
              ],
              [
                "Markdown por página",
                "Un .md por página y manifest.json en ZIP, para notas de fuentes separadas."
              ],
              [
                "Paquete completo",
                "corpus.md, chunks.jsonl, manifest.json, petición y HTML en ZIP para reutilización estructurada. El paquete completo incluye HTML de lectura. En modo de enmascaramiento no se incluye HTML."
              ],
              [
                "HTML / originales",
                "Guarda la referencia legible y los adjuntos originales junto al Markdown."
              ]
            ]
          }
        },
        "fr": {
          "title": "Enregistrer des sources web en Markdown | Grab All Files",
          "desc": "Exportez le texte web en un Markdown, des notes par page ou un dossier complet. Gardez les sources pour la recherche, la rédaction et la réutilisation manuelle.",
          "eyebrow": "Sources web en Markdown",
          "h1": "Des sources web aux notes réutilisables.",
          "lead": "Conservez titres, texte, listes, tableaux HTML compatibles et liens ordinaires en Markdown, avec sources et dates de capture. Choisissez un fichier de lecture ou des notes distinctes pour vos recherches, votre rédaction ou l’outil choisi.",
          "best": [
            "Créer des notes de recherche avec les sources d’articles associés.",
            "Garder le texte de référence à côté d’un brouillon ou de notes.",
            "Préparer des Markdown sélectionnés pour interroger une IA externe."
          ],
          "steps": [
            "Ouvrez une page que vous pouvez enregistrer et utilisez « Regrouper les pages en HTML ». Vérifiez les propositions et choisissez les pages utiles. Free enregistre une page choisie en HTML ; Pro regroupe plusieurs contenus.",
            "Avant la collecte, activez « Données pour analyse par IA (Markdown avec sources) ». Choisissez « Un seul Markdown », « Markdown par page » ou « Paquet complet » selon vos besoins de lecture, de notes distinctes ou de données structurées.",
            "Collectez et vérifiez le résultat. Comparez titres, liens et texte important à la source et examinez les échecs. Gardez aussi le HTML pour son sommaire et sa recherche.",
            "Utilisez « Enregistrer le ZIP d’analyse IA », extrayez le ZIP et ouvrez les Markdown dans un éditeur compatible. Gardez source_url et captured_at et ajoutez vos thèmes et la date de consultation.",
            "Copiez ou importez manuellement les fichiers compatibles dans vos notes. Pour une IA externe, choisissez les fichiers et utilisez « Copier la demande pour l’IA » avec votre question. Vérifiez les conclusions avec le texte et la source actuelle."
          ],
          "faq": [
            {
              "q": "Y a-t-il une synchronisation avec Obsidian ou Notion ?",
              "a": "Exportez les fichiers, puis copiez-les ou importez-les manuellement selon les possibilités de la destination. Vérifiez titres, tableaux et liens. L’extension ne synchronise pas automatiquement votre coffre ou espace ; les imports pris en charge varient."
            },
            {
              "q": "Les images et contenus interactifs sont-ils conservés ?",
              "a": "Le Markdown peut référencer des images par leur URL d’origine ; les fichiers images ne sont pas toujours inclus. L’extraction ne clone pas le site entier. Consultez les images importantes et les contenus interactifs à la source."
            },
            {
              "q": "Le réglage de 25 Mo limite-t-il tout le dossier ?",
              "a": "Les 25 Mo par défaut servent de cible pour découper le texte Markdown. Ils ne garantissent ni la taille totale du ZIP ni l’acceptation par un autre outil. Extrayez, sélectionnez ou découpez les fichiers selon les limites du destinataire."
            },
            {
              "q": "Que deviennent les PDF ou Word liés ?",
              "a": "Le texte extrait avec succès des documents sélectionnés compatibles peut entrer dans la sortie IA. Gardez les originaux utiles à part et vérifiez le texte manquant ou illisible. L’extraction des scans n’est pas garantie ; le texte des documents n’entre pas dans le HTML de lecture."
            },
            {
              "q": "L’export envoie-t-il les données à une IA ?",
              "a": "Non. Les fichiers sont préparés sur votre appareil. Vous choisissez le service et fournissez manuellement les fichiers compatibles et questions. Gardez source_url et captured_at pour vérifier les réponses ; une capture ne prouve pas que la source est toujours actuelle."
            }
          ],
          "guide": {
            "title": "Deux usages du texte enregistré",
            "modes": [
              [
                "Lire et annoter",
                "Utilisez un Markdown comme référence compacte et ajoutez vos commentaires en gardant les sources."
              ],
              [
                "Classer les notes par page",
                "Regroupez les Markdown par thème et reliez les sources à vos notes de recherche ou de rédaction."
              ]
            ],
            "examplesTitle": "Exemples pour la recherche et la rédaction",
            "examples": [
              [
                "Une note de recherche",
                "Résumez les points de ces pages. Reliez chaque point à son URL source et distinguez le texte source de mes observations."
              ],
              [
                "Une référence de rédaction",
                "Listez les faits qui étayent ce brouillon. Ajoutez URL et dates de capture et signalez les affirmations non étayées par les documents."
              ]
            ],
            "formatsTitle": "Choisir la sortie Markdown",
            "headers": [
              "Format",
              "Usage conseillé"
            ],
            "rows": [
              [
                "Un seul Markdown",
                "Texte dans un fichier de lecture avec sources par page ; les gros textes peuvent être découpés."
              ],
              [
                "Markdown par page",
                "Un .md par page et manifest.json en ZIP pour séparer les sources."
              ],
              [
                "Paquet complet",
                "corpus.md, chunks.jsonl, manifest.json, demande et HTML en ZIP pour la réutilisation structurée. Le paquet complet inclut le HTML de lecture. En mode de masquage, le HTML n’est pas inclus."
              ],
              [
                "HTML / originaux",
                "Conservez la référence lisible et les pièces originales à côté du Markdown."
              ]
            ]
          }
        },
        "de": {
          "title": "Webquellen als Markdown wiederverwenden | Grab All Files",
          "desc": "Exportieren Sie Webtext als eine Markdown-Datei, Seitennotizen oder Komplettpaket. Bewahren Sie Quellen für Recherche, Schreiben und manuelle Nutzung in Notizen oder KI.",
          "eyebrow": "Webquellen als Markdown",
          "h1": "Webquellen zu wiederverwendbaren Notizen machen.",
          "lead": "Bewahren Sie Überschriften, Text, Listen, unterstützte HTML-Tabellen und normale Links als Markdown auf, mit Quellen und Aufnahmezeiten. Nutzen Sie eine Lesedatei oder getrennte Seitennotizen für Recherche, Schreiben und Ihr gewähltes Werkzeug.",
          "best": [
            "Quellenbezogene Recherchenotizen aus verwandten Artikeln erstellen.",
            "Referenztext neben Entwürfen oder eigenen Notizen aufbewahren.",
            "Ausgewählte Markdown-Dateien für Fragen an externe KI vorbereiten."
          ],
          "steps": [
            "Öffnen Sie eine Seite, die Sie speichern dürfen, und starten Sie „Seiten als HTML bündeln“. Prüfen Sie Vorschläge und wählen Sie benötigte Seiten. Free speichert eine gewählte Seite als HTML; Pro bündelt mehrere Seiteninhalte.",
            "Aktivieren Sie vor der Sammlung „KI-Analysedaten (Markdown mit Quellen)“. Wählen Sie „Eine Markdown-Datei“, „Markdown je Seite“ oder „Komplettpaket“ für Lesen, getrennte Notizen oder strukturierte Weiterverwendung.",
            "Sammeln und prüfen Sie das Ergebnis. Vergleichen Sie Überschriften, Links und wichtigen Text mit der Quelle und prüfen Sie Fehler. Speichern Sie auch HTML für Inhaltsverzeichnis und Suche.",
            "Nutzen Sie „KI-Analyse-ZIP speichern“, entpacken Sie das ZIP und öffnen Sie Markdown in einem passenden Editor. Behalten Sie source_url und captured_at und ergänzen Sie Themen und Ihr Prüfdatum.",
            "Kopieren oder importieren Sie passende Dateien manuell in Ihre Notizen. Für externe KI wählen Sie Dateien und nutzen „KI-Anfragetext kopieren“ mit Ihrer Frage. Prüfen Sie Aussagen anhand des Textes und der aktuellen Quelle."
          ],
          "faq": [
            {
              "q": "Wird mit Obsidian oder Notion synchronisiert?",
              "a": "Exportieren Sie Dateien und kopieren oder importieren Sie sie manuell nach den Möglichkeiten des Zielprogramms. Prüfen Sie Überschriften, Tabellen und Links. Die Erweiterung synchronisiert keinen Vault oder Arbeitsbereich automatisch; Importmöglichkeiten unterscheiden sich."
            },
            {
              "q": "Bleiben Bilder und interaktive Inhalte erhalten?",
              "a": "Markdown kann Bilder über ihre Original-URLs referenzieren; Bilddateien sind nicht immer enthalten. Die Ausgabe klont keine vollständige Website. Prüfen Sie wichtige Bilder und interaktive Inhalte an der Originalquelle."
            },
            {
              "q": "Begrenzt die Einstellung 25 MB das ganze Paket?",
              "a": "Die voreingestellten 25 MB sind ein Ziel für die Teilung von Markdown-Text. Das garantiert weder ZIP-Gesamtgröße noch Annahme durch andere Werkzeuge. Entpacken und wählen oder teilen Sie Dateien passend zum Zielprogramm."
            },
            {
              "q": "Was geschieht mit verlinkten PDF- und Word-Dateien?",
              "a": "Erfolgreich extrahierter Text ausgewählter unterstützter Dokumente kann in die KI-Ausgabe gelangen. Behalten Sie Originale separat und prüfen Sie fehlenden oder unlesbaren Text. Textextraktion aus Scans ist nicht garantiert; Dokumenttext wird nicht in das Lese-HTML integriert."
            },
            {
              "q": "Sendet der Export Material an KI?",
              "a": "Nein. Dateien werden auf Ihrem Gerät vorbereitet. Sie wählen den Dienst und übergeben passende Dateien und Fragen manuell. Behalten Sie source_url und captured_at zur Antwortprüfung; ein Aufnahmedatum beweist keine fortdauernde Aktualität."
            }
          ],
          "guide": {
            "title": "Zwei Wege zur Weiterverwendung",
            "modes": [
              [
                "Lesen und kommentieren",
                "Nutzen Sie eine Markdown-Datei als kompakte Referenz und fügen Sie eigene Kommentare mit Quellenbezug hinzu."
              ],
              [
                "Seitennotizen ordnen",
                "Gruppieren Sie Markdown nach Themen und verknüpfen Sie einzelne Quellen mit Ihren Recherche- oder Schreibnotizen."
              ]
            ],
            "examplesTitle": "Beispiele für Recherche und Schreiben",
            "examples": [
              [
                "Eine Recherchenotiz",
                "Fasse die Aussagen dieser Seiten zusammen. Verlinke jede Aussage mit ihrer Quell-URL und trenne Quelltext von meinen Beobachtungen."
              ],
              [
                "Eine Schreibreferenz",
                "Liste die Fakten auf, die diesen Entwurf stützen. Füge Quell-URLs und Aufnahmezeiten hinzu und kennzeichne nicht belegte Aussagen."
              ]
            ],
            "formatsTitle": "Markdown-Ausgabe wählen",
            "headers": [
              "Format",
              "Passende Nutzung"
            ],
            "rows": [
              [
                "Eine Markdown-Datei",
                "Gesammelter Text in einer Lesedatei mit Quellen je Seite; große Texte können geteilt werden."
              ],
              [
                "Markdown je Seite",
                "Eine .md je Seite mit manifest.json im ZIP für getrennte Quellnotizen."
              ],
              [
                "Komplettpaket",
                "corpus.md, chunks.jsonl, manifest.json, Anfragetext und HTML im ZIP für strukturierte Nutzung. Das vollständige Paket enthält das Lese-HTML. Im Maskierungsmodus wird HTML nicht beigelegt."
              ],
              [
                "HTML / Originaldokumente",
                "Lesbare Referenz und benötigte Originalanlagen neben Markdown aufbewahren."
              ]
            ]
          }
        },
        "it": {
          "title": "Salva fonti web come Markdown riutilizzabile | Grab All Files",
          "desc": "Esporta testo web in un Markdown, note per pagina o un pacchetto completo. Conserva le fonti per ricerca, scrittura e riuso manuale in note o IA esterna.",
          "eyebrow": "Fonti web in Markdown",
          "h1": "Trasforma le fonti web in note riutilizzabili.",
          "lead": "Conserva titoli, testo, elenchi, tabelle HTML supportate e link normali in Markdown, con fonti e date di acquisizione. Scegli un file di lettura o note separate e riusalo per ricerca, scrittura o lo strumento preferito.",
          "best": [
            "Creare note di ricerca con fonti da articoli correlati.",
            "Tenere il testo di riferimento accanto a bozze o note personali.",
            "Preparare Markdown selezionati per domande a un’IA esterna."
          ],
          "steps": [
            "Apri una pagina che puoi salvare e usa «Unisci pagine in HTML». Controlla le candidate e scegli quelle necessarie. Free salva una pagina scelta in HTML; Pro unisce il contenuto di più pagine.",
            "Prima della raccolta, attiva «Dati per analisi con IA (Markdown con fonti)». Scegli «Un unico Markdown», «Markdown per pagina» o «Pacchetto completo» per lettura, note separate o riuso strutturato.",
            "Raccogli e controlla il risultato. Confronta titoli, link e testo importante con la fonte e verifica gli errori. Salva anche HTML per indice e ricerca.",
            "Usa «Salva ZIP di analisi IA», estrai lo ZIP e apri i Markdown in un editor compatibile. Mantieni source_url e captured_at e aggiungi argomenti e data di verifica alle note.",
            "Copia o importa manualmente i file compatibili nelle note. Per un’IA esterna, scegli i file e usa «Copia richiesta per l’IA» con la domanda. Verifica le conclusioni con il testo e la fonte attuale."
          ],
          "faq": [
            {
              "q": "Si sincronizza con Obsidian o Notion?",
              "a": "Esporta prima i file, poi copiali o importali manualmente con il metodo supportato dalla destinazione. Controlla titoli, tabelle e link. L’estensione non sincronizza automaticamente archivio o spazio di lavoro; il supporto d’importazione varia."
            },
            {
              "q": "Immagini e contenuti interattivi vengono conservati?",
              "a": "Markdown può riferirsi alle immagini tramite URL originali; i file immagine non sono sempre inclusi. L’estrazione non clona il sito intero. Controlla immagini importanti e contenuti interattivi sulla pagina originale."
            },
            {
              "q": "25 MB limita tutto il pacchetto?",
              "a": "Il valore predefinito di 25 MB è un obiettivo per dividere il testo Markdown. Non garantisce dimensioni totali dello ZIP o accettazione da altri strumenti. Estrai e seleziona o dividi file secondo i limiti della destinazione."
            },
            {
              "q": "Che succede ai PDF o Word collegati?",
              "a": "Il testo estratto correttamente da documenti selezionati supportati può entrare nell’output IA. Tieni gli originali utili separati e verifica testo mancante o illeggibile. L’estrazione dalle scansioni non è garantita; il testo non viene integrato nell’HTML di lettura."
            },
            {
              "q": "L’esportazione invia dati a un’IA?",
              "a": "No. I file vengono preparati sul dispositivo. Scegli tu il servizio e fornisci manualmente file compatibili e domande. Mantieni source_url e captured_at per verificare le risposte; la data di acquisizione non prova che la fonte sia ancora attuale."
            }
          ],
          "guide": {
            "title": "Due modi per riusare il testo",
            "modes": [
              [
                "Leggere e annotare",
                "Usa un Markdown come riferimento compatto e aggiungi commenti mantenendo le fonti."
              ],
              [
                "Organizzare note per pagina",
                "Raggruppa i Markdown per argomento e collega le fonti alle note di ricerca o scrittura."
              ]
            ],
            "examplesTitle": "Esempi per ricerca e scrittura",
            "examples": [
              [
                "Una nota di ricerca",
                "Riassumi i punti di queste pagine. Collega ogni punto alla sua URL fonte e separa il testo originale dalle mie osservazioni."
              ],
              [
                "Un riferimento di scrittura",
                "Elenca i fatti che sostengono questa bozza. Includi URL e date di acquisizione e segnala le affermazioni non supportate dai documenti."
              ]
            ],
            "formatsTitle": "Scegliere l’output Markdown",
            "headers": [
              "Formato",
              "Quando usarlo"
            ],
            "rows": [
              [
                "Un unico Markdown",
                "Testo in un file di lettura con fonti per pagina; il testo grande può essere diviso."
              ],
              [
                "Markdown per pagina",
                "Un .md per pagina e manifest.json in ZIP, per note distinte delle fonti."
              ],
              [
                "Pacchetto completo",
                "corpus.md, chunks.jsonl, manifest.json, richiesta e HTML in ZIP per riuso strutturato. Il pacchetto completo include l’HTML di lettura. In modalità di mascheramento l’HTML non viene incluso."
              ],
              [
                "HTML / originali",
                "Conserva il riferimento leggibile e gli allegati originali accanto al Markdown."
              ]
            ]
          }
        },
        "ko": {
          "title": "웹 자료를 출처 있는 Markdown으로 재사용 | Grab All Files",
          "desc": "웹 본문을 하나의 Markdown, 페이지별 노트 또는 전체 패키지로 내보냅니다. 출처를 남기고 조사·글쓰기·노트나 외부 AI에 수동으로 재사용하세요.",
          "eyebrow": "웹 자료를 Markdown으로",
          "h1": "웹 자료를 다시 쓸 수 있는 노트로.",
          "lead": "수집한 제목·본문·목록·지원 HTML 표·일반 링크를 출처와 취득 시각이 있는 Markdown으로 보관합니다. 하나의 읽기 파일이나 페이지별 노트로 만들어 조사·글쓰기와 선택한 도구에서 활용하세요.",
          "best": [
            "관련 글에서 출처 있는 조사 노트를 만들기.",
            "작성 중인 글이나 직접 만든 노트 옆에 참고 본문 두기.",
            "필요한 Markdown을 골라 외부 AI에 질문하기."
          ],
          "steps": [
            "저장이 허용된 페이지를 열고 “페이지를 HTML로 합치기”을 시작합니다. 관련 후보를 확인해 필요한 페이지만 선택하세요. 무료 버전은 선택한 한 페이지를 HTML로 저장하고 Pro는 여러 페이지 본문을 결합합니다.",
            "수집 전에 “AI 분석용 데이터(출처 포함 Markdown)”를 활성화합니다. 읽기용은 “하나의 Markdown”, 개별 노트는 “페이지별 Markdown”, 구조화 자료도 쓸 때는 “전체 패키지”를 선택합니다.",
            "수집 결과를 확인합니다. 제목·링크·중요한 본문을 원본과 대조하고 실패 항목도 확인하세요. 목차와 본문 검색을 쓰려면 HTML도 저장합니다.",
            "“AI 분석용 ZIP 저장”을 사용해 ZIP을 풀고 지원 편집기에서 Markdown을 엽니다. source_url·captured_at을 남기고 주제 이름과 확인일을 메모에 추가합니다.",
            "노트 도구에 지원 파일을 직접 복사·가져옵니다. 외부 AI에는 필요한 파일과 “AI 요청문 복사”으로 준비한 요청문·질문을 수동으로 전달하고 답변을 본문과 최신 출처로 확인합니다."
          ],
          "faq": [
            {
              "q": "Obsidian이나 Notion과 자동 동기화되나요?",
              "a": "먼저 파일을 내보낸 후 대상 도구가 지원하는 방법으로 직접 복사·가져옵니다. 제목·표·링크를 확인하세요. 확장 기능은 보관함이나 작업 공간을 자동 동기화하지 않으며 가져오기 지원은 도구에 따라 다릅니다."
            },
            {
              "q": "이미지와 동적 콘텐츠도 그대로 남나요?",
              "a": "Markdown은 이미지를 원래 URL로 참조할 수 있으며 이미지 파일이 항상 패키지에 포함되는 것은 아닙니다. 사이트 전체 복제는 아니므로 중요한 이미지와 조작이 필요한 내용은 원본에서 확인하세요."
            },
            {
              "q": "25MB 설정이 패키지 전체 크기를 제한하나요?",
              "a": "기본 25MB는 Markdown 본문의 분할 기준입니다. ZIP 전체 크기나 다른 도구의 수용을 보장하지 않습니다. ZIP을 풀고 대상 도구 제한에 맞춰 파일을 선택하거나 나눕니다."
            },
            {
              "q": "연결된 PDF·Word는 어떻게 되나요?",
              "a": "선택한 지원 문서에서 추출에 성공한 본문은 AI 출력에 포함될 수 있습니다. 필요한 원본은 따로 보관하고 읽지 못한 부분·누락을 확인하세요. 스캔 문서 추출은 보장되지 않으며 문서 본문은 읽기용 HTML에 합쳐지지 않습니다."
            },
            {
              "q": "내보내면 AI로 전송되나요?",
              "a": "아닙니다. 기기에서 파일을 준비하고 사용자가 외부 서비스를 골라 지원 파일과 질문을 직접 전달합니다. source_url·captured_at을 남겨 답변을 확인하세요. 취득 시각이 출처의 현재 내용을 보장하지는 않습니다."
            }
          ],
          "guide": {
            "title": "저장한 본문의 두 가지 활용",
            "modes": [
              [
                "읽고 메모하기",
                "하나의 Markdown을 참고 자료로 읽으며 출처를 유지한 채 직접 의견을 덧붙입니다."
              ],
              [
                "페이지별 정리",
                "페이지별 Markdown을 주제로 묶고 조사·글쓰기 노트에서 각 출처를 연결합니다."
              ]
            ],
            "examplesTitle": "조사·글쓰기 활용 예시",
            "examples": [
              [
                "조사 노트",
                "이 페이지들에 적힌 요점을 정리해 주세요. 항목마다 출처 URL을 연결하고 원문 내용과 내 관찰을 구분합니다."
              ],
              [
                "글쓰기 참고 자료",
                "이 초안을 뒷받침하는 사실을 자료에서 나열해 주세요. 출처 URL과 취득 시각을 넣고 자료가 뒷받침하지 않는 주장을 표시해 주세요."
              ]
            ],
            "formatsTitle": "Markdown 출력 선택",
            "headers": [
              "형식",
              "적합한 용도"
            ],
            "rows": [
              [
                "하나의 Markdown",
                "페이지별 출처를 포함한 하나의 읽기 파일. 큰 본문은 나뉠 수 있습니다."
              ],
              [
                "페이지별 Markdown",
                "페이지별 .md와 manifest.json을 ZIP으로 묶어 출처별 노트로 정리합니다."
              ],
              [
                "전체 패키지",
                "corpus.md·chunks.jsonl·manifest.json·요청문·HTML을 ZIP에 담아 구조화 자료도 재사용합니다.전체 패키지에는 열람용 HTML이 포함됩니다. 마스킹 모드에서는 HTML을 포함하지 않습니다."
              ],
              [
                "HTML / 원본 문서",
                "읽기용 자료와 필요한 첨부 원본을 Markdown과 함께 보관합니다."
              ]
            ]
          }
        },
        "pt_BR": {
          "title": "Salve fontes web como Markdown reutilizável | Grab All Files",
          "desc": "Exporte texto web em um Markdown, notas por página ou pacote completo. Preserve fontes para pesquisa, escrita e reutilização manual em notas ou IA externa.",
          "eyebrow": "Fontes web em Markdown",
          "h1": "Transforme fontes web em notas reutilizáveis.",
          "lead": "Guarde títulos, texto, listas, tabelas HTML compatíveis e links comuns em Markdown, com fontes e datas de captura. Escolha um arquivo de leitura ou notas separadas para pesquisa, escrita ou sua ferramenta preferida.",
          "best": [
            "Criar notas de pesquisa com fontes de artigos relacionados.",
            "Manter o texto de referência ao lado de rascunhos ou notas.",
            "Preparar Markdown selecionado para perguntas a uma IA externa."
          ],
          "steps": [
            "Abra uma página que você pode salvar e use “Juntar páginas em HTML”. Confira as candidatas e escolha as necessárias. Free salva uma página escolhida em HTML; Pro combina o conteúdo de várias.",
            "Antes da coleta, ative “Dados para análise com IA (Markdown com fontes)”. Escolha “Um único Markdown”, “Markdown por página” ou “Pacote completo” para leitura, notas separadas ou reutilização estruturada.",
            "Colete e confira o resultado. Compare títulos, links e texto importante com a fonte e verifique falhas. Salve também HTML para usar sumário e busca.",
            "Use “Salvar ZIP de análise IA”, extraia o ZIP e abra os Markdown em um editor compatível. Mantenha source_url e captured_at e acrescente temas e data de consulta às notas.",
            "Copie ou importe arquivos compatíveis manualmente para suas notas. Para IA externa, escolha arquivos e use “Copiar pedido para a IA” com a pergunta. Confira conclusões com o texto e a fonte atual."
          ],
          "faq": [
            {
              "q": "Sincroniza com Obsidian ou Notion?",
              "a": "Exporte os arquivos e copie ou importe manualmente pelo método compatível da ferramenta de destino. Confira títulos, tabelas e links. A extensão não sincroniza automaticamente um cofre ou espaço de trabalho; o suporte à importação varia."
            },
            {
              "q": "Imagens e conteúdo interativo são preservados?",
              "a": "Markdown pode referenciar imagens pelas URLs originais; arquivos de imagem nem sempre são incluídos. A extração não clona o site inteiro. Confira imagens importantes e conteúdos interativos na página original."
            },
            {
              "q": "25 MB limita o pacote inteiro?",
              "a": "O padrão de 25 MB é uma meta para dividir o texto Markdown. Não garante o tamanho total do ZIP nem aceitação por outra ferramenta. Extraia e escolha ou divida arquivos conforme os limites do destino."
            },
            {
              "q": "O que acontece com PDF ou Word vinculados?",
              "a": "Texto extraído com sucesso de documentos selecionados compatíveis pode entrar na saída para IA. Guarde os originais necessários à parte e confira texto faltante ou ilegível. A extração de digitalizações não é garantida; o texto não se integra ao HTML de leitura."
            },
            {
              "q": "Exportar envia o material para IA?",
              "a": "Não. Os arquivos são preparados no dispositivo. Você escolhe o serviço e fornece manualmente arquivos compatíveis e perguntas. Mantenha source_url e captured_at para conferir respostas; a data de captura não prova que a fonte ainda esteja atualizada."
            }
          ],
          "guide": {
            "title": "Duas formas de reutilizar o texto",
            "modes": [
              [
                "Ler e anotar",
                "Use um Markdown como referência compacta e acrescente comentários mantendo as fontes."
              ],
              [
                "Organizar notas por página",
                "Agrupe Markdown por tema e vincule cada fonte às suas notas de pesquisa ou escrita."
              ]
            ],
            "examplesTitle": "Exemplos para pesquisa e escrita",
            "examples": [
              [
                "Uma nota de pesquisa",
                "Resuma os pontos destas páginas. Vincule cada ponto à URL da fonte e separe o texto original das minhas observações."
              ],
              [
                "Uma referência de escrita",
                "Liste os fatos que sustentam este rascunho. Inclua URLs e datas de captura e sinalize afirmações sem apoio nos documentos."
              ]
            ],
            "formatsTitle": "Escolha a saída Markdown",
            "headers": [
              "Formato",
              "Quando usar"
            ],
            "rows": [
              [
                "Um único Markdown",
                "Texto em um arquivo de leitura com fontes por página; textos grandes podem ser divididos."
              ],
              [
                "Markdown por página",
                "Um .md por página e manifest.json em ZIP para notas de fontes separadas."
              ],
              [
                "Pacote completo",
                "corpus.md, chunks.jsonl, manifest.json, pedido e HTML em ZIP para reutilização estruturada. O pacote completo inclui o HTML de leitura. No modo de mascaramento, o HTML não é incluído."
              ],
              [
                "HTML / originais",
                "Guarde a referência legível e anexos originais junto do Markdown."
              ]
            ]
          }
        },
        "zh_CN": {
          "title": "将Web资料保存为可复用的Markdown | Grab All Files",
          "desc": "把Web正文导出为单个Markdown、按页笔记或完整包。保留来源，用于研究、写作及手动复用到笔记或外部AI。",
          "eyebrow": "用Markdown复用Web资料",
          "h1": "把Web资料变成能复用的笔记。",
          "lead": "将收集的标题、正文、列表、支持的HTML表格和普通链接保存为Markdown，并保留来源与获取时间。选择单份阅读文件或按页笔记，用于研究、写作及自己选择的工具。",
          "best": [
            "将相关文章整理为带来源的研究笔记。",
            "在草稿或手动笔记旁保留参考正文。",
            "选择所需Markdown文件，向外部AI提问。"
          ],
          "steps": [
            "打开允许保存的页面，启动“将网页合并为 HTML”。核对相关候选，选择需要的页面。免费版将所选的一个页面保存为HTML，Pro可合并多个页面正文。",
            "收集前启用“AI分析数据（带出处的Markdown）”。阅读用“单个Markdown”，分开记笔记用“按页Markdown”，需要结构化资料则选“完整包”。",
            "收集并核对结果，将标题、链接和重要正文与来源比较，检查失败项目。如需目录和正文搜索，也保存HTML。",
            "使用“保存AI分析ZIP”，解压ZIP，在支持的编辑器中打开Markdown。保留source_url和captured_at，添加自己的主题标签与核对日期。",
            "通过支持的方法手动复制或导入笔记工具。外部AI需自行选择文件，用“复制给AI的请求文”准备请求与问题，再以提供的原文和最新来源核对回答。"
          ],
          "faq": [
            {
              "q": "会与Obsidian或Notion自动同步吗？",
              "a": "先导出文件，再通过目标工具支持的方法手动复制或导入。导入后核对标题、表格和链接。扩展不会自动同步资料库或工作区，导入支持因工具而异。"
            },
            {
              "q": "图片和交互内容能原样保留吗？",
              "a": "Markdown可通过原URL引用图片，图片文件本身不一定包含在包内。提取并非完整复制网站，重要图片或需操作才显示的内容请回到原页面确认。"
            },
            {
              "q": "25MB设置会限制整个包的大小吗？",
              "a": "默认25MB是Markdown正文的分割目标，不保证整个ZIP的大小，也不保证其他工具能接收。请解压后按目标工具的限制选择或拆分文件。"
            },
            {
              "q": "链接的PDF、Word会怎样处理？",
              "a": "所选支持文档中成功提取的文字可进入AI输出。所需原件另存，核对无法读取或缺失的文字。扫描资料的提取不受保证，文档正文不会并入阅读用HTML。"
            },
            {
              "q": "导出会把资料发送给AI吗？",
              "a": "不会。文件在设备上准备，由你选择外部服务，手动提供支持文件与问题。保留source_url和captured_at核对回答；获取时间并不证明来源仍是最新。"
            }
          ],
          "guide": {
            "title": "保存正文的两种用法",
            "modes": [
              [
                "阅读并加注",
                "用一个Markdown作为简洁参考，保留来源并添加自己的评论。"
              ],
              [
                "按页整理笔记",
                "按主题组织各页Markdown，从研究或写作笔记链接到不同来源。"
              ]
            ],
            "examplesTitle": "研究与写作示例",
            "examples": [
              [
                "研究笔记",
                "请汇总这些页面中记载的要点。为每项附上来源URL，并把原文内容与我的观察分开。"
              ],
              [
                "写作参考",
                "请列出资料中支持这份草稿的事实。添加来源URL和获取时间，标出提供资料无法支持的主张。"
              ]
            ],
            "formatsTitle": "选择Markdown输出",
            "headers": [
              "格式",
              "适合的用法"
            ],
            "rows": [
              [
                "单个Markdown",
                "正文汇成一份阅读文件，包含各页来源；大型正文可能拆分。"
              ],
              [
                "按页Markdown",
                "每页一个.md与manifest.json打包为ZIP，便于按来源整理笔记。"
              ],
              [
                "完整包",
                "corpus.md、chunks.jsonl、manifest.json、请求文与HTML打包为ZIP，便于结构化复用。完整资料包包含阅读用HTML。遮蔽模式不包含HTML。"
              ],
              [
                "HTML／原始文档",
                "将可阅读的资料及所需原始附件与Markdown一起保存。"
              ]
            ]
          }
        },
        "zh_TW": {
          "title": "將Web資料儲存為可重用的Markdown | Grab All Files",
          "desc": "把Web本文匯出為單一Markdown、逐頁筆記或完整套件。保留來源，用於研究、寫作及手動重用到筆記或外部AI。",
          "eyebrow": "用Markdown重用Web資料",
          "h1": "把Web資料變成能重用的筆記。",
          "lead": "將收集的標題、本文、清單、支援的HTML表格和一般連結儲存為Markdown，保留來源與取得時間。選擇單份閱讀檔或逐頁筆記，用於研究、寫作及自己選擇的工具。",
          "best": [
            "將相關文章整理為附來源的研究筆記。",
            "在草稿或手動筆記旁保留參考本文。",
            "選擇所需Markdown檔案，向外部AI提問。"
          ],
          "steps": [
            "開啟允許儲存的頁面，啟動「將網頁合併為 HTML」。核對相關候選並選取需要的頁面。免費版將選取的一個頁面儲存為HTML，Pro可合併多個頁面本文。",
            "收集前啟用「AI分析資料（附出處的Markdown）」。閱讀用「單一Markdown」，分開記筆記用「逐頁Markdown」，需要結構化資料則選「完整套件」。",
            "收集並核對結果，將標題、連結和重要本文與來源比較，檢查失敗項目。若需目錄和本文搜尋，也儲存HTML。",
            "使用「儲存AI分析ZIP」，解壓縮ZIP，在支援的編輯器中開啟Markdown。保留source_url和captured_at，添加自己的主題標籤與核對日期。",
            "透過支援的方法手動複製或匯入筆記工具。外部AI需自行選擇檔案，用「複製給AI的請求文」準備請求與問題，再以提供的原文和最新來源核對回答。"
          ],
          "faq": [
            {
              "q": "會與Obsidian或Notion自動同步嗎？",
              "a": "先匯出檔案，再透過目標工具支援的方法手動複製或匯入。匯入後核對標題、表格和連結。擴充功能不會自動同步資料庫或工作區，匯入支援因工具而異。"
            },
            {
              "q": "圖片和互動內容能原樣保留嗎？",
              "a": "Markdown可透過原URL引用圖片，圖片檔本身不一定包含在套件內。擷取並非完整複製網站，重要圖片或需操作才顯示的內容請回到原頁面確認。"
            },
            {
              "q": "25MB設定會限制整個套件的大小嗎？",
              "a": "預設25MB是Markdown本文的分割目標，不保證整個ZIP的大小，也不保證其他工具能接收。請解壓縮後依目標工具的限制選擇或拆分檔案。"
            },
            {
              "q": "連結的PDF、Word會如何處理？",
              "a": "選取的支援文件中成功擷取的文字可進入AI輸出。所需原件另存，核對無法讀取或缺漏的文字。掃描資料的擷取不受保證，文件本文不會併入閱讀用HTML。"
            },
            {
              "q": "匯出會把資料傳送給AI嗎？",
              "a": "不會。檔案在裝置上準備，由你選擇外部服務，手動提供支援檔案與問題。保留source_url和captured_at核對回答；取得時間並不證明來源仍是最新。"
            }
          ],
          "guide": {
            "title": "儲存本文的兩種用法",
            "modes": [
              [
                "閱讀並加註",
                "用一個Markdown作為簡潔參考，保留來源並添加自己的評論。"
              ],
              [
                "逐頁整理筆記",
                "依主題組織各頁Markdown，從研究或寫作筆記連結到不同來源。"
              ]
            ],
            "examplesTitle": "研究與寫作範例",
            "examples": [
              [
                "研究筆記",
                "請彙整這些頁面中記載的要點。為每項附上來源URL，並把原文內容與我的觀察分開。"
              ],
              [
                "寫作參考",
                "請列出資料中支持這份草稿的事實。添加來源URL和取得時間，標出提供資料無法支持的主張。"
              ]
            ],
            "formatsTitle": "選擇Markdown輸出",
            "headers": [
              "格式",
              "適合的用法"
            ],
            "rows": [
              [
                "單一Markdown",
                "本文彙成一份閱讀檔，包含各頁來源；大型本文可能拆分。"
              ],
              [
                "逐頁Markdown",
                "每頁一個.md與manifest.json打包為ZIP，便於依來源整理筆記。"
              ],
              [
                "完整套件",
                "corpus.md、chunks.jsonl、manifest.json、請求文與HTML打包為ZIP，便於結構化重用。完整資料包包含閱讀用HTML。遮蔽模式不包含HTML。"
              ],
              [
                "HTML／原始文件",
                "將可閱讀的資料及所需原始附件與Markdown一起儲存。"
              ]
            ]
          }
        }
      }
    },
    "save-online-manuals-and-knowledge-pages": {
      "path": "save-online-manuals-and-knowledge-pages.html",
      "related": [
        "web-pages-for-reading-and-ai-analysis",
        "internal-portal-downloads",
        "combine-web-pages-into-one-html"
      ],
      "copy": {
        "en": {
          "title": "Save work manuals & knowledge pages together | Grab All Files",
          "desc": "Save permitted online manuals and knowledge articles as a readable reference. Organise chapter HTML, embedded PDFs and menu-based articles, then prepare AI questions.",
          "eyebrow": "Save manuals & knowledge pages",
          "h1": "Turn work manuals and knowledge pages into a useful reference.",
          "lead": "Keep the chapters and articles you need together, find a procedure with the table of contents or text search, and keep original PDFs beside their explanation pages. Use material you are permitted to view and save. Free saves one selected page; Pro combines multiple page bodies.",
          "best": [
            "Read application procedures, required-document guidance and operating instructions together.",
            "Organise the explanatory page and original PDF as related materials.",
            "Prepare selected source material for asking an external AI tool about steps or conditions."
          ],
          "steps": [
            "Open a page you are permitted to view and save using your normal browser session. Then open “Combine pages into HTML” in the extension.",
            "Review the candidates against the source menu. Select needed chapters or articles; with Pro, remove extras and arrange their order.",
            "Choose image and linked-document settings, collect and save the HTML. For an embedded PDF, confirm an accessible file URL or download link in the file downloader and save the PDF itself separately.",
            "Open the saved HTML and use its contents and search. Compare saved headings and reported results with the source; check any missing or failed material.",
            "Keep the HTML and PDFs together. Note original URLs, the date you checked and any stated revision in your own reference notes. If using AI, prepare an export and manually pass supported files and your question to your chosen service."
          ],
          "faq": [
            {
              "q": "What if a chapter or article is missing?",
              "a": "Compare the candidate list with the original menu and add needed URLs where appropriate. After saving, compare the headings and collection results with the originals. This lets you review what was saved without assuming every menu item was found."
            },
            {
              "q": "How do I save an embedded PDF with its explanation?",
              "a": "Check the actual PDF URL or download link in the file downloader, then save the obtainable PDF as a separate file. Collect the explanation as HTML and manage both together; the PDF text is not merged into the HTML body."
            },
            {
              "q": "Can I try one page with Free?",
              "a": "Yes. Free discovers candidates and saves one chosen page as HTML. Pro lets you select, reorder and combine multiple page bodies. Existing authentication, permission and safety limits apply."
            },
            {
              "q": "How do I identify the source and revision?",
              "a": "Check the original page’s revision label and record it in your own title or notes, along with its URL and the date checked. The HTML’s overall capture date and AI output’s page-level source URLs and capture dates can help with checking; a manual’s revision needs your confirmation."
            },
            {
              "q": "Can I ask AI to extract procedures or conditions?",
              "a": "Enable AI output before collection, then save the AI ZIP and copy the request after collection. Choose appropriate files and manually give them to your external AI service, extracting the ZIP if needed. Check its answer against the supplied source wording."
            }
          ],
          "manual": {
            "patternsTitle": "Three formats, three useful collection approaches",
            "patterns": [
              [
                "Chapter-based HTML",
                [
                  "Guide",
                  "Preparation",
                  "Procedure"
                ],
                "Select the chapters you need and arrange them as a readable HTML reference. Its table of contents and search help you return to the relevant section."
              ],
              [
                "Embedded PDF",
                [
                  "Explanation page",
                  "Original PDF",
                  "Reference note"
                ],
                "Check whether the PDF file URL or download link can be obtained. Save the PDF itself with the file downloader and keep it alongside the explanatory HTML."
              ],
              [
                "Articles in a menu hierarchy",
                [
                  "Topic menu",
                  "Article A",
                  "Article B"
                ],
                "Review discovered candidates against the menu, choose relevant articles and adjust their order. Check the saved result against the original articles."
              ]
            ],
            "organizeTitle": "Keep the material easy to check later",
            "headers": [
              "Material",
              "How to keep it"
            ],
            "rows": [
              [
                "HTML reference",
                "Read the collected page bodies with contents and search. Check the sections you actually saved."
              ],
              [
                "Original PDFs",
                "Keep them as separate files beside the explanatory HTML. Document links in HTML do not merge the PDF text into the page body."
              ],
              [
                "Reference notes",
                "Record source URLs, the date checked and the revision stated in the manual. Note when the revision is not stated."
              ]
            ],
            "promptTitle": "Ask about the wording you collected",
            "prompt": "Using only this material, list the procedure, prerequisites and required documents. Cite the supporting passages and source URLs. Mark missing information as ‘not stated in the supplied material’ instead of guessing.",
            "aiLink": "See how to prepare files and questions for external AI analysis"
          }
        },
        "ja": {
          "title": "業務マニュアル・ナレッジをまとめて保存 | Grab All Files",
          "desc": "閲覧・保存が許可された業務マニュアルやナレッジを資料集に。章別HTML・埋め込みPDF・階層メニューの記事を整理し、読み返す手順と外部AIへの依頼例を紹介します。",
          "eyebrow": "業務マニュアル・ナレッジを保存",
          "h1": "業務マニュアルを、読み返せる資料集に。",
          "lead": "必要な章や記事をまとめて読み、目次や本文検索から手順を探す。説明ページとPDF本体を併せて管理する。閲覧・保存が許可された資料を、繰り返し参照できる形に整理できます。無料版は選んだ1ページ、Proは複数ページの本文をまとめられます。",
          "best": [
            "申請手順・必要書類の案内・操作マニュアルをまとめて読み返す。",
            "説明ページとPDF本体を関連する資料として整理する。",
            "原文を選び、外部AIへ手順や条件の抽出を依頼する準備に使う。"
          ],
          "steps": [
            "閲覧・保存が許可された起点ページを、通常のブラウザのログイン状態で開きます。続けて、拡張機能の「ページをHTMLにまとめる」を開きます。",
            "候補一覧を元のメニューと見比べ、必要な章や記事を選びます。Proでは不要な候補を外し、読む順番に並べ替えます。",
            "画像・リンク文書の設定を選んで収集し、HTMLを保存します。埋め込みPDFはファイル一括保存側でPDF本体URLやダウンロードリンクを確認し、取得できるPDF本体を別途保存します。",
            "保存したHTMLを開き、目次と検索で読み返します。保存された見出しや結果を原文と照合し、不足や取得失敗を確認します。",
            "HTMLとPDFを併せて管理し、元URL・確認日・表記されている版を資料メモに控えます。AIを使う場合は資料を書き出し、対応ファイルと質問を選んだ外部AIへ自分で渡します。"
          ],
          "faq": [
            {
              "q": "必要な章や記事が候補にない場合は？",
              "a": "候補一覧を元のメニューと見比べ、必要に応じてURLを追加します。保存後も見出しや収集結果を原文と照合すると、実際に保存された資料を確認できます。すべてのメニュー項目が見つかったと決めつけず、必要な範囲を見比べます。"
            },
            {
              "q": "埋め込みPDFと説明文を一緒に保存するには？",
              "a": "ファイル一括保存側でPDF本体URLやダウンロードリンクを確認し、取得できるPDFを別ファイルで保存します。説明はHTMLとして収集し、両方を併せて管理します。PDF本文はHTML本文へ統合されません。"
            },
            {
              "q": "無料版で1ページから試せますか？",
              "a": "はい。無料版は候補を探索し、選んだ1ページをHTML保存できます。Proでは複数ページ本文を選び、並べ替えて結合できます。認証・権限・安全上限は適用されます。"
            },
            {
              "q": "出典やマニュアルの版はどう確認しますか？",
              "a": "元ページの改訂日や版の表記を確認し、元URL・確認日とともに資料のタイトルやメモへ控えます。HTML全体の取得日やAI出力のページ別URL・取得日も照合に使えますが、マニュアルの版は利用者が確認します。"
            },
            {
              "q": "AIへ手順や条件の抽出を依頼できますか？",
              "a": "収集前にAI向け出力を有効にし、収集後にAI ZIPを保存して依頼文をコピーします。使う資料を選び、必要ならZIPを展開して対応ファイルを外部AIへ自分で渡します。回答は提供した原文と照合してください。"
            }
          ],
          "manual": {
            "patternsTitle": "3つの資料形式に合わせて保存する",
            "patterns": [
              [
                "章別HTMLの手引き",
                [
                  "手引き",
                  "準備",
                  "手順"
                ],
                "必要な章を選び、読む順番に並べてHTMLの資料集に。目次と本文検索から、確認したい箇所へ戻れます。"
              ],
              [
                "埋め込みPDF",
                [
                  "説明ページ",
                  "PDF本体",
                  "資料メモ"
                ],
                "PDF本体のURLやダウンロードリンクが取得できるか確認します。PDFはファイル一括保存側で保存し、説明ページのHTMLと併せて管理します。"
              ],
              [
                "階層メニューのナレッジ",
                [
                  "分野メニュー",
                  "記事A",
                  "記事B"
                ],
                "見つかった候補を元のメニューと照合して必要な記事を選び、順番を調整。保存結果を元の記事と見比べて確認します。"
              ]
            ],
            "organizeTitle": "あとで確認しやすい資料として管理する",
            "headers": [
              "資料",
              "管理のしかた"
            ],
            "rows": [
              [
                "HTMLの資料集",
                "取得したページ本文を、目次と検索で読み返します。必要な章が実際に保存されたか確認します。"
              ],
              [
                "PDF本体",
                "説明ページのHTMLと同じ資料一式として、別ファイルで保管します。HTMLの文書リンクは、PDF本文をページ本文に統合するものではありません。"
              ],
              [
                "資料メモ",
                "元URL・確認日・マニュアルに表記された版を控えます。版の記載が確認できない場合も、その旨を記録します。"
              ]
            ],
            "promptTitle": "集めた原文の範囲で質問する",
            "prompt": "この資料に書かれた手順・前提条件・必要書類を整理してください。根拠となる原文と出典URLを付け、見当たらない内容は推測せず「提供資料に記載なし」としてください。",
            "aiLink": "外部AIへ渡す資料と質問の準備を詳しく見る"
          }
        },
        "es": {
          "title": "Guardar manuales y páginas de conocimiento | Grab All Files",
          "desc": "Guarda manuales y artículos permitidos como referencia legible. Organiza capítulos HTML, PDF incrustados y artículos de menús, y prepara preguntas para IA.",
          "eyebrow": "Guardar manuales y conocimiento",
          "h1": "Reúne manuales y artículos de conocimiento para consultarlos.",
          "lead": "Lee juntos los capítulos útiles, encuentra procedimientos con índice y búsqueda y conserva los PDF originales junto a sus explicaciones. Usa material que puedas ver y guardar. Free guarda una página elegida; Pro combina varias.",
          "best": [
            "Consultar procedimientos de solicitud, documentos necesarios e instrucciones de uso.",
            "Organizar la explicación y el PDF original como materiales relacionados.",
            "Preparar fuentes seleccionadas para consultar pasos o condiciones con una IA externa."
          ],
          "steps": [
            "Abre una página que puedas ver y guardar con tu sesión normal del navegador. Después abre «Combinar páginas en HTML» en la extensión.",
            "Compara candidatas con el menú original y elige capítulos o artículos. Con Pro, elimina extras y ordena las páginas.",
            "Configura imágenes y documentos, recopila y guarda HTML. Para un PDF incrustado, verifica una URL o enlace de descarga accesible en el descargador y guarda el PDF aparte.",
            "Abre el HTML y usa índice y búsqueda. Compara los encabezados y resultados con las fuentes y revisa faltas o errores.",
            "Mantén HTML y PDF juntos. Anota URL originales, fecha de revisión y versión declarada. Para IA, exporta y entrega manualmente archivos aceptados y tu pregunta al servicio elegido."
          ],
          "faq": [
            {
              "q": "¿Qué hago si falta un capítulo o artículo?",
              "a": "Compara candidatas con el menú y añade las URL necesarias cuando corresponda. Tras guardar, compara encabezados y resultados con los originales para revisar lo obtenido sin asumir que se encontró todo."
            },
            {
              "q": "¿Cómo guardo un PDF incrustado y su explicación?",
              "a": "Comprueba la URL o enlace del PDF en el descargador y guarda el archivo accesible por separado. Recopila la explicación en HTML y conserva ambos juntos; el texto PDF no se integra en el HTML."
            },
            {
              "q": "¿Puedo probar una página gratis?",
              "a": "Sí. Free encuentra candidatas y guarda una página elegida en HTML. Pro permite seleccionar, ordenar y combinar varias. Se mantienen autenticación, permisos y límites de seguridad."
            },
            {
              "q": "¿Cómo identifico la fuente y versión?",
              "a": "Comprueba la versión indicada en la fuente y anótala junto con URL y fecha revisada. La fecha general del HTML y las URL y fechas por página de la salida IA ayudan a contrastar; debes confirmar la versión del manual."
            },
            {
              "q": "¿Puedo pedir a IA pasos o condiciones?",
              "a": "Activa la salida IA antes de recopilar y luego guarda el ZIP y copia la solicitud. Elige los archivos y entrégalos manualmente a tu IA externa, descomprimiendo el ZIP si hace falta. Verifica la respuesta con las fuentes."
            }
          ],
          "manual": {
            "patternsTitle": "Tres formatos y formas de organizarlos",
            "patterns": [
              [
                "Guía HTML por capítulos",
                [
                  "Guía",
                  "Preparación",
                  "Procedimiento"
                ],
                "Selecciona capítulos y ordénalos en una referencia HTML. El índice y la búsqueda ayudan a volver a la sección necesaria."
              ],
              [
                "PDF incrustado",
                [
                  "Explicación",
                  "PDF original",
                  "Notas"
                ],
                "Comprueba si puedes obtener la URL o el enlace del PDF. Guárdalo con el descargador de archivos y conserva el HTML explicativo a su lado."
              ],
              [
                "Artículos en menús jerárquicos",
                [
                  "Menú de temas",
                  "Artículo A",
                  "Artículo B"
                ],
                "Contrasta candidatas con el menú, elige artículos y ordénalos. Comprueba el resultado guardado con los originales."
              ]
            ],
            "organizeTitle": "Organiza el material para comprobarlo después",
            "headers": [
              "Material",
              "Cómo conservarlo"
            ],
            "rows": [
              [
                "Referencia HTML",
                "Lee los textos recopilados con índice y búsqueda. Comprueba qué secciones guardaste."
              ],
              [
                "PDF originales",
                "Guárdalos como archivos separados junto al HTML. Los enlaces del HTML no integran el texto del PDF en la página."
              ],
              [
                "Notas de referencia",
                "Anota URL, fecha de revisión y versión declarada. Indica cuando no se menciona una versión."
              ]
            ],
            "promptTitle": "Pregunta sobre el texto recopilado",
            "prompt": "Usando solo este material, enumera el procedimiento, requisitos previos y documentos necesarios. Cita los pasajes y URL fuente. Marca lo ausente como «no indicado en el material proporcionado», sin suponerlo.",
            "aiLink": "Cómo preparar archivos y preguntas para una IA externa"
          }
        },
        "fr": {
          "title": "Enregistrer manuels et pages de connaissances | Grab All Files",
          "desc": "Conservez les manuels et articles autorisés en référence lisible. Organisez chapitres HTML, PDF intégrés et articles de menus, puis préparez vos questions pour l’IA.",
          "eyebrow": "Enregistrer manuels et connaissances",
          "h1": "Réunir manuels et articles dans une référence facile à consulter.",
          "lead": "Lisez les chapitres utiles ensemble, retrouvez une procédure avec sommaire et recherche, et gardez les PDF avec leurs explications. Utilisez les documents que vous pouvez consulter et enregistrer. Free garde une page ; Pro en combine plusieurs.",
          "best": [
            "Relire démarches, pièces nécessaires et modes d’emploi ensemble.",
            "Organiser la page explicative et le PDF original comme documents associés.",
            "Préparer les sources choisies pour interroger une IA externe sur étapes ou conditions."
          ],
          "steps": [
            "Ouvrez une page que vous êtes autorisé à consulter et enregistrer avec votre session habituelle. Ouvrez ensuite «Regrouper les pages en HTML» dans l’extension.",
            "Comparez les candidates au menu original et choisissez les chapitres ou articles. Avec Pro, retirez les éléments inutiles et réordonnez-les.",
            "Réglez images et documents, collectez puis enregistrez le HTML. Pour un PDF intégré, vérifiez son URL ou lien de téléchargement accessible dans l’outil fichiers et enregistrez-le séparément.",
            "Ouvrez le HTML et utilisez sommaire et recherche. Comparez titres et résultats aux sources, puis vérifiez manques ou échecs.",
            "Gardez HTML et PDF ensemble. Notez URL sources, date de vérification et révision affichée. Pour l’IA, exportez et transmettez vous-même les fichiers acceptés et votre question au service choisi."
          ],
          "faq": [
            {
              "q": "Que faire si un chapitre ou article manque ?",
              "a": "Comparez les candidates au menu et ajoutez les URL nécessaires si possible. Après enregistrement, confrontez titres et résultats aux sources pour vérifier les documents obtenus sans supposer que tout a été trouvé."
            },
            {
              "q": "Comment garder un PDF intégré et son explication ?",
              "a": "Vérifiez l’URL ou lien PDF dans l’outil fichiers et enregistrez le fichier accessible séparément. Collectez l’explication en HTML et gérez les deux ensemble ; le texte PDF n’est pas fusionné dans le HTML."
            },
            {
              "q": "Puis-je essayer une page gratuitement ?",
              "a": "Oui. Free trouve les candidates et enregistre une page choisie en HTML. Pro sélectionne, réordonne et combine plusieurs pages. Authentification, permissions et limites de sécurité s’appliquent."
            },
            {
              "q": "Comment identifier source et révision ?",
              "a": "Vérifiez la révision affichée et notez-la avec URL et date de vérification. La date générale du HTML et les URL et dates par page de l’export IA aident à comparer ; la révision du manuel reste à confirmer."
            },
            {
              "q": "Puis-je demander des étapes ou conditions à l’IA ?",
              "a": "Activez l’export IA avant collecte, puis enregistrez le ZIP et copiez la demande. Choisissez les fichiers et transmettez-les vous-même à votre IA externe, après décompression si nécessaire. Vérifiez la réponse dans les sources."
            }
          ],
          "manual": {
            "patternsTitle": "Trois formats et leurs usages",
            "patterns": [
              [
                "Guide HTML par chapitres",
                [
                  "Guide",
                  "Préparation",
                  "Procédure"
                ],
                "Choisissez les chapitres et ordonnez-les dans une référence HTML. Sommaire et recherche facilitent les consultations ultérieures."
              ],
              [
                "PDF intégré",
                [
                  "Explication",
                  "PDF original",
                  "Notes"
                ],
                "Vérifiez si l’URL ou le lien du PDF est accessible. Enregistrez le PDF avec l’outil fichiers et conservez-le avec l’explication HTML."
              ],
              [
                "Articles dans un menu hiérarchique",
                [
                  "Menu des thèmes",
                  "Article A",
                  "Article B"
                ],
                "Comparez les candidates au menu, choisissez les articles et ordonnez-les. Vérifiez les contenus enregistrés face aux originaux."
              ]
            ],
            "organizeTitle": "Conserver des documents faciles à vérifier",
            "headers": [
              "Document",
              "Organisation"
            ],
            "rows": [
              [
                "Référence HTML",
                "Lisez les textes collectés avec sommaire et recherche. Vérifiez les sections effectivement enregistrées."
              ],
              [
                "PDF originaux",
                "Conservez-les en fichiers séparés avec le HTML. Les liens documentaires ne fusionnent pas le texte PDF dans la page."
              ],
              [
                "Notes de référence",
                "Notez URL, date de vérification et révision indiquée. Précisez si aucune révision n’est mentionnée."
              ]
            ],
            "promptTitle": "Interroger le texte collecté",
            "prompt": "À partir de ces documents uniquement, listez procédure, prérequis et pièces nécessaires. Citez les passages et URL sources. Indiquez «non précisé dans les documents fournis» pour les informations manquantes, sans les déduire.",
            "aiLink": "Préparer des fichiers et questions pour une IA externe"
          }
        },
        "de": {
          "title": "Handbücher und Wissensseiten zusammen speichern | Grab All Files",
          "desc": "Erlaubte Online-Handbücher und Wissensartikel als Referenz sichern. HTML-Kapitel, eingebettete PDFs und Menüartikel ordnen und Fragen für externe KI vorbereiten.",
          "eyebrow": "Handbücher und Wissensseiten sichern",
          "h1": "Handbücher und Wissensartikel als gut nutzbare Referenz sammeln.",
          "lead": "Lesen Sie benötigte Kapitel zusammen, finden Sie Abläufe mit Inhaltsverzeichnis und Suche und bewahren Sie PDFs neben Erklärungen auf. Nutzen Sie Material mit erlaubtem Lese- und Speicherzugriff. Free speichert eine Seite, Pro kombiniert mehrere.",
          "best": [
            "Antragsabläufe, erforderliche Unterlagen und Bedienungsanleitungen gemeinsam nachlesen.",
            "Erklärseite und Original-PDF als zusammengehörige Materialien ordnen.",
            "Ausgewählte Quellen für Fragen zu Schritten oder Bedingungen an externe KI vorbereiten."
          ],
          "steps": [
            "Öffnen Sie eine Seite mit erlaubtem Lese- und Speicherzugriff in Ihrer üblichen Browsersitzung. Öffnen Sie anschließend „Seiten als HTML bündeln“ in der Erweiterung.",
            "Vergleichen Sie Kandidaten mit dem Quellmenü und wählen Sie Kapitel oder Artikel. Mit Pro entfernen Sie Extras und ändern die Reihenfolge.",
            "Wählen Sie Bild- und Dokumentoptionen, sammeln und speichern Sie HTML. Prüfen Sie für eingebettete PDFs die erreichbare Datei-URL oder den Downloadlink im Dateiwerkzeug und speichern Sie das PDF separat.",
            "Öffnen Sie HTML mit Verzeichnis und Suche. Vergleichen Sie Überschriften und Ergebnisse mit den Quellen und prüfen Sie Lücken oder Fehler.",
            "Bewahren Sie HTML und PDFs zusammen auf. Notieren Sie Quell-URLs, Prüfdatum und angegebene Revision. Für KI exportieren Sie und übergeben passende Dateien und Fragen selbst an den gewählten Dienst."
          ],
          "faq": [
            {
              "q": "Was tun bei fehlenden Kapiteln oder Artikeln?",
              "a": "Vergleichen Sie Kandidaten mit dem Menü und ergänzen Sie benötigte URLs, soweit möglich. Vergleichen Sie nach dem Speichern Überschriften und Ergebnisse mit den Quellen, ohne anzunehmen, dass alles gefunden wurde."
            },
            {
              "q": "Wie sichere ich ein eingebettetes PDF mit Erklärung?",
              "a": "Prüfen Sie die PDF-URL oder den Downloadlink im Dateiwerkzeug und speichern Sie das erreichbare PDF separat. Sammeln Sie die Erklärung als HTML und verwalten Sie beides zusammen; PDF-Text wird nicht in das HTML eingefügt."
            },
            {
              "q": "Kann ich eine Seite kostenlos testen?",
              "a": "Ja. Free findet Kandidaten und speichert eine gewählte Seite als HTML. Pro wählt, ordnet und kombiniert mehrere Seiten. Anmelde-, Berechtigungs- und Sicherheitsgrenzen gelten."
            },
            {
              "q": "Wie erkenne ich Quelle und Revision?",
              "a": "Prüfen Sie die genannte Revision und notieren Sie sie mit URL und Prüfdatum. HTML-Erfassungsdatum und seitenbezogene URLs und Daten im KI-Export helfen bei der Prüfung; die Handbuchrevision bestätigen Sie selbst."
            },
            {
              "q": "Kann KI Schritte oder Bedingungen extrahieren?",
              "a": "Aktivieren Sie KI-Ausgabe vor der Sammlung, speichern Sie danach das ZIP und kopieren Sie die Anfrage. Übergeben Sie gewählte Dateien selbst an externe KI, bei Bedarf entpackt. Prüfen Sie die Antwort an den Quellen."
            }
          ],
          "manual": {
            "patternsTitle": "Drei Formate und passende Vorgehensweisen",
            "patterns": [
              [
                "HTML-Handbuch mit Kapiteln",
                [
                  "Handbuch",
                  "Vorbereitung",
                  "Ablauf"
                ],
                "Wählen und ordnen Sie benötigte Kapitel als HTML-Referenz. Verzeichnis und Suche helfen beim Nachschlagen."
              ],
              [
                "Eingebettetes PDF",
                [
                  "Erklärung",
                  "Original-PDF",
                  "Notizen"
                ],
                "Prüfen Sie die verfügbare PDF-URL oder den Downloadlink. Speichern Sie das PDF im Dateiwerkzeug und ordnen Sie es neben dem erklärenden HTML ein."
              ],
              [
                "Artikel in hierarchischen Menüs",
                [
                  "Themenmenü",
                  "Artikel A",
                  "Artikel B"
                ],
                "Vergleichen Sie Kandidaten mit dem Menü, wählen und ordnen Sie Artikel. Prüfen Sie die gespeicherten Ergebnisse an den Originalen."
              ]
            ],
            "organizeTitle": "Material für spätere Prüfungen ordnen",
            "headers": [
              "Material",
              "Aufbewahrung"
            ],
            "rows": [
              [
                "HTML-Referenz",
                "Gesammelte Texte mit Verzeichnis und Suche lesen. Tatsächlich gespeicherte Abschnitte prüfen."
              ],
              [
                "Original-PDFs",
                "Als eigene Dateien neben dem erklärenden HTML speichern. Dokumentlinks fügen PDF-Text nicht in den HTML-Inhalt ein."
              ],
              [
                "Referenznotizen",
                "Quell-URLs, Prüfdatum und genannte Revision notieren. Eine fehlende Revisionsangabe ebenfalls vermerken."
              ]
            ],
            "promptTitle": "Fragen zur gesammelten Formulierung stellen",
            "prompt": "Liste nur anhand dieses Materials Ablauf, Voraussetzungen und erforderliche Unterlagen auf. Nenne Quellenstellen und URLs. Markiere fehlende Angaben als ‚im bereitgestellten Material nicht angegeben‘ statt zu raten.",
            "aiLink": "Dateien und Fragen für externe KI vorbereiten"
          }
        },
        "it": {
          "title": "Salvare insieme manuali e pagine di conoscenza | Grab All Files",
          "desc": "Salva manuali e articoli consentiti come riferimento leggibile. Organizza capitoli HTML, PDF incorporati e articoli nei menu, e prepara domande per un’IA esterna.",
          "eyebrow": "Salvare manuali e pagine di conoscenza",
          "h1": "Riunisci manuali e articoli in un riferimento da consultare.",
          "lead": "Leggi insieme i capitoli utili, trova procedure con indice e ricerca e conserva i PDF accanto alle spiegazioni. Usa materiali che sei autorizzato a vedere e salvare. Free salva una pagina scelta; Pro combina più pagine.",
          "best": [
            "Consultare procedure di richiesta, documenti necessari e istruzioni operative insieme.",
            "Organizzare la pagina esplicativa e il PDF originale come materiali collegati.",
            "Preparare fonti selezionate per chiedere passi o condizioni a un’IA esterna."
          ],
          "steps": [
            "Apri una pagina che puoi vedere e salvare nella tua normale sessione del browser. Poi apri «Unisci pagine in HTML» nell’estensione.",
            "Confronta le candidate con il menu originale e scegli capitoli o articoli. Con Pro rimuovi gli extra e riordina le pagine.",
            "Imposta immagini e documenti, raccogli e salva HTML. Per PDF incorporati controlla URL o link di download accessibili nello strumento file e salva il PDF separatamente.",
            "Apri l’HTML e usa indice e ricerca. Confronta titoli e risultati con le fonti e controlla mancanze o errori.",
            "Conserva HTML e PDF insieme. Annota URL, data controllata e revisione dichiarata. Per IA esporta e fornisci manualmente file accettati e domanda al servizio scelto."
          ],
          "faq": [
            {
              "q": "Se manca un capitolo o articolo?",
              "a": "Confronta candidate e menu e aggiungi URL utili quando possibile. Dopo il salvataggio confronta titoli e risultati con le fonti per controllare il materiale ottenuto senza supporre che sia stato trovato tutto."
            },
            {
              "q": "Come salvo PDF incorporato e spiegazione?",
              "a": "Controlla URL o link PDF nello strumento file e salva il PDF accessibile separatamente. Raccogli la spiegazione in HTML e conserva entrambi insieme; il testo PDF non viene unito al corpo HTML."
            },
            {
              "q": "Posso provare una pagina gratis?",
              "a": "Sì. Free trova candidate e salva una pagina scelta in HTML. Pro seleziona, riordina e combina più pagine. Restano autenticazione, permessi e limiti di sicurezza."
            },
            {
              "q": "Come identifico fonte e revisione?",
              "a": "Controlla la revisione dichiarata e annotala con URL e data verificata. La data complessiva HTML e URL e date per pagina dell’output IA aiutano il controllo; devi confermare la revisione del manuale."
            },
            {
              "q": "Posso chiedere all’IA passi o condizioni?",
              "a": "Attiva l’output IA prima della raccolta, poi salva lo ZIP e copia la richiesta. Scegli file e forniscili manualmente all’IA esterna, decomprimendo se serve. Verifica la risposta nelle fonti."
            }
          ],
          "manual": {
            "patternsTitle": "Tre formati e modi per raccoglierli",
            "patterns": [
              [
                "Guida HTML a capitoli",
                [
                  "Guida",
                  "Preparazione",
                  "Procedura"
                ],
                "Scegli e ordina i capitoli utili come riferimento HTML. Indice e ricerca aiutano a tornare alla sezione necessaria."
              ],
              [
                "PDF incorporato",
                [
                  "Spiegazione",
                  "PDF originale",
                  "Note"
                ],
                "Controlla se URL o link del PDF sono disponibili. Salva il PDF nello strumento file e conservalo con l’HTML esplicativo."
              ],
              [
                "Articoli in menu gerarchici",
                [
                  "Menu temi",
                  "Articolo A",
                  "Articolo B"
                ],
                "Confronta candidate e menu, scegli articoli e riordinali. Verifica i risultati salvati con gli originali."
              ]
            ],
            "organizeTitle": "Organizzare materiali facili da verificare",
            "headers": [
              "Materiale",
              "Conservazione"
            ],
            "rows": [
              [
                "Riferimento HTML",
                "Leggi i testi raccolti con indice e ricerca. Controlla le sezioni effettivamente salvate."
              ],
              [
                "PDF originali",
                "Conservali come file separati accanto all’HTML. I link ai documenti non integrano il testo PDF nel corpo HTML."
              ],
              [
                "Note di riferimento",
                "Annota URL, data controllata e revisione indicata. Segnala quando la revisione non è dichiarata."
              ]
            ],
            "promptTitle": "Fare domande sul testo raccolto",
            "prompt": "Usando solo questi materiali, elenca procedura, prerequisiti e documenti necessari. Cita passaggi e URL fonte. Segna le informazioni mancanti come «non indicate nel materiale fornito», senza indovinarle.",
            "aiLink": "Preparare file e domande per un’IA esterna"
          }
        },
        "ko": {
          "title": "업무 매뉴얼과 지식 페이지를 함께 저장하기 | Grab All Files",
          "desc": "열람·저장이 허용된 업무 매뉴얼과 지식 문서를 읽기 쉬운 자료집으로 정리합니다. 장별 HTML, 삽입 PDF, 메뉴형 기사를 저장하고 외부 AI 질문을 준비하세요.",
          "eyebrow": "업무 매뉴얼·지식 페이지 저장",
          "h1": "업무 매뉴얼과 지식 문서를 다시 읽기 좋은 자료집으로.",
          "lead": "필요한 장과 기사를 모아 읽고 목차와 검색으로 절차를 찾으세요. 설명 페이지와 PDF 원본을 함께 관리합니다. 열람·저장이 허용된 자료를 사용하세요. Free는 선택한 1페이지를 저장하고 Pro는 여러 페이지 본문을 결합합니다.",
          "best": [
            "신청 절차·필요 서류 안내·조작 매뉴얼을 함께 참고합니다.",
            "설명 페이지와 PDF 원본을 관련 자료로 정리합니다.",
            "선택한 원문으로 외부 AI에 절차나 조건 추출을 요청할 준비를 합니다."
          ],
          "steps": [
            "열람·저장이 허용된 시작 페이지를 평소 브라우저 로그인 상태에서 엽니다. 이어서 확장 프로그램의 “페이지를 HTML로 합치기”를 엽니다.",
            "후보를 원래 메뉴와 비교하고 필요한 장과 기사를 선택합니다. Pro에서는 불필요한 항목을 빼고 순서를 바꿉니다.",
            "이미지·링크 문서 설정을 선택하고 수집해 HTML을 저장합니다. 삽입 PDF는 파일 다운로드 도구에서 접근 가능한 PDF URL이나 다운로드 링크를 확인해 별도 저장합니다.",
            "HTML을 열어 목차와 검색으로 읽습니다. 저장된 제목과 결과를 원문과 비교하고 부족하거나 실패한 자료를 확인합니다.",
            "HTML과 PDF를 함께 관리하며 원래 URL·확인일·표기된 버전을 자료 메모에 기록합니다. AI 사용 시 자료를 내보내고 지원 파일과 질문을 외부 AI에 직접 전달합니다."
          ],
          "faq": [
            {
              "q": "필요한 장이나 기사가 후보에 없다면?",
              "a": "후보와 원래 메뉴를 비교해 필요하면 URL을 추가합니다. 저장 후 제목과 수집 결과도 원문과 비교하면 실제 저장한 자료를 확인할 수 있습니다. 모든 메뉴 항목을 찾았다고 가정하지 않습니다."
            },
            {
              "q": "삽입 PDF와 설명을 함께 저장하려면?",
              "a": "파일 다운로드 도구에서 PDF URL이나 다운로드 링크를 확인해 접근 가능한 PDF를 별도 저장합니다. 설명은 HTML로 수집하고 함께 관리하며 PDF 본문은 HTML에 통합되지 않습니다."
            },
            {
              "q": "Free로 1페이지부터 시도할 수 있나요?",
              "a": "네. Free는 후보를 찾고 선택한 1페이지를 HTML로 저장합니다. Pro는 여러 본문을 선택·정렬·결합합니다. 인증·권한·안전 제한은 적용됩니다."
            },
            {
              "q": "출처와 매뉴얼 버전은 어떻게 확인하나요?",
              "a": "원래 페이지의 개정일·버전 표기를 확인해 URL·확인일과 함께 제목이나 메모에 적습니다. HTML 전체 수집일과 AI 출력의 페이지별 URL·수집일도 대조에 쓸 수 있지만 매뉴얼 버전은 직접 확인합니다."
            },
            {
              "q": "AI에 절차나 조건 추출을 요청할 수 있나요?",
              "a": "수집 전에 AI 출력을 켜고 수집 후 AI ZIP을 저장해 요청문을 복사합니다. 파일을 골라 필요하면 압축을 풀고 외부 AI에 직접 전달합니다. 답변은 제공한 원문과 비교하세요."
            }
          ],
          "manual": {
            "patternsTitle": "세 가지 자료 형식에 맞춰 저장하기",
            "patterns": [
              [
                "장별 HTML 안내서",
                [
                  "안내서",
                  "준비",
                  "절차"
                ],
                "필요한 장을 골라 순서대로 HTML 자료집을 만듭니다. 목차와 본문 검색으로 필요한 부분을 다시 찾습니다."
              ],
              [
                "삽입 PDF",
                [
                  "설명 페이지",
                  "PDF 원본",
                  "자료 메모"
                ],
                "PDF URL이나 다운로드 링크를 얻을 수 있는지 확인합니다. 파일 다운로드 도구로 PDF를 저장하고 설명 HTML과 함께 관리합니다."
              ],
              [
                "계층 메뉴의 지식 기사",
                [
                  "분야 메뉴",
                  "기사 A",
                  "기사 B"
                ],
                "발견된 후보를 메뉴와 비교해 필요한 기사를 골라 순서를 조정합니다. 저장 결과를 원래 기사와 대조합니다."
              ]
            ],
            "organizeTitle": "나중에 확인하기 쉬운 자료로 관리하기",
            "headers": [
              "자료",
              "관리 방법"
            ],
            "rows": [
              [
                "HTML 자료집",
                "수집한 페이지 본문을 목차와 검색으로 읽습니다. 필요한 장이 실제 저장됐는지 확인합니다."
              ],
              [
                "PDF 원본",
                "설명 HTML과 함께 별도 파일로 보관합니다. HTML 문서 링크는 PDF 본문을 HTML에 통합하지 않습니다."
              ],
              [
                "자료 메모",
                "원래 URL·확인일·매뉴얼에 표기된 버전을 적습니다. 버전 표기가 없을 때도 기록합니다."
              ]
            ],
            "promptTitle": "수집한 원문의 범위에서 질문하기",
            "prompt": "이 자료에 명시된 절차·전제 조건·필요 서류를 정리해 주세요. 근거 원문과 출처 URL을 붙이고 없는 정보는 추측하지 말고 ‘제공 자료에 명시되지 않음’으로 표시해 주세요.",
            "aiLink": "외부 AI에 전달할 자료와 질문 준비 방법"
          }
        },
        "pt_BR": {
          "title": "Salvar manuais e páginas de conhecimento juntos | Grab All Files",
          "desc": "Salve manuais e artigos permitidos como referência legível. Organize capítulos HTML, PDFs incorporados e artigos de menus e prepare perguntas para IA externa.",
          "eyebrow": "Salvar manuais e conhecimento",
          "h1": "Reúna manuais e artigos em uma referência fácil de consultar.",
          "lead": "Leia capítulos úteis juntos, encontre procedimentos com sumário e busca e guarde os PDFs com suas explicações. Use materiais que você pode visualizar e salvar. O Free salva uma página escolhida; o Pro reúne várias.",
          "best": [
            "Consultar procedimentos de solicitação, documentos necessários e instruções operacionais juntos.",
            "Organizar a página explicativa e o PDF original como materiais relacionados.",
            "Preparar fontes escolhidas para perguntar a uma IA externa sobre etapas ou condições."
          ],
          "steps": [
            "Abra uma página que você pode visualizar e salvar na sessão normal do navegador. Depois abra “Juntar páginas em HTML” na extensão.",
            "Compare candidatas com o menu original e escolha capítulos ou artigos. Com Pro remova extras e ajuste a ordem.",
            "Escolha imagens e documentos, colete e salve HTML. Para PDF incorporado, confira URL ou link acessível na ferramenta de arquivos e salve o PDF separadamente.",
            "Abra o HTML e use sumário e busca. Compare títulos e resultados com as fontes e verifique lacunas ou falhas.",
            "Mantenha HTML e PDFs juntos. Anote URLs, data conferida e revisão declarada. Para IA exporte e entregue manualmente arquivos aceitos e sua pergunta ao serviço escolhido."
          ],
          "faq": [
            {
              "q": "E se faltar um capítulo ou artigo?",
              "a": "Compare candidatas com o menu e acrescente URLs úteis quando apropriado. Depois de salvar, confronte títulos e resultados com as fontes para conferir o que obteve sem presumir que tudo foi encontrado."
            },
            {
              "q": "Como guardo PDF incorporado e explicação?",
              "a": "Confira URL ou link do PDF na ferramenta de arquivos e salve o PDF acessível separadamente. Colete a explicação em HTML e gerencie ambos juntos; o texto PDF não é integrado ao HTML."
            },
            {
              "q": "Posso testar uma página no Free?",
              "a": "Sim. O Free encontra candidatas e salva uma página escolhida em HTML. O Pro seleciona, reordena e combina várias. Autenticação, permissões e limites de segurança se aplicam."
            },
            {
              "q": "Como identifico fonte e revisão?",
              "a": "Confira a revisão declarada e registre com URL e data verificada. A data geral do HTML e URLs e datas por página na saída IA ajudam na conferência; confirme você mesmo a revisão do manual."
            },
            {
              "q": "Posso pedir etapas ou condições à IA?",
              "a": "Ative a saída IA antes da coleta, depois salve o ZIP e copie o pedido. Escolha arquivos e entregue manualmente à IA externa, extraindo o ZIP se preciso. Confira a resposta nas fontes."
            }
          ],
          "manual": {
            "patternsTitle": "Três formatos e formas de coletá-los",
            "patterns": [
              [
                "Guia HTML por capítulos",
                [
                  "Guia",
                  "Preparação",
                  "Procedimento"
                ],
                "Escolha capítulos e ordene-os em uma referência HTML. Sumário e busca ajudam a voltar ao trecho necessário."
              ],
              [
                "PDF incorporado",
                [
                  "Explicação",
                  "PDF original",
                  "Notas"
                ],
                "Confira se a URL ou o link do PDF pode ser obtido. Salve o PDF na ferramenta de arquivos e guarde-o com o HTML explicativo."
              ],
              [
                "Artigos em menus hierárquicos",
                [
                  "Menu de temas",
                  "Artigo A",
                  "Artigo B"
                ],
                "Compare candidatas com o menu, escolha artigos e ajuste a ordem. Confira os resultados salvos com os originais."
              ]
            ],
            "organizeTitle": "Organize materiais fáceis de conferir depois",
            "headers": [
              "Material",
              "Organização"
            ],
            "rows": [
              [
                "Referência HTML",
                "Leia os textos coletados com sumário e busca. Confira as seções realmente salvas."
              ],
              [
                "PDFs originais",
                "Guarde-os como arquivos separados com o HTML. Links de documentos não integram o texto PDF ao corpo HTML."
              ],
              [
                "Notas de referência",
                "Anote URLs, data conferida e revisão indicada. Registre quando a revisão não está declarada."
              ]
            ],
            "promptTitle": "Pergunte sobre o texto coletado",
            "prompt": "Usando apenas este material, liste procedimento, pré-requisitos e documentos necessários. Cite trechos e URLs fonte. Marque informações ausentes como ‘não informado no material fornecido’, sem adivinhar.",
            "aiLink": "Preparar arquivos e perguntas para análise em IA externa"
          }
        },
        "zh_CN": {
          "title": "集中保存业务手册与知识页面 | Grab All Files",
          "desc": "将允许查看与保存的业务手册和知识文章整理为易读资料集。按章节HTML、嵌入PDF与层级菜单文章选择保存方式，并准备向外部AI提问。",
          "eyebrow": "保存业务手册与知识文章",
          "h1": "将业务手册与知识文章整理为便于查阅的资料集。",
          "lead": "把需要的章节和文章放在一起阅读，通过目录和正文搜索找到操作步骤，并将PDF原件与说明页面一起管理。使用允许查看和保存的资料。Free保存所选1页，Pro可合并多个页面正文。",
          "best": [
            "一起查阅申请步骤、所需材料说明与操作手册。",
            "将说明页面与PDF原件整理为相关资料。",
            "选择原文资料，为向外部AI提取步骤或条件作准备。"
          ],
          "steps": [
            "在正常浏览器登录状态下打开允许查看与保存的起始页面。然后打开扩展中的“将网页合并为 HTML”。",
            "对照原始菜单检查候选列表，选择所需章节或文章。Pro可移除多余候选并调整顺序。",
            "选择图片与链接文档设置，收集并保存HTML。对嵌入PDF，请在文件下载工具中确认可访问的PDF URL或下载链接，再单独保存PDF原件。",
            "打开HTML使用目录和搜索阅读。将保存的标题与结果同原文核对，检查缺少或获取失败的资料。",
            "将HTML与PDF一起管理，在资料备注中记录原URL、确认日期与手册标明的版本。使用AI时导出资料，手动将支持的文件和问题交给所选外部AI。"
          ],
          "faq": [
            {
              "q": "所需章节或文章没有出现在候选中怎么办？",
              "a": "将候选列表与原始菜单对照，适当补充所需URL。保存后也核对标题与收集结果，检查实际保存的资料，不假定所有菜单项目都已被找到。"
            },
            {
              "q": "如何一起保存嵌入PDF与说明？",
              "a": "在文件下载工具中确认PDF URL或下载链接，单独保存可获取的PDF。将说明收集为HTML并一起管理；PDF正文不会合并进HTML正文。"
            },
            {
              "q": "可以用Free从1页开始确认吗？",
              "a": "可以。Free查找候选并保存所选1页为HTML。Pro可选择、排序与合并多个页面正文。仍适用验证、权限与安全上限。"
            },
            {
              "q": "如何确认来源与手册版本？",
              "a": "检查原页面标明的修订日期或版本，连同URL与确认日期记在标题或备注中。HTML整体采集日期与AI输出的页面URL、采集日期也可帮助核对，但手册版本由您确认。"
            },
            {
              "q": "能请AI提取步骤或条件吗？",
              "a": "收集前启用AI输出，收集后保存AI ZIP并复制请求文字。选择资料，必要时解压ZIP，手动将支持的文件交给外部AI。请将回答与提供的原文核对。"
            }
          ],
          "manual": {
            "patternsTitle": "根据三种资料格式选择保存方式",
            "patterns": [
              [
                "按章节HTML手册",
                [
                  "手册",
                  "准备",
                  "步骤"
                ],
                "选择所需章节并按阅读顺序整理为HTML资料集。通过目录和正文搜索返回需要确认的段落。"
              ],
              [
                "嵌入PDF",
                [
                  "说明页面",
                  "PDF原件",
                  "资料备注"
                ],
                "确认是否能取得PDF URL或下载链接。使用文件下载工具保存PDF，再与说明HTML一起管理。"
              ],
              [
                "层级菜单中的知识文章",
                [
                  "主题菜单",
                  "文章A",
                  "文章B"
                ],
                "对照菜单检查找到的候选，选择相关文章并调整顺序。将保存结果与原始文章核对。"
              ]
            ],
            "organizeTitle": "整理为以后便于核对的资料",
            "headers": [
              "资料",
              "管理方式"
            ],
            "rows": [
              [
                "HTML资料集",
                "通过目录和搜索阅读已获取的页面正文，确认需要的章节实际保存了哪些。"
              ],
              [
                "PDF原件",
                "作为独立文件与说明HTML一起保管。HTML中的文档链接不会将PDF正文合并进页面正文。"
              ],
              [
                "资料备注",
                "记录原URL、确认日期与手册标明的版本。没有明确版本时也记录这一情况。"
              ]
            ],
            "promptTitle": "依据收集的原文提问",
            "prompt": "请仅根据这些资料整理步骤、前提条件与所需材料。引用支持的原文和来源URL。找不到的信息请标为“所提供资料中未记载”，不要推测。",
            "aiLink": "了解如何准备交给外部AI的资料与问题"
          }
        },
        "zh_TW": {
          "title": "集中儲存業務手冊與知識頁面 | Grab All Files",
          "desc": "將允許查看與儲存的業務手冊及知識文章整理為易讀資料集。依章節HTML、內嵌PDF與階層選單文章選擇儲存方式，並準備向外部AI提問。",
          "eyebrow": "儲存業務手冊與知識文章",
          "h1": "將業務手冊與知識文章整理為便於查閱的資料集。",
          "lead": "把需要的章節與文章一起閱讀，透過目錄與本文搜尋找到操作步驟，並將PDF原件與說明頁面一起管理。使用允許查看與儲存的資料。Free儲存所選1頁，Pro可合併多個頁面本文。",
          "best": [
            "一起查閱申請步驟、所需文件說明與操作手冊。",
            "將說明頁面與PDF原件整理為相關資料。",
            "選擇原文資料，為向外部AI擷取步驟或條件作準備。"
          ],
          "steps": [
            "在平常瀏覽器登入狀態下開啟允許查看與儲存的起始頁面。接著開啟擴充功能中的「將網頁合併為 HTML」。",
            "對照原始選單檢查候選清單，選擇所需章節或文章。Pro可移除多餘候選並調整順序。",
            "選擇圖片與連結文件設定，收集並儲存HTML。內嵌PDF請在檔案下載工具中確認可存取的PDF URL或下載連結，再單獨儲存PDF原件。",
            "開啟HTML使用目錄與搜尋閱讀。將儲存的標題及結果與原文核對，檢查缺少或取得失敗的資料。",
            "將HTML與PDF一起管理，在資料備註中記錄原URL、確認日期及手冊標明的版本。使用AI時匯出資料，手動將支援的檔案與問題交給所選外部AI。"
          ],
          "faq": [
            {
              "q": "所需章節或文章未出現在候選中怎麼辦？",
              "a": "將候選清單與原始選單對照，適當補充所需URL。儲存後也核對標題及收集結果，檢查實際儲存的資料，不假定所有選單項目都已被找到。"
            },
            {
              "q": "如何一起儲存內嵌PDF與說明？",
              "a": "在檔案下載工具中確認PDF URL或下載連結，單獨儲存可取得的PDF。將說明收集為HTML並一起管理；PDF本文不會合併進HTML本文。"
            },
            {
              "q": "可以用Free從1頁開始確認嗎？",
              "a": "可以。Free尋找候選並儲存所選1頁為HTML。Pro可選擇、排序及合併多個頁面本文。仍適用驗證、權限與安全上限。"
            },
            {
              "q": "如何確認來源與手冊版本？",
              "a": "檢查原頁面標明的修訂日期或版本，連同URL與確認日期記在標題或備註中。HTML整體擷取日期與AI輸出的頁面URL、擷取日期也可協助核對，但手冊版本由您確認。"
            },
            {
              "q": "能請AI擷取步驟或條件嗎？",
              "a": "收集前啟用AI輸出，收集後儲存AI ZIP並複製請求文字。選擇資料，需要時解壓縮ZIP，手動將支援的檔案交給外部AI。請將回答與提供的原文核對。"
            }
          ],
          "manual": {
            "patternsTitle": "依三種資料格式選擇儲存方式",
            "patterns": [
              [
                "按章節HTML手冊",
                [
                  "手冊",
                  "準備",
                  "步驟"
                ],
                "選擇所需章節並按閱讀順序整理為HTML資料集。透過目錄與本文搜尋返回需要確認的段落。"
              ],
              [
                "內嵌PDF",
                [
                  "說明頁面",
                  "PDF原件",
                  "資料備註"
                ],
                "確認是否能取得PDF URL或下載連結。使用檔案下載工具儲存PDF，再與說明HTML一起管理。"
              ],
              [
                "階層選單中的知識文章",
                [
                  "主題選單",
                  "文章A",
                  "文章B"
                ],
                "對照選單檢查找到的候選，選擇相關文章並調整順序。將儲存結果與原始文章核對。"
              ]
            ],
            "organizeTitle": "整理為日後便於核對的資料",
            "headers": [
              "資料",
              "管理方式"
            ],
            "rows": [
              [
                "HTML資料集",
                "透過目錄與搜尋閱讀已取得的頁面本文，確認需要的章節實際儲存了哪些。"
              ],
              [
                "PDF原件",
                "作為獨立檔案與說明HTML一起保管。HTML中的文件連結不會將PDF本文合併進頁面本文。"
              ],
              [
                "資料備註",
                "記錄原URL、確認日期及手冊標明的版本。沒有明確版本時也記錄此情況。"
              ]
            ],
            "promptTitle": "依據收集的原文提問",
            "prompt": "請僅依據這些資料整理步驟、前提條件及所需文件。引用支持的原文與來源URL。找不到的資訊請標為「提供資料中未記載」，不要推測。",
            "aiLink": "了解如何準備交給外部AI的資料與問題"
          }
        }
      }
    },
    "web-pages-for-reading-and-ai-analysis": {
      "path": "web-pages-for-reading-and-ai-analysis.html",
      "related": [
        "combine-web-pages-into-one-html",
        "download-all-pdfs"
      ],
      "copy": {
        "en": {
          "title": "Combine web pages to read & prepare AI inputs | Grab All Files",
          "desc": "Collect web information as readable HTML, or prepare source-tracked files for summarising, comparing and extracting conditions in an external AI tool.",
          "eyebrow": "Collect, read & analyse with AI",
          "h1": "Collect web information to read—or prepare it for AI analysis.",
          "lead": "Save one chosen page with Free, or combine several into one readable HTML with Pro. Prepare source-tracked files for summaries, comparisons and condition extraction. Material preparation happens on your device; analysis happens in the external AI service you choose.",
          "best": [
            "Compare published insurance-product conditions using the wording you collected.",
            "Read several manual sections together before asking about a procedure.",
            "Organise public-scheme information and identify stated requirements and dates."
          ],
          "steps": [
            "Open a permitted source page and start “Combine pages into HTML”. Review the related candidates and select only the material you need.",
            "Choose image and linked-document settings. For AI output, enable “AI analysis data (Markdown with sources)” before collecting. Collect and save the HTML; read it with the table of contents and text search.",
            "After collection, use “Save AI analysis ZIP” and “Copy AI request text”. Review the files and extract the ZIP if your AI service needs individual files.",
            "Manually give supported files and your question to an external AI tool. Check its answer against the source wording and capture dates."
          ],
          "faq": [
            {
              "q": "Does Grab All Files analyse or upload my information to AI?",
              "a": "No. Collection and export run on your device. You save the AI ZIP, copy the request and decide which files to pass to an external AI tool. Its supported formats and privacy settings apply."
            },
            {
              "q": "Which pages and documents can I use?",
              "a": "Use pages you are allowed to access. Successfully read text from selected linked documents, such as supported PDF, text, CSV, Word or Excel files, can be included in AI output. Not every document or image can be read; review failures and missing content."
            },
            {
              "q": "Can I try this with the Free plan?",
              "a": "Free discovers candidates and saves exactly one chosen page as HTML. Pro lets you select and combine multiple page bodies. Authentication, permissions and safety limits still apply."
            },
            {
              "q": "Which file formats and sizes should I give to AI?",
              "a": "Support varies. Extract the ZIP and provide accepted files if needed. The default 25 MB setting is a Markdown-text splitting target, not a guarantee of total ZIP size. Confirm the AI service’s upload limits."
            },
            {
              "q": "How do I check an AI answer?",
              "a": "Follow the source URLs and captured_at values in the AI output, then compare the answer with the actual wording and current source. Missing material does not prove that a condition or exception is absent."
            }
          ],
          "guide": {
            "title": "Two ways to use the same collected information",
            "modes": [
              [
                "Read and revisit",
                "Use the HTML table of contents to jump to a section and search words across the collected material. Revisit the saved information whenever you need it."
              ],
              [
                "Analyse with an external AI tool",
                "Use source-tracked material and the request text to ask an external AI tool for summaries, comparisons or condition extraction. Select the files you need and reuse the same material with different questions."
              ]
            ],
            "examplesTitle": "Ask concrete questions about your material",
            "examples": [
              [
                "Insurance conditions",
                "Compare eligibility, exclusions and exceptions stated in these documents. Cite the source URL for each finding and mark missing information as ‘not stated in the supplied material’."
              ],
              [
                "Manuals",
                "List the steps and prerequisites for this task. Identify where the manuals disagree and cite the relevant source passages."
              ],
              [
                "Public schemes",
                "Extract the stated eligibility, documents and deadlines into a comparison table. Include source URLs and capture dates; check the current official page before acting."
              ]
            ],
            "formatsTitle": "Files for reading, AI input and source checking",
            "headers": [
              "Output",
              "How to use it"
            ],
            "rows": [
              [
                "HTML",
                "Read with a table of contents and text search. Linked documents remain links; their text is not merged into the HTML."
              ],
              [
                "Markdown / JSONL / manifest",
                "AI inputs include source_url and captured_at. Markdown carries readable text; JSONL organises headings and the manifest lists the material."
              ],
              [
                "CSV / JSON tables",
                "With per-page or full-package output selected and table export enabled, meaningful HTML tables can be extracted within supported limits. Layout tables are excluded; review the result."
              ]
            ]
          }
        },
        "ja": {
          "title": "複数のWebページをまとめて読む・AI分析用の資料を作る | Grab All Files",
          "desc": "Web情報を集めてHTMLで読み返す。AI向け資料を出典付きで書き出し、外部AIで要約・比較・条件抽出する手順と質問例を紹介します。",
          "eyebrow": "集めて読む・AIで分析する",
          "h1": "Web情報を集めて読む。AIへ渡して分析する。",
          "lead": "必要なWeb情報を集めて読む。Proなら複数ページの本文を1つのHTMLにまとめられます。WebページをAIに読み込ませる準備として資料を書き出し、外部AIに要約・比較・条件抽出を依頼できます。資料作成は端末内、分析は選んだAIサービスで行います。",
          "best": [
            "公開されている保険商品の条件を、集めた原文に沿って比較する。",
            "複数のマニュアルをまとめて読み、作業手順を確認する。",
            "公開制度の案内を整理し、記載された要件や日付を調べる。"
          ],
          "steps": [
            "閲覧が許可された起点ページを開き、「ページをHTMLにまとめる」を開始。候補一覧を確認し、必要な資料だけを選びます。",
            "画像・リンク文書の設定を選び、AIで使う場合は収集前に「AI分析用データ（Markdown・出典付き）」を有効にします。収集してHTMLを保存し、目次と本文検索で読み返します。",
            "収集完了後に「AI分析用ZIPを保存」と「AIへの依頼文をコピー」を使い、中身を確認します。AIサービスが個別ファイルを求める場合はZIPを展開します。",
            "対応するファイルと質問を外部AIへ自分で渡します。回答は原文・出典・取得日時と照らし合わせて確認します。"
          ],
          "faq": [
            {
              "q": "拡張機能がAI分析やAIへの送信も行いますか？",
              "a": "行いません。収集と出力は端末内で処理します。AI ZIPを保存し、依頼文をコピーして、外部AIへ渡すファイルを利用者が選びます。AI側の対応形式とプライバシー設定を確認してください。"
            },
            {
              "q": "どのページや文書を資料にできますか？",
              "a": "閲覧が許可されたページが対象です。選択したリンク先文書のうち、対応するPDF・テキスト・CSV・Word・Excelなどで読取に成功した本文はAI出力へ含められます。すべての文書や画像を読めるわけではないため、失敗や不足を確認してください。"
            },
            {
              "q": "無料版でも試せますか？",
              "a": "無料版は候補を探索し、選んだ1ページだけをHTML保存できます。Proでは複数ページの本文を選んで結合できます。認証・権限・安全上限は適用されます。"
            },
            {
              "q": "AIに渡すファイルの形式とサイズは？",
              "a": "AIサービスによって異なります。必要ならZIPを展開し、対応するファイルを渡してください。既定の25MBはMarkdown本文の分割目安で、ZIP全体のサイズ保証ではありません。AI側のアップロード制限も確認します。"
            },
            {
              "q": "AIの回答はどう確認しますか？",
              "a": "AI出力のsource_urlとcaptured_atを手掛かりに、原文と最新の掲載情報を確認します。資料に見当たらないことだけで、条件や例外が存在しないとは判断しません。"
            }
          ],
          "guide": {
            "title": "集めた情報を、2つの用途で使う",
            "modes": [
              [
                "読む・読み返す",
                "HTMLの目次から必要な箇所へ移動し、資料全体から語句を検索して読み返せます。保存した資料を繰り返し参照できます。"
              ],
              [
                "外部AIで分析する",
                "出典付きの資料と依頼文を使い、外部AIへ要約・比較・条件抽出を依頼できます。使う資料を選び、質問を変えて同じ資料を活用できます。"
              ]
            ],
            "examplesTitle": "資料の範囲を決めて、具体的に質問する",
            "examples": [
              [
                "保険商品の条件",
                "この資料に記載された加入条件・免責・例外を比較してください。各項目に出典URLを付け、資料に見当たらない内容は「提供資料に記載なし」としてください。"
              ],
              [
                "マニュアル",
                "この作業の手順と前提条件を整理してください。資料間で説明が異なる箇所は、該当する原文と出典を示してください。"
              ],
              [
                "公開制度",
                "記載された対象条件・必要書類・期限を比較表にしてください。出典URLと取得日時を付け、利用前には最新の公式ページを確認します。"
              ]
            ],
            "formatsTitle": "読む資料・AIに渡す資料・出典確認の形式",
            "headers": [
              "出力",
              "使い方"
            ],
            "rows": [
              [
                "HTML",
                "目次と本文検索で読み返します。リンク文書はリンクとして残り、その本文はHTMLに統合されません。"
              ],
              [
                "Markdown / JSONL / manifest",
                "AI向け出力にはsource_urlとcaptured_atが記録されます。Markdownは本文、JSONLは見出し単位の情報、manifestは資料一覧の確認に使えます。"
              ],
              [
                "表のCSV / JSON",
                "ページ別／完全パッケージを選び、表の出力を有効にした場合に、意味のあるHTML表を対応範囲・上限内で抽出できます。レイアウト用の表は除外されるため、結果を確認してください。"
              ]
            ]
          }
        },
        "es": {
          "title": "Unir páginas para leer y preparar el análisis con IA | Grab All Files",
          "desc": "Recopila información web en HTML legible o prepara archivos con fuentes para resumir, comparar y extraer condiciones en una herramienta de IA externa.",
          "eyebrow": "Recopilar, leer y analizar con IA",
          "h1": "Recopila información web para leerla o analizarla con IA.",
          "lead": "Guarda una página elegida con Free o combina varias en un HTML con Pro. Prepara archivos con fuentes para resumir, comparar y extraer condiciones. Los documentos se preparan en tu dispositivo; el análisis se realiza en la IA externa que elijas.",
          "best": [
            "Comparar condiciones publicadas de seguros según los textos recopilados.",
            "Leer secciones de manuales juntas y consultar un procedimiento.",
            "Organizar información de programas públicos y sus requisitos y fechas."
          ],
          "steps": [
            "Abre una página a la que tengas acceso y elige combinar páginas en HTML. Revisa las candidatas y selecciona el material necesario.",
            "Elige opciones de imágenes y documentos. Para IA, activa «Datos para análisis con IA (Markdown con fuentes)» antes de recopilar. Guarda el HTML y léelo con el índice y la búsqueda.",
            "Tras recopilar, usa «Guardar ZIP de análisis IA» y «Copiar petición para la IA». Revisa los archivos y descomprime el ZIP si la IA necesita archivos individuales.",
            "Entrega manualmente archivos compatibles y tu pregunta a una IA externa. Verifica la respuesta con el texto fuente y las fechas de captura."
          ],
          "faq": [
            {
              "q": "¿La extensión analiza o envía información a la IA?",
              "a": "No. Recopila y exporta en tu dispositivo. Guardas el ZIP, copias la solicitud y decides qué archivos enviar a una IA externa según sus formatos y privacidad."
            },
            {
              "q": "¿Qué páginas y documentos puedo usar?",
              "a": "Páginas a las que tengas acceso. El texto leído correctamente de documentos enlazados compatibles, como PDF, texto, CSV, Word o Excel, puede incluirse en la salida para IA. Revisa errores y contenido faltante; no todos los documentos o imágenes se pueden leer."
            },
            {
              "q": "¿Puedo probarlo gratis?",
              "a": "Free descubre candidatas y guarda exactamente una página elegida como HTML. Pro selecciona y combina varias. Se mantienen los límites de seguridad, permisos y autenticación."
            },
            {
              "q": "¿Qué formatos y tamaños de archivo debo entregar a la IA?",
              "a": "Depende del servicio. Si hace falta, descomprime el ZIP y entrega archivos compatibles. Los 25 MB predeterminados son un objetivo de división del texto Markdown, no una garantía del tamaño del ZIP. Revisa los límites de carga."
            },
            {
              "q": "¿Cómo verifico una respuesta?",
              "a": "Usa source_url y captured_at para revisar el texto original y la fuente actual. La falta de material no prueba que no exista una condición o excepción."
            }
          ],
          "guide": {
            "title": "Dos usos de la información recopilada",
            "modes": [
              [
                "Leer y volver a consultar",
                "Usa el índice del HTML para ir a una sección y buscar palabras en todo el material recopilado. Vuelve a consultar la información guardada cuando la necesites."
              ],
              [
                "Analizar con una IA externa",
                "Usa material con fuentes y el texto de solicitud para pedir resúmenes, comparaciones o extracción de condiciones a una IA externa. Elige los archivos necesarios y reutiliza el material con preguntas distintas."
              ]
            ],
            "examplesTitle": "Preguntas concretas sobre tus documentos",
            "examples": [
              [
                "Condiciones de seguros",
                "Compara requisitos, exclusiones y excepciones expresados en estos documentos. Cita la URL fuente y marca la información ausente como «no indicada en el material proporcionado»."
              ],
              [
                "Manuales",
                "Ordena los pasos y requisitos previos de esta tarea. Señala diferencias entre manuales y cita los pasajes fuente."
              ],
              [
                "Programas públicos",
                "Extrae requisitos, documentos y plazos en una tabla comparativa con URL y fechas de captura. Comprueba la página oficial actual antes de actuar."
              ]
            ],
            "formatsTitle": "Formatos para leer, consultar con IA y verificar fuentes",
            "headers": [
              "Salida",
              "Uso"
            ],
            "rows": [
              [
                "HTML",
                "Lectura con índice y búsqueda. Los documentos enlazados permanecen como enlaces; su texto no se integra en el HTML."
              ],
              [
                "Markdown / JSONL / manifest",
                "Incluyen source_url y captured_at. Markdown contiene texto, JSONL organiza secciones y el manifest enumera el material."
              ],
              [
                "Tablas CSV / JSON",
                "Con salida por página o paquete completo y la exportación de tablas activada, se extraen tablas HTML significativas dentro de los límites admitidos. Se excluyen las tablas de diseño; revisa el resultado."
              ]
            ]
          }
        },
        "fr": {
          "title": "Réunir des pages à lire et préparer l’analyse IA | Grab All Files",
          "desc": "Rassemblez des pages en HTML lisible ou préparez des fichiers avec leurs sources pour résumer, comparer et extraire des conditions avec une IA externe.",
          "eyebrow": "Collecter, lire et analyser avec l’IA",
          "h1": "Rassembler des informations web pour les lire ou les analyser avec l’IA.",
          "lead": "Enregistrez une page choisie avec Free ou réunissez-en plusieurs dans un HTML avec Pro. Préparez des fichiers avec leurs sources pour résumer, comparer et extraire des conditions. La préparation reste sur votre appareil ; l’analyse a lieu dans l’IA externe choisie.",
          "best": [
            "Comparer les conditions publiées d’assurances à partir des textes collectés.",
            "Lire plusieurs sections de manuels et clarifier une procédure.",
            "Organiser les critères et dates mentionnés dans des dispositifs publics."
          ],
          "steps": [
            "Ouvrez une page autorisée et lancez le regroupement en HTML. Vérifiez les candidates et sélectionnez les documents utiles.",
            "Réglez images et documents. Pour l’IA, activez «Données pour analyse par IA (Markdown avec sources)» avant la collecte. Enregistrez le HTML et relisez-le avec le sommaire et la recherche.",
            "Après collecte, utilisez «Enregistrer le ZIP d’analyse IA» et «Copier la demande pour l’IA». Vérifiez les fichiers et décompressez le ZIP si l’IA demande des fichiers individuels.",
            "Transmettez vous-même les fichiers acceptés et votre question à une IA externe. Vérifiez sa réponse dans les sources et leurs dates de capture."
          ],
          "faq": [
            {
              "q": "L’extension analyse-t-elle ou transmet-elle mes documents à l’IA ?",
              "a": "Non. La collecte et l’export restent sur votre appareil. Vous enregistrez le ZIP, copiez la demande et choisissez les fichiers à transmettre à une IA externe selon ses formats et réglages de confidentialité."
            },
            {
              "q": "Quels documents puis-je utiliser ?",
              "a": "Les pages auxquelles vous avez accès. Le texte lu avec succès dans des documents liés compatibles, comme PDF, texte, CSV, Word ou Excel, peut rejoindre l’export IA. Vérifiez les erreurs et les manques ; tous les documents ou images ne sont pas lisibles."
            },
            {
              "q": "Puis-je essayer avec Free ?",
              "a": "Free trouve les candidates et enregistre exactement une page choisie en HTML. Pro sélectionne et combine plusieurs pages. Les limites de sécurité, d’accès et d’authentification restent applicables."
            },
            {
              "q": "Quels formats et tailles de fichiers transmettre à l’IA ?",
              "a": "Cela dépend du service. Décompressez le ZIP et fournissez les fichiers acceptés si nécessaire. Les 25 MB par défaut visent le découpage du texte Markdown, pas la taille totale du ZIP. Vérifiez les limites d’envoi."
            },
            {
              "q": "Comment vérifier une réponse ?",
              "a": "Utilisez source_url et captured_at pour contrôler le texte original et la source actuelle. Une information non collectée ne prouve pas l’absence d’une condition ou d’une exception."
            }
          ],
          "guide": {
            "title": "Deux usages des informations collectées",
            "modes": [
              [
                "Lire et relire",
                "Utilisez le sommaire HTML pour accéder à une section et rechercher des mots dans les documents collectés. Consultez à nouveau les informations enregistrées quand vous en avez besoin."
              ],
              [
                "Analyser avec une IA externe",
                "Utilisez les documents avec leurs sources et le texte de demande pour solliciter résumés, comparaisons ou extraction de conditions auprès d’une IA externe. Sélectionnez vos fichiers et réutilisez les mêmes documents avec différentes questions."
              ]
            ],
            "examplesTitle": "Poser des questions précises sur vos documents",
            "examples": [
              [
                "Conditions d’assurance",
                "Comparez les critères, exclusions et exceptions indiqués. Citez l’URL source et marquez les informations absentes «non précisées dans les documents fournis»."
              ],
              [
                "Manuels",
                "Listez les étapes et prérequis de cette tâche. Relevez les différences entre manuels en citant les passages sources."
              ],
              [
                "Dispositifs publics",
                "Comparez critères, pièces et délais dans un tableau avec URL et dates de capture. Vérifiez la page officielle actuelle avant toute démarche."
              ]
            ],
            "formatsTitle": "Formats pour lire, interroger l’IA et vérifier les sources",
            "headers": [
              "Sortie",
              "Usage"
            ],
            "rows": [
              [
                "HTML",
                "Lecture avec sommaire et recherche. Les documents liés restent des liens ; leur texte n’est pas intégré au HTML."
              ],
              [
                "Markdown / JSONL / manifest",
                "source_url et captured_at permettent la vérification. Markdown contient le texte, JSONL les sections et le manifest la liste des documents."
              ],
              [
                "Tableaux CSV / JSON",
                "Avec la sortie par page ou le paquet complet et l’export de tableaux activé, les tableaux HTML significatifs sont extraits dans les limites prises en charge. Les tableaux de mise en page sont exclus ; vérifiez les résultats."
              ]
            ]
          }
        },
        "de": {
          "title": "Webseiten bündeln, lesen und KI-Analyse vorbereiten | Grab All Files",
          "desc": "Webinformationen als lesbares HTML sammeln oder Dateien mit Quellen für Zusammenfassungen, Vergleiche und Bedingungsanalysen in einer externen KI vorbereiten.",
          "eyebrow": "Sammeln, lesen und mit KI analysieren",
          "h1": "Webinformationen sammeln, nachlesen und für KI-Analysen vorbereiten.",
          "lead": "Speichern Sie eine Seite mit Free oder bündeln Sie mehrere in einem HTML mit Pro. Bereiten Sie Dateien mit Quellen für Zusammenfassungen, Vergleiche und Bedingungsanalysen vor. Die Vorbereitung erfolgt auf Ihrem Gerät, die Analyse im gewählten externen KI-Dienst.",
          "best": [
            "Veröffentlichte Versicherungsbedingungen anhand der gesammelten Texte vergleichen.",
            "Handbuchabschnitte gemeinsam lesen und Abläufe klären.",
            "Voraussetzungen und Termine öffentlicher Programme ordnen."
          ],
          "steps": [
            "Öffnen Sie eine erlaubte Ausgangsseite und starten Sie das Bündeln in HTML. Prüfen Sie Kandidaten und wählen Sie benötigte Inhalte.",
            "Wählen Sie Bild- und Dokumenteinstellungen. Aktivieren Sie für KI-Ausgaben vor der Sammlung „KI-Analysedaten (Markdown mit Quellen)“. Speichern und lesen Sie das HTML mit Inhaltsverzeichnis und Textsuche.",
            "Verwenden Sie nach der Sammlung „KI-Analyse-ZIP speichern“ und „KI-Anfragetext kopieren“. Prüfen Sie die Dateien und entpacken Sie das ZIP, wenn die KI einzelne Dateien benötigt.",
            "Übergeben Sie passende Dateien und Fragen selbst an eine externe KI. Prüfen Sie Antworten anhand der Quellen und Erfassungszeitpunkte."
          ],
          "faq": [
            {
              "q": "Analysiert oder übermittelt die Erweiterung Inhalte an KI?",
              "a": "Nein. Sammlung und Export erfolgen auf Ihrem Gerät. Sie speichern das ZIP, kopieren die Anfrage und wählen selbst Dateien für eine externe KI. Deren Format- und Datenschutzeinstellungen gelten."
            },
            {
              "q": "Welche Seiten und Dokumente eignen sich?",
              "a": "Seiten mit erlaubtem Zugriff. Erfolgreich gelesener Text verknüpfter unterstützter PDF-, Text-, CSV-, Word- oder Excel-Dateien kann in die KI-Ausgabe eingehen. Nicht jedes Dokument oder Bild ist lesbar; prüfen Sie Fehler und Lücken."
            },
            {
              "q": "Kann ich Free verwenden?",
              "a": "Free findet Kandidaten und speichert genau eine ausgewählte Seite als HTML. Pro wählt und kombiniert mehrere Seiten. Sicherheits-, Berechtigungs- und Anmeldegrenzen gelten weiter."
            },
            {
              "q": "Welche Dateiformate und Größen sollte ich der KI geben?",
              "a": "Das hängt vom Dienst ab. Entpacken Sie das ZIP und übergeben Sie unterstützte Dateien, falls nötig. Die voreingestellten 25 MB sind ein Ziel für Markdown-Textaufteilung, keine Garantie für die ZIP-Gesamtgröße. Prüfen Sie Uploadgrenzen."
            },
            {
              "q": "Wie prüfe ich KI-Antworten?",
              "a": "Folgen Sie source_url und captured_at zur Originalformulierung und aktuellen Quelle. Fehlendes Material beweist nicht, dass eine Bedingung oder Ausnahme fehlt."
            }
          ],
          "guide": {
            "title": "Zwei Nutzungswege für gesammelte Informationen",
            "modes": [
              [
                "Lesen und nachschlagen",
                "Springen Sie mit dem HTML-Inhaltsverzeichnis zu einem Abschnitt und suchen Sie Begriffe im gesammelten Material. Nutzen Sie die gespeicherten Informationen immer wieder zum Nachschlagen."
              ],
              [
                "Mit externer KI analysieren",
                "Bitten Sie eine externe KI mit Quellenmaterial und Anfragetext um Zusammenfassungen, Vergleiche oder die Extraktion von Bedingungen. Wählen Sie benötigte Dateien und nutzen Sie dasselbe Material für verschiedene Fragen."
              ]
            ],
            "examplesTitle": "Konkrete Fragen an Ihr Material",
            "examples": [
              [
                "Versicherungsbedingungen",
                "Vergleiche Voraussetzungen, Ausschlüsse und Ausnahmen in diesen Dokumenten. Nenne die Quell-URL und kennzeichne fehlende Angaben als ‚im bereitgestellten Material nicht angegeben‘."
              ],
              [
                "Handbücher",
                "Liste Schritte und Voraussetzungen dieser Aufgabe auf. Zeige Widersprüche zwischen Handbüchern mit den entsprechenden Quellenstellen."
              ],
              [
                "Öffentliche Programme",
                "Erstelle eine Tabelle der genannten Voraussetzungen, Unterlagen und Fristen mit Quell-URLs und Erfassungszeitpunkten. Prüfe vor der Nutzung die aktuelle offizielle Seite."
              ]
            ],
            "formatsTitle": "Formate zum Lesen, für KI und zur Quellenprüfung",
            "headers": [
              "Ausgabe",
              "Verwendung"
            ],
            "rows": [
              [
                "HTML",
                "Lesen mit Inhaltsverzeichnis und Suche. Verknüpfte Dokumente bleiben Links; ihr Text wird nicht in das HTML eingefügt."
              ],
              [
                "Markdown / JSONL / manifest",
                "Enthalten source_url und captured_at. Markdown liefert Text, JSONL gliedert Überschriften und das manifest listet Material auf."
              ],
              [
                "CSV- / JSON-Tabellen",
                "Bei seitenweiser Ausgabe oder vollständigem Paket und aktivem Tabellenexport werden inhaltliche HTML-Tabellen innerhalb unterstützter Grenzen extrahiert. Layouttabellen sind ausgeschlossen; prüfen Sie das Ergebnis."
              ]
            ]
          }
        },
        "it": {
          "title": "Unire pagine da leggere e preparare analisi IA | Grab All Files",
          "desc": "Raccogli informazioni web in HTML leggibile o prepara file con le fonti per riassumere, confrontare ed estrarre condizioni con un’IA esterna.",
          "eyebrow": "Raccogliere, leggere e analizzare con IA",
          "h1": "Raccogli informazioni web per leggerle o analizzarle con IA.",
          "lead": "Salva una pagina scelta con Free o uniscine più in un HTML con Pro. Prepara file con le fonti per riassumere, confrontare ed estrarre condizioni. I materiali vengono preparati sul dispositivo; l’analisi avviene nell’IA esterna che scegli.",
          "best": [
            "Confrontare condizioni assicurative pubblicate usando i testi raccolti.",
            "Leggere sezioni di manuali insieme e chiarire una procedura.",
            "Organizzare requisiti e date indicati nei programmi pubblici."
          ],
          "steps": [
            "Apri una pagina a cui hai accesso e avvia l’unione in HTML. Controlla le candidate e seleziona il materiale utile.",
            "Scegli immagini e documenti. Per l’IA, attiva «Dati per analisi con IA (Markdown con fonti)» prima della raccolta. Salva e leggi l’HTML con indice e ricerca.",
            "Dopo la raccolta usa «Salva ZIP di analisi IA» e «Copia richiesta per l’IA». Controlla i file e decomprimi lo ZIP se l’IA richiede file singoli.",
            "Fornisci manualmente file compatibili e domanda a un’IA esterna. Verifica la risposta con testo originale e date di acquisizione."
          ],
          "faq": [
            {
              "q": "L’estensione analizza o invia informazioni all’IA?",
              "a": "No. Raccolta ed esportazione avvengono sul dispositivo. Salvi lo ZIP, copi la richiesta e decidi i file da passare a un’IA esterna, secondo i suoi formati e impostazioni di privacy."
            },
            {
              "q": "Quali pagine e documenti posso usare?",
              "a": "Pagine a cui hai accesso. Il testo letto correttamente da documenti collegati supportati, come PDF, testo, CSV, Word o Excel, può essere incluso nell’output IA. Non ogni documento o immagine è leggibile; controlla errori e mancanze."
            },
            {
              "q": "Posso provare con Free?",
              "a": "Free trova candidate e salva esattamente una pagina scelta in HTML. Pro seleziona e combina più pagine. Restano limiti di sicurezza, permessi e autenticazione."
            },
            {
              "q": "Quali formati e dimensioni dei file devo fornire all’IA?",
              "a": "Dipende dal servizio. Se necessario decomprimi lo ZIP e fornisci file accettati. I 25 MB predefiniti sono un obiettivo per dividere il testo Markdown, non una garanzia del peso totale ZIP. Controlla i limiti di caricamento."
            },
            {
              "q": "Come verifico una risposta?",
              "a": "Usa source_url e captured_at per controllare il testo originale e la fonte attuale. Materiale mancante non dimostra l’assenza di una condizione o eccezione."
            }
          ],
          "guide": {
            "title": "Due usi delle informazioni raccolte",
            "modes": [
              [
                "Leggere e consultare",
                "Usa l’indice HTML per raggiungere una sezione e cercare parole in tutto il materiale raccolto. Consulta di nuovo le informazioni salvate quando servono."
              ],
              [
                "Analizzare con un’IA esterna",
                "Usa materiali con le fonti e il testo della richiesta per chiedere riassunti, confronti o estrazione di condizioni a un’IA esterna. Scegli i file utili e riutilizza lo stesso materiale con domande diverse."
              ]
            ],
            "examplesTitle": "Domande concrete sui tuoi documenti",
            "examples": [
              [
                "Condizioni assicurative",
                "Confronta requisiti, esclusioni ed eccezioni dichiarati. Cita la URL fonte e indica gli elementi mancanti come «non specificati nel materiale fornito»."
              ],
              [
                "Manuali",
                "Elenca passi e prerequisiti dell’attività. Segnala le differenze tra manuali citando i passaggi originali."
              ],
              [
                "Programmi pubblici",
                "Estrai requisiti, documenti e scadenze in una tabella con URL e date di acquisizione. Verifica la pagina ufficiale aggiornata prima di agire."
              ]
            ],
            "formatsTitle": "Formati per leggere, usare l’IA e controllare le fonti",
            "headers": [
              "Output",
              "Uso"
            ],
            "rows": [
              [
                "HTML",
                "Lettura con indice e ricerca. I documenti collegati restano link; il loro testo non viene unito all’HTML."
              ],
              [
                "Markdown / JSONL / manifest",
                "Includono source_url e captured_at. Markdown contiene testo, JSONL organizza sezioni e il manifest elenca i materiali."
              ],
              [
                "Tabelle CSV / JSON",
                "Con output per pagina o pacchetto completo ed esportazione delle tabelle attivata, si estraggono tabelle HTML significative entro i limiti supportati. Le tabelle di impaginazione sono escluse; controlla il risultato."
              ]
            ]
          }
        },
        "ko": {
          "title": "여러 웹페이지를 모아 읽고 AI 분석 자료 만들기 | Grab All Files",
          "desc": "웹정보를 읽기 쉬운 HTML로 모으거나 출처가 있는 파일로 내보내 외부 AI에서 요약·비교·조건 추출하는 방법과 질문 예시를 안내합니다.",
          "eyebrow": "정보 수집·읽기·AI 분석",
          "h1": "웹정보를 모아 읽고, 수집한 정보를 AI로 분석하세요.",
          "lead": "Free로 선택한 1페이지를 저장하거나 Pro로 여러 페이지를 하나의 HTML에 모아 읽으세요. 출처가 있는 AI 자료로 요약·비교·조건 추출을 요청할 수 있습니다. 자료 준비는 기기에서, 분석은 선택한 외부 AI 서비스에서 합니다.",
          "best": [
            "공개된 보험 상품 조건을 수집한 원문에 따라 비교합니다.",
            "여러 매뉴얼 항목을 함께 읽고 작업 절차를 확인합니다.",
            "공개 제도의 자료에서 명시된 요건과 날짜를 정리합니다."
          ],
          "steps": [
            "접근이 허용된 시작 페이지에서 페이지 HTML 결합을 실행합니다. 후보를 검토하고 필요한 자료만 선택합니다.",
            "이미지와 링크 문서 설정을 선택합니다. AI 출력이 필요하면 수집 전에 “AI 분석용 데이터(출처 포함 Markdown)”를 활성화합니다. HTML을 저장하고 목차와 본문 검색으로 읽습니다.",
            "수집 완료 후 “AI 분석용 ZIP 저장”와 “AI 요청문 복사”를 사용하고 내용을 확인합니다. AI 서비스가 개별 파일을 요구하면 ZIP을 풉니다.",
            "지원 파일과 질문을 외부 AI에 직접 전달합니다. 답변을 원문·출처·수집 시점과 대조합니다."
          ],
          "faq": [
            {
              "q": "확장 프로그램이 AI 분석이나 AI 전송도 하나요?",
              "a": "아니요. 수집과 출력은 기기에서 처리합니다. AI ZIP을 저장하고 요청문을 복사해 외부 AI에 전달할 파일을 직접 선택합니다. AI의 지원 형식과 개인정보 설정을 확인하세요."
            },
            {
              "q": "어떤 페이지와 문서를 사용할 수 있나요?",
              "a": "접근이 허용된 페이지입니다. 선택한 링크 문서 중 지원되는 PDF·텍스트·CSV·Word·Excel 등의 읽기에 성공한 본문은 AI 출력에 포함할 수 있습니다. 모든 문서와 이미지를 읽지는 못하므로 실패와 누락을 확인하세요."
            },
            {
              "q": "Free로도 시도할 수 있나요?",
              "a": "Free는 후보를 찾고 선택한 정확히 1페이지를 HTML로 저장합니다. Pro는 여러 페이지 본문을 선택하고 결합합니다. 인증·권한·안전 제한은 계속 적용됩니다."
            },
            {
              "q": "AI에 전달할 파일의 형식과 크기는 어떻게 선택하나요?",
              "a": "서비스마다 다릅니다. 필요하면 압축을 풀고 지원 파일을 전달하세요. 기본 25 MB는 Markdown 본문 분할 기준이며 ZIP 전체 크기 보장이 아닙니다. AI의 업로드 제한도 확인하세요."
            },
            {
              "q": "AI 답변은 어떻게 확인하나요?",
              "a": "AI 출력의 source_url과 captured_at으로 원문과 최신 출처를 확인하세요. 수집 자료에 없다는 사실만으로 조건이나 예외가 없다고 판단하지 않습니다."
            }
          ],
          "guide": {
            "title": "수집한 정보를 사용하는 두 가지 방법",
            "modes": [
              [
                "읽고 다시 확인하기",
                "HTML 목차로 필요한 부분에 이동하고 수집한 자료 전체에서 단어를 검색해 다시 읽을 수 있습니다. 저장한 정보를 필요할 때마다 반복해서 참고하세요."
              ],
              [
                "외부 AI로 분석하기",
                "출처가 있는 자료와 요청문으로 외부 AI에 요약·비교·조건 추출을 요청할 수 있습니다. 필요한 파일을 선택하고 질문을 바꾸어 같은 자료를 활용하세요."
              ]
            ],
            "examplesTitle": "자료의 범위를 정하고 구체적으로 질문하기",
            "examples": [
              [
                "보험 상품 조건",
                "자료에 명시된 가입 요건·면책·예외를 비교해 주세요. 항목마다 출처 URL을 붙이고 없는 정보는 ‘제공 자료에 명시되지 않음’으로 표시해 주세요."
              ],
              [
                "매뉴얼",
                "작업 단계와 전제 조건을 정리해 주세요. 매뉴얼 간 설명이 다른 부분은 원문과 출처를 제시해 주세요."
              ],
              [
                "공개 제도",
                "명시된 대상 요건·서류·기한을 비교표로 만들어 주세요. 출처 URL과 수집 시점을 포함하고 이용 전 최신 공식 페이지를 확인합니다."
              ]
            ],
            "formatsTitle": "읽기·AI 전달·출처 확인에 쓰는 형식",
            "headers": [
              "출력",
              "사용 방법"
            ],
            "rows": [
              [
                "HTML",
                "목차와 검색으로 읽습니다. 링크 문서는 링크로 유지되며 문서 본문은 HTML에 통합되지 않습니다."
              ],
              [
                "Markdown / JSONL / manifest",
                "source_url과 captured_at이 기록됩니다. Markdown은 본문, JSONL은 제목 단위 정보, manifest는 자료 목록을 확인하는 데 씁니다."
              ],
              [
                "표 CSV / JSON",
                "페이지별 또는 전체 패키지 출력을 선택하고 표 내보내기를 켜면 의미 있는 HTML 표를 지원 범위와 제한 안에서 추출합니다. 레이아웃 표는 제외되므로 결과를 확인하세요."
              ]
            ]
          }
        },
        "pt_BR": {
          "title": "Reunir páginas para ler e preparar análise com IA | Grab All Files",
          "desc": "Reúna informações web em HTML legível ou prepare arquivos com fontes para resumir, comparar e extrair condições usando uma ferramenta de IA externa.",
          "eyebrow": "Coletar, ler e analisar com IA",
          "h1": "Reúna informações web para ler ou analisar com IA.",
          "lead": "Salve uma página escolhida com Free ou reúna várias em um HTML com Pro. Prepare arquivos com fontes para resumos, comparações e extração de condições. Os materiais são preparados no dispositivo; a análise ocorre na IA externa que você escolher.",
          "best": [
            "Comparar condições publicadas de seguros com base nos textos coletados.",
            "Ler seções de manuais juntas e esclarecer procedimentos.",
            "Organizar requisitos e datas indicados em programas públicos."
          ],
          "steps": [
            "Abra uma página com acesso permitido e inicie a combinação em HTML. Revise as candidatas e selecione o material necessário.",
            "Escolha imagens e documentos. Para IA, ative “Dados para análise com IA (Markdown com fontes)” antes da coleta. Salve e leia o HTML com sumário e busca.",
            "Após a coleta, use “Salvar ZIP de análise IA” e “Copiar pedido para a IA”. Confira os arquivos e extraia o ZIP se a IA precisar de arquivos individuais.",
            "Entregue manualmente arquivos aceitos e sua pergunta a uma IA externa. Confira a resposta com o texto fonte e as datas de captura."
          ],
          "faq": [
            {
              "q": "A extensão analisa ou envia minhas informações para IA?",
              "a": "Não. Coleta e exportação ocorrem no dispositivo. Você salva o ZIP, copia o pedido e decide quais arquivos entregar a uma IA externa conforme seus formatos e privacidade."
            },
            {
              "q": "Quais páginas e documentos posso usar?",
              "a": "Páginas com acesso permitido. Texto lido com sucesso de documentos vinculados compatíveis, como PDF, texto, CSV, Word ou Excel, pode entrar na saída para IA. Confira erros e lacunas; nem todo documento ou imagem pode ser lido."
            },
            {
              "q": "Posso experimentar no Free?",
              "a": "O Free encontra candidatas e salva exatamente uma página escolhida como HTML. O Pro seleciona e combina várias. Limites de segurança, permissão e autenticação continuam aplicáveis."
            },
            {
              "q": "Quais formatos e tamanhos de arquivo devo entregar à IA?",
              "a": "Depende do serviço. Extraia o ZIP e forneça arquivos aceitos se necessário. Os 25 MB padrão são uma meta de divisão do texto Markdown, não garantia do tamanho total do ZIP. Confira os limites de envio."
            },
            {
              "q": "Como verifico uma resposta?",
              "a": "Use source_url e captured_at para conferir a redação original e a fonte atual. Material ausente não prova que uma condição ou exceção não existe."
            }
          ],
          "guide": {
            "title": "Dois usos para as informações coletadas",
            "modes": [
              [
                "Ler e consultar novamente",
                "Use o sumário HTML para ir a uma seção e buscar palavras em todo o material coletado. Consulte novamente as informações salvas sempre que precisar."
              ],
              [
                "Analisar com uma IA externa",
                "Use materiais com fontes e o texto do pedido para solicitar resumos, comparações ou extração de condições a uma IA externa. Escolha os arquivos necessários e reutilize o mesmo material com perguntas diferentes."
              ]
            ],
            "examplesTitle": "Faça perguntas concretas sobre seus documentos",
            "examples": [
              [
                "Condições de seguros",
                "Compare requisitos, exclusões e exceções declarados. Cite a URL fonte e marque informações ausentes como ‘não informado no material fornecido’."
              ],
              [
                "Manuais",
                "Liste etapas e pré-requisitos desta tarefa. Identifique diferenças entre manuais e cite os trechos de origem."
              ],
              [
                "Programas públicos",
                "Extraia requisitos, documentos e prazos em uma tabela com URLs e datas de captura. Confira a página oficial atual antes de agir."
              ]
            ],
            "formatsTitle": "Formatos para ler, consultar IA e verificar fontes",
            "headers": [
              "Saída",
              "Uso"
            ],
            "rows": [
              [
                "HTML",
                "Leitura com sumário e busca. Documentos vinculados permanecem como links; seu texto não é integrado ao HTML."
              ],
              [
                "Markdown / JSONL / manifest",
                "Incluem source_url e captured_at. Markdown traz o texto, JSONL organiza seções e o manifest lista os materiais."
              ],
              [
                "Tabelas CSV / JSON",
                "Com saída por página ou pacote completo e exportação de tabelas ativada, tabelas HTML significativas são extraídas dentro dos limites aceitos. Tabelas de layout são excluídas; confira o resultado."
              ]
            ]
          }
        },
        "zh_CN": {
          "title": "合并网页信息阅读并准备AI分析资料 | Grab All Files",
          "desc": "将网页信息收集为易读的HTML，或导出带来源的资料，手动交给外部AI进行摘要、比较和条件提取。提供操作步骤与提问示例。",
          "eyebrow": "收集信息·阅读·AI分析",
          "h1": "收集网页信息阅读，再将资料交给AI分析。",
          "lead": "Free可保存所选1页，Pro可将多个页面正文合并为一个易读的HTML。导出带来源的资料，准备向AI提出摘要、比较与条件提取问题。资料准备在您的设备上完成，分析由您选择的外部AI服务进行。",
          "best": [
            "依据收集的原文比较公开保险产品的条件。",
            "一起阅读多份手册并确认操作步骤。",
            "整理公共制度资料中明示的要求与日期。"
          ],
          "steps": [
            "打开您有权访问的起始页面并启动页面HTML合并。检查候选列表，只选择需要的资料。",
            "选择图片和链接文档设置。需要AI输出时，请在收集前启用“AI分析数据（带出处的Markdown）”。收集并保存HTML，使用目录和正文搜索阅读。",
            "收集完成后使用“保存AI分析ZIP”和“复制给AI的请求文”，检查内容。如果AI服务需要单独文件，请解压ZIP。",
            "手动将支持的文件与问题交给外部AI，将回答与原文、来源及采集时间核对。"
          ],
          "faq": [
            {
              "q": "扩展会自动分析或把信息发给AI吗？",
              "a": "不会。收集和导出均在您的设备上完成。您保存AI ZIP、复制请求文本，并自行选择交给外部AI的文件。请确认AI的格式支持与隐私设置。"
            },
            {
              "q": "可以使用哪些页面和文档？",
              "a": "仅限您有权访问的页面。选中的链接文档中，支持的PDF、文本、CSV、Word、Excel等成功读取的正文可加入AI输出。并非所有文档或图片都能读取，请检查失败和遗漏。"
            },
            {
              "q": "可以用Free试用吗？",
              "a": "Free查找候选并只保存选中的1页为HTML。Pro可选择并合并多个页面正文。仍适用身份验证、权限与安全上限。"
            },
            {
              "q": "交给AI的文件应采用什么格式和大小？",
              "a": "依服务而异。需要时请解压ZIP，提供支持的文件。默认25 MB是Markdown正文分块目标，不保证ZIP整体大小。也请确认AI的上传限制。"
            },
            {
              "q": "如何核对AI回答？",
              "a": "通过AI输出中的source_url与captured_at检查原文和当前来源。所收集资料中没有记载，不代表条件或例外不存在。"
            }
          ],
          "guide": {
            "title": "收集的信息可以这样使用",
            "modes": [
              [
                "阅读与重新查阅",
                "通过HTML目录跳转到所需段落，在收集的资料中搜索词语并重新阅读。保存的资料可以反复查阅。"
              ],
              [
                "使用外部AI分析",
                "使用带来源的资料和请求文本，向外部AI提出摘要、比较或条件提取问题。选择所需文件，改变问题，反复使用同一批资料。"
              ]
            ],
            "examplesTitle": "根据资料范围提出具体问题",
            "examples": [
              [
                "保险产品条件",
                "请比较资料中明确记载的投保要求、免责和例外。每项附来源URL，缺失信息标为“所提供资料中未记载”。"
              ],
              [
                "手册",
                "请整理此操作的步骤与前提条件。对不同手册的差异，引用相应原文和来源。"
              ],
              [
                "公共制度",
                "请将记载的对象要求、材料和期限整理为比较表，附来源URL与采集时间。实际使用前确认最新官方页面。"
              ]
            ],
            "formatsTitle": "阅读、AI输入与来源核对的文件格式",
            "headers": [
              "输出",
              "用法"
            ],
            "rows": [
              [
                "HTML",
                "使用目录和正文搜索阅读。链接文档保留为链接，文档正文不会合并至HTML。"
              ],
              [
                "Markdown / JSONL / manifest",
                "记录source_url和captured_at。Markdown用于正文，JSONL组织标题层级信息，manifest用于资料清单核对。"
              ],
              [
                "表格CSV / JSON",
                "选择按页面输出或完整资料包并启用表格导出后，可在支持范围与上限内提取有意义的HTML表格。布局表格被排除，请检查结果。"
              ]
            ]
          }
        },
        "zh_TW": {
          "title": "合併網頁資訊閱讀並準備AI分析資料 | Grab All Files",
          "desc": "將網頁資訊收集為易讀的HTML，或匯出附來源的資料，手動交給外部AI進行摘要、比較與條件擷取。提供操作步驟及提問範例。",
          "eyebrow": "收集資訊·閱讀·AI分析",
          "h1": "收集網頁資訊閱讀，再將資料交給AI分析。",
          "lead": "Free可儲存所選1頁，Pro可將多個頁面本文合併為一個易讀的HTML。匯出附來源的資料，準備向AI提出摘要、比較及條件擷取問題。資料準備在您的裝置上完成，分析由您選擇的外部AI服務進行。",
          "best": [
            "依據收集的原文比較公開保險商品的條件。",
            "一起閱讀多份手冊並確認操作步驟。",
            "整理公共制度資料中明示的要求與日期。"
          ],
          "steps": [
            "開啟您有權存取的起始頁面並啟動頁面HTML結合。檢查候選清單，只選取需要的資料。",
            "選擇圖片與連結文件設定。需要AI輸出時，請在收集前啟用「AI分析資料（附出處的Markdown）」。收集並儲存HTML，使用目錄與本文搜尋閱讀。",
            "收集完成後使用「儲存AI分析ZIP」與「複製給AI的請求文」，檢查內容。如果AI服務需要個別檔案，請解壓縮ZIP。",
            "手動將支援的檔案與問題交給外部AI，將回答與原文、來源及擷取時間核對。"
          ],
          "faq": [
            {
              "q": "擴充功能會自動分析或將資訊傳送給AI嗎？",
              "a": "不會。收集及匯出均在您的裝置上完成。您儲存AI ZIP、複製請求文字，並自行選擇交給外部AI的檔案。請確認AI支援的格式及隱私設定。"
            },
            {
              "q": "可使用哪些頁面與文件？",
              "a": "僅限您有權存取的頁面。選取的連結文件中，支援的PDF、文字、CSV、Word、Excel等成功讀取的本文可加入AI輸出。並非所有文件或圖片都能讀取，請檢查失敗及遺漏。"
            },
            {
              "q": "可以用Free試用嗎？",
              "a": "Free尋找候選並只儲存選取的1頁為HTML。Pro可選擇並結合多個頁面本文。仍適用驗證、權限與安全上限。"
            },
            {
              "q": "交給AI的檔案應採用什麼格式與大小？",
              "a": "依服務而異。需要時請解壓縮ZIP，提供支援的檔案。預設25 MB是Markdown本文分割目標，不保證ZIP整體大小。也請確認AI的上傳限制。"
            },
            {
              "q": "如何核對AI回答？",
              "a": "透過AI輸出中的source_url與captured_at檢查原文及目前來源。收集資料中沒有記載，不代表條件或例外不存在。"
            }
          ],
          "guide": {
            "title": "收集的資訊可以這樣使用",
            "modes": [
              [
                "閱讀與重新查閱",
                "透過HTML目錄跳轉到所需段落，在收集的資料中搜尋詞語並重新閱讀。儲存的資料可以反覆查閱。"
              ],
              [
                "使用外部AI分析",
                "使用附來源的資料與請求文字，向外部AI提出摘要、比較或條件擷取問題。選擇所需檔案，改變問題，反覆使用同一批資料。"
              ]
            ],
            "examplesTitle": "依據資料範圍提出具體問題",
            "examples": [
              [
                "保險商品條件",
                "請比較資料中明確記載的投保要求、除外及例外。每項附來源URL，缺少的資訊標為「提供資料中未記載」。"
              ],
              [
                "手冊",
                "請整理此操作的步驟與前提條件。對不同手冊的差異，引用相應原文及來源。"
              ],
              [
                "公共制度",
                "請將記載的對象要求、文件及期限整理為比較表，附來源URL與擷取時間。實際使用前確認最新官方頁面。"
              ]
            ],
            "formatsTitle": "閱讀、AI輸入與來源核對的檔案格式",
            "headers": [
              "輸出",
              "用法"
            ],
            "rows": [
              [
                "HTML",
                "使用目錄與本文搜尋閱讀。連結文件保留為連結，文件本文不會合併至HTML。"
              ],
              [
                "Markdown / JSONL / manifest",
                "記錄source_url與captured_at。Markdown用於本文，JSONL組織標題單位資訊，manifest用於資料清單核對。"
              ],
              [
                "表格CSV / JSON",
                "選擇按頁面輸出或完整資料包並啟用表格匯出後，可在支援範圍與上限內擷取有意義的HTML表格。排版表格會被排除，請檢查結果。"
              ]
            ]
          }
        }
      }
    },
    "combine-web-pages-into-one-html": {
      path: "combine-web-pages-into-one-html.html",
      related: ["download-files-from-webpage", "internal-portal-downloads", "download-all-pdfs"],
      cta: {
        en: { title: "Save one related page free—or combine several with Pro.", text: "Discovery and HTML generation stay on your device. Free lists related candidates and saves exactly the one page you choose; images and directly linked files on that page have no plan-based count cap. Pro selects multiple candidates and combines their readable page bodies into one HTML. Safety and source-site limits apply." },
        ja: { title: "無料版は選んだ1ページ。Proは複数ページを1つに。", text: "探索とHTML生成は端末内で処理します。無料版は関連候補を一覧表示し、常に選んだ1ページだけを保存。そのページ内の画像・直接リンクされたファイルにはプラン上の件数制限がありません。Proは複数候補の本文を1つのHTMLに結合します。安全上限・サイト側制限は適用されます。" },
        es: { title: "Guarda una página gratis o combina varias con Pro.", text: "La búsqueda y la generación de HTML permanecen en tu dispositivo. Free enumera las candidatas y guarda exactamente la página que elijas; las imágenes y archivos enlazados directamente no tienen límite de cantidad por plan. Pro combina el contenido de varias páginas seleccionadas. Se aplican límites de seguridad y del sitio fuente." },
        fr: { title: "Enregistrez une page gratuitement ou regroupez-en plusieurs avec Pro.", text: "La découverte et la génération HTML restent sur votre appareil. Free liste les pages candidates et enregistre exactement celle que vous choisissez ; les images et fichiers directement liés n’ont pas de plafond lié au forfait. Pro regroupe le contenu de plusieurs pages sélectionnées. Les limites de sécurité et du site source s’appliquent." },
        de: { title: "Eine Seite kostenlos speichern oder mehrere mit Pro bündeln.", text: "Suche und HTML-Erstellung bleiben auf Ihrem Gerät. Free listet Kandidaten und speichert genau die gewählte Seite; Bilder und direkt verlinkte Dateien haben kein planbedingtes Mengenlimit. Pro bündelt die Inhalte mehrerer gewählter Seiten. Sicherheits- und Quellseitenlimits gelten weiterhin." },
        it: { title: "Salva gratis una pagina o uniscine più con Pro.", text: "Ricerca e generazione HTML restano sul dispositivo. Free elenca le pagine candidate e salva esattamente quella scelta; immagini e file collegati direttamente non hanno un limite numerico del piano. Pro unisce il contenuto di più pagine selezionate. Restano validi i limiti di sicurezza e del sito sorgente." },
        ko: { title: "Free로 1페이지를 저장하거나 Pro로 여러 페이지를 결합하세요.", text: "탐색과 HTML 생성은 기기에서 처리됩니다. Free는 관련 후보를 나열하고 선택한 정확히 1페이지만 저장합니다. 그 페이지의 이미지와 직접 연결된 파일에는 플랜상 개수 제한이 없습니다. Pro는 여러 후보의 본문을 하나의 HTML로 결합합니다. 안전 및 원본 사이트 제한은 적용됩니다." },
        pt_BR: { title: "Salve uma página grátis ou reúna várias com o Pro.", text: "A descoberta e a geração de HTML ficam no dispositivo. O Free lista candidatas e salva exatamente a página escolhida; imagens e arquivos diretamente vinculados não têm limite de quantidade do plano. O Pro reúne o conteúdo de várias páginas selecionadas. Aplicam-se limites de segurança e do site de origem." },
        zh_CN: { title: "免费保存1个页面，或使用Pro合并多个页面。", text: "候选查找和HTML生成均在设备上完成。Free列出相关候选，并仅保存您选择的1个页面；该页面内的图片和直接链接文件没有套餐数量上限。Pro可选择多个候选并将其正文合并为一个HTML。仍适用安全和源网站限制。" },
        zh_TW: { title: "免費儲存1個頁面，或使用Pro合併多個頁面。", text: "候選探索和HTML產生均在裝置上完成。Free列出相關候選，並只儲存您選擇的1個頁面；該頁面內的圖片和直接連結檔案沒有方案數量上限。Pro可選擇多個候選並將其正文合併成一個HTML。仍適用安全和來源網站限制。" }
      },
      copy: {
        en: c(
          "Combine multiple web pages into one HTML file | Grab All Files",
          "Free finds related candidates and saves one chosen page as HTML. Pro combines multiple selected page bodies into one searchable, printable HTML with a shared table of contents.",
          "Web-page HTML collection",
          "Free saves 1 page. Pro combines multiple pages into one searchable HTML.",
          "Start from the page open in your browser. Free lists related candidates and keeps exactly one selected for HTML saving. Pro lets you select and order multiple candidates, then combines their readable page bodies into one HTML with a shared table of contents.",
          [
            "Research, documentation, manuals, and reference sites spread across many pages.",
            "Saving related articles or public information as one portable offline document.",
            "Creating a searchable, printable archive with clear source links.",
            "Preparing optional source-tracked Markdown, JSONL, manifest, and table exports for AI analysis."
          ],
          [
            "Open the starting page and choose “Combine pages into HTML” in Grab All Files.",
            "Review the candidates: Free keeps exactly one selected; Pro can select and reorder multiple pages.",
            "Choose image and linked-file options. Free saves the chosen page; Pro creates one combined HTML with a shared table of contents."
          ],
          [
            { q: "Can I choose which pages to include?", a: "Yes. Free keeps exactly one candidate selected at a time. Pro lets you select multiple pages, remove what you do not need, and reorder the rest." },
            { q: "Can I read the result offline?", a: "Yes. Embed images for offline reading, or keep online references for a smaller HTML file. Linked documents can also be saved alongside it." },
            { q: "Is page content uploaded to your servers?", a: "No. Page discovery, collection, and HTML generation run on your device. Free saves exactly one chosen candidate; Pro combines multiple selected page bodies. Safety, authentication, permission, source-site, and device-protection limits still apply." },
            { q: "How is this different from a one-page saver such as SingleFile?", a: "One-page savers preserve the page currently open. Grab All Files can discover related pages, let you review and reorder them, and combine the selected readable content into one HTML file with a shared table of contents." }
          ]
        ),
        ja: c(
          "複数のWebページを1つのHTMLにまとめる | Grab All Files",
          "無料版は関連候補を探して選んだ1ページをHTML保存。Proは複数ページ本文を共通目次付きで検索・印刷できる1つのHTMLに結合します。処理は端末内で完結します。",
          "WebページHTML収集",
          "無料は1ページ保存。Proは複数ページを1つのHTMLに。",
          "ブラウザで開いているページを起点に関連候補を探索。無料版は常に1ページだけ選択してHTML保存し、Proは複数候補を選択・並べ替えて共通目次付きの1つのHTMLに結合します。",
          [
            "複数ページに分かれた調査資料、マニュアル、ドキュメント、参考サイト。",
            "関連記事や公開情報を、持ち運べる1つのオフライン資料として保存。",
            "出典リンクが分かる、検索・印刷可能なアーカイブを作成。",
            "AI解析向けに、出典付きMarkdown、JSONL、manifest、表データを任意出力。"
          ],
          [
            "起点ページを開き、Grab All Files で「ページをHTMLにまとめる」を選びます。",
            "候補を確認します。無料版は常に1ページだけ選択し、Proは複数ページを選択・並べ替えできます。",
            "画像と直接リンクされたファイルの保存方法を選択。無料版は選んだ1ページ、Proは共通目次付きの結合HTMLを保存します。"
          ],
          [
            { q: "収録するページを選べますか？", a: "はい。無料版は常に候補を1ページだけ選択し、別のページを選ぶと選択が切り替わります。Proは複数ページを選択・除外・並べ替えできます。" },
            { q: "作成したHTMLはオフラインで読めますか？", a: "はい。画像を埋め込めばオフラインで閲覧できます。HTMLを軽くしたい場合はオンライン参照も選べ、リンク先の文書をHTMLと一緒に保存することもできます。" },
            { q: "ページ内容はサーバーへアップロードされますか？", a: "いいえ。候補探索・ページ収集・HTML生成は端末内で処理します。無料版は選んだ1ページだけを保存し、Proは複数ページ本文を結合します。安全上限・認証・権限・サイト側・端末保護上の制限はどちらにも適用されます。" },
            { q: "SingleFileのような1ページ保存ツールとの違いは？", a: "1ページ保存ツールは、現在開いているページを保存する用途に向いています。Grab All Files は関連ページを探し、対象と順番を確認して、選択した読みやすい本文を共通の目次付きで1つのHTMLにまとめます。" }
          ]
        ),
        es: c(
          "Combinar páginas web en un archivo HTML | Grab All Files",
          "Free encuentra candidatas relacionadas y guarda una página elegida como HTML. Pro combina el contenido de varias páginas seleccionadas en un HTML con índice, búsqueda e impresión.",
          "Recopilación HTML de páginas web",
          "Free guarda 1 página. Pro combina varias en un HTML.",
          "Empieza por la página abierta en tu navegador. Free enumera las candidatas relacionadas y mantiene exactamente una seleccionada para guardarla como HTML. Pro permite seleccionar y ordenar varias candidatas y combina su contenido legible en un HTML con un índice común.",
          ["Investigaciones, documentación, manuales y sitios de referencia repartidos en muchas páginas.", "Guardar artículos relacionados o información pública como un único documento portátil para consultar sin conexión.", "Crear un archivo en el que se puedan hacer búsquedas e imprimir, con enlaces claros a las fuentes.", "Preparar opcionalmente Markdown con fuentes rastreables, JSONL, un manifest y datos tabulares para el análisis con IA."],
          ["Abre la página inicial y elige «Combinar páginas en HTML» en Grab All Files.", "Revisa las candidatas: Free mantiene exactamente una seleccionada; Pro permite seleccionar y reordenar varias.", "Elige las opciones de imágenes y archivos enlazados. Free guarda la página elegida; Pro crea un HTML combinado con un índice común."],
          [{ q: "¿Puedo elegir qué páginas incluir?", a: "Sí. Free mantiene exactamente una candidata seleccionada a la vez; al elegir otra, la selección cambia. Pro permite seleccionar varias páginas, eliminar las que no necesites y reordenar las demás." }, { q: "¿Puedo consultar el resultado sin conexión?", a: "Sí. Incorpora las imágenes para leer sin conexión o conserva las referencias en línea para reducir el tamaño del archivo HTML. Los documentos enlazados también se pueden guardar junto con él." }, { q: "¿Se sube el contenido de las páginas a sus servidores?", a: "No. Todo se procesa en tu dispositivo. Free guarda exactamente una página candidata elegida; Pro combina el contenido de varias páginas seleccionadas. Se aplican los límites de seguridad, autenticación, permisos, del sitio fuente y de protección del dispositivo." }, { q: "¿En qué se diferencia de una herramienta para guardar una sola página, como SingleFile?", a: "Las herramientas de una sola página conservan la página abierta. Grab All Files también encuentra candidatas relacionadas: Free guarda una página elegida y Pro combina el contenido legible de varias páginas seleccionadas en un HTML con índice común." }]
        ),
        fr: c(
          "Regrouper des pages web dans un fichier HTML | Grab All Files",
          "Free trouve les pages candidates et enregistre celle que vous choisissez. Pro regroupe le contenu de plusieurs pages sélectionnées dans un HTML avec sommaire, recherche et impression.",
          "Collecte HTML de pages web",
          "Free enregistre 1 page. Pro en regroupe plusieurs dans un HTML.",
          "Partez de la page ouverte dans votre navigateur. Free liste les pages candidates et en maintient exactement une sélectionnée pour l’enregistrement HTML. Pro permet d’en choisir et d’en ordonner plusieurs, puis regroupe leur contenu lisible dans un HTML avec sommaire commun.",
          ["Les recherches, la documentation, les manuels et les sites de référence répartis sur de nombreuses pages.", "Enregistrer des articles associés ou des informations publiques dans un seul document portable consultable hors ligne.", "Créer une archive dans laquelle vous pouvez effectuer des recherches et que vous pouvez imprimer, avec des liens clairs vers les sources.", "Préparer, si nécessaire, du Markdown avec suivi des sources, du JSONL, un manifeste et des données tabulaires pour l’analyse par IA."],
          ["Ouvrez la page de départ et choisissez « Regrouper les pages en HTML » dans Grab All Files.", "Vérifiez les candidates : Free en maintient exactement une sélectionnée ; Pro permet d’en sélectionner et d’en réorganiser plusieurs.", "Choisissez les options d’images et de fichiers liés. Free enregistre la page choisie ; Pro crée un HTML regroupé avec sommaire commun."],
          [{ q: "Puis-je choisir les pages à inclure ?", a: "Oui. Free maintient exactement une page candidate sélectionnée à la fois ; choisir une autre page remplace la sélection. Pro permet de sélectionner plusieurs pages, de retirer celles qui sont inutiles et de réorganiser les autres." }, { q: "Puis-je consulter le résultat hors ligne ?", a: "Oui. Intégrez les images pour une consultation hors ligne, ou conservez les références en ligne afin d’alléger le fichier HTML. Les documents liés peuvent également être enregistrés avec celui-ci." }, { q: "Le contenu des pages est-il envoyé à vos serveurs ?", a: "Non. Tout est traité sur votre appareil. Free enregistre exactement une page candidate choisie ; Pro regroupe le contenu de plusieurs pages sélectionnées. Les limites de sécurité, d’authentification, d’autorisation, du site source et de protection de l’appareil s’appliquent." }, { q: "Quelle est la différence avec un outil d’enregistrement d’une seule page tel que SingleFile ?", a: "Les outils d’une seule page conservent la page ouverte. Grab All Files trouve aussi les pages candidates associées : Free enregistre celle choisie et Pro regroupe le contenu lisible de plusieurs pages sélectionnées dans un HTML avec sommaire commun." }]
        ),
        de: c(
          "Webseiten in einer HTML-Datei bündeln | Grab All Files",
          "Free findet Kandidatenseiten und speichert die gewählte Seite. Pro bündelt die Inhalte mehrerer gewählter Seiten in einer durchsuchbaren HTML-Datei mit Inhaltsverzeichnis.",
          "HTML-Sammlung für Webseiten",
          "Free speichert 1 Seite. Pro bündelt mehrere Seiten in einer HTML-Datei.",
          "Beginnen Sie mit der im Browser geöffneten Seite. Free listet zugehörige Kandidaten und hält genau einen für die HTML-Speicherung ausgewählt. Pro lässt Sie mehrere Kandidaten auswählen und anordnen und bündelt deren lesbare Inhalte in einer HTML-Datei mit gemeinsamem Inhaltsverzeichnis.",
          ["Recherchen, Dokumentationen, Handbücher und Referenzseiten, deren Inhalte sich über viele Seiten verteilen.", "Zusammengehörige Artikel oder öffentliche Informationen als ein portables Offline-Dokument speichern.", "Ein durchsuchbares und druckbares Archiv mit eindeutigen Quellenlinks erstellen.", "Optional Markdown mit Quellenzuordnung, JSONL, ein Manifest und Tabellendaten für KI-Analysen vorbereiten."],
          ["Öffnen Sie die Startseite und wählen Sie in Grab All Files „Seiten zu HTML zusammenfassen“.", "Prüfen Sie die Kandidaten: Free hält genau einen ausgewählt; Pro kann mehrere auswählen und neu anordnen.", "Wählen Sie Optionen für Bilder und verlinkte Dateien. Free speichert die gewählte Seite; Pro erstellt eine gebündelte HTML-Datei mit gemeinsamem Inhaltsverzeichnis."],
          [{ q: "Kann ich auswählen, welche Seiten aufgenommen werden?", a: "Ja. Free hält immer genau eine Kandidatenseite ausgewählt; bei der Wahl einer anderen Seite wechselt die Auswahl. Pro lässt Sie mehrere Seiten auswählen, nicht benötigte entfernen und die übrigen neu anordnen." }, { q: "Kann ich das Ergebnis offline lesen?", a: "Ja. Betten Sie Bilder für die Offline-Nutzung ein oder behalten Sie Online-Verweise bei, um die HTML-Datei kleiner zu halten. Verlinkte Dokumente können ebenfalls zusammen mit ihr gespeichert werden." }, { q: "Werden Seiteninhalte auf Ihre Server hochgeladen?", a: "Nein. Alles wird auf Ihrem Gerät verarbeitet. Free speichert genau eine gewählte Kandidatenseite; Pro bündelt die Inhalte mehrerer gewählter Seiten. Sicherheits-, Authentifizierungs-, Berechtigungs-, Quellseiten- und Geräteschutzlimits gelten weiterhin." }, { q: "Worin unterscheidet sich dies von einem Tool zum Speichern einzelner Seiten wie SingleFile?", a: "Einzelseiten-Tools sichern die geöffnete Seite. Grab All Files findet zusätzlich zugehörige Kandidaten: Free speichert die gewählte Seite, Pro bündelt die lesbaren Inhalte mehrerer gewählter Seiten mit gemeinsamem Inhaltsverzeichnis." }]
        ),
        it: c(
          "Unire più pagine web in un unico file HTML | Grab All Files",
          "Free trova le pagine candidate e salva quella scelta. Pro unisce il contenuto di più pagine selezionate in un HTML con indice, ricerca e stampa.",
          "Raccolta HTML di pagine web",
          "Free salva 1 pagina. Pro ne unisce più in un HTML.",
          "Parti dalla pagina aperta nel browser. Free elenca le pagine candidate correlate e ne mantiene esattamente una selezionata per il salvataggio HTML. Pro consente di selezionare e ordinare più candidate e ne unisce il contenuto leggibile in un HTML con indice comune.",
          ["Ricerche, documentazione, manuali e siti di riferimento distribuiti su molte pagine.", "Salvare articoli correlati o informazioni pubbliche come un unico documento portatile da consultare offline.", "Creare un archivio ricercabile e stampabile con link chiari alle fonti.", "Preparare facoltativamente Markdown con fonti tracciabili, JSONL, un manifest e dati tabellari per l’analisi con IA."],
          ["Apri la pagina iniziale e scegli «Unisci pagine in HTML» in Grab All Files.", "Controlla le candidate: Free ne mantiene esattamente una selezionata; Pro consente di selezionarne e riordinarne più di una.", "Scegli le opzioni per immagini e file collegati. Free salva la pagina scelta; Pro crea un HTML unificato con indice comune."],
          [{ q: "Posso scegliere quali pagine includere?", a: "Sì. Free mantiene esattamente una pagina candidata selezionata alla volta; scegliendone un’altra, la selezione cambia. Pro consente di selezionare più pagine, rimuovere quelle inutili e riordinare le altre." }, { q: "Posso leggere il risultato offline?", a: "Sì. Incorpora le immagini per la lettura offline oppure mantieni i riferimenti online per ridurre le dimensioni del file HTML. Anche i documenti collegati possono essere salvati insieme al file." }, { q: "Il contenuto delle pagine viene caricato sui vostri server?", a: "No. Tutto viene elaborato sul dispositivo. Free salva esattamente una pagina candidata scelta; Pro unisce il contenuto di più pagine selezionate. Si applicano i limiti di sicurezza, autenticazione, autorizzazione, sito sorgente e protezione del dispositivo." }, { q: "In cosa si differenzia da uno strumento come SingleFile, che salva una sola pagina?", a: "Gli strumenti per una singola pagina conservano quella aperta. Grab All Files trova anche candidate correlate: Free salva quella scelta e Pro unisce il contenuto leggibile di più pagine selezionate in un HTML con indice comune." }]
        ),
        ko: c(
          "여러 웹페이지를 하나의 HTML 파일로 합치기 | Grab All Files",
          "Free는 관련 후보를 찾아 선택한 1페이지를 저장합니다. Pro는 선택한 여러 페이지 본문을 공통 목차가 있는 검색·인쇄 가능한 하나의 HTML로 결합합니다.",
          "웹페이지 HTML 수집",
          "Free는 1페이지 저장. Pro는 여러 페이지를 하나의 HTML로.",
          "브라우저에 열려 있는 페이지에서 시작하세요. Free는 관련 후보를 나열하고 HTML 저장용으로 정확히 1개만 선택된 상태를 유지합니다. Pro는 여러 후보를 선택하고 순서를 바꾼 뒤 읽기 쉬운 본문을 공통 목차가 있는 하나의 HTML로 결합합니다.",
          ["여러 페이지에 흩어진 조사 자료, 문서, 설명서 및 참고 사이트.", "관련 기사나 공개 정보를 휴대 가능한 하나의 오프라인 문서로 저장.", "명확한 출처 링크가 있는 검색·인쇄 가능한 아카이브 생성.", "AI 분석을 위해 출처를 추적할 수 있는 Markdown, JSONL, manifest 및 표 데이터를 선택적으로 준비."],
          ["시작 페이지를 열고 Grab All Files에서 “페이지를 HTML로 합치기”를 선택하세요.", "후보를 확인하세요. Free는 정확히 1개만 선택 상태로 유지하고, Pro는 여러 페이지를 선택하고 순서를 바꿀 수 있습니다.", "이미지와 링크 파일 옵션을 선택하세요. Free는 선택한 페이지를 저장하고, Pro는 공통 목차가 있는 결합 HTML을 만듭니다."],
          [{ q: "포함할 페이지를 직접 선택할 수 있나요?", a: "네. Free는 한 번에 정확히 1개의 후보만 선택 상태로 유지하며 다른 페이지를 고르면 선택이 전환됩니다. Pro는 여러 페이지를 선택하고 필요 없는 항목을 제거하며 순서를 바꿀 수 있습니다." }, { q: "결과를 오프라인에서 읽을 수 있나요?", a: "네. 이미지를 포함해 오프라인에서 읽거나 온라인 참조를 유지해 HTML 파일 크기를 줄일 수 있습니다. 링크된 문서도 HTML 파일과 함께 저장할 수 있습니다." }, { q: "페이지 콘텐츠가 서버에 업로드되나요?", a: "아니요. 모든 처리는 기기에서 실행됩니다. Free는 선택한 후보 1페이지만 저장하고 Pro는 선택한 여러 페이지 본문을 결합합니다. 안전, 인증, 권한, 원본 사이트 및 기기 보호 제한은 계속 적용됩니다." }, { q: "SingleFile 같은 단일 페이지 저장 도구와는 무엇이 다른가요?", a: "단일 페이지 저장 도구는 현재 열린 페이지를 보존합니다. Grab All Files는 관련 후보도 찾습니다. Free는 선택한 1페이지를 저장하고, Pro는 선택한 여러 페이지의 읽기 쉬운 본문을 공통 목차가 있는 하나의 HTML로 결합합니다." }]
        ),
        pt_BR: c(
          "Juntar páginas da web em um arquivo HTML | Grab All Files",
          "O Free encontra candidatas relacionadas e salva a página escolhida. O Pro reúne o conteúdo de várias páginas selecionadas em um HTML com sumário, pesquisa e impressão.",
          "Coleta de páginas da web em HTML",
          "Free salva 1 página. Pro reúne várias em um HTML.",
          "Comece pela página aberta no navegador. O Free lista candidatas relacionadas e mantém exatamente uma selecionada para salvar como HTML. O Pro permite selecionar e ordenar várias candidatas e reúne o conteúdo legível em um HTML com sumário comum.",
          ["Pesquisas, documentações, manuais e sites de referência distribuídos por várias páginas.", "Salvar artigos relacionados ou informações públicas como um único documento portátil para leitura offline.", "Criar um arquivo pesquisável e pronto para impressão, com links claros para as fontes.", "Preparar opcionalmente Markdown com fontes rastreáveis, JSONL, um manifest e dados tabulares para análise por IA."],
          ["Abra a página inicial e selecione “Combinar páginas em HTML” no Grab All Files.", "Revise as candidatas: o Free mantém exatamente uma selecionada; o Pro permite selecionar e reordenar várias.", "Escolha opções de imagens e arquivos vinculados. O Free salva a página escolhida; o Pro cria um HTML combinado com sumário comum."],
          [{ q: "Posso escolher quais páginas serão incluídas?", a: "Sim. O Free mantém exatamente uma candidata selecionada por vez; ao escolher outra, a seleção muda. O Pro permite selecionar várias páginas, remover as desnecessárias e reordenar as demais." }, { q: "Posso ler o resultado offline?", a: "Sim. Incorpore imagens para leitura offline ou mantenha referências online para reduzir o tamanho do arquivo HTML. Os documentos vinculados também podem ser salvos junto com ele." }, { q: "O conteúdo das páginas é enviado aos seus servidores?", a: "Não. Tudo é processado no dispositivo. O Free salva exatamente uma página candidata escolhida; o Pro reúne o conteúdo de várias páginas selecionadas. Aplicam-se limites de segurança, autenticação, permissão, site de origem e proteção do dispositivo." }, { q: "Qual é a diferença entre isso e uma ferramenta que salva uma única página, como o SingleFile?", a: "Ferramentas de uma página preservam a página aberta. O Grab All Files também encontra candidatas relacionadas: o Free salva a página escolhida e o Pro reúne o conteúdo legível de várias páginas selecionadas em um HTML com sumário comum." }]
        ),
        zh_CN: c(
          "将多个网页合并为一个 HTML 文件 | Grab All Files",
          "Free 查找相关候选并保存所选的1个页面。Pro 将多个所选页面正文合并为一个带统一目录、可搜索、可打印的 HTML 文件。",
          "网页 HTML 收集",
          "Free 保存1页。Pro 将多页合并为一个 HTML。",
          "从浏览器当前打开的页面开始。Free 会列出相关候选，并始终仅保留1个选中项用于保存 HTML。Pro 可选择并排序多个候选，再将其便于阅读的正文合并为一个带统一目录的 HTML。",
          ["分散在多个页面中的研究资料、文档、手册和参考网站。", "将相关文章或公开信息保存为一个便于携带的离线文档。", "创建带有清晰来源链接、可搜索、可打印的存档。", "按需准备来源可追溯的 Markdown、JSONL、manifest 和表格数据，用于 AI 分析。"],
          ["打开起始页面，在 Grab All Files 中选择“将页面合并为 HTML”。", "检查候选：Free 始终仅保留1个选中项；Pro 可选择多个页面并调整顺序。", "选择图片和链接文件选项。Free 保存所选页面；Pro 创建带统一目录的合并 HTML。"],
          [{ q: "可以选择要收录哪些页面吗？", a: "可以。Free 每次始终仅选中1个候选；选择其他页面时，选中项会自动切换。Pro 可选择多个页面、删除不需要的页面并调整其余页面的顺序。" }, { q: "结果可以离线阅读吗？", a: "可以。您可以嵌入图片以便离线阅读，也可以保留在线引用以减小 HTML 文件的大小。链接的文档也可与 HTML 文件一并保存。" }, { q: "页面内容会上传到你们的服务器吗？", a: "不会。所有处理均在您的设备上完成。Free 仅保存所选的1个候选页面；Pro 将多个所选页面正文合并。安全、身份验证、权限、源网站和设备保护限制仍然适用。" }, { q: "这与 SingleFile 等单页面保存工具有何不同？", a: "单页面保存工具保留当前打开的页面。Grab All Files 还会查找相关候选：Free 保存所选的1页，Pro 将多个所选页面中便于阅读的正文合并为一个带统一目录的 HTML。" }]
        ),
        zh_TW: c(
          "將多個網頁合併成一個 HTML 檔案 | Grab All Files",
          "Free 尋找相關候選並儲存所選的1個頁面。Pro 將多個所選頁面正文合併成一個附有統一目錄、可搜尋且可列印的 HTML 檔案。",
          "網頁 HTML 收集",
          "Free 儲存1頁。Pro 將多頁合併成一個 HTML。",
          "從瀏覽器目前開啟的頁面開始。Free 會列出相關候選，並始終只保留1個選取項目用於儲存 HTML。Pro 可選取並排序多個候選，再將其便於閱讀的正文合併成一個附有統一目錄的 HTML。",
          ["分散在多個頁面中的研究資料、文件、手冊和參考網站。", "將相關文章或公開資訊儲存為一個便於攜帶的離線文件。", "建立附有清楚來源連結、可搜尋且可列印的封存檔。", "按需準備來源可追溯的 Markdown、JSONL、manifest 和表格資料，用於 AI 分析。"],
          ["開啟起始頁面，並在 Grab All Files 中選擇「將頁面合併成 HTML」。", "檢視候選：Free 始終只保留1個選取項目；Pro 可選取多個頁面並調整順序。", "選擇圖片和連結檔案選項。Free 儲存所選頁面；Pro 建立附有統一目錄的合併 HTML。"],
          [{ q: "可以選擇要收錄哪些頁面嗎？", a: "可以。Free 每次始終只選取1個候選；選擇其他頁面時，選取項目會自動切換。Pro 可選取多個頁面、移除不需要的頁面並調整其餘頁面的順序。" }, { q: "結果可以離線閱讀嗎？", a: "可以。您可以嵌入圖片以供離線閱讀，也可以保留線上參照以縮小 HTML 檔案。連結的文件也可與 HTML 檔案一併儲存。" }, { q: "頁面內容會上傳到你們的伺服器嗎？", a: "不會。所有處理均在您的裝置上完成。Free 只儲存所選的1個候選頁面；Pro 將多個所選頁面正文合併。安全、驗證、權限、來源網站和裝置保護限制仍然適用。" }, { q: "這與 SingleFile 等單頁儲存工具有何不同？", a: "單頁儲存工具保留目前開啟的頁面。Grab All Files 還會尋找相關候選：Free 儲存所選的1頁，Pro 將多個所選頁面中便於閱讀的正文合併成一個附有統一目錄的 HTML。" }]
        )
      }
    },
    "download-all-pdfs": {
      path: "download-all-pdfs.html",
      related: ["merge-pdfs-locally", "download-files-from-webpage", "internal-portal-downloads"],
      copy: {
        en: c(
          "Download all PDFs from a website | Grab All Files",
          "Download linked PDFs from a page or its folder on Chrome, Edge or Firefox. Filter results, save up to 10 files per run for free, or merge PDFs locally.",
          "PDF collection",
          "Download all PDFs from a website without opening each file.",
          "Grab All Files finds PDFs exposed as normal links, embedded viewers, iframe sources, lazy-loaded assets, fetch/XHR responses, and CMS download routes. Filter to PDF, select what you need, then download or merge locally in your browser.",
          ["Public reports, forms, and disclosures spread across multiple pages.", "Course materials, papers, and research PDFs on faculty sites.", "PDF viewer pages where the direct file URL is hidden.", "Same-site crawls that need sitemap.xml and JavaScript-menu coverage."],
          ["Open the starting page and choose the link depth. Linked pages are scanned within the starting page’s folder; depth 0 checks only that page.", "Filter the detected results to PDF and review title, source page, size, and URL.", "Download selected PDFs, build a ZIP, or merge them into one local PDF."],
          [{ q: "Can it find PDFs inside viewers or iframes?", a: "Yes. It checks iframe sources, viewer URLs, fetch/XHR responses, blob URLs, and common CMS routes where the direct PDF link is not visible." }, { q: "Can it crawl more than one page?", a: "Yes. Increase the link depth to scan linked pages within the starting page’s folder. For example, /~name/course.html stays within /~name/. Pages outside that folder are not crawled." }, { q: "Are PDFs uploaded for merging?", a: "No. PDF merge runs locally in your browser." }, { q: "Can I download PDFs for free?", a: "Yes. Free saves up to 10 selected files per run. Pro removes that file-count limit. ZIP, local PDF merge and file-information CSV export are available in Free." }, { q: "Does it guarantee every PDF will be saved?", a: "No. Results depend on the links found, scan depth, site access and browser support. Review failed downloads, retry them or export the failed URLs with their reasons. The extension does not bypass login or site restrictions." }]
        ),
        ja: c(
          "Webサイト上のPDFを一括ダウンロード | Grab All Files",
          "Chrome・Edge・FirefoxでWebサイトのPDFを一括ダウンロード。起点ページのフォルダ配下を巡回し、PDFだけに絞って無料で1回10件まで保存。ZIP保存やローカルPDF結合にも対応。",
          "PDF収集",
          "Webサイト上のPDFを、1つずつ開かずに一括ダウンロード。",
          "通常リンク、埋め込みPDFビューア、iframe、遅延読み込み、fetch/XHRレスポンス、CMSのダウンロードルートにあるPDFを検出します。PDFで絞り込み、必要なものだけ選び、保存またはブラウザ内で結合できます。",
          ["複数ページに分散した公開報告書、申請書、開示資料。", "大学・研究機関の講義資料、論文、配布PDF。", "直接URLが見えないPDFビューアページ。", "sitemap.xmlやJavaScriptメニューも追いたい同一サイト内クロール。"],
          ["起点ページを開き、リンクをたどる深さを選びます。深さ0はそのページのみ、1以上は起点ページのフォルダ配下を巡回します。", "検出結果をPDFで絞り込み、タイトル、元ページ、サイズ、URLを確認。", "選択PDFを一括保存、ZIP化、またはローカルで1つのPDFに結合。"],
          [{ q: "PDFビューアやiframe内のPDFも見つかりますか？", a: "はい。iframe、ビューアURL、fetch/XHRレスポンス、blob URL、CMSルートなど直接リンクが見えにくい場所も確認します。" }, { q: "複数ページをクロールできますか？", a: "はい。深さを上げると、起点ページのフォルダ配下にあるリンク先を巡回します。例えば /~name/course.html が起点なら /~name/ 配下が対象で、大学のサイト全体には広がりません。" }, { q: "PDF結合でファイルはアップロードされますか？", a: "いいえ。PDF結合はブラウザ内でローカル処理されます。" }, { q: "PDFを無料で一括ダウンロードできますか？", a: "はい。無料版は1回10件まで選択して保存できます。Proではこの件数上限がなくなります。ZIP保存、ローカルPDF結合、ファイル情報CSV出力も無料版で利用できます。" }, { q: "サイト内のすべてのPDFを必ず保存できますか？", a: "保証はできません。見つかったリンク、巡回の深さ、サイトへのアクセス権限、ブラウザーの対応状況によって結果が変わります。失敗したダウンロードは再試行するか、原因付きの失敗URL一覧をCSV出力して確認できます。ログインやサイトの制限を回避する機能ではありません。" }]
        ),
        es: c(
          "Descargar todos los PDF de un sitio web | Grab All Files",
          "Descarga PDFs enlazados desde una página o su carpeta en Chrome, Edge o Firefox. Filtra resultados, guarda hasta 10 archivos por ejecución gratis o fusiona PDFs localmente.",
          "Recopilación de PDF",
          "Descarga todos los PDF de un sitio sin abrir cada archivo.",
          "Grab All Files detecta PDFs en enlaces normales, visores incrustados, iframes, carga diferida, respuestas fetch/XHR y rutas de CMS. Filtra por PDF, selecciona y descarga o fusiona localmente.",
          ["Informes públicos, formularios y documentos repartidos en varias páginas.", "Materiales de curso, artículos y PDFs de investigación.", "Páginas con visor PDF donde la URL directa está oculta.", "Rastreos del mismo sitio que necesitan sitemap.xml y menús JavaScript."],
          ["Abre la página inicial y elige la profundidad de enlaces. Las páginas enlazadas se escanean dentro de la carpeta de la página inicial; la profundidad 0 revisa solo esa página.", "Filtra los resultados a PDF y revisa título, página fuente, tamaño y URL.", "Descarga, crea un ZIP o fusiona PDFs localmente."],
          [{ q: "¿Encuentra PDFs en visores o iframes?", a: "Sí. Revisa iframes, URLs de visor, respuestas fetch/XHR, blob URLs y rutas CMS comunes." }, { q: "¿Puede rastrear más de una página?", a: "Sí. Aumenta la profundidad para escanear las páginas enlazadas dentro de la carpeta de la página inicial. Por ejemplo, /~name/course.html se mantiene dentro de /~name/. Las páginas fuera de esa carpeta no se rastrean." }, { q: "¿Sube PDFs para fusionarlos?", a: "No. La fusión PDF se ejecuta localmente en el navegador." }, { q: "¿Puedo descargar PDFs gratis?", a: "Sí. La versión gratuita guarda hasta 10 archivos seleccionados por ejecución. Pro elimina ese límite. ZIP, fusión local de PDF y exportación CSV de información de archivos están disponibles gratis." }, { q: "¿Garantiza que se guardarán todos los PDF?", a: "No. Los resultados dependen de los enlaces encontrados, la profundidad, el acceso al sitio y el soporte del navegador. Revisa las descargas fallidas, reinténtalas o exporta las URLs fallidas con sus motivos. La extensión no elude inicios de sesión ni restricciones del sitio." }]
        ),
        fr: c(
          "Télécharger tous les PDF d'un site web | Grab All Files",
          "Téléchargez les PDF liés d'une page ou de son dossier sur Chrome, Edge ou Firefox. Filtrez, enregistrez gratuitement jusqu'à 10 fichiers par exécution ou fusionnez les PDF localement.",
          "Collecte PDF",
          "Téléchargez tous les PDF d'un site sans ouvrir chaque fichier.",
          "Grab All Files détecte les PDF dans les liens, viewers intégrés, iframes, chargements différés, réponses fetch/XHR et routes CMS. Filtrez les PDF, sélectionnez, puis téléchargez ou fusionnez localement.",
          ["Rapports publics, formulaires et publications répartis sur plusieurs pages.", "Supports de cours, articles et PDF de recherche.", "Pages avec viewer PDF où l'URL directe est masquée.", "Crawl du même site avec sitemap.xml et menus JavaScript."],
          ["Ouvrez la page de départ et choisissez la profondeur de liens. Les pages liées sont analysées dans le dossier de la page de départ ; la profondeur 0 ne vérifie que cette page.", "Filtrez les résultats sur PDF et vérifiez titre, page source, taille et URL.", "Téléchargez, créez un ZIP ou fusionnez les PDF localement."],
          [{ q: "Trouve-t-il les PDF dans les viewers ou iframes ?", a: "Oui. Il vérifie iframes, URLs de viewer, réponses fetch/XHR, blob URLs et routes CMS courantes." }, { q: "Peut-il crawler plusieurs pages ?", a: "Oui. Augmentez la profondeur pour analyser les pages liées dans le dossier de la page de départ. Par exemple, /~name/course.html reste dans /~name/. Les pages hors de ce dossier ne sont pas explorées." }, { q: "Les PDF sont-ils envoyés pour fusion ?", a: "Non. La fusion se fait localement dans le navigateur." }, { q: "Puis-je télécharger des PDF gratuitement ?", a: "Oui. La version gratuite enregistre jusqu'à 10 fichiers sélectionnés par exécution. Pro supprime cette limite. Le ZIP, la fusion PDF locale et l'export CSV des informations de fichiers sont disponibles gratuitement." }, { q: "Garantit-il que chaque PDF sera enregistré ?", a: "Non. Les résultats dépendent des liens trouvés, de la profondeur, de l'accès au site et de la prise en charge du navigateur. Vérifiez les téléchargements échoués, relancez-les ou exportez les URL en échec avec leurs motifs. L'extension ne contourne ni les connexions ni les restrictions du site." }]
        ),
        de: c(
          "Alle PDFs von einer Website herunterladen | Grab All Files",
          "Laden Sie verlinkte PDFs einer Seite oder ihres Ordners in Chrome, Edge oder Firefox herunter. Ergebnisse filtern, kostenlos bis zu 10 Dateien pro Lauf speichern oder PDFs lokal zusammenführen.",
          "PDF-Sammlung",
          "Laden Sie alle PDFs einer Website herunter, ohne jede Datei zu öffnen.",
          "Grab All Files findet PDFs in normalen Links, eingebetteten Viewern, iframes, Lazy Loading, fetch/XHR-Antworten und CMS-Downloadrouten. Nach PDF filtern, auswählen, herunterladen oder lokal zusammenführen.",
          ["Öffentliche Berichte, Formulare und Veröffentlichungen über viele Seiten.", "Kursmaterialien, Arbeiten und Forschungs-PDFs.", "PDF-Viewer-Seiten ohne sichtbare Direkt-URL.", "Same-Site-Crawls mit sitemap.xml und JavaScript-Menüs."],
          ["Startseite öffnen und Linktiefe wählen. Verlinkte Seiten werden innerhalb des Ordners der Startseite gescannt; Tiefe 0 prüft nur diese Seite.", "Ergebnisse auf PDF filtern und Titel, Quellseite, Größe und URL prüfen.", "PDFs herunterladen, ZIP erstellen oder lokal zusammenführen."],
          [{ q: "Findet es PDFs in Viewern oder iframes?", a: "Ja. Es prüft iframes, Viewer-URLs, fetch/XHR-Antworten, blob URLs und CMS-Routen." }, { q: "Kann es mehrere Seiten crawlen?", a: "Ja. Erhöhen Sie die Linktiefe, um verlinkte Seiten im Ordner der Startseite zu scannen. Beispiel: /~name/course.html bleibt innerhalb von /~name/. Seiten außerhalb dieses Ordners werden nicht gecrawlt." }, { q: "Werden PDFs zum Zusammenführen hochgeladen?", a: "Nein. Das Zusammenführen läuft lokal im Browser." }, { q: "Kann ich PDFs kostenlos herunterladen?", a: "Ja. Die kostenlose Version speichert bis zu 10 ausgewählte Dateien pro Lauf. Pro hebt diese Begrenzung auf. ZIP, lokales PDF-Zusammenführen und CSV-Export der Dateiinformationen sind kostenlos verfügbar." }, { q: "Wird garantiert, dass jede PDF gespeichert wird?", a: "Nein. Die Ergebnisse hängen von den gefundenen Links, der Scantiefe, dem Zugriff auf die Website und der Browserunterstützung ab. Prüfen Sie fehlgeschlagene Downloads, wiederholen Sie sie oder exportieren Sie die fehlgeschlagenen URLs mit Gründen. Die Erweiterung umgeht keine Anmeldungen oder Website-Beschränkungen." }]
        ),
        it: c(
          "Scaricare tutti i PDF da un sito web | Grab All Files",
          "Scarica i PDF collegati da una pagina o dalla sua cartella su Chrome, Edge o Firefox. Filtra i risultati, salva gratis fino a 10 file per esecuzione o unisci i PDF localmente.",
          "Raccolta PDF",
          "Scarica tutti i PDF da un sito senza aprire ogni file.",
          "Grab All Files rileva PDF in link normali, viewer incorporati, iframe, lazy loading, risposte fetch/XHR e rotte CMS. Filtra per PDF, seleziona, scarica o unisci localmente.",
          ["Report pubblici, moduli e documenti distribuiti su più pagine.", "Materiali didattici, articoli e PDF di ricerca.", "Pagine con viewer PDF dove l'URL diretto è nascosto.", "Crawl dello stesso sito con sitemap.xml e menu JavaScript."],
          ["Apri la pagina iniziale e scegli la profondità dei link. Le pagine collegate vengono analizzate all'interno della cartella della pagina iniziale; la profondità 0 controlla solo quella pagina.", "Filtra i risultati a PDF e controlla titolo, pagina sorgente, dimensione e URL.", "Scarica, crea un ZIP o unisci i PDF localmente."],
          [{ q: "Trova PDF in viewer o iframe?", a: "Sì. Controlla iframe, URL di viewer, risposte fetch/XHR, blob URL e rotte CMS." }, { q: "Può scansionare più pagine?", a: "Sì. Aumenta la profondità per analizzare le pagine collegate nella cartella della pagina iniziale. Ad esempio, /~name/course.html resta all'interno di /~name/. Le pagine fuori da quella cartella non vengono scansionate." }, { q: "I PDF vengono caricati per l'unione?", a: "No. L'unione PDF avviene localmente nel browser." }, { q: "Posso scaricare PDF gratis?", a: "Sì. La versione gratuita salva fino a 10 file selezionati per esecuzione. Pro rimuove questo limite. ZIP, unione PDF locale ed esportazione CSV delle informazioni sui file sono disponibili gratis." }, { q: "Garantisce che ogni PDF venga salvato?", a: "No. I risultati dipendono dai link trovati, dalla profondità, dall'accesso al sito e dal supporto del browser. Controlla i download non riusciti, riprovali o esporta le URL non riuscite con i motivi. L'estensione non aggira login o restrizioni del sito." }]
        ),
        ko: c(
          "웹사이트의 모든 PDF 다운로드 | Grab All Files",
          "Chrome, Edge, Firefox에서 페이지 또는 해당 폴더에 연결된 PDF를 다운로드합니다. 결과를 필터링하고 무료로 실행당 최대 10개 파일을 저장하거나 PDF를 로컬에서 병합하세요.",
          "PDF 수집",
          "각 파일을 열지 않고 웹사이트의 PDF를 한 번에 다운로드하세요.",
          "Grab All Files는 일반 링크, 내장 뷰어, iframe, 지연 로딩, fetch/XHR 응답, CMS 다운로드 경로의 PDF를 찾습니다. PDF로 필터링한 뒤 저장하거나 브라우저에서 로컬 병합할 수 있습니다.",
          ["여러 페이지에 흩어진 공공 보고서, 양식, 공개 자료.", "강의 자료, 논문, 연구 PDF.", "직접 URL이 보이지 않는 PDF 뷰어 페이지.", "sitemap.xml과 JavaScript 메뉴까지 필요한 동일 사이트 크롤링."],
          ["시작 페이지를 열고 링크 깊이를 선택합니다. 연결된 페이지는 시작 페이지의 폴더 안에서 스캔되며, 깊이 0은 해당 페이지만 확인합니다.", "결과를 PDF로 필터링하고 제목, 원본 페이지, 크기, URL을 확인합니다.", "PDF를 다운로드, ZIP 생성 또는 로컬 병합합니다."],
          [{ q: "뷰어 또는 iframe 안의 PDF도 찾나요?", a: "예. iframe, 뷰어 URL, fetch/XHR 응답, blob URL, CMS 경로를 확인합니다." }, { q: "여러 페이지를 크롤링할 수 있나요?", a: "예. 링크 깊이를 높이면 시작 페이지의 폴더 안에 있는 연결 페이지를 스캔합니다. 예를 들어 /~name/course.html은 /~name/ 안에서만 크롤링하며, 그 폴더 밖의 페이지는 크롤링하지 않습니다." }, { q: "PDF 병합 시 파일이 업로드되나요?", a: "아니요. 병합은 브라우저에서 로컬로 실행됩니다." }, { q: "PDF를 무료로 다운로드할 수 있나요?", a: "예. 무료 버전은 실행당 최대 10개의 선택 파일을 저장합니다. Pro는 이 파일 수 제한을 없앱니다. ZIP, 로컬 PDF 병합, 파일 정보 CSV 내보내기는 무료로 사용할 수 있습니다." }, { q: "모든 PDF가 반드시 저장되나요?", a: "보장되지 않습니다. 결과는 발견된 링크, 스캔 깊이, 사이트 접근 권한, 브라우저 지원에 따라 달라집니다. 실패한 다운로드를 검토해 다시 시도하거나 실패 URL과 원인을 내보낼 수 있습니다. 이 확장 프로그램은 로그인이나 사이트 제한을 우회하지 않습니다." }]
        ),
        pt_BR: c(
          "Baixar todos os PDFs de um site | Grab All Files",
          "Baixe PDFs vinculados de uma página ou da sua pasta no Chrome, Edge ou Firefox. Filtre os resultados, salve até 10 arquivos por execução grátis ou mescle PDFs localmente.",
          "Coleta de PDF",
          "Baixe todos os PDFs de um site sem abrir cada arquivo.",
          "Grab All Files detecta PDFs em links comuns, viewers incorporados, iframes, lazy loading, respostas fetch/XHR e rotas CMS. Filtre por PDF, selecione e baixe ou mescle localmente.",
          ["Relatórios públicos, formulários e divulgações espalhados por várias páginas.", "Materiais de curso, artigos e PDFs de pesquisa.", "Páginas com viewer PDF onde a URL direta fica oculta.", "Rastreamento do mesmo site com sitemap.xml e menus JavaScript."],
          ["Abra a página inicial e escolha a profundidade de links. As páginas vinculadas são verificadas dentro da pasta da página inicial; a profundidade 0 verifica apenas essa página.", "Filtre os resultados por PDF e revise título, página fonte, tamanho e URL.", "Baixe, crie um ZIP ou mescle PDFs localmente."],
          [{ q: "Ele encontra PDFs em viewers ou iframes?", a: "Sim. Verifica iframes, URLs de viewer, respostas fetch/XHR, blob URLs e rotas CMS." }, { q: "Pode rastrear mais de uma página?", a: "Sim. Aumente a profundidade para verificar as páginas vinculadas dentro da pasta da página inicial. Por exemplo, /~name/course.html permanece dentro de /~name/. Páginas fora dessa pasta não são rastreadas." }, { q: "Os PDFs são enviados para mesclar?", a: "Não. A mesclagem roda localmente no navegador." }, { q: "Posso baixar PDFs de graça?", a: "Sim. A versão gratuita salva até 10 arquivos selecionados por execução. O Pro remove esse limite. ZIP, mesclagem local de PDF e exportação CSV das informações dos arquivos estão disponíveis na versão gratuita." }, { q: "Garante que todos os PDFs serão salvos?", a: "Não. Os resultados dependem dos links encontrados, da profundidade, do acesso ao site e do suporte do navegador. Revise os downloads com falha, tente novamente ou exporte as URLs com falha e seus motivos. A extensão não contorna login nem restrições do site." }]
        ),
        zh_CN: c(
          "批量下载网站上的所有PDF | Grab All Files",
          "在Chrome、Edge或Firefox中下载页面或其所在文件夹中链接的PDF。可筛选结果，免费版每次最多保存10个文件，或在本地合并PDF。",
          "PDF收集",
          "无需逐个打开文件，即可下载网站上的所有PDF。",
          "Grab All Files 可检测普通链接、嵌入式查看器、iframe、懒加载、fetch/XHR响应和CMS下载路径中的PDF。按PDF筛选后，可下载或在浏览器本地合并。",
          ["分散在多页的公共报告、表单和公开资料。", "课程材料、论文和研究PDF。", "直接文件URL被隐藏的PDF查看器页面。", "需要sitemap.xml和JavaScript菜单覆盖的同站点爬取。"],
          ["打开起始页面并选择链接深度。链接页面会在起始页面所在文件夹内扫描；深度0仅检查该页面。", "将结果筛选为PDF，检查标题、来源页面、大小和URL。", "下载选中PDF，生成ZIP，或本地合并为一个PDF。"],
          [{ q: "能找到查看器或iframe中的PDF吗？", a: "可以。它会检查iframe、查看器URL、fetch/XHR响应、blob URL和常见CMS路径。" }, { q: "能爬取多个页面吗？", a: "可以。提高链接深度即可扫描起始页面所在文件夹内的链接页面。例如，/~name/course.html 只会在 /~name/ 内爬取，该文件夹以外的页面不会被爬取。" }, { q: "合并PDF会上传文件吗？", a: "不会。PDF合并在浏览器本地运行。" }, { q: "可以免费下载PDF吗？", a: "可以。免费版每次最多保存10个选中文件。Pro取消此文件数量限制。ZIP、本地PDF合并和文件信息CSV导出在免费版中均可使用。" }, { q: "能保证保存所有PDF吗？", a: "不能保证。结果取决于找到的链接、扫描深度、网站访问权限和浏览器支持。可检查失败的下载并重试，或导出附带原因的失败URL列表。本扩展不会绕过登录或网站限制。" }]
        ),
        zh_TW: c(
          "批次下載網站上的所有PDF | Grab All Files",
          "在Chrome、Edge或Firefox中下載頁面或其所在資料夾中連結的PDF。可篩選結果，免費版每次最多儲存10個檔案，或在本機合併PDF。",
          "PDF收集",
          "無需逐一開啟檔案，即可下載網站上的所有PDF。",
          "Grab All Files 可偵測普通連結、嵌入式檢視器、iframe、延遲載入、fetch/XHR回應和CMS下載路徑中的PDF。依PDF篩選後，可下載或在瀏覽器本機合併。",
          ["分散在多頁的公共報告、表單和公開資料。", "課程教材、論文和研究PDF。", "直接檔案URL被隱藏的PDF檢視器頁面。", "需要sitemap.xml和JavaScript選單覆蓋的同站爬取。"],
          ["開啟起始頁面並選擇連結深度。連結頁面會在起始頁面所在資料夾內掃描；深度0僅檢查該頁面。", "將結果篩選為PDF，檢查標題、來源頁面、大小和URL。", "下載選取PDF，產生ZIP，或本機合併為一個PDF。"],
          [{ q: "能找到檢視器或iframe中的PDF嗎？", a: "可以。它會檢查iframe、檢視器URL、fetch/XHR回應、blob URL和常見CMS路徑。" }, { q: "能爬取多個頁面嗎？", a: "可以。提高連結深度即可掃描起始頁面所在資料夾內的連結頁面。例如，/~name/course.html 只會在 /~name/ 內爬取，該資料夾以外的頁面不會被爬取。" }, { q: "合併PDF會上傳檔案嗎？", a: "不會。PDF合併在瀏覽器本機執行。" }, { q: "可以免費下載PDF嗎？", a: "可以。免費版每次最多儲存10個選取檔案。Pro取消此檔案數量限制。ZIP、本機PDF合併和檔案資訊CSV匯出在免費版中皆可使用。" }, { q: "能保證儲存所有PDF嗎？", a: "無法保證。結果取決於找到的連結、掃描深度、網站存取權限和瀏覽器支援。可檢查失敗的下載並重試，或匯出附帶原因的失敗URL清單。本擴充功能不會繞過登入或網站限制。" }]
        )
      }
    },
    "bulk-download-images": {
      path: "bulk-download-images.html",
      related: ["download-files-from-webpage", "internal-portal-downloads", "download-all-pdfs"],
      copy: {
        en: c("Bulk download images from a web page | Grab All Files", "Detect visible, lazy-loaded, background, and blob images, then save selected image files in bulk or export their URLs.", "Image collection", "Bulk download images from a web page, including lazy-loaded assets.", "Image galleries often hide files in lazy loading, CSS backgrounds, srcset, blob URLs, and scripts. Grab All Files surfaces the image URLs it can detect so you can filter, select, and save them in one run.", ["Image galleries and media libraries.", "Product, portfolio, or documentation pages with many image assets.", "Pages using lazy loading, srcset, or CSS background images.", "CSV exports of image URLs for later review."], ["Open the page or paste a URL.", "Filter results to image types such as JPG, PNG, WebP, GIF, or SVG.", "Download selected files, organize by domain/type, or export URLs as CSV."], [{ q: "Does it detect lazy-loaded images?", a: "Yes. It checks DOM attributes, srcset values, background images, blob URLs, and network-discovered file responses." }, { q: "Can I download only some image types?", a: "Yes. Use extension filters for file extension, size, name, or source page." }, { q: "Can I export image URLs instead of downloading?", a: "Yes. Export the detected file list as CSV." }]),
        ja: c("Webページの画像を一括ダウンロード | Grab All Files", "表示画像、遅延読み込み、背景画像、blob画像を検出し、選択画像を一括保存またはURLをCSV出力できます。", "画像収集", "遅延読み込み画像も含めて、Webページの画像を一括ダウンロード。", "画像ギャラリーでは、遅延読み込み、CSS背景、srcset、blob URL、スクリプト内に画像が隠れていることがあります。Grab All Files は検出できる画像URLを一覧化し、絞り込み・選択・保存をまとめて行えます。", ["画像ギャラリーやメディアライブラリ。", "多数の画像がある商品、ポートフォリオ、ドキュメントページ。", "lazy loading、srcset、CSS背景画像を使うページ。", "後処理用に画像URLをCSV出力したい場面。"], ["ページを開く、またはURLを貼り付ける。", "JPG、PNG、WebP、GIF、SVGなど画像形式で絞り込む。", "選択ファイルを保存、種類・ドメイン別に整理、またはURLをCSV出力。"], [{ q: "遅延読み込み画像も検出できますか？", a: "はい。DOM属性、srcset、背景画像、blob URL、ネットワーク上のファイルレスポンスを確認します。" }, { q: "画像形式を限定できますか？", a: "はい。拡張子、サイズ、名前、元ページで絞り込めます。" }, { q: "ダウンロードせずURLだけ出せますか？", a: "はい。検出リストをCSVとして出力できます。" }]),
        es: c("Descargar imágenes en masa de una página | Grab All Files", "Detecta imágenes visibles, lazy-loaded, de fondo y blob; guarda imágenes seleccionadas o exporta URLs.", "Recopilación de imágenes", "Descarga imágenes en masa, incluidas las lazy-loaded.", "Muchas galerías esconden archivos en lazy loading, fondos CSS, srcset, blob URLs y scripts. Grab All Files muestra las URLs detectables para filtrar, seleccionar y guardar en una pasada.", ["Galerías y bibliotecas multimedia.", "Páginas de producto, portafolio o documentación con muchas imágenes.", "Páginas con lazy loading, srcset o fondos CSS.", "Exportación CSV de URLs para revisión posterior."], ["Abre la página o pega una URL.", "Filtra a JPG, PNG, WebP, GIF o SVG.", "Descarga, organiza por dominio/tipo o exporta URLs CSV."], [{ q: "¿Detecta imágenes lazy-loaded?", a: "Sí. Revisa atributos DOM, srcset, fondos, blob URLs y respuestas de red." }, { q: "¿Puedo bajar solo ciertos tipos?", a: "Sí. Filtra por extensión, tamaño, nombre o página fuente." }, { q: "¿Puedo exportar URLs?", a: "Sí. Exporta la lista detectada como CSV." }]),
        fr: c("Télécharger les images d'une page en masse | Grab All Files", "Détecte images visibles, lazy-loaded, arrière-plans et blob ; téléchargez ou exportez les URLs.", "Collecte d'images", "Téléchargez les images d'une page, y compris les ressources lazy-loaded.", "Les galeries cachent souvent les fichiers dans le lazy loading, CSS backgrounds, srcset, blob URLs et scripts. Grab All Files affiche les URLs détectables pour filtrer et sauvegarder.", ["Galeries et bibliothèques médias.", "Pages produit, portfolio ou documentation riches en images.", "Pages avec lazy loading, srcset ou backgrounds CSS.", "Export CSV des URLs d'image pour analyse."], ["Ouvrez la page ou collez une URL.", "Filtrez sur JPG, PNG, WebP, GIF ou SVG.", "Téléchargez, organisez par domaine/type ou exportez en CSV."], [{ q: "Détecte-t-il les images lazy-loaded ?", a: "Oui. Il vérifie attributs DOM, srcset, arrière-plans, blob URLs et réponses réseau." }, { q: "Puis-je limiter les formats ?", a: "Oui. Filtrez par extension, taille, nom ou page source." }, { q: "Puis-je exporter les URLs ?", a: "Oui. La liste détectée peut être exportée en CSV." }]),
        de: c("Bilder einer Webseite gesammelt laden | Grab All Files", "Findet sichtbare, lazy-loaded, Hintergrund- und blob-Bilder; speichert Auswahl oder exportiert URLs.", "Bildsammlung", "Laden Sie Bilder einer Webseite gesammelt herunter, auch Lazy-Loading-Assets.", "Galerien verstecken Dateien oft in Lazy Loading, CSS-Hintergründen, srcset, blob URLs und Skripten. Grab All Files zeigt erkannte Bild-URLs zum Filtern, Auswählen und Speichern.", ["Bildgalerien und Medienbibliotheken.", "Produkt-, Portfolio- oder Dokumentationsseiten mit vielen Bildern.", "Seiten mit Lazy Loading, srcset oder CSS-Hintergründen.", "CSV-Export von Bild-URLs für spätere Prüfung."], ["Seite öffnen oder URL einfügen.", "Auf JPG, PNG, WebP, GIF oder SVG filtern.", "Herunterladen, nach Domain/Typ organisieren oder URLs als CSV exportieren."], [{ q: "Findet es lazy-loaded Bilder?", a: "Ja. DOM-Attribute, srcset, Hintergründe, blob URLs und Netzwerkantworten werden geprüft." }, { q: "Kann ich Dateitypen einschränken?", a: "Ja. Nach Erweiterung, Größe, Name oder Quellseite filtern." }, { q: "Kann ich URLs exportieren?", a: "Ja. Die Liste kann als CSV exportiert werden." }]),
        it: c("Scaricare immagini in massa da una pagina | Grab All Files", "Rileva immagini visibili, lazy-loaded, background e blob; salva immagini selezionate o esporta URL.", "Raccolta immagini", "Scarica immagini in massa, incluse risorse lazy-loaded.", "Le gallerie nascondono spesso file in lazy loading, background CSS, srcset, blob URL e script. Grab All Files mostra le URL rilevabili per filtrare, selezionare e salvare.", ["Gallerie e librerie media.", "Pagine prodotto, portfolio o documentazione con molte immagini.", "Pagine con lazy loading, srcset o background CSS.", "Export CSV delle URL immagine."], ["Apri la pagina o incolla una URL.", "Filtra per JPG, PNG, WebP, GIF o SVG.", "Scarica, organizza per dominio/tipo o esporta URL CSV."], [{ q: "Rileva immagini lazy-loaded?", a: "Sì. Controlla attributi DOM, srcset, background, blob URL e risposte di rete." }, { q: "Posso scaricare solo alcuni tipi?", a: "Sì. Filtra per estensione, dimensione, nome o pagina sorgente." }, { q: "Posso esportare URL?", a: "Sì. La lista può essere esportata in CSV." }]),
        ko: c("웹페이지 이미지 일괄 다운로드 | Grab All Files", "표시 이미지, 지연 로딩, 배경 이미지, blob 이미지를 감지해 선택 이미지를 저장하거나 URL을 CSV로 내보냅니다.", "이미지 수집", "지연 로딩 자산까지 포함해 웹페이지 이미지를 한 번에 다운로드하세요.", "이미지 갤러리는 지연 로딩, CSS 배경, srcset, blob URL, 스크립트 안에 파일을 숨기는 경우가 많습니다. Grab All Files는 감지 가능한 이미지 URL을 보여주고 필터링, 선택, 저장을 한 번에 처리합니다.", ["이미지 갤러리와 미디어 라이브러리.", "이미지가 많은 제품, 포트폴리오, 문서 페이지.", "lazy loading, srcset, CSS 배경 이미지를 사용하는 페이지.", "이미지 URL CSV 내보내기."], ["페이지를 열거나 URL을 붙여넣습니다.", "JPG, PNG, WebP, GIF, SVG 등 이미지 유형으로 필터링합니다.", "선택 파일을 다운로드하거나 도메인/유형별 정리, CSV 내보내기를 합니다."], [{ q: "지연 로딩 이미지도 감지하나요?", a: "예. DOM 속성, srcset, 배경 이미지, blob URL, 네트워크 응답을 확인합니다." }, { q: "특정 이미지 형식만 받을 수 있나요?", a: "예. 확장자, 크기, 이름, 원본 페이지로 필터링할 수 있습니다." }, { q: "다운로드 대신 URL만 내보낼 수 있나요?", a: "예. 감지 목록을 CSV로 내보낼 수 있습니다." }]),
        pt_BR: c("Baixar imagens em massa de uma página | Grab All Files", "Detecta imagens visíveis, lazy-loaded, de fundo e blob; salva imagens selecionadas ou exporta URLs.", "Coleta de imagens", "Baixe imagens em massa, incluindo recursos lazy-loaded.", "Galerias costumam esconder arquivos em lazy loading, fundos CSS, srcset, blob URLs e scripts. Grab All Files mostra URLs detectáveis para filtrar, selecionar e salvar.", ["Galerias e bibliotecas de mídia.", "Páginas de produto, portfólio ou documentação com muitas imagens.", "Páginas com lazy loading, srcset ou fundos CSS.", "Exportação CSV de URLs de imagem."], ["Abra a página ou cole uma URL.", "Filtre por JPG, PNG, WebP, GIF ou SVG.", "Baixe, organize por domínio/tipo ou exporte URLs CSV."], [{ q: "Detecta imagens lazy-loaded?", a: "Sim. Verifica atributos DOM, srcset, fundos, blob URLs e respostas de rede." }, { q: "Posso baixar só alguns tipos?", a: "Sim. Filtre por extensão, tamanho, nome ou página fonte." }, { q: "Posso exportar URLs?", a: "Sim. Exporte a lista detectada como CSV." }]),
        zh_CN: c("批量下载网页图片 | Grab All Files", "检测可见图片、懒加载图片、背景图和blob图片，并批量保存或导出URL。", "图片收集", "批量下载网页图片，包括懒加载资源。", "图片库常把文件藏在懒加载、CSS背景、srcset、blob URL和脚本中。Grab All Files 会列出可检测的图片URL，便于筛选、选择和保存。", ["图片库和媒体库。", "包含大量图片的产品、作品集或文档页面。", "使用懒加载、srcset或CSS背景图的页面。", "将图片URL导出为CSV以便后续处理。"], ["打开页面或粘贴URL。", "按JPG、PNG、WebP、GIF、SVG等图片类型筛选。", "下载选中文件，按域名/类型整理，或导出CSV。"], [{ q: "能检测懒加载图片吗？", a: "可以。会检查DOM属性、srcset、背景图、blob URL和网络文件响应。" }, { q: "能只下载某些图片类型吗？", a: "可以。按扩展名、大小、名称或来源页面筛选。" }, { q: "能只导出图片URL吗？", a: "可以。检测列表可导出为CSV。" }]),
        zh_TW: c("批次下載網頁圖片 | Grab All Files", "偵測可見圖片、延遲載入圖片、背景圖和blob圖片，並批次儲存或匯出URL。", "圖片收集", "批次下載網頁圖片，包括延遲載入資源。", "圖片庫常把檔案藏在延遲載入、CSS背景、srcset、blob URL和腳本中。Grab All Files 會列出可偵測的圖片URL，方便篩選、選取和儲存。", ["圖片庫和媒體庫。", "包含大量圖片的產品、作品集或文件頁面。", "使用延遲載入、srcset或CSS背景圖的頁面。", "將圖片URL匯出為CSV以便後續處理。"], ["開啟頁面或貼上URL。", "依JPG、PNG、WebP、GIF、SVG等圖片類型篩選。", "下載選取檔案，依網域/類型整理，或匯出CSV。"], [{ q: "能偵測延遲載入圖片嗎？", a: "可以。會檢查DOM屬性、srcset、背景圖、blob URL和網路檔案回應。" }, { q: "能只下載某些圖片類型嗎？", a: "可以。依副檔名、大小、名稱或來源頁面篩選。" }, { q: "能只匯出圖片URL嗎？", a: "可以。偵測清單可匯出為CSV。" }])
      }
    },
    "download-files-from-webpage": {
      path: "download-files-from-webpage.html",
      related: ["download-all-pdfs", "bulk-download-images", "merge-pdfs-locally"],
      copy: {
        en: c("Download all files from a web page | Grab All Files", "Find documents, images, ZIPs, CSVs, and hidden file responses on a page. Filter, select, bulk-download, ZIP, merge PDFs, or export CSV.", "Bulk file download", "Download all files from a web page in one organized run.", "When a page mixes PDFs, Office documents, images, ZIPs, CSVs, and hidden fetch responses, manual saving is slow. Grab All Files scans the page, lists detectable files with metadata, and lets you choose exactly what to keep.", ["Pages with many document and media links.", "Pages where files are created by JavaScript or XHR.", "Audits that need a CSV of source URLs and metadata.", "One-off collection tasks where installing a full crawler is too much."], ["Scan the current page or paste a URL.", "Use filters for extension, size, name, page title, or date.", "Download selected files, create a local ZIP, merge PDFs, or export CSV."], [{ q: "What file types are supported?", a: "PDF, Office documents, images, ZIP, CSV, and many other downloadable file responses can be detected when the browser can access them. It also detects split / multi-volume archive sets such as .001, .r00, and .z01." }, { q: "Can I choose only certain files?", a: "Yes. Use filters, search, sorting, and manual selection before downloading." }, { q: "Does it work on old HTTP pages?", a: "Yes. It can scan both HTTP and HTTPS pages that your browser can open." }]),
        ja: c("Webページ上のファイルを一括ダウンロード | Grab All Files", "文書、画像、ZIP、CSV、隠れたファイルレスポンスを検出。絞り込み、一括保存、ZIP化、PDF結合、CSV出力に対応。", "ファイル一括保存", "Webページ上のファイルを、整理された1回の作業で一括ダウンロード。",
          "PDF、Office文書、画像、ZIP、CSV、fetch/XHRレスポンスが混在するページでは、手作業の保存に時間がかかります。Grab All Files は検出可能なファイルをメタデータ付きで一覧化し、必要なものだけ選べます。",
          ["文書リンクやメディアが多いページ。", "JavaScriptやXHRでファイルが表示されるページ。", "URLとメタデータのCSVが必要な監査・棚卸し。", "本格的なクローラーまでは不要な単発収集作業。"],
          ["現在のページをスキャン、またはURLを貼り付ける。", "拡張子、サイズ、名前、ページタイトル、日付で絞り込む。", "選択ファイルを一括保存、ローカルZIP化、PDF結合、CSV出力。"],
          [{ q: "どのファイル形式に対応していますか？", a: "PDF、Office文書、画像、ZIP、CSVなど、ブラウザからアクセスできるダウンロード可能なレスポンスを検出できます。分割・マルチボリュームアーカイブ（.001、.r00、.z01 など）も検出します。" }, { q: "一部のファイルだけ選べますか？", a: "はい。フィルター、検索、並べ替え、手動選択をしてから保存できます。" }, { q: "古いHTTPページでも使えますか？", a: "はい。ブラウザで開けるHTTP/HTTPSページをスキャンできます。" }]
        ),
        es: c("Descargar todos los archivos de una página | Grab All Files", "Encuentra documentos, imágenes, ZIPs, CSVs y respuestas ocultas. Filtra, descarga, ZIP, fusiona PDF o exporta CSV.", "Descarga masiva", "Descarga todos los archivos de una página en una sola operación.", "Cuando una página mezcla PDFs, Office, imágenes, ZIPs, CSVs y respuestas fetch, guardar manualmente es lento. Grab All Files lista archivos detectables con metadatos para elegir qué conservar.", ["Páginas con muchos documentos y medios.", "Archivos creados por JavaScript o XHR.", "Auditorías que necesitan CSV de URLs y metadatos.", "Tareas puntuales sin instalar un crawler completo."], ["Escanea la página actual o pega una URL.", "Filtra por extensión, tamaño, nombre, título o fecha.", "Descarga, crea ZIP local, fusiona PDFs o exporta CSV."], [{ q: "¿Qué tipos admite?", a: "PDF, Office, imágenes, ZIP, CSV y otras respuestas descargables accesibles al navegador. También detecta conjuntos de archivos comprimidos divididos / multivolumen como .001, .r00 y .z01." }, { q: "¿Puedo elegir solo algunos?", a: "Sí. Usa filtros, búsqueda, ordenación y selección manual." }, { q: "¿Funciona en HTTP antiguo?", a: "Sí. Escanea páginas HTTP y HTTPS que tu navegador puede abrir." }]),
        fr: c("Télécharger tous les fichiers d'une page | Grab All Files", "Trouvez documents, images, ZIP, CSV et réponses cachées. Filtrez, téléchargez, ZIP, fusion PDF ou export CSV.", "Téléchargement en masse", "Téléchargez tous les fichiers d'une page en une opération organisée.", "Quand une page mélange PDF, Office, images, ZIP, CSV et réponses fetch, l'enregistrement manuel est lent. Grab All Files liste les fichiers détectables avec métadonnées.", ["Pages avec nombreux documents et médias.", "Fichiers créés par JavaScript ou XHR.", "Audits nécessitant URLs et métadonnées en CSV.", "Collectes ponctuelles sans crawler complet."], ["Scannez la page actuelle ou collez une URL.", "Filtrez par extension, taille, nom, titre ou date.", "Téléchargez, créez un ZIP local, fusionnez les PDF ou exportez CSV."], [{ q: "Quels types sont pris en charge ?", a: "PDF, Office, images, ZIP, CSV et autres réponses téléchargeables accessibles au navigateur. Il détecte aussi les jeux d'archives fractionnées / multivolumes comme .001, .r00 et .z01." }, { q: "Puis-je choisir certains fichiers ?", a: "Oui. Utilisez filtres, recherche, tri et sélection manuelle." }, { q: "Fonctionne-t-il sur de vieux sites HTTP ?", a: "Oui. Il scanne HTTP et HTTPS si le navigateur peut les ouvrir." }]),
        de: c("Alle Dateien von einer Webseite herunterladen | Grab All Files", "Findet Dokumente, Bilder, ZIPs, CSVs und versteckte Antworten. Filtern, Download, ZIP, PDF-Merge oder CSV-Export.", "Massendownload", "Laden Sie alle Dateien einer Webseite in einem organisierten Lauf herunter.", "Wenn eine Seite PDFs, Office-Dateien, Bilder, ZIPs, CSVs und fetch-Antworten mischt, ist manuelles Speichern langsam. Grab All Files listet erkannte Dateien mit Metadaten.", ["Seiten mit vielen Dokumenten und Medien.", "Dateien, die per JavaScript oder XHR entstehen.", "Audits mit CSV von URLs und Metadaten.", "Einmalige Sammlungen ohne kompletten Crawler."], ["Aktuelle Seite scannen oder URL einfügen.", "Nach Erweiterung, Größe, Name, Titel oder Datum filtern.", "Herunterladen, lokales ZIP erstellen, PDFs zusammenführen oder CSV exportieren."], [{ q: "Welche Typen werden unterstützt?", a: "PDF, Office, Bilder, ZIP, CSV und andere herunterladbare Antworten, die der Browser erreichen kann. Es erkennt außerdem geteilte / mehrteilige Archivsätze wie .001, .r00 und .z01." }, { q: "Kann ich nur bestimmte Dateien wählen?", a: "Ja. Filter, Suche, Sortierung und manuelle Auswahl sind verfügbar." }, { q: "Funktioniert es auf HTTP-Seiten?", a: "Ja. Es scannt HTTP und HTTPS, wenn der Browser die Seite öffnen kann." }]),
        it: c("Scaricare tutti i file da una pagina | Grab All Files", "Trova documenti, immagini, ZIP, CSV e risposte nascoste. Filtra, scarica, ZIP, unisci PDF o esporta CSV.", "Download in massa", "Scarica tutti i file da una pagina in un'unica operazione.", "Quando una pagina mescola PDF, Office, immagini, ZIP, CSV e risposte fetch, salvare a mano è lento. Grab All Files elenca i file rilevabili con metadati.", ["Pagine con molti documenti e media.", "File creati da JavaScript o XHR.", "Audit che richiedono CSV di URL e metadati.", "Raccolte una tantum senza crawler completo."], ["Scansiona la pagina corrente o incolla una URL.", "Filtra per estensione, dimensione, nome, titolo o data.", "Scarica, crea ZIP locale, unisci PDF o esporta CSV."], [{ q: "Quali tipi sono supportati?", a: "PDF, Office, immagini, ZIP, CSV e altre risposte scaricabili accessibili al browser. Rileva anche set di archivi divisi / multivolume come .001, .r00 e .z01." }, { q: "Posso scegliere solo alcuni file?", a: "Sì. Usa filtri, ricerca, ordinamento e selezione manuale." }, { q: "Funziona su pagine HTTP?", a: "Sì. Scansiona HTTP e HTTPS che il browser può aprire." }]),
        ko: c("웹페이지의 모든 파일 다운로드 | Grab All Files", "문서, 이미지, ZIP, CSV, 숨겨진 파일 응답을 찾고 필터링, 다운로드, ZIP, PDF 병합, CSV 내보내기를 지원합니다.", "파일 일괄 다운로드", "웹페이지의 파일을 한 번에 정리해서 다운로드하세요.", "PDF, Office 문서, 이미지, ZIP, CSV, fetch 응답이 섞인 페이지를 수동 저장하는 것은 느립니다. Grab All Files는 감지 가능한 파일을 메타데이터와 함께 목록화해 필요한 것만 선택하게 합니다.", ["문서와 미디어 링크가 많은 페이지.", "JavaScript 또는 XHR로 파일이 만들어지는 페이지.", "URL과 메타데이터 CSV가 필요한 감사 작업.", "전체 크롤러까지는 필요 없는 단발 수집."], ["현재 페이지를 스캔하거나 URL을 붙여넣습니다.", "확장자, 크기, 이름, 페이지 제목, 날짜로 필터링합니다.", "다운로드, 로컬 ZIP 생성, PDF 병합, CSV 내보내기를 합니다."], [{ q: "어떤 파일 형식을 지원하나요?", a: "PDF, Office 문서, 이미지, ZIP, CSV 등 브라우저가 접근 가능한 다운로드 응답을 감지할 수 있습니다. 분할 / 멀티볼륨 아카이브 세트(.001, .r00, .z01 등)도 감지합니다." }, { q: "일부 파일만 선택할 수 있나요?", a: "예. 필터, 검색, 정렬, 수동 선택을 사용할 수 있습니다." }, { q: "오래된 HTTP 페이지도 작동하나요?", a: "예. 브라우저에서 열 수 있는 HTTP/HTTPS 페이지를 스캔합니다." }]),
        pt_BR: c("Baixar todos os arquivos de uma página | Grab All Files", "Encontre documentos, imagens, ZIPs, CSVs e respostas ocultas. Filtre, baixe, ZIP, mescle PDF ou exporte CSV.", "Download em massa", "Baixe todos os arquivos de uma página em uma operação organizada.", "Quando uma página mistura PDFs, Office, imagens, ZIPs, CSVs e respostas fetch, salvar manualmente é lento. Grab All Files lista arquivos detectáveis com metadados.", ["Páginas com muitos documentos e mídias.", "Arquivos criados por JavaScript ou XHR.", "Auditorias que precisam de CSV de URLs e metadados.", "Coletas pontuais sem crawler completo."], ["Escaneie a página atual ou cole uma URL.", "Filtre por extensão, tamanho, nome, título ou data.", "Baixe, crie ZIP local, mescle PDFs ou exporte CSV."], [{ q: "Quais tipos são suportados?", a: "PDF, Office, imagens, ZIP, CSV e outras respostas baixáveis acessíveis ao navegador. Também detecta conjuntos de arquivos divididos / multivolume como .001, .r00 e .z01." }, { q: "Posso escolher apenas alguns arquivos?", a: "Sim. Use filtros, busca, ordenação e seleção manual." }, { q: "Funciona em páginas HTTP antigas?", a: "Sim. Escaneia HTTP e HTTPS que o navegador consegue abrir." }]),
        zh_CN: c("下载网页上的所有文件 | Grab All Files", "查找文档、图片、ZIP、CSV和隐藏文件响应。可筛选、批量下载、ZIP、PDF合并或CSV导出。", "文件批量下载", "一次有序操作，下载网页上的所有文件。", "当页面混合PDF、Office文档、图片、ZIP、CSV和fetch响应时，手动保存很慢。Grab All Files 会列出可检测文件和元数据，让您只保留需要的内容。", ["包含大量文档和媒体链接的页面。", "由JavaScript或XHR生成文件的页面。", "需要URL和元数据CSV的审计。", "不需要完整爬虫的一次性收集任务。"], ["扫描当前页面或粘贴URL。", "按扩展名、大小、名称、页面标题或日期筛选。", "下载选中文件、创建本地ZIP、合并PDF或导出CSV。"], [{ q: "支持哪些文件类型？", a: "可检测浏览器能访问的PDF、Office文档、图片、ZIP、CSV和其他可下载响应。还能检测分卷 / 多卷压缩包（如 .001、.r00、.z01）。" }, { q: "能只选择部分文件吗？", a: "可以。下载前可过滤、搜索、排序并手动选择。" }, { q: "旧HTTP页面也可以吗？", a: "可以。浏览器能打开的HTTP和HTTPS页面都可扫描。" }]),
        zh_TW: c("下載網頁上的所有檔案 | Grab All Files", "查找文件、圖片、ZIP、CSV和隱藏檔案回應。可篩選、批次下載、ZIP、PDF合併或CSV匯出。", "檔案批次下載", "一次有序操作，下載網頁上的所有檔案。", "當頁面混合PDF、Office文件、圖片、ZIP、CSV和fetch回應時，手動儲存很慢。Grab All Files 會列出可偵測檔案和中繼資料，讓您只保留需要的內容。", ["包含大量文件和媒體連結的頁面。", "由JavaScript或XHR產生檔案的頁面。", "需要URL和中繼資料CSV的稽核。", "不需要完整爬蟲的一次性收集工作。"], ["掃描目前頁面或貼上URL。", "依副檔名、大小、名稱、頁面標題或日期篩選。", "下載選取檔案、建立本機ZIP、合併PDF或匯出CSV。"], [{ q: "支援哪些檔案類型？", a: "可偵測瀏覽器能存取的PDF、Office文件、圖片、ZIP、CSV和其他可下載回應。也能偵測分卷 / 多卷壓縮檔（如 .001、.r00、.z01）。" }, { q: "能只選擇部分檔案嗎？", a: "可以。下載前可篩選、搜尋、排序並手動選擇。" }, { q: "舊HTTP頁面也可以嗎？", a: "可以。瀏覽器能開啟的HTTP和HTTPS頁面都可掃描。" }])
      }
    },
    "internal-portal-downloads": {
      path: "internal-portal-downloads.html",
      related: ["download-files-from-webpage", "download-all-pdfs", "bulk-download-images"],
      copy: {
        en: c("Download files from internal portals & LMS | Grab All Files", "Use your existing browser session to collect authorized files from intranets, LMS portals, member areas, and document-heavy dashboards.", "Authorized portal downloads", "Download files from internal portals without handing over credentials.", "For intranets, LMS pages, member areas, and dashboards, the browser already has the login session. Grab All Files runs in that browser context, scans pages you are authorized to access, and keeps credential handling outside the extension.", ["Corporate intranets with many attachments.", "LMS pages such as Moodle, Canvas, or Blackboard.", "Member-only libraries and client portals.", "Document dashboards where files are behind buttons, viewers, or forms."], ["Open the authorized page in your browser session.", "Run a page scan or same-site crawl within the portal area you can access.", "Filter, select, download, ZIP, merge PDFs, or export CSV locally."], [{ q: "Does it collect passwords?", a: "No. It uses the browser session you already have and does not collect credentials." }, { q: "Can it bypass access controls?", a: "No. It only works on pages and files your browser is already authorized to access." }, { q: "Is it suitable for confidential files?", a: "Files download directly to your device. Review your organization rules before using any download automation." }]),
        ja: c("社内ポータル・LMSの資料をダウンロード | Grab All Files", "既存のブラウザログイン状態を使い、イントラネット、LMS、会員ページ、資料の多いダッシュボードから許可されたファイルを収集します。", "認可済みポータルの取得", "認証情報を渡さず、社内ポータルのファイルをダウンロード。",
          "イントラネット、LMS、会員エリア、ダッシュボードでは、ブラウザにログイン状態があります。Grab All Files はそのブラウザ文脈で動作し、あなたがアクセス権を持つページをスキャンします。認証情報の取り扱いは拡張機能の外に残ります。",
          ["添付ファイルが多い社内イントラネット。", "Moodle、Canvas、BlackboardなどのLMSページ。", "会員限定ライブラリやクライアントポータル。", "ボタン、ビューア、フォームの背後にある文書ダッシュボード。"],
          ["ブラウザで認可済みページを開く。", "アクセス可能な範囲でページスキャンまたは同一サイトクロールを実行。", "絞り込み、選択、一括保存、ZIP化、PDF結合、CSV出力をローカルで実行。"],
          [{ q: "パスワードを収集しますか？", a: "いいえ。既存のブラウザセッションを使い、認証情報は収集しません。" }, { q: "アクセス制御を回避できますか？", a: "いいえ。ブラウザがすでにアクセスを許可されているページとファイルだけが対象です。" }, { q: "機密ファイルにも使えますか？", a: "ファイルは端末へ直接保存されます。組織のルールを確認してから利用してください。" }]
        ),
        es: c("Descargar de portales internos y LMS | Grab All Files", "Usa tu sesión del navegador para recopilar archivos autorizados de intranets, LMS y áreas de miembros.", "Descargas autorizadas", "Descarga archivos de portales internos sin entregar credenciales.", "En intranets, LMS y dashboards, el navegador ya tiene la sesión iniciada. Grab All Files trabaja en ese contexto y escanea páginas a las que tienes acceso.", ["Intranets con muchos adjuntos.", "LMS como Moodle, Canvas o Blackboard.", "Bibliotecas de miembros y portales de clientes.", "Dashboards con archivos tras botones, visores o formularios."], ["Abre la página autorizada en tu navegador.", "Ejecuta un escaneo o rastreo dentro del área accesible.", "Filtra, descarga, ZIP, fusiona PDFs o exporta CSV localmente."], [{ q: "¿Recopila contraseñas?", a: "No. Usa tu sesión actual y no recoge credenciales." }, { q: "¿Evita controles de acceso?", a: "No. Solo actúa sobre páginas autorizadas para tu navegador." }, { q: "¿Sirve para archivos confidenciales?", a: "Los archivos van directo a tu dispositivo. Revisa las reglas de tu organización." }]),
        fr: c("Télécharger depuis portails internes et LMS | Grab All Files", "Utilisez votre session navigateur pour collecter les fichiers autorisés d'intranets, LMS et espaces membres.", "Téléchargements autorisés", "Téléchargez depuis des portails internes sans fournir d'identifiants.", "Sur intranets, LMS et dashboards, le navigateur possède déjà la session. Grab All Files fonctionne dans ce contexte et scanne les pages autorisées.", ["Intranets avec nombreux fichiers joints.", "LMS comme Moodle, Canvas ou Blackboard.", "Bibliothèques membres et portails clients.", "Dashboards avec fichiers derrière boutons, viewers ou formulaires."], ["Ouvrez la page autorisée dans le navigateur.", "Lancez un scan ou crawl dans la zone accessible.", "Filtrez, téléchargez, ZIP, fusionnez PDF ou exportez CSV localement."], [{ q: "Collecte-t-il les mots de passe ?", a: "Non. Il utilise votre session existante sans collecter d'identifiants." }, { q: "Contourne-t-il les accès ?", a: "Non. Il agit seulement sur ce que votre navigateur peut déjà ouvrir." }, { q: "Pour fichiers confidentiels ?", a: "Les fichiers vont vers votre appareil. Vérifiez les règles de votre organisation." }]),
        de: c("Dateien aus internen Portalen und LMS laden | Grab All Files", "Nutzen Sie Ihre Browser-Sitzung, um autorisierte Dateien aus Intranets, LMS und Mitgliederbereichen zu sammeln.", "Autorisierte Downloads", "Laden Sie Dateien aus internen Portalen herunter, ohne Zugangsdaten weiterzugeben.", "Bei Intranets, LMS und Dashboards hat der Browser bereits die Sitzung. Grab All Files arbeitet in diesem Kontext und scannt autorisierte Seiten.", ["Intranets mit vielen Anhängen.", "LMS wie Moodle, Canvas oder Blackboard.", "Mitgliederbibliotheken und Kundenportale.", "Dashboards mit Dateien hinter Buttons, Viewern oder Formularen."], ["Autorisierte Seite im Browser öffnen.", "Scan oder Crawl im zugänglichen Bereich starten.", "Filtern, herunterladen, ZIP, PDF-Merge oder CSV-Export lokal ausführen."], [{ q: "Sammelt es Passwörter?", a: "Nein. Es nutzt Ihre vorhandene Browser-Sitzung und sammelt keine Zugangsdaten." }, { q: "Umgeht es Zugriffskontrollen?", a: "Nein. Nur Seiten, die Ihr Browser bereits öffnen darf." }, { q: "Für vertrauliche Dateien geeignet?", a: "Dateien gehen direkt auf Ihr Gerät. Prüfen Sie interne Regeln." }]),
        it: c("Scaricare documenti da portali interni e LMS | Grab All Files", "Usa la sessione del browser per raccogliere file autorizzati da intranet, LMS e aree membri.", "Download autorizzati", "Scarica file da portali interni senza consegnare credenziali.", "In intranet, LMS e dashboard il browser ha già la sessione. Grab All Files lavora in quel contesto e scansiona pagine autorizzate.", ["Intranet con molti allegati.", "LMS come Moodle, Canvas o Blackboard.", "Biblioteche membri e portali clienti.", "Dashboard con file dietro pulsanti, viewer o moduli."], ["Apri la pagina autorizzata nel browser.", "Esegui una scansione o crawl nell'area accessibile.", "Filtra, scarica, ZIP, unisci PDF o esporta CSV localmente."], [{ q: "Raccoglie password?", a: "No. Usa la sessione esistente e non raccoglie credenziali." }, { q: "Aggira i controlli di accesso?", a: "No. Funziona solo sulle pagine che il browser può già aprire." }, { q: "Adatto a file riservati?", a: "I file vanno direttamente al dispositivo. Verifica le regole aziendali." }]),
        ko: c("사내 포털 및 LMS 문서 다운로드 | Grab All Files", "기존 브라우저 세션을 사용해 인트라넷, LMS, 회원 영역, 문서 대시보드의 허가된 파일을 수집합니다.", "권한 있는 포털 다운로드", "인증 정보를 넘기지 않고 내부 포털 파일을 다운로드하세요.", "인트라넷, LMS, 회원 영역, 대시보드에서는 브라우저가 이미 로그인 세션을 갖고 있습니다. Grab All Files는 그 컨텍스트에서 권한 있는 페이지를 스캔합니다.", ["첨부 파일이 많은 사내 인트라넷.", "Moodle, Canvas, Blackboard 같은 LMS 페이지.", "회원 전용 라이브러리와 고객 포털.", "버튼, 뷰어, 폼 뒤에 파일이 있는 대시보드."], ["브라우저에서 권한 있는 페이지를 엽니다.", "접근 가능한 영역에서 페이지 스캔 또는 동일 사이트 크롤링을 실행합니다.", "필터링, 다운로드, ZIP, PDF 병합, CSV 내보내기를 로컬로 실행합니다."], [{ q: "비밀번호를 수집하나요?", a: "아니요. 기존 브라우저 세션을 사용하며 인증 정보를 수집하지 않습니다." }, { q: "접근 제어를 우회하나요?", a: "아니요. 브라우저가 이미 접근 가능한 페이지와 파일만 대상입니다." }, { q: "기밀 파일에 적합한가요?", a: "파일은 기기로 직접 다운로드됩니다. 조직의 규칙을 확인하세요." }]),
        pt_BR: c("Baixar documentos de portais internos e LMS | Grab All Files", "Use a sessão do navegador para coletar arquivos autorizados de intranets, LMS e áreas de membros.", "Downloads autorizados", "Baixe arquivos de portais internos sem entregar credenciais.", "Em intranets, LMS e dashboards, o navegador já tem a sessão. Grab All Files trabalha nesse contexto e escaneia páginas autorizadas.", ["Intranets com muitos anexos.", "LMS como Moodle, Canvas ou Blackboard.", "Bibliotecas de membros e portais de clientes.", "Dashboards com arquivos atrás de botões, viewers ou formulários."], ["Abra a página autorizada no navegador.", "Execute scan ou rastreamento na área acessível.", "Filtre, baixe, ZIP, mescle PDF ou exporte CSV localmente."], [{ q: "Coleta senhas?", a: "Não. Usa sua sessão existente e não coleta credenciais." }, { q: "Contorna controles de acesso?", a: "Não. Só funciona em páginas que o navegador já pode abrir." }, { q: "Serve para arquivos confidenciais?", a: "Os arquivos vão direto ao dispositivo. Verifique as regras da sua organização." }]),
        zh_CN: c("从内部门户和LMS下载文档 | Grab All Files", "使用现有浏览器会话，从内网、LMS、会员区和文档仪表板收集已授权文件。", "已授权门户下载", "无需交出凭据，即可下载内部门户文件。", "在内网、LMS、会员区和仪表板中，浏览器已拥有登录会话。Grab All Files 在该浏览器环境中运行，扫描您有权访问的页面。", ["包含大量附件的企业内网。", "Moodle、Canvas、Blackboard等LMS页面。", "会员专属库和客户门户。", "文件位于按钮、查看器或表单之后的文档仪表板。"], ["在浏览器中打开已授权页面。", "在可访问范围内运行页面扫描或同站点爬取。", "本地筛选、下载、ZIP、PDF合并或CSV导出。"], [{ q: "会收集密码吗？", a: "不会。它使用您已有的浏览器会话，不收集凭据。" }, { q: "能绕过访问控制吗？", a: "不能。只处理浏览器已被授权访问的页面和文件。" }, { q: "适合机密文件吗？", a: "文件会直接下载到您的设备。使用前请确认组织规则。" }]),
        zh_TW: c("從內部入口網站和LMS下載文件 | Grab All Files", "使用現有瀏覽器工作階段，從內網、LMS、會員區和文件儀表板收集已授權檔案。", "已授權入口下載", "無需交出憑證，即可下載內部入口網站檔案。", "在內網、LMS、會員區和儀表板中，瀏覽器已擁有登入工作階段。Grab All Files 在該瀏覽器環境中執行，掃描您有權存取的頁面。", ["包含大量附件的企業內網。", "Moodle、Canvas、Blackboard等LMS頁面。", "會員專屬庫和客戶入口網站。", "檔案位於按鈕、檢視器或表單之後的文件儀表板。"], ["在瀏覽器中開啟已授權頁面。", "在可存取範圍內執行頁面掃描或同站爬取。", "本機篩選、下載、ZIP、PDF合併或CSV匯出。"], [{ q: "會收集密碼嗎？", a: "不會。它使用您已有的瀏覽器工作階段，不收集憑證。" }, { q: "能繞過存取控制嗎？", a: "不能。只處理瀏覽器已被授權存取的頁面和檔案。" }, { q: "適合機密檔案嗎？", a: "檔案會直接下載到您的裝置。使用前請確認組織規則。" }])
      }
    },
    "merge-pdfs-locally": {
      path: "merge-pdfs-locally.html",
      related: ["download-all-pdfs", "download-files-from-webpage", "internal-portal-downloads"],
      copy: {
        en: c("Merge PDFs locally in your browser | Grab All Files", "Select PDFs detected on a web page and merge them into one file locally, without uploading files to a server.", "Local PDF merge", "Merge PDFs locally after collecting them from a web page.", "Grab All Files is not only a downloader. After detecting PDFs on a page or same-site crawl, you can choose the files and merge them inside your browser. The source PDFs stay on your device.", ["Combining reports, notices, handouts, or forms after a bulk PDF scan.", "Keeping sensitive documents away from online PDF merge services.", "Turning many downloaded PDFs into one review packet.", "Exporting a CSV record of source URLs alongside the merged file."], ["Scan a page or crawl same-site links to find PDFs.", "Filter to PDF and select the files in the order you want.", "Run local merge in the browser and save the merged file."], [{ q: "Is this an online PDF merge service?", a: "No. The merge runs in the browser. Files are not uploaded to Grab All Files servers." }, { q: "Can I control merge order?", a: "Yes. Sort or manually reorder the selected PDF list before merging." }, { q: "Can I download the original PDFs too?", a: "Yes. You can save originals, build a ZIP, and merge selected PDFs." }]),
        ja: c("PDFをブラウザ内でローカル結合 | Grab All Files", "Webページで検出したPDFを選択し、サーバーへアップロードせず1つのPDFに結合します。", "ローカルPDF結合", "Webページから集めたPDFを、そのままブラウザ内で結合。",
          "Grab All Files はダウンローダーだけではありません。ページまたは同一サイトクロールでPDFを検出した後、必要なファイルを選び、ブラウザ内で結合できます。元PDFは端末上に残ります。",
          ["報告書、通知、配布資料、申請書を一括収集後にまとめる。", "機密文書をオンラインPDF結合サービスに出したくない。", "複数PDFを1つの確認用パケットにする。", "結合ファイルと合わせて元URLのCSV記録も残す。"],
          ["ページをスキャン、または同一サイトリンクをクロールしてPDFを検出。", "PDFで絞り込み、結合したい順番でファイルを選択。", "ブラウザ内でローカル結合を実行し、結合PDFを保存。"],
          [{ q: "オンラインPDF結合サービスですか？", a: "いいえ。結合はブラウザ内で行われ、ファイルはGrab All Filesのサーバーへアップロードされません。" }, { q: "結合順を指定できますか？", a: "はい。結合前に並べ替えや手動順序変更ができます。" }, { q: "元のPDFも保存できますか？", a: "はい。元PDFの保存、ZIP化、選択PDFの結合を使い分けられます。" }]
        ),
        es: c("Fusionar PDFs localmente en el navegador | Grab All Files", "Selecciona PDFs detectados en una página y fusiónalos localmente sin subir archivos a un servidor.", "Fusión PDF local", "Fusiona PDFs localmente después de recopilarlos de una página.", "Grab All Files no es solo un descargador. Tras detectar PDFs en una página o rastreo, puedes elegir archivos y fusionarlos en el navegador. Los PDFs permanecen en tu dispositivo.", ["Combinar informes, avisos, apuntes o formularios.", "Evitar servicios online de fusión PDF para documentos sensibles.", "Convertir muchos PDFs en un paquete de revisión.", "Guardar CSV de URLs fuente junto al PDF final."], ["Escanea una página o rastrea enlaces del mismo sitio.", "Filtra a PDF y selecciona archivos en el orden deseado.", "Ejecuta la fusión local y guarda el archivo."], [{ q: "¿Es un servicio online de fusión PDF?", a: "No. La fusión se ejecuta en el navegador y no sube archivos." }, { q: "¿Puedo controlar el orden?", a: "Sí. Ordena o reordena manualmente antes de fusionar." }, { q: "¿Puedo guardar los originales?", a: "Sí. Puedes guardar originales, crear ZIP y fusionar PDFs." }]),
        fr: c("Fusionner des PDF localement | Grab All Files", "Sélectionnez les PDF détectés sur une page et fusionnez-les localement sans upload serveur.", "Fusion PDF locale", "Fusionnez localement les PDF collectés depuis une page.", "Grab All Files n'est pas seulement un téléchargeur. Après détection des PDF, choisissez les fichiers et fusionnez-les dans le navigateur. Les PDF restent sur votre appareil.", ["Combiner rapports, avis, supports ou formulaires.", "Éviter les services PDF en ligne pour documents sensibles.", "Créer un paquet de revue à partir de nombreux PDF.", "Conserver un CSV des URLs source."], ["Scannez une page ou crawlez les liens du même site.", "Filtrez sur PDF et sélectionnez dans l'ordre voulu.", "Lancez la fusion locale et sauvegardez."], [{ q: "Est-ce un service en ligne ?", a: "Non. La fusion se fait dans le navigateur, sans upload." }, { q: "Puis-je contrôler l'ordre ?", a: "Oui. Triez ou réordonnez avant fusion." }, { q: "Puis-je garder les originaux ?", a: "Oui. Sauvegarde, ZIP et fusion sont disponibles." }]),
        de: c("PDFs lokal im Browser zusammenführen | Grab All Files", "Wählen Sie erkannte PDFs aus und führen Sie sie lokal zusammen, ohne Upload auf einen Server.", "Lokaler PDF-Merge", "Führen Sie PDFs lokal zusammen, nachdem sie von einer Webseite gesammelt wurden.", "Grab All Files ist nicht nur ein Downloader. Nach dem Erkennen von PDFs wählen Sie Dateien aus und führen sie im Browser zusammen. Die PDFs bleiben auf Ihrem Gerät.", ["Berichte, Hinweise, Handouts oder Formulare kombinieren.", "Sensible Dokumente nicht an Online-PDF-Dienste senden.", "Viele PDFs in ein Review-Paket verwandeln.", "CSV der Quell-URLs zusätzlich speichern."], ["Seite scannen oder Same-Site-Links crawlen.", "Auf PDF filtern und gewünschte Reihenfolge wählen.", "Lokalen Merge starten und Datei speichern."], [{ q: "Ist es ein Online-PDF-Dienst?", a: "Nein. Der Merge läuft im Browser, ohne Upload." }, { q: "Kann ich die Reihenfolge steuern?", a: "Ja. Sortieren oder manuell umordnen vor dem Merge." }, { q: "Kann ich Originale speichern?", a: "Ja. Originale speichern, ZIP erstellen und PDFs zusammenführen." }]),
        it: c("Unire PDF localmente nel browser | Grab All Files", "Seleziona PDF rilevati su una pagina e uniscili localmente senza caricare file su server.", "Unione PDF locale", "Unisci PDF localmente dopo averli raccolti da una pagina.", "Grab All Files non è solo un downloader. Dopo aver rilevato PDF in una pagina o crawl, puoi scegliere i file e unirli nel browser. I PDF restano sul dispositivo.", ["Combinare report, avvisi, dispense o moduli.", "Evitare servizi online per documenti sensibili.", "Trasformare molti PDF in un pacchetto di revisione.", "Salvare CSV delle URL sorgente."], ["Scansiona una pagina o crawl dello stesso sito.", "Filtra per PDF e seleziona nell'ordine desiderato.", "Esegui l'unione locale e salva il file."], [{ q: "È un servizio online?", a: "No. L'unione avviene nel browser, senza upload." }, { q: "Posso controllare l'ordine?", a: "Sì. Ordina o riordina manualmente prima dell'unione." }, { q: "Posso salvare gli originali?", a: "Sì. Puoi salvare originali, creare ZIP e unire PDF." }]),
        ko: c("브라우저에서 PDF 로컬 병합 | Grab All Files", "웹페이지에서 감지한 PDF를 선택해 서버 업로드 없이 브라우저에서 하나로 병합합니다.", "로컬 PDF 병합", "웹페이지에서 수집한 PDF를 브라우저 안에서 병합하세요.", "Grab All Files는 단순 다운로더가 아닙니다. 페이지 또는 동일 사이트 크롤링에서 PDF를 찾은 후 필요한 파일을 선택해 브라우저에서 병합할 수 있습니다. 원본 PDF는 기기에 남습니다.", ["보고서, 안내문, 자료, 양식을 일괄 수집 후 결합.", "민감한 문서를 온라인 PDF 서비스에 보내지 않기.", "여러 PDF를 하나의 검토용 묶음으로 만들기.", "원본 URL CSV 기록도 함께 보관."], ["페이지를 스캔하거나 동일 사이트 링크를 크롤링합니다.", "PDF로 필터링하고 원하는 순서로 선택합니다.", "브라우저에서 로컬 병합을 실행하고 저장합니다."], [{ q: "온라인 PDF 병합 서비스인가요?", a: "아니요. 병합은 브라우저에서 실행되며 서버로 업로드되지 않습니다." }, { q: "병합 순서를 조절할 수 있나요?", a: "예. 병합 전 정렬 또는 수동 재정렬이 가능합니다." }, { q: "원본 PDF도 저장할 수 있나요?", a: "예. 원본 저장, ZIP 생성, PDF 병합을 함께 사용할 수 있습니다." }]),
        pt_BR: c("Mesclar PDFs localmente no navegador | Grab All Files", "Selecione PDFs detectados em uma página e mescle localmente sem enviar arquivos a um servidor.", "Mesclagem PDF local", "Mescle PDFs localmente depois de coletá-los de uma página.", "Grab All Files não é só um downloader. Após detectar PDFs, escolha arquivos e mescle no navegador. Os PDFs ficam no seu dispositivo.", ["Combinar relatórios, avisos, apostilas ou formulários.", "Evitar serviços online para documentos sensíveis.", "Transformar muitos PDFs em um pacote de revisão.", "Salvar CSV das URLs fonte."], ["Escaneie uma página ou rastreie links do mesmo site.", "Filtre por PDF e selecione na ordem desejada.", "Execute a mesclagem local e salve o arquivo."], [{ q: "É serviço online de PDF?", a: "Não. A mesclagem roda no navegador, sem upload." }, { q: "Posso controlar a ordem?", a: "Sim. Ordene ou reorganize manualmente antes de mesclar." }, { q: "Posso salvar originais?", a: "Sim. Salve originais, crie ZIP e mescle PDFs." }]),
        zh_CN: c("在浏览器本地合并PDF | Grab All Files", "选择网页上检测到的PDF，并在本地合并为一个文件，无需上传到服务器。", "本地PDF合并", "从网页收集PDF后，直接在浏览器中本地合并。", "Grab All Files 不只是下载器。检测页面或同站点爬取中的PDF后，您可以选择文件并在浏览器内合并。源PDF保留在您的设备上。", ["批量扫描后合并报告、通知、讲义或表单。", "避免将敏感文档发送给在线PDF合并服务。", "将多个PDF变成一个审阅包。", "同时保留源URL的CSV记录。"], ["扫描页面或爬取同站点链接以查找PDF。", "按PDF筛选，并按需要的顺序选择文件。", "在浏览器中执行本地合并并保存文件。"], [{ q: "这是在线PDF合并服务吗？", a: "不是。合并在浏览器中运行，文件不会上传到服务器。" }, { q: "能控制合并顺序吗？", a: "可以。合并前可排序或手动调整顺序。" }, { q: "也能保存原始PDF吗？", a: "可以。可保存原件、创建ZIP并合并选中PDF。" }]),
        zh_TW: c("在瀏覽器本機合併PDF | Grab All Files", "選擇網頁上偵測到的PDF，並在本機合併為一個檔案，無需上傳到伺服器。", "本機PDF合併", "從網頁收集PDF後，直接在瀏覽器中本機合併。", "Grab All Files 不只是下載器。偵測頁面或同站爬取中的PDF後，您可以選擇檔案並在瀏覽器內合併。來源PDF保留在您的裝置上。", ["批次掃描後合併報告、通知、講義或表單。", "避免將敏感文件傳給線上PDF合併服務。", "將多個PDF變成一個審閱包。", "同時保留來源URL的CSV記錄。"], ["掃描頁面或爬取同站連結以查找PDF。", "依PDF篩選，並按需要的順序選擇檔案。", "在瀏覽器中執行本機合併並儲存檔案。"], [{ q: "這是線上PDF合併服務嗎？", a: "不是。合併在瀏覽器中執行，檔案不會上傳到伺服器。" }, { q: "能控制合併順序嗎？", a: "可以。合併前可排序或手動調整順序。" }, { q: "也能儲存原始PDF嗎？", a: "可以。可儲存原件、建立ZIP並合併選取PDF。" }])
      }
    }
  };

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch];
    });
  }

  function getLangFromUrl() {
    var m = location.search.match(/[?&]lang=([a-zA-Z_-]+)/);
    if (!m) return null;
    return SUPPORTED.indexOf(m[1]) >= 0 ? m[1] : null;
  }

  function detectLang() {
    try { var _f = window.__FORCE_LANG__; if (_f && SUPPORTED.indexOf(_f) >= 0) return _f; } catch (_) {}
    var urlLang = getLangFromUrl();
    if (urlLang) return urlLang;
    try {
      var stored = localStorage.getItem("gaf-lang");
      if (SUPPORTED.indexOf(stored) >= 0) return stored;
    } catch (_) {}
    var n = (navigator.language || "").toLowerCase();
    if (n.indexOf("ja") === 0) return "ja";
    if (n.indexOf("ko") === 0) return "ko";
    if (n.indexOf("it") === 0) return "it";
    if (n.indexOf("de") === 0) return "de";
    if (n.indexOf("es") === 0) return "es";
    if (n.indexOf("fr") === 0) return "fr";
    if (n.indexOf("pt") === 0) return "pt_BR";
    if (n === "zh-tw" || n === "zh-hant" || n.indexOf("zh-hant") === 0) return "zh_TW";
    if (n.indexOf("zh") === 0) return "zh_CN";
    return "en";
  }

  function withLang(path, lang) {
    if (path.indexOf("#") >= 0) {
      var parts = path.split("#");
      return withLang(parts[0], lang) + "#" + parts.slice(1).join("#");
    }
    // Indexed guides already live at a dedicated language URL. Keep links
    // canonical; only the shared checkout still needs its language parameter.
    if (path === "/purchase/") return path + "?lang=" + encodeURIComponent(lang);
    return path;
  }

  function setMeta(selector, attr, value) {
    var node = document.querySelector(selector);
    if (node) node.setAttribute(attr, value);
  }

  function getCase() {
    var id = document.body.getAttribute("data-use-case");
    return CASES[id] ? { id: id, data: CASES[id] } : { id: "download-files-from-webpage", data: CASES["download-files-from-webpage"] };
  }

  function renderList(items, marker) {
    return items.map(function (item, index) {
      var m = marker === "num" ? String(index + 1) : "✓";
      var cls = marker === "num" ? "num" : "check";
      return "<li><span class=\"" + cls + "\">" + esc(m) + "</span><span>" + esc(item) + "</span></li>";
    }).join("");
  }

  function renderFaq(items) {
    return items.map(function (item) {
      return "<details><summary>" + esc(item.q) + "</summary><p>" + esc(item.a) + "</p></details>";
    }).join("");
  }

  function renderResearchGuide(guide, section) {
    if (!guide) return "";
    if (section === "modes") {
      return '<section class="section-card research-guide"><h2>' + esc(guide.title) + '</h2><div class="two-col">' +
        guide.modes.map(function (mode) {
          return '<article class="research-mode"><h3>' + esc(mode[0]) + '</h3><p>' + esc(mode[1]) + '</p></article>';
        }).join('') + '</div></section>';
    }
    return '<section class="section-card research-guide"><h2>' + esc(guide.examplesTitle) + '</h2>' +
      guide.examples.map(function (example) {
        return '<article class="research-example"><h3>' + esc(example[0]) + '</h3><blockquote>' + esc(example[1]) + '</blockquote></article>';
      }).join('') + '</section><section class="section-card research-guide"><details class="research-formats"><summary>' +
      esc(guide.formatsTitle) + '</summary><div class="research-table-wrap"><table><thead><tr>' +
      guide.headers.map(function (head) { return '<th scope="col">' + esc(head) + '</th>'; }).join('') +
      '</tr></thead><tbody>' + guide.rows.map(function (row) {
        return '<tr><th scope="row">' + esc(row[0]) + '</th><td>' + esc(row[1]) + '</td></tr>';
      }).join('') + '</tbody></table></div></details></section>';
  }

  var VISUAL_KIND = {
  "web-tables-to-csv-for-excel-ai": "tables",
  "save-and-compare-document-revisions": "revisions",
  "rename-and-organize-bulk-pdf-downloads": "pdf",
  "collect-public-government-documents": "public",
  "save-web-pages-as-markdown": "markdown"
};

  var VISUAL_COPY = {
  "en": {
    "example": "Illustrative example · fictional, simplified data",
    "common": {
      "item": "Item",
      "value": "Value",
      "itemA": "A",
      "itemB": "B",
      "before": "Before",
      "after": "After",
      "requirement": "Documents",
      "form": "Form",
      "attachment": "Attachment",
      "added": "Added",
      "bodyUpdated": "Body updated",
      "titleChanged": "Title changed",
      "originalName": "Original name",
      "checkedTitle": "Title checked / edited",
      "procedure": "Application guide",
      "documents": "Required documents",
      "noTitle": "No useful title",
      "automatic": "Automatic naming",
      "byType": "By file type",
      "byDomain": "By source site",
      "overview": "Overview",
      "guidelines": "Guidelines",
      "formPdf": "Form PDF",
      "selected": "Selected material",
      "bundle": "Reference set",
      "url": "Page URL",
      "status": "State",
      "saved": "Saved",
      "unavailable": "Unavailable",
      "sourceTitle": "Application guide",
      "body": "Check the required documents.",
      "source": "Source",
      "image": "Image reference",
      "note": "Research note",
      "request": "Example question",
      "aiQuestion": "Summarise the requirements and cite the source.",
      "manual": "Manual handoff",
      "excel": "Excel",
      "externalAI": "External AI",
      "aiTableQuestion": "Compare the values of A and B and explain their difference."
    },
    "topics": {
      "tables": {
        "title": "From a web table to reusable data",
        "stages": [
          "Read an HTML table",
          "Prepare CSV / JSON",
          "Use Excel or external AI"
        ],
        "note": "Per-page or full-package output + table export enabled. You import or hand off the files manually."
      },
      "revisions": {
        "title": "Find changes, then compare the originals",
        "stages": [
          "Keep previous and current pages",
          "Save the change report",
          "Review before and after"
        ],
        "note": "Compare this extension’s most recent completed collection on the same site with the current pages, using comparable scopes. You review the originals; this is not automatic monitoring or a line-by-line diff. Unavailable entries do not prove site deletion."
      },
      "pdf": {
        "title": "From opaque filenames to a useful file set",
        "stages": [
          "Review the PDF filenames",
          "Confirm titles and naming",
          "Save names and folder groups"
        ],
        "note": "Automatic naming falls back to the original name when no useful title is available. Folder examples show alternatives."
      },
      "public": {
        "title": "Build a focused public-document set",
        "stages": [
          "Find pages and original PDFs",
          "Choose the needed material",
          "Keep a set and page-state CSV"
        ],
        "note": "Collect what you need and check the originals. A complete set is not guaranteed; PDFs remain separate files."
      },
      "markdown": {
        "title": "Turn collected content into reusable notes",
        "stages": [
          "Read headings, text and links",
          "Prepare Markdown",
          "Copy or import it yourself"
        ],
        "note": "Manual reuse in notes or external AI. Image references do not mean every image file is bundled."
      }
    }
  },
  "ja": {
    "example": "図解例 · 架空データの簡略表示",
    "common": {
      "item": "項目",
      "value": "値",
      "itemA": "A",
      "itemB": "B",
      "before": "前",
      "after": "後",
      "requirement": "必要書類",
      "form": "申請書",
      "attachment": "添付資料",
      "added": "追加",
      "bodyUpdated": "本文更新",
      "titleChanged": "題名変更",
      "originalName": "元の名前",
      "checkedTitle": "題名を確認・編集",
      "procedure": "申請手順",
      "documents": "必要書類",
      "noTitle": "有用な題名なし",
      "automatic": "自動で命名",
      "byType": "種類別の例",
      "byDomain": "取得元別の例",
      "overview": "概要",
      "guidelines": "要領",
      "formPdf": "様式PDF",
      "selected": "選んだ資料",
      "bundle": "資料セット",
      "url": "ページURL",
      "status": "状態",
      "saved": "保存済",
      "unavailable": "未取得",
      "sourceTitle": "申請の案内",
      "body": "必要書類を確認します。",
      "source": "出典",
      "image": "画像の参照",
      "note": "調査ノート",
      "request": "質問の例",
      "aiQuestion": "要件を整理し、根拠の出典を示してください。",
      "manual": "自分で受け渡す",
      "excel": "Excel",
      "externalAI": "外部AI",
      "aiTableQuestion": "AとBの値を比較し、差を説明してください。"
    },
    "topics": {
      "tables": {
        "title": "Webの表を、使えるデータに",
        "stages": [
          "HTMLの表を確認",
          "CSV・JSONを準備",
          "Excel・外部AIで使う"
        ],
        "note": "ページ別／フルパッケージ＋表の出力を有効にします。ファイルは自分で取り込み・受け渡しします。"
      },
      "revisions": {
        "title": "変化を探し、前後の原文を確認",
        "stages": [
          "前回・今回のページを残す",
          "差分レポートを保存",
          "前後の原文を見比べる"
        ],
        "note": "同じサイトの直近完了済み収集と今回を、比較できる範囲で確認します。最後は利用者が原文を見比べます。自動監視・行単位差分ではなく、取得不可はサイト削除と断定しません。"
      },
      "pdf": {
        "title": "分かりにくい名前を、探せる資料に",
        "stages": [
          "PDFの元の名前を確認",
          "題名と保存名を選ぶ",
          "名前とフォルダで整理"
        ],
        "note": "自動では有用な題名がなければ元の名前へ戻ります。フォルダ木は選べる整理方法の例です。"
      },
      "public": {
        "title": "必要な公的資料を、ひとまとまりに",
        "stages": [
          "案内ページ・PDFを確認",
          "必要な資料を選ぶ",
          "資料セットと状態CSVへ"
        ],
        "note": "必要な範囲を選び、原本と照合します。全資料がそろう保証ではなく、PDFは別ファイルで管理します。"
      },
      "markdown": {
        "title": "集めた本文を、使い回せるノートに",
        "stages": [
          "見出し・本文・リンク",
          "Markdownを準備",
          "自分でコピー・取り込み"
        ],
        "note": "ノートや外部AIへ手動で渡します。画像の参照リンクは、画像本体の同梱を保証するものではありません。"
      }
    }
  },
  "es": {
    "example": "Ejemplo ilustrativo · datos ficticios simplificados",
    "common": {
      "item": "Elemento",
      "value": "Valor",
      "itemA": "A",
      "itemB": "B",
      "before": "Antes",
      "after": "Después",
      "requirement": "Documentos",
      "form": "Formulario",
      "attachment": "Adjunto",
      "added": "Añadido",
      "bodyUpdated": "Texto actualizado",
      "titleChanged": "Título cambiado",
      "originalName": "Nombre original",
      "checkedTitle": "Título revisado / editado",
      "procedure": "Procedimiento",
      "documents": "Documentos necesarios",
      "noTitle": "Sin título útil",
      "automatic": "Nombre automático",
      "byType": "Por formato",
      "byDomain": "Por sitio fuente",
      "overview": "Resumen",
      "guidelines": "Instrucciones",
      "formPdf": "PDF de formulario",
      "selected": "Material elegido",
      "bundle": "Conjunto de referencia",
      "url": "URL de página",
      "status": "Estado",
      "saved": "Guardado",
      "unavailable": "No disponible",
      "sourceTitle": "Guía de solicitud",
      "body": "Revisa los documentos necesarios.",
      "source": "Fuente",
      "image": "Referencia de imagen",
      "note": "Nota de investigación",
      "request": "Pregunta de ejemplo",
      "aiQuestion": "Resume requisitos y cita la fuente.",
      "manual": "Entrega manual",
      "excel": "Excel",
      "externalAI": "IA externa",
      "aiTableQuestion": "Compara los valores de A y B y explica su diferencia."
    },
    "topics": {
      "tables": {
        "title": "De tabla web a datos reutilizables",
        "stages": [
          "Revisar una tabla HTML",
          "Preparar CSV / JSON",
          "Usar Excel o IA externa"
        ],
        "note": "Salida por página o paquete completo y tablas activadas. Importas o entregas los archivos manualmente."
      },
      "revisions": {
        "title": "Localizar cambios y comparar originales",
        "stages": [
          "Guardar páginas anteriores y actuales",
          "Guardar informe de cambios",
          "Revisar antes y después"
        ],
        "note": "Compara la última recopilación completada del mismo sitio con la actual, en ámbitos comparables. Tú revisas los originales; no es vigilancia automática ni diferencia por líneas. No disponible no prueba eliminación."
      },
      "pdf": {
        "title": "De nombres opacos a archivos útiles",
        "stages": [
          "Revisar nombres PDF",
          "Confirmar títulos y nombres",
          "Guardar nombres y grupos"
        ],
        "note": "El modo automático vuelve al nombre original sin un título útil. Las carpetas muestran alternativas."
      },
      "public": {
        "title": "Un conjunto público enfocado",
        "stages": [
          "Localizar páginas y PDF",
          "Elegir el material necesario",
          "Conjunto y CSV de estado"
        ],
        "note": "Selecciona y contrasta con originales. No se garantiza todo el material; los PDF siguen como archivos separados."
      },
      "markdown": {
        "title": "Contenido recopilado a notas reutilizables",
        "stages": [
          "Leer títulos, texto y enlaces",
          "Preparar Markdown",
          "Copiar o importar tú mismo"
        ],
        "note": "Uso manual en notas o IA externa. Las referencias de imagen no garantizan incluir todos los archivos de imagen."
      }
    }
  },
  "fr": {
    "example": "Exemple illustratif · données fictives simplifiées",
    "common": {
      "item": "Élément",
      "value": "Valeur",
      "itemA": "A",
      "itemB": "B",
      "before": "Avant",
      "after": "Après",
      "requirement": "Documents",
      "form": "Formulaire",
      "attachment": "Pièce jointe",
      "added": "Ajout",
      "bodyUpdated": "Texte mis à jour",
      "titleChanged": "Titre modifié",
      "originalName": "Nom original",
      "checkedTitle": "Titre vérifié / modifié",
      "procedure": "Procédure",
      "documents": "Documents requis",
      "noTitle": "Pas de titre pertinent",
      "automatic": "Nom automatique",
      "byType": "Par format",
      "byDomain": "Par site source",
      "overview": "Présentation",
      "guidelines": "Instructions",
      "formPdf": "Formulaire PDF",
      "selected": "Documents choisis",
      "bundle": "Ensemble de référence",
      "url": "URL de page",
      "status": "État",
      "saved": "Enregistré",
      "unavailable": "Indisponible",
      "sourceTitle": "Guide de demande",
      "body": "Vérifiez les documents requis.",
      "source": "Source",
      "image": "Référence d’image",
      "note": "Note de recherche",
      "request": "Exemple de question",
      "aiQuestion": "Résumez les critères et citez la source.",
      "manual": "Transmission manuelle",
      "excel": "Excel",
      "externalAI": "IA externe",
      "aiTableQuestion": "Comparez les valeurs de A et B et expliquez leur différence."
    },
    "topics": {
      "tables": {
        "title": "Du tableau web aux données réutilisables",
        "stages": [
          "Lire un tableau HTML",
          "Préparer CSV / JSON",
          "Utiliser Excel ou une IA externe"
        ],
        "note": "Sortie par page ou paquet complet et tableaux activés. Vous importez ou transmettez les fichiers manuellement."
      },
      "revisions": {
        "title": "Repérer les changements et lire les originaux",
        "stages": [
          "Garder les pages avant et après",
          "Enregistrer le rapport",
          "Comparer les originaux"
        ],
        "note": "Comparez la dernière collecte terminée du même site avec les pages actuelles, sur des périmètres comparables. Vous relisez les originaux ; pas de surveillance automatique ni différence ligne par ligne. Indisponible ne prouve pas un retrait."
      },
      "pdf": {
        "title": "Des noms opaques à un ensemble utile",
        "stages": [
          "Vérifier les noms PDF",
          "Confirmer titres et noms",
          "Enregistrer et classer"
        ],
        "note": "Le mode automatique reprend le nom original sans titre pertinent. Les dossiers illustrent des alternatives."
      },
      "public": {
        "title": "Un ensemble public ciblé",
        "stages": [
          "Trouver pages et PDF",
          "Choisir les documents utiles",
          "Ensemble et CSV d’état"
        ],
        "note": "Sélectionnez et vérifiez les originaux. L’exhaustivité n’est pas garantie ; les PDF restent des fichiers séparés."
      },
      "markdown": {
        "title": "Du contenu collecté aux notes",
        "stages": [
          "Lire titres, texte et liens",
          "Préparer Markdown",
          "Copier ou importer soi-même"
        ],
        "note": "Réutilisation manuelle dans les notes ou une IA externe. Les références d’images ne garantissent pas les fichiers image joints."
      }
    }
  },
  "de": {
    "example": "Anschauliches Beispiel · fiktive, vereinfachte Daten",
    "common": {
      "item": "Eintrag",
      "value": "Wert",
      "itemA": "A",
      "itemB": "B",
      "before": "Vorher",
      "after": "Nachher",
      "requirement": "Unterlagen",
      "form": "Formular",
      "attachment": "Anlage",
      "added": "Hinzugefügt",
      "bodyUpdated": "Text aktualisiert",
      "titleChanged": "Titel geändert",
      "originalName": "Originalname",
      "checkedTitle": "Titel geprüft / bearbeitet",
      "procedure": "Antragsablauf",
      "documents": "Benötigte Unterlagen",
      "noTitle": "Kein sinnvoller Titel",
      "automatic": "Automatischer Name",
      "byType": "Nach Dateityp",
      "byDomain": "Nach Quellsite",
      "overview": "Übersicht",
      "guidelines": "Anleitung",
      "formPdf": "Formular-PDF",
      "selected": "Gewähltes Material",
      "bundle": "Referenzsatz",
      "url": "Seiten-URL",
      "status": "Status",
      "saved": "Gespeichert",
      "unavailable": "Nicht verfügbar",
      "sourceTitle": "Antragsanleitung",
      "body": "Benötigte Unterlagen prüfen.",
      "source": "Quelle",
      "image": "Bildreferenz",
      "note": "Recherche-Notiz",
      "request": "Beispielfrage",
      "aiQuestion": "Fasse Voraussetzungen zusammen und nenne die Quelle.",
      "manual": "Manuelle Übergabe",
      "excel": "Excel",
      "externalAI": "Externe KI",
      "aiTableQuestion": "Vergleiche die Werte von A und B und erkläre ihren Unterschied."
    },
    "topics": {
      "tables": {
        "title": "Webtabelle als nutzbare Daten",
        "stages": [
          "HTML-Tabelle prüfen",
          "CSV / JSON vorbereiten",
          "Excel oder externe KI nutzen"
        ],
        "note": "Seitenweise Ausgabe oder vollständiges Paket mit Tabellenexport. Dateien selbst importieren oder übergeben."
      },
      "revisions": {
        "title": "Änderungen finden und Originale vergleichen",
        "stages": [
          "Vorherige und aktuelle Seiten sichern",
          "Änderungsbericht speichern",
          "Originale vergleichen"
        ],
        "note": "Vergleichen Sie die zuletzt abgeschlossene Sammlung derselben Site mit den aktuellen Seiten in vergleichbarem Umfang. Sie prüfen Originale; keine automatische Überwachung oder Zeilendifferenz. Nicht verfügbar beweist keine Löschung."
      },
      "pdf": {
        "title": "Unklare Namen zu einem nutzbaren Dateisatz",
        "stages": [
          "PDF-Namen prüfen",
          "Titel und Namen bestätigen",
          "Namen und Ordner speichern"
        ],
        "note": "Automatik nutzt den Originalnamen ohne sinnvollen Titel. Ordnerbeispiele zeigen Alternativen."
      },
      "public": {
        "title": "Einen gezielten öffentlichen Satz sammeln",
        "stages": [
          "Seiten und PDFs finden",
          "Benötigtes Material auswählen",
          "Satz und Status-CSV sichern"
        ],
        "note": "Auswahl an Originalen prüfen. Vollständigkeit ist nicht garantiert; PDFs bleiben eigene Dateien."
      },
      "markdown": {
        "title": "Gesammelten Inhalt als Notizen nutzen",
        "stages": [
          "Überschriften, Text und Links",
          "Markdown vorbereiten",
          "Selbst kopieren oder importieren"
        ],
        "note": "Manuelle Nutzung in Notizen oder externer KI. Bildreferenzen garantieren keine beigefügten Bilddateien."
      }
    }
  },
  "it": {
    "example": "Esempio illustrativo · dati fittizi semplificati",
    "common": {
      "item": "Elemento",
      "value": "Valore",
      "itemA": "A",
      "itemB": "B",
      "before": "Prima",
      "after": "Dopo",
      "requirement": "Documenti",
      "form": "Modulo",
      "attachment": "Allegato",
      "added": "Aggiunto",
      "bodyUpdated": "Testo aggiornato",
      "titleChanged": "Titolo cambiato",
      "originalName": "Nome originale",
      "checkedTitle": "Titolo verificato / modificato",
      "procedure": "Procedura",
      "documents": "Documenti richiesti",
      "noTitle": "Nessun titolo utile",
      "automatic": "Nome automatico",
      "byType": "Per formato",
      "byDomain": "Per sito fonte",
      "overview": "Panoramica",
      "guidelines": "Istruzioni",
      "formPdf": "Modulo PDF",
      "selected": "Materiale scelto",
      "bundle": "Insieme di riferimento",
      "url": "URL pagina",
      "status": "Stato",
      "saved": "Salvato",
      "unavailable": "Non disponibile",
      "sourceTitle": "Guida alla domanda",
      "body": "Verifica i documenti richiesti.",
      "source": "Fonte",
      "image": "Riferimento immagine",
      "note": "Nota di ricerca",
      "request": "Domanda di esempio",
      "aiQuestion": "Riassumi i requisiti e cita la fonte.",
      "manual": "Consegna manuale",
      "excel": "Excel",
      "externalAI": "IA esterna",
      "aiTableQuestion": "Confronta i valori di A e B e spiega la differenza."
    },
    "topics": {
      "tables": {
        "title": "Dalla tabella web ai dati riutilizzabili",
        "stages": [
          "Leggere una tabella HTML",
          "Preparare CSV / JSON",
          "Usare Excel o IA esterna"
        ],
        "note": "Output per pagina o pacchetto completo con tabelle attivate. Importi o consegni i file manualmente."
      },
      "revisions": {
        "title": "Trovare cambiamenti e confrontare originali",
        "stages": [
          "Conservare pagine prima e dopo",
          "Salvare il rapporto",
          "Confrontare gli originali"
        ],
        "note": "Confronta l’ultima raccolta completata dello stesso sito con le pagine attuali, con ambiti comparabili. Verifichi tu gli originali; non è monitoraggio automatico o differenza per righe. Non disponibile non prova eliminazione."
      },
      "pdf": {
        "title": "Da nomi opachi a file riconoscibili",
        "stages": [
          "Verificare nomi PDF",
          "Confermare titoli e nomi",
          "Salvare nomi e cartelle"
        ],
        "note": "Automatico usa il nome originale se manca un titolo utile. Le cartelle mostrano alternative."
      },
      "public": {
        "title": "Un insieme pubblico mirato",
        "stages": [
          "Trovare pagine e PDF",
          "Scegliere materiali utili",
          "Insieme e CSV degli stati"
        ],
        "note": "Seleziona e verifica originali. La completezza non è garantita; i PDF restano separati."
      },
      "markdown": {
        "title": "Contenuti raccolti in note riutilizzabili",
        "stages": [
          "Titoli, testo e link",
          "Preparare Markdown",
          "Copiare o importare da sé"
        ],
        "note": "Uso manuale in note o IA esterna. I riferimenti immagine non garantiscono tutti i file immagine inclusi."
      }
    }
  },
  "ko": {
    "example": "도해 예시 · 가상 데이터를 단순화한 표시",
    "common": {
      "item": "항목",
      "value": "값",
      "itemA": "A",
      "itemB": "B",
      "before": "이전",
      "after": "이후",
      "requirement": "필요 서류",
      "form": "신청서",
      "attachment": "첨부 자료",
      "added": "추가",
      "bodyUpdated": "본문 갱신",
      "titleChanged": "제목 변경",
      "originalName": "원래 이름",
      "checkedTitle": "제목 확인 / 편집",
      "procedure": "신청 절차",
      "documents": "필요 서류",
      "noTitle": "유용한 제목 없음",
      "automatic": "자동 이름",
      "byType": "형식별 예시",
      "byDomain": "출처별 예시",
      "overview": "개요",
      "guidelines": "요령",
      "formPdf": "양식 PDF",
      "selected": "선택한 자료",
      "bundle": "자료 세트",
      "url": "페이지 URL",
      "status": "상태",
      "saved": "저장됨",
      "unavailable": "미수집",
      "sourceTitle": "신청 안내",
      "body": "필요 서류를 확인합니다.",
      "source": "출처",
      "image": "이미지 참조",
      "note": "조사 노트",
      "request": "질문 예시",
      "aiQuestion": "요건을 정리하고 출처를 제시해 주세요.",
      "manual": "직접 전달",
      "excel": "Excel",
      "externalAI": "외부 AI",
      "aiTableQuestion": "A와 B의 값을 비교하고 차이를 설명해 주세요."
    },
    "topics": {
      "tables": {
        "title": "웹 표를 사용할 데이터로",
        "stages": [
          "HTML 표 확인",
          "CSV / JSON 준비",
          "Excel·외부 AI에서 활용"
        ],
        "note": "페이지별 또는 전체 패키지와 표 출력을 켭니다. 파일은 직접 가져오거나 전달합니다."
      },
      "revisions": {
        "title": "변화를 찾고 전후 원문 확인",
        "stages": [
          "이전·현재 페이지 보관",
          "변경 보고서 저장",
          "전후 원문 비교"
        ],
        "note": "같은 사이트의 직전 완료 수집과 현재 페이지를 비교 가능한 범위로 확인합니다. 직접 원문을 읽으며 자동 감시·줄 단위 차이는 아닙니다. 미수집이 사이트 삭제를 증명하지 않습니다."
      },
      "pdf": {
        "title": "불명확한 이름을 찾기 좋은 자료로",
        "stages": [
          "PDF 원래 이름 확인",
          "제목과 저장 이름 선택",
          "이름과 폴더로 정리"
        ],
        "note": "자동 모드는 유용한 제목이 없으면 원래 이름을 씁니다. 폴더 트리는 대안 예시입니다."
      },
      "public": {
        "title": "필요한 공공 자료를 한 세트로",
        "stages": [
          "안내 페이지·PDF 확인",
          "필요한 자료 선택",
          "자료 세트와 상태 CSV"
        ],
        "note": "필요 범위를 선택해 원본과 대조합니다. 모든 자료를 보장하지 않으며 PDF는 별도 파일입니다."
      },
      "markdown": {
        "title": "수집한 본문을 재사용 노트로",
        "stages": [
          "제목·본문·링크",
          "Markdown 준비",
          "직접 복사·가져오기"
        ],
        "note": "노트나 외부 AI로 직접 전달합니다. 이미지 참조가 이미지 파일 동봉을 보장하지는 않습니다."
      }
    }
  },
  "pt_BR": {
    "example": "Exemplo ilustrativo · dados fictícios simplificados",
    "common": {
      "item": "Item",
      "value": "Valor",
      "itemA": "A",
      "itemB": "B",
      "before": "Antes",
      "after": "Depois",
      "requirement": "Documentos",
      "form": "Formulário",
      "attachment": "Anexo",
      "added": "Adicionado",
      "bodyUpdated": "Texto atualizado",
      "titleChanged": "Título alterado",
      "originalName": "Nome original",
      "checkedTitle": "Título conferido / editado",
      "procedure": "Procedimento",
      "documents": "Documentos necessários",
      "noTitle": "Sem título útil",
      "automatic": "Nome automático",
      "byType": "Por formato",
      "byDomain": "Por site fonte",
      "overview": "Visão geral",
      "guidelines": "Orientações",
      "formPdf": "Formulário PDF",
      "selected": "Material escolhido",
      "bundle": "Conjunto de referência",
      "url": "URL da página",
      "status": "Estado",
      "saved": "Salvo",
      "unavailable": "Indisponível",
      "sourceTitle": "Guia de solicitação",
      "body": "Confira os documentos necessários.",
      "source": "Fonte",
      "image": "Referência de imagem",
      "note": "Nota de pesquisa",
      "request": "Pergunta de exemplo",
      "aiQuestion": "Resuma requisitos e cite a fonte.",
      "manual": "Entrega manual",
      "excel": "Excel",
      "externalAI": "IA externa",
      "aiTableQuestion": "Compare os valores de A e B e explique a diferença."
    },
    "topics": {
      "tables": {
        "title": "Da tabela web aos dados reutilizáveis",
        "stages": [
          "Conferir uma tabela HTML",
          "Preparar CSV / JSON",
          "Usar Excel ou IA externa"
        ],
        "note": "Saída por página ou pacote completo com tabelas ativadas. Você importa ou entrega os arquivos manualmente."
      },
      "revisions": {
        "title": "Localizar mudanças e comparar originais",
        "stages": [
          "Guardar páginas anteriores e atuais",
          "Salvar o relatório",
          "Conferir antes e depois"
        ],
        "note": "Compare a coleta concluída mais recente do mesmo site com páginas atuais, em escopos comparáveis. Você confere os originais; não é monitoramento automático ou diferença por linhas. Indisponível não prova exclusão."
      },
      "pdf": {
        "title": "De nomes opacos a arquivos úteis",
        "stages": [
          "Conferir nomes PDF",
          "Confirmar títulos e nomes",
          "Salvar nomes e pastas"
        ],
        "note": "Automático volta ao nome original sem título útil. As pastas mostram alternativas."
      },
      "public": {
        "title": "Um conjunto público focado",
        "stages": [
          "Localizar páginas e PDFs",
          "Escolher materiais úteis",
          "Conjunto e CSV de estados"
        ],
        "note": "Selecione e confira originais. Não se garante tudo; PDFs permanecem separados."
      },
      "markdown": {
        "title": "Conteúdo coletado em notas reutilizáveis",
        "stages": [
          "Títulos, texto e links",
          "Preparar Markdown",
          "Copiar ou importar você mesmo"
        ],
        "note": "Reuso manual em notas ou IA externa. Referências de imagens não garantem os arquivos de imagem incluídos."
      }
    }
  },
  "zh_CN": {
    "example": "图解示例 · 虚构数据的简化展示",
    "common": {
      "item": "项目",
      "value": "值",
      "itemA": "A",
      "itemB": "B",
      "before": "之前",
      "after": "之后",
      "requirement": "所需文件",
      "form": "申请表",
      "attachment": "附件",
      "added": "新增",
      "bodyUpdated": "正文更新",
      "titleChanged": "标题变更",
      "originalName": "原始名称",
      "checkedTitle": "确认 / 编辑标题",
      "procedure": "申请步骤",
      "documents": "所需文件",
      "noTitle": "无有效标题",
      "automatic": "自动命名",
      "byType": "按格式示例",
      "byDomain": "按来源示例",
      "overview": "概要",
      "guidelines": "指南",
      "formPdf": "表格 PDF",
      "selected": "选中的资料",
      "bundle": "资料集",
      "url": "页面 URL",
      "status": "状态",
      "saved": "已保存",
      "unavailable": "未获取",
      "sourceTitle": "申请指南",
      "body": "确认所需文件。",
      "source": "来源",
      "image": "图片参照",
      "note": "研究笔记",
      "request": "问题示例",
      "aiQuestion": "请整理要求并提供来源。",
      "manual": "手动传递",
      "excel": "Excel",
      "externalAI": "外部 AI",
      "aiTableQuestion": "请比较A和B的值并解释差异。"
    },
    "topics": {
      "tables": {
        "title": "将网页表格变成可用数据",
        "stages": [
          "确认HTML表格",
          "准备 CSV / JSON",
          "用于 Excel 或外部 AI"
        ],
        "note": "选择按页面或完整资料包并启用表格输出。文件由您手动导入或传递。"
      },
      "revisions": {
        "title": "找到变化并核对前后原文",
        "stages": [
          "保留前次与本次页面",
          "保存变化报告",
          "比较前后原文"
        ],
        "note": "在可比较范围内，比较同一网站最近完成的收集与本次页面。最后由您核对原文；不是自动监控或逐行差异，无法获取不代表网站删除。"
      },
      "pdf": {
        "title": "将模糊名称整理为易找资料",
        "stages": [
          "确认 PDF 原名",
          "确认标题与保存名称",
          "按名称及文件夹整理"
        ],
        "note": "自动模式无有效标题时使用原名。文件夹树是可选方式示例。"
      },
      "public": {
        "title": "将所需公共资料整理成一组",
        "stages": [
          "确认页面与 PDF",
          "选择所需资料",
          "资料集与状态 CSV"
        ],
        "note": "选择所需范围并核对原件。不保证获取所有资料；PDF为独立文件。"
      },
      "markdown": {
        "title": "将收集正文用作笔记",
        "stages": [
          "标题、正文及链接",
          "准备 Markdown",
          "自行复制或导入"
        ],
        "note": "手动交给笔记或外部 AI。图片参照不保证图片文件同包保存。"
      }
    }
  },
  "zh_TW": {
    "example": "圖解範例 · 虛構資料的簡化展示",
    "common": {
      "item": "項目",
      "value": "值",
      "itemA": "A",
      "itemB": "B",
      "before": "之前",
      "after": "之後",
      "requirement": "所需文件",
      "form": "申請表",
      "attachment": "附件",
      "added": "新增",
      "bodyUpdated": "本文更新",
      "titleChanged": "標題變更",
      "originalName": "原始名稱",
      "checkedTitle": "確認 / 編輯標題",
      "procedure": "申請步驟",
      "documents": "所需文件",
      "noTitle": "無有效標題",
      "automatic": "自動命名",
      "byType": "依格式範例",
      "byDomain": "依來源範例",
      "overview": "概要",
      "guidelines": "指南",
      "formPdf": "表格 PDF",
      "selected": "選取的資料",
      "bundle": "資料集",
      "url": "頁面 URL",
      "status": "狀態",
      "saved": "已儲存",
      "unavailable": "未取得",
      "sourceTitle": "申請指南",
      "body": "確認所需文件。",
      "source": "來源",
      "image": "圖片參照",
      "note": "研究筆記",
      "request": "問題範例",
      "aiQuestion": "請整理要求並提供來源。",
      "manual": "手動傳遞",
      "excel": "Excel",
      "externalAI": "外部 AI",
      "aiTableQuestion": "請比較A與B的值並解釋差異。"
    },
    "topics": {
      "tables": {
        "title": "將網頁表格變成可用資料",
        "stages": [
          "確認HTML表格",
          "準備 CSV / JSON",
          "用於 Excel 或外部 AI"
        ],
        "note": "選擇按頁面或完整資料包並啟用表格輸出。檔案由您手動匯入或傳遞。"
      },
      "revisions": {
        "title": "找到變化並核對前後原文",
        "stages": [
          "保留前次與本次頁面",
          "儲存變化報告",
          "比較前後原文"
        ],
        "note": "在可比較範圍內，比較同一網站最近完成的收集與本次頁面。最後由您核對原文；不是自動監控或逐行差異，無法取得不代表網站刪除。"
      },
      "pdf": {
        "title": "將模糊名稱整理為易找資料",
        "stages": [
          "確認 PDF 原名",
          "確認標題與儲存名稱",
          "依名稱及資料夾整理"
        ],
        "note": "自動模式無有效標題時使用原名。資料夾樹是可選方式範例。"
      },
      "public": {
        "title": "將所需公共資料整理成一組",
        "stages": [
          "確認頁面與 PDF",
          "選擇所需資料",
          "資料集與狀態 CSV"
        ],
        "note": "選擇所需範圍並核對原件。不保證取得所有資料；PDF為獨立檔案。"
      },
      "markdown": {
        "title": "將收集本文用作筆記",
        "stages": [
          "標題、本文及連結",
          "準備 Markdown",
          "自行複製或匯入"
        ],
        "note": "手動交給筆記或外部 AI。圖片參照不保證圖片檔案同包儲存。"
      }
    }
  }
};

  function visualTable(headers, rows) {
    return '<table class="visual-table"><thead><tr>' + headers.map(function (head) {
      return '<th scope="col">' + esc(head) + '</th>';
    }).join('') + '</tr></thead><tbody>' + rows.map(function (row) {
      return '<tr>' + row.map(function (cell) { return '<td>' + esc(cell) + '</td>'; }).join('') + '</tr>';
    }).join('') + '</tbody></table>';
  }

  function visualCode(text, className) {
    return '<pre class="visual-code ' + (className || '') + '"><code>' + esc(text) + '</code></pre>';
  }

  function visualFiles(names) {
    return '<ul class="visual-files">' + names.map(function (name) {
      return '<li><span class="visual-file-fold" aria-hidden="true"></span><span>' + esc(name) + '</span></li>';
    }).join('') + '</ul>';
  }

  function renderVisualSample(kind, stage, c) {
    var rows = [[c.itemA, '120'], [c.itemB, '180']];
    var headers = [c.item, c.value];
    if (kind === 'tables') {
      if (stage === 0) return '<div class="visual-paper"><strong class="visual-label">HTML</strong>' + visualTable(headers, rows) + '</div>';
      if (stage === 1) return '<strong class="visual-label">table.csv</strong>' + visualCode(headers.join(',') + '\n' + c.itemA + ',120\n' + c.itemB + ',180') +
        '<strong class="visual-label">table.json</strong>' + visualCode('[["A",120],["B",180]]');
      return '<p class="visual-manual">' + esc(c.manual) + '</p><div class="visual-output"><strong class="visual-label">' + esc(c.excel) + '</strong>' +
        visualTable(headers, rows) + '</div><div class="visual-output"><strong class="visual-label">' + esc(c.externalAI) + '</strong><p>' + esc(c.aiTableQuestion) + '</p></div>';
    }
    if (kind === 'revisions') {
      if (stage === 0) return '<div class="visual-pair"><div class="visual-paper"><strong class="visual-label">' + esc(c.before) + '</strong>' +
        visualFiles(['guide.html', 'notes.html']) + '</div><div class="visual-paper"><strong class="visual-label">' + esc(c.after) + '</strong>' + visualFiles(['guide.html', 'notes.html', 'new.html']) + '</div></div>';
      if (stage === 1) return '<strong class="visual-label">changes.md</strong><ul class="visual-changes"><li><span>+ ' + esc(c.added) + '</span><code>/new</code></li>' +
        '<li><span>~ ' + esc(c.bodyUpdated) + '</span><code>/guide</code></li><li><span>~ ' + esc(c.titleChanged) + '</span><code>/notes</code></li></ul>';
      return '<p class="visual-manual">' + esc(c.manual) + '</p><div class="visual-paper">' + visualTable([c.before, c.after], [[c.form, c.form + ' + ' + c.attachment]]) + '</div>';
    }
    if (kind === 'pdf') {
      if (stage === 0) return visualFiles(['a013.pdf', 'b072.pdf', 'c103.pdf']);
      if (stage === 1) return visualTable([c.originalName, c.checkedTitle], [['a013.pdf', c.procedure], ['b072.pdf', c.documents], ['c103.pdf', c.noTitle]]) +
        '<p class="visual-manual">' + esc(c.automatic) + '</p>';
      var names = '├ ' + c.procedure + '.pdf\n├ ' + c.documents + '.pdf\n└ c103.pdf';
      return '<strong class="visual-label">' + esc(c.byType) + '</strong>' + visualCode('PDF/\n' + names, 'visual-tree') +
        '<strong class="visual-label">' + esc(c.byDomain) + '</strong>' + visualCode('example.org/\n' + names, 'visual-tree');
    }
    if (kind === 'public') {
      if (stage === 0) return '<div class="visual-stack">' + visualFiles([c.overview + '.html', c.guidelines + '.html', c.form + '.pdf']) + '</div>';
      if (stage === 1) return '<strong class="visual-label">' + esc(c.selected) + '</strong><ul class="visual-selection"><li><span aria-hidden="true">✓</span> ' +
        esc(c.overview) + '</li><li><span aria-hidden="true">✓</span> ' + esc(c.guidelines) + '</li><li><span aria-hidden="true">✓</span> ' + esc(c.formPdf) + '</li></ul>';
      return visualCode(c.bundle + '/\n├ ' + c.overview + '.html\n├ ' + c.form + '.pdf\n└ pages.csv', 'visual-tree') +
        '<strong class="visual-label">pages.csv</strong>' + visualTable([c.url, c.status], [['example.org/overview.html', c.saved], ['example.org/guide.html', c.unavailable]]);
    }
    if (stage === 0) return '<div class="visual-paper"><strong class="visual-label">' + esc(c.sourceTitle) + '</strong><p>' + esc(c.body) + '</p>' +
      visualTable(headers, rows) + '<p><code>example.org/guide</code></p></div>';
    if (stage === 1) return '<strong class="visual-label">notes.md</strong>' + visualCode('# ' + c.sourceTitle + '\n\n' + c.body + '\n\n- ' + c.form +
      '\n\n| ' + c.item + ' | ' + c.value + ' |\n| --- | --- |\n| A | 120 |\n| B | 180 |\n\n[' + c.source + '](https://example.org/guide)\n![' + c.image + '](https://example.org/figure.png)');
    return '<p class="visual-manual">' + esc(c.manual) + '</p><div class="visual-paper visual-note-paper"><strong class="visual-label">' + esc(c.note) + '</strong><p>' +
      esc(c.sourceTitle) + '</p><span class="visual-writing-line" aria-hidden="true"></span><span class="visual-writing-line" aria-hidden="true"></span></div>' +
      '<div class="visual-output"><strong class="visual-label">' + esc(c.externalAI) + ' · ' + esc(c.request) + '</strong><p>' + esc(c.aiQuestion) + '</p></div>';
  }

  function renderFeatureVisual(current, lang) {
    var kind = VISUAL_KIND[current.id];
    if (!kind) return "";
    var copy = VISUAL_COPY[lang] || VISUAL_COPY.en;
    var topic = copy.topics[kind];
    return '<figure class="feature-visual" aria-labelledby="feature-visual-caption"><figcaption id="feature-visual-caption"><strong>' + esc(topic.title) +
      '</strong><span>' + esc(copy.example) + '</span></figcaption><ol class="visual-flow">' + topic.stages.map(function (title, stage) {
        return '<li class="visual-stage"><h3><span class="visual-index" aria-hidden="true">' + String(stage + 1) + '</span><span>' + esc(title) + '</span></h3>' +
          '<div class="visual-demo">' + renderVisualSample(kind, stage, copy.common) + '</div>' + (stage < 2 ?
            '<span class="visual-arrow visual-arrow-horizontal" aria-hidden="true">→</span><span class="visual-arrow visual-arrow-vertical" aria-hidden="true">↓</span>' : '') + '</li>';
      }).join('') + '</ol><p class="visual-note">' + esc(topic.note) + '</p></figure>';
  }

  var ARXIV_SHOTS = {
    en: { src: "/assets/screenshots/arxiv-scan-en.png", width: 2240, height: 2000 },
    ja: { src: "/assets/screenshots/arxiv-scan-ja.png", width: 2240, height: 2000 }
  };

  function renderArxivGuide(data, section, lang) {
    if (!data) return "";
    if (section === "visual") {
      var paperA = data.sample[0], paperB = data.sample[1];
      var samples = [visualFiles([paperA, paperB]),
        '<ul class="visual-selection"><li><span aria-hidden="true">✓</span> ' + esc(paperA) + '.pdf</li><li><span aria-hidden="true">✓</span> ' + esc(paperB) + '.pdf</li></ul>',
        visualCode(data.sample[2] + '/\n├ ' + paperA + '.pdf\n├ ' + paperB + '.pdf\n└ files.csv', 'visual-tree')];
      return '<figure class="feature-visual arxiv-visual" aria-labelledby="feature-visual-caption"><figcaption id="feature-visual-caption"><strong>' + esc(data.visualTitle) +
        '</strong><span>' + esc((VISUAL_COPY[lang] || VISUAL_COPY.en).example) + '</span></figcaption><ol class="visual-flow">' + data.stages.map(function(title, i) {
          return '<li class="visual-stage"><h3><span class="visual-index" aria-hidden="true">' + String(i + 1) + '</span><span>' + esc(title) +
            '</span></h3><div class="visual-demo">' + samples[i] + '</div>' + (i < 2 ? '<span class="visual-arrow visual-arrow-horizontal" aria-hidden="true">→</span><span class="visual-arrow visual-arrow-vertical" aria-hidden="true">↓</span>' : '') + '</li>';
        }).join('') + '</ol><p class="visual-note">' + esc(data.visualNote) + '</p></figure>';
    }
    if (section === "screen") {
      var shot = ARXIV_SHOTS[lang] || ARXIV_SHOTS.en;
      return '<section class="section-card arxiv-screen"><h2>' + esc(data.screenTitle) + '</h2><figure class="arxiv-screenshot"><a href="' + shot.src +
        '" target="_blank" rel="noopener"><img src="' + shot.src + '" width="' + shot.width + '" height="' + shot.height + '" loading="lazy" decoding="async" alt="' + esc(data.screenAlt) +
        '"></a><figcaption>' + esc(data.screenCaption) + '</figcaption></figure></section>';
    }
    var links = ['https://info.arxiv.org/help/robots.html', 'https://info.arxiv.org/help/bulk_data.html', 'https://info.arxiv.org/help/api/index.html'];
    return '<section class="section-card arxiv-access"><h2>' + esc(data.officialTitle) + '</h2><p>' + esc(data.officialText) + '</p><p><a href="https://arxiv.org/search/" target="_blank" rel="noopener">' + esc(data.searchLabel) + ' ↗</a></p><ul class="check-list">' +
      data.officialLabels.map(function(label, i) { return '<li><a href="' + links[i] + '" target="_blank" rel="noopener">' + esc(label) + ' ↗</a></li>'; }).join('') + '</ul></section>';
  }

  function renderManualGuide(manual, section, lang) {
    if (!manual) return "";
    if (section === "patterns") {
      return '<section class="section-card research-guide"><h2>' + esc(manual.patternsTitle) + '</h2><div class="manual-patterns">' +
        manual.patterns.map(function (pattern) {
          return '<article class="manual-pattern"><h3>' + esc(pattern[0]) + '</h3><div class="manual-sketch" aria-hidden="true">' +
            pattern[1].map(function (line) { return '<span>' + esc(line) + '</span>'; }).join('') +
            '</div><p>' + esc(pattern[2]) + '</p></article>';
        }).join('') + '</div></section>';
    }
    return '<section class="section-card research-guide"><h2>' + esc(manual.organizeTitle) + '</h2><div class="research-table-wrap"><table class="manual-table"><thead><tr>' +
      manual.headers.map(function (head) { return '<th scope="col">' + esc(head) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      manual.rows.map(function (row) { return '<tr><th scope="row">' + esc(row[0]) + '</th><td>' + esc(row[1]) + '</td></tr>'; }).join('') +
      '</tbody></table></div></section><section class="section-card research-guide"><h2>' + esc(manual.promptTitle) + '</h2><article class="research-example"><blockquote>' +
      esc(manual.prompt) + '</blockquote></article><p class="manual-ai-link"><a href="' +
      esc(withLang('web-pages-for-reading-and-ai-analysis.html', lang)) + '">' + esc(manual.aiLink) + ' →</a></p></section>';
  }

  function renderRelated(current, lang) {
    var labels = GUIDE_LABELS[lang] || GUIDE_LABELS.en;
    return GUIDE_ORDER.map(function (id) {
      var item = CASES[id];
      if (!item) return "";
      var currentClass = id === current.id ? " current" : "";
      var currentAttr = id === current.id ? " aria-current=\"page\"" : "";
      return "<a class=\"usecase-guide-link" + currentClass + "\" href=\"" + esc(withLang(item.path, lang)) + "\"" + currentAttr + ">" + esc(labels[id] || item.copy.en.h1) + "</a>";
    }).join("");
  }

  function setJsonLd(id, data) {
    var node = document.getElementById(id);
    if (node) node.textContent = JSON.stringify(data);
  }

  function updateStructuredData(current, copy, lang) {
    // Read the page's own canonical so the breadcrumb matches the locale URL it
    // is served on. Hardcoding the English tree made /ja/, /de/, … re-emit
    // English breadcrumb URLs once this script ran on top of the static markup.
    var canonicalNode = document.querySelector('link[rel="canonical"]');
    var canonical = (canonicalNode && canonicalNode.href) || "https://grab-all-files.app/use-cases/" + current.data.path;
    var home = canonical.replace(/use-cases\/[^/]*$/, "");
    setJsonLd("case-breadcrumb-schema", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Grab All Files", "item": home },
        { "@type": "ListItem", "position": 2, "name": UI[lang].useCases, "item": home + "use-cases/" },
        { "@type": "ListItem", "position": 3, "name": copy.h1, "item": canonical }
      ]
    });
    setJsonLd("case-faq-schema", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "inLanguage": lang.replace("_", "-"),
      "mainEntity": copy.faq.map(function (item) {
        return {
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        };
      })
    });
  }

  function render(lang, replaceUrl) {
    var current = getCase();
    var copy = current.data.copy[lang] || current.data.copy.en;
    var ui = UI[lang] || UI.en;
    var cta = current.data.cta && (current.data.cta[lang] || current.data.cta.en);
    var root = document.getElementById("case-root");
    if (!root) return;

    document.documentElement.lang = lang.replace("_", "-");
    document.title = copy.title;
    setMeta("meta[name=\"description\"]", "content", copy.desc);
    setMeta("meta[property=\"og:title\"]", "content", copy.title);
    setMeta("meta[property=\"og:description\"]", "content", copy.desc);
    setMeta("meta[name=\"twitter:title\"]", "content", copy.title);
    setMeta("meta[name=\"twitter:description\"]", "content", copy.desc);

    var sel = document.getElementById("lang-sel");
    if (sel) sel.value = lang;
    try { localStorage.setItem("gaf-lang", lang); } catch (_) {}
    if (replaceUrl && window.history && window.URL) {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url.toString());
    }

    document.querySelectorAll("[data-ui]").forEach(function (node) {
      var key = node.getAttribute("data-ui");
      if (ui[key]) node.textContent = ui[key];
    });
    document.querySelectorAll("[data-lang-href]").forEach(function (node) {
      var kind = node.getAttribute("data-lang-href");
      if (kind === "home") node.href = withLang("../", lang);
      if (kind === "use-cases") node.href = withLang("../use-cases/", lang);
      if (kind === "security") node.href = withLang("../security.html", lang);
      if (kind === "pricing") node.href = withLang("../", lang) + "#pricing";
      if (kind === "purchase") node.href = withLang("/purchase/", lang);
    });

    root.innerHTML = [
      "<section class=\"case-hero\">",
        "<div>",
          "<a class=\"breadcrumb\" href=\"" + esc(withLang("../use-cases/", lang)) + "\">← " + esc(ui.useCases) + "</a>",
          "<div class=\"eyebrow\"><span>✓</span><span>" + esc(copy.eyebrow) + "</span></div>",
          "<h1>" + esc(copy.h1) + "</h1>",
          "<p class=\"lead\">" + esc(copy.lead) + "</p>",
          "<div class=\"cta-row\">",
            "<span class=\"store-cta-label\">" + esc(ui.dlHeading) + "</span>",
            "<a class=\"store-btn\" href=\"" + esc(STORE.chrome) + "\" target=\"_blank\" rel=\"noopener\">" + esc(ui.dlChrome) + "</a>",
            "<a class=\"store-btn\" href=\"" + esc(STORE.edge) + "\" target=\"_blank\" rel=\"noopener\">" + esc(ui.dlEdge) + "</a>",
            "<a class=\"store-btn\" href=\"" + esc(STORE.firefox) + "\" target=\"_blank\" rel=\"noopener\">" + esc(ui.dlFirefox) + "</a>",
            "<a class=\"btn btn-secondary\" href=\"" + esc(withLang("../security.html", lang)) + "\">" + esc(ui.security) + "</a>",
          "</div>",
        "</div>",
        "<aside class=\"product-panel\" aria-label=\"Grab All Files\">",
          "<div class=\"panel-brand\"><img src=\"/favicon-128.png\" alt=\"\" width=\"42\" height=\"42\"><span>Grab All Files</span></div>",
          "<ul class=\"quick-facts\">",
            "<li><span class=\"mark\">✓</span><span>" + esc(ui.trial) + "</span></li>",
            "<li><span class=\"mark\">✓</span><span>" + esc(ui.license) + "</span></li>",
            "<li><span class=\"mark\">✓</span><span>" + esc(ui.local) + "</span></li>",
            "<li><span class=\"mark\">✓</span><span>" + esc(ui.privacy) + "</span></li>",
          "</ul>",
          "<div class=\"store-row\">",
            "<a href=\"" + esc(STORE.chrome) + "\" target=\"_blank\" rel=\"noopener\"><span>" + esc(ui.chrome) + "</span><span>↗</span></a>",
            "<a href=\"" + esc(STORE.edge) + "\" target=\"_blank\" rel=\"noopener\"><span>" + esc(ui.edge) + "</span><span>↗</span></a>",
            "<a href=\"" + esc(STORE.firefox) + "\" target=\"_blank\" rel=\"noopener\"><span>" + esc(ui.firefox) + "</span><span>↗</span></a>",
          "</div>",
        "</aside>",
      "</section>",
      "<div class=\"section-stack\">",
        renderFeatureVisual(current, lang),
        renderArxivGuide(copy.arxiv, "visual", lang),
        renderArxivGuide(copy.arxiv, "screen", lang),
        renderResearchGuide(copy.guide, "modes"),
        renderManualGuide(copy.manual, "patterns", lang),
        "<div class=\"two-col\">",
          "<section class=\"section-card\"><h2>" + esc(ui.bestFor) + "</h2><ul class=\"check-list\">" + renderList(copy.best, "check") + "</ul></section>",
          "<section class=\"section-card\"><h2>" + esc(ui.workflow) + "</h2><ol class=\"step-list\">" + renderList(copy.steps, "num") + "</ol></section>",
        "</div>",
        renderResearchGuide(copy.guide, "details"),
        renderArxivGuide(copy.arxiv, "access", lang),
        renderManualGuide(copy.manual, "details", lang),
        "<section class=\"section-card\"><h2>" + esc(ui.faq) + "</h2><div class=\"faq-list\">" + renderFaq(copy.faq) + "</div></section>",
        "<section class=\"section-card usecase-guide-section\"><h2>" + esc(ui.related) + "</h2><div class=\"usecase-guide-links\" aria-label=\"" + esc(ui.related) + "\">" + renderRelated(current, lang) + "</div></section>",
      "</div>",
      "<section class=\"final-cta\"><h2>" + esc(cta ? cta.title : ui.ctaTitle) + "</h2><p>" + esc(cta ? cta.text : ui.ctaText) + "</p><div class=\"final-dl\"><a class=\"store-btn\" href=\"" + esc(STORE.chrome) + "\" target=\"_blank\" rel=\"noopener\">" + esc(ui.dlChrome) + "</a><a class=\"store-btn\" href=\"" + esc(STORE.edge) + "\" target=\"_blank\" rel=\"noopener\">" + esc(ui.dlEdge) + "</a><a class=\"store-btn\" href=\"" + esc(STORE.firefox) + "\" target=\"_blank\" rel=\"noopener\">" + esc(ui.dlFirefox) + "</a></div></section>"
    ].join("");

    updateStructuredData(current, copy, lang);
  }

  function getTheme() {
    try {
      var stored = localStorage.getItem("gaf-theme");
      if (stored === "light" || stored === "dark") return stored;
    } catch (_) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("gaf-theme", theme); } catch (_) {}
  }

  // Apply without saving: only an explicit toggle click may pin a theme, so the
  // page keeps following the OS light/dark setting until the visitor chooses.
  document.documentElement.setAttribute("data-theme", getTheme());
  if (window.matchMedia) {
    try {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
        var stored = null;
        try { stored = localStorage.getItem("gaf-theme"); } catch (_) {}
        if (stored !== "light" && stored !== "dark") document.documentElement.setAttribute("data-theme", getTheme());
      });
    } catch (_) {}
  }
  var langSel = document.getElementById("lang-sel");
  if (langSel) langSel.addEventListener("change", function (event) { render(event.target.value, true); });
  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", function () { setTheme(getTheme() === "dark" ? "light" : "dark"); });
  render(detectLang(), false);
})();
