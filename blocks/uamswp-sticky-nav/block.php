<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Sticky_Nav extends Block {

	protected static $block_name    = 'uamswp/sticky-nav';
	protected static $default_attrs = array(
		'className'   => 'uams-sticky-nav',
	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/template.php';

		return ob_get_clean();

	}

}