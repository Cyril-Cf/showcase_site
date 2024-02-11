# Static website with Pug, SASS, i18n, and i18next

## Architecture

- Pug files are written and modified (/html_templates/pug)
- Pug files are transformed into HTML files with i18n variables
- HTML files are transformed with i18n node static lib into several HTML complete files (locales in /html_templates/locales). Currently works with fr and eng.
- HTML files are minified
- JS files are minified (to dist/js)
- CSS files are built from SASS files and minified (to dist/css)
- i18next is used for dynamic locales changes applied inside Javascript functions while the other one (node static i18n) is here to help generate multiple HTML files based one locale lists during compilation

## Launching and testing

- To execute all tasks in on go, just launch: docker compose up
- To test your website and avoid CORS problems: docker compose -f docker-compose.dev.yaml up
