# Wookie Movies Tech Test
[![Build and tests](https://github.com/eloisetaylor5693/wookie-movies/actions/workflows/node.js.yml/badge.svg)](https://github.com/eloisetaylor5693/wookie-movies/actions/workflows/node.js.yml)

[Tech test instructions](./docs/TechTestInstructions.md)

## How to run
Prerequisite: node v16.10 or above
1. `npm install`
2. `npm run start`

### How to search for films in the running app

On the Browse Films screen, enter a search term in the search bar, and press enter. 
Eg batman

## Structure
Created the app using command: `npx create-react-app wookie-movies --template typescript`

- `components` - smaller building blocks to build up the site
- `helpers` - functions that can map/transform data
- `routes` - part of the routing so you can navigate
- `templates` - the whole page 
- `testData` - data for unit tests


## Delivered
- Browse films page
- Film details page
- Naviation from browse screen to film details screen on clicking a film's thumbnail
- Mostly represented the designs though not pixel-perfect
- Added testing 
- Searching for a film using the search bar from the Browse Films page

## Features not delivered
- Searching for a film using the search bar from the Film Details page
- Rating stars on the Film Details page


## Notes

- Avoided pixel-perfect design because without a tool like figma it's extremely time-consuming to find the correct fonts, SVGs etc. In a tool like figma I can click on an item and see colours/fonts/font weights/download the exact SVGs.  
- I would normally use certain libraries to make development easier eg Prettier, Storybook, Tailwind/HeadlessUI or other frameworks.  In the interests of time I chose not to and instead focus on feature completeness as much as possible.  Every 5 minutes here and there adds up until you realise you haven't done the actual feature yet.
- For routing I would usually use `nextjs` or `Gatsby` since they abstract away the routing logic (plus other benefits).  I found React routing without those frameworks to be much more time-consuming so opted to drop some features.  I haven't configured routing for navigating directly to a film's details just by the URL for example.  
