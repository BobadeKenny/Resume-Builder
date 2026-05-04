# Resume Builder (MVP)

A simple Node.js + Express + EJS app that lets users fill a form and instantly generate a one-page resume preview.

## Features

- Landing page with start CTA
- Resume form for:
  - Personal details
  - Summary
  - Skills
  - Experience
  - Education
- Basic server-side validation for required fields (`fullName`, `jobTitle`, `email`)
- Generated resume preview page
- Print / Save as PDF support from browser

## Tech Stack

- Node.js
- Express
- EJS
- Plain CSS

## Project Structure

```text
Resume-Builder/
  app.js
  package.json
  views/
    index.ejs
    form.ejs
    resume.ejs
    assets/
      css/
        index.css
        form.css
        resume.css
      js/
        index.js
        form.js
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
npm start
```

### 3. Open in browser

Visit:

```text
http://localhost:3000
```

## Available Scripts

- `npm start`: Starts the app with Node
- `npm run dev`: Runs the app in dev mode (currently same as `start`)

## Routes

- `GET /` -> Landing page
- `GET /form` -> Resume input form
- `POST /resume` -> Generate and render resume preview
- `GET /resume` -> Redirects to `/form` (prevents direct access errors)

## Validation Rules

The app requires these fields before generating resume output:

- Full name
- Professional title
- Email

If any are missing, the form is re-rendered with an error message and existing inputs.

## Current MVP Notes

- Data is not persisted yet (no database)
- Resume output is rendered from submitted form data only
- Styling is responsive and print-friendly for quick PDF export

## Next Improvements

- Persist resumes with SQLite or MongoDB
- Add multi-experience and multi-education entries
- Add downloadable PDF generation server-side
- Add authentication and user dashboards
- Add input sanitization and stronger validation

## License

MIT
