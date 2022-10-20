# monorepo starter

## Summary

This monorepo starter is created for simplifying the creation of a monorepo, reducing the setup cost and effort, as well as minimizing the onboarding time for new devs.

Created with:

- Nx workspace - v15.00
- React - v18.2
- Typescript - v4.8
- Tailwind - v3.1 (for web-01)

Other tech stacks are free to choose if new apps are needed to be created.

## Why monorepo?

> "A monorepo gives you the visibility to go through all the code base without clone and track down any dependencies" - Fireship, 2021

## Why nx?

Nx has integrated with a ton of tools that would be useful for developers during the development process. It also smartly handles all the dependencies and imports so less mannually error would be possible.

Even more, it does smart rebuilding, which means whenever there is a change in the code base, only the affected apps would be rebuilt. This feature would become more critical in the future once the monorepo scales.

Theoretically, Nx should take over all the possible commands from creating a new project, adding dependencies, to building all projects with `$ Nx .

## Repo structure

This monorepo contains 2 template web projects, <s> 1 mobile app project... </s> (currently not working), and a common used component library.

## Deployment

Both web projects are deployed on Netlify:

### _[web-01-demo](https://web-01-demo.netlify.app)_

### _[web-02-demo](https://web-02-demo.netlify.app)_

---

## Something more...

### automation deployment

### CI/CD

### automation testing
