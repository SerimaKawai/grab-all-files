# Store Screenshot Plan

Recommended format for Chrome Web Store: 5 screenshots, 1280 x 800 px, square corners, no padding. The same order can be reused for Microsoft Edge Add-ons and Firefox Add-ons unless their dashboard requests different dimensions.

## Screenshot Order

### 1. Detection Results

Filename:

```text
01-detection-results.png
```

Goal: show the first success moment.

Visual:

- Extension popup or app panel with a clear result count, for example "47 files detected".
- Mixed file types: PDF, DOCX, XLSX, ZIP, CSV, PNG.
- Filter chips visible but not dominant.
- Primary action visible: "Download selected".

Caption idea:

```text
Find PDFs, documents, images, ZIPs and CSVs in one scan.
```

### 2. Hidden Sources

Filename:

```text
02-hidden-sources.png
```

Goal: show why this is not a generic link downloader.

Visual:

- Detected source labels such as iframe, viewer, fetch/XHR, blob URL, CMS route, lazy load.
- Keep this to a clean table or grouped result list.

Caption idea:

```text
Detect files from iframes, viewers, XHR responses and blob URLs.
```

### 3. Same-Site Crawl

Filename:

```text
03-same-site-crawl.png
```

Goal: show work-scale usefulness.

Visual:

- Crawl depth control.
- Pages scanned count.
- Example categories: reports, course materials, public records.
- Avoid implying access-control circumvention. Use "authorized pages" or "current browser session".

Caption idea:

```text
Crawl same-site pages and collect documents from subpages.
```

### 4. Local Output Actions

Filename:

```text
04-local-output-actions.png
```

Goal: show the paid-value features.

Visual:

- Buttons/actions for bulk download, ZIP, merge PDFs, export CSV.
- A selected PDF set with "Merge locally".
- A CSV export preview or small metadata panel.

Caption idea:

```text
Bulk-download, create ZIPs, export CSV and merge PDFs locally.
```

### 5. Privacy And Permissions

Filename:

```text
05-privacy-permissions.png
```

Goal: reduce hesitation caused by browser extension permissions.

Visual:

- Simple privacy panel with 3 facts:
  - 0 files uploaded
  - Files stay on your device
  - License check only
- Link or footer text: grab-all-files.app/security.html

Caption idea:

```text
No file uploads. PDF merge, ZIP and CSV run locally in your browser.
```

## Image Notes

- Use actual extension UI whenever possible.
- Keep text short. The image should still be readable after downscaling to 640 x 400.
- Do not use competitor names in screenshots.
- Do not show real private websites, customer data, cookies, tokens, or user emails.
- Keep visual branding consistent with `icon-512.png` and the homepage.

## Publish Checklist

- Upload all five screenshots in the order above.
- Confirm the first screenshot shows the most important result, not a settings screen.
- Confirm the final screenshot addresses privacy and permissions.
- After publishing, check the public store page in Chrome, Edge, and Firefox.

## References

- Chrome Web Store images: https://developer.chrome.com/docs/webstore/images
- Chrome Web Store listing page guidance: https://developer.chrome.com/docs/webstore/best-listing
