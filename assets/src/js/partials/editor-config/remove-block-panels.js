function removeBlockPanels(settings, name) {
  settings.supports = _.assign(settings.supports, {
    typography: false,
  });

  return settings;
}

wp.hooks.addFilter(
  "blocks.registerBlockType",
  "uamswp-plugin-gutenberg/remove-block-panels",
  removeBlockPanels
);
