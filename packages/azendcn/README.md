# azendcn

A React component library with Tailwind CSS — build your own Shadcn-style UI.

## Install

```bash
npm install azendcn
```

Peer dependencies (install if not already present):

```bash
npm install react react-dom clsx
```

## Tailwind setup

Components use Tailwind utility classes. In your app, add **azendcn** to Tailwind’s content so those classes are generated:

**Tailwind v4** (e.g. in `postcss.config.js` or `@config`):

Include the package in your content sources, for example in `tailwind.config.js` (v3) or in your main CSS with `@source` (v4):

```css
@import "tailwindcss";

/* If using Tailwind v4 with @source, add the package path */
@source "node_modules/azendcn/dist/**/*.js";
```

Or in **Tailwind v3** `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/azendcn/dist/**/*.{js,cjs}",
  ],
  // ...
};
```

## Usage

```tsx
import { Button, Input, ActivityIcon } from 'azendcn';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input label="Email" placeholder="you@example.com" />
      <Button leftIcon={<ActivityIcon className="size-4" />}>Activity</Button>
    </div>
  );
}
```

## Exports

- **Button** – `Button`, `ButtonProps`, `ButtonVariant`, `ButtonSize`
- **Input** – `Input`, `InputWithButton`, `InputProps`, `InputSize`, `LabelPosition`
- **Icons** – `ActivityIcon`, `BrushIcon`

## Build (for maintainers)

```bash
cd packages/azendcn && npm run build
```

From repo root:

```bash
npm run build:azendcn
```

## Publish to npm

1. Create an [npm account](https://www.npmjs.com/signup) and log in: `npm login`
2. In `packages/azendcn`, set `"name": "azendcn"` (or `@your-username/azendcn` for a scoped package).
3. Bump version in `packages/azendcn/package.json` (e.g. `0.1.0` → `0.1.1`).
4. Build: `npm run build -w azendcn` (from root) or `npm run build` (inside `packages/azendcn`).
5. Publish: `cd packages/azendcn && npm publish` (use `npm publish --access public` for a scoped package like `@your-username/azendcn`).

After that, anyone can run `npm install azendcn` and use your components.
