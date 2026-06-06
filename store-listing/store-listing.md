# Grab All Files Store Listing Pack

Last updated: 2026-06-06

Use this file when updating Chrome Web Store, Microsoft Edge Add-ons, and Firefox Add-ons listings.

Primary positioning:

> A professional bulk file downloader for people who collect PDFs, documents, images, ZIPs, and CSVs from pages they are allowed to access, including iframe viewers, fetch/XHR responses, blob URLs, and CMS download routes.

## Store Fields

### Title

Recommended:

```text
Grab All Files - Bulk PDF & File Downloader
```

Do not add more keywords to the title. Keep the brand stable and let the summary/description carry the search phrases.

### Short Summary

Chrome Web Store summary must be 132 characters or less.

```text
Find hidden PDFs, files and images on any page. Bulk-download, ZIP, export CSV and merge PDFs locally.
```

Length: 102 characters.

Japanese summary:

```text
PDF・Office・画像・ZIP・CSVを検出して一括保存。iframe・XHR・blob URLにも対応。PDF結合はローカルで完結。
```

Length: 69 characters.

## English Description

```text
Grab All Files helps researchers, archivists, students, and office teams collect downloadable files from pages they are allowed to access. It detects PDFs, Office documents, images, ZIPs, and CSVs that ordinary link-only tools may miss, including iframe viewers, lazy-loaded assets, fetch/XHR responses, blob URLs, and CMS download routes.

What you can do:
- Detect PDFs, Office files, images, ZIPs, and CSVs on the current page
- Find files loaded through iframes, viewers, fetch/XHR responses, blob URLs, and CMS routes
- Crawl same-site pages to collect documents from subpages and document archives
- Filter, sort, search, select, and reorder the detected file list
- Bulk-download selected files in one click
- Merge selected PDFs locally in your browser
- Build a ZIP archive locally
- Export URLs, names, sizes, types, and page titles as CSV

Privacy and security:
- Files are downloaded directly from the source site to your device
- PDF merge, ZIP creation, and CSV export run locally in the browser
- File contents, page HTML, detected URL lists, cookies, and passwords are not sent to our servers
- Only trial and license verification reaches the license server
- Uses your existing browser session only for pages you are already authorized to access

Trial and license:
- 14-day full-feature free trial
- No credit card required for the trial
- One-time USD $19.99 lifetime license after the trial
- No subscription
- Activates on up to 3 devices

Use responsibly. Grab All Files is intended for legitimate research, public records, internal portal, LMS, archive, documentation, and design workflows. Use it only for pages and files you are allowed to access and download.
```

## Japanese Description

```text
Grab All Files は、研究資料、公開資料、社内ポータル、LMS教材、画像素材、文書アーカイブなどを扱う人向けの一括ファイル取得ツールです。PDF、Office文書、画像、ZIP、CSVを検出し、通常のリンク抽出では見落としやすい iframe、PDFビューア、遅延読み込み、fetch/XHRレスポンス、blob URL、CMSダウンロードルートにも対応します。

できること:
- 現在のページ上のPDF、Office文書、画像、ZIP、CSVを検出
- iframe、ビューア、fetch/XHR、blob URL、CMS経由のファイルを検出
- 同一サイト内をクロールし、サブページや文書アーカイブの資料を収集
- 検出結果を拡張子、サイズ、名前、ページタイトルなどで絞り込み・並べ替え
- 必要なファイルを選択して一括保存
- 選択したPDFをブラウザ内でローカル結合
- 選択ファイルをブラウザ内でZIP化
- URL、ファイル名、サイズ、種類、ページタイトルをCSV出力

プライバシーとセキュリティ:
- ファイルはソースサイトから端末へ直接ダウンロードされます
- PDF結合、ZIP作成、CSV出力はブラウザ内で完結します
- ファイル本文、ページHTML、検出URL一覧、Cookie、パスワードは当方サーバーへ送信されません
- 当方サーバーへ送信されるのは、無料トライアルとライセンス確認に必要な情報のみです
- ログイン済みページは、ユーザーがすでに正当にアクセスできる範囲でブラウザセッションを利用します

トライアルとライセンス:
- 14日間フル機能を無料で試用できます
- トライアルにクレジットカードは不要です
- トライアル後は USD $19.99 の買い切り永続ライセンス
- サブスクリプションなし
- 最大3台のデバイスで有効化できます

Grab All Files は、研究、公開資料収集、社内ポータル、LMS、アーカイブ、文書整理、デザイン業務などの正当な作業を効率化するためのツールです。対象サイトの利用規約、著作権、アクセス権限を守って利用してください。
```

## Permission / Privacy Note For Store Forms

Use this when a store asks why broad host permissions are needed:

```text
Grab All Files lets the user choose any web page or URL to scan. Broad website access is required because the target domain is not known in advance, and the extension must inspect the selected page, frames, file-like network responses, and download links before it can show the detected file list. The extension uses this access only for pages or URLs the user chooses to scan. File contents, page HTML, detected URL lists, cookies, passwords, and browsing history are not sent to the developer's servers. Only trial and license verification data reaches the license backend.
```

Japanese:

```text
Grab All Files は、ユーザーが選択した任意のWebページまたはURLをスキャンするため、対象ドメインを事前に固定できません。そのため、選択されたページ、iframe、ファイルらしいネットワークレスポンス、ダウンロードリンクを確認する権限が必要です。この権限は、ユーザーがスキャン対象として選んだページまたはURLに対してのみ利用します。ファイル本文、ページHTML、検出URL一覧、Cookie、パスワード、閲覧履歴は当方サーバーへ送信されません。当方サーバーへ送信されるのは、無料トライアルとライセンス確認に必要な情報のみです。
```

## Dashboard Checklist

- Keep the title unchanged unless there is a strong reason to rebrand.
- Paste the short summary first and confirm it is under the store limit.
- Use the English description as the default listing description.
- Add the Japanese summary/description as the Japanese locale if the store supports localized listing text.
- Link privacy/security fields to:
  - https://grab-all-files.app/privacy-policy.html
  - https://grab-all-files.app/security.html
- Upload five screenshots in the order defined in `screenshot-plan.md`.
- After publishing, verify the public listing shows the new summary, privacy text, and screenshot order.

## References

- Chrome Web Store listing guidance: https://developer.chrome.com/docs/webstore/best-listing
- Chrome Web Store image guidance: https://developer.chrome.com/docs/webstore/images
