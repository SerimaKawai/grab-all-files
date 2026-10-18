# _src/ — page sources that are not published

`_src/index.html` is the homepage source: all ten languages inline (`data-lang="xx"`).

- Edit **this** file, then run `node build-locales.mjs` from the repo root.
- The build writes `/index.html` (English only) and `/<locale>/index.html` (one language each).
- Never edit `/index.html` directly: it carries a `generated from _src/index.html … sha256:` stamp,
  and the build and `check-homepage-seo.mjs` stop if its content no longer matches that stamp.
- Jekyll does not publish `_src/` (underscore directory, also listed in `_config.yml` exclude).
