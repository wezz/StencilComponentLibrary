(function() {
    if (document.body.dataset["customComponentsInitiated"]) {
        return;
    }
    document.body.dataset["customComponentsInitiated"] = true;

    
  const s = document.createElement('script');
  s.setAttribute('type', 'module');
  s.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@wezz/stencilcomponentlibrary@#packageversion#/umd/loader.js');
  document.querySelector('head').appendChild(s);

})();
