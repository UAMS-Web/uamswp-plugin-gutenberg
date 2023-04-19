const rearrangeBlockCategoriesMap = {
    'core/code': 'advanced',
    'core/html': 'advanced',
    'core/buttons': 'text',
    'core/shortcode': 'text',
};

function rearrangeBlockCategories(settings, name) {
    if (rearrangeBlockCategoriesMap[name]) {
        settings.category = rearrangeBlockCategoriesMap[name];  
    }
    
    return settings;
}
  
wp.hooks.addFilter(
    'blocks.registerBlockType', 
    'uamswp-plugin-gutenberg/block-categories',
    rearrangeBlockCategories
);