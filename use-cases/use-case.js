(function () {
  var SUPPORTED = ["en", "ja", "es", "fr", "de", "it", "ko", "pt_BR", "zh_CN", "zh_TW"];
  var STORE = {
    chrome: "https://chromewebstore.google.com/detail/deopoklicobmohifoikcgepdodohcaaf",
    edge: "https://microsoftedge.microsoft.com/addons/detail/jednlijeohcagfehggnffjbkgjijbjgn",
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
      security: "Security",
      pricing: "Pricing",
      install: "Install free trial",
      bestFor: "Best for",
      workflow: "Workflow",
      faq: "FAQ",
      related: "Related use-case guides",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Purchase",
      license: "$19.99 lifetime license",
      trial: "14-day full-feature trial",
      local: "PDF merge, ZIP, and CSV run locally in the browser",
      privacy: "Files download directly from the source site to your device",
      ctaTitle: "Try Grab All Files on your browser.",
      ctaText: "Install the extension, run a real scan on the page you need, and decide during the 14-day free trial.",
      footer: "Independent browser extension by Serima Kawai. Not affiliated with Google, Microsoft, or Mozilla."
    },
    ja: {
      home: "ホーム",
      useCases: "用途別",
      security: "セキュリティ",
      pricing: "料金",
      install: "無料インストール",
      bestFor: "向いている用途",
      workflow: "使い方",
      faq: "よくある質問",
      related: "関連する用途別ガイド",
      chrome: "Chrome ウェブストア",
      edge: "Edge アドオン",
      firefox: "Firefox アドオン",
      purchase: "購入",
      license: "$19.99 永続ライセンス",
      trial: "14日間フル機能無料トライアル",
      local: "PDF結合・ZIP化・CSV出力はブラウザ内でローカル処理",
      privacy: "ファイルは元サイトから端末へ直接ダウンロード",
      ctaTitle: "実際のページで Grab All Files を試せます。",
      ctaText: "拡張機能をインストールし、対象ページでスキャンを実行。14日間の無料トライアル中に判断できます。",
      footer: "Serima Kawai による独立したブラウザ拡張機能。Google、Microsoft、Mozillaとは提携していません。"
    },
    es: {
      home: "Inicio",
      useCases: "Casos de uso",
      security: "Seguridad",
      pricing: "Precio",
      install: "Instalar gratis",
      bestFor: "Ideal para",
      workflow: "Flujo de trabajo",
      faq: "Preguntas frecuentes",
      related: "Guías relacionadas",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Comprar",
      license: "Licencia de por vida por $19.99",
      trial: "Prueba completa de 14 días",
      local: "PDF, ZIP y CSV se procesan localmente en el navegador",
      privacy: "Los archivos se descargan del sitio fuente a tu dispositivo",
      ctaTitle: "Prueba Grab All Files en tu navegador.",
      ctaText: "Instala la extensión, escanea una página real y decide durante la prueba gratuita.",
      footer: "Extensión independiente de Serima Kawai. Sin afiliación con Google, Microsoft ni Mozilla."
    },
    fr: {
      home: "Accueil",
      useCases: "Cas d'usage",
      security: "Sécurité",
      pricing: "Tarif",
      install: "Installer gratuitement",
      bestFor: "Idéal pour",
      workflow: "Processus",
      faq: "FAQ",
      related: "Guides associés",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Acheter",
      license: "Licence à vie $19.99",
      trial: "Essai complet de 14 jours",
      local: "PDF, ZIP et CSV restent traités localement dans le navigateur",
      privacy: "Les fichiers se téléchargent du site source vers votre appareil",
      ctaTitle: "Essayez Grab All Files dans votre navigateur.",
      ctaText: "Installez l'extension, lancez un vrai scan et décidez pendant l'essai gratuit.",
      footer: "Extension indépendante par Serima Kawai. Non affiliée à Google, Microsoft ou Mozilla."
    },
    de: {
      home: "Startseite",
      useCases: "Anwendungsfälle",
      security: "Sicherheit",
      pricing: "Preis",
      install: "Kostenlos installieren",
      bestFor: "Geeignet für",
      workflow: "Ablauf",
      faq: "FAQ",
      related: "Verwandte Leitfäden",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Kaufen",
      license: "$19.99 lebenslange Lizenz",
      trial: "14 Tage Test mit allen Funktionen",
      local: "PDF, ZIP und CSV werden lokal im Browser verarbeitet",
      privacy: "Dateien werden direkt von der Quellseite auf Ihr Gerät geladen",
      ctaTitle: "Testen Sie Grab All Files in Ihrem Browser.",
      ctaText: "Installieren Sie die Erweiterung, scannen Sie eine echte Seite und entscheiden Sie im Testzeitraum.",
      footer: "Unabhängige Browser-Erweiterung von Serima Kawai. Nicht mit Google, Microsoft oder Mozilla verbunden."
    },
    it: {
      home: "Home",
      useCases: "Casi d'uso",
      security: "Sicurezza",
      pricing: "Prezzo",
      install: "Installa gratis",
      bestFor: "Ideale per",
      workflow: "Flusso",
      faq: "FAQ",
      related: "Guide correlate",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Acquista",
      license: "Licenza a vita $19.99",
      trial: "Prova completa di 14 giorni",
      local: "PDF, ZIP e CSV vengono elaborati localmente nel browser",
      privacy: "I file vengono scaricati dal sito sorgente al dispositivo",
      ctaTitle: "Prova Grab All Files nel tuo browser.",
      ctaText: "Installa l'estensione, scansiona una pagina reale e decidi durante la prova gratuita.",
      footer: "Estensione indipendente di Serima Kawai. Non affiliata a Google, Microsoft o Mozilla."
    },
    ko: {
      home: "홈",
      useCases: "사용 사례",
      security: "보안",
      pricing: "가격",
      install: "무료 설치",
      bestFor: "적합한 용도",
      workflow: "작업 흐름",
      faq: "자주 묻는 질문",
      related: "관련 사용 사례 가이드",
      chrome: "Chrome 웹 스토어",
      edge: "Edge 추가 기능",
      firefox: "Firefox 부가 기능",
      purchase: "구매",
      license: "$19.99 평생 라이선스",
      trial: "14일 전체 기능 무료 체험",
      local: "PDF 병합, ZIP, CSV는 브라우저에서 로컬 처리",
      privacy: "파일은 원본 사이트에서 기기로 직접 다운로드됩니다",
      ctaTitle: "브라우저에서 Grab All Files를 사용해 보세요.",
      ctaText: "확장 프로그램을 설치하고 실제 페이지를 스캔한 뒤 무료 체험 기간에 판단하세요.",
      footer: "Serima Kawai의 독립 브라우저 확장 프로그램. Google, Microsoft, Mozilla와 제휴하지 않습니다."
    },
    pt_BR: {
      home: "Início",
      useCases: "Casos de uso",
      security: "Segurança",
      pricing: "Preço",
      install: "Instalar grátis",
      bestFor: "Ideal para",
      workflow: "Fluxo",
      faq: "Perguntas frequentes",
      related: "Guias relacionados",
      chrome: "Chrome Web Store",
      edge: "Edge Add-ons",
      firefox: "Firefox Add-ons",
      purchase: "Comprar",
      license: "Licença vitalícia por $19.99",
      trial: "Teste completo de 14 dias",
      local: "PDF, ZIP e CSV são processados localmente no navegador",
      privacy: "Os arquivos são baixados do site fonte para o seu dispositivo",
      ctaTitle: "Teste o Grab All Files no seu navegador.",
      ctaText: "Instale a extensão, escaneie uma página real e decida durante o teste gratuito.",
      footer: "Extensão independente de Serima Kawai. Sem afiliação com Google, Microsoft ou Mozilla."
    },
    zh_CN: {
      home: "首页",
      useCases: "用途",
      security: "安全",
      pricing: "价格",
      install: "免费安装",
      bestFor: "适合用途",
      workflow: "工作流程",
      faq: "常见问题",
      related: "相关用途指南",
      chrome: "Chrome 应用商店",
      edge: "Edge 加载项",
      firefox: "Firefox 附加组件",
      purchase: "购买",
      license: "$19.99 永久授权",
      trial: "14天全功能免费试用",
      local: "PDF合并、ZIP和CSV均在浏览器本地处理",
      privacy: "文件从源网站直接下载到您的设备",
      ctaTitle: "在浏览器中试用 Grab All Files。",
      ctaText: "安装扩展程序，在真实页面上运行扫描，并在免费试用期内决定。",
      footer: "Serima Kawai 的独立浏览器扩展程序。与 Google、Microsoft 或 Mozilla 无关联。"
    },
    zh_TW: {
      home: "首頁",
      useCases: "用途",
      security: "安全",
      pricing: "價格",
      install: "免費安裝",
      bestFor: "適合用途",
      workflow: "工作流程",
      faq: "常見問題",
      related: "相關用途指南",
      chrome: "Chrome 線上應用程式商店",
      edge: "Edge 附加元件",
      firefox: "Firefox 附加元件",
      purchase: "購買",
      license: "$19.99 永久授權",
      trial: "14天全功能免費試用",
      local: "PDF合併、ZIP和CSV均在瀏覽器本機處理",
      privacy: "檔案從來源網站直接下載到您的裝置",
      ctaTitle: "在瀏覽器中試用 Grab All Files。",
      ctaText: "安裝擴充功能，在真實頁面執行掃描，並在免費試用期內決定。",
      footer: "Serima Kawai 的獨立瀏覽器擴充功能。與 Google、Microsoft 或 Mozilla 無關聯。"
    }
  };

  function c(title, desc, eyebrow, h1, lead, best, steps, faq) {
    return { title: title, desc: desc, eyebrow: eyebrow, h1: h1, lead: lead, best: best, steps: steps, faq: faq };
  }

  var CASES = {
    "download-all-pdfs": {
      path: "download-all-pdfs.html",
      related: ["merge-pdfs-locally", "download-files-from-webpage", "internal-portal-downloads"],
      copy: {
        en: c(
          "Download all PDFs from a website | Grab All Files",
          "Find PDFs across a page or same-site crawl, including iframe viewers and CMS download routes. Bulk-download selected PDFs or merge them locally.",
          "PDF collection",
          "Download all PDFs from a website without opening each file.",
          "Grab All Files finds PDFs exposed as normal links, embedded viewers, iframe sources, lazy-loaded assets, fetch/XHR responses, and CMS download routes. Filter to PDF, select what you need, then download or merge locally in your browser.",
          ["Public reports, forms, and disclosures spread across multiple pages.", "Course materials, papers, and research PDFs on faculty sites.", "PDF viewer pages where the direct file URL is hidden.", "Same-site crawls that need sitemap.xml and JavaScript-menu coverage."],
          ["Open the page or paste the starting URL, then choose a same-site crawl depth.", "Filter the detected results to PDF and review title, source page, size, and URL.", "Download selected PDFs, build a ZIP, or merge them into one local PDF."],
          [{ q: "Can it find PDFs inside viewers or iframes?", a: "Yes. It checks iframe sources, viewer URLs, fetch/XHR responses, blob URLs, and common CMS routes where the direct PDF link is not visible." }, { q: "Can it crawl more than one page?", a: "Yes. Choose a same-site depth from the popup. The extension can also read sitemap.xml and robots.txt and follow JavaScript-menu links." }, { q: "Are PDFs uploaded for merging?", a: "No. PDF merge runs locally in your browser." }]
        ),
        ja: c(
          "Webサイト上のPDFを一括ダウンロード | Grab All Files",
          "iframeビューアやCMSダウンロードルートを含め、ページ内・同一サイト内のPDFを検出。一括保存またはローカル結合できます。",
          "PDF収集",
          "Webサイト上のPDFを、1つずつ開かずに一括ダウンロード。",
          "通常リンク、埋め込みPDFビューア、iframe、遅延読み込み、fetch/XHRレスポンス、CMSのダウンロードルートにあるPDFを検出します。PDFで絞り込み、必要なものだけ選び、保存またはブラウザ内で結合できます。",
          ["複数ページに分散した公開報告書、申請書、開示資料。", "大学・研究機関の講義資料、論文、配布PDF。", "直接URLが見えないPDFビューアページ。", "sitemap.xmlやJavaScriptメニューも追いたい同一サイト内クロール。"],
          ["対象ページを開く、または開始URLを貼り付けてクロール深度を選ぶ。", "検出結果をPDFで絞り込み、タイトル、元ページ、サイズ、URLを確認。", "選択PDFを一括保存、ZIP化、またはローカルで1つのPDFに結合。"],
          [{ q: "PDFビューアやiframe内のPDFも見つかりますか？", a: "はい。iframe、ビューアURL、fetch/XHRレスポンス、blob URL、CMSルートなど直接リンクが見えにくい場所も確認します。" }, { q: "複数ページをクロールできますか？", a: "はい。同一サイト内の深度を選べます。sitemap.xml、robots.txt、JavaScriptメニューのリンクにも対応します。" }, { q: "PDF結合でファイルはアップロードされますか？", a: "いいえ。PDF結合はブラウザ内でローカル処理されます。" }]
        ),
        es: c(
          "Descargar todos los PDF de un sitio web | Grab All Files",
          "Encuentra PDFs en una página o rastreo del mismo sitio, incluidos visores iframe y rutas CMS. Descarga o fusiona localmente.",
          "Recopilación de PDF",
          "Descarga todos los PDF de un sitio sin abrir cada archivo.",
          "Grab All Files detecta PDFs en enlaces normales, visores incrustados, iframes, carga diferida, respuestas fetch/XHR y rutas de CMS. Filtra por PDF, selecciona y descarga o fusiona localmente.",
          ["Informes públicos, formularios y documentos repartidos en varias páginas.", "Materiales de curso, artículos y PDFs de investigación.", "Páginas con visor PDF donde la URL directa está oculta.", "Rastreos del mismo sitio que necesitan sitemap.xml y menús JavaScript."],
          ["Abre la página o pega la URL inicial y elige la profundidad.", "Filtra los resultados a PDF y revisa título, página fuente, tamaño y URL.", "Descarga, crea un ZIP o fusiona PDFs localmente."],
          [{ q: "¿Encuentra PDFs en visores o iframes?", a: "Sí. Revisa iframes, URLs de visor, respuestas fetch/XHR, blob URLs y rutas CMS comunes." }, { q: "¿Puede rastrear más de una página?", a: "Sí. Puedes elegir profundidad del mismo sitio y también leer sitemap.xml y robots.txt." }, { q: "¿Sube PDFs para fusionarlos?", a: "No. La fusión PDF se ejecuta localmente en el navegador." }]
        ),
        fr: c(
          "Télécharger tous les PDF d'un site web | Grab All Files",
          "Trouvez les PDF sur une page ou un crawl du même site, y compris les viewers iframe et routes CMS. Téléchargez ou fusionnez localement.",
          "Collecte PDF",
          "Téléchargez tous les PDF d'un site sans ouvrir chaque fichier.",
          "Grab All Files détecte les PDF dans les liens, viewers intégrés, iframes, chargements différés, réponses fetch/XHR et routes CMS. Filtrez les PDF, sélectionnez, puis téléchargez ou fusionnez localement.",
          ["Rapports publics, formulaires et publications répartis sur plusieurs pages.", "Supports de cours, articles et PDF de recherche.", "Pages avec viewer PDF où l'URL directe est masquée.", "Crawl du même site avec sitemap.xml et menus JavaScript."],
          ["Ouvrez la page ou collez l'URL de départ, puis choisissez la profondeur.", "Filtrez les résultats sur PDF et vérifiez titre, page source, taille et URL.", "Téléchargez, créez un ZIP ou fusionnez les PDF localement."],
          [{ q: "Trouve-t-il les PDF dans les viewers ou iframes ?", a: "Oui. Il vérifie iframes, URLs de viewer, réponses fetch/XHR, blob URLs et routes CMS courantes." }, { q: "Peut-il crawler plusieurs pages ?", a: "Oui. Choisissez une profondeur du même site ; il lit aussi sitemap.xml et robots.txt." }, { q: "Les PDF sont-ils envoyés pour fusion ?", a: "Non. La fusion se fait localement dans le navigateur." }]
        ),
        de: c(
          "Alle PDFs von einer Website herunterladen | Grab All Files",
          "Findet PDFs auf einer Seite oder im Same-Site-Crawl, inklusive iframe-Viewer und CMS-Routen. Bulk-Download oder lokales Zusammenführen.",
          "PDF-Sammlung",
          "Laden Sie alle PDFs einer Website herunter, ohne jede Datei zu öffnen.",
          "Grab All Files findet PDFs in normalen Links, eingebetteten Viewern, iframes, Lazy Loading, fetch/XHR-Antworten und CMS-Downloadrouten. Nach PDF filtern, auswählen, herunterladen oder lokal zusammenführen.",
          ["Öffentliche Berichte, Formulare und Veröffentlichungen über viele Seiten.", "Kursmaterialien, Arbeiten und Forschungs-PDFs.", "PDF-Viewer-Seiten ohne sichtbare Direkt-URL.", "Same-Site-Crawls mit sitemap.xml und JavaScript-Menüs."],
          ["Seite öffnen oder Start-URL einfügen und Tiefe wählen.", "Ergebnisse auf PDF filtern und Titel, Quellseite, Größe und URL prüfen.", "PDFs herunterladen, ZIP erstellen oder lokal zusammenführen."],
          [{ q: "Findet es PDFs in Viewern oder iframes?", a: "Ja. Es prüft iframes, Viewer-URLs, fetch/XHR-Antworten, blob URLs und CMS-Routen." }, { q: "Kann es mehrere Seiten crawlen?", a: "Ja. Wählen Sie eine Same-Site-Tiefe; sitemap.xml und robots.txt werden ebenfalls gelesen." }, { q: "Werden PDFs zum Zusammenführen hochgeladen?", a: "Nein. Das Zusammenführen läuft lokal im Browser." }]
        ),
        it: c(
          "Scaricare tutti i PDF da un sito web | Grab All Files",
          "Trova PDF in una pagina o in un crawl dello stesso sito, inclusi viewer iframe e rotte CMS. Download o unione locale.",
          "Raccolta PDF",
          "Scarica tutti i PDF da un sito senza aprire ogni file.",
          "Grab All Files rileva PDF in link normali, viewer incorporati, iframe, lazy loading, risposte fetch/XHR e rotte CMS. Filtra per PDF, seleziona, scarica o unisci localmente.",
          ["Report pubblici, moduli e documenti distribuiti su più pagine.", "Materiali didattici, articoli e PDF di ricerca.", "Pagine con viewer PDF dove l'URL diretto è nascosto.", "Crawl dello stesso sito con sitemap.xml e menu JavaScript."],
          ["Apri la pagina o incolla l'URL iniziale e scegli la profondità.", "Filtra i risultati a PDF e controlla titolo, pagina sorgente, dimensione e URL.", "Scarica, crea un ZIP o unisci i PDF localmente."],
          [{ q: "Trova PDF in viewer o iframe?", a: "Sì. Controlla iframe, URL di viewer, risposte fetch/XHR, blob URL e rotte CMS." }, { q: "Può scansionare più pagine?", a: "Sì. Puoi scegliere una profondità dello stesso sito; legge anche sitemap.xml e robots.txt." }, { q: "I PDF vengono caricati per l'unione?", a: "No. L'unione PDF avviene localmente nel browser." }]
        ),
        ko: c(
          "웹사이트의 모든 PDF 다운로드 | Grab All Files",
          "iframe 뷰어와 CMS 다운로드 경로를 포함해 페이지 또는 동일 사이트 크롤링에서 PDF를 찾고, 일괄 다운로드하거나 로컬 병합합니다.",
          "PDF 수집",
          "각 파일을 열지 않고 웹사이트의 PDF를 한 번에 다운로드하세요.",
          "Grab All Files는 일반 링크, 내장 뷰어, iframe, 지연 로딩, fetch/XHR 응답, CMS 다운로드 경로의 PDF를 찾습니다. PDF로 필터링한 뒤 저장하거나 브라우저에서 로컬 병합할 수 있습니다.",
          ["여러 페이지에 흩어진 공공 보고서, 양식, 공개 자료.", "강의 자료, 논문, 연구 PDF.", "직접 URL이 보이지 않는 PDF 뷰어 페이지.", "sitemap.xml과 JavaScript 메뉴까지 필요한 동일 사이트 크롤링."],
          ["페이지를 열거나 시작 URL을 붙여넣고 크롤링 깊이를 선택합니다.", "결과를 PDF로 필터링하고 제목, 원본 페이지, 크기, URL을 확인합니다.", "PDF를 다운로드, ZIP 생성 또는 로컬 병합합니다."],
          [{ q: "뷰어 또는 iframe 안의 PDF도 찾나요?", a: "예. iframe, 뷰어 URL, fetch/XHR 응답, blob URL, CMS 경로를 확인합니다." }, { q: "여러 페이지를 크롤링할 수 있나요?", a: "예. 동일 사이트 깊이를 선택할 수 있고 sitemap.xml과 robots.txt도 읽습니다." }, { q: "PDF 병합 시 파일이 업로드되나요?", a: "아니요. 병합은 브라우저에서 로컬로 실행됩니다." }]
        ),
        pt_BR: c(
          "Baixar todos os PDFs de um site | Grab All Files",
          "Encontre PDFs em uma página ou rastreamento do mesmo site, incluindo viewers iframe e rotas CMS. Baixe em massa ou mescle localmente.",
          "Coleta de PDF",
          "Baixe todos os PDFs de um site sem abrir cada arquivo.",
          "Grab All Files detecta PDFs em links comuns, viewers incorporados, iframes, lazy loading, respostas fetch/XHR e rotas CMS. Filtre por PDF, selecione e baixe ou mescle localmente.",
          ["Relatórios públicos, formulários e divulgações espalhados por várias páginas.", "Materiais de curso, artigos e PDFs de pesquisa.", "Páginas com viewer PDF onde a URL direta fica oculta.", "Rastreamento do mesmo site com sitemap.xml e menus JavaScript."],
          ["Abra a página ou cole a URL inicial e escolha a profundidade.", "Filtre os resultados por PDF e revise título, página fonte, tamanho e URL.", "Baixe, crie um ZIP ou mescle PDFs localmente."],
          [{ q: "Ele encontra PDFs em viewers ou iframes?", a: "Sim. Verifica iframes, URLs de viewer, respostas fetch/XHR, blob URLs e rotas CMS." }, { q: "Pode rastrear mais de uma página?", a: "Sim. Escolha a profundidade do mesmo site; ele também lê sitemap.xml e robots.txt." }, { q: "Os PDFs são enviados para mesclar?", a: "Não. A mesclagem roda localmente no navegador." }]
        ),
        zh_CN: c(
          "批量下载网站上的所有PDF | Grab All Files",
          "查找页面或同站点爬取中的PDF，包括iframe查看器和CMS下载路径。可批量下载或本地合并。",
          "PDF收集",
          "无需逐个打开文件，即可下载网站上的所有PDF。",
          "Grab All Files 可检测普通链接、嵌入式查看器、iframe、懒加载、fetch/XHR响应和CMS下载路径中的PDF。按PDF筛选后，可下载或在浏览器本地合并。",
          ["分散在多页的公共报告、表单和公开资料。", "课程材料、论文和研究PDF。", "直接文件URL被隐藏的PDF查看器页面。", "需要sitemap.xml和JavaScript菜单覆盖的同站点爬取。"],
          ["打开页面或粘贴起始URL，并选择同站点爬取深度。", "将结果筛选为PDF，检查标题、来源页面、大小和URL。", "下载选中PDF，生成ZIP，或本地合并为一个PDF。"],
          [{ q: "能找到查看器或iframe中的PDF吗？", a: "可以。它会检查iframe、查看器URL、fetch/XHR响应、blob URL和常见CMS路径。" }, { q: "能爬取多个页面吗？", a: "可以。可选择同站点深度，并读取sitemap.xml和robots.txt。" }, { q: "合并PDF会上传文件吗？", a: "不会。PDF合并在浏览器本地运行。" }]
        ),
        zh_TW: c(
          "批次下載網站上的所有PDF | Grab All Files",
          "找出頁面或同站爬取中的PDF，包括iframe檢視器與CMS下載路徑。可批次下載或本機合併。",
          "PDF收集",
          "無需逐一開啟檔案，即可下載網站上的所有PDF。",
          "Grab All Files 可偵測普通連結、嵌入式檢視器、iframe、延遲載入、fetch/XHR回應和CMS下載路徑中的PDF。依PDF篩選後，可下載或在瀏覽器本機合併。",
          ["分散在多頁的公共報告、表單和公開資料。", "課程教材、論文和研究PDF。", "直接檔案URL被隱藏的PDF檢視器頁面。", "需要sitemap.xml和JavaScript選單覆蓋的同站爬取。"],
          ["開啟頁面或貼上起始URL，並選擇同站爬取深度。", "將結果篩選為PDF，檢查標題、來源頁面、大小和URL。", "下載選取PDF，產生ZIP，或本機合併為一個PDF。"],
          [{ q: "能找到檢視器或iframe中的PDF嗎？", a: "可以。它會檢查iframe、檢視器URL、fetch/XHR回應、blob URL和常見CMS路徑。" }, { q: "能爬取多個頁面嗎？", a: "可以。可選擇同站深度，並讀取sitemap.xml和robots.txt。" }, { q: "合併PDF會上傳檔案嗎？", a: "不會。PDF合併在瀏覽器本機執行。" }]
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
        de: c("Bilder von einer Webseite im Bulk herunterladen | Grab All Files", "Findet sichtbare, lazy-loaded, Hintergrund- und blob-Bilder; speichert Auswahl oder exportiert URLs.", "Bildsammlung", "Laden Sie Bilder einer Webseite gesammelt herunter, auch Lazy-Loading-Assets.", "Galerien verstecken Dateien oft in Lazy Loading, CSS-Hintergründen, srcset, blob URLs und Skripten. Grab All Files zeigt erkannte Bild-URLs zum Filtern, Auswählen und Speichern.", ["Bildgalerien und Medienbibliotheken.", "Produkt-, Portfolio- oder Dokumentationsseiten mit vielen Bildern.", "Seiten mit Lazy Loading, srcset oder CSS-Hintergründen.", "CSV-Export von Bild-URLs für spätere Prüfung."], ["Seite öffnen oder URL einfügen.", "Auf JPG, PNG, WebP, GIF oder SVG filtern.", "Herunterladen, nach Domain/Typ organisieren oder URLs als CSV exportieren."], [{ q: "Findet es lazy-loaded Bilder?", a: "Ja. DOM-Attribute, srcset, Hintergründe, blob URLs und Netzwerkantworten werden geprüft." }, { q: "Kann ich Dateitypen einschränken?", a: "Ja. Nach Erweiterung, Größe, Name oder Quellseite filtern." }, { q: "Kann ich URLs exportieren?", a: "Ja. Die Liste kann als CSV exportiert werden." }]),
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
        en: c("Download all files from a web page | Grab All Files", "Find documents, images, ZIPs, CSVs, and hidden file responses on a page. Filter, select, bulk-download, ZIP, merge PDFs, or export CSV.", "Bulk file download", "Download all files from a web page in one organized run.", "When a page mixes PDFs, Office documents, images, ZIPs, CSVs, and hidden fetch responses, manual saving is slow. Grab All Files scans the page, lists detectable files with metadata, and lets you choose exactly what to keep.", ["Pages with many document and media links.", "Pages where files are created by JavaScript or XHR.", "Audits that need a CSV of source URLs and metadata.", "One-off collection tasks where installing a full crawler is too much."], ["Scan the current page or paste a URL.", "Use filters for extension, size, name, page title, or date.", "Download selected files, create a local ZIP, merge PDFs, or export CSV."], [{ q: "What file types are supported?", a: "PDF, Office documents, images, ZIP, CSV, and many other downloadable file responses can be detected when the browser can access them." }, { q: "Can I choose only certain files?", a: "Yes. Use filters, search, sorting, and manual selection before downloading." }, { q: "Does it work on old HTTP pages?", a: "Yes. It can scan both HTTP and HTTPS pages that your browser can open." }]),
        ja: c("Webページ上のファイルを一括ダウンロード | Grab All Files", "文書、画像、ZIP、CSV、隠れたファイルレスポンスを検出。絞り込み、一括保存、ZIP化、PDF結合、CSV出力に対応。", "ファイル一括保存", "Webページ上のファイルを、整理された1回の作業で一括ダウンロード。",
          "PDF、Office文書、画像、ZIP、CSV、fetch/XHRレスポンスが混在するページでは、手作業の保存に時間がかかります。Grab All Files は検出可能なファイルをメタデータ付きで一覧化し、必要なものだけ選べます。",
          ["文書リンクやメディアが多いページ。", "JavaScriptやXHRでファイルが表示されるページ。", "URLとメタデータのCSVが必要な監査・棚卸し。", "本格的なクローラーまでは不要な単発収集作業。"],
          ["現在のページをスキャン、またはURLを貼り付ける。", "拡張子、サイズ、名前、ページタイトル、日付で絞り込む。", "選択ファイルを一括保存、ローカルZIP化、PDF結合、CSV出力。"],
          [{ q: "どのファイル形式に対応していますか？", a: "PDF、Office文書、画像、ZIP、CSVなど、ブラウザからアクセスできるダウンロード可能なレスポンスを検出できます。" }, { q: "一部のファイルだけ選べますか？", a: "はい。フィルター、検索、並べ替え、手動選択をしてから保存できます。" }, { q: "古いHTTPページでも使えますか？", a: "はい。ブラウザで開けるHTTP/HTTPSページをスキャンできます。" }]
        ),
        es: c("Descargar todos los archivos de una página | Grab All Files", "Encuentra documentos, imágenes, ZIPs, CSVs y respuestas ocultas. Filtra, descarga, ZIP, fusiona PDF o exporta CSV.", "Descarga masiva", "Descarga todos los archivos de una página en una sola operación.", "Cuando una página mezcla PDFs, Office, imágenes, ZIPs, CSVs y respuestas fetch, guardar manualmente es lento. Grab All Files lista archivos detectables con metadatos para elegir qué conservar.", ["Páginas con muchos documentos y medios.", "Archivos creados por JavaScript o XHR.", "Auditorías que necesitan CSV de URLs y metadatos.", "Tareas puntuales sin instalar un crawler completo."], ["Escanea la página actual o pega una URL.", "Filtra por extensión, tamaño, nombre, título o fecha.", "Descarga, crea ZIP local, fusiona PDFs o exporta CSV."], [{ q: "¿Qué tipos admite?", a: "PDF, Office, imágenes, ZIP, CSV y otras respuestas descargables accesibles al navegador." }, { q: "¿Puedo elegir solo algunos?", a: "Sí. Usa filtros, búsqueda, ordenación y selección manual." }, { q: "¿Funciona en HTTP antiguo?", a: "Sí. Escanea páginas HTTP y HTTPS que tu navegador puede abrir." }]),
        fr: c("Télécharger tous les fichiers d'une page | Grab All Files", "Trouvez documents, images, ZIP, CSV et réponses cachées. Filtrez, téléchargez, ZIP, fusion PDF ou export CSV.", "Téléchargement en masse", "Téléchargez tous les fichiers d'une page en une opération organisée.", "Quand une page mélange PDF, Office, images, ZIP, CSV et réponses fetch, l'enregistrement manuel est lent. Grab All Files liste les fichiers détectables avec métadonnées.", ["Pages avec nombreux documents et médias.", "Fichiers créés par JavaScript ou XHR.", "Audits nécessitant URLs et métadonnées en CSV.", "Collectes ponctuelles sans crawler complet."], ["Scannez la page actuelle ou collez une URL.", "Filtrez par extension, taille, nom, titre ou date.", "Téléchargez, créez un ZIP local, fusionnez les PDF ou exportez CSV."], [{ q: "Quels types sont pris en charge ?", a: "PDF, Office, images, ZIP, CSV et autres réponses téléchargeables accessibles au navigateur." }, { q: "Puis-je choisir certains fichiers ?", a: "Oui. Utilisez filtres, recherche, tri et sélection manuelle." }, { q: "Fonctionne-t-il sur de vieux sites HTTP ?", a: "Oui. Il scanne HTTP et HTTPS si le navigateur peut les ouvrir." }]),
        de: c("Alle Dateien von einer Webseite herunterladen | Grab All Files", "Findet Dokumente, Bilder, ZIPs, CSVs und versteckte Antworten. Filtern, Download, ZIP, PDF-Merge oder CSV-Export.", "Massendownload", "Laden Sie alle Dateien einer Webseite in einem organisierten Lauf herunter.", "Wenn eine Seite PDFs, Office-Dateien, Bilder, ZIPs, CSVs und fetch-Antworten mischt, ist manuelles Speichern langsam. Grab All Files listet erkannte Dateien mit Metadaten.", ["Seiten mit vielen Dokumenten und Medien.", "Dateien, die per JavaScript oder XHR entstehen.", "Audits mit CSV von URLs und Metadaten.", "Einmalige Sammlungen ohne kompletten Crawler."], ["Aktuelle Seite scannen oder URL einfügen.", "Nach Erweiterung, Größe, Name, Titel oder Datum filtern.", "Herunterladen, lokales ZIP erstellen, PDFs zusammenführen oder CSV exportieren."], [{ q: "Welche Typen werden unterstützt?", a: "PDF, Office, Bilder, ZIP, CSV und andere herunterladbare Antworten, die der Browser erreichen kann." }, { q: "Kann ich nur bestimmte Dateien wählen?", a: "Ja. Filter, Suche, Sortierung und manuelle Auswahl sind verfügbar." }, { q: "Funktioniert es auf HTTP-Seiten?", a: "Ja. Es scannt HTTP und HTTPS, wenn der Browser die Seite öffnen kann." }]),
        it: c("Scaricare tutti i file da una pagina | Grab All Files", "Trova documenti, immagini, ZIP, CSV e risposte nascoste. Filtra, scarica, ZIP, unisci PDF o esporta CSV.", "Download in massa", "Scarica tutti i file da una pagina in un'unica operazione.", "Quando una pagina mescola PDF, Office, immagini, ZIP, CSV e risposte fetch, salvare a mano è lento. Grab All Files elenca i file rilevabili con metadati.", ["Pagine con molti documenti e media.", "File creati da JavaScript o XHR.", "Audit che richiedono CSV di URL e metadati.", "Raccolte una tantum senza crawler completo."], ["Scansiona la pagina corrente o incolla una URL.", "Filtra per estensione, dimensione, nome, titolo o data.", "Scarica, crea ZIP locale, unisci PDF o esporta CSV."], [{ q: "Quali tipi sono supportati?", a: "PDF, Office, immagini, ZIP, CSV e altre risposte scaricabili accessibili al browser." }, { q: "Posso scegliere solo alcuni file?", a: "Sì. Usa filtri, ricerca, ordinamento e selezione manuale." }, { q: "Funziona su pagine HTTP?", a: "Sì. Scansiona HTTP e HTTPS che il browser può aprire." }]),
        ko: c("웹페이지의 모든 파일 다운로드 | Grab All Files", "문서, 이미지, ZIP, CSV, 숨겨진 파일 응답을 찾고 필터링, 다운로드, ZIP, PDF 병합, CSV 내보내기를 지원합니다.", "파일 일괄 다운로드", "웹페이지의 파일을 한 번에 정리해서 다운로드하세요.", "PDF, Office 문서, 이미지, ZIP, CSV, fetch 응답이 섞인 페이지를 수동 저장하는 것은 느립니다. Grab All Files는 감지 가능한 파일을 메타데이터와 함께 목록화해 필요한 것만 선택하게 합니다.", ["문서와 미디어 링크가 많은 페이지.", "JavaScript 또는 XHR로 파일이 만들어지는 페이지.", "URL과 메타데이터 CSV가 필요한 감사 작업.", "전체 크롤러까지는 필요 없는 단발 수집."], ["현재 페이지를 스캔하거나 URL을 붙여넣습니다.", "확장자, 크기, 이름, 페이지 제목, 날짜로 필터링합니다.", "다운로드, 로컬 ZIP 생성, PDF 병합, CSV 내보내기를 합니다."], [{ q: "어떤 파일 형식을 지원하나요?", a: "PDF, Office 문서, 이미지, ZIP, CSV 등 브라우저가 접근 가능한 다운로드 응답을 감지할 수 있습니다." }, { q: "일부 파일만 선택할 수 있나요?", a: "예. 필터, 검색, 정렬, 수동 선택을 사용할 수 있습니다." }, { q: "오래된 HTTP 페이지도 작동하나요?", a: "예. 브라우저에서 열 수 있는 HTTP/HTTPS 페이지를 스캔합니다." }]),
        pt_BR: c("Baixar todos os arquivos de uma página | Grab All Files", "Encontre documentos, imagens, ZIPs, CSVs e respostas ocultas. Filtre, baixe, ZIP, mescle PDF ou exporte CSV.", "Download em massa", "Baixe todos os arquivos de uma página em uma operação organizada.", "Quando uma página mistura PDFs, Office, imagens, ZIPs, CSVs e respostas fetch, salvar manualmente é lento. Grab All Files lista arquivos detectáveis com metadados.", ["Páginas com muitos documentos e mídias.", "Arquivos criados por JavaScript ou XHR.", "Auditorias que precisam de CSV de URLs e metadados.", "Coletas pontuais sem crawler completo."], ["Escaneie a página atual ou cole uma URL.", "Filtre por extensão, tamanho, nome, título ou data.", "Baixe, crie ZIP local, mescle PDFs ou exporte CSV."], [{ q: "Quais tipos são suportados?", a: "PDF, Office, imagens, ZIP, CSV e outras respostas baixáveis acessíveis ao navegador." }, { q: "Posso escolher apenas alguns arquivos?", a: "Sim. Use filtros, busca, ordenação e seleção manual." }, { q: "Funciona em páginas HTTP antigas?", a: "Sim. Escaneia HTTP e HTTPS que o navegador consegue abrir." }]),
        zh_CN: c("下载网页上的所有文件 | Grab All Files", "查找文档、图片、ZIP、CSV和隐藏文件响应。可筛选、批量下载、ZIP、PDF合并或CSV导出。", "文件批量下载", "一次有序操作，下载网页上的所有文件。", "当页面混合PDF、Office文档、图片、ZIP、CSV和fetch响应时，手动保存很慢。Grab All Files 会列出可检测文件和元数据，让您只保留需要的内容。", ["包含大量文档和媒体链接的页面。", "由JavaScript或XHR生成文件的页面。", "需要URL和元数据CSV的审计。", "不需要完整爬虫的一次性收集任务。"], ["扫描当前页面或粘贴URL。", "按扩展名、大小、名称、页面标题或日期筛选。", "下载选中文件、创建本地ZIP、合并PDF或导出CSV。"], [{ q: "支持哪些文件类型？", a: "可检测浏览器能访问的PDF、Office文档、图片、ZIP、CSV和其他可下载响应。" }, { q: "能只选择部分文件吗？", a: "可以。下载前可过滤、搜索、排序并手动选择。" }, { q: "旧HTTP页面也可以吗？", a: "可以。浏览器能打开的HTTP和HTTPS页面都可扫描。" }]),
        zh_TW: c("下載網頁上的所有檔案 | Grab All Files", "查找文件、圖片、ZIP、CSV和隱藏檔案回應。可篩選、批次下載、ZIP、PDF合併或CSV匯出。", "檔案批次下載", "一次有序操作，下載網頁上的所有檔案。", "當頁面混合PDF、Office文件、圖片、ZIP、CSV和fetch回應時，手動儲存很慢。Grab All Files 會列出可偵測檔案和中繼資料，讓您只保留需要的內容。", ["包含大量文件和媒體連結的頁面。", "由JavaScript或XHR產生檔案的頁面。", "需要URL和中繼資料CSV的稽核。", "不需要完整爬蟲的一次性收集工作。"], ["掃描目前頁面或貼上URL。", "依副檔名、大小、名稱、頁面標題或日期篩選。", "下載選取檔案、建立本機ZIP、合併PDF或匯出CSV。"], [{ q: "支援哪些檔案類型？", a: "可偵測瀏覽器能存取的PDF、Office文件、圖片、ZIP、CSV和其他可下載回應。" }, { q: "能只選擇部分檔案嗎？", a: "可以。下載前可篩選、搜尋、排序並手動選擇。" }, { q: "舊HTTP頁面也可以嗎？", a: "可以。瀏覽器能開啟的HTTP和HTTPS頁面都可掃描。" }])
      }
    },
    "internal-portal-downloads": {
      path: "internal-portal-downloads.html",
      related: ["download-files-from-webpage", "download-all-pdfs", "bulk-download-images"],
      copy: {
        en: c("Download documents from internal portals and LMS pages | Grab All Files", "Use your existing browser session to collect authorized files from intranets, LMS portals, member areas, and document-heavy dashboards.", "Authorized portal downloads", "Download files from internal portals without handing over credentials.", "For intranets, LMS pages, member areas, and dashboards, the browser already has the login session. Grab All Files runs in that browser context, scans pages you are authorized to access, and keeps credential handling outside the extension.", ["Corporate intranets with many attachments.", "LMS pages such as Moodle, Canvas, or Blackboard.", "Member-only libraries and client portals.", "Document dashboards where files are behind buttons, viewers, or forms."], ["Open the authorized page in your browser session.", "Run a page scan or same-site crawl within the portal area you can access.", "Filter, select, download, ZIP, merge PDFs, or export CSV locally."], [{ q: "Does it collect passwords?", a: "No. It uses the browser session you already have and does not collect credentials." }, { q: "Can it bypass access controls?", a: "No. It only works on pages and files your browser is already authorized to access." }, { q: "Is it suitable for confidential files?", a: "Files download directly to your device. Review your organization rules before using any download automation." }]),
        ja: c("社内ポータル・LMSの資料をダウンロード | Grab All Files", "既存のブラウザログイン状態を使い、イントラネット、LMS、会員ページ、資料の多いダッシュボードから許可されたファイルを収集します。", "認可済みポータルの取得", "認証情報を渡さず、社内ポータルのファイルをダウンロード。",
          "イントラネット、LMS、会員エリア、ダッシュボードでは、ブラウザにログイン状態があります。Grab All Files はそのブラウザ文脈で動作し、あなたがアクセス権を持つページをスキャンします。認証情報の取り扱いは拡張機能の外に残ります。",
          ["添付ファイルが多い社内イントラネット。", "Moodle、Canvas、BlackboardなどのLMSページ。", "会員限定ライブラリやクライアントポータル。", "ボタン、ビューア、フォームの背後にある文書ダッシュボード。"],
          ["ブラウザで認可済みページを開く。", "アクセス可能な範囲でページスキャンまたは同一サイトクロールを実行。", "絞り込み、選択、一括保存、ZIP化、PDF結合、CSV出力をローカルで実行。"],
          [{ q: "パスワードを収集しますか？", a: "いいえ。既存のブラウザセッションを使い、認証情報は収集しません。" }, { q: "アクセス制御を回避できますか？", a: "いいえ。ブラウザがすでにアクセスを許可されているページとファイルだけが対象です。" }, { q: "機密ファイルにも使えますか？", a: "ファイルは端末へ直接保存されます。組織のルールを確認してから利用してください。" }]
        ),
        es: c("Descargar documentos de portales internos y LMS | Grab All Files", "Usa tu sesión del navegador para recopilar archivos autorizados de intranets, LMS y áreas de miembros.", "Descargas autorizadas", "Descarga archivos de portales internos sin entregar credenciales.", "En intranets, LMS y dashboards, el navegador ya tiene la sesión iniciada. Grab All Files trabaja en ese contexto y escanea páginas a las que tienes acceso.", ["Intranets con muchos adjuntos.", "LMS como Moodle, Canvas o Blackboard.", "Bibliotecas de miembros y portales de clientes.", "Dashboards con archivos tras botones, visores o formularios."], ["Abre la página autorizada en tu navegador.", "Ejecuta un escaneo o rastreo dentro del área accesible.", "Filtra, descarga, ZIP, fusiona PDFs o exporta CSV localmente."], [{ q: "¿Recopila contraseñas?", a: "No. Usa tu sesión actual y no recoge credenciales." }, { q: "¿Evita controles de acceso?", a: "No. Solo actúa sobre páginas autorizadas para tu navegador." }, { q: "¿Sirve para archivos confidenciales?", a: "Los archivos van directo a tu dispositivo. Revisa las reglas de tu organización." }]),
        fr: c("Télécharger des documents depuis portails internes et LMS | Grab All Files", "Utilisez votre session navigateur pour collecter les fichiers autorisés d'intranets, LMS et espaces membres.", "Téléchargements autorisés", "Téléchargez depuis des portails internes sans fournir d'identifiants.", "Sur intranets, LMS et dashboards, le navigateur possède déjà la session. Grab All Files fonctionne dans ce contexte et scanne les pages autorisées.", ["Intranets avec nombreux fichiers joints.", "LMS comme Moodle, Canvas ou Blackboard.", "Bibliothèques membres et portails clients.", "Dashboards avec fichiers derrière boutons, viewers ou formulaires."], ["Ouvrez la page autorisée dans le navigateur.", "Lancez un scan ou crawl dans la zone accessible.", "Filtrez, téléchargez, ZIP, fusionnez PDF ou exportez CSV localement."], [{ q: "Collecte-t-il les mots de passe ?", a: "Non. Il utilise votre session existante sans collecter d'identifiants." }, { q: "Contourne-t-il les accès ?", a: "Non. Il agit seulement sur ce que votre navigateur peut déjà ouvrir." }, { q: "Pour fichiers confidentiels ?", a: "Les fichiers vont vers votre appareil. Vérifiez les règles de votre organisation." }]),
        de: c("Dokumente aus internen Portalen und LMS herunterladen | Grab All Files", "Nutzen Sie Ihre Browser-Sitzung, um autorisierte Dateien aus Intranets, LMS und Mitgliederbereichen zu sammeln.", "Autorisierte Downloads", "Laden Sie Dateien aus internen Portalen herunter, ohne Zugangsdaten weiterzugeben.", "Bei Intranets, LMS und Dashboards hat der Browser bereits die Sitzung. Grab All Files arbeitet in diesem Kontext und scannt autorisierte Seiten.", ["Intranets mit vielen Anhängen.", "LMS wie Moodle, Canvas oder Blackboard.", "Mitgliederbibliotheken und Kundenportale.", "Dashboards mit Dateien hinter Buttons, Viewern oder Formularen."], ["Autorisierte Seite im Browser öffnen.", "Scan oder Crawl im zugänglichen Bereich starten.", "Filtern, herunterladen, ZIP, PDF-Merge oder CSV-Export lokal ausführen."], [{ q: "Sammelt es Passwörter?", a: "Nein. Es nutzt Ihre vorhandene Browser-Sitzung und sammelt keine Zugangsdaten." }, { q: "Umgeht es Zugriffskontrollen?", a: "Nein. Nur Seiten, die Ihr Browser bereits öffnen darf." }, { q: "Für vertrauliche Dateien geeignet?", a: "Dateien gehen direkt auf Ihr Gerät. Prüfen Sie interne Regeln." }]),
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
        fr: c("Fusionner des PDF localement dans le navigateur | Grab All Files", "Sélectionnez les PDF détectés sur une page et fusionnez-les localement sans upload serveur.", "Fusion PDF locale", "Fusionnez localement les PDF collectés depuis une page.", "Grab All Files n'est pas seulement un téléchargeur. Après détection des PDF, choisissez les fichiers et fusionnez-les dans le navigateur. Les PDF restent sur votre appareil.", ["Combiner rapports, avis, supports ou formulaires.", "Éviter les services PDF en ligne pour documents sensibles.", "Créer un paquet de revue à partir de nombreux PDF.", "Conserver un CSV des URLs source."], ["Scannez une page ou crawlez les liens du même site.", "Filtrez sur PDF et sélectionnez dans l'ordre voulu.", "Lancez la fusion locale et sauvegardez."], [{ q: "Est-ce un service en ligne ?", a: "Non. La fusion se fait dans le navigateur, sans upload." }, { q: "Puis-je contrôler l'ordre ?", a: "Oui. Triez ou réordonnez avant fusion." }, { q: "Puis-je garder les originaux ?", a: "Oui. Sauvegarde, ZIP et fusion sont disponibles." }]),
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
    return path + (path.indexOf("?") >= 0 ? "&" : "?") + "lang=" + encodeURIComponent(lang);
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

  function renderRelated(current, lang) {
    var ids = current.data.related || [];
    return ids.map(function (id) {
      var item = CASES[id];
      var copy = (item.copy[lang] || item.copy.en);
      return "<a class=\"related-card\" href=\"" + esc(withLang(item.path, lang)) + "\"><strong>" + esc(copy.h1) + "</strong><span>" + esc(copy.desc) + "</span></a>";
    }).join("");
  }

  function setJsonLd(id, data) {
    var node = document.getElementById(id);
    if (node) node.textContent = JSON.stringify(data);
  }

  function updateStructuredData(current, copy, lang) {
    var canonical = "https://grab-all-files.app/use-cases/" + current.data.path;
    setJsonLd("case-breadcrumb-schema", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Grab All Files", "item": "https://grab-all-files.app/" },
        { "@type": "ListItem", "position": 2, "name": UI[lang].useCases, "item": "https://grab-all-files.app/#use-cases" },
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
      if (kind === "use-cases") node.href = withLang("../", lang) + "#use-cases";
      if (kind === "security") node.href = withLang("../security.html", lang);
      if (kind === "pricing") node.href = withLang("../", lang) + "#pricing";
      if (kind === "purchase") node.href = withLang("../purchase/", lang);
    });

    root.innerHTML = [
      "<section class=\"case-hero\">",
        "<div>",
          "<a class=\"breadcrumb\" href=\"" + esc(withLang("../", lang) + "#use-cases") + "\">← " + esc(ui.useCases) + "</a>",
          "<div class=\"eyebrow\"><span>✓</span><span>" + esc(copy.eyebrow) + "</span></div>",
          "<h1>" + esc(copy.h1) + "</h1>",
          "<p class=\"lead\">" + esc(copy.lead) + "</p>",
          "<div class=\"cta-row\">",
            "<a class=\"btn btn-primary\" href=\"" + esc(STORE.chrome) + "\" target=\"_blank\" rel=\"noopener\">" + esc(ui.install) + " ↗</a>",
            "<a class=\"btn btn-secondary\" href=\"" + esc(withLang("../security.html", lang)) + "\">" + esc(ui.security) + "</a>",
          "</div>",
        "</div>",
        "<aside class=\"product-panel\" aria-label=\"Grab All Files\">",
          "<div class=\"panel-brand\"><img src=\"../icon-512.png\" alt=\"\"><span>Grab All Files</span></div>",
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
        "<div class=\"two-col\">",
          "<section class=\"section-card\"><h2>" + esc(ui.bestFor) + "</h2><ul class=\"check-list\">" + renderList(copy.best, "check") + "</ul></section>",
          "<section class=\"section-card\"><h2>" + esc(ui.workflow) + "</h2><ol class=\"step-list\">" + renderList(copy.steps, "num") + "</ol></section>",
        "</div>",
        "<section class=\"section-card\"><h2>" + esc(ui.faq) + "</h2><div class=\"faq-list\">" + renderFaq(copy.faq) + "</div></section>",
        "<section class=\"section-card\"><h2>" + esc(ui.related) + "</h2><div class=\"related-grid\">" + renderRelated(current, lang) + "</div></section>",
      "</div>",
      "<section class=\"final-cta\"><h2>" + esc(ui.ctaTitle) + "</h2><p>" + esc(ui.ctaText) + "</p><a class=\"btn\" href=\"" + esc(STORE.chrome) + "\" target=\"_blank\" rel=\"noopener\">" + esc(ui.install) + " ↗</a></section>"
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

  setTheme(getTheme());
  var langSel = document.getElementById("lang-sel");
  if (langSel) langSel.addEventListener("change", function (event) { render(event.target.value, true); });
  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", function () { setTheme(getTheme() === "dark" ? "light" : "dark"); });
  render(detectLang(), false);
})();
