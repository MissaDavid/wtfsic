# What the f\*\*\* should I cook?

An app for desperate veggos

## Getting Started

WTFSIC is currenlty a `client-first application`, written in [Python][python] using the [Django][django] Web Framework for the `backend`, and using the [create-react-app][cra] setup for the `frontend`. Dependencies and virtual environments are managed with [Poetry][poetry]. This is more of a coding exercise, so I might change my mind on the way about how I want to architecture this!

Anyway you will need Poetry, Python 3.8, `Node` >= 8.10 and `npm` installed.

### Backend

Everything in the backend will be done through Poetry. To install all dependencies, run:

```console
$ cd backend
$ poetry install
```

Then you can run the Django server with:

```console
$ poetry run manage.py runserver
```

(But if you're a lazy bum like me, you'll create an alias so you can run `prm runserver` instead)

### Front-end

You can read this [README][frontend-readme] for more details, but in a nutshell:

From the root, run

```console
$ cd wtfsic
$ npm i
```

Then you can run the local dev mode with `npm start`.

## Key Technologies

This project uses:

- [Django][django]
- [Django Rest Framework][drf]
- [React][react] (With `create-react-app`)

[python]: https://www.python.org/
[django]: https://www.djangoproject.com/
[cra]: https://create-react-app.dev/docs/getting-started/
[poetry]: https://python-poetry.org/docs/#installation
[frontend-readme]: ./wtfsic/README.md
[drf]: https://www.django-rest-framework.org
[react]: https://reactjs.org/
