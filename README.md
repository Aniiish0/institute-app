# How to setup

## Run the below command in terminal

```sh
npm run setup
```

## Add environment variables

Add environment variables to process if in production environment or to `.env` file (check `.env.example` file) in local or development setup

```sh
VITE_MAP_API_KEY=<YOUR_API_KEY_FOR_GOOGLE_MAPS_EMBED_API>
VITE_BOTPRESS_BOT_ID=<YOUR_BOTPRESS_BOT_ID_FOR_CHATBOT>
```

**_Note_**:

- _To generate an API key for Google Maps embed API, use this [link](https://console.cloud.google.com/google/maps-apis/credentials)._
- _To use a Botpress bot ID, go to [Botpress page](https://botpress.com/)._

## Run the app

To run the app, run one of the below commands

_For development environment:_

```sh
npm run dev
```

_For production environment:_

```sh
npm run preview
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
