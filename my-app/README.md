# my-app

This repository is a personal Next.js practice project created to learn and experiment with different Next.js concepts.

## What this project includes

- Next.js `16.2.3` with the App Router
- React `19.2.4` and TypeScript support
- Tailwind CSS v4 styling
- Server and client component examples
- Data fetching from `jsonplaceholder.typicode.com`
- Basic navigation using `next/link`
- Nested routes in the `app/(users)` folder

## Pages & features

- `/` - Home page
- `/about` - About page
- `/server-comp` - Server component demo fetching posts on the server
- `/client-comp` - Client component demo fetching posts in the browser
- `/(users)/user1` - Simple user page example
- `/(users)/user2` - Another simple user page example

## How to run

From the `my-app` folder:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm run dev` - start development server
- `npm run build` - build production app
- `npm start` - start production server
- `npm run lint` - run ESLint

## Notes

This project was created for practice and learning. It is intentionally simple so I can focus on understanding the difference between server and client components, routing, and fetching data in Next.js.
