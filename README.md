# Hacker News Clone

This project makes a simple hacker news clone using the hacker news API. This 
is a complete application using the latest versions of React, Next.js, and
Recoil. I also use NextUI for the design system. Feel free to clone this and
use it as a starting point for your own projects.

Certainly my code styling and lint rules are opinionated. I have a lot of
experience with React and I have found that these rules work well for me. 

Here is the list of features I added:

- [x] Responsive design
- [x] NextUI for the design system
- [x] Light and dark mode
- [x] Display a list of latest stories
- [x] Infinite scroll
- [x] Star stories so you can view them later on the starred page
- [x] Persistent state via local storage
- [x] Dim the stories that have been read
- [x] View the comments of a story (click the comments text)
- [x] Component and E2E tests
- [x] GitHub actions for CI/CD
- [x] Deployed to Vercel

## Getting Started

### 1. Clone the repository

```bash
git clone
```

### 2. Install dependencies

```bash
cd hacker-news-clone
npm install
```

### 3. Start the development server

```bash
npm run dev
```

## Tech

### State management

I use RecoilJS for state management. Recoil is a new state management library
from Facebook that is similar to redux but with a simpler API. Separately using
hooks, the state is persisted in local storage so that the user can refresh the
page and the state will be preserved.

I chose to keep the local storage state separate from the Recoil state so that
the state management stays very simple.

### A note about file casing

I use kebab-case for all file names. This is a personal preference because when
it comes to page names, I find they are kebab-case in the URL so it makes sense
to have the file names in kebab-case as well. Most React projects use PascalCase
for the file names but then it's inconsistent. So I just use kebab-case for all
file names for consistency.

### Testing

I use Cypress for both E2E and component testing. I only have some basic tests
for the components as I started running out of time. I find it's better to at 
least have the system setup to allow for more tests to be added later.

I like using one testing library for everything so there is less setup and
configuration to worry about. I find that using one testing library for
everything makes it easier to get started with testing and requires less context
switching.

To open the test runner:

```bash
npm run cypress:open
```
