<?php namespace UAMSWP\Plugin\Gutenberg;

class Blocks {


	protected static $register_blocks = array(
		'uamswp/news-list'   => 'Block_UAMSWP_News_List',
		'uamswp/row'         => 'Block_UAMSWP_Row',
		'uamswp/column'      => 'Block_UAMSWP_Column',
		'uamswp/banner'      => 'Block_UAMSWP_Banner',
		'uamswp/decorator'   => 'Block_UAMSWP_Decorator',
		'uamswp/news'        => 'Block_UAMSWP_News',
		'uamswp/callout'     => 'Block_UAMSWP_Callout',
		'uamswp/note'        => 'Block_UAMSWP_Note',
		'uamswp/hero'        => 'Block_UAMSWP_Hero',
		'uamswp/hero-slider' => 'Block_UAMSWP_Hero_Slider',
		'uamswp/image'       => 'Block_UAMSWP_Image',
		'uamswp/pagetitle'   => 'Block_UAMSWP_Page_Title',
		'uamswp/news-cards'  => 'Block_UAMSWP_News_Cards',
		'uamswp/accordion'   => 'Block_UAMSWP_Accordion',
		'uamswp/section'     => 'Block_UAMSWP_Section',
		'uamswp/people-list'         => 'Block_UAMSWP_People_List',
		'uamswp/button'              => 'Block_UAMSWP_Button',
		'uamswp/card'                => 'Block_UAMSWP_Card',
		'uamswp/card-group'          => 'Block_UAMSWP_Card_Group',
		'uamswp/carousel'          	 => 'Block_UAMSWP_Carousel',
		'uamswp/container'           => 'Block_UAMSWP_Container',
		'uamswp/menu'                => 'Block_UAMSWP_Menu',
		'uamswp/stat'                => 'Block_UAMSWP_Stat',
		'uamswp/sticky-nav'          => 'Block_UAMSWP_Sticky_Nav',
		'uamswp/outline-header'      => 'Block_UAMSWP_Outline_Header',
		'uamswp/overlap-advanced'    => 'Block_UAMSWP_Overlap_Advanced',
		'uamswp/overlap-column'      => 'Block_UAMSWP_Overlap_Column',
		'uamswp/overlap-spotlight'   => 'Block_UAMSWP_Overlap_Spotlight',
	);

	protected static $allowed_blocks = array(
		'uamswp/row',
		'uamswp/news',
		'uamswp/callout',
		'uamswp/banner',
		'uamswp/decorator',
		'uamswp/note',
		'uamswp/hero',
		'uamswp/hero-slider',
		'uamswp/image',
		'uamswp/pagetitle',
		'uamswp/news-cards',
		'uamswp/news-list',
		'uamswp/accordion',
		'uamswp/section',
		'uamswp/sticky-nav',
		'uamswp/people-list',
		'uamswp/button',
		'uamswp/card',
		'uamswp/container',
		'uamswp/card-group',
		'uamswp/carousel',
		'uamswp/az-index',
		'uamswp/programs-list',
		'uamswp/outline-header',
		'uamswp/overlap-advanced',
		'uamswp/overlap-spotlight',
		'uamswp/stat',
		'uamswp/menu',
		'bcn/breadcrumb-trail',
		'core/code',
		'core/embed',
		'core/freeform',
		'core/heading',
		'core/gallery',
		'core/html',
		'core/image',
		'core/list',
		'core/list-item',
		'core/paragraph',
		'core/quote',
		'core/reusableBlock',
		'core/separator',
		'core/shortcode',
		'core/spacer',
		'core/table',
		'core/video',
		'gravityforms/form',
	);


	public static function get( $property ) {

		switch ( $property ) {

			case 'register_blocks':
				return self::$register_blocks;

			default:
				return '';
		}

	}


	public static function setup_classes() {

		Plugin::load_class( 'block' );
		Plugin::load_class( 'uams-query' );
		Plugin::load_class( 'uams-image' );

	}


	public static function init() {

		self::setup_classes();

		add_filter( 'allowed_block_types', array( __CLASS__, 'remove_blocks' ) );

		add_action( 'init', array( __CLASS__, 'register' ) );

	}


	public static function register() {

		// Get blocks to register
		$blocks = self::$register_blocks;

		// Get the block directory
		$block_dir = Plugin::get( 'dir' ) . 'blocks/';

		foreach ( $blocks as $block => $class ) {

			// folder name should be the block name with the / replaced with - (i.e. uamswp/name -> uamspw-name)
			$block_folder = str_replace( '/', '-', $block );

			$block_class = __NAMESPACE__ . '\\' . $class;

			require_once $block_dir . $block_folder . '/block.php';

			// Call get('register_block') to check if the block should be registered, default is true in class-block.php
			if ( call_user_func( array( $block_class, 'get' ), 'register_block' ) ) {

				register_block_type(
					$block,
					array(
						'api_version'     => 2,
						'render_callback' => array( $block_class, 'render_block' ),
						'editor_script'   => 'uamswp-theme-wds-2-blocks',
					)
				);
			}
		}
	}


	public static function remove_blocks( $allowed_blocks ) {

		return self::$allowed_blocks;

	}

	/**
	 * Loop through default values and set defauts if they do not exist
	 *
	 * @param $args | array | Array of template values
	 * @param $default | array | Array of default values
	 */
	public static function parse_block_template_args( &$args, $default = array() ) {

		foreach ( $default as $key => $value ) {

			if ( ! isset( $args[ $key ] ) ) {

				$args[ $key ] = $value;

			}
		}

	}

}

Blocks::init();
