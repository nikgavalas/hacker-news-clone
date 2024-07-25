# Hacker new clone

This project makes a simple hacker news clone using the hacker news API.
TODO: write a better description

Based on the mockups [here](https://www.figma.com/design/kVnHapDXCwUZrFqXx1yED2/front-end-assignment?node-id=0-1)

# Getting Started

## 1. Clone the repository

```bash
git clone
```

## 2. Install dependencies

```bash
cd hacker-news-clone
npm install
```

## 3. Start the development server

```bash
npm run dev
```

# Tech

## State management

I used recoil for state management. Recoil is a new state management library
from Facebook that is similar to redux but with a simpler API. All the state 
is persisted in local storage so that the user can refresh the page and the
state will be preserved.

## A note about file casing

I use kebab-case for all file names. This is a personal preference because when
it comes to page names, I find they are kebab-case in the URL so it makes sense
to have the file names in kebab-case as well. Most React projects use PascalCase
for the file names but then it's inconsistent. So I just use kebab-case for all
file names for consistency.

## Testing

I use Cypress for both E2E and component testing. I only have some basic tests
for the components as I started running out of time. I find it's better to at 
least have the system setup to allow for more tests to be added later.

I like using one testing library for everything so there is less setup and
configuration to worry about. I find that using one testing library for
everything makes it easier to get started with testing and requires less context
switching.