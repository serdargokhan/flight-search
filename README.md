<h1>
  <a href="https://flight-search-evcx.vercel.app" target="_blank">Flight Search</a>
</h1>

\*\*\*There are two flight details for Dalaman Airport to Samsun Çarşamba Airport on 10th of September.\*\*\*

## 🛠 Installation & Set Up

1. Clone the repository

    ```sh
    git clone https://github.com/serdargokhan/flight-search.git
    ```

2. Navigate into the directory

    ```sh
    cd flight-search
    ```

3. Install dependencies

    ```sh
    pnpm install
    ```

4. Start the development server

    ```sh
    pnpm dev
    ```

## 🚀 Building and Running for Production

1. Generate a production build

    ```sh
    pnpm build
    ```

2. Preview the site as it will appear once deployed

    ```sh
    pnpm start
    ```

## 📁 Folder Structure

```
📦 flight-search
├─ .eslintrc.json
├─ .gitignore
├─ README.md
├─ next.config.js
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.cjs
├─ prettier.config.js
├─ public
│  ├─ favicon.ico
│  └─ site-logo.svg
├─ src
│  ├─ components
│  │  ├─ AirportSelectBox.tsx
│  │  ├─ FlightList
│  │  │  ├─ ListItem.tsx
│  │  │  └─ index.tsx
│  │  ├─ shared
│  │  │  ├─ NextFont.tsx
│  │  │  ├─ NextImage.tsx
│  │  │  ├─ NextLink.tsx
│  │  │  └─ index.ts
│  │  └─ ui
│  │     ├─ Button.tsx
│  │     ├─ Input.tsx
│  │     ├─ Label.tsx
│  │     └─ index.ts
│  ├─ layouts
│  │  └─ MainLayout
│  │     ├─ Footer.tsx
│  │     ├─ Navbar.tsx
│  │     └─ index.tsx
│  ├─ pages
│  │  ├─ _app.tsx
│  │  ├─ _document.tsx
│  │  ├─ api
│  │  │  ├─ airports.ts
│  │  │  └─ flights.ts
│  │  └─ index.tsx
│  ├─ styles
│  │  └─ globals.css
│  └─ utils
│     ├─ cn.ts
│     ├─ delay.ts
│     ├─ formatCurrency.ts
│     ├─ formatDateToHour.ts
│     └─ index.ts
├─ tailwind.config.ts
└─ tsconfig.json
```
