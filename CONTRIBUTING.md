# Guidelines - Contributing to "WTF Should I Cook?"

_WTF Should I Cook?_ is developed using a [trunk-based][trunk-based]
approach. As such all Pull Requests (PRs) should be branched from `main` and ideally,
branch naming should follow this pattern: `<PURPOSE>/<SHORT_DESC>`

Where:
- `<PURPOSE>`: Is one of the following: `feature` or `feat` (for a new feature), `bugfix`
  (for... a bug fix), `chore` or `docs` for very trivial tasks (like fixing typos) 
  or updates to the documentation.
- `<SHORT_DESC>`: A short, human readable description of the topic addressed by
  the branch.

As such the process for starting on a new feature (for example) would be:

```console
git checkout main
git pull origin main
git checkout -b feature/add-this-new-shiny-thing
```

All PRs, once merged should leave the `main` branch in a *potentially*
deployable state. It's okay to have only one part of a feature merged _as long as_ this doesn't break existing features, 
and disable those which are incomplete.

Also as a courtesy to others, prior to pushing a branch to the repository please run
code formatting and linting tools. (For the backend, `black` is available)

[trunk-based]: https://trunkbaseddevelopment.com/