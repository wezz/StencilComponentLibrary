

async function initiateLoader() {
  if (!import.meta.env.DEV) {
    // If in production build mode, then we fetch the full loader.
    const loaderModule = import.meta.glob('../dist/esm/loader.js');
    if (loaderModule['../dist/esm/loader.js']) {
      const loader = await loaderModule['../dist/esm/loader.js']();
      if (loader && loader.defineCustomElements) {
        loader.defineCustomElements();
      }
    }
  }
  else {
    // <!-- When in development mode we load the components from the stencil server -->
    // <script type="module" src="http://localhost:3333/build/components.esm.js"></script>
    const s = document.createElement('script');
    s.setAttribute('type', 'module');
    s.setAttribute('src', 'http://localhost:3333/build/components.esm.js');
    document.querySelector('head').appendChild(s);
  }
}

initiateLoader().then(() => {});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}