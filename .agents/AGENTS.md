# Project Rules — Dacitos

## Git: Commit After Every Piece of Work

After completing **any** meaningful unit of work — a new file, a feature, a fix, a config change, a refactor — always stage and commit before moving on.

### Commit Guidelines

- **Stage all relevant changes**: `git add -A` or selectively stage related files.
- **Write a clear, conventional commit message** using the format:

  ```
  <type>: <short summary>

  - Bullet points for key details if needed
  ```

  Common types:
  | Type | When to use |
  |---|---|
  | `feat` | New component, feature, or page |
  | `style` | CSS / Tailwind / design changes |
  | `config` | Config file changes (tailwind, next, tsconfig) |
  | `fix` | Bug or error fix |
  | `refactor` | Code restructure without behavior change |
  | `chore` | Dependency installs, tooling, scaffolding |
  | `docs` | README or comment updates |

- **Push to `origin/master`** after each commit (or batch of related commits):
  ```bash
  git push origin master
  ```

### Example Workflow

```bash
# After building a new Navbar component:
git add -A
git commit -m "feat: add Navbar component with mobile responsive menu"
git push origin master
```

> Never leave a session without committing completed work to the remote.
