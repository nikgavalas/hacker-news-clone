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
