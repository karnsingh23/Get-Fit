# Get Fit

A fitness tracking website

## Getting Started

To run this project loaclly do the following steps

```bash
  git clone repo-link
  cd repo-name
  npm i
  npm run dev
```

To use tailwind css

```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```
Add this in tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add this in src/index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In your main entry file main.jsx

```
import './index.css';
```