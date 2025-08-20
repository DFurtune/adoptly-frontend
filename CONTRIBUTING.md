# Contributing Guidelines

Thank you for your interest in contributing to this project! To ensure a smooth collaboration process, please follow these guidelines.

## Branching Strategy

- Use meaningful branch names prefixed with the type of work:
  - `feature/` — For new features (e.g., `feature/OSTC-XX-add-user-auth`).
  - `bugfix/` — For bug fixes (e.g., `bugfix/OSTC-XX-fix-login-error`).
  - `chore/` — For maintenance tasks (e.g., `chore/OSTC-XX-update-dependencies`).
- Create a new branch from `main` for each contribution:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/your-feature-name
  ```
- Push your branch to the remote repository:
  ```bash
  git push origin feature/your-feature-name
  ```

## Pull Request Process

1. Ensure your code is tested and meets the project's code style guidelines (see below).
2. Open a pull request (PR) from your branch to `main`:
   - Provide a clear title and description of the changes.
   - Reference any related issues (e.g., "Fixes #123").
3. Wait for at least one approval from a reviewer.
4. Ensure the CI build (build check) passes before merging.
5. Once approved and checks pass, merge the PR. Delete the branch after merging (optional).

## Code Style

- Follow the project's code style enforced by ESLint and Prettier:
  - Use single quotes for strings.
  - Add semicolons at the end of statements.
  - Maintain a maximum line length of 80 characters.
  - Format code before committing:
    ```bash
    npm run lint
    npm run format
    ```
- Check your changes with:
  ```bash
  npm run lint
  ```
- Detailed configurations are in `.eslintrc.json` and `.prettierrc`.

## Tools

- **Issues**: Use the Issues tab to report bugs, suggest features, or track tasks.
- **Discussions**: Use the Discussions tab to share ideas, ask questions, or propose new concepts.

## Best Practices

- Keep commits small and focused on a single change.
- Write clear commit messages (e.g., "Add user authentication feature").
- Communicate with the team via Issues or Discussions if unsure about a contribution.
- Test your changes locally before submitting a PR.

We appreciate your contributions and look forward to collaborating with you!
