# React Project

This project is a React frontend application created using Vite. It is set up with a modular structure to facilitate collaboration among developers.

## Project Structure

- **src/**
  - **components/** — Reusable UI components (e.g., Button).
  - **pages/** — Components representing application pages (e.g., HomePage).
  - **services/** — Logic for API interactions (e.g., requests to a Gitea backend).
  - **App.jsx** — Main application component.
  - **main.jsx** — Entry point for rendering React.
  - **index.css** — Global styles.
- **public/** — Static files (e.g., favicon, images).
- **.env.example** — Template for environment variables (e.g., VITE_API_URL).
- **.eslintrc.json** — ESLint configuration for code linting.
- **.prettierrc** — Prettier configuration for code formatting.
- **.github/workflows/ci.yml** — GitHub Actions workflow for CI.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy .env.example to .env and configure environment variables:

   ```bash
   cp .env.example .env
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` — Starts the development server.
- `npm run build` — Builds the project for production.
- `npm run preview` — Previews the built project.
- `npm run lint` — Runs ESLint to check code quality.
- `npm run format` — Formats code using Prettier.

## API Configuration

To connect to a backend (e.g., Gitea), configure the `VITE_API_URL` in the `.env` file. Example:

```
VITE_API_URL=http://backend-api.com
```

## Code Style

- The project uses ESLint and Prettier to enforce consistent code style.
- Before committing, run:
  ```bash
  npm run lint
  npm run format
  ```
- Configuration details are in `.eslintrc.json` and `.prettierrc`.

## Continuous Integration

- A GitHub Actions workflow (`ci.yml`) runs on pull requests to `main`, ensuring the project builds successfully (`npm install` and `npm run build`).
- Status checks must pass before merging pull requests.

## Branch Protection Rules

- The `main` branch is protected to ensure code quality and collaboration:
  - Pull requests are required: Direct pushes to `main` are blocked.
  - Minimum 1 review: At least one approval is required before merging.
  - Status checks: CI check (build) must pass before merging.
- To contribute, create a new branch, push changes, and open a pull request:
  ```bash
  git checkout -b feature/OSTC-XX-your-feature
  git push origin feature/OSTC-XX-your-feature
  ```

## Contributing

For guidelines on how to contribute, please see `CONTRIBUTING.md`.

## Collaboration Guidelines

- Keep components modular and reusable in `src/components/`.
- Add new pages to `src/pages/`.
- Place API-related logic in `src/services/`.
- Use PascalCase for component and file names (e.g., `HomePage.jsx`).
- Avoid global styles; prefer CSS Modules or other isolated styling approaches.

## Environment Requirements

- **Node.js**: v20 or higher
- **npm**: v8 or higher
