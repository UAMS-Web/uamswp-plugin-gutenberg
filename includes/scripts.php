<?php namespace UAMSWP\Plugin\Gutenberg;

class Scripts {


	public static function setup_classes() {

		// Load any of the /classes/... used
	}


	public static function init() {

		self::setup_classes();

		// TODO: Abstact out the enqueueing of scripts and styles. In the block would probably make the most sense.
		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_editor_assets' ) );
		add_action( 'enqueue_block_assets', array( __CLASS__, 'enqueue_frontend_assets' ) );
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'admin_enqueue_scripts' ) );
		add_action( 'init', array( __CLASS__, 'register_assets' ) );

	}


	public static function register_assets() {

		// $wds_version = get_theme_mod( 'wsu_wds_version', '2.x' );

		wp_register_script( 'uams_design_system_script_people_list', Plugin::get( 'url' ) . '/assets/dist/css/bundles/standalone/people-list/scripts.js', array(), UAMSWPPLUGINGUTENBERGVERSION, true ); //'https://cdn.web.wsu.edu/designsystem/' . $wds_version . '/dist/bundles/standalone/people-list/scripts.js', array(), UAMSWPPLUGINGUTENBERGVERSION, true );
		// wp_register_script( 'uams_design_system_script_hero_slider', 'https://cdn.web.wsu.edu/designsystem/2.x/dist/bundles/standalone/hero-slider/scripts.js', array(), UAMSWPPLUGINGUTENBERGVERSION, true );
		// wp_register_style( 'uams_design_system_script_hero_slider', 'https://cdn.web.wsu.edu/designsystem/2.x/dist/bundles/standalone/hero-slider/styles-wds.css', array(), UAMSWPPLUGINGUTENBERGVERSION );
	}


	public static function enqueue_block_editor_assets() {

		// $wds_version = get_theme_mod( 'wsu_wds_version', '2.x' );

		wp_enqueue_style(
			'uamswp-wds-editor-styles',
			Plugin::get( 'url' ) . '/assets/dist/css/bundles/uams-design-system.wordpress.editor.css',
			array(),
			Plugin::get( 'version' )
		);

		wp_enqueue_style(
			'uamswp-plugin-gutenberg-editor-styles',
			Plugin::get( 'url' ) . 'assets/dist/css/editor.css',
			array(),
			Plugin::get( 'version' )
		);

		// Block Editor
		wp_enqueue_script(
			'uamswp-plugin-gutenberg-editor-scripts',
			Plugin::get( 'url' ) . 'assets/dist/js/gutenberg-editor.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-dom-ready', 'wp-edit-post' ),
			Plugin::get( 'version' ),
			true
		);

	}


	public static function admin_enqueue_scripts( $hook ) {

		if ( 'post.php' === $hook || 'post-new.php' === $hook ) {
			$script  = 'const UAMSWP_DATA = {';
			$script .= 'siteUrl: "' . site_url() . '",';
			$script .= 'wpVersion: "' . get_bloginfo( 'version' ) . '",';
			$script .= '};';

			wp_add_inline_script( 'uamswp-plugin-gutenberg-editor-scripts', $script, 'before' );
		}

	}


	public static function enqueue_frontend_assets() {

		wp_enqueue_style(
			'wsu_design_system_icons',
			Plugin::get( 'url' ) . '/assets/dist/css/uams-icons.bundle.css',
			array(), 
			Plugin::get( 'version' ) 
		);

		wp_enqueue_style(
			'uamswp_design_system_css', 
			Plugin::get( 'url' ) . '/assets/dist/css/bundles/uams-design-system.css', 
			array(), 
			Plugin::get( 'version' ) 
		);

		wp_enqueue_style( 
			'uamswp_design_system_css_wordpress', 
			Plugin::get( 'url' ) . '/assets/dist/css/bundles/uams-design-system.wordpress.css', 
			array(), 
			Plugin::get( 'version' ) 
		);

		wp_enqueue_script( 
			'uamswp_design_system_js_init', 
			Plugin::get( 'url' ) . '/assets/dist/js/uams-design-system.init.js',  
			array(), 
			Plugin::get( 'version' ), 
			false 
		);

		wp_enqueue_script(
			'uamswp_design_system_js', 
			Plugin::get( 'url' ) . '/assets/dist/js/uams-design-system.js', 
			array(), 
			Plugin::get( 'version' ), 
			true 
		);

		// if ( is_singular() ) {
		// $id = get_the_ID();

		// if ( has_block( 'uamswp/hero-slider', $id ) ) {
		// wp_enqueue_style( 'uams_design_system_script_hero_slider' );
		// wp_enqueue_script( 'uams_design_system_script_hero_slider' );
		// }
		// }
	}

}

Scripts::init();
