Package.describe({
  name: "icellan:moneybutton-config-ui",
  summary: "Blaze configuration templates for Money Button OAuth.",
  git: "https://github.com/icellan/meteor-moneybutton-config-ui.git",
  version: "1.0.0"
});

Package.onUse(function(api) {
  api.use('templating@1.2.13', 'client');

  api.addFiles('moneybutton_login_button.css', 'client');
  api.addFiles(
    ['moneybutton_configure.html', 'moneybutton_configure.js'],
    'client');
});
