# Ben-Hur Public School — Multi-page frontend

This project expands the supplied single-page recreation into eight linked pages using HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — Home
- `about.html` — About Us
- `academics.html` — Academics
- `facilities.html` — Campus and facilities
- `admissions.html` — Admission information and FAQs
- `gallery.html` — Filterable image gallery with lightbox
- `results.html` — Historical result table with search
- `contact.html` — Contact details and frontend-only enquiry form

## Run on Windows
1. Extract the ZIP.
2. Open the extracted `ben-hur-multipage` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run: `py -m http.server 8000`
5. Visit `http://localhost:8000` in Chrome.
6. Stop the server with `Ctrl + C`.

## How it works
- HTML files define each page's content and structure.
- `css/style.css` provides the shared visual design and responsive layouts.
- `js/app.js` handles navigation, result rendering/search, gallery filtering/lightbox, FAQ accordions and demo form validation.
- Every page links to the same CSS and JS files, so shared changes apply site-wide.

## Important limitations
- School photos are loaded from the public school website and need internet access.
- This is an independent learning replica, not the official school website.
- The contact form does not send/store messages; a backend or form service is required.
- Some admission and school information should be verified directly with the school before publication.
