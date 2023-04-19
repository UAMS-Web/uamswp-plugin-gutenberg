<?php namespace UAMSWP\Plugin\Gutenberg;

class Block_UAMSWP_Hero_Slider extends Block {

	protected static $block_name    = 'uamswp/hero-slider';
	protected static $default_attrs = array(
		'className'     => '',
		'autoplay'      => false,
		'autoplayDelay' => 5000,
	);


	public static function render( $attrs, $content = '' ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
