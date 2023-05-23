<?php
/**
 * Plugin Name: UAMSWP Gutenberg
 * Plugin URI: https://github.com/wsuwebteam/uamswp-plugin-gutenberg
 * Description: Gutenberg blocks for UAMS
 * Version: 1.16.0
 * Requires PHP: 7.3
 * Author: Washington State University, Danial Bleile
 * Author URI: https://web.wsu.edu/
 * Text Domain: uamswp-plugin-gutenberg
 */


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'UAMSWPPLUGINGUTENBERGVERSION', '1.16.0' );

add_action( 'after_setup_theme', 'uamswp_plugin_gutenberg_init' );

function uamswp_plugin_gutenberg_init() {

	define('UAMSWP_ROOT_URL', plugin_dir_url(__FILE__));
	define('UAMSWP_ROOT_PATH', plugin_dir_path(__FILE__));

	// Initiate plugin
	require_once __DIR__ . '/includes/plugin.php';

}
