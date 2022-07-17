# Wookie Movies Tech Test

[Tech test instructions](./docs/TechTestInstructions.md)

## How to run
1. `npm install`
2. `npm run start`

## Structure
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

## Features not delivered
- Searching for a film using the search bar on the Browse Films page
- Rating stars on the Film Details page


## Notes

- Avoided pixel-perfect design because without a tool like figma, it's extremely time-consuming to find the correct fonts, SVGs etc. I could download the exact SVGs using figma or other design tools, so chose an image that looked similar.  
- I would notmally use more libraries to make development easier eg Prettier, Storybook, Tailwind/HeadlessUI or other frameworks.  In the interests of time I chose not to and instead focus on feature completeness as much as possible.  Every 5 minutes here and there adds up until you realise you haven't done the actual feature yet.
- For routing I would usually use `nextjs` or `Gatsby` since they abstract away the routing logic (plus other benefits).  I found React routing without those frameworks to be much more time-consuming so opted to drop some features.  I haven't configured routing where if you type a url of a valid film, it loads the details page.  